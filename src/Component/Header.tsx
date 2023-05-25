import React from 'react'
import { Box, Container, Flex, Heading, Text, Input, Icon, RadioGroup, Radio, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Image from 'next/image';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';





const Header = () => {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    return (
        <>
            <Box as='nav' position={'fixed'} width={'100%'} bg={'#0000005c'} sx={{
                backdropBlur: "blur(4px)",
            }} >
                <Container maxW={'100%'} >
                    <Flex align={'center'} justifyContent={'space-between'}>
                        <Box>
                            <Image
                                src="/assets/images/logo.png"
                                width={300}
                                height={70}
                                alt="companyLogo"
                            />

                        </Box>
                        <Flex gap={'50px'} align={'center'} justify={'center'}>
                            <Menu>
                                <MenuButton as={Button} bg={'#B5862D'} width={'250px'} height={'40px'} color={'white'}>
                                    Browse Categories
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                    <MenuItem>Mark as Draft</MenuItem>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Attend a Workshop</MenuItem>
                                </MenuList>
                            </Menu>


                            {/* <Button display={{ lg: 'flex', base: 'none' }} bg={'#B5862D'} width={'312px'} height={'50px'} color={'white'} onClick={onOpen}>

                            </Button> */}

                            <Icon as={HamburgerIcon} width={'9'} height={'7'} color={'white'} onClick={onOpen} />
                            <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                                    <DrawerBody>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </Flex>
                    </Flex>
                </Container>
            </Box>


        </>





    )
}

export default Header