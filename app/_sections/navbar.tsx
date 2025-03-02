import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex flex-row items-center justify-center p-4 bg-amber-500  w-full  position:sticky top-0'>
        <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>

</Tabs>

    </div>
  )
}
