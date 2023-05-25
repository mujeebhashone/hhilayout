import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon } from "@chakra-ui/react";
import Image from 'next/image';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';

const Banner = () => {
    return (

        <Flex bgImage={'./assets/images/Group86.png'} bgPosition={'center'} bgSize={'cover'} flexDir={'column'} bgRepeat={'no-repeat'} height={'100vh'} justify={'end'} align={'center'} gap={'200px'}>
            <Flex align={'center'} justify={'center'} flexDir={'column'}>
                <Text fontSize={{ lg: '50px', base: '22px' }} fontWeight={'medium'} color={'white'}>When We Say All-In-One, We Mean It</Text>
                <Text fontSize={'lg'} color={'white'} mt={'10'}>
                    Just think about how much fun you,re gonna have.
                </Text>
                <Box position={'relative'} mt={'12'}>
                    <Input position={'relative'} placeholder='What are you looking for?' _placeholder={{ color: 'black' }} bg={'white'} width={'500px'} height={'35px'} border={'2px solid #B5862D'} />
                    <Flex width={'40px'} height={'30px'} bg={'#B5862D'} alignItems={'center'} justifyContent={'center'} borderRadius={'5%'} position={'absolute'} top={'7%'} right={"1%"}>

                        <Icon as={SearchIcon} width={'30px'} height={'20px'} color={'white'} />
                    </Flex>
                </Box>

            </Flex>

            <Flex display={{ lg: 'flex', base: 'none' }} width={'90%'} marginX={'auto'} align={'center'} justify={'space-around'} bg={'white'} py={'6'} borderTopRightRadius={'20px'} borderTopLeftRadius={'20px'} >
                <Flex align={'center'} justify={'center'} gap={'15px'}>
                    <Box>
                        <Image
                            src="/assets/images/Group207.png"
                            width={27}
                            height={34}
                            alt="icons"
                        />
                    </Box>
                    <Text>One Point of Contact</Text>
                </Flex>
                <Flex align={'center'} justify={'center'} gap={'15px'}>
                    <Box>
                        <Image
                            src="/assets/images/Group209.png"
                            width={27}
                            height={34}
                            alt="icons"
                        />
                    </Box>
                    <Text>Tailor-Made Services</Text>


                </Flex>
                <Flex align={'center'} justify={'center'} gap={'15px'}>

                    <Box>
                        <Image
                            src="/assets/images/Group213.png"
                            width={27}
                            height={34}
                            alt="icons"
                        />
                    </Box>
                    <Text>Guaranteed Professionalism</Text>
                </Flex>
                <Flex align={'center'} justify={'center'} gap={'15px'}>
                    <Box>
                        <Image
                            src="/assets/images/Group215.png"
                            width={27}
                            height={34}
                            alt="icons"
                        />
                    </Box>
                    <Text>Language Barriers Resolved</Text>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default Banner