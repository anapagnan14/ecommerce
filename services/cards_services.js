const apiUrl = 'https://api-inky-nu-48.vercel.app/idolos';
export async function buscarImformacoes() {

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
        }
        const dados = await response.json();
        console.log('Dados recebidos com sucesso:', dados);

        return dados;
    } catch (error) {
        console.error('Falha ao buscar informações', error);
    }

}