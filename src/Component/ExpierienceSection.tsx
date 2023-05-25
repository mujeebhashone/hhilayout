import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import Image from 'next/image';

import SectionHeading from './SectionHeading';

const ExpierienceSection = () => {
    return (
        <Box as='section'>
            <Container maxW={'80%'}>
                <Box>
                    <SectionHeading heading='Experience Life in Ibiza' para='Read the Latest News, Articles, & Blogs ' para1='Never Miss an Update Stay connected with us to know about the latest updates, news, offers, and much more' />

                </Box>
                <Flex align={'center'} justify={'space-between'} flexDir={{ lg: 'row', base: 'column' }} gap={'5'}>
                    <Box>
                        <Box mb={'5'}>
                            <Image
                                src="/assets/images/Rectangle57.png"
                                width={469}
                                height={335}
                                alt="icons"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </Box>

                        <Text fontWeight={'bold'}>2023-02-10</Text>
                        <Text mb={'8'}>Top 4 Locations to Go Sailing</Text>

                        <Box as='span'>
                            <Link href='' fontSize={'md'} color={'#B5862D'}>Explore  <Icon as={ArrowForwardIcon} width={'20px'} height={'13px'} /></Link>
                        </Box>

                    </Box>
                    <Box>
                        <Box mb={'5'}>
                            <Image
                                src="/assets/images/Rectangle55.png"
                                width={469}
                                height={335}
                                alt="icons"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </Box>

                        <Text fontWeight={'bold'}>2023-02-10</Text>
                        <Text mb={'8'}>Top 4 Locations to Go Sailing</Text>

                        <Box as='span'>
                            <Link href='' fontSize={'md'} color={'#B5862D'}>Explore  <Icon as={ArrowForwardIcon} width={'20px'} height={'13px'} /></Link>
                        </Box>

                    </Box>
                    <Box>
                        <Box mb={'5'}>
                            <Image
                                src="/assets/images/Rectangle59.png"
                                width={469}
                                height={335}
                                alt="icons"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                        </Box>

                        <Text fontWeight={'bold'}>2023-02-10</Text>
                        <Text mb={'8'}>Top 4 Locations to Go Sailing</Text>

                        <Box as='span'>
                            <Link href='' fontSize={'md'} color={'#B5862D'}>Explore  <Icon as={ArrowForwardIcon} width={'20px'} height={'13px'} /></Link>
                        </Box>

                    </Box>
                </Flex>

            </Container>
        </Box>


    )
}

export default ExpierienceSection