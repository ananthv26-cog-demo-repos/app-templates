import { t2v, videoModel } from "../defaults"
import type { ModelEntry } from "../types"

const base = videoModel(
  "minimax-h3",
  "MiniMax H3",
  { start: 1 },
  t2v("minimax/h3/text-to-video"),
  {
    icon: "minimax",
    order: 55,
  }
)

const minimaxH3: ModelEntry = {
  ...base,
  settings: {
    ...base.settings,
    resolution: { type: "enum", values: ["2K"], default: "2K" },
  },
}

export default minimaxH3
