import { Box, ChakraProvider, Grid, GridItem } from "@chakra-ui/react"

import NavBar from "../NavBar"
import ScrollToTop from "../ScrollToTop"
import Sidebar from "../Sidebar"
import theme from "../../theme"

const SidebarLayout = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NavBar />
      <Grid templateColumns="repeat(10, 1fr)">
        <GridItem
          colStart={{ base: 1, lg: 2, "2xl": 3 }}
          colSpan={{ base: 10, lg: 2, "2xl": 2 }}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          py="3em"
          colStart={{ base: 1, lg: 5, "2xl": 5 }}
          colSpan={{ base: 10, lg: 6, "2xl": 5 }}
        >
          <Box id="top" />
          {children}
          <ScrollToTop />
        </GridItem>
      </Grid>
    </ChakraProvider>
  )
}

export default SidebarLayout
