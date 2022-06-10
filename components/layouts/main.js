import Head from "next/head"
import Navbar from '../navbar'
import NoSsr from "../no-ssr";
import  {Box, Container} from  "@chakra-ui/react"
import VoxelDog from "../voxel-dog"
import Favicon from "../favicon";
const Main = ( { children, router} ) => {
    return (
        <Box as= "main" pb = {8}>
            <Head>
                <meta name= 'viewport' content= 'width=device-width, initial-scale=1'/>
                <title>Ilya Matyushov - Homepage
                    <Favicon></Favicon>
                </title>
                <Favicon></Favicon>
                <link rel="apple-touch-icon" href='footprint.png' />
                <link rel="shortcut icon" href="" type="image/x-icon" />
            </Head>

            <Navbar path= {router.asPath} />

            <Container maxW = "container.md" pt = {14}>

                <VoxelDog/>

                {children}
            </Container>
        </Box>
    )
}

export default Main