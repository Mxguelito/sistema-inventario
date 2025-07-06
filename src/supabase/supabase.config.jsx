import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY

console.log("URL:", supabaseUrl)
console.log("ANON KEY:", supabaseAnonKey)

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
