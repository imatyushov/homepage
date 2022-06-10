// import { motion } from 'framer-motion'
// import Head from 'next/head'
// import { GridItemStyle } from '../grid-item'
//
// const variants = {
//     hidden: { opacity: 0, x: 0, y: 20 },
//     enter: { opacity: 1, x: 0, y: 0 },
//     exit: { opacity: 0, x: -0, y: 20 }
// }
//
// const Layout = ({ children, title }) => {
//     const t = `${title} - Ilya Matyushov`
//     return (
//         <motion.article
//             initial="hidden"
//             animate="enter"
//             exit="exit"
//             variants={variants}
//             transition={{ duration: 0.4, type: 'easeInOut' }}
//             style={{ position: 'relative' }}
//         >
//             <>
//                 {title && (
//                     <Head>
//                         <title>{title} Ilya Matyushov</title>
//                         import NextLink from 'next/link'
//                         import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
//                         import { ChevronRightIcon } from '@chakra-ui/icons'
//
//                         export const Title = ({ children }) => (
//
//                         <meta name="twitter:title" content={t} />
//                         <meta property="og:title" content={t} />
//                     </Head>
//                 )}
//                 {children}
//
//                 <GridItemStyle />
//             </>
//         </motion.article>
//     )
// }
//
// export default Layout


import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import Favicon from "../favicon";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
    const t = `${title} - Ilya Matyushov`
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            <>
                {title && (
                    <Head>
                        <title>{t}</title>
                        <Favicon></Favicon>
                        <meta name="twitter:title" content={t} />
                        <meta property="og:title" content={t} />
                    </Head>
                )}
                {children}

                <GridItemStyle />
            </>
        </motion.article>
    )
}

export default Layout
