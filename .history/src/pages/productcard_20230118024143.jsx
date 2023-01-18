import React from 'react';
import {Box,Image,Text,Flex, border} from '@chakra-ui/react';
const Productcard = () => {
  let  image="https://images.meesho.com/images/products/162582930/d0yc2_400.jpg"
  let  title="COTTON SLUB KURTI  "
    return (
        <div>
            <Box>
              <Image src={image}  alt={title}/>
              <Text p={"1rem"} fontSize={"2rem"} color={"grey"}>{title}</Text>
              <Flex pl={"1rem"}>
                <div  style={{backgroundColor:"orange",color:"white",fontStyle:"bold",padding:"0.4rem",borderRadius:"5px",fontWeight:"bold"}}>3.3</div>
                <div></div>
              </Flex>
            </Box>
        </div>
    );
}

export default Productcard;
