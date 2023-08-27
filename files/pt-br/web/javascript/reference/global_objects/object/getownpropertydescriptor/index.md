---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
---

{{JSRef}}

O método **`Object.getOwnPropertyDescriptor()`** retorna um descritor de propriedades para uma propriedade (isto é, uma diretamente presente, e não pertencente ao objeto por força da cadeia de protótipo do objeto) de um dado objeto.

## Sintaxe

```
Object.getOwnPropertyDescriptor(obj, prop)
```

### Parâmetros

- `obj`
  - : O objeto no qual deve-se procurar pela propriedade.
- `prop`
  - : O nome da propriedade cuja descrição é para ser retornada.

### Valor de Retorno

Um descritor de propriedades da propriedade especificada, se esta existir no objeto, ou {{jsxref("undefined")}}, caso contrário.

## Descrição

Este método permite uma análise da descrição precisa de uma propriedade. Uma propriedade em Javascript consiste de um nome com formato _texto-valor_ e um descritor de propriedades. Mais informações sobre os tipos de descritores de propriedades e seus atributos podem ser encontrados em {{jsxref("Object.defineProperty()")}}.

Um descritor de propriedade é um registro com alguns dos seguintes atributos:

- `value`
  - : o valor associado com a propriedade (somente para descritores de dados).
- **`writable`**
  - : `true` se, e somente se, o valor associado com a propriedade pode ser alterado (somente para descritores de dados).
- `get`
  - : Uma função que serve como um _getter_, para obter o valor da propriedade, ou {{jsxref("undefined")}} se não houver (somente para descritores de acesso).
- `set`
  - : Uma função que serve como um s*etter*, para atribuir um valor à propriedade, ou {{jsxref("undefined")}} se não houver (somente para descritores de acesso).
- `configurable`
  - : `true` se, e somente se, o tipo deste descritor de propriedade pode ser alterado e se a propriedade pode ser excluída do objeto correspondente.
- `enumerable`
  - : `true` se, e somente se, esta propriedade aparece durante a enumeração das propriedades do objeto correspondente.

## Exemplos

```js
var o, d;

o = {
  get foo() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "foo");
// d é { configurable: true, enumerable: true, get: /*A função getter*/, set: undefined }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d é { configurable: true, enumerable: true, value: 42, writable: true }

o = {};
Object.defineProperty(o, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "baz");
// d é { value: 8675309, writable: false, enumerable: false, configurable: false }
```

## Notas

No ES5, o primeiro parâmetro deste método não é um objeto (tipo primitivo), então ele irá gerar um {{jsxref("TypeError")}}. No ES6, um primeiro argumento não-objeto será primeiramente convertido para objeto.

```js
Object.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not an object  // Código ES5

Object.getOwnPropertyDescriptor("foo", 0);
// {configurable:false, enumerable:true, value:"f", writable:false}  // Código ES6
```

## Especificações

| Especificação                                                                                      | Status               | Comentário                                           |
| -------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.3', 'Object.getOwnPropertyDescriptor')}}                          | {{Spec2('ES5.1')}}   | Definição inicial. Implementado no JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.getownpropertydescriptor', 'Object.getOwnPropertyDescriptor')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.getownpropertydescriptor', 'Object.getOwnPropertyDescriptor')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.getOwnPropertyDescriptor")}}

## Veja Também

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
