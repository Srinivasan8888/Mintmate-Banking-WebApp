import Link from 'next/link'
import React from 'react'

const RecentTransactions = ({accounts, transactions =[], appwriteItemId,  page = 1} : RecentTransactionsProps) => {
  return (
    <section className='recent-transaction'>
        <header className='flex item-center justify-between'>
            <h2 className='recent-transcation-label'>
                Recent Transaction
            </h2>
            <Link href={'/transaction-history/?id=${appwriteItemId}'} className='view-all-btn'>
            View all
            </Link>
        </header>
    </section>
  )
}

export default RecentTransactions