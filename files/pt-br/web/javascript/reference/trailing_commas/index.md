---
title: Trailing commas
slug: Web/JavaScript/Reference/Trailing_commas
---

{{JsSidebar("More")}}

**Trailing commas** (por vezes chamadas "final commas") podem ser úteis quando
adicionar novos elementos, parâmetros, ou propriedades ao código JavaScript. Se desejar adicionar um
nova propriedade, pode adicionar uma nova linha sem modificar a última linha anterior, se isso
A linha já usa uma vírgula de trailing. Isto torna as diffs de controle de versão mais limpas e editadas, assim o
controle de versão do código pode ser menos problemático.

O JavaScript tem permitido o uso de trailing commas em arrays literais desde o início, e posteriormente adicionou-as aos objetos literais, e mais recentemente, a
parâmetros da função e a importações nomeadas e exportações nomeadas.

[JSON](/pt-BR/docs/Glossary/JSON), no entanto, não permitem o uso de trailing comma.

## Syntax

```js
,
```

## Exemplos

### Trailing commas em literais

#### Arrays

JavaScript ignora trailing commas em arrays:

```js
const arr = [1, 2, 3];
arr; // [1, 2, 3]
arr.length; // 3
```

Se for utilizada mais do que uma trailing comma, é produzida uma elisão (ou buraco). Uma elisão
com buracos é chamado de _sparse_ (uma matriz _densa_ não tem sparse). Quando
arrays iteráveis por exemplo com {{jsxref("Array.prototype.forEach()")}} ou
{{jsxref("Array.prototype.map()")}}, os buracos da matriz são saltados.

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

#### Objetos

Trailing commas em objetos literais também são úteis:

```js
const objeto = {
  foo: "bar",
  teclado: "qwerty",
  idade: 42,
};
```

### Trailing commas em funções

Trailing commas também são permitidas nas listas de parâmetros de funções

#### Definição de parâmetros

Os seguintes pares de definição de funções são válidos e equivalentes um ao outro.
As trailing commas não afetam a propriedade `length` das declarações de função
ou o objeto `arguments`

```js
function f(p) {}
function f(p) {}
(p) => {};
(p) => {};
```

As trailing commas também funcionam como [definições de métodos](/pt-BR/docs/Web/JavaScript/Reference/Functions/Method_definitions) para classes ou objetos:

```js
class C {
  um(a) {}
  dois(a, b) {}
}
const objeto = {
  um(a) {},
  dois(a, b) {},
};
```

#### Chamadas de função

Os seguintes pares de invocação de funções são válidos e equivalentes um ao outro.

```js
f(p);
f(p);
Math.max(10, 20);
Math.max(10, 20);
```

#### Trailing commas inválidas

Definições de parâmetros de funções ou invocações de funções que contenham apenas uma vírgula
lançam um {{jsxref("SyntaxError")}}. Além disso, ao utilizar um [parâmetros rest](/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters), não são permitidas trailling commas:

```js example-bad
function f(,) {} // SyntaxError: parâmetro formal em falta
(,) => {};       // SyntaxError: expressão esperada, contém ','
f(,)             // SyntaxError: expressão esperada, contém ','
function f(...p,) {} // SyntaxError: parâmetro após parâmetro de repouso
(...p,) => {}        // SyntaxError: parênteses de fecho esperados, contém ','
```

### Trailing commas em desestruturação

Também é permitida uma vírgula no lado esquerdo quando se usa
[atribuição de desestruturação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring):

```js
// desestruturação de array com trailing comma
[a, b] = [1, 2];
// desestruturação de objeto com trailing comma
const o = {
  p: 42,
  q: true,
};
const { p, q } = o;
```

Mais uma vez, ao utilizar um elemento de rest, um {{jsxref("SyntaxError")}} será lançado:

```js example-bad
const [a, ...b] = [1, 2, 3];
// SyntaxError: elemento rest pode nao ter um trailing comma
```

### Trailing commas em JSON

Como o JSON se baseia num subconjunto muito restrito de sintaxe JavaScript, **não são permitidas trailing commas no JSON\***.

Ambas as linhas irão lançar um `SyntaxError`:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: carácter inesperado
// na linha 1 coluna 14 dos dados do JSON
```

Omitir trailing commas para analisar correctamente o JSON:

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

### Trailling commas em importações nomeadas e exportações nomeadas

Trailing commas são válidas em importações nomeadas e exportações nomeadas.

#### importações nomeadas

```js
import { A, B, C } from "D";
import { X, Y, Z } from "W";
import { A as B, C as D, E as F } from "Z"; //Renomeando as importações
```

#### exportações nomeadas

```js
export { A, B, C };
export { A, B, C };
export { A as B, C as D, E as F }; // Renomeando as importações
```

### Prefixo do quantificador

```js
  //{ DecimalDigits[~Sep], DecimalDigits[~Sep] }
  x{n,}
  x{n,m}
  x{n,m}?
```

## Especificações

{{Specifications}}

## Compatibilidade

{{Compat}}

## Veja também

- Proposta inicial do ECMAScript: [trailing function commas](https://github.com/tc39/proposal-trailing-function-commas) por Jeff Morrison
