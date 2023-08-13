---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
---

{{JSRef}}

O método **`Object.getOwnPropertyNames()`** retorna um vetor com todas as propriedades (enumeráveis ou não) encontradas diretamente em um dado objeto.

## Sintaxe

```
Object.getOwnPropertyNames(obj)
```

### Parâmetros

- `obj`
  - : O objeto, cujas suas próprias propriedades, enumeráveis ou não, serão retornadas.

## Descrição

`Object.getOwnPropertyNames()` retorna um vetor cujos elementos são strings correspondentes as propriedades enumeráveis ou não, encontradas em `obj`. A ordem das propriedades enumeráveis no vetor é consistente com a ordenação exposta por um laço {{jsxref("Statements/for...in", "for...in")}} (ou por {{jsxref("Object.keys()")}}) nas propriedades do objeto. A ordenação das propriedades não-enumeráveis no vetor, e entre as propriedades enumeráveis, não está definida.

## Exemplos

### Usando `Object.getOwnPropertyNames()`

```js
var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// logs ["0", "1", "2", "length"]

// Array-like object
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort());
// logs ["0", "1", "2"]

// Logging property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(function (val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// logs
// 0 -> a
// 1 -> b
// 2 -> c

// non-enumerable property
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort());
// logs ["foo", "getFoo"]
```

Se voce quer somente as propriedades enumeráveis, veja {{jsxref("Object.keys()")}} ou use um laço {{jsxref("Statements/for...in", "for...in")}} (contudo, note que isto irá retornar propriedades enumeráveis não encontradas diretamente naquele objeto, mas também junto com a cadeia prototype do objeto a menos que o último seja filtrado com {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}}).

Ítens na cadeia prototype não são listados:

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass();
ChildClass.prototype.prototypeMethod = function () {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass(), // ["prop", "method"]
  ),
);
```

### Obtenha somente não-enumeráveis

Isto usa a função {{jsxref("Array.prototype.filter()")}} para remover as chaves enumeráveis (obtidas com {{jsxref("Object.keys()")}}) de uma lista com todas as chaves (obtidas com `Object.getOwnPropertyNames()`) deixando somente as chaves não-enumeráveis.

```js
var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function (key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // not found in enum_only keys mean the key is non-enumerable,
    // so return true so we keep this in the filter
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
```

## Notas

No ES5, se o argumento desse método não é um objeto (um tipo primitivo), então isso causará um {{jsxref("TypeError")}}. No ES6, um argumento diferente de objeto será transformado em um objeto.

```js
Object.getOwnPropertyNames("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (ES6 code)
```

## Especificações

| Esperificação                                                                            | Status               | Comentário                                           |
| ---------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.4', 'Object.getOwnPropertyNames')}}                     | {{Spec2('ES5.1')}}   | Definição inicial. Implementado no JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.getownpropertynames', 'Object.getOwnPropertyNames')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.getownpropertynames', 'Object.getOwnPropertyNames')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.getOwnPropertyNames")}}

## Notas específicas para SpiderMonkey

Antes do SpiderMonkey 28, `Object.getOwnPropertyNames` não via propriedades não resolvidas de objetos {{jsxref("Error")}}. Isto foi resolvido em versões posteriores ([Erro do Firefox 724768](https://bugzil.la/724768)).

## Veja também

- [Enumerabilidade e posse de propriedades](/pt-BR/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.forEach()")}}
