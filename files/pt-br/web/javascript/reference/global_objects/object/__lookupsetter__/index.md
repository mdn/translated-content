---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
---

{{JSRef}} {{deprecated_header}}

O método **`__lookupSetter__`** retorna a função vinculada como _setter_ para a propriedade especificada.

## Sintaxe

```
obj.__lookupSetter__(sprop)
```

### Parâmetros

- `sprop`
  - : Uma cadeia de caracteres (_string_) contendo o nome da propriedade a qual o _setter_ deve ser retornado.

### Valor de retorno

A função vinculada como _setter_ para a propriedade especificada.

## Descrição

Se o _setter_ foi definido para uma propriedade do objeto, não era possível referenciar a função através da propriedade, porque aquela propriedade se refere ao valor de retorno da função. `__lookupSetter__` pode ser usado para obter a referência para a função _setter_.

É possível agora fazer isso de forma padronizada usando {{jsxref("Object.getOwnPropertyDescriptor()")}}.

## Exemplos

### Formas compatíveis e não padronizadas de obter um definidor de propriedades

```js
var obj = {
  set foo(value) {
    this.bar = value;
  },
};

// Forma não padronizada e depreciada
obj.__lookupSetter__("foo");
// (function(value) { this.bar = value; })

// Forma compatível padronizada
Object.getOwnPropertyDescriptor(obj, "foo").set;
// (function(value) { this.bar = value; })
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [`Object.prototype.__lookupGetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- Operador {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}} e {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__defineGetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS Guide: Defining Getters and Setters](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
