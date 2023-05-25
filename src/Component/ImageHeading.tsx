import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';

interface ImageHeading {
    heading: string, paragraph: string,
}

const ImageHeading = ({ heading, paragraph }: ImageHeading) => {
    return (
        <Flex height={'100%'} align={'flex-start'} justify={'flex-end'} flexDir={'column'} p={'20'} gap={'20px'} >
            <Text color={'white'} fontSize={'2xl'}>{heading}</Text>
            <Text color={'white'} fontSize={'md'}>{paragraph}</Text>

            <Box as='span'>
                <Link href='' fontSize={'md'} color={'white'}>Explore  <Icon as={ArrowForwardIcon} width={'20px'} height={'13px'} /></Link>
            </Box>
        </Flex >
    )
}

export default ImageHeading