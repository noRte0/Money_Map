import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = () => {
  return (
    <aside className="right-sidebar bg-gray-800">
    <section className="flex flex-col pb-8">
      <div className="profile-banner" />
      <div className="profile">
        <div className="profile-img">
          <span className="text-5xl font-bold text-blue-500">N</span>
        </div>
        <div className="profile-details">
          <h1 className='profile-name'>
          noRte
          </h1>
          <p className="profile-email">
          noRte
          </p>
        </div>
      </div>
    </section>
    <section className="banks">
      <div className="flex w-full justify-between">
        <h2 className="header-2">My List</h2>
        <Link href="/" className="flex gap-2">
          <Image 
             src="/icons/plus.svg"
            width={20}
            height={20}
            alt="plus"
          />
          <h2 className="text-14 font-semibold text-white">
            Add Transaction
          </h2>
        </Link>
      </div>
        <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
          <div className='relative z-10'>
            <BankCard/>
          </div>
            <div className="absolute right-0 top-8 z-0 w-[90%]">
              <BankCard/>
            </div>
        </div>
    </section>
  </aside>
  )
}

export default RightSidebar