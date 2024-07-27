"use client";

import { Box, Fade, Stack } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Box>
      <>
        <Header />
        <Stack display={"flex"} minHeight={"100vh"} flexDirection={"column"}>
          <Fade in mountOnEnter unmountOnExit>
            <Stack flex={1}>{props.children}</Stack>
          </Fade>
        </Stack>
        <Stack bgcolor={"red"} width={"100%"} height={100}></Stack>
      </>
    </Box>
  );
};

export default Layout;
