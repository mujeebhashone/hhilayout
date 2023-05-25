import React from 'react'
import Image from 'next/image';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaPinterest, FaYoutubeSquare, FaLinkedin, FaSpotify } from 'react-icons/fa';

import { Box, Container, Flex, Heading, Text, Input, Icon, Link, Button, UnorderedList, ListItem } from "@chakra-ui/react";


const Footer = () => {
    return (
        <Box as='footer' py={{ lg: '28', base: '5' }} px={{ lg: '24', base: '12' }} bg={'#342F2C'}>
            <Container maxW={'100%'}>
                <Flex justify={'space-between'} flexDir={{ lg: 'row', base: 'column' }}>
                    <Box width={'30%'}>
                        <Box mb={'5'}>
                            <Image
                                src="/assets/images/hhilogo.png"
                                width={300}
                                height={50}
                                alt="icons"
                            />
                        </Box>
                        <Text mb={'10'} color={'white'}>
                            Hoy Hoy Ibiza is a diverse platform offering third-party services to connect people with top-notch service providers in Ibiza. We partner with professionals to ensure an unforgettable stay.
                        </Text>
                        <Heading fontSize={'md'} mb={'5'} color={'white'}>
                            SUBSCRIBE TO OUR NEWSLETTER
                        </Heading>
                        <Text mb={'5'} color={'white'}>Get the latest updates</Text>
                        <Flex>
                            <Input placeholder='Enter your email address' type='email' height={'50px'} borderRadius={'none'} />
                            <Button bg={'#B5862D'} color={'white'} width={'178px'} height={'50px'} borderRadius={'none'}>Submit</Button>

                        </Flex>

                    </Box>
                    <Box my={{ lg: '0', base: '10' }}>
                        <Heading fontSize={'md'} color={'white'} mb={'12'} fontWeight={'normal'}>Quick Links</Heading>
                        <UnorderedList color={'white'} fontWeight={'normal'} listStyleType={'none'} ml={'0'} marginInlineStart={'0'}>
                            <ListItem mb={'5'}><Link>Home</Link></ListItem>
                            <ListItem mb={'5'}><Link>About</Link></ListItem>
                            <ListItem mb={'5'}><Link>Services</Link></ListItem>
                            <ListItem><Link>Contact us</Link></ListItem>
                        </UnorderedList>

                    </Box>

                    <Box>
                        <Heading fontSize={'md'} color={'white'} mb={'12'} fontWeight={'normal'}>Subscribe</Heading>
                        <UnorderedList color={'white'} fontWeight={'normal'} listStyleType={'none'} marginInlineStart={'0'} >
                            <ListItem mb={'5'}><Link>Subscribe to newsletter
                            </Link></ListItem>
                            <ListItem mb={'5'}><Link>Create an account
                            </Link></ListItem>
                            <ListItem mb={'5'}><Link>Login
                            </Link></ListItem>
                            <ListItem ><Link>Become a partner
                            </Link></ListItem>
                        </UnorderedList>

                    </Box>

                    <Box my={{ lg: '0', base: '10' }}>
                        <Heading fontSize={'md'} color={'white'} mb={'12'} fontWeight={'normal'}>Contact</Heading>
                        <UnorderedList color={'white'} fontWeight={'normal'} listStyleType={'none'} marginInlineStart={'0'}>
                            <ListItem mb={'5'}>info@hoyhoyibiza.com
                            </ListItem>
                            <ListItem mb={'5'}>+34 611 26 85 00
                            </ListItem>
                            <ListItem>Office Hours (From 9:00h to 17:00h)</ListItem>

                        </UnorderedList>
                        <Flex justify={'center'} align={'center'} gap={'20px'} my={'10'}>
                            <Icon as={FaFacebookSquare} color={'white'} />
                            <Icon as={FaTwitterSquare} color={'white'} />
                            <Icon as={FaInstagramSquare} color={'white'} />
                            <Icon as={FaPinterest} color={'white'} />
                            <Icon as={FaYoutubeSquare} color={'white'} />
                            <Icon as={FaLinkedin} color={'white'} />
                            <Icon as={FaSpotify} color={'white'} />

                        </Flex>
                        <Box pl={'10'}>
                            <Image
                                src="/assets/images/nopath.png"
                                width={216}
                                height={91}
                                alt="icons"
                            />
                        </Box>


                    </Box>
                </Flex>
            </Container>

        </Box>
    )
}

export default Footer