# <h1>O que está sendo usado nesse projeto </h1>
- Imagem de referencia extraida do :  https://dribbble.com/
- instalação usando o npm do http-server (npm install -g http-server)

### <h1> 0.1</h1>

* Erro de execução do servidor http-server devido a configuração padrão de execução de script do windows, ativados por motivos de segurança pelo próprio sistema. 

* Medida corretiva encontrada no 
https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%C3%A7%C3%A3o-de-scripts-foi-desabilitada-neste-sistema

Passos: 
Executar o power-shell como administrador

linha de comando:
Get-ExecutionPolicy
Set-ExecutionPolicy unrestrict

Confirmar a alteração e tentar execução novamente


### <h1> Conceito do Protocolo cliente / servidor </h1>

- HTTPS E HTTP
- Portas
- Cliente solicita ao servidor
- Servidor devolve a solicitação

- Teoria baseada em um servidor local, porém estrutura se repete de modo global. 

## <h1> HTML linguagem de marcação de texto </h1>
## <h1> CSS Estilos </h1>
## <h1> Javascript Dita o comportamento da nossa página</h1>

### <h1> 0.2</h1>
- Devido ao problema de interpretação diferenciada sobre cada navegador, onde cada um tem o seu módolu de interepretação do código, usaremos um especie de padronizador do css, neste caso está sendo usado o "https://necolas.github.io/normalize.css/", existe outras opções disponíveis, basta buscar. 
- cdn normalize css

- Uso do google fonts para alterar fonte padrão -> https://fonts.google.com/
- Inclusão do <link> para linkagem da font listada no css e google no arquivos index.html 



### <h1> 0.3</h1>
- Uso de técnica Mobile First.

### <h1> 0.4</h1>
- inclusão de listas, div
- identificação por "class"
- Ajuste de layoute
- Inclusão de imagens e características.
- Edição de elisto do .css
- uso da api [https://pokeapi.co/]

### <h1> 0.5</h1>
+ Funcionamento do protocolo HTTP
- URL
- PATH
- REQUEST METHOD : Get | Post | Put | Delete | Patch
- Padrões de projetos Rest (Toda requizisão o metodo diz o que será feito)

Ex.:Requisição HTTP<BR>
URL: https://pokeapi.co/api/v2/pokemon<BR>
	${Endereço}/${path = caminho de identificação do recurso}"


- Path params e Query String
- Resquest Headers
    /configuração da api
    Ex.: accept-language: pt-BRq=1;PTq=0.3
    
- Response Headers
    contente-type: applitcaiton/jason


- Request Body
{
    "name" : "Teste"
}

* STATUS CODE (RESPOSTA INFORMANDO O QUE ACONTECEU COM A REQUISIÇÃO )

- Response Headers
    : Resposta como o "Status Code" está configurado 
- Response Body
    : A resposta em si!

- Mencionou Pré-processadores de CSS **Sass

### <h1> 0.6</h1>
- Integração com a PokeAPI {https://pokeapi.co/}
- Requisição HTTP via Javascript : fetch API (Disponívels nos browser mais modernos. Podem ser usados outros ex: JQuery e outros)
- Link reference MDN:  https://developer.mozilla.org/en-US/docs/Web/API/Response/json 

- Processamento assíncrono (requisição que não terá a resposta de imediato devidos ao processamento dos dados no percurso entre servidor e cliente com resultado influenciado também pela velocidade da conexão ou de processos no cliente/servidor).

<img src="https://live.staticflickr.com/65535/53693124047_d9be6ae51a_o.png" height="700" width="700">

- Manipulando o resultado da requisição através de uma Promise





| Referência repositório https://github.com/digitalinnovationone By:  RenanJPaula

<style>
        h1{
            color: aquamarine;
        }
</style>