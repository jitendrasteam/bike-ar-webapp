import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {cars} from "../../data/cars"
import GalleryItem from "../car-gallery/gallery-item"
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: "100vw",
    height: "120vh",
  },
}));

export default function ImageGridList(props) {
  const classes = useStyles();

  let searchedCars=cars.filter(car=>{return (car.name.includes(props.searchText)||car.name.toUpperCase().includes(props.searchText)||car.name.toLowerCase().includes(props.searchText))});

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4} spacing={20}>
        {searchedCars.map(car => (
        
          <GridListTile key={car.link} style={{height:"300px"}}>
            <GalleryItem link={car.link} name={car.name}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}