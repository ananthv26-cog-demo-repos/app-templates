import { t2v, videoModel } from "../defaults"
import type { ModelEntry } from "../types"

const base = videoModel(
  "ltx-2.5-fast",
  "LTX 2.5 Fast",
  { start: 1 },
  t2v("lightricks/ltx-2.5/text-to-video/fast"),
  { icon: "ltx", order: 63 }
)

const ltx25Fast: ModelEntry = {
  ...base,
  settings: {
    ...base.settings,
    duration: { type: "range", min: 6, max: 10, step: 2, default: 6 },
  },
}

export default ltx25Fast
