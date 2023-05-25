import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import ImageHeading from "./ImageHeading";


interface ImageSection {
    para1: string, para2: string, src: string,

}

const ImageSection = ({ para1, para2, src }: ImageSection) => {
    return (

        <Box position={'relative'}>
            <Box>
                <Image
                    src={src}
                    sizes="100vw"
                    width={1807}
                    height={495}
                    alt="icons"
                    style={{
                        height: "495px",
                        width: "100%",
                        objectFit: 'cover',
                        borderRadius: '20px',
                    }}

                />
            </Box>
            <Box position={'absolute'} top={'39%'} left={'5%'}>
                <ImageHeading heading={para1} paragraph={para2} />
            </Box>

        </Box>
    )
}

export default ImageSection