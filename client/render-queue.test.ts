import { describe, expect, it, vi } from "vitest";
import { enqueueRender } from "./render-queue";

describe("formula request queue", () => {
  it("limits concurrency, skips canceled queued work and continues after requests fail", async () => {
    const unblocked: Array<() => void> = [];
    const signal = new AbortController().signal;
    const start = vi.fn(() => new Promise<void>(resolve => unblocked.push(resolve)));
    const pending = Array.from({ length: 4 }, () => enqueueRender(signal, start));
    const controller = new AbortController();
    const skipped = vi.fn(() => Promise.resolve());
    const canceled = enqueueRender(controller.signal, skipped).catch(error => error);
    const error = new Error("RPC failed");
    const failing = enqueueRender(signal, () => Promise.reject(error)).catch(error => error);
    const last = enqueueRender(signal, () => Promise.resolve("done"));

    await Promise.resolve();
    expect(start).toHaveBeenCalledTimes(4);
    controller.abort();
    expect(await canceled).toBeInstanceOf(Error);
    expect(skipped).not.toHaveBeenCalled();
    unblocked.shift()?.();
    expect(await failing).toBe(error);
    expect(await last).toBe("done");
    unblocked.forEach(finish => finish());
    await Promise.all(pending);
  });
});
