import React from "react"
import { Typography, CssBaseline, Paper } from "@material-ui/core"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Paper elevation={3}>
          <Typography variant="h1">Hello world!</Typography>
        </Paper>
      </Layout>
    </>
  )
}

export default Home
