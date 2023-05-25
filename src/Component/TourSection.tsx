import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import Image from 'next/image';

import SectionHeading from './SectionHeading';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";


const TourSection = () => {
    return (
        <Box as='section'>
            <Container maxW={'100%'} px={'0'}>
                <Box width={'80%'} mx={'auto'}>
                    <SectionHeading heading='HOY HOY IBIZA TOURS' para='Do What You,re in Ibiza for Enjoy.' para1='Promotions, deals, and special offers for you' />
                </Box>
                <Box>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide >
                            <Box position={'relative'}>
                                <Image
                                    src="/assets/images/Image87.png"
                                    width={385}
                                    height={761}
                                    alt="icons"
                                />

                            </Box>
                            <Text position={'absolute'} top={'94%'} left={'34%'} color={'white'}>Snorkeling</Text>

                        </SwiperSlide>
                        <SwiperSlide >
                            <Box position={'relative'}>
                                <Image
                                    src="/assets/images/Image021.png"
                                    width={385}
                                    height={761}
                                    alt="icons"
                                />

                            </Box>
                            <Text position={'absolute'} top={'94%'} left={'34%'} color={'white'}>Snorkeling</Text>

                        </SwiperSlide>
                        <SwiperSlide >
                            <Box position={'relative'}>
                                <Image
                                    src="/assets/images/Image89.png"
                                    width={385}
                                    height={761}
                                    alt="icons"
                                />

                            </Box>
                            <Text position={'absolute'} top={'94%'} left={'34%'} color={'white'}>Snorkeling</Text>

                        </SwiperSlide>
                        <SwiperSlide >
                            <Box position={'relative'}>
                                <Image
                                    src="/assets/images/Image90.png"
                                    width={385}
                                    height={761}
                                    alt="icons"
                                />

                            </Box>
                            <Text position={'absolute'} top={'94%'} left={'34%'} color={'white'}>Snorkeling</Text>

                        </SwiperSlide>
                        <SwiperSlide >
                            <Box position={'relative'}>
                                <Image
                                    src="/assets/images/Image95.png"
                                    width={385}
                                    height={761}
                                    alt="icons"
                                />

                            </Box>
                            <Text position={'absolute'} top={'94%'} left={'34%'} color={'white'}>Snorkeling</Text>

                        </SwiperSlide>
                        <SwiperSlide >
                            <Box position={'relative'}>
                                <Image
                                    src="/assets/images/Image89.png"
                                    width={385}
                                    height={761}
                                    alt="icons"
                                />

                            </Box>
                            <Text position={'absolute'} top={'94%'} left={'34%'} color={'white'}>Snorkeling</Text>

                        </SwiperSlide>

                    </Swiper>
                </Box>

            </Container>

        </Box>

    )
}

export default TourSection