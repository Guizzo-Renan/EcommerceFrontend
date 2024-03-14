import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, longDescription } = item.attributes;
 /* const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;*/
  
 // const url1 = image.data.attributes.formats
  //console.log(url1.thumbnail)
 // const url = url1.thumbnail.url
//  const url = longDescription.childrem.url
  //console.log(url1.thumbnail)
  //const url = url1
  //const longDescription = data.data[0].attributes.longDescription;
 // const url = longDescription.find(item => item.url);
 const url = longDescription[0].children[1].url;

 console.log(url)

//{`http://localhost:2000${url}`}
  return (
    <Box width="180px">
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        data-aos="fade-up"
        data-aos-delay={item.aosDelay}
        
      >
        <img
          alt={item.name}
          
          borderRadius="300px"
         // src={`https://strapiapi-tj9t.onrender.com/${url}`}
         src={url}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ borderRadius: '20px', cursor: "pointer" }} 
        />
       
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="10%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add
              
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;



/*

import { useDispatch } from "react-redux";

import { addToCart } from "../../state";

  onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}

*/