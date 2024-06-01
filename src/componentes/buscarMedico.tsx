import { Box, FormControl, Input} from 'native-base'
import { Botao } from './botao'

export function BuscarMedico({especialidade, setEspecialidade,estado, setEstado, funcaoBotao,...rest}){
    return(
        <Box borderWidth={1} borderColor="gray.200" borderRadius="8" alignItems='center' p={5} shadow={5} mt={5} {...rest}>
            <FormControl>
                <Input 
                    placeholder="Digite a especialidade"
                    backgroundColor="gray.100"
                    value={especialidade}
                    onChangeText={setEspecialidade}
                    />   
            </FormControl>
            <FormControl>
                <Input 
                    placeholder="Digite sua localização"
                    backgroundColor="gray.100"
                    value={estado}
                    onChangeText={setEstado}
                    mt={5}
                    />   
            </FormControl>
            <Botao onPress={funcaoBotao}>Buscar</Botao>
        </Box>
    )
}