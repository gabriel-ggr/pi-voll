import { Box, Text, Divider } from 'native-base'

export function CardDepoimento({depoimento}){
    return (
        <Box mt={3}>
            <Text color="gray.300">{depoimento.texto}</Text>
            <Text color="gray.300" textAlign="center" fontWeight="bold" >{depoimento.nome}</Text>
            <Divider mt={3} />
        </Box>
    )
}