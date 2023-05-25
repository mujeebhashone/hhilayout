import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import SectionHeading from './SectionHeading';
import ExploreImageCard from './ExploreImageCard';

const ExploreServicesSection = () => {
    return (
        <Box as='section'>
            <Container maxW={'100%'}>
                <Box width={{ lg: '80%', base: '100%' }} mx={'auto'}>
                    <Flex justify={'space-between'} align={'center'} flexDir={{ lg: 'row', base: 'column' }}>
                        <SectionHeading heading='Explore Other Services ' para='More than 100 Services Under One Roof ' para1='Your Wish Is Our Command ' />

                        <Box as='span'>
                            <Link href='' fontSize={'md'} color={'#B5862D'}>Explore All <Icon as={ArrowForwardIcon} width={'20px'} height={'13px'} /></Link>
                        </Box>
                    </Flex>
                    <Flex justify={{ lg: 'space-between', base: 'center' }} align={'center'} mb={'16'}>
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                        <ExploreImageCard src='/assets/images/Group2.png' names='HEALTH SERVICES' />
                        <ExploreImageCard src='/assets/images/Group3.png' names='SOCIAL SERVICES' />
                        <ExploreImageCard src='/assets/images/Group4.png' names='HOME SERVICES' />
                        <ExploreImageCard src='/assets/images/Group5.png' names='RENTAL SERVICES' />
                    </Flex>
                    <Flex justify={'space-between'} align={'center'} mb={'16'}>
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                    </Flex>
                    <Flex justify={'space-between'} align={'center'}>
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                        <ExploreImageCard src='/assets/images/Group1.png' names='BEAUTY SERVICES' />
                    </Flex>

                </Box>

            </Container>

        </Box>

    )
}

export default ExploreServicesSection