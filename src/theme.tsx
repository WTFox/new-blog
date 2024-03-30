import { ThemeConfig, extendTheme, theme as baseTheme } from "@chakra-ui/react"

import { createBreakpoints } from "@chakra-ui/theme-tools"

const fontSizes = {
  base: "16px",
}
const lineHeights = {
  base: 1.6,
}

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const colors = {
  primaryFontColor: {
    lightMode: baseTheme.colors.gray["700"],
    darkMode: baseTheme.colors.gray["200"],
  },
}

const theme: ThemeConfig = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    body: "JetBrains Mono, monospace",
    heading: "JetBrains Mono, monospace",
    mono: "JetBrains Mono, monospace",
  },
  fontSizes,
  lineHeights,
  colors,
  breakpoints,
  styles: {
    global: (props) => ({
      "html, body": {
        color:
          props.colorMode === "dark"
            ? colors.primaryFontColor.darkMode
            : colors.primaryFontColor.lightMode,
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "16px",
        lineHeight: 1.6,
        fontFeatureSettings:
          '"zero" 1, "ss02" 1, "calt" 1, "liga" 1, "dlig" 1, "kern" 1',
      },
    }),
  },
})

export default theme
