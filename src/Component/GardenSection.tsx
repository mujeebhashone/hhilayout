import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import ServiceCard from './ServiceCard';
import SectionHeading from './SectionHeading';
import ImageHeading from './ImageHeading';

const GardenSection = () => {
    return (
        <Box as='section'>
            <Container maxW={'80%'}>

                <SectionHeading heading='HOME & GARDEN' para='Treat Yourself Better with the Best  ' para1='Massages, Makeovers, & More' />

                <Flex justify={'center'} gap={'50px'} flexDir={{ lg: 'row', base: 'column' }}>
                    <Box bgImage={'/assets/images/Rectangle107.png'} bgRepeat={'no-repeat'} bgPos={'center'} bgSize={'cover'} width={{ lg: '60%', base: '100' }} borderRadius={'20px'}>
                        <ImageHeading heading='Security & Domotica' paragraph='Promotions, deals, and special offers for you' />

                    </Box>
                    <Box width={{ lg: '40%', base: '100%' }}>
                        <ServiceCard imageSrc='/assets/images/Rectangle17.png' text='Home
                        ' link='' imageSrc2='/assets/images/Rectangle109.png' text2='Garden' link2='' />

                    </Box>


                </Flex>


            </Container>

        </Box>




    )
}

export default GardenSection