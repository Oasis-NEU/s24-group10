import { createClient } from "@supabase/supabase-js";

const sb_url: string = import.meta.env.VITE_SB_URL
const sb_key: string = import.meta.env.VITE_SB_KEY

export const supabase = createClient(sb_url, sb_key);