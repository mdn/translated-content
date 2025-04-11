---
title: Funcionalidades Descontinuadas e/ou Obsoletas
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
---

{{JsSidebar("More")}}

Esta página lista funcionalidades do JavaScript que foram descontinuadas (ou seja, continuam disponíveis mas têm remoção planejada) e obsoletas (ou seja, não estão mais disponíveis).

## Funcionalidades Descontinuadas

Estas funcionalidades descontinuadas ainda podem ser usadas, mas com cautela, porque espera-se que sejam removidas por completo no futuro. Aconselha-se que remova-as do seu código.

Alguns desses recursos descontinuados estão listados na seção [Anexo B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) da especificação ECMAScript (Leitura em Inglês). Essa seção é descrita como normativa opcional, ou seja, os hosts de navegadores da Web devem implementar esses recursos, enquanto os hosts que não são da Web não podem. Esses recursos são provavelmente estáveis, pois sua remoção causará problemas de compatibilidade com versões anteriores e quebrará sites antigos. (O JavaScript tem o objetivo de design de “não quebrar a Web”.) Ainda assim, eles não são portáteis para várias plataformas e podem não ser compatíveis com todas as ferramentas de análise, portanto, recomendamos que você não os use, como afirma a introdução do Anexo B (Traduzida do Inglês para melhor compreensão):

> ...Todos os recursos e comportamentos de linguagem especificados neste anexo têm uma ou mais características indesejáveis e, na ausência de uso legado, seriam removidos desta especificação. ...
>
> ...Os programadores não devem usar ou presumir a existência desses recursos e comportamentos ao escrever um novo código ECMAScript. ...

Algumas outras, embora no corpo principal da especificação, também são marcadas como normativas opcionais e não devem ser consideradas.

### Comentários HTML

O código-fonte JavaScript, se interpretado como scripts, permite comentários semelhantes a HTML, como se o script fizesse parte de uma tag `<script>`.

O JavaScript a seguir é válido quando executado em um navegador da Web (ou Node.js, que usa o mecanismo V8 que alimenta o Chrome):

```js
<!-- comentário
console.log("a"); <!-- outro comentário
console.log("b");
--> mais um comentário
// Imprime "a" e "b"
```
`<!--` e `-->` agem como `//`, ou seja, iniciam comentários de linha. `-->` só é válido no início de uma linha (para evitar ambiguidade com um decremento pós-fixo seguido por um operador maior que), enquanto `<!--` pode ocorrer em qualquer lugar da linha.

### Propriedades RegExp

As seguintes propriedades foram descontinuadas. Isso não afeta seu uso em [cadeias de substituição](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- [`$1–$9`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Correspondências da sub cadeia de caracteres entre parênteses, se houver.
- [`input`, `$_`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : A cadeia de caracteres com a qual uma expressão regular é comparada.
- [`lastMatch`, `$&`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : A última sub cadeia de caracteres correspondente.
- [`lastParen`, `$+`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : A última correspondência da sub cadeia de caracteres entre parênteses, se houver.
- [`leftContext`, `` $` ``](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : A sub cadeia de caracteres que precede a correspondência mais recente.
- [`rightContext`, `$'`](/pt-B/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : A sub cadeia de caracteres após a correspondência mais recente.

> [!WARNING]
> Evite utilizar essas propriedades estáticas, pois elas podem causar problemas ao [interagir com código externo](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)! (Leitura em Inglês)

O método compile() foi descontinuado. Em vez disso, construa uma nova instância de `RegExp`.

As seguintes sintaxes de regex foram descontinuadas e se encontram disponíveis apenas no modo [_Unicode-unaware_](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). No modo _Unicode-aware_, todas resultam em erros de sintaxe:

- [Asserções de antecipação](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) podem ter [quantificadores](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier).
- [Referências anteriores](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) que não se referem a um grupo de captura existente tornam-se [escapes octal legado](#sequências_de_escape).
- Em [classes de caracteres](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Character_class), os intervalos de caracteres em que um limite é uma classe de caracteres fazem com que o `-` se torne um caractere literal.
- Uma sequência de escape que não é reconhecida se torna um ["escape de identidade"](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- As sequências de escape em [classes de caracteres](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) do formato `\cX`, em que `X` é um número ou `_`, são decodificadas da mesma forma que aquelas com letras [ASCII](/pt-BR/docs/Glossary/ASCII): `\c0` é o mesmo que `\cP` quando considerado o módulo 32. Além disso, se a forma `\cX` for encontrada em qualquer lugar em que `X` não seja um dos caracteres reconhecidos, a barra invertida será tratada como um caractere literal.
- A sequência `\k` em uma regex que não tem nenhum [grupo de captura nomeado](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) é tratada como um escape de identidade.
- Os caracteres de sintaxe `]`, `{` e `}` podem aparecer [literalmente](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) sem escape se não puderem ser interpretados como o final de uma classe de caracteres ou delimitadores de quantificadores.

### Função

- A propriedade [`caller`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) das funções e a propriedade [`arguments.callee`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments/callee) foram descontinuadas e estão indisponíveis no modo estrito.
- Em vez de acessar `arguments` como uma propriedade de uma função, você deve usar o objeto [`arguments`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments) dentro de fechamentos de funções.

### Objeto

- Os acessadores [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) foram descontinuados. Em vez disso, utilize [`Object.getPrototypeOf`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) e [`Object.setPrototypeOf`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). Isso não se aplica à chave literal `__proto__` em literais de objetos.
- Os métodos [`Object.prototype.__defineGetter__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object. prototype.__lookupGetter__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) e [`Object.prototype.__lookupSetter__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) foram descontinuados. Em vez disso, use [`Object.getOwnPropertyDescriptor`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) e [`Object.defineProperty`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### Métodos de _String_ (Cadeia de Caracteres)

- Métodos de encapsulamento HTML como [`String.prototype.fontsize`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize) e [`String.prototype.big`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/big).
- [`String.prototype.substr`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr) provavelmente não será removido tão cedo, mas está definido no _Anexo B_ e, portanto, é normativo opcional.
- `String.prototype.trimLeft` e `String.prototype.trimRight` devem ser substituídos por [`String.prototype.trimStart`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) e [`String.prototype.trimEnd`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

### Métodos de Data

- Os métodos [`getYear()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear) e [`setYear()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear) são afetados pelo problema do _ano 2000_ e foram substituídos por [`getFullYear`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) e [`setFullYear`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear).
- O método `toGMTString()` foi descontinuado. Em vez disso, use [`toUTCString()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString).

### Sequências de Escape

- As sequências de escape octal (\ seguidas de um, dois ou três dígitos octais) são obsoletas em literais de strings e expressões regulares.
- As funções [`escape()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/escape) e [`unescape()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/unescape) estão obsoletas. Use [`encodeURI()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/encodeURI), [`encodeURIComponent()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent), [`decodeURI()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/decodeURI) ou [`decodeURIComponent()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) para codificar e decodificar sequências de escape para caracteres especiais.

### _Statements_ (Instruções)

A instrução [`with`](/pt-BR/docs/Web/JavaScript/Reference/Statements/with) foi descontinuada e não está disponível no modo estrito.

Inicializadores em declarações `var` de cabeçalhos de loops [`for...in`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in) foram descontinuados e resultam em [erros de sintaxe](/pt-BR/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) no modo estrito. A expressão do inicializador é avaliada e atribuída à variável, mas o valor seria imediatamente reatribuído na primeira iteração do loop.

Normalmente, o bloco `catch` de uma instrução [`try...catch`](/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch) não pode conter nenhuma declaração de variável com o mesmo nome das variáveis vinculadas no `catch()`. Uma gramática de extensão permite que o bloco `catch` contenha uma variável declarada [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var) com o mesmo nome do identificador vinculado a `catch`, mas somente se a vinculação `catch` for um identificador simples, não um [padrão de desestruturação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring). No entanto, a inicialização e a atribuição dessa variável agiriam apenas no identificador vinculado a `catch`, em vez de na variável de escopo superior, e o comportamento poderia ser confuso, observe no exemplo abaixo:

```js
var a = 2;
try {
  throw 42;
} catch (a) {
  var a = 1; // Esse 1 é atribuído ao `a` capturado, não ao `a` externo.
}
console.log(a); // 2

try {
  throw 42;
  // Observação: o identificador foi alterado para `err` para evitar conflito com
  // a declaração interna de `a`.
} catch (err) {
  var a = 1; // Esse 1 é atribuído ao escopo superior `a`.
}
console.log(a); // 1
```

Isso está listado no _Anexo B_ das especificações e, portanto, pode não ser implementado em todos os lugares. Evite qualquer conflito de nomes entre o identificador vinculado ao `catch` e as variáveis declaradas no bloco `catch`.

## Funcionalidades Obsoletas

Esses recursos obsoletos foram totalmente removidos do JavaScript e não podem mais ser usados a partir da versão indicada do JavaScript.

### Propriedades RegExp

As propriedades a seguir agora são de _instâncias_ `RegExp` e não mais do _construtor_ `RegExp`:

| Propriedade                                                                                                  | Descrição                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [`global`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)                                | Se a expressão regular deve ou não ser testada em todas as correspondências possíveis em uma cadeia de caracteres ou somente na primeira. |
| [`ignoreCase`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)                        | Se deve ou não ignorar maiúsculas e minúsculas ao tentar uma correspondência em uma cadeia de caracteres.                                 |
| [`lastIndex`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)                          | O índice no qual será iniciada a próxima correspondência.                                                                                 |
| [`multiline`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) (também via `RegExp.$*`) | Se deve ou não pesquisar em cadeias de caracteres em várias linhas.                                                                       |
| [`source`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)                                | O texto do padrão.                                                                                                                        |

O método `valueOf()` não é mais especializado para `RegExp`. Ele usa [`Object.prototype.valueOf()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), que retorna a si mesmo.

### Função

- A propriedade `arity` das funções está obsoleta. Em vez disso, use [`length`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Objeto

| Propriedade                  | Descrição                                                                                                      | Alternativa                                                                                                                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Retorna o número de propriedades enumeráveis diretamente em um objeto definido pelo usuário.                   | [`Object.keys()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                     |
| `__parent__`                 | Aponta para o contexto de um objeto.                                                                           | Sem substituição direta                                                                                                                                                                |
| `__iterator__`               | Utilizado com [iteradores legado](#gerador_e_iterador_legado)                                                  | [`Symbol.iterator`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) e os novos [protocolos de iteração](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Um método chamado quando uma propriedade inexistente é chamada como método.                                    | [`Proxy`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy)                                                                                                                   |
| `Object.prototype.eval()`    | Avalia uma linha de código JavaScript no contexto do objeto especificado.                                      | Sem substituição direta                                                                                                                                                                |
| `Object.observe()`           | Observar de forma assíncrona as alterações em um objeto.                                                       | [`Proxy`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy)                                                                                                                   |
| `Object.unobserve()`         | Remove os observadores                                                                                         | [`Proxy`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy)                                                                                                                   |
| `Object.getNotifier()`       | Cria um objeto notificador que permite acionar sinteticamente uma alteração observável com `Object.observe()`. | Sem substituição direta                                                                                                                                                                |
| `Object.prototype.watch()`   | Anexa uma chamada de retorno de manipulador a uma propriedade que é chamada quando a propriedade é atribuída.  | [`Proxy`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy)                                                                                                                   |
| `Object.prototype.unwatch()` | Remove os manipuladores de observação em uma propriedade.                                                      | [`Proxy`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy)                                                                                                                   |

### Métodos de _String_ (Cadeia de Caracteres)

- Métodos genéricos de String não-padrão como `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, “!”)`, etc. foram introduzidos no Firefox 1.5 (JavaScript 1.6), descontinuados no Firefox 53 e removidos no Firefox 68. Em vez disso, você pode usar métodos em [`String.prototype`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods) junto com [`Function.call`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/call).
- O `String.prototype.quote` foi removido do Firefox 37.
- O parâmetro `flags` não padrão em [`String.prototype.search`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/search), [`String.prototype.match`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match) e [`String.prototype.replace`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace) está obsoleto.

### _WeakMap_

- O `WeakMap.prototype.clear()` foi adicionado no Firefox 20 e removido no Firefox 46. Não é possível percorrer todas as chaves em um [`WeakMap`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakMap).

### Métodos de Data

- O `Date.prototype.toLocaleFormat()`, que usava uma linha de formatação no mesmo formato esperado pela função `strftime()` em C, está obsoleto. Em vez disso, utilize [`toLocaleString()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) ou [`Intl.DateTimeFormat`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

### _Array_ (Matriz)

- Os métodos genéricos de matriz não padrão, como `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, etc., foram introduzidos no Firefox 1.5 (JavaScript 1.6), descontinuados no Firefox 68 e removidos no Firefox 71. Em vez disso, você pode usar métodos em [`Array.prototype`]() junto com [`Function.call`]().

### Número

- `Number.toInteger()` está obsoleto. Utilize [`Math.floor`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ou outros métodos.

### _Proxy_

- `Proxy.create` e `Proxy.createFunction` estão obsoletos. Em vez disso, use o construtor [`Proxy()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).
- As seguintes _traps_ (do inglês "armadilha", métodos que interceptam operações em um objeto, permitindo um comportamento personalizado) estão obsoletas:
 - `hasOwn` ([bug 980565](https://bugzil.la/980565), Firefox 33).
 - `getEnumerablePropertyKeys` ([bug 783829](https://bugzil.la/783829), Firefox 37)
 - `getOwnPropertyNames` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)
 - `keys` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)

### _ParallelArray_ (Matriz paralela)

- O `ParallelArray` está obsoleto.

### _Statements_ (Instruções)

- `for each...in` está obsoleto. Em vez disso, use [`for...of`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of).
- Os _blocos_ `let` e as _expressões_ `let` estão obsoletos.
- Os fechamentos de expressões (`função () 1` como uma abreviação de `função () { return 1; }`) estão obsoletos. Em vez disso, use [`funções`](/pt-BR/docs/Web/JavaScript/Reference/Operators/function) regulares ou [`funções de seta`](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Aquisição de texto fonte

Os métodos `toSource()` de arrays, números, strings, etc. e a função global `uneval()` estão obsoletos. Use [`toString()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) ou escreva seu próprio método de serialização .

### Gerador e Iterador legado

As declarações de função de gerador legado e as expressões de função de gerador legado foram removidas. A sintaxe da função geradora legada reutiliza a palavra-chave `function`, que se torna automaticamente uma função geradora quando há uma ou mais expressões `yield` no corpo - isso agora é um erro de sintaxe. Em vez disso, use [instruções `function*`](/pt-BR/docs/Web/JavaScript/Reference/Statements/function*) e [expressões `function*`](/pt-BR/docs/Web/JavaScript/Reference/Operators/function*).

As compreensões de matriz e as compreensões de gerador foram removidas.

```js-nolint
// Compreensões de matriz legado
[for (x of iterable) x]
[for (x of iterable) if (condition) x]
[for (x of iterable) for (y of iterable) x + y]

// Compreensões de geradores legado
(for (x of iterable) x)
(for (x of iterable) if (condition) x)
(for (x of iterable) for (y of iterable) x + y)
```

O Firefox, antes da versão 26, implementou outro protocolo de iterador que é semelhante ao [protocolo padrão](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols). Um objeto é um iterador legado quando implementa um método `next()`, que produz um valor em cada chamada e lança um objeto `StopIteration` no final da iteração. Esse protocolo de iterador legado é diferente do protocolo de iterador padrão:

- O valor era retornado diretamente como o valor de retorno das chamadas para `next()`, em vez da propriedade `value` do objeto `IteratorResult`.
- O término da iteração era expresso por meio do lançamento de um objeto `StopIteration`, em vez de por meio da propriedade `done` do objeto `IteratorResult`.

Esse recurso, juntamente com o construtor global `StopIteration`, foi removido no Firefox 58+. Para usos futuros, considere usar loops [`for...of`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) e o [protocolo iterador](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols).

### _Sharp variables_

> **Nota:** **Nota do tradutor:** _Sharp variables_ se refere a uma sintaxe em inicializadores de objetos que permite a serialização de objetos que têm referências cíclicas ou várias referências ao mesmo objeto

As _Sharp variables_ são obsoletas. Para criar estruturas circulares, use variáveis temporárias.
