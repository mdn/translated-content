---
title: Estrutura de dados do Javascript
slug: Web/JavaScript/Guide/Data_structures
original_slug: Web/JavaScript/Data_structures
---

{{jsSidebar("More")}}

Todas as linguagens de programação têm estruturas de dados embutidas, mas geralmente diferem de uma linguagem para outra. Este artigo tenta listar as estruturas de dados internas disponíveis em JavaScript e quais propriedades elas possuem. Estes podem ser usados para construir outras estruturas de dados. Sempre que possível, são feitas comparações com outras línguas.

## Tipagem dinâmica e fraca

JavaScript é uma linguagem [dinâmica](https://en.wikipedia.org/wiki/Dynamic_programming_language) com [tipos dinâmicos](https://en.wikipedia.org/wiki/Type_system#DYNAMIC). As variáveis em JavaScript não estão diretamente associadas a nenhum tipo de valor específico, e qualquer variável pode receber (e reatribuir) valores de todos os tipos:

```js
let foo = 42; // foo agora é um número
foo = "bar"; // foo agora é uma string
foo = true; // foo agora é um booleano
```

JavaScript também é uma linguagem [de tipagem fraca](https://en.wikipedia.org/wiki/Strong_and_weak_typing), o que significa que permite a conversão implícita de tipo quando uma operação envolve tipos incompatíveis, em vez de gerar erros de tipo.

```js
const foo = 42; //foo é um número
const result = foo + "1"; // JavaScript coage foo para uma string, então ela pode ser concatenada com o outro operando
console.log(resultado); // 421
```

Coerções implícitas são muito convenientes, mas podem ser uma arma em potencial se os desenvolvedores não pretendem fazer a conversão ou pretendem converter na outra direção (por exemplo, string para número em vez de número para string). Para [symbols](#symbol_type) e [BigInts](#bigint_type), o JavaScript desativou intencionalmente certas conversões de tipo implícito.

## Tipos em JavaScript

O conjunto de tipos na linguagem JavaScript consiste em [_primitive values_](#primitive_values) e [_objects_](#objects).

- [Valores primitivos](#primitive_values) (dados imutáveis representados diretamente no nível mais baixo do idioma)
  - [tipo Boolean](#boolean_type)
  - [Tipo Null](#null_type)
  - [Tipo Undefined](#undefined_type)
  - [Tipo Number](#number_type)
  - [tipo BigInt](#bigint_type)
  - [tipo String](#string_type)
  - [Tipo Symbol](#symbol_type)

- [Objetos](#objetos) (coleções de propriedades)

## Valores primitivos

Todos os tipos, exceto objetos, definem valores imutáveis (ou seja, valores que não podem ser alterados). Por exemplo, Strings são imutáveis. Referimo-nos a valores desses tipos como "_valores primitivos_".

### Tipo Boolean

Boolean representa uma entidade lógica e pode ter dois valores: `true` e `false`. Consulte [Boolean](/pt-BR/docs/Glossary/Boolean) e {{jsxref("Boolean")}} para obter mais detalhes.

### Tipo Null

O tipo Null tem exatamente um valor: `null`. Consulte [`null`](/pt-BR/docs/Web/JavaScript/Reference/Operators/null) e [Null](/pt-BR/docs/Glossary/Null) para obter mais detalhes.

### Tipo Undefined

Uma variável que não recebeu um valor tem o valor `undefined`. Consulte {{jsxref("undefined")}} e [Undefined](/pt-BR/docs/Glossary/Undefined) para mais detalhes.

### Tipos numéricos

ECMAScript tem dois tipos numéricos integrados: [Number](#number-type) e [BigInt](#bigint-type) — junto com o valor relacionado [NaN](#nan).

#### Tipo Number

O tipo Number é um [valor IEEE 754 de formato binário de 64 bits de precisão dupla](https://en.wikipedia.org/wiki/Double_precision_floating-point_format). É capaz de armazenar números de ponto flutuante positivos entre 2^-1074 ({{jsxref("Number.MIN_VALUE")}}) e 2^1024 ({{jsxref("Number.MAX_VALUE")}}), bem como números de ponto flutuante negativos entre -(2^-1074) e -(2^1024), mas só pode armazenar com segurança inteiros no intervalo -(2^53 − 1) ({{jsxref("Number.MIN_SAFE_INTEGER") }}) para 2^53 − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}).

> [!NOTE]
> Você pode verificar se um número está dentro do intervalo de inteiros seguros usando {{jsxref("Number.isSafeInteger()")}}. Fora do intervalo de {{jsxref("Number.MIN_SAFE_INTEGER")}} a {{jsxref("Number.MAX_SAFE_INTEGER")}}, o JavaScript não pode mais representar inteiros com segurança; eles serão representados por uma aproximação de ponto flutuante de precisão dupla.

Valores fora do intervalo ±(2^-1074 a 2^1024) são convertidos automaticamente:

- Valores positivos maiores que {{jsxref("Number.MAX_VALUE")}} são convertidos em `+Infinity`.
- Valores positivos menores que {{jsxref("Number.MIN_VALUE")}} são convertidos em `+0`.
- Valores negativos menores que -{{jsxref("Number.MAX_VALUE")}} são convertidos para `-Infinity`.
- Valores negativos maiores que -{{jsxref("Number.MIN_VALUE")}} são convertidos para `-0`.

`+Infinity` e `-Infinity` se comportam de forma semelhante ao infinito matemático, mas com algumas pequenas diferenças; veja {{jsxref("Number.POSITIVE_INFINITY")}} e {{jsxref("Number.NEGATIVE_INFINITY")}} para detalhes.

O tipo Number tem apenas um inteiro com múltiplas representações: `0` é representado como `-0` e `+0` (onde `0` é um alias para `+0`). Na prática, quase não há diferença entre as diferentes representações; por exemplo, `+0 === -0` é `true`. No entanto, você pode perceber isso quando divide por zero:

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

Embora um número geralmente represente apenas seu valor, o JavaScript fornece [operadores bitwise](/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators).

> [!NOTE]
> Embora os operadores bit a bit _podem_ ser usados para representar vários valores booleanos em um único número usando [mascaramento de bits](https://en.wikipedia.org/wiki/Mask_%28computing%29), isso geralmente é considerada uma má prática. JavaScript oferece outros meios para representar um conjunto de booleanos (como uma matriz de booleanos ou um objeto com valores booleanos atribuídos a propriedades nomeadas). O mascaramento de bits também tende a tornar o código mais difícil de ler, entender e manter.

Pode ser necessário usar essas técnicas em ambientes muito restritos, como ao tentar lidar com as limitações do armazenamento local ou em casos extremos (como quando cada bit na rede conta). Esta técnica só deve ser considerada quando for a última medida que pode ser tomada para otimizar o tamanho.

#### Tipo BigInt

O tipo BigInt é uma primitiva numérica em JavaScript que pode representar inteiros com precisão arbitrária. Com BigInts, você pode armazenar e operar com segurança em grandes números inteiros, mesmo além do limite de números inteiros seguros.

Um BigInt é criado anexando `n` ao final de um inteiro ou chamando o construtor.

Você pode obter o maior valor seguro que pode ser incrementado com Numbers usando a constante {{jsxref("Number.MAX_SAFE_INTEGER")}}. Com a introdução do BigInts, você pode operar com números além do {{jsxref("Number.MAX_SAFE_INTEGER")}}.

Este exemplo demonstra, onde incrementar o {{jsxref("Number.MAX_SAFE_INTEGER")}} retorna o resultado esperado:

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false porque 9007199254740992n e 9007199254740993n são desiguais

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true porque ambos são 9007199254740992
```

Você pode usar os operadores `+`, `*`, `-`, `**` e `%` com BigInts — assim como com Numbers. Um BigInt não é estritamente igual a um Number, mas é vagamente assim.

Um BigInt se comporta como um Number nos casos em que é convertido em booleano: `if`, `||`, `&&`, `Boolean`, `!`.

`BigInt`s não podem ser operados de forma intercambiável com Numbers. Em vez disso, um {{jsxref("TypeError")}} será lançado.

#### NaN

{{jsxref("NaN")}} ("**N**ot a **N**umber") é normalmente encontrado quando o resultado de uma operação aritmética não pode ser expresso como um número. É também o único valor em JavaScript que não é igual a si mesmo.

### Tipo String

O tipo String do JavaScript é usado para representar dados textuais. É um conjunto de "elementos" de valores inteiros sem sinal de 16 bits. Cada elemento na String ocupa uma posição na String. O primeiro elemento está no índice `0`, o próximo no índice `1` e assim por diante. O comprimento de uma String é o número de elementos nela.

As strings JavaScript são imutáveis. Isso significa que uma vez que uma string é criada, não é possível modificá-la.

No entanto, ainda é possível criar outra string com base em uma operação na string original. Por exemplo:

- Uma substring do original escolhendo letras individuais ou usando [`substring()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring).
- Uma concatenação de duas strings usando o operador de concatenação (`+`) ou [`concat()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Cuidado com a tipagem do seu código!

Pode ser tentador usar strings para representar dados complexos. Fazer isso traz benefícios a curto prazo:

- É fácil construir strings complexas com concatenação.
- Strings são fáceis de depurar (o que você vê impresso é sempre o que está na string).
- Strings são o denominador comum de muitas APIs ([campos de entrada](/pt-BR/docs/Web/API/HTMLInputElement), valores de [armazenamento local](/pt-BR/docs/Web/API/Web_Storage_API) , [`XMLHttpRequest`](/pt-BR/docs/Web/API/XMLHttpRequest) respostas ao usar `responseText`, etc.) e pode ser tentador trabalhar apenas com strings.

Com convenções, é possível representar qualquer estrutura de dados em uma string. Isso não faz com que seja uma boa ideia. Por exemplo, com um separador, pode-se emular uma lista (enquanto um array JavaScript seria mais adequado). Infelizmente, quando o separador é usado em um dos elementos da "lista", a lista é quebrada. Um caractere de escape pode ser escolhido, etc. Tudo isso requer convenções e cria uma carga de manutenção desnecessária.

Use strings para dados textuais. Ao representar dados complexos, _parse_ strings e use a abstração apropriada.

### Tipo Symbol

Um Symbol é um valor primitivo **único** e **imutável** e pode ser usado como a chave de uma propriedade Object (veja abaixo). Em algumas linguagens de programação, os símbolos são chamados de "átomos".

Para mais detalhes veja a página de referência {{jsxref("Symbol")}}.

## Objetos

Na ciência da computação, um objeto é um valor na memória que possivelmente é referenciado por um [identificador](/pt-BR/docs/Glossary/Identifier).

### Propriedades

Em JavaScript, os objetos podem ser vistos como uma coleção de propriedades. Com a [sintaxe literal de objeto](/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals), um conjunto limitado de propriedades é inicializado; então as propriedades podem ser adicionadas e removidas. Os valores de propriedade podem ser valores de qualquer tipo, incluindo outros objetos, o que permite construir estruturas de dados complexas. As propriedades são identificadas usando valores _key_. Um valor _key_ é um {{Glossary("String", "String value")}} ou um [Symbol value](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

Existem dois tipos de propriedades de objeto: A [_data_ property](#data_property) e a [_accessor_ property](#accessor_property). Cada propriedade tem _attributes_ correspondentes. Cada atributo é acessado internamente pelo mecanismo JavaScript, mas você pode defini-los por meio de {{jsxref("Object.defineProperty()")}} ou lê-los por meio de {{jsxref("Object.getOwnPropertyDescriptor()")}}. Você pode ler mais sobre as várias nuances na página {{jsxref("Object.defineProperty()")}}.

#### Propriedade de dados

As propriedades de dados associam uma chave a um valor. Pode ser descrito pelos seguintes atributos:

- `value`
  - : O valor recuperado por um acesso get da propriedade. Pode ser qualquer valor JavaScript.
- `gravável`
  - : Um valor booleano que indica se a propriedade pode ser alterada com uma atribuição.
- `enumerável`
  - : Um valor booleano que indica se a propriedade pode ser enumerada por um loop [`for...in`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in). Consulte também [Enumerabilidade e propriedade de propriedades](/pt-BR/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) para saber como a enumerabilidade interage com outras funções e sintaxes.
- `configurável`
  - : Um valor booleano que indica se a propriedade pode ser excluída, pode ser alterada para uma propriedade acessora e pode ter seus atributos alterados.

#### Propriedade do acessor

Associa uma chave com uma das duas funções de acesso (`get` e `set`) para recuperar ou armazenar um valor.

> [!NOTE]
> É importante reconhecer que é o acessor _property_ — não o acessor _method_. Podemos fornecer acessores semelhantes a classes a um objeto JavaScript usando uma função como valor — mas isso não torna o objeto uma classe.

Uma propriedade do acessor tem os seguintes atributos:

- `get`
  - : Uma função chamada com uma lista de argumentos vazia para recuperar o valor da propriedade sempre que um acesso de obtenção ao valor for executado. Consulte também [getters](/pt-BR/docs/Web/JavaScript/Reference/Functions/get). Pode ser `indefinido`.
- `definir`
  - : Uma função chamada com um argumento que contém o valor atribuído. Executado sempre que se tenta alterar uma propriedade especificada. Consulte também [setters](/pt-BR/docs/Web/JavaScript/Reference/Functions/set). Pode ser `indefinido`.
- `enumerável`
  - : Um valor booleano que indica se a propriedade pode ser enumerada por um loop [`for...in`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in). Consulte também [Enumerabilidade e propriedade de propriedades](/pt-BR/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) para saber como a enumerabilidade interage com outras funções e sintaxes.
- `configurável`
  - : Um valor booleano que indica se a propriedade pode ser excluída, pode ser alterada para uma propriedade de dados e pode ter seus atributos alterados.

### Objetos e funções "normais"

Um objeto JavaScript é um mapeamento entre _keys_ e _values_. Chaves são strings (ou símbolos), e _values_ pode ser qualquer coisa. Isso torna os objetos um ajuste natural para [hashmaps](https://en.wikipedia.org/wiki/Hash_table).

Funções são objetos regulares com a capacidade adicional de serem _callable_.

### Datas

Ao representar datas, a melhor opção é usar o [utilitário `Date`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) integrado em JavaScript.

### Coleções indexadas: Arrays e Arrays tipados

[Arrays](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) são objetos regulares para os quais existe uma relação específica entre propriedades de chave inteira e a propriedade `length`.

Além disso, arrays herdam de `Array.prototype`, que fornece a eles um punhado de métodos convenientes para manipular arrays. Por exemplo, [`indexOf()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) (pesquisando um valor no array) ou [`push()`](/en- US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) (adicionando um elemento à matriz) e assim por diante. Isso torna os Arrays um candidato perfeito para representar listas ou conjuntos.

[Typed Arrays](/pt-BR/docs/Web/JavaScript/Guide/Typed_arrays) apresentam uma visão semelhante a um array de um buffer de dados binários subjacente e oferecem muitos métodos que têm semântica semelhante aos equivalentes de array. "Typed array" é um termo abrangente para uma variedade de estruturas de dados, incluindo `Int8Array`, `Float32Array`, etc. Verifique a página [typed array](/pt-BR/docs/Web/JavaScript/Guide/Typed_arrays) para obter mais informações .

### Coleções chaveadas: Maps, Sets, WeakMaps, WeakSets

Essas estruturas de dados usam referências de objetos como chaves. {{jsxref("Set")}} e {{jsxref("WeakSet")}} representante reenviam um conjunto de objetos, enquanto {{jsxref("Map")}} e {{jsxref("WeakMap")}} associam um valor a um objeto.

A diferença entre `Map`s e `WeakMap`s é que no primeiro, as chaves de objeto podem ser enumeradas. Isso permite otimizações de coleta de lixo no último caso.

Você pode implementar `Map`s e `Set`s você mesmo. No entanto, como os objetos não podem ser comparados (no sentido de `<` "menor que", por exemplo), nem o mecanismo expõe sua função de hash para objetos, o desempenho da pesquisa seria necessariamente linear. Implementações nativas deles (incluindo `WeakMap`s) podem ter um desempenho de pesquisa que é aproximadamente logarítmico para tempo constante.

Normalmente, para vincular dados a um nó DOM, pode-se definir propriedades diretamente no objeto ou usar atributos `data-*`. Isso tem a desvantagem de que os dados estão disponíveis para qualquer script em execução no mesmo contexto. `Map`s e `WeakMap`s facilitam _privately_ vincular dados a um objeto.

### Dados estruturados: JSON

JSON (**J**ava**S**cript **O**bject **N**otation) é um formato leve de intercâmbio de dados, derivado do JavaScript, mas usado por muitas linguagens de programação. JSON cria estruturas de dados universais.

Consulte [JSON](/pt-BR/docs/Glossary/JSON) e {{jsxref("JSON")}} para obter mais detalhes.

### Mais objetos na biblioteca padrão

JavaScript tem uma biblioteca padrão de objetos internos.

Por favor, dê uma olhada na [referência](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects) para saber mais sobre objetos.

## Determinando tipos usando o operador `typeof`

O operador `typeof` pode ajudá-lo a encontrar o tipo de sua variável.

Leia a [página de referência](/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof) para obter mais detalhes e casos extremos.

## Veja também

- [Estruturas de dados e algoritmos JavaScript por Oleksii Trekhleb](https://github.com/trekhleb/javascript-algorithms)
- [Coleção de Nicholas Zakas de estrutura de dados comum e algoritmos comuns em JavaScript.](https://github.com/humanwhocodes/computer-science-in-javascript)
- [Search Tre(i)es implementados em JavaScript](https://github.com/monmohan/dsjslib)
- [Tipos de dados e valores na especificação ECMAScript](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
