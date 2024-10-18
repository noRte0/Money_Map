"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LeftSidebar = () => {
  return (
    <section className="sidebar">
    <nav className="flex flex-col gap-4">
      <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
        <Image 
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="SwiFt logo"
          className="size-[24px] max-xl:size-14"
        />
        <h1 className="sidebar-logo">NUH UH</h1>
      </Link>
    </nav>
  </section>
  )
}
export default LeftSidebar