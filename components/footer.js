import { Box } from '@chakra-ui/react'

// const footer = () => {
//     return (
//         <Box
//         align='center'
//         mb = {3}
//         >
//             Ilya Matyushov all rigths reserved.
//         </Box>
//     )
// }
//
// export default footer()


const Footer = () => {
    return (
        <Box
            align="center"
            opacity={0.4}
            fontSize="sm
            ">
            &copy; {new Date().getFullYear()} Ilya Matyushov. All Rights Reserved.
        </Box>
    )
}

export default Footer
