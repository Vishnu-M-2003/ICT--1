import axios from "axios";
import { useEffect } from "react";
import { Card } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material"; // Grid version 1
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

export default function New() {
  const [data, setData] = useState([]);
  const URL =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDRjODE5YmYxNDkxOGYxY2EyMjkyZDcwYzdiZTgwZiIsInN1YiI6IjY1OGU1MDk2ZDQwMGYzMWJlYTE3NDE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hh3KiTymaAfX7Y1SFmZ23z6Xq3h94vliBj1suvsvvuk",
        },
      })
      .then((res) => {
        setData(res.data.results);
      });
  }, []);

  return (
    <div>
      {data.map((movie) => {
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>;
      })}
    </div>
  );
}
