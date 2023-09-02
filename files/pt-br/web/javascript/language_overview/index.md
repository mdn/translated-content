---
title: Uma reintrodução ao JavaScript (Tutorial de JS)
slug: Web/JavaScript/Language_overview
---

## Introdução

Por que uma reintrodução? Porque [JavaScript](/pt-BR/JavaScript) é conhecida como [a mais incompreendida linguagem de programação do mundo](http://javascript.crockford.com/javascript.html). Embora muitas vezes ridicularizada como um brinquedo, por baixo de sua simplicidade enganosa estão alguns recursos poderosos da linguagem, que agora é usado por um número incrível de aplicações de alto nível, mostrando que o conhecimento mais profundo desta tecnologia é uma habilidade importante para qualquer desenvolvedor web, mobile ou desktop.

É sempre bom começar com a história da linguagem. A JavaScript foi criada em 1995 por Brendan Eich, um engenheiro da Netscape, e lançada pela primeira vez com o Netscape 2 no início de 1996. Foi inicialmente chamada de LiveScript, mas logo foi rebatizada, em uma decisão de marketing malfeita, para tentar crescer sobre a popularidade da linguagem Java da Sun Microsystem - apesar das duas terem muito pouco em comum. Esta tem sido uma fonte de confusão desde então.

A Microsoft lançou uma versão compatível com a maior parte da linguagem, chamada de JScript, junto com o IE, três meses mais tarde. A Netscape apresentou a linguagem a Ecma International, uma organização européia de normalização, o que resultou na primeira edição do padrão ECMAScript em 1997. O padrão recebeu uma atualização significativa com o ECMAScript Edição 3 em 1999, e manteve-se praticamente estável desde então. A quarta edição foi abandonada, devido a diferenças políticas relativas à complexidade da linguagem. Muitas partes da quarta edição formam a base da nova edição ECMAScript 5, publicado em dezembro de 2009.

Esta estabilidade foi uma grande notícia para os desenvolvedores, pois isto proporcionou que várias implementações em JavaScript tivessem muito tempo para se firmar. Eu vou focar quase exclusivamente no dialeto da edição 3. Para que seja facil se familiarizar, vou utilizar o termo JavaScript por todo o texto.

Diferentemente da maioria das linguagens de programação , a linguagem JavaScript não possui o conceito de entrada e saída. Ela é projetada para funcionar como uma linguagem de script em um ambiente de terceiros, e cabe ao ambiente fornecer mecanismos para a comunicação com o mundo exterior. O ambiente de terceiros (hospedeiro) mais comum é o navegador, mas interpretadores JavaScript também pode ser encontrados no Adobe Acrobat, Photoshop, imagens SVG, Widget engine do Yahoo! , bem como ambientes de servidor, como Node.js. No entanto, a lista aqui apresentada das áreas nas quais a JavaScript é utilizada é apenas o começo. Ela também inclui bancos de dados NoSQL, como o código-fonte aberto Apache CouchDB, computadores embarcados, ou ambientes de trabalho completos, como o GNOME (um dos GUIs mais populares para os sistemas operacionais GNU / Linux) .

## Visão Geral

A JavaScript é uma linguagem dinâmica orientada a objetos; tem tipos e operadores, objetos e métodos. Sua sintaxe vem das linguagens Java e C, por isso tantas estruturas dessas linguagens se aplicam a JavaScript também. Uma das principais diferenças é que o JavaScript não tem classes; em vez disso, a funcionalidade de classe é realizada por protótipos de objetos. A outra diferença principal é que as funções são objetos, dando as funções a capacidade para armazenar código executável e serem passadas como parametro para qualquer outro objeto.

Vamos começar pelo bloco de construção de qualquer linguagem: os tipos. Programas JavaScript manipulam valores, e esses valores todos pertencem a um tipo. Tipos de JavaScript são :

- números
- strings
- booleanos
- funções
- objetos

... Ops, e o "indefinido" e o "nulo"- , que parecem um pouco estranhos. E arrays (vetores), que são um tipo especial de objeto. E as datas e expressões regulares, que são objetos que você ganha de graça. E para ser tecnicamente preciso, as funções são apenas um tipo especial de objeto. Assim, a lista de tipos se parece mais com isto:

- números (numbers)
- strings (strings)
- booleanos (booleans)
- objetos (objects)

  - funções (functions)
  - vetores (arrays)
  - datas (dates)
  - expressoes regulares (regexp)

- nulo (null)
- indefinido (undefined)

E existem também alguns tipos para erros. As coisas são muito mais fáceis se ficarmos com a primeira lista, no entanto.

## Números

Números em JavaScript são "valores de precisão dupla no formato IEEE 754", de acordo com a especificação. Isto tem algumas consequências interessantes. Não existe essa coisa de inteiro em JavaScript, então você deve ser um pouco cuidadoso com seus cálculos se você está acostumado a matemática em C ou Java. Cuidado com coisas como:

```
0.1 + 0.2 == 0.30000000000000004
```

Na prática, valores inteiros são tratados como inteiros de 32 bits (e são armazenados dessa forma em algumas implementações do navegador), que podem ser importantes para as operações bit a bit. Para mais detalhes, consulte [The Complete JavaScript Number Reference](http://www.hunlock.com/blogs/The_Complete_Javascript_Number_Reference).

Os [operadores numéricos](/pt-BR/JavaScript/Reference/Operators/Arithmetic_Operators) padrões são suportados, incluindo adição, subtração, módulo (ou resto) aritmético e assim por diante. Há também um objeto embutido que eu esqueci de mencionar mais cedo chamado [Math](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math) para manipular funções e constantes matemáticas mais avançadas:

```js
Math.sin(3.5);
var d = Math.PI * r * r;
```

Você pode converter uma string em um inteiro usando a função embutida [`parseInt()`](/pt-BR/JavaScript/Reference/Global_Objects/parseInt). Ela tem um segundo parâmetro opcional para a base da conversão, parâmetro esse que você deveria sempre prover:

```js
> parseInt("123", 10)
123
```

Se você quiser converter um número binário em um inteiro, basta mudar a base:

```js
> parseInt("11", 2)
3
```

Similarmente, você pode fazer a conversão de números de ponto flutuante usando a função embutida [`parseFloat()`](/pt-BR/JavaScript/Reference/Global_Objects/parseFloat) que usa a base 10 sempre, ao contrário de seu primo [`parseInt()`](/pt-BR/JavaScript/Reference/Global_Objects/parseInt).

Você também pode usar o operador unário `+` para converter valores em números:

```
> + "42"
42
```

Um valor especial chamado [`NaN`](/pt-BR/JavaScript/Reference/Global_Objects/NaN) (sigla de "Not a Number ou Não é Número") é retornado se a string não é um valor numérico:

```js
> parseInt("hello", 10)
NaN
```

`NaN` é tóxico: Se você provê-lo como uma entrada para qualquer operação matemática o resultado também será `NaN`:

```js
> NaN + 5
NaN
```

Você pode testar se é `NaN` usando a função embutida [`isNaN()`](/pt-BR/JavaScript/Reference/Global_Objects/isNaN):

```js
> isNaN(NaN)
true
```

JavaScript também tem os valores especiais [`Infinity`](/pt-BR/JavaScript/Reference/Global_Objects/Infinity) e `-Infinity`:

```js
> 1 / 0
Infinity
> -1 / 0
-Infinity
```

Você pode testar se o valor é `Infinity`, `-Infinity` e `NaN` usando a função embutida [`isFinite()`](/pt-BR/JavaScript/Reference/Global_Objects/isFinite):

```js
> isFinite(1/0)
false
> isFinite(-Infinite)
false
> isFinite(NaN)
false
```

> **Nota:** As funções [`parseInt()`](/pt-BR/JavaScript/Reference/Global_Objects/parseInt) e [`parseFloat()`](/pt-BR/JavaScript/Reference/Global_Objects/parseFloat) fazem a conversão da string até alcançarem um caracter que não é válido para o formato numérico especificado, então elas retornam o número convertido até aquele ponto. Contudo, o operador "+" simplesmente converte a string em `NaN` se tiver algum caracter inválido nela. Apenas tente por si mesmo converter a string "10.2abc" usando cada um desses métodos no console e entenderá melhor essas diferenças.

## Strings

Strings em JavaScript são sequências de caracteres. Para ser mais exato, elas são sequências de [Unicode characters](/pt-BR/JavaScript/Guide/Obsolete_Pages/Unicode), em que cada um deles é representado por um número de 16-bits. Isso deveria ser uma notícia bem-vinda para aqueles que tiveram que lidar com internacionalização.

Se você quiser representar um único caractere, você só tem que usar uma string de tamanho 1.

Para obter o tamanho de uma string, acesse sua propriedade [`length`](/pt-BR/JavaScript/Reference/Global_Objects/String/length):

```js
> "hello".length
5
```

Essa é nossa primeira pincelada com objetos JavaScript! Eu mencionei que strings também são objetos? De modo que elas têm métodos:

```js
> "hello".charAt(0)
h
> "hello, world".replace("hello", "goodbye")
goodbye, world
> "hello".toUpperCase()
HELLO
```

## Outros tipos

No JavaScript há distinção entre `null`, que é um objeto do tipo 'object' para indicar deliberadamente uma ausência de valor, do `undefined`, que é um objeto do tipo 'undefined' para indicar um valor não inicializado — isto é, que um valor não foi atribuído ainda. Vamos falar sobre variáveis depois, mas em JavaScript é possível declarar uma variável sem atribuir um valor para a mesma. Se você fizer isso, a variável será do tipo `undefined`.

JavaScript tem um tipo boolean, ao qual são possíveis os valores `true` e `false` (ambos são palavras-chave). Qualquer valor pode ser convertido em um boolean, de acordo com as seguintes regras:

1. `false`, `0`, a string vazia(`""`), `NaN`, `null`, e `undefined` todos tornam-se `false`
2. todos os outros valores tornam-se `true`

Você pode fazer essa conversão explicitamente usando a função `Boolean()`:

```js
> Boolean("")
false
> Boolean(234)
true
```

Contudo, essa é uma necessidade rara, uma vez que JavaScript silenciosamente fará essa conversão quando for esperado um boolean, como em uma instrução `if`. Por isso, algumas vezes falamos simplesmente em "valores true" e "valores false" nos referindo a valores que se tornaram `true` e `false`, respectivamente, quando convertidos em boolean. Alternativamente, esses valores podem ser chamados de "truthy" (verdade/verdadeiro) e "falsy" (falso/falsidade), respectivamente.

Operações booleanas como `&&` (_and_ lógico), `||` (_or_ lógico), e `!` (_not_ lógico) são suportadas.

## Variáveis

Novas variáveis em JavaScript são declaradas usando a palavra-chave [`var`](/pt-BR/JavaScript/Reference/Statements/var):

```js
var a;
var name = "simon";
```

Se você declarar uma variável sem atribuir qualquer valor a ela, seu tipo será `undefined`.

Uma diferença importante de outras linguagens como Java é que em JavaScript, blocos não tem escopo; somente funções tem escopo. De modo que se uma variável é definida usando `var` numa instrução composta (por exemplo dentro de uma estrutura de controle `if`), ela será visível por toda a função.

Obs: A definição de variáveis usando o let foi introduzida no ECMAScript 6. O let permite escopo de bloco, ou seja, é possível definir uma variável em um bloco `if`, e esta variável ter escopo limitado ao bloco `if`- por exemplo.

## Operadores

Operadores numéricos de JavaScript são `+`, `-`, `*`, `/` e `%` - que é o operador resto. Valores são atribuídos usando `=`, e temos também as instruções de atribuição compostas, como `+=` e `-=`. Essas são o mesmo que `x = x operador y`.

```js
x += 5;
x = x + 5;
```

Você pode usar `++` e `--` para incrementar ou decrementar respectivamente. Eles podem ser usados como operadores tanto antes como depois.

O [operador](/pt-BR/JavaScript/Reference/Operators/String_Operators) `+` também faz concatenação de string:

```js
> "hello" + " world"
hello world
```

Se você adicionar uma string a uma número (ou outro valor) tudo será convertido em uma string primeiro. Isso talvez seja uma pegadinha para você:

```js
> "3" + 4 + 5
345
> 3 + 4 + "5"
75
```

Adicionar uma string em branco a algo é uma maneira melhor de fazer a conversão.

[Comparações](/pt-BR/JavaScript/Reference/Operators/Comparison_Operators) em JavaScript podem ser feitas usando `<`, `>`, `<=` e `>=`. Isso funciona tanto para strings como para números. A igualdade é um pouco menos simples. O operador igual-duplo faz a coersão de tipo se você colocar tipos diferentes, algumas vezes com resultados interessantes:

```js
> "dog" == "dog"
true
> 1 == true
true
```

Para evitar a coersão de tipo, use o operador igual-triplo:

```js
> 1 === true
false
> true === true
true
```

Temos também os operadores `!=` e `!==` .

JavaScript também tem [operações de bit-a-bit](/pt-BR/JavaScript/Reference/Operators/Bitwise_Operators). Se quiser usá-las, elas estarão lá.

## Estruturas de Controle

JavaScript tem um conjunto de estruturas de controle similar à outras linguagens na família do C. Instruções condicionais são suportadas pelo `if` e `else`; você pode encadeá-los se quiser:

```js
var name = "kittens";
if (name == "puppies") {
  name += "!";
} else if (name == "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
name == "kittens!!";
```

JavaScript tem as estruturas de repetição com os laços `while` e `do-while`. O primeiro é bom para repetições básicas; o segundo é para os casos em que você queira que o corpo da repetição seja executado pelo menos uma vez:

```js
while (true) {
  // an infinite loop!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

O laço `for` do JavaScript é o mesmo que no C e Java: ele lhe permite prover as informações para o seu laço em uma única linha.

```js
for (var i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

Os operadores `&&` e `||` usam a lógica de curto-circuito, o que quer dizer que, o segundo operando ser executado dependerá do primeiro operando. Isso é útil para checagem de objetos null antes de acessar seus atributos:

```js
var name = o && o.getName();
```

Ou para configuração de valores-padrões:

```js
var name = otherName || "default";
```

JavaScript tem um operador ternário para expressões condicionais:

```js
var allowed = age > 18 ? "yes" : "no";
```

A instrução switch pode ser usada para múltiplas ramificações baseadas em um número ou uma string:

```js
switch (action) {
  case "draw":
    drawit();
    break;
  case "eat":
    eatit();
    break;
  default:
    donothing();
}
```

Se você não adicionar a instrução `break`, a execução irá "cair" no próximo nível. Isso é algo que raramente vai querer fazer — de fato vale mais a pena colocar um comentário especificando essa "queda" para o próximo nível, pois isso o ajudará na hora de fazer a depuração de seu código:

```js
switch (a) {
  case 1: // queda
  case 2:
    eatit();
    break;
  default:
    donothing();
}
```

A cláusula default é opcional. Se quiser, pode colocar expressões tanto no switch como nos cases; Comparações acontecem entre os dois usando o operador `===`:

```js
switch (1 + 3) {
  case 2 + 2:
    yay();
    break;
  default:
    neverhappens();
}
```

## Objetos

Objetos JavaScript são simplesmente coleções de pares nome-valor. Como tal, eles são similares à:

- Dicionários em Python
- Hashes em Perl e Ruby
- Hash tables em C e C++
- HashMaps em Java
- Vetores associativos em PHP

Esse tipo de estrutura de dados é largamente utilizada, o que atesta sua versatilidade. Uma vez que tudo em JavaScript é um objeto (tipos básicos principais), qualquer programa JavaScript naturalmente envolve uma grande quantidade de buscas em tabelas hash, o que é algo bom, pois elas são bem rápidas!

A parte "name" é uma string JavaScript, enquanto o valor pode ser qualquer valor JavaScript — incluindo mais objetos. Isso permite que você construa estruturas de dados de qualquer complexidade.

Há basicamente duas formas de criar um objeto vazio:

```js
var obj = new Object();
```

e:

```js
var obj = {};
```

Elas são semanticamente equivalentes; a segunda forma é chamada de sintaxe de objeto literal e é mais conveniente. Essa sintaxe é também o coração do formato JSON e deveria ser sempre preferida.

Uma vez criada, as propriedades de um objeto podem novamente ser acessadas de uma das seguintes formas:

```js
obj.name = "Simon";
var name = obj.name;
```

E...

```js
obj["name"] = "Simon";
var name = obj["name"];
```

Estas também são semânticamente equivalentes. A segunda forma tem a vantagem de que o valor da chave é passado através de uma string, que pode ser calculada em tempo de execução, muito embora esse método previna o uso de alguns mecanismos tais como a otimização e a minificação. Outra vantagem é a possibilidade de se atribuir [palavras-reservadas](/pt-BR/JavaScript/Reference/Reserved_Words) aos nomes das propriedades:

```js
obj.for = "Simon"; // Erro de sintaxe, pois 'for' é uma palavra reservada
obj["for"] = "Simon"; // Funciona bem
```

A sintaxe de objeto literal pode ser usada para inicializar completamente um objeto:

```js
var obj = {
  name: "Carrot",
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};
```

O acesso aos atributos podem ser encadeados:

```js
> obj.details.color
orange
> obj["details"]["size"]
12
```

## Vetores

Vetores em JavaScript são, de fato, um tipo especial de objeto. Eles funcionam de forma muito similar à objetos regulares (propriedades numéricas podem naturalmente ser acessadas somente usando a sintaxe \[], colchetes ), porém eles tem uma propriedade mágica chamada '`length`'. Ela sempre é o maior índice de um vetor mais 1.

A forma tradicional de se criar um vetor em JavaScript é a seguinte:

```js
> var a = new Array();
> a[0] = "dog";
> a[1] = "cat";
> a[2] = "hen";
> a.length
3
```

Existe uma notação mais conveniente usando um vetor literal:

```js
> var a = ["dog", "cat", "hen"];
> a.length
3
```

Deixar uma vírgula à direita no final de um vetor literal gerará inconsistência entre os navegadores, portanto não faça isso.

Note que `array.length` não é necessariamente o número de itens em um vetor. Considere o seguinte:

```js
> var a = ["dog", "cat", "hen"];
> a[100] = "fox";
> a.length
101
```

Lembre-se — o tamanho de um vetor é o maior índice mais 1.

Se você fizer referência a um índice de vetor inexistente, obterá um `undefined`:

```js
> typeof a[90]
undefined
```

Você pode iterar sobre um vetor da seguinte forma:

```js
for (var i = 0; i < a.length; i++) {
  // Faça algo com a[i]
}
```

Isso é um pouco ineficaz visto que você está procurando a propriedade length uma vez a cada iteração. Uma melhoria poderia ser:

```js
for (var i = 0, len = a.length; i < len; i++) {
  // Faça algo com a[i]
}
```

Uma forma mais elegante ainda poderia ser:

```js
for (var i = 0, item; (item = a[i++]); ) {
  // Faça algo com item
}
```

Aqui nós estamos declarando duas variáveis. A atribuição na parte do meio do laço `for` é também testada — se for verdadeira, o laço continuará. Uma vez que o `i` é incrementado toda vez, os itens do array serão atribuídos a variável item sequencialmente. A iteração é finalizada quando item "falsy" é encontrado (tal como o `undefined`, false ou zero).

Note que esse truque só deveria ser usado em vetores que você sabe não conter valores "falsy" (vetores de objeto ou nós [DOM](/pt-BR/DOM) por exemplo). Se você iterar sobre dados numéricos que possam ter o 0 ou sobre dados string que possam ter uma string vazia, você deveria usar a segunda forma como alternativa.

Uma outra forma de iterar é usar o laço [`for...in`](/pt-BR/JavaScript/Reference/Statements/for...in). Note que se alguém adicionou novas propriedades ao `Array.prototype`, elas também podem ser iteradas usando este laço:

```js
for (var i in a) {
  // Do something with a[i]
}
```

Se quiser adicionar um item a um vetor, simplesmente faça desse jeito:

```js
a[a.length] = item; // é o mesmo que a.push(item);
```

Vetores vem com vários métodos:

| Nome do método                       | Descrição                                                                                     |
| ------------------------------------ | --------------------------------------------------------------------------------------------- |
| `a.toString()`                       | Retorna uma string com o toString()de cada elemento separado por vírgulas.                    |
| `a.toLocaleString()`                 | Retorna uma string com o toLocaleString()de cada elemento separado por vírgulas.              |
| `a.concat(item[, itemN])`            | Retorna um novo vetor com os itens adicionados nele.                                          |
| `a.join(sep)`                        | Converte um vetor em uma string com os valores do vetor separados pelo valor do parâmetro sep |
| `a.pop()`                            | Remove e retorna o último item.                                                               |
| `a.push(item[, itemN])`              | `Push` adiciona um ou mais itens ao final.                                                    |
| `a.reverse()`                        | Reverte o vetor.                                                                              |
| `a.shift()`                          | Remove e retorna o primeiro item.                                                             |
| `a.slice(start, end)`                | Retorna um sub-vetor.                                                                         |
| `a.sort([cmpfn])`                    | Prover uma função opcional para fazer a comparação.                                           |
| `a.splice(start, delcount[, itemN])` | Permite que você modifique um vetor por apagar uma seção e substituí-lo com mais itens.       |
| `a.unshift([item])`                  | Acrescenta itens ao começo do vetor.                                                          |

## Funções

Junto com objetos, funções são os componentes principais para o entendimento do JavaScript. A função mais básica não poderia ser mais simples:

```js
function add(x, y) {
  var total = x + y;
  return total;
}
```

Isso demonstra tudo o que há para se saber sobre funções básicas. Uma função JavaScript pode ter 0 ou mais parâmetros declarados. O corpo da função pode conter tantas instruções quantas quiser e pode declarar suas próprias variáveis que são de escopo local àquela função. A instrução `return` pode ser usada para retornar um valor em qualquer parte da função, finalizando a função. Se nenhuma instrução de retorno for usada (ou um retorno vazio sem valor), o JavaScript retorna `undefined`.

Os parâmetros nomeados se parecem mais com orientações do que com outra coisa. Você pode chamar a função sem passar o parâmetro esperado, nesse caso eles receberão o valor `undefined`.

```js
> add()
NaN // Você não pode executar adição em undefined
```

Você também pode passar mais argumentos do que a função está esperando:

```js
> add(2, 3, 4)
5 // adicionado os dois primeiros; 4 foi ignorado
```

Pode parecer um pouco bobo, mas no corpo da função você tem acesso a uma variável adicional chamada [`arguments`](/pt-BR/JavaScript/Reference/Functions_and_function_scope/arguments), que é um objeto parecido com um vetor que contém todos os valores passados para a função. Vamos rescrever a função add para tomarmos tantos valores quanto quisermos:

```js
function add() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}

> add(2, 3, 4, 5)
14
```

Isso realmente não é muito mais útil do que escrever `2 + 3 + 4 + 5`. Vamos criar uma função para calcular média:

```js
function avg() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
> avg(2, 3, 4, 5)
3.5
```

Isso é muito útil, mas introduz um novo problema. A função `avg()` precisa de uma lista de argumentos separados por vírgula — mas e se o que quiser for procurar a média de um vetor? Você poderia apenas rescrever a função da seguinte forma:

```js
function avgArray(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
> avgArray([2, 3, 4, 5])
3.5
```

Porém, seria legal se pudéssemos reusar a função que já tínhamos criado. Felizmente, JavaScript lhe permite chamar a função, e chamá-la com um conjunto arbitrário de argumentos, usando o método [`apply()`](/pt-BR/JavaScript/Reference/Global_Objects/Function/apply) presente em qualquer objeto função.

```js
> avg.apply(null, [2, 3, 4, 5])
3.5
```

O segundo argumento do `apply()` é o vetor para usar como argumento; o primeiro será discutido mais tarde. Isso enfatiza o fato que funções também são objetos.

JavaScript lhe permite criar funções anônimas.

```js
var avg = function () {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};
```

Isso é semanticamente equivalente a forma `function avg()`. É extremamente poderoso como ele lhe permite colocar a definição completa de uma função em qualquer lugar, que você normalmente poria uma expressão. Isso lhe permite todo tipo de truques engenhosos. Aqui está uma maneira de "esconder" algumas variáveis locais — como escopo de bloco em C:

```js
> var a = 1;
> var b = 2;
> (function() {
    var b = 3;
    a += b;
})();
> a
4
> b
2
```

JavaScript lhe permite chamar funções recursivamente. Isso é particularmente útil quando estamos lidando com estruturas de árvore, como quando estavamos navegando no [DOM](/pt-BR/DOM).

```js
function countChars(elm) {
  if (elm.nodeType == 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

Isso destaca um problema potencial com funções anônimas: Como chamá-las recursivamente se elas não tem um nome? JavaScript lhe permite nomear expressões de função para isso. Você pode usar EFIIs nomeadas (Expressões Funcionais Imediatamente Invocadas), conforme abaixo:

```js
var charsInBody = (function counter(elm) {
  if (elm.nodeType == 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

O nome provido para a função anônima conforme acima só é (ou no mínimo só deveria ser) visível ao escopo da própria função. Isso tanto permite que mais otimizações sejam feitas pela engine como deixa o código mais legível.

## Objetos Personalizados

> **Nota:** Para uma discursão mais detalhada de programação orientada a objetos em JavaScript, veja [Introdução a JavaScript Orientado a Objeto](/pt-BR/JavaScript/Introduction_to_Object-Oriented_JavaScript).

Na clássica Programação Orientada a Objetos, objetos são coleções de dados e métodos que operam sobre esses dados. JavaScript é uma linguagem baseada em protótipos que não contém a estrutura de classe, como tem em C++ e Java. (Algumas vezes isso é algo confuso para o programador acostumado a linguagens com estrutura de classe). Em vez disso, JavaScript usa funções como classes. Vamos considerar um objeto pessoa com os campos primeiro e último nome. Há duas formas em que o nome talvez possa ser exibido: como "primeiro nome segundo nome" ou como "último nome, primeiro nome". Usando as funções e objetos que discutimos anteriormente, aqui está uma forma de fazer isso:

```js
function makePerson(first, last) {
    return {
        first: first,
        last: last
    }
}
function personFullName(person) {
    return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
    return person.last + ', ' + person.first
}
> s = makePerson("Simon", "Willison");
> personFullName(s)
Simon Willison
> personFullNameReversed(s)
Willison, Simon
```

Isso funciona, mas é muito feio. Você termina com dúzias de funções em seu escopo global. O que nós realmente precisamos é uma forma de anexar uma função a um objeto. Visto que funções são objetos, isso é fácil:

```js
function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
            return this.last + ', ' + this.first;
        }
    }
}
> s = makePerson("Simon", "Willison")
> s.fullName()
Simon Willison
> s.fullNameReversed()
Willison, Simon
```

Há algo aqui que não havíamos visto anteriormente: a palavra-chave '[`this`](/pt-BR/JavaScript/Reference/Operators/this)'. Usada dentro de uma função, '`this`' refere-se ao objeto corrente. O que aquilo de fato significa é especificado pelo modo em que você chamou aquela função. Se você chamou-a usando [notação ponto ou notação colchete](/pt-BR/JavaScript/Reference/Operators/Member_Operators) em um objeto, aquele objeto torna-se '`this`'. Se a notação ponto não foi usada pela chamada, '`this`' refere-se ao objeto global. Isso é uma frequente causa de erros. Por exemplo:

```js
> s = makePerson("Simon", "Willison")
> var fullName = s.fullName;
> fullName()
undefined undefined
```

Quando chamamos `fullName()`, '`this`' está ligado ao objeto global. Visto que não há variáveis globais chamadas `first` ou `last` obtemos `undefined` para cada um.

Podemos tirar vantagem da palavra chave '`this`' para melhorar nossa função `makePerson`:

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function () {
    return this.first + " " + this.last;
  };
  this.fullNameReversed = function () {
    return this.last + ", " + this.first;
  };
}
var s = new Person("Simon", "Willison");
```

Nós introduzimos uma outra palavra-chave: '[`new`](/pt-BR/JavaScript/Reference/Operators/new)'. `new` é fortemente relacionada a '`this`'. O que ele faz é criar um novo objeto vazio, e então chamar a função especificada com '`this`' para atribuir aquele novo objeto. Funções que são desenhadas para ser chamadas pelo '`new`' são chamadas de funções construtoras. Uma prática comum é capitular essas funções como um lembrete de chamá-las com o `new`.

Nossos objetos pessoa estão ficando melhor mas ainda existem algumas arestas feias. Toda vez que criamos um objeto pessoa, criamos duas marcas de nova função dentro dele — não seria melhor se este código fosse compartilhado?

```js
function personFullName() {
  return this.first + " " + this.last;
}
function personFullNameReversed() {
  return this.last + ", " + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}
```

Assim está melhor: estamos criando as funções de método apenas uma vez, e atribuimos referências para elas dentro do construtor. Podemos fazer algo melhor do que isso? A resposta é sim:

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function () {
  return this.first + " " + this.last;
};
Person.prototype.fullNameReversed = function () {
  return this.last + ", " + this.first;
};
```

`Person.prototype` é um objeto compartilhado por todas as instâncias de `Person`. Este forma parte da cadeia de buscas (que tem um nome especial, cadeia de protótipos ou "prototype chain"): toda a vez que você tentar acessar uma propriedade de `Person` que não está configurada, Javascript irá verificar em `Person.prototype` para ver se esta propriedade existe por lá. Como resultado, qualquer coisa atribuída à `Person.prototype` torna-se disponível para todas as instâncias deste construtor, através do objeto `this`.

Esta é uma ferramenta incrivelmente poderosa. JavaScript permite a você modificar algo prototipado em qualquer momento no seu programa. Isto significa que você pode adicionar métodos extras para objetos pré-existentes, em tempo de execução:

```js
> s = new Person("Simon", "Willison");
> s.firstNameCaps();
TypeError on line 1: s.firstNameCaps is not a function
> Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase()
}
> s.firstNameCaps()
SIMON
```

Curiosamente, você pode também adicionar coisas para o protótipo de objetos built-in de Javascript. Vamos adicionar um método para `String` que retorna a string invertida:

```js
> var s = "Simon";
> s.reversed()
TypeError on line 1: s.reversed is not a function
> String.prototype.reversed = function() {
    let start = 0, end = this.length - 1
    result = new Array(this.length)
    while(start <= end) {
      result[start] = this[end]
      result[end] = this[start]
      start++, end--
    }
    return result.join('')
}
> s.reversed()
nomiS
```

Nosso novo método funciona inclusive em string literais!

```js
> "This can now be reversed".reversed()
desrever eb won nac sihT
```

Como antes mencionado, o protótipo forma parte de uma cadeia. A raiz dessa cadeia é `Object.prototype`, dos quais inclui o método `toString()` — este é o método que é chamado quando você tenta representar um objeto como uma string. Isto é útil para depurar os nossos objetos `Person`:

```js
> var s = new Person("Simon", "Willison");
> s
[object Object]
> Person.prototype.toString = function() {
    return '<Person: ' + this.fullName() + '>';
}
> s
<Person: Simon Willison>
```

Lembra como `avg.apply()` tinha um primeiro argumento null? Nós podemos revisitar isto, agora. O primeiro argumento para `apply()` é o objeto que deve ser tratado como '`this`'. Por exemplo, aqui está uma implementação trivial de '`new`':

```js
function trivialNew(constructor, ...args) {
  var o = {}; // Create an object
  constructor.apply(o, args);
  return o;
}
```

Isto não é exatamente uma réplica de `new` porque não configura a cadeia de protótipos. `apply()` é difícil de ilustrar — não é algo que você usa com frequência, mas é útil conhecer a respeito. No código acima, `...args` é chamado de "[argumentos rest](/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)" — como o nome indica, isto contém o restante dos parâmetros.

Ao chamar

```js
var bill = trivialNew(Person, "Willian", "Orange");
```

é equivalente a

```js
var bill = new Person("Willian", "Orange");
```

`apply()` tem uma função irmã de nome [`call`](/pt-BR/JavaScript/Reference/Global_Objects/Function/call), que novamente permite você configurar o '`this`' mas toma uma lista expandida de argumentos, ao invés de um array.

```js
function lastNameCaps() {
  return this.last.toUpperCase();
}
var s = new Person("Simon", "Willison");
lastNameCaps.call(s);
// Is the same as:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps();
```

## Funções Internas

Em JavaScript é permitido declarar uma função dentro de outras funções. Nós já vimos isso antes, com uma versão preliminar da função `makePerson()`. Um detalhe importante sobre funções aninhadas em JavaScript é que elas podem acessar as variáveis do escopo das funções parente:

```js
function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}
```

Isto permite um compromisso maior de utilidade ao escrever um código de melhor mantenibilidade. Se uma função depende de uma ou mais funções que não são úteis para outras parte do seu código, você pode aninhar estas funções utilitárias dentro da função que será chamada. Isto mantém o número de funções que estão no escopo global baixo, o que é sempre uma boa coisa.

Isto é também um ótimo contador de atração de variáveis globais. Quando se escreve um código complexo, é sempre tentador usar as variáveis globais para compartilhar valores entre múltiplas funções — do qual leva a um código que é difícil de manter. Funções aninhadas podem compartilhar variáveis em seus parentes, então você pode usar este mecanismo para acoplar e juntar funções, quando isto fizer sentido, sem poluir o seu "namespace" global — 'globais locais' se preferir. Esta técnica deve ser usada com cautela, mas é uma habilidade a se ter.

## Clausuras (Closures)

Isto nos leva a uma das abstrações mais poderosas que JavaScript tem a oferecer — mas também a mais potencionalmente confusa. O que isto faz?

```js
function makeAdder(a) {
  return function (b) {
    return a + b;
  };
}
var x = makeAdder(5);
var y = makeAdder(20);
x(6); // ?
y(7); // ?
```

O nome da função `makeAdder` já diz tudo: ela cria novas funções 'adder', na qual, quando chamada com um argumento, adiciona o argumento com a que foi criada.

O que está acontecendo aqui é muito parecido com o que estava acontencedo com as funções internas vistas anterioremente: uma função definida dentro de uma outra função tem acessso às variáveis da função de fora. A única diferença aqui é que a função de fora retornou e, como consequência do senso comum, deve dizer que todas as variáveis locais não existem mais. Mas elas _ainda_ existem — caso contrário a função adicionadora não seria capaz de funcionar. Mais ainda, há duas "cópias" diferentes de variáveis locais para `makeAdder` — uma na qual o `a` é 5 e a outra na qual `a` é 20. Então, o resultado dessas chamadas de funções é o seguinte:

```js
x(6); // returns 11
y(7); // returns 27
```

Eis o que acontece na verdade: sempre que o JavaScript executa uma função, um objeto de 'escopo' é criado para guardar as variáveis locais criadas dentro desta função. Ela é inicializada com quaisquer variáveis passadas como parâmetros da função. Isto é similar ao objeto global, em que todas as variáveis globais e funções vivem, mas com algumas diferenças importantes: primeiro, um novo objeto de escopo é criado toda a vez que uma função começa a executar, e segundo, diferente do objeto global (que nos navegadores é acessado com `window`) estes objetos não podem ser diretamente acessados através do seu código JavaScript. Não há nenhum mecanismo para iterar sobre as propriedades do escopo corrente do objeto, por exemplo.

Então, quando `makeAdder` é chamado, um objeto de escopo é criado com uma única propriedade: `a`, a qual é o argumento passado para a função `makeAdder`. `makeAdder` então retorna uma nova função criada. Normalmente o coletor de lixo de JavaScript poderia limpar o objeto de escopo criado para `makeAdder` neste ponto, mas a função de retorno mantém uma referência ao objeto de escopo. Como resultado, o objeto de escopo não será coletado como lixo até que não haja mais referências para função objeto que `makeAdder` retornou.

Objetos de escopo formam uma cadeia chamada de cadeia de escopos, similar a cadeia de protótipos usadas no sistema de objetos de JavaScript.

Uma clausura é a combinação de uma função e o objeto de escopo na qual é criado. Clausuras permitem você guardar estado — de tal forma, elas podem ser frequentemente utilizadas no lugar de objetos.
