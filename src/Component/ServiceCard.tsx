import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, Link } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Image from 'next/image';

interface IserviceCard {
	imageSrc: string, text: string, link: string, imageSrc2: string, text2: string, link2: string,
}

const ServiceCard = ({ imageSrc, text, link, imageSrc2, text2, link2 }: IserviceCard) => {
	return (
		<>
			<Flex align={'center'} justify={'flex-start'} gap={'36px'} mb={'14'} flexDir={{ lg: 'row', base: 'column' }}>
				<Box>
					<Image
						src={imageSrc}
						width={222}
						height={300}
						alt="companyLogo"
					/>
				</Box>
				<Box>
					<Text fontSize={'36px'} mb={'32px'}>
						{text}
					</Text>
					<Box as='span'>
						<Link href={link} fontSize={'md'} color={'#B5862D'}>Explore  <Icon as={ArrowForwardIcon} width={'20px'} height={'13px'} /></Link>
					</Box>
				</Box>
			</Flex>
			<Flex align={'center'} justify={'flex-end'} gap={'36px'} flexDir={{ lg: 'row', base: 'column' }} >
				<Box order={{ lg: '2', base: '1' }}>
					<Image
						src={imageSrc2}
						width={222}
						height={300}
						alt="companyLogo"
					/>
				</Box>
				<Box order={{ lg: '1', base: '2' }}>
					<Text fontSize={'36px'} mb={'32px'}>
						{text2}
					</Text>
					<Box as='span'>
						<Link href={link2} fontSize={'md'} color={'#B5862D'}>Explore  <Icon as={ArrowForwardIcon} width={'20px'} height={'13px'} /></Link>
					</Box>
				</Box>
			</Flex>
		</>
	)
}

export default ServiceCard