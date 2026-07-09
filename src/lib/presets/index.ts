import { defaultPreset } from "./default";
import { klimatechLubinPreset } from "./klimatech-lubin";
import type { SitePreset } from "./types";

export type PresetId = "default" | "klimatech-lubin";

export const PRESETS: Record<PresetId, SitePreset> = {
  default: defaultPreset,
  "klimatech-lubin": klimatechLubinPreset,
};

export const PRESET_IDS = Object.keys(PRESETS) as PresetId[];

const DEFAULT_PRESET_ID: PresetId = "klimatech-lubin";

export function getActivePreset(): SitePreset {
  const raw = import.meta.env.VITE_CITY_PRESET as string | undefined;
  if (raw && raw in PRESETS) {
    return PRESETS[raw as PresetId];
  }
  return PRESETS[DEFAULT_PRESET_ID];
}

export type {
  FaqItem,
  FormOptionGroup,
  GalleryItem,
  ReviewItem,
  ServiceIcon,
  ServiceItem,
  SitePreset,
} from "./types";
