import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'

interface ExploreImageCard {
    src: string, names: string,
}

const ExploreImageCard = ({ src, names }: ExploreImageCard) => {
    return (
        <Box>
            <Box>
                <Image
                    src={src}
                    sizes="100vw"
                    width={196}
                    height={135}
                    alt="icons"
                    style={{
                        height: "135px",
                        width: "100%",
                        objectFit: 'cover',
                        borderRadius: '20px',
                    }}

                />
            </Box>
            <Text fontSize={'sm'} fontWeight={'normal'} textAlign={'center'}>{names}</Text>
        </Box>
    )
}

export default ExploreImageCard