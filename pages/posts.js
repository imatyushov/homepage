import Layout from "../components/layouts/article"
import {Container, Heading, SimpleGrid} from "@chakra-ui/react"
import Section from "../components/section"
import {GridItem} from "@chakra-ui/react"


const Posts = () => (
    <Layout title='Posts'>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Some of my posts
            </Heading>
    </Container>
    </Layout>

)

export default Posts