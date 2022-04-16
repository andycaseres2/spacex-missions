import { Image, Link } from '@chakra-ui/react'
import logo from './assets/spacex-logo.png'
;('react-icons/bs')

import { Route, Routes } from 'react-router'
import { LaunchDetails } from './Components/LaunchDetails'
import { LaunchList } from './Components/LaunchList'
import { RocketDetails } from './Components/RocketDetails'

export function App() {
  return (
    <>
      <Link href='/'>
        <Image m={4} src={logo} alt='SpaceX' width={300} />
      </Link>
      <Routes>
        <Route path='/' element={<LaunchList />} />
        <Route path='/launch/:launchId' element={<LaunchDetails />} />
        <Route path='/rockets/:rocketId' element={<RocketDetails />} />
      </Routes>
    </>
  )
}
