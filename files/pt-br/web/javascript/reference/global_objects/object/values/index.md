---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
---

{{JSRef}} {{SeeCompatTable}}

O método **`Object.values()`** retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida pelo {{jsxref("Statements/for...in", "for...in")}} laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).

## Sintaxe

```
Object.values(obj)
```

### Parâmetros

- `obj`
  - : O objeto cujos valores das propriedades enumeradas serão retornados.

### Valor de retorno

Um array contendo os valores das propriedades enumeradas do dado objeto.

## Descrição

`Object.values()` retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto. A ordem das propriedades é a mesma que a dada pelo laço sobre os valores da propriedade do objeto manualmente.

## Exemplos

```js
var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array como objeto
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array como objeto com ordenação de chave aleatória
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo é a propriedade a qual não é enumerável
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']

// argumento não-objeto será coagido num objeto
console.log(Object.values("foo")); // ['f', 'o', 'o']
```

## Biblioteca de Suporte

`Para adicionar compatibilidade ao suporte de Object.values` em ambientes antigos que nativamente não o suportam, você pode encontrar uma biblioteca de suporte nos repositórios [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) ou no [es-shims/Object.values](https://github.com/es-shims/Object.values).

## Especificações

| Especificações                                                 | Situação             | Comentário          |
| -------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ESDraft', '#sec-object.values', 'Object.values')}} | {{Spec2('ESDraft')}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.values")}}

## Ver também

- [Enumerability and ownership of properties](/pt-BR/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}} {{experimental_inline}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
