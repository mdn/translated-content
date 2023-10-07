---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
---

{{JSRef}}

O método **`Object.assign()`** é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos _de origem_ para um objeto _destino_. Este método irá retornar o objeto _destino_.

{{EmbedInteractiveExample("pages/js/object-assign.html")}}

## Sintaxe

```
Object.assign(destino, ...origens)
```

### Parâmetros

- `destino`
  - : O objeto _destino_.
- `origens`
  - : Um ou mais objetos de _origem_.

### Valor retornado

O objeto _destino_ será retornado.

## Descrição

O método `Object.assign()` copia apenas propriedades _enumeráveis_ e _próprias_ de um objeto _de origem_ para um objeto destino. Ele usa `[[Get]]` na origem e `[[Put]]` no _destino_, então isto irá invocar _getters_ e _setters_.

Portanto, ele _atribui_ propriedades, em vez de simplesmente copiar ou definir novas propriedades. Isso pode fazê-lo impróprio para combinar novas propriedades com um _prototype_ se os objetos _de origem_ contiverem getters. Para copiar definições de propriedades, incluindo sua enumerabilidade, para _prototypes_ {{jsxref("Object.getOwnPropertyDescriptor()")}} e {{jsxref("Object.defineProperty()")}} devem ser utilizadas no lugar.

Ambas as propriedades {{jsxref("String")}} e {{jsxref("Symbol")}} são copiadas.

No caso de erro, por exemplo, se uma propriedade não é _writable_, um {{jsxref("TypeError")}} será lançado e o objeto _destino_ permanecerá inalterado. Note que `Object.assign()` não lança erros caso algum argumento _source_ seja {{jsxref("null")}} ou {{jsxref("undefined")}}.

## Exemplos

### Clonando um objeto

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Mesclando objetos

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

### Copiando propriedades Symbol

```js
var o1 = { a: 1 };
var o2 = { [Symbol("foo")]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol("foo")]: 2 }
```

### Propriedades herdadas e não enumeráveis não podem ser copiadas

```js
var obj = Object.create(
  { foo: 1 },
  {
    // foo is an inherit property.
    bar: {
      value: 2, // bar is a non-enumerable property.
    },
    baz: {
      value: 3,
      enumerable: true, // baz is an own enumerable property.
    },
  },
);

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### Primitivas serão encapsuladas em objetos

```js
var v1 = "123";
var v2 = true;
var v3 = 10;
var v4 = Symbol("foo");

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "1", "1": "2", "2": "3" }
```

### Exceções irão interromper a tarefa de cópia em execução

```js
var target = Object.defineProperty({}, "foo", {
  value: 1,
  writeable: false,
}); // target.foo is a read-only property

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// The Exception is thrown when assigning target.foo

console.log(target.bar); // 2, the first source was copied successfully.
console.log(target.foo2); // 3, the first property of the second source was copied successfully.
console.log(target.foo); // 1, exception is thrown here.
console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
console.log(target.baz); // undefined, the third source will not be copied either.
```

### Copiando acessores

```js
var obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

var copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }, the value of copy.bar is obj.bar's getter's return value.

// This is an assign function which can copy accessors.
function myAssign(target, ...sources) {
  sources.forEach((source) => {
    Object.defineProperties(
      target,
      Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {}),
    );
  });
  return target;
}

var copy = myAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## Polyfill

Este polyfill não suporta propriedades {{jsxref("Symbol")}}, visto que ES5 não possui símbolos:

```js
if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (target) {
      "use strict";
      if (target === undefined || target === null) {
        throw new TypeError("Cannot convert first argument to object");
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (
          var nextIndex = 0, len = keysArray.length;
          nextIndex < len;
          nextIndex++
        ) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    },
  });
}
```

## Especificações

| Specification                                                 | Status              | Comment           |
| ------------------------------------------------------------- | ------------------- | ----------------- |
| {{SpecName('ES2015', '#sec-object.assign', 'Object.assign')}} | {{Spec2('ES2015')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.assign")}}

## Veja também

- {{jsxref("Object.defineProperties()")}}
- [Enumerabilidade e posse de propriedades](/pt-BR/docs/Web/JavaScript/Enumerabilidade_e_posse_de_propriedades)
