import { Text, VStack, ScrollView, Avatar, Divider,  } from "native-base";
import { Titulo } from "../componentes/titulo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Paciente } from "../interfaces/Paciente";
import { Botao } from "../componentes/botao";


export default function Perfil({navigation}: any){
    const [dadosPaciente, setDadosPaciente] = useState({} as Paciente)

    useEffect(() => {
        async function dadosPaciente(){
            const pacienteId = await AsyncStorage.getItem('pacienteId')
            if(!pacienteId) return null // verifica se pacienteId não está vazio

            const resultado = await pegarDadosPaciente(pacienteId) 
            if(resultado){
                setDadosPaciente(resultado)
                // console.log(resultado)
            }
        }
        dadosPaciente()
    }, [])

    function deslogar(){
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('pacienteId')
        navigation.replace('Login')
    }

    function atualizarDados(){
        // navigate para a pagina AtualizaCadastro
    }

    return(
        <ScrollView flex={1} p={5}>
            <VStack flex={1} alignItems='center'>
                <Titulo>Meu Perfil</Titulo>

                <Avatar size="xl" source={{uri: dadosPaciente?.imagem}} mt={5} />

                <Titulo color="blue.500">Informações Pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Gabriel Rios</Titulo>
                <Text>{dadosPaciente?.email}</Text>
                <Text>{dadosPaciente?.endereco?.estado}</Text>
                <Text>{dadosPaciente?.telefone}</Text>

                <Botao bgColor="blue.500" onPress={() => navigation.navigate("AtualizaCadastro")}>Atualizar cadastro</Botao>

                <Divider mt={5} />

                <Titulo color="blue.500">Planos de Saúde</Titulo>
                {
                    dadosPaciente?.planosSaude?.map((plano, index) => (
                        <Text key={index}>{plano}</Text>
                    ))
                }

            <Botao onPress={deslogar}>Deslogar</Botao>
            </VStack>

        </ScrollView>
    )
}