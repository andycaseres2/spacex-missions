import React from 'react'
import { useState, useEffect } from 'react'
import * as API from '../services/launches'
import { Heading } from '@chakra-ui/react'
import { LaunchItem } from './LaunchItem'

export const LaunchList = () => {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getallLaunches().then(setLaunches).catch(console.error)
  }, [])
  return (
    <>
      <Heading align='center' as='h1' size='xl' m={4}>
        SpaceX Launches{' '}
      </Heading>
      {launches.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  )
}
