import NextLink from "next/link";
import {Box, Heading, Text , Divider, Button, Container } from "@chakra-ui/react"


const NotFound = () => {
    return (
        <Container>
            <Heading as='h1'>not found</Heading>
            <Text>You can't see content of this page.</Text>
            <Divider my={6}/>

            <Box my={20} align='center'>
                <NextLink href='/'>
                    <Button colorScheme ='red'>Return to home</Button>
                    </NextLink>
            </Box>
        </Container>
    )


}

export default NotFound

