---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
---

{{JSRef}}

> **Aviso:** Esta funcionalidade está depreciada em favor da definição de setters usando a [sintaxe de inicialização de objeto](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer) ou a API {{jsxref("Object.defineProperty()")}}.
>
> Entretando, como ele é largamente implementado e usado na Web, é bem improvável que os navegadores vão parar de implementá-lo.

O método **`__defineSetter__`** vincula uma propriedade de um objeto a uma função a ser chamada quando é feita uma tentativa de atribuir algo a aquela propriedade.

## Sintaxe

```
obj.__defineSetter__(prop, fun)
```

### Parâmetros

- `prop`
  - : Uma cadeia de caracteres (_string_) contendo o nome da propriedade que vai ser vinculada a função dada.
- `fun`

  - : A função a ser chamada quando houver uma tentativa de atribuir na propriedade especificada. Esta função toma a forma

    ```js
    function(val) { . . . }
    ```

    - `val`
      - : Um apelido para a variável que contém o valor que se tentou atribuir a `prop`.

### Valor de retorno

{{jsxref("undefined")}}.

## Descrição

O método `__defineSetter__` permite um {{jsxref("Operators/set", "setter", "", 1)}} ser definido a um objeto pré-existente.

## Exemplos

### Não padronizados e forma depreciada

```js
var o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### Formas compatíveis padronizadas

```js
// Usando o operador set
var o = {
  set value(val) {
    this.anotherValue = val;
  },
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5

// Usando Object.defineProperty
var o = {};
Object.defineProperty(o, "value", {
  set: function (val) {
    this.anotherValue = val;
  },
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [`Object.prototype.__defineGetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- Operador {{jsxref("Operators/set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS Guide: Defining Getters and Setters](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
- [\[Blog Post\] Deprecation of \_\_defineGetter\_\_ and \_\_defineSetter\_\_](http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
- [bug 647423](https://bugzilla.mozilla.org/show_bug.cgi?id=647423)
