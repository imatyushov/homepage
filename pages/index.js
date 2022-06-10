import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Button,
    SimpleGrid,
    ListIcon,
    ListItem,
    List,
    Icon, background
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {BackgroundProps} from "@chakra-ui/react";
import {BioSection, BioYear} from "../components/bio";
import Layout from '/components/layouts/article'
import Footer from "../components/footer";

import {IoLogoTwitch, IoLogoVk, IoLogoGithub, IoLogoInstagram} from "react-icons/io5";
import {Head} from "next/document";
import WebGPUBackground from "three/examples/jsm/renderers/webgpu/WebGPUBackground";
import Favicon from "../components/favicon";


const Page = () => {
    return (
        <Layout>
        <Container>
            <Box
                borderRadius = 'lg'
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha200')}
                p={3}
                mb = {6}
                align='center'
                css = {{background: 'grey'}}>
                    Hello, I am frontend-developer based in Russia!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant = "page-title">
                        Ilya Matyushov
                    </Heading>
                    <p>Frontend-developer/System-designer/...</p>

                </Box>
                <Box flexShrink={0}
                     mt ={{base:4, md:0}}
                     ml={{md: 6 }}
                     align='center'
                >
                    <Image
                        borderColor ='WhiteAlpha.800'
                        borderWidth={2}
                        borderStyle='solid'
                        maxWidth='160px'
                        display='inline-block'
                        borderRadius='full'
                        src= 'images/ilya.jpg'
                        alt='Profile Image'
                        />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as ='h3' variant ='section-title'>
                    Work
                </Heading>
                <Paragraph>I'm is frontend developer with a passion for building
                    digital services and applications.
                  <hr/>
                        Besides I like take pictures on my camera and make some educational
                        and entertainment videos on YouTube!
                <NextLink href='/works/inkdrop'>
                    <Link>to my project</Link>
                </NextLink>
                    .
                </Paragraph>
                <Box align='center' my={4}>
                    <NextLink href='/works'>
                        <Button rigthIcon={<ChevronRightIcon/>} colorScheme='red'>
                            My portfolio
                            </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as ='h3' variant='section-title'>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                    Born in Tver, Russia.
                </BioSection>
                Some accomplishments...

            </Section>



            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    I ♥
                </Heading>
                    <Paragraph>
                        Music, GameDesign, {''}
                        <Link href='https://500px.com/p/ilya_matyushov55?view=photos' targert = '_blank'>
                            Phtotography,
                        </Link>
                        <br/>
                       <Link href='https://github.com/imatyushov/data-ml' target ='_blank'>
                           Machine learning
                       </Link>
                    </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href='https://github.com/imatyushov' target='_blank'>
                            <Button variant='ghost' colorScheme='red' leftIcon={<Icon as={IoLogoGithub}/>}>
                                @imatyushov

                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://vk.com/howtoilya' target='_blank'>
                            <Button variant='ghost' colorScheme='red' leftIcon={<Icon as={IoLogoVk}/>}>
                                @howtoilya
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://instagram.com/howtoilya' target='_blank'>
                            <Button variant='ghost' colorScheme='red' leftIcon={<Icon as={IoLogoInstagram}/>}>
                                @howtoilya
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.twitch.tv/howtoilya' target='_blank'>
                            <Button variant='ghost' colorScheme='red' leftIcon={<Icon as={IoLogoTwitch}/>}>
                                @howtoilya
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>

            <Section>
                <Heading as ='h2'variant='section-title'>
                    Support me
                </Heading>
            </Section>

            <Section>
               <Favicon></Favicon>
                <Footer></Footer>

            </Section>

        </Container>
        </Layout>
    )
}

export default Page