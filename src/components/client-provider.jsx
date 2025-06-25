'use client'

import { SessionProvider } from 'next-auth/react'
import supabase from '@/lib/supabaseClient';

export default function ClientProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>
}
