import { Text } from 'native-base'


export function Titulo({ children , ...rest}){
    return(
      <Text
      fontSize='2xl'
      fontWeight='bold'
      color='gray.500'
      textAlign='center'
      mt='10'
      {...rest}
      // ...rest permite receber outras propriedades que passar 
      >
        {children}
      </Text>
    )
}