import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL || "https://opksvuliqokggyozyhmq.supabase.co",
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wa3N2dWxpcW9rZ2d5b3p5aG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyMDk2ODQsImV4cCI6MjAzNTc4NTY4NH0.aAgkE1SOuiE08MEoizO24rVGykUnnvxBcDxZXc0nVQI",
    {
        auth: {
            storage: AsyncStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
        },
    })
