import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Image from 'next/image';

interface SingleImage {
    imageSrc: string, text: string, link: string,
}

const SingleImage = ({ imageSrc, text, link, }: SingleImage) => {
    return (
        <Flex align={'center'} justify={'center'} gap={'36px'} >
            <Box>
                <Image
                    src={imageSrc}
                    width={222}
                    height={300}
                    alt="companyLogo"

                />
            </Box>
            <Box>
                <Text fontSize={{ lg: '36px', base: '20px' }} mb={'32px'}>
                    {text}
                </Text>
                <Box as='span'>
                    <Link href={link} fontSize={'md'} color={'#B5862D'}>Explore  <Icon as={ArrowForwardIcon} width={'20px'} height={'13px'} /></Link>
                </Box>
            </Box>
        </Flex>
    )
}

export default SingleImage