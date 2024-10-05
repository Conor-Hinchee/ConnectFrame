import { useState, useEffect } from 'react'
import { supabase } from '@/utils/supabase'
import SlideShow from '@/components/SlideShow'
import Auth from '@/components/Auth'
import Account from '@/components/Account'
import AdminPanel from '@/components/AdminPanel'
import SpeedDialNavigation from '@/components/SpeedDialNavigation'
import { View, AppState } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { SafeAreaView } from 'react-native-safe-area-context';


// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <SlideShow previewMode /> */}
      {/* {session?.user ? <Account key={session.user.id} session={session} /> : <Auth />} */}
      <AdminPanel />
      <SpeedDialNavigation />
    </SafeAreaView>
  )
}
