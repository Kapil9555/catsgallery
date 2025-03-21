'use client'
import { Box, Button, CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../../contant'
import CatCard from '@/components/CatCard'

const HomePage = () => {

  const [catsData, setCatsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [limit , setLimit] = useState(10)
 

  const handleChange = (event) => {
    setLimit(event.target.value);
  };


  const fetchCats = async () => {
    try {
      const cats = await axios.get(`${BASE_URL}/images/search?limit=${limit}`)
      console.log("cats", cats)
      if (cats.status == 200) {
        setCatsData(cats.data)
        setLoading(false)
      }
    } catch (err) {
      console.log('error while fetching the data', err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCats();
  }, [limit])

  console.log("catsDatacatsData", catsData)
  if (loading) {
    return (
      <Grid container justifyContent={'center'} alignItems={'center'} sx={{ height: '80vh' }}>
        <CircularProgress />
      </Grid>
    )
  } else {
    return (
      <Container disableGutters maxWidth='xl'>
        <Grid container justifyContent={'center'}>
          <Grid item md={10} xs={11.5} sx={{ pt: "50px" }}>
          <Grid item xs={12}>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="limit-select-label">Limit</InputLabel>
        <Select
          labelId="limit-select-label"
          id="limit-select"
          value={limit}
          label="Limit"
          onChange={handleChange}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <MenuItem key={num} value={num}>{num}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
          </Grid>
          <Grid container justifyContent="center" spacing={2} sx={{ pt: "50px" }}>
          {catsData?.map((cat, ind) => (
            <Grid item key={ind} xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  width: '100%',
                  height: 194,
                  overflow: 'hidden',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <Box
                  component="img"
                  src={cat?.url}
                  alt="Cat Image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

          </Grid>
          <Grid item xs={12} sx={{ mt: "50px", display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' onClick={fetchCats}>
              Load More
            </Button>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default HomePage
