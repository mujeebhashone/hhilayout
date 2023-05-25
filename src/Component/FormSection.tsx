import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link, Textarea, Button } from "@chakra-ui/react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from 'next/image';




const FormSection = () => {
    return (
        <Box as='form' mt={'24'}>
            <Container maxW={'100%'} px={'0'} >
                <Flex justify={{ lg: 'flex-end', base: 'center' }} flexDir={{ lg: 'row', base: 'column' }}>
                    <Box bg={'black'} py={{ lg: '24', base: '12' }} px={{ lg: '20', base: '10' }}>
                        <Text color={'white'} fontSize={'5xl'}>Contact us</Text>
                        <Text color={'white'} fontSize={'lg'} mb={'6'}>Drop us a line below, and we,ll get back to you as soon as possible.</Text>
                        <Box bg={'white'} px={'4'} py={'4'}>
                            <Input placeholder='Name' type='name' borderStyle={'none'} fontWeight={'semibold'} borderBottom={'1px solid #CACACA;'} borderRadius={'0'} mb={'7'} />
                            <Input placeholder='Email' type='email' borderStyle={'none'} fontWeight={'semibold'} borderBottom={'1px solid #CACACA;'} borderRadius={'0'} mb={'7'} />
                            <PhoneInput
                                country={'us'}


                            />
                            <Textarea placeholder='Message' borderStyle={'none'} mt={'7'} borderBottom={'1px solid #CACACA;'} fontWeight={'semibold'} />
                            <Button bg={'#B5862D'} color={'black'} borderRadius={'md'} px={'5'} mt={'7'} fontWeight={'semibold'}> Request A Quote</Button>

                        </Box>
                        <Flex justify={'flex-start'} align={'center'} gap={'20px'} mt={'12'}>
                            <Box>
                                <Image
                                    src="/assets/images/Image55.png"
                                    width={23}
                                    height={19}
                                    alt="icons"

                                />
                            </Box>
                            <Text color={'white'}>info@hoyhoyibiza.com</Text>

                        </Flex>
                        <Flex justify={'flex-start'} align={'center'} gap={'20px'} mt={'7'}>
                            <Box>
                                <Image
                                    src="/assets/images/Image56.png"
                                    width={23}
                                    height={19}
                                    alt="icons"

                                />
                            </Box>
                            <Text color={'white'}>( +34 971 310 899)</Text>

                        </Flex>
                        <Flex justify={'flex-start'} align={'center'} gap={'20px'} mt={'7'}>
                            <Box>
                                <Image
                                    src="/assets/images/Image57.png"
                                    width={23}
                                    height={19}
                                    alt="icons"

                                />
                            </Box>
                            <Text color={'white'}>Carrer de Vicente Cuervo, 11, 1º 1ª 07800 Ibiza, Spain
                            </Text>

                        </Flex>
                        <Flex justify={'flex-start'} align={'center'} gap={'20px'} mt={'7'}>
                            <Box>
                                <Image
                                    src="/assets/images/Image58.png"
                                    width={23}
                                    height={19}
                                    alt="icons"

                                />
                            </Box>
                            <Text color={'white'}>Office Hours (From 9:00h to 17:00h)</Text>

                        </Flex>


                    </Box>
                    <Box>
                        <Box>
                            <Image
                                src="/assets/images/Image012.png"
                                width={887}
                                height={850}
                                alt="icons"

                            />
                        </Box>

                    </Box>
                </Flex>

            </Container>

        </Box>
    )
}

export default FormSection