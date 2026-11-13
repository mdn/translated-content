---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
---

{{JSRef}}

O método estático **`Object.hasOwn()`** retorna `true` se o objeto específicado tem a propriedade indicada como sua propriedade _own_. Se a propriedade é herdada, ou não existe, o método retorna `false`.

> [!NOTE]
> `Object.hasOwn()` Tem a intenção de substituir {{jsxref("Object.hasOwnProperty()")}}.

{{InteractiveExample("JavaScript Demo: Object.hasOwn()")}}

```js interactive-example
const object1 = {
  prop: "exists",
};

console.log(Object.hasOwn(object1, "prop"));
// Expected output: true

console.log(Object.hasOwn(object1, "toString"));
// Expected output: false

console.log(Object.hasOwn(object1, "undeclaredPropertyValue"));
// Expected output: false
```

## Sintaxe

```js
hasOwn(instance, prop);
```

### Parâmetros

- `instance`
  - : A instância do objeto javascript para o teste.
- `prop`
  - : O nome {{jsxref("String")}} ou {{Glossary("Symbol")}} da propriedade para teste.

### Retorna valor

`true` se o objeto especificado definiu diretamente a propriedade especificada. Por outro lado `false`.

## Descrição

O método **`Object.hasOwn()`** retorna `true` se a propriedade especificada é uma propriedade direta do objeto - mesmo se o valor da propriedade é `null` ou `undefined`.

O método retorna `false` se a propriedade é herdada, ou não foi declarada. Diferente do operador {{jsxref("Operators/in", "in")}}, este método não verifica pela propriedade específica na cadeia do objeto.

Ele é mais recomendado do que {{jsxref("Object.hasOwnProperty()")}} porque ele funciona para objetos criados utilizando `Object.create(null)` e com objetos que sobescreveram o método herdado `hasOwnProperty()`. É possível contornar esse problema chamando o `Object.prototype.hasOwnProperty()` em um objeto externo, `Object.hasOwn()` é mais intuítivo.

## Exemplos

### Utilizando hasOwn para o teste de propriedades existentes

O seguinte código mostra como determinar se o seguinte objeto `example` contém a propriedade `prop`.

```js
const example = {};
Object.hasOwn(example, "prop"); // false = 'prop' ela não foi definida

example.prop = "exists";
Object.hasOwn(example, "prop"); // true - 'prop' ela foi definida

example.prop = null;
Object.hasOwn(example, "prop"); // true - a propriedade existe com o valor null

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - a propriedade existe com o valor undefined
```

### Propriedaedes direta vs. herdada

O seguinte exemplo diferencia entre propriedade direta e proprietade errada através do prototype chain:

```js
const example = {};
example.prop = "exists";

// `hasOwn` Só retornará true para propriedades diretas will:
Object.hasOwn(example, "prop"); // returns true
Object.hasOwn(example, "toString"); // returns false
Object.hasOwn(example, "hasOwnProperty"); // returns false

// O operador `in` só retornara tru para propriedades diretas ou herdadas:
"prop" in example; // returns true
"toString" in example; // returns true
"hasOwnProperty" in example; // returns true
```

### Iterando sobre as propriedades de um objeto

Para itererar sobre inúmeras propriedades de um objeto, você deve usar:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

Mas se você precisa utilizar `for...in`, você pode utilziar `Object.hasOwn()` para pular as propriedades herdadas.

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Verificando se um index existe em um array

Os elementos de um {{jsxref("Array")}} são definidos como propriedades diretas, você pode utilizar o método `hasOwn()` para verificar se existe um index específico:

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
```

### Casos problematicos para hasOwnProperty

Essa seção demonstra `hasOwn()` é imune aos problemas que afetam `hasOwnProperty`. Primeiramente, ele pode ser uasdos em objetos que foram reimplementados `hasOwnProperty()`:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "The dragons be out of office",
};

if (Object.hasOwn(foo, "bar")) {
  console.log(foo.bar); //true - reimplementação do hasOwnProperty() não afetara o objeto
}
```

Ele pode ser usado para testar objetos criados utilizando {{jsxref("Object.create()","Object.create(null)")}}. Esses não são herdados de `Object.prototype`, e assim o `hasOwnProperty()` é inacessível

```js
const foo = Object.create(null);
foo.prop = "exists";
if (Object.hasOwn(foo, "prop")) {
  console.log(foo.prop); //true - Funciona independente de como o objeto é criado.
}
```

## Especificações

{{Specifications}}

## Compabitiblidade de navegadores

{{Compat}}

## Veja também

- [Polyfill of `Object.hasOwn` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.hasOwnProperty()")}}
- [Enumerability and ownership of properties](/pt-BR/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [JavaScript Guide: Inheritance revisited](/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
