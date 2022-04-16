import React from 'react'
import { Box, Button, Flex, Icon, Spacer, Tag, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { BsFillCalendar2WeekFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const LaunchItem = (launch) => {
  return (
    <>
      <Box bg='gray.100' p={4} m={4} borderRadius='lg'>
        <Flex display='flex'>
          <Text fontSize='xl'>
            Mission <strong>{launch.mission_name}</strong> ({launch.launch_year}
            )
          </Text>
          <Spacer />
          <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
            {launch.launch_success ? 'Success' : 'Failure'}
          </Tag>
        </Flex>
        <Flex align='center'>
          <Icon color='gray.500' sm='lg' as={BsFillCalendar2WeekFill} />

          <Text fontSize='x' ml={2} color='gray.500'>
            {dayjs(launch.launch_date_local)
              .locale('es')
              .format('D MMMM, YYYY')}
          </Text>
        </Flex>
        <Link to={`/launch/${launch.flight_number}`}>
          <Button mt={2} colorScheme='purple'>
            More Details
          </Button>
        </Link>
      </Box>
    </>
  )
}
