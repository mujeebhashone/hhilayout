import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';


import Image from 'next/image';
import ServiceCard from './ServiceCard';
import SectionHeading from './SectionHeading';
import ImageHeading from './ImageHeading';

const PropertySection = () => {
    return (
        <Box as='section'>
            <Container maxW={'80%'}>

                <SectionHeading heading='PROPERTY MANAGEMENT IN IBIZA' para='Treat Yourself Better with the Best ' para1='Massages, Makeovers, & More' />

                <Flex justify={'space-between'} flexDir={{ lg: 'row', base: 'column' }}>
                    <Box width={{ lg: '35%', base: '100%' }} mb={{ lg: '0', base: '10' }}>
                        <ServiceCard imageSrc='/assets/images/Rectangl13.png' text='Personalized 
                        Services' link='' imageSrc2='/assets/images/Rectangle14.png' text2='Vip Concierge' link2='' />

                    </Box>
                    <Box bgImage={'/assets/images/Rectangle12.png'} bgRepeat={'no-repeat'} bgPos={'center'} bgSize={'cover'} width={{ lg: '60%', base: '100%' }} borderRadius={'20px'}>
                        <ImageHeading heading='Rental Care' paragraph='Promotions, deals, and special offers for you' />

                    </Box>


                </Flex>


            </Container>

        </Box>









    )
}

export default PropertySection