import { Box, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from '@chakra-ui/react';

// Credits: https://yuichiroaoki.medium.com/theme-switcher-using-chakra-ui-d6c66eae230d 

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
    >
      {colorMode === "dark" ?
        <IconButton
          aria-label="dark"
          bg="transparent"
          fontSize="20px"
          icon={<SunIcon />} onClick={toggleColorMode}
        />
        : <IconButton
          aria-label="light"
          bg="transparent"
          icon={<MoonIcon />} onClick={toggleColorMode}
          fontSize="20px"
        />
      }
    </Box>
  )
}

export default ThemeSwitcher;