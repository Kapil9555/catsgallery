'use client'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


 const CatCard =({data})=> {

  console.log("data check",data)

  return (
    <Card sx={{ width: '100%' }}>
     
      <CardMedia
        component="img"
        height="194"
        image={data?.url}
        alt="Paella dish"
      />
     
    </Card>
  );
}

export default CatCard