---
title: Atribuição via desestruturação (destructuring assignment)
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
---

{{jsSidebar("Operators")}}

A sintaxe de **atribuição via desestruturação (destructuring assignment)** é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

## Sintaxe

```js
var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({ a, b } = { a: 1, b: 2 });
console.log(a); // 1
console.log(b); // 2

// ES2016 - não implementado em Firefox 47a01
({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });
```

## Descrição

As expressões de objeto e matriz literais fornecem uma maneira fácil de criar pacotes _ad hoc_ de dados .

```js
var x = [1, 2, 3, 4, 5];
```

A atribuição via desestruturação usa sintaxe similar, mas no lado esquerdo da atribuição são definidos quais elementos devem ser extraídos da variável de origem.

```js
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Esse recurso é semelhante aos recursos presentes em linguagens como Perl e Python.

## Desestruturação de array

### Atribuição básica de variável

```js
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

### Atribuição separada da declaração

Uma variável pode ter seu valor atribuído via desestruturação separadamente da declaração dela.

```js
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### Valores padrão

Uma variável pode ser atribuída de um padrão, no caso em que o valor retirado do array é undefined.

```js
var a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### Trocando variáveis

Os valores de duas variáveis podem ser trocados em uma expressão de desestruturação.

Sem atribuição via desestruturação, trocar dois valores requer uma variável temporária (ou, em algumas linguagens de baixo nível, o [Algoritmo XOR Swap](https://pt.wikipedia.org/wiki/Algoritmo_XOR_Swap)).

```js
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

### Analisando um array retornado de uma função

Sempre foi possível retornar uma matriz de uma função. A desestruturação pode tornar mais conciso o trabalho com um valor de retorno do tipo array.

Neste exemplo, `f()` retorna os valores `[1, 2]` como saída, que podem ser analisados em uma única linha com desestruturação.

```js
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

### Ignorando alguns valores retornados

Você pode ignorar valores retornados que você não tem interesse:

```js
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
```

Você também pode ignorar todos os valores retornados:

```js
[, ,] = f();
```

### Atribuindo o resto de um array para uma variável

Ao desestruturar um array, você pode atribuir a parte restante deste em uma viáriável usando o padrão rest:

```js
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

### Extraindo valores do resultado de uma expressão regular

Quando o método de expressão regular [`exec()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) encontra um resultado, ele retorna um array que contém primeiro toda a porção resultante da string e depois cada uma das porções da string resultante envolvidas por parênteses na expressão regular. A atribuição via desestruturação lhe permite extrair as partes desses array facilmente, ignorando a porção resultante completa se não precisar.

```js
var url = "https://developer.mozilla.org/pt-BR/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL); // ["https://developer.mozilla.org/pt-BR/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // "https"
```

## Desestruturação de objeto

### Atribuição básica

```js
var o = { p: 42, q: true };
var { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

### Atribuição sem declaração

Uma variável pode ter seu valor atribuído via desestruturação separadamente da sua declaração.

```js
var a, b;

({ a, b } = { a: 1, b: 2 });
```

> **Nota:** Os parênteses `( ... )` ao redor da declaração de atribuição é uma sintaxe necessária quando se utiliza a atribuição via desestruturação de objeto literal sem uma declaração.
>
> `{a, b} = {a:1, b:2}` não é uma sintaxe stand-alone válida, pois `{a, b}` no lado esquerdo é considarada um bloco, não um objeto literal.
>
> No entanto, `({a, b} = {a:1, b:2})` é valida, assim como `var {a, b} = {a:1, b:2}`

### Atribuição para variáveis com novos nomes

Uma variável pode ser extraída de um objeto e atribuída a uma variável com um nome diferente da propriedade do objeto.

```js
var o = { p: 42, q: true };
var { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

### Valores padrão

Uma variável pode ser atribuída de um padrão, no caso em que o valor retirado do objeto é undefined.

```js
var { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

### Definindo um valor padrão de parâmetro de função

#### Versão ES5

```js
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? "big" : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});
```

#### Versão ES2015

```js
function drawES2015Chart({
  size = "big",
  cords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});
```

### Objeto aninhado e desestruturação de array

```js
var metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/pt-BR/docs/Tools/Scratchpad",
};

var {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

### For de iteração e desestruturação

```js
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (var {
  name: n,
  family: { father: f },
} of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### Extraindo campos de objetos passados como parâmetro de função

```js
function userId({ id }) {
  return id;
}

function whois({ displayName: displayName, fullName: { firstName: name } }) {
  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```

Isso extrai o `id`, `displayName` e `firstName` do objeto `user` e os imprime na tela.

### Nomes computados de propriedade de objeto e desestruturação

Nomes computados de propriedades, como em [objetos literais](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names), podem ser usados com desestruturação.

```js
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

## Especificações

| Espeficiação                                                                         | Situação             | Comentário         |
| ------------------------------------------------------------------------------------ | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-destructuring-assignment', 'Destructuring assignment')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-destructuring-assignment', 'Destructuring assignment')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.operators.destructuring")}}

## Notas específicas do Firefox

- O Firefox forneceu uma extensão não-padronizada de linguagem em [JS1.7](/pt-BR/docs/Web/JavaScript/New_in_JavaScript/1.7) para desestruturação. Esta extensão foi removida no Gecko 40. Consulte [Erro do Firefox 1083498](https://bugzil.la/1083498).
- A partir do Gecko 41 e para cumprir com a especificação ES2015, padrões de desestruturação com parênteses, como `([a, b]) = [1, 2]` or `({a, b}) = { a: 1, b: 2 }`, agora são considerados inválidos e lançarão um {{jsxref ( "SyntaxError")}}. Veja a postagem no blog de Jeff Walden e [Erro do Firefox 1146136](https://bugzil.la/1146136) para mais detalhes.

## Veja também

- [Operadores de Atribuição](/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- ["ES6 in Depth: Destructuring" on hacks.mozilla.org (em inglês)](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
