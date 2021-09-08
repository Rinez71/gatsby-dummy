import React from "react"
import Layout from "../components/Layout"
import { Typography, CssBaseline } from "@material-ui/core"

export default function about() {
  return (
    <>
      <CssBaseline />
      <Layout>
        {/* <Container> */}
        <Typography variant="h1">About</Typography>
        {/* </Container> */}
      </Layout>
    </>
  )
}
