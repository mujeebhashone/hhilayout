import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import SectionHeading from './SectionHeading';
import ImageSection from './ImageSection';


const RealEstateSection = () => {
    return (
        <Box as='section' >
            <Container maxW={'100%'}>
                <Box width={'80%'} mx={'auto'}>
                    <SectionHeading heading='Real Estate Services' para='Try Delicacies You,ve Never Tasted Before' para1='Personal Chef for Spanish, Mediterranean & More' />
                </Box>
                <Box>
                    <ImageSection src='/assets/images/Rectangle2.png' para1='Real Estate Services' para2='Promotions, deals, and special offers for you' />
                </Box>


            </Container>

        </Box>


    )
}

export default RealEstateSection