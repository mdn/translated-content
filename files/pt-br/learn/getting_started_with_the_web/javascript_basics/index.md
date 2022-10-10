---
title: JavaScript básico
slug: Learn/Getting_started_with_the_web/JavaScript_basics
tags:
  - Aprender
  - Codificação de Script
  - Iniciante
  - JavaScript
  - Web
  - l10:prioridade
translation_of: Learn/Getting_started_with_the_web/JavaScript_basics
original_slug: Aprender/Getting_started_with_the_web/JavaScript_basico
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_fwith_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

JavaScript é a linguagem de programação usada para adicionar interatividade ao seu site (por exemplo: jogos, respostas quando botões são pressionados ou dados são inseridos em formulários, estilo dinâmico, animações). Esse artigo ajuda você a começar com essa linguagem interessante e dá uma idéia do que é possível.

## O que é JavaScript, realmente?

{{Glossary("JavaScript")}} (abreviado como "JS") é uma {{Glossary("Dynamic programming language", "linguagem de programação dinâmica")}} cheia de recursos que quando aplicada em um documento {{Glossary("HTML")}}, pode fornecer interatividade dinâmica em sites. Foi inventada por Brendan Eich, co-fundador do projeto Mozilla, da Fundação Mozilla e da Corporação Mozilla.

JavaScript é incrivelmente versátil e amigável ao iniciante. Com mais experiência, você poderá criar jogos, gráficos 2D e 3D animados, aplicativos abrangentes baseados em bancos de dados e muito mais!

JavaScript em si é bastante compacto, mas muito flexível. Os desenvolvedores escreveram uma grande variedade de ferramentas sobre a linguagem JavaScript principal, desbloqueando uma grande quantidade de funcionalidades extras com o mínimo de esforço. Essas incluem:

- Interfaces de programação de aplicativos no navegador ({{Glossary ("API", "APIs")}}) - APIs integradas em navegadores da Web, fornecendo funcionalidade como criar dinamicamente HTML e definir estilos CSS, coletar e manipular um fluxo de vídeo da webcam do usuário ou gerando gráficos 3D e amostras de áudio.
- APIs de terceiros — Permitem que os desenvolvedores incorporem funcionalidades em seus sites de outros provedores de conteúdo, como o Twitter ou o Facebook.
- Estruturas e bibliotecas de terceiros — você pode aplicá-las ao seu HTML para permitir que você crie rapidamente sites e aplicativos.

Como este artigo deve ser apenas uma introdução ao JavaScript, não vamos confundir você neste estágio, falando em detalhes sobre qual é a diferença entre a linguagem JavaScript principal e as diferentes ferramentas listadas acima. Você pode aprender tudo isso em detalhes mais tarde, em nossa [área de aprendizado de JavaScript](/pt-BR/docs/Aprender/JavaScript) e no restante do MDN.

Abaixo, apresentaremos alguns aspectos da linguagem principal, e você também poderá brincar com alguns recursos da API do navegador. Divirta-se!

## Um exemplo "Olá mundo"

A seção acima pode parecer realmente empolgante, e assim deve ser — o JavaScript é uma das tecnologias mais ativas da Web e, à medida que você começa a usá-lo bem, seus sites entrarão em uma nova dimensão de poder e criatividade.

No entanto, ficar confortável com o JavaScript é um pouco mais difícil do que ficar confortável com HTML e CSS. Você pode ter que começar pequeno e continuar trabalhando em pequenos passos consistentes. Para começar, mostraremos como adicionar alguns JavaScript básicos à sua página, criando um exemplo de "Olá mundo!" ([o padrão em exemplos básicos de programação](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)).

> **Aviso:** **Importante**: Se você não acompanhou o restante de nosso curso, [faça o download desse código exemplo](https://github.com/mdn/beginner-html-site-styled/archive/gh-pages.zip) e use-o como um ponto de partida.

1. Primeiro, vá para o seu site de teste e crie uma nova pasta chamada `scripts`. Em seguida, dentro da nova pasta de scripts que você acabou de criar, crie um novo arquivo chamado `main.js`. Salve na sua pasta de `scripts`.
2. Em seguida, no seu arquivo `index.html`, insira o seguinte elemento em uma nova linha logo antes da tag de fechamento `</body>`:

    ```html
    <script src="scripts/main.js"></script>
    ```

3. Isso é basicamente a mesma coisa que o elemento {{htmlelement("link")}} para o CSS — ele aplica o JavaScript à página, para que ele tenha efeito no HTML (junto com o CSS e qualquer outra coisa na página).
4. Agora adicione o seguinte código no arquivo `main.js`:

    ```js
    const meuCabecalho = document.querySelector('h1');
    meuCabecalho.textContent = 'Ola mundo!';
    ```

5. Por fim, verifique se os arquivos HTML e Javascript estão salvos e, em seguida, carregue o `index.html` no navegador. Você deve ver algo do tipo:![](https://mdn.mozillademos.org/files/9543/hello-world.png)

> **Nota:** A razão pela qual colocamos o elemento {{htmlelement("script")}} perto da parte inferior do arquivo HTML, é que o HTML é carregado pelo navegador na ordem em que ele aparece no arquivo. Se o JavaScript é carregado primeiro ele pode afetar o HTML abaixo dele, mas as vezes isso pode não funcionar, já que o JavaScript seria carregado antes do HTML em que ele deveria trabalhar. Portanto, colocar o JavaScript próximo à parte inferior da página HTML geralmente é um meio de corrigir isto, veja [Estratégias de carregamento de scripts](/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript#Script_loading_strategies).

### O que aconteceu?

Seu texto de título foi alterado para "Hello world!" usando JavaScript. Você fez isso primeiro usando uma função chamada `{{domxref("Document.querySelector", "querySelector()")}}` para obter uma referência ao título e armazená-lo em uma variável chamada `meuCabecalho`. Isso é muito parecido ao que fizemos usando seletores CSS. Quando queremos fazer algo em um elemento, primeiro você precisa selecioná-lo.

Depois disso, você define o valor da propriedade {{domxref ("Node.textContent", "textContent")}} para "Hello world!", na variável `meuCabecalho` (que representa o conteúdo do título).

> **Nota:** Os dois recursos usados acima são partes da [API do Modelo de Objeto de Documento (DOM)](/pt-BR/docs/Learn/Common_questions/ferramentas_de_desenvolvimento_do_navegador), que permite manipular documentos.

## Curso intensivo de fundamentos da linguagem

Vamos explicar alguns dos principais recursos da linguagem JavaScript, para dar a você um melhor entendimento de como tudo funciona. Vale a pena notar que esses recursos são comuns a todas as linguagens de programação, por isso, se você dominar esses fundamentos, estará no caminho certo para programar qualquer coisa!

> **Aviso:** **Importante**: Nesse artigo, tente escrever linhas de código de exemplo no seu console JavaScript para ver o que acontece. Para mais detalhes sobre o console JavaScript, consulte [Descobrir as ferramentas do desenvolvedor do navegador](/pt-BR/docs/Learn/Common_questions/ferramentas_de_desenvolvimento_do_navegador).

### Variáveis

{{Glossary("Variable", "Variáveis")}} são espaços na memória do computador onde você pode armazenar dados. Você começa declarando uma variável com a palavra-chave `var` (menos recomendado, se aprofunde mais para uma explicação) ou a palavra chave `let`, seguida por qualquer nome que você queira chamá-la:

```js
let minhaVariavel;
```

> **Nota:** Ponto-e-vírgula no fim de uma linha indica onde uma instrução termina; só é absolutamente necessário quando você precisa separar instruções em uma única linha. No entanto, algumas pessoas acreditam que é uma boa prática colocá-las no final de cada instrução. Existem outras regras para quando você deve ou não usá-las — consulte [Seu Guia para Ponto-e-Vírgula em Javascript](https://news.codecademy.com/your-guide-to-semicolons-in-javascript/) para mais detalhes.

> **Nota:** Você pode dar quase qualquer nome a uma variável, mas há algumas restrições (veja [esse artigo sobre regras de nomes de variáveis](http://www.codelifter.com/main/tips/tip_020.shtml)). Se você não tem certeza, você pode [conferir se sua variável tem um nome válido](https://mothereff.in/js-variables).

> **Nota:** JavaScript é case sensitive — `minhaVariavel` é diferente de `minhavariavel`. Se você estiver tendo problemas no seu código, cheque seu casing!

> **Nota:** Para mais detalhes sobre a diferença entre `var` e `let`, veja [A diferença entre var e let](/pt-BR/docs/Learn/JavaScript/First_steps/Variables#The_difference_between_var_and_let).

Depois de declarar uma variável, você pode dar a ela um valor:

```js
minhaVariavel = 'Bob';
```

Você pode fazer as duas operações na mesma linha se você quiser:

```js
let minhaVariavel = 'Bob';
```

Você pode retornar o valor chamando a variável pelo nome:

```js
minhaVariavel;
```

Depois de dar à variável um valor, você pode mudá-lo:

```js
let minhaVAriavel = 'Bob';
minhaVariavel = 'Steve';
```

Note que as variáveis podem conter valores com diferentes [tipos de dados](/pt-BR/docs/Web/JavaScript/Data_structures):

| Variável                         | Explicação                                                                                                                               | Exemplo                                                                                                                           |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("String")}}     | Uma sequência de texto é conhecida como uma string. Para mostrar que o valor é uma string, você deve envolvê-la em aspas.                | `let minhaVariavel = 'Bob';`                                                                                                      |
| {{Glossary("Number")}}     | Um número. Números não tem aspas ao redor deles.                                                                                         | `let minhaVariavel = 10;`                                                                                                         |
| {{Glossary("Boolean")}} | Um valor verdadeiro ou falso. As palavras `true` e `false` são palavras-chaves especiais em JS e não precisam de aspas.                  | `let minhaVariavel = true;`                                                                                                       |
| {{Glossary("Array")}}     | Uma estrutura que permite armazenar vários valores em uma única variável.                                                                | `let minhaVariavel = [1,'Bob','Steve',10];` Acesse cada item do array dessa maneira: `minhaVariavel[0]`, `minhaVariavel[1]`, etc. |
| {{Glossary("Object")}}     | Basicamente, qualquer coisa. Tudo em JavaScript é um objeto e pode ser armazenado em uma variável. Tenha isso em mente enquanto aprende. | `let minhaVariavel = document.querySelector('h1');` Todos os exemplos acima também.                                               |

Então, por que precisamos de variáveis? Bom, variáveis são necessárias para fazer qualquer coisa interessante em programação. Se os valores não pudessem mudar, então você não poderia fazer nada dinâmico, como personalizar uma mensagem de boas-vindas, ou mudar a imagem mostrada em uma galeria de imagens.

### Comentários

Os comentários são, essencialmente, pequenos trechos de texto que podem ser adicionados entre os códigos e são ignorados pelo navegador. Você pode colocar comentários no código JavaScript, assim como em CSS:

```js
/*
Tudo no meio é um comentário.
*/
```

Se o seu comentário não tiver quebras de linha, é mais fácil colocá-lo depois de duas barras como esta:

```js
// Isto é um comentário.
```

### Operadores

Um `{{Glossary("operator", "operador")}}` é um símbolo matemático que produz um resultado baseado em dois valores (ou variáveis). Na tabela a seguir, você pode ver alguns dos operadores mais simples, além de alguns exemplos para experimentar no console JavaScript.

| Operador                        | Explicação                                                                                                                                                                             | Simbolo(s)    | Exemplo                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adição                          | Usado para somar dois números ou juntar duas strings.                                                                                                                                  | `+`           | `6 + 9; "Ola " + "mundo!";`                                                                                                                                                                                                                                                                                                                                                         |
| Subtração, multiplição, divisão | Fazem exatamente o que você espera que eles façam na matemática básica.                                                                                                                | `-`, `*`, `/` | `9 - 3; 8 * 2; // no JS a multiplicação é um asterisco 9 / 3;`                                                                                                                                                                                                                                                                                                                      |
| Atribuição                      | Você já viu essa, ela associa um valor a uma variável.                                                                                                                                 | `=`           | `let minhaVariavel = 'Bob';`                                                                                                                                                                                                                                                                                                                                                        |
| Operador de igualdade           | Faz um teste para ver se dois valores são iguais, retornando um resultado `true`/`false` (booleano).                                                                                   | `===`         | `let minhaVAriavel = 3; minhaVariavel === 4;`                                                                                                                                                                                                                                                                                                                                       |
| Negação, não igual              | Retorna o valor lógico oposto do sinal; transforma um true em um false, etc. Quando usado junto com o operador de igualdade, o operador de negação testa se os valores são diferentes. | `!`, `!==`    | Para "Negação", a expressão básica é `true`, mas a comparação retorna `false` porque a negamos:`let minhaVariavel = 3; !(minhaVariavel === 3);`"Não igual" dá basicamente o mesmo resultado com sintaxe diferente. Aqui estamos testando "é `minhaVariavel` NÃO é igual a 3". Isso retorna `false` porque `minhaVariavel` É igual a 3.`let minhaVariavel = 3; minhaVariavel !== 3;` |

Há vários outros operadores para explorar, mas por enquanto esses são suficientes. Consulte [Expressões e operadores](/pt-BR/docs/Web/JavaScript/Reference/Operators) para ver uma lista completa.

> **Nota:** Misturar tipos de dados pode levar a resultados estranhos quando uma operação é executada, portanto, tome cuidado para declarar suas variáveis corretamente, e você obterá os resultados esperados. Por exemplo, digite `'35' + '25'` no seu console. Por que você não teve o resultado esperado? Porque as aspas transformam os números em strings, você acabou concatenando strings em vez de somar os números. Se você digitar `35 + 25`, você obterá o resultado correto.

### Condicionais

Condicionais são estruturas de código que te permitem testar se uma expressão retorna verdadeiro ou não, executando um código alternativo revelado por seu resultado. Uma forma muito comum de condicional é a instrução `if ... else`. Por exemplo:

```js
let sorvete = 'chocolate';
if (sorvete === 'chocolate') {
  alert('Opa, Eu amo sorvete de chocolate!');
} else {
  alert('Ahh, mas chocolate é o meu favorito...');
}
```

A expressão dentro do `if ( ... )` é o teste — ela usa o operador de igualdade (como descrito anteriormente) para comparar a variável `sorvete` com a string `chocolate` para ver se elas são iguais. Se essa comparação retorna `true`, o primeiro bloco de código será executado. Se a comparação não for verdadeira, o primeiro bloco de código será ignorado e o segundo bloco de código, após a instrução `else`, será executado.

### Funções

{{Glossary("Function", "Funções")}} são uma maneira de encapsular funcionalidades que você deseja reutilizar. Quando você precisa de um procedimento, você pode chamar a função com um nome, em vez de reescrever o código inteiro a cada vez. Você já viu alguns usos de funções acima, por exemplo:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("Ola!");
```

Essas funções, `document.querySelector` e `alert` são pré-definidas nos navegadores para você usar quando quiser.

Se você ver algo que parece com um nome de variável, mas com parênteses — `()` — depois, provavelmente é uma função. Funções geralmente tem {{Glossary("Argument", "Argumentos")}} — pedaços de dados que elas precisam para realizarem o seu trabalho. Os argumentos são colocados dentro dos parênteses e separados por vírgulas, se houver mais de um.

Por exemplo, a função `alert()` faz com que uma caixa pop-up apareça dentro da janela do navegador, mas precisamos passar uma string como argumento para dizer à função o que escrever na caixa pop-up.

A boa noticia é que você pode definir suas próprias funções — no próximo exemplo nós escrevemos uma função simples que recebe dois números como argumentos e os multiplica:

```js
function multiplica(num1,num2) {
  let resultado = num1 * num2;
  return resultado;
}
```

Tente executar a função acima no console e teste com vários argumentos. Por exemplo:

```js
multiplica(4, 7);
multiplica(20, 20);
multiplica(0.5, 3);
```

> **Nota:** A instrução [`return`](/pt-BR/docs/Web/JavaScript/Reference/Statements/return) diz ao navegador para retornar a variável `resultado` da função para que ela esteja disponível para uso. Isso é necessário porque as variáveis definidas dentro das funções só estão disponíveis dentro destas funções. Isso é chamado {{Glossary("Scope", "Escopo")}} de variável (leia mais em [escopo da variável](/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Variable_scope).)

### Eventos

Interatividade real em um site precisa de eventos. Estas são estruturas de código que percebem as coisas que acontecem no navegador, executando o código em resposta. O exemplo mais óbvio é o [evento de clique](/pt-BR/docs/Web/API/Element/click_event), que é disparado pelo navegador quando você clica em algo com o mouse. Para demonstrar isso, insira o seguinte código no seu console e, em seguida, clique na página da Web atual:

```js
document.querySelector('html').onclick = function() {
    alert('Ai! Pare de me cutucar!');
}
```

Há muitas maneiras de associar um evento a um elemento. Aqui selecionamos o elemento {{htmlelement("html")}}, definindo sua propriedade [`onclick`](/pt-BR/docs/Web/API/GlobalEventHandlers/onclick) igual a uma função anônima (ou seja, sem nome), que contém o código que queremos que o evento clique execute.

Observe que:

```js
document.querySelector('html').onclick = function() {};
```

é equivalente a

```js
let meuHTML = document.querySelector('html');
meuHTML.onclick = function() {};
```

É só uma maneira mais curta de escrever.

## Melhorando nosso site de exemplo

Agora que analisamos alguns fundamentos do JavaScript, vamos adicionar alguns recursos interessantes ao nosso site de exemplo para ver o que é possível fazer.

### Adicionando um modificador de imagem

Nessa parte, nós adicionaremos outra imagem no nosso site, e vamos usar o JavaScript para alternar entre as duas, quando a imagem for clicada.

1. Antes de tudo, ache outra imagem que você gostaria que aparecesse no seu site. Tenha certeza que ela tem o mesmo tamanho que sua primeira imagem, ou o mais perto disso possível.
2. Salve a imagem na pasta `imagens`.
3. Renomeie a imagem para 'firefox2.png' (sem as aspas).
4. Vá no seu arquivo `main.js`, e digite o seguinte código JavaScript (se seu "Ola mundo" em JavaScript ainda estiver lá, delete-o):

    ```js
    let minhaImagem = document.querySelector('img');

    minhaImagem.onclick = function() {
        let meuSrc = minhaImagem.getAttribute('src');
        if(meuSrc === 'images/firefox-icon.png') {
          minhaImagem.setAttribute ('src','images/firefox2.png');
        } else {
          minhaImagem.setAttribute ('src','images/firefox-icon.png');
        }
    }
    ```

5. Salve todos os arquivos e carregue o `index.html` no navegador. Agora quando você clicar na imagem, ela deve mudar para a outra!

Você armazena uma referência ao seu elemento {{htmlelement("img")}} na variável `minhaImagem`. Depois, você faz a propriedade do manipulador de evento `onclick` dessa variável igual a uma função sem nome (uma função "anônima"). Agora, toda vez que esse elemento de imagem é clicado:

1. Você recupera o valor do atributo `src` da imagem.
2. Você usa uma condicional para checar se o valor `src` é igual ao caminho da imagem original:

    1. Se for, você muda o valor de `src` para o caminho da segunda imagem, forçando a outra imagem a ser carregada dentro do elemento {{htmlelement("img")}}.
    2. Se não é (significando que já mudou), nós mudamos o valor `src` de volta ao caminho da imagem, para o estado original.

### Adicionando uma mensagem personalizada de boas vindas

Em seguida, adicionaremos outro trecho de código, alterando o título da página para uma mensagem personalizada de boas vindas quando o usuário realizar sua primeira visita ao site. Essa mensagem de boas vindas persistirá, quando o usuário deixar o site e voltar mais tarde — salvaremos a mensagem usando a [API de Armazenamento Web](/pt-BR/docs/Web/API/Web_Storage_API_pt_br). Incluiremos também uma opção para mudar o usuário e, portanto, a mensagem de boas vindas sempre que necessário.

1. Em `index.html`, adicione a seguinte linha de código antes do elemento {{htmlelement("script")}}:

    ```html
    <button>Mudar usuário</button>
    ```

2. Em `main.js`, adicione o seguinte código no fim do arquivo, exatamente como está escrito — isso pega referências para o novo botão que adicionamos e para o título, e guarda ambos em variáveis:

    ```js
    let meuBotao = document.querySelector('button');
    let meuCabecalho = document.querySelector('h1');
    ```

3. Agora adicione a seguinte função para criar a saudação personalizada — isso não vai fazer nada ainda, mas corrigiremos isso em um momento:

    ```js
    function defineNomeUsuario() {
      let meuNome = prompt('Por favor, digite seu nome.');
      localStorage.setItem('nome', meuNome);
      meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
    }
    ```

    Essa função contem uma função [`prompt()`](/pt-BR/docs/Web/API/Window/prompt), que traz uma caixa de diálogo assim como `alert()` faz. Este `prompt()`, no entanto, pede ao usuário para inserir algum dado e guarda os dados em uma variável quando o botão **OK** é pressionado. Nesse caso, estamos pedindo ao usuário para digitar seu nome. Em seguida, chamamos uma API denominada `localStorage`, o que nos permite guardar dados no navegador para usarmos mais tarde. Usamos a função `setItem()` de localStorage para criar e guardar um item de dado chamado `'nome'`, definindo seu valor para a variável `meuNome` que contém o nome que o usuário digitou. Finalmente, definimos o `textContent` do título como uma string, mais o nome recém-armazenado do usuário.

4. Em seguida, adicione esse bloco `if ... else` — poderíamos chamar isso de código de inicialização, pois ele estrutura o aplicativo quando é carregado pela primeira vez:

    ```js
    if(!localStorage.getItem('nome')) {
      defineNomeUsuario();
    } else {
      let nomeGuardado = localStorage.getItem('nome');
      meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
    }
    ```

    Primeiro, esse bloco usa o operador de negação (NÃO lógico representado pelo `!`) para checar se o dado `nome` existe — se não existir, a função `defineNomeUsuario()` é executada para criá-lo. Se ele já existir (isto é, se o usuário já tiver digitado quando visitou o site anteriormente), nós recuperamos o nome guardado usando `getItem()` e associamos o `textContent` do título a uma string, mais o nome do usuário, como fizemos dentro de `defineNomeUsuario()`.

5. Finalmente, coloque o evento `onclick` no botão, para que quando clicado, ele execute a função `defineNomeUsuario()`. Isso permite que o usuário defina um novo nome sempre que quiser ao pressionar o botão:

    ```js
    meuBotao.onclick = function() { defineNomeUsuario();
    }
    ```

Agora quando você visitar seu site pela primeira vez, ele solicitará seu nome de usuário e, em seguida, enviará uma mensagem personalizada. Você pode alterar o nome a qualquer momento, pressionando o botão. Como um bônus, porque o nome é armazenado dentro de `localStorage` , ele persiste depois que o site é fechado, mantendo a mensagem personalizada lá quando você abrir o site novamente!

### Um nome de usuário nulo?

Quando você executa o exemplo e obtém a caixa de diálogo que solicita a inserção do seu nome de usuário, tente pressionar o botão Cancelar. Você deve terminar com um título que diz "Mozilla is cool, null". Isso ocorre porque, quando você cancela o prompt, o valor é definido como [`null`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null), um valor especial em JavaScript que se refere basicamente à ausência de um valor.

Tente também pressionar OK sem digitar nenhum nome - você deve terminar com um título que diz "Mozilla é legal,", por razões bastante óbvias.

Se você quiser evitar esses problemas, verifique se o usuário não inseriu um nome `null` ou em branco, atualizando a função `defineNomeUsuario()` para isso:

```js
function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
  }
}
```

Na linguagem humana - se `meuNome` não tiver valor ou seu valor for `null`, execute `defineNomeUsuario()` novamente desde o início. Se ele tiver um valor (se as instruções acima não forem verdadeiras), armazene o valor em `localStorage` e defina-o como o texto do cabeçalho.

## Conclusão

Se você seguiu todas as instruções deste artigo, você deve terminar com uma página parecida com essa (você também pode [ver nossa versão aqui](https://mdn.github.io/beginner-html-site-scripted/)):

![](https://mdn.mozillademos.org/files/9539/website-screen-scripted.png)

Se você ficar empacado, você pode comparar seu trabalho com o nosso [exemplo finalizado no Github](https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js).

Nós mal arranhamos a superfície do JavaScript. Se você gostou e deseja avançar ainda mais, veja os outros recursos abaixo.

## Veja também

- [JavaScript — Script dinâmico do lado cliente](/pt-BR/docs/Aprender/JavaScript)
  - : Nosso tópico de aprendizado JavaScript - mergulhe no JavaScript com muito mais detalhes.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Um excelente recurso para aspirantes a desenvolvedores web - Aprenda JavaScript em um ambiente interativo, com breves lições e testes interativos, guiados por avaliação automatizada. As primeiras 40 lições são gratuitas e o curso completo está disponível por um pequeno pagamento único.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

## Neste Módulo

- [Instalando os programas básicos](/pt-BR/docs/Aprender/Getting_started_with_the_web/instalando_programas_basicos)
- [Como será o seu site?](/pt-BR/docs/Aprender/Getting_started_with_the_web/com_que_seu_site_vai_parecer)
- [Lidando com arquivos](/pt-BR/docs/Aprender/Getting_started_with_the_web/lidando_com_arquivos)
- [HTML básico](/pt-BR/docs/Aprender/Getting_started_with_the_web/HTML_basico)
- [CSS básico](/pt-BR/docs/Aprender/Getting_started_with_the_web/CSS_basico)
- [JavaScript básico](/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico)
- [Publicando seu website](/pt-BR/docs/Aprender/Getting_started_with_the_web/Publicando_seu_site)
- [Como a web funciona](/pt-BR/docs/Aprender/Getting_started_with_the_web/Como_a_Web_funciona)
