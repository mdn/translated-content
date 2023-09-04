---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
---

{{JSRef}} {{SeeCompatTable}}

O método **`Object.entries()`** retorna uma array dos próprios pares `[key, value]` enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop {{jsxref("Statements/for...in", "for...in")}} (sendo a diferença que o for-in loop enumera também propriedades dispostas na cadeia de prototipagem - _prototype chain_).

## Sintaxe

```
Object.entries(obj)
```

### Parâmetros

- `obj`
  - : O objeto cujos próprios pares `[key, value]` de propriedades enumeráveis deverão ser retornados.

### Valor de retorno

Uma array de pares `[key, value]` enumeráveis de propriedades de um dado objeto.

## Descrição

`Object.entries()` retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades `[key, value]` enumeráveis encontrados diretamente sobre o objeto. A ordem das propriedades é a mesma que seria se fossem iteradas as propriedades do objeto manualmente.

## Exemplos

```js
var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// objeto array-like
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// objeto array-like com ordenação aleatória de chave (key)
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo é uma propriedade que não é enumerável
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
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// argumento não-objeto será convertido (conversão implícita) para um objeto
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// itera graciosamente através de chave-valor (key-value)
var obj = { a: 5, b: 7, c: 9 };
for (var [key, value] of Object.entries(obj)) {
  console.log(key + " " + value); // "a 5", "b 7", "c 9"
}

// Ou, usando array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + " " + value); // "a 5", "b 7", "c 9"
});
```

### Convertendo um `Object` em um `Map`

O construtor {{jsxref("Map", "new Map()")}} aceita entradas iteráveis. Com o `Object.entries`, você pode facilmente converter de {{jsxref("Object")}} para {{jsxref("Map")}}:

```js
var obj = { foo: "bar", baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

## Polyfill

Para incluir suporte ao `Object.entries` em ambientes mais antigos, você pode achar um Polyfill nos repositórios: [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) e [es-shims/Object.entries](https://github.com/es-shims/Object.entries).

## Especificaçōes

| Especificação                                                    | Status               | Comentário         |
| ---------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ESDraft', '#sec-object.entries', 'Object.entries')}} | {{Spec2('ESDraft')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.entries")}}

## Veja também

- [Enumerabilidade e posse de propriedades](/pt-BR/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}} {{experimental_inline}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
