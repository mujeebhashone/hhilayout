import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Image from 'next/image';

import React from 'react'
import SectionHeading from "./SectionHeading";
import ImageHeading from "./ImageHeading";
import ImageSection from "./ImageSection";
import SingleImage from "./SingleImage";

const CarServicesSection = () => {
    return (
        <Box as="section" py={'32'}>
            <Container maxW={'100%'}>
                <Box>
                    <Box width={'80%'} mx={'auto'}>
                        <SectionHeading heading='Car Services in Ibiza' para='Hand Over Your Car Troubles  ' para1='Park, Drive, & Keep ,Em Clean' />
                    </Box>
                    <Box mb={'20'}>
                        <ImageSection src="/assets/images/Rectangle44.png" para1="CAR RENTAL" para2="Promotions, deals, and special offers for you" />
                    </Box>
                    <Flex align={{ lg: 'center', base: 'start' }} justify={{ lg: "space-between", base: 'center' }} gap={{ lg: '0', base: '20px' }} width={{ lg: '80%', base: '80%' }} mx={{ lg: 'auto', base: 'auto' }} flexDir={{ lg: 'row', base: 'column' }}>
                        <SingleImage imageSrc="/assets/images/Rectangle43.png" text="Car Detailing " link="" />
                        <SingleImage imageSrc="/assets/images/Rectangle43.png" text="Garage Services" link="" />
                        <SingleImage imageSrc="/assets/images/Rectangle53.png" text="Car Detailing " link="" />
                    </Flex>

                </Box>
            </Container>

        </Box>

    )
}

export default CarServicesSection
