export function converterStringParaData(dateString: string): Date {
  if (!dateString) {
    console.warn('Invalid date string:', dateString);
    return new Date(); // Retorna um valor padrão ou lida com o erro apropriadamente
  }

  try {
    const [dia, mes, anoEHora] = dateString.split("/");
    const [ano, hora] = anoEHora.split(" ");
    const [horas, minutos] = hora.split(":");

    const dataConvertida = new Date(Number(ano), Number(mes) - 1, Number(dia), Number(horas), Number(minutos));

    return dataConvertida;
  } catch (error) {
    console.error('Error converting date string:', error);
    return new Date(); // Retorna um valor padrão ou lida com o erro apropriadamente
  }
}

export function formatarData(data: Date): string {
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0!
  const ano = data.getFullYear();
  const horas = data.getHours().toString().padStart(2, '0');
  const minutos = data.getMinutes().toString().padStart(2, '0');

  return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}
