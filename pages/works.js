import {Container,  Heading, SimpleGrid, Divider} from "@chakra-ui/react";
import Section from "../components/section"
import {WorkGridItem} from "../components/grid-item";

import thumbSpot from '../public/images/spoty.png'
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id='project' title='Project' thumbnail={thumbSpot}>
                        Smth about app
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works