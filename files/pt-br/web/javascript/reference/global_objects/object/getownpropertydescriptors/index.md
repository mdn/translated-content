---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
---

{{JSRef}}

O **`Object.getOwnPropertyDescriptors()`** método retorna todas as descrições próprias da propriedade de um dado objeto.

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptors.html")}}

## Sintaxe

```
Object.getOwnPropertyDescriptors(obj)
```

### Parâmetro

- `obj`
  - : O objeto pelo o qual deseja obter todos os descritores de propriedade próprios.

### Valor retornado

Um objeto contendo todas as propriedades descritivas de um objeto. Pode ser um objeto vazio, se não existir propriedade.

## Descrição

Esse método permite examinar a descrição precisa de todas as propriedades de um objeto. Uma propriedade em JavaScript consiste de um nome com valor string ou um {{jsxref("Symbol")}} e uma propriedade descritora. Outras informações sobre propriedade de tipo descritoras e seus atributos podem ser encontradas em {{jsxref("Object.defineProperty()")}}.

Uma propriedade descritora é um registro com alguns dos seguintes atributos:

- `value`
  - : O valor associdado com à propriedade (somente descritores de dados).
- **`writable`**
  - : `true` se somente o valor associado com a propriedade pode ser alterada (somente descritores de dados).
- `get`
  - : Uma função que serve como um capturador para a propriedade ou {{jsxref("undefined")}} se não existir um capturador (somente descritores de acesso).
- `set`
  - : Uma função que serve como um configurador para a propriedade, ou {{jsxref("undefined")}} se não existir um configurador (somente descritores de acesso).
- `configurable`
  - : `true` se e somente se o tipo da propriedade descritora pode ser alterada e se a propriedade pode ser deletada do objeto correspondente.
- `enumerable`
  - : `true` se e somente se essa propriedade se mostrar durante a enumeração da propriedade no objeto correspondente.

## Exemplos

### Criando um clone superficial

Enquanto o {{jsxref("Object.assign()")}} método vai copiar somente o enumerável e as próprias propriedades da origem de um objeto para o objeto alvo, você é capaz de usar esse método e {{jsxref("Object.create()")}} para uma cópia superficial entre dois objetos desconhecidos:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Criando uma subclasse

Um modo típico de criar uma subclasse é definir a subclasse, configurar um protótipo para uma instância da superclasse e depois difinir as propriedades daquela instância. Isso pode ficar estranho especialmente para os capturadores e configuradores. Ao invés disso, você pode usar esse código para configurar o protótipo :

```js
function superclass() {}
superclass.prototype = {
  // Define seu método e propriedades aqui
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // Define seu método e propriedades aqui
});
```

## Especificações

| Especificações                                                                                       |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-object.getownpropertydescriptors', 'Object.getOwnPropertyDescriptors')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.getOwnPropertyDescriptors")}}

## Veja também

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
- [Polyfill](https://github.com/tc39/proposal-object-getownpropertydescriptors)
