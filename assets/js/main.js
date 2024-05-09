const offset = 0;
const limit = 11;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
//quanto o "state code: 200 OK" execute a ".then(function(response)){}".
    .then((response) => response.json()) //converte a resposta em .json
    .then((jasonBody) => console.log(jasonBody))
//caso retorne erro execute a função abaixo.    
    .catch((error) =>console.error(error))
// //idependente do retorno ser ok ou erro, execute a função abaixo    
//     .finally(() => console.log('Requisição finalizada!')


//exemplo de extrutura de tratamento  de error
/*try {

} catch (error) {

} finally {

}
*/