// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
// import Gallery from './components/gallery'
// import Profile from './components/profile_props'
// import Holder from './components/square'
// import TodoList from './qcomps/todos';

import ProfileMistake from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import Gallery from './qcomps/gallery_props';
import PackingList from './qcomps/props_item';

/**
 * Replace the return value to display the function you want.
 * @returns a function
 */
export default function Home() {
  return (
    <PackingList />
  )
}
