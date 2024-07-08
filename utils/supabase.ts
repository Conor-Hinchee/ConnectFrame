import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://opksvuliqokggyozyhmq.supabase.com';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wa3N2dWxpcW9rZ2d5b3p5aG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyMDk2ODQsImV4cCI6MjAzNTc4NTY4NH0.aAgkE1SOuiE08MEoizO24rVGykUnnvxBcDxZXc0nVQI';
// This key is safe to use in a browser if you have enabled Row Level Security for your tables and configured policies.


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
