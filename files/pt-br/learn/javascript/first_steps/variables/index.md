---
title: Armazenando as informações que você precisa — Variáveis
slug: Learn/JavaScript/First_steps/Variables
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}

Depois de ler os últimos artigos, você deve saber agora o que é o JavaScript, o que ele pode fazer para você, como você usa isso junto com outras tecnologias da web e as características principais de alto nível. Neste artigo, iremos ao básico, vendo como trabalhar com a maioria dos blocos de construção básicos de JavaScript - Variáveis.

| Pré-requisitos: | Conhecimento básico em informática, uma compreensão básica de HTML e CSS, uma compreensão do que é o JavaScript. |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Objetivo:       | Familiarizar-se com o básico de variáveis em JavaScript.                                                         |

## Ferramentas que você precisa

Ao longo deste artigo, pediremos que você digite linhas de código para testar seu entendimento do conteúdo. Se você estiver utilizando um navegador em um computador, o melhor lugar para digitar seus código de exemplos é o console JavaScript do seu navegador (veja o artigo [O que são as ferramentas de desenvolvimento do navegador](/pt-BR/docs/Learn/Common_questions/ferramentas_de_desenvolvimento_do_navegador) para mais informações sobre como acessar essa ferramenta).

No entanto, nós também providenciamos um simples console JavaScript incorporado à página logo abaixo para que você inserir o código, caso não esteja usando um navegador com um console JavaScript facilmente disponível, ou se achar o console incorporado mais confortável.

## O que é uma variável?

Uma variável é um container para um valor, como um número que podemos usar em uma operação de adição, ou uma sequência de texto que possamos usar como parte de uma oração. Mas uma coisa especial a respeito das variáveis é que seu conteúdo pode mudar. Vamos ver um exemplo simples:

```html
<button>Aperte-me</button>
```

```js
var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o seu nome?");
  alert("Olá " + nome + ", é um prazer te ver!");
};
```

{{ EmbedLiveSample('O_que_é_uma_variável', '100%', 50, "", "", "hide-codepen-jsfiddle" ) }}

Nesse exemplo, apertar o botão executa algumas linhas de código. A primeira linha exibe uma caixa pop-up na tela que pede ao leitor para inserir o seu nome, e então armazena o valor na variável. A segunda linha exibe uma mensagem de boas vindas que inclui seu nome, obtido do valor da variável.

Para entender porque isso é útil, vamos pensar sobre como nós escreveríamos esse exemplo sem usar uma variável. Iria acabar se parecendo com algo do tipo:

```plain example-bad
var nome = prompt('Qual é o seu nome?');

if (nome === 'Adão') {
  alert('Olá Adão, é um prazer te ver!');
} else if (nome === 'Alan') {
  alert('Olá Alan, é um prazer te ver!');
} else if (nome === 'Bella') {
  alert('Olá Bella, é um prazer te ver!');
} else if (nome === 'Bianca') {
  alert('Olá Bianca, é um prazer te ver!');
} else if (nome === 'Chris') {
  alert('Olá Chris, é um prazer te ver !');
}

// ... e assim por diante ...
```

Você talvez não entenda totalmente a sintaxe que estamos usando (ainda!), mas deve ter pegado a ideia — se nós não tivermos variáveis disponíveis teríamos que implementar um bloco de código gigantesco para conferir qual era o nome inserido, e então exibir a mensagem apropriada para aquele nome. Isso é obviamente muito ineficiente (o código é muito maior, mesmo para apenas quatro opções de nome), e simplesmente não funcionaria — você não poderia armazenar todas as possíveis opções de nome.

Variáveis simplesmente fazem sentido, e a medida que você for aprendendo mais sobre JavaScript elas começarão a se tornar uma coisa natural.

Outra coisa especial sobra as variáveis é que elas podem conter praticamente qualquer coisa — não apenas cadeias de texto e números. Variáveis também podem conter dados complexos e até mesmo funções completas para fazer coisas incríveis. Você irá aprender mais sobre isso a medida que continuarmos.

> **Nota:** Perceba que dissemos que as variáveis contém valores. Essa é uma distinção importante a se fazer. Elas não são os valores; e sim os containers para eles. Você pode pensar nelas sendo pequenas caixas de papelão nas quais você pode guardar coisas..

![](boxes.png)

## Declarando uma variável

Para usar uma variável primeiro tem que criá-la — mais precisamente, chamamos isso de declarar a variável. Para fazê-lo digitamos a palavra chave `var` seguido do nome que desejamos dar à variável:

```js
var meuNome;
var minhaIdade;
```

Aqui, estamos criando duas variáveis chamadas `meuNome` e `minhaIdade`. Tente agora digitar essas linhas no console do seu navegador. Depois disso, tente criar uma variável (ou duas) com suas próprias escolhas de nomes.

> **Nota:** No JavaScript, todas as intruções em código deve terminar com um ponto e vírgula (`;`) — seu código pode até funcionar sem o ponto e vírgula em linhas únicas, mas provavelmente não irá funcionar quando estiver escrevendo várias linhas de código juntas. Tente pegar o hábito de sempre incluir o ponto e vírgula.

Você pode testar se os valores agora existem no ambiente de execução digitando apenas os nomes das variáveis, ex.:

```js
meuNome;
minhaidade;
```

Elas atualmente não possuem valor; são containers vazios. Quando você insere o nome de uma variável, você deve obter em retorno ou um valor `undefined` (indefinido), ou se a variável não existir, você recebe uma mensagem de erro — tente digitar:

```js
scoobyDoo;
```

> **Nota:** Não confunda uma variável que existe mas não tenho valor definido com uma variável que não existe — são coisas bem diferentes.

## Inicializando uma variável

Uma vez que você declarou uma variável, você pode inicializá-la com um valor. Você faz isso digitando o nome da variável, seguido do sinal de igual (`=`) e o valor que deseja atribuir a ela. Por exemplo:

```js
meuNome = "Chris";
minhaIdade = 37;
```

Tente voltar ao console agora e digitar essas linhas acima. Você deve ver o valor que atribuiu à variável retornado no console confirmando-o, em cada caso. De novo, você pode retornar os valores de suas variáveis simplesmente digitando seus nomes no console — tente isso novamente:

```js
meuNome;
minhaIdade;
```

Você pode declarar e inicializar uma variável ao mesmo tempo, assim:

```js
var meuNome = "Chris";
```

Isso provavelmente é como irá fazer na maioria das vezes, já que é mais rápido do que fazer as duas ações em duas linhas separadas.

## A diferença entre var e let

Agora você pode estar pensando "por que precisamos de duas palavras-chave para definir variáveis? Por que `var` _e_ `let`?".

As razões são um tanto históricas. Quando o JavaScript foi criado, havia apenas `var`. Isso funciona basicamente bem na maioria dos casos, mas tem alguns problemas na maneira como funciona — seu design pode ser confuso ou totalmente irritante. Portanto, `let` foi criada nas versões modernas de JavaScript, uma nova palavra-chave para criar variáveis que funcionam de maneira um pouco diferente para `var`, corrigindo seus problemas no processo.

Algumas diferenças simples são explicadas abaixo. Não abordaremos todas as diferenças agora, mas você começará a descobri-las à medida que aprender mais sobre JavaScript (se realmente quiser ler sobre elas agora, fique à vontade para conferir nossa [página de referência let](/pt-BR/docs/Web/JavaScript/Reference/Statements/let)).

Para começar, se você escrever um programa JavaScript de várias linhas que declare e inicialize uma variável, poderá realmente declarar uma variável com `var` depois de inicializá-la e ainda funcionará. Por exemplo:

```js
meuNome = "Chris";

function logNome() {
  console.log(meuNome);
}

logNome();

var meuNome;
```

> **Nota:** Isso não funcionará ao digitar linhas individuais em um console JavaScript, apenas ao executar várias linhas de JavaScript em um documento da web.

Isso funciona por causa do **hoisting** — leia [var hoisting](/pt-BR/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) pra mais detalhes.

Hoisting não funciona mais com `let`. Se mudássemos de `var` para `let` no exemplo acima, teríamos um erro. Isso é bom — declarar uma variável depois que você a inicializa resulta em código confuso e difícil de entender.

E depois, ao usar `var`, você pode declarar a mesma variável quantas vezes quiser, mas com `let` você não consegue. Isso pode funcionar:

```js
var meuNome = "Chris";
var meuNome = "Bob";
```

Mas isso geraria um erro na segunda linha:

```js
let meuNome = "Chris";
let meuNome = "Bob";
```

Você precisaria fazer assim:

```js
let meuNome = "Chris";
meuNome = "Bob";
```

Novamente, essa é uma decisão sensata da linguagem. Não há razão para redeclarar variáveis — isso apenas torna as coisas mais confusas.

Por esses motivos e mais, recomendamos que você use `let` o máximo possível em seu código, em vez de `var`. Não há motivo para usar `var`, a menos que você precise oferecer suporte para versões antigas do Internet Explorer com seu código (ele não suporta `let` até a versão 11; o navegador mais moderno do Windows, o Edge, suporta `let`).

## Atualizando uma variável

Uma vez que uma tenha um valor atribuido, você pode atualizar esse valor simplesmente dando a ela um valor diferente. Tente inserir as seguintes linhas no seu console:

```js
meuNome = "Bob";
minhaIdade = 40;
```

### Um adendo sobre regras de nomeação de variáveis

Você pode chamar uma variável praticamente qualquer nome que queira, mas há limitações. Geralmente você deve se limitar a utilizar somente caracteres latinos (0-9, a-z, A-Z) e o caractere underline ( \_ ).

- Você não deve usar outros caracteres porque eles podem causar erros ou ser difíceis de entender por uma audiência internacional.
- Não use underline no início do nome de variáveis — isso é utilizado em certos construtores JavaScript para significar coisas específicas, então pode deixar as coisas confusas.
- Não use número no início do nome de variáveis. Isso não é permitido e irá causar um erro.
- Uma conveção segura e se ater é a chamada ["lower camel case"](https://pt.wikipedia.org/wiki/CamelCase), onde você junta várias palavras, usando minúscula para a primeira palavra inteira e, em seguida, maiusculiza a primeira letra das palavras subsequentes. Temos utilizado esse procedimento para os nomes das nossas variáveis nesse artigo até aqui.
- Faça nomes de variáveis intuitivos, para que descrevam o dado que ela contém. Não use letras ou números únicos, ou frases muito longas.
- As variáveis diferenciam letras maiúsculas e minúsculas — então `minhaidade` é uma variável diferente de `minhaIdade`.
- Um último ponto — você também precisa evitar utilizar palavras reservadas pelo JavaScript como nome para suas variáveis — com isso, queremos dizer as palavras que fazem parte da sintaxe do JavaScript! Então você não pode usar palavras como `var`, `function`, `let` e `for` como nome de variáveis. Os navegadores vão reconhecê-las como itens de código diferentes e, portanto, você terá erros.

> **Nota:** Você pode encontrar uma lista bem completa de palavras reservadas para evitar em [Gramática léxica — Palavras-chave](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#Palavras-chave).

Exemplos de bons nomes:

```plain example-good
idade
minhaIdade
inicio
corInicial
valorFinalDeSaida
audio1
audio2
```

Exemplos ruins de nomes:

```plain example-bad
1
a
_12
minhaidade
MINHAIDADE
var
Document
skjfndskjfnbdskjfb
esseeumnomedevariavelbemlongoeestupido
```

Tente criar mais algumas variáveis agora, com a orientação acima em mente.

## Tipos de variáveis

Existem alguns diferentes tipos de dados que podemos armazenar em variáveis. Nessa seção iremos descrevê-los brevemente, e então em artigos futuros você aprenderá sobre eles em mais detalhes.

Até agora nós vimos os dois primeiros, mas há outros.

### Números

Você pode armazenar números em variáveis, tanto números inteiros, como por exemplo 30 (também chamados de _integers_) como números decimais, por exemplo 2.456 (também chamados de _floats_ ou _floating point numbers_). Você não precisa declarar tipos de variáveis no JavaScript, diferentemente de outras linguagens de programação. Quando você atribui a uma variável o valor em número, você não inclui as aspas:

```js
var minhaIdade = 17;
```

### _Strings_ (cadeias de texto)

_Strings_ são sequências de texto. Quando você dá a uma variável um valor em texto (_string_), você precisa envolver o texto em aspas simples ou duplas; caso contrário, o JavaScript vai tentar interpretá-lo como sendo outro nome de variável.

```js
var despedidaGolfinho = "Até logo e obrigado por todos os peixes!";
```

### _Booleans_ (boleanos)

_Booleans_ são valores verdadeiro/falso (_true/false_) — eles podem ter dois valores, `true` (verdadeiro) ou `false` (falso). São geralmente usados para verificar uma condição, que em seguida o código é executado apopriadamente. Por exemplo, um caso simples seria:

```js
var estouVivo = true;
```

Enquanto na realidade seria utlizado mais da seguinte forma:

```js
var teste = 6 < 3;
```

Esse exemplo está usando o operador "menor que" (`<`) para testar se 6 é menor que 3. Como você pode esperar, irá retornar `false` (falso), porque 6 não é menor que 3! Você aprenderá mais sobre tais operadores mais tarde no curso.

### _Arrays_

Um array é um único objeto que contém valores múltiplos inseridos entre colchetes e separados por vírgulas. Tente inserir as seguintes linhas de código no seu console:

```js
var meuNomeArray = ["Chris", "Bob", "Jim"];
var meuNumeroArray = [10, 15, 40];
```

Uma vez que esses arrays estejam definidos, você pode acessar cada um de seus valores através de sua localização dentro do array. Tente essas linhas:

```js
meuNomeArray[0]; // deve retornar 'Chris'
meuNumeroArray[2]; // deve retornar 40
```

Os colchetes especificam um valor do índice correspondente à posição do valor que você deseja retornado. Você talvez tenha notado que os arrays em JavaScript são indexados a partir do zero: o primeiro elemento está na posíção 0 do índice.

Você aprenderá mais sobre arrays em um artigo futuro.

### Objetos

Em programação, um objeto é uma estrutura de código que representa um objeto da vida real. Você pode ter um simples objeto que representa um estacionamento de carro contendo informações sobre sobre sua largura e comprimento, ou você poderia ter um objeto que representa uma pessoa, e contém dados sobre seu nome, altura, peso, que idioma ela fala, como dizer olá a ela, e mais.

Tente inserir a seguinte linha em seu console:

```js
var cachorro = { nome: "Totó", raca: "Dálmata" };
```

Para obter a informação armazenada no objeto, você pode usar a seguinte sintaxe:

```js
cachorro.nome;
```

Nós não iremos ver mais sobre objetos por agora — você pode aprender mais sobre eles em um artigo futuro.

## Digitação permissiva

JavaScript é uma "dynamically typed language", o que significa que, diferente de outras linguagens, você não precisa especificar que tipo de dados uma variável irá conter (ex.: números, cadeias de texto, arrays, etc).

Por exemplo, se você declarar uma variável e dar a ela um valor encapsulado em aspas, o navegador irá tratar a variável como sendo uma _string_ (cadeia de texto):

```js
var minhaString = "Olá";
```

Irá continuar sendo uma _string_, mesmo que dentro das apas contenha um número, então seja cuidadoso:

```js
var meuNumero = "500"; // opa, isso continua sendo uma string
typeof meuNumero;
meuNumero = 500; // bem melhor — agora isso é um número
typeof meuNumero;
```

Tente inserir as quatro linhas acima em seu console uma por uma, e veja quais são os resultados. Você notará que estamos usando uma função especial chamada `typeof()` — ela irá retornar o tipo de dado da variável que você passar. Da primeira vez que for executada, deve retornar `string`, como naquele ponto a variável `meuNumero` contém uma _string_, `'500'`. Dê uma olhada e veja o que é retornado da segunda vez que você a utilizar.

## Constants em JavaScript

Muitas linguagens de programação têm o conceito de _constant_ — um valor que uma vez declarado não pode ser alterado. Há muitas razões pelas quais você deseja fazer isso, desde segurança (se um script de terceiros alterou esses valores, poderia causar problemas) até a depuração e a compreensão do código (é mais difícil alterar acidentalmente valores que não devem ser alterados e bagunçar as coisas).

Nos primeiros dias do JavaScript, não existiam _constants_. No JavaScript moderno, temos a palavra-chave `const`, que nos permite armazenar valores que nunca podem ser alterados:

```js
const diasNaSemana = 7;
const horasNoDia = 24;
```

`const` funciona exatamente da mesma maneira que `let`, exceto que você não pode atribuir um novo valor a `const`. No exemplo a seguir, a segunda linha geraria um erro:

```js
const diasNaSemana = 7;
diasNaSemana = 8;
```

## Teste suas habilidades!

Você chegou ao final deste artigo, mas consegue se lembrar das informações mais importantes? Você pode encontrar alguns testes adicionais para verificar se você reteve essas informações antes de prosseguir — veja [Teste suas habilidades: variáveis](/pt-BR/docs/Learn/JavaScript/First_steps/Teste_suas_habilidades:_variaveis).

## Sumário

Por agora você deve saber razoavelmente sobre variáveis JavaScript e como criá-las. No próximo artigo Vamos focar nos números em mais detalhes, vendo como fazer matemática básica no JavaScript.

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Maths", "Learn/JavaScript/First_steps")}}
