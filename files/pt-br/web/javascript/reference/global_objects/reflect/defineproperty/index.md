---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
---

{{JSRef}}

O método estático **`Reflect.defineProperty()`** é como o {{jsxref("Object.defineProperty()")}}, mas retorna um {{jsxref("Boolean")}}.

{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}

## Sintaxe

```
Reflect.defineProperty(target, propertyKey, attributes)
```

### Parâmetros

- `target`
  - : O objeto de destino onde será definida a propriedade.
- `propertyKey`
  - : O nome da propriedade a ser definida ou modificada.
- `attributes`
  - : Os atributos para a propriedade que está sendo definida ou modificada.

### Valor de retorno

Um {{jsxref("Boolean")}} indicando se a propriedade foi ou não definida com êxito.

### Erros

Um {{jsxref("TypeError")}}, se `target` não for um {{jsxref("Object")}}.

## Descrição

O método `Reflect.defineProperty` permite a adição precisa ou a modificação de uma propriedade em um objeto. Para mais detalhes veja o {{jsxref("Object.defineProperty")}}, que é semelhante.

> **Nota:** **Uma diferença fundamental:** `Object.defineProperty` retorna o objeto ou lança um {{jsxref ("TypeError")}} se a propriedade não tiver sido definida com êxito. `Reflect.defineProperty`, no entanto, simplesmente retorna um {{jsxref ("Boolean")}} indicando se a propriedade foi ou não definida com êxito.

## Exemplos

### Usando `Reflect.defineProperty()`

```js
let obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
obj.x; // 7
```

### Verificando se a definição da propriedade foi bem-sucedida

Com o {{jsxref ("Object.defineProperty")}}, que retorna um objeto se for bem-sucedido ou lança um {{jsxref ("TypeError")}}, você usaria um bloco [try...catch](/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch) para detectar qualquer erro que ocorreu ao definir uma propriedade.

Como `Reflect.defineProperty` retorna um status de sucesso booleano, você pode usar apenas um bloco [`if...else`](/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else) aqui:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

## Especificações

| Especificação                                                                    |
| -------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-reflect.defineproperty', 'Reflect.defineProperty')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Reflect.defineProperty")}}

## Veja também

- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
