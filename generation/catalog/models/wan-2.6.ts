import { t2v, videoModel } from "../defaults"
import type { ModelEntry } from "../types"

const base = videoModel(
  "wan-2.6",
  "Wan 2.6",
  { start: 1 },
  t2v("wan/v2.6/text-to-video"),
  {
    icon: "wan",
    order: 53,
  }
)

const wan26: ModelEntry = {
  ...base,
  settings: {
    ...base.settings,
    duration: { type: "range", min: 5, max: 15, step: 5, default: 5 },
  },
}

export default wan26
