'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  router.push('/template1')
  return (
    <div>Redirecting...</div> // Placeholder content while redirecting
  )
}



