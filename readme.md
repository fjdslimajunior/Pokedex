# <h1>O que está sendo usado nesse projeto </h1>
- Imagem de referencia extraida do :  https://dribbble.com/
- instalação usando o npm do http-server (npm install -g http-server)

### <h1> 0.1</h1>

Erro de execução do servidor http-server devido a configuração padrão de execução de script do windows, ativados por motivos de segurança pelo próprio sistema. 

Medida corretiva encontrada no 
https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%C3%A7%C3%A3o-de-scripts-foi-desabilitada-neste-sistema

Passos: 
Executar o power-shell como administrador

linha de comando:
Get-ExecutionPolicy
Set-ExecutionPolicy unrestrict

Confirmar a alteração e tentar execução novamente


### <h1> Conceito do Protocolo cliente / servidor </h1>

HTTPS E HTTP
Portas

Cliente solicita ao servidor
Servidor devolve a solicitação

Teoria baseada em um servidor local, porém estrutura se repete de modo global. 

## <h1> HTML linguagem de marcação de texto </h1>
## <h1> CSS Estilos </h1>
## <h1> Javascript Dita o comportamento da nossa página</h1>

### <h1> 0.2</h1>
Devido ao problema de interpretação diferenciada sobre cada navegador, onde cada um tem o seu módolu de interepretação do código, usaremos um especie de padronizador do css, neste caso está sendo usado o "https://necolas.github.io/normalize.css/", existe outras opções disponíveis, basta buscar. 

cdn normalize css





| Referência repositório https://github.com/digitalinnovationone By:  RenanJPaula

<style>
        h1{
            color: aquamarine;
        }
</style>