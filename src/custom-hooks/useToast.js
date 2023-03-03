import React from 'react'
import { useToast } from '@chakra-ui/react'

const UseToastMsg = () => {
    const toast = useToast();
    const Toast = (msg, status) => {
        toast(
            {
                title: `${msg}`,
                position: 'bottom-left',
                variant: 'left-accent',
                isClosable: true,
                duration: 4000,
                status,
            }
        )
    }
    return Toast;
}

export default UseToastMsg