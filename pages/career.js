import Layout from "../components/layouts/article"
import {Container, Heading, Image, SimpleGrid, Link, Text} from "@chakra-ui/react"
import Section from "../components/section"
import {GridItem} from "@chakra-ui/react"
import NextLink from "next/link";


const Career = () => (
    <Layout title='Career'>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Start your career with me!
            </Heading>
            <Image
                src= 'images/webp.webp'
                alt='image'/>
            <NextLink href='https://vc.ru/dev/247364-kak-sozdat-svoy-server-gta-5-rp?ysclid=l3lif93243' target='_blank'>
                <Link>Welcome link</Link>
            </NextLink>
            <hr/>
            <Heading as='h3' fontSize={20} mb={4}>
                Heading
            </Heading>
            <Text color='pink'>
                some pink text
            </Text>
        </Container>
    </Layout>

)

export default Career

