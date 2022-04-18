import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const cards = [1,2,3,4,5,6,7,8,9];

// Class Component
class Main extends React.Component {
  render() {
    const style = { backgroundColor: "blue", color: "white" };
    const labelText = "Enter name:";
    const buttonText = { text: "click me" };
    return (
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              gutterBottom
              align="center"
              color="textPrimary"
            >
              Our Website
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              color="textPrimary"
            >
              Lorem Ipsum
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    View Services
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="success">
                    Contact Us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div>
          <Container maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card,index) => {
                        return (<Grid key={index} item md={4} sm={12}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://placeimg.com/640/480/animals"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with
                                    over 6,000 species, ranging across all continents except
                                    Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>)
                    })}
                </Grid>
            </Container>
        </div>
    </main>
    )
  }
}

export default Main;
