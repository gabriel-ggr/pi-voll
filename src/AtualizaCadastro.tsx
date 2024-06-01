import { Input, useToast, VStack } from "native-base";
import { useState } from "react";
import { Botao } from "./componentes/botao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atualizarDadosPaciente } from "./servicos/PacienteServico";


export default function AtualizaCadastro({ navigation }: any){

    const [telefone, setTelefone] = useState('')
    const toast = useToast()

    async function atualizar(){
        const pacienteId = await AsyncStorage.getItem('pacienteId')
        console.log(pacienteId)
        if (!pacienteId) return
        
        const token = await AsyncStorage.getItem('token')
        if (!token) return

        const telefone1 = Number(telefone)

        const dados = { 
            telefone: telefone1
        }

        // passar id, token e dados como objeto para a função atualizarDadosPaciente
        const resultado = await atualizarDadosPaciente(pacienteId, token, dados)
        if (resultado){
            // toast com positivo e voltar para página de perfil.
            toast.show({
                title: 'Consulta agendada com sucesso',
                backgroundColor: 'green.500',
                })
            return navigation.goBack()
        }
        else {
            // toast negativo
            toast.show({
                title: 'Erro ao atualizar o cadastro',
                backgroundColor: 'red.500',
            }) 
        }
    }

    return (
        <VStack flex={1} alignItems='center' justifyContent="center" p={5}>
            <Input
                placeholder="Telefone"
                onChangeText={setTelefone}
                value={telefone}
                keyboardType="numeric"
            />
            <Botao onPress={atualizar}>Atualizar</Botao>
        </VStack>
    )
}