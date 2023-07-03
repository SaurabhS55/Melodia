import React from 'react'
import Navbar from './Navbar'
import classes from './Root.module.css'
import Library from './Library'
import { useLocation } from 'react-router-dom'
import Home from '../navigation/Home'
import Search from '../navigation/Search'
import Footer from './Footer'
import { Flex } from '@chakra-ui/react'
const Root = () => {
  const loc=useLocation()
  // console.log(loc.pathname)
  return (
    <Flex as="div" direction="column">
    <div className={classes.root}>
        <section className={classes.sidebar}>
          <div className={classes.navsection}>
            <Navbar/>
          </div>
          <div className={classes.library}>
            <Library/>
          </div>
        </section>
        <section className={classes.main}>
          {loc.pathname==="/"?<Home/>:null}
          {loc.pathname==="/search"?<Search/>:null}
        </section>
    </div>
        <section className={classes.footer}>
          <Footer/>
        </section>
    </Flex>

  )
}

export default Root