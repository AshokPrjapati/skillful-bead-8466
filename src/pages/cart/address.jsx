import CartNav from "@/components/cart/CartNav";
import Head from "next/head";
import React, { useEffect } from "react";
import { Text, Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
import PriceDetails from "@/components/cart/PriceDetails";
import AddressCard from "@/components/cart/AddressCard";
import AddressForm from "@/components/cart/AddressForm";
import AddressSideBar from "@/components/cart/AddressSideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  editAddress,
  getAddress,
  sendAddress,
} from "@/redux/address/address.action";

const Address = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // const [addressData, setAddressData] = useState(address);
  const { addressData } = useSelector((store) => store.address);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  const handlePostAddress = async (data) => {
    dispatch(sendAddress(data));
  };

  const handlePatchAddress = (data, id) => {
    dispatch(editAddress(data, id));
  };

  return (
    <>
      <Head>
        <title>ApniDukan-Address page</title>
        <meta name="description" content="Apni dukan Address page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CartNav image={"../../../images/s2.png"} />
        <AddressSideBar
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        />

        <Container maxW={"4xl"} p={"20px 15px"}>
          <Flex>
            <Box w="62%" paddingRight="20px" borderRight={"1px solid #e1e1e1"}>
              <Flex
                fontSize={"18px"}
                fontWeight="500"
                color={"#000"}
                padding={"15px 0"}
                justify="space-between"
              >
                <Text>
                  {addressData.length
                    ? "Select Delivery Address"
                    : "Fill Delivery Address"}
                </Text>
                <Text
                  color={"#f43397"}
                  display={addressData.length ? "block" : "none"}
                  cursor="pointer"
                  onClick={onOpen}
                >
                  +Add New Address
                </Text>
              </Flex>
              {addressData.length ? (
                addressData.map((a) => (
                  <AddressCard key={a.id} {...a} display="flex" />
                ))
              ) : (
                <AddressForm />
              )}
            </Box>
            <Box w="38%">
              <PriceDetails
                display={"none"}
                dest="/cart/payment"
                text="Continue"
              />
            </Box>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Address;
