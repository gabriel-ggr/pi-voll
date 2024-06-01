import { Text, VStack, ScrollView, Image, FormControl, Box, Input, Divider } from "native-base";
import Logo from "../assets/Logo.jpg"
import { Titulo } from "../componentes/titulo";
import { Botao } from "../componentes/botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { BuscarMedico } from "../componentes/buscarMedico";
import { depoimentos } from "../utils/Depoimentos";

export default function Principal(){
    return(
        <ScrollView backgroundColor="white">
            <VStack flex={1} mt={20} p={5}>
                <Image source={Logo} alt='Logo Voll' />
                
                <Titulo color="blue.500" textAlign="left" >Boas-vindas!</Titulo>

                <Text color="gray.300">Agende sua consulta rapidamente atráves do menu "Explorar" na barra inferior</Text>

                <VStack>
                    <Titulo color="blue.800">Depoimentos</Titulo>
                    {depoimentos.map((depoimento) => (
                        <Box mt={3} key={depoimento.id}>
                            <Text color="gray.300">{depoimento.texto}</Text>
                            <Text color="gray.300" textAlign="center" fontWeight="bold">{depoimento.nome}</Text>
                            <Divider mt={3}/>
                        </Box>
                    
                    ))}
                </VStack>

            </VStack>
        </ScrollView>
    )
}