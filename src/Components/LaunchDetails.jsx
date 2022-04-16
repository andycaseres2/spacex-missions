import React from 'react'
import { useState, useEffect } from 'react'
import * as API from '../services/launches'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { Box, Text, Flex, Tag, Spacer, Button } from '@chakra-ui/react'

export const LaunchDetails = () => {
  const [launch, setLaunch] = useState({})
  const { launchId } = useParams()

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.error)
  }, [launchId])

  return (
    <Box bg='gray.100' p={4} m={4} borderRadius='lg'>
      {!launch ? (
        <div>Loading....</div>
      ) : (
        <>
          <Flex display='flex'>
            <Text fontSize='xl'>
              Mission <strong>{launch.mission_name}</strong> (
              {launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
              {launch.launch_success ? 'Success' : 'Failure'}
            </Tag>
          </Flex>
          <Box>
            Rocket :{' '}
            <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
              {launch.rocket?.rocket_name}
            </Link>{' '}
            <Text>
              <Button mt={4} mb={3} colorScheme='green'>
                <a href={launch.links?.wikipedia} target='__blank'>
                  Wikipedia
                </a>
              </Button>
              <Button ml={2} mt={4} mb={3} colorScheme='blue'>
                <a href={launch.links?.article_link} target='__blank'>
                  Article
                </a>
              </Button>
            </Text>
            <Text></Text>
          </Box>
        </>
      )}
    </Box>
  )
}
