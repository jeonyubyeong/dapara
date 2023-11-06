'use client'

import {useDispatch} from 'react-redux'
import CartSidebar from "./Cartsidebar"
import Header from "./Header"
import { useEffect } from 'react'
import { hideLoading } from '@/redux/slices/cartSlice'

export default function App({children}) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])

  return(
    <div>
      <div className="mr-32">
        <Header />
        <main className="p-4">{children}</main>
      </div>
      <CartSidebar />
    </div>
  )
}