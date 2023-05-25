import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon } from "@chakra-ui/react";


interface SectionHeading {
    heading: string, para: string, para1: string,

}

const SectionHeading = ({ heading, para, para1 }: SectionHeading) => {
    return (
        <Box py={'20'}>
            <Text fontSize={{ lg: 'lg', base: 'sm' }}>
                {heading}
            </Text>
            <Text fontSize={{ lg: '42px', base: '22px' }}>{para} </Text>
            <Text fontSize={{ lg: 'lg', base: 'md' }}>{para1}</Text>

        </Box>
    )
}

export default SectionHeading