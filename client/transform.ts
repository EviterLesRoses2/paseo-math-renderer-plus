import type { PluginTimelineTransformerContribution } from "@getpaseo/plugin/client";
import { MATH_KIND } from "../shared/contracts";
import { parseDocument } from "../shared/markdown";

export const transformMessage: PluginTimelineTransformerContribution<"assistant_message">["transform"] = ({ item, phase }) => {
  // Parse the completed reply once without remounting formula cards during streaming.
  if (phase === "streaming") return undefined;
  if (!/(?:\$|\\[[(]|(?:`{3,}|~{3,})[ \t]*math\b)/.test(item.text)) return undefined;
  const parsed = parseDocument(item.text);
  if (!parsed?.formulas) return undefined;
  // Let the host derive source identity; explicit IDs are plugin-global.
  return { items: [{ type: "plugin", kind: MATH_KIND, version: 1, data: { text: item.text } }] };
};
