import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Suggestions from './../product/Suggestions'
import {listLatest, listCategories} from './../product/api-product.js'
import Search from './../product/Search'
import Categories from './../product/Categories'
import { colors } from '@material-ui/core'
import { black } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
    backgroundImage: `url("https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-105214.jpg?w=1380&t=st=1665876148~exp=1665876748~hmac=11f4dfd60157e1af2fc54b919a961f1329ef78f47983d16be8b952b4466ada3c")`
  }
}))


export default function Home(){
  const classes = useStyles()
  const [suggestionTitle, setSuggestionTitle] = useState("Latest Products")
  const [categories, setCategories] = useState([])
  const [suggestions, setSuggestions] = useState([])
  
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listLatest(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setSuggestions(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listCategories(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setCategories(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

    return (
      <div>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={12}>
            <Search categories={categories}/>
            <Categories categories={categories}/>
          </Grid>
          <Grid item xs={4} sm={4} color='white' >
            <Suggestions products={suggestions} title={suggestionTitle} />
          </Grid>
        </Grid>
      </div>
      </div>
    )
}


