import React from "react"
import { Container } from "@material-ui/core"
import Navigation from "../components/Navigation/Navigation"
import "../styles/global.css"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Navigation />
      <Container className={classes.container}>{children}</Container>
    </>
  )
}

export default Layout
