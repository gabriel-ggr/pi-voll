import { Button } from 'native-base'

export function Botao({children, ...rest}){
    return(
        <Button
        width='100%'
        bgColor="blue.800"
        marginTop={5}
        borderRadius='lg'
        {...rest}
        >
          {children}
      </Button>
    )
}