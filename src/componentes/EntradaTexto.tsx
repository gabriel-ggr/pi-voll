import { FormControl, Input } from 'native-base'

// Interface serve para definir a estrutura do objeto e definir as propriedades e metodos que um objeto deve ter
interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string
  onChangeText?: (text: string) => void;
}

export function EntradaTexto({
  label, 
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText}){
    return(
        <FormControl mt={3}>
        <FormControl.Label>{label}</FormControl.Label>
        <Input 
          placeholder={placeholder}
          size='lg'
          w='100%'
          borderRadius="lg"
          shadow={1}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </FormControl>
    )
}