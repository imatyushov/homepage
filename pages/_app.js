import { ChakraProvider} from "@chakra-ui/react"
import Layout from '../components/layouts/main'
import theme from "../lib/theme"
import Fonts from '../components/fonts.js'
import {AnimatePresence} from "framer-motion"


const Website = ({ Component, pageProps, router} ) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router = {router}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== "undefined") {
                            window.scrollTo({top: 0})
                        }
                    }}
                >
                <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Layout>
        </ChakraProvider>
    )

}

export default Website