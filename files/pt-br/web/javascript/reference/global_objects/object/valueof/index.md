---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---

{{JSRef}}

O método **`valueOf()`** retorna o valor primitivo do objeto especificado.

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## Sintaxe

```
object.valueOf()
```

### Valor retornado

O valor primitivo do objeto especificado.

## Descrição

JavaScript chama o método `valueOf` para converter um objeto em um valor primitivo. Você raramente precisará chamar o método `valueOf` por ele mesmo; O JavaScript chamará ele automaticamente quando encontrar um objeto onde um valor primitivo for esperado.

Por padrão, o método `valueOf` é herdado por cada objeto descendente de {{jsxref("Object")}}. Todo núcleo embutido do objeto sobrescreve esse método para retornar um valor apropriado. Se um objeto não tem um valor primitivo, `valueOf` retorna o próprio objeto.

Você pode usar `valueOf` dentro do seu próprio código para converter um objeto embutido, em um valor primitivo. Quando você criar um objeto customizado, você pode sobrescrever `Object.prototype.valueOf()` para chamar um método customizado ao invés do método padrão {{jsxref("Object")}}.

### Sobrescrevendo `valueOf` para objetos customizados

Você pode criar uma função para ser chamada no lougar do método padrão `valueOf`. Sua função não pode ter nenhum argumento.

Suponha que você tem um tipo de objeto `MyNumberType` e você quer criar um método `valueOf` para ele. O código a seguir atribui uma função definida por usuário para o método `valueOf` desse objeto:

```js
MyNumberType.prototype.valueOf = function () {
  return customPrimitiveValue;
};
```

Com o código anterior no lugar, a qualquer hora um objeto do tipo `MyNumberType` é usado em um contexto onde deve ser representado como um valor primitivo, o JavaScript chama automaticamente a função definida no código anterior.

Um método `valueOf` de um objeto é geralmente chamado pelo JavaScript, mas você pode chamá-lo se quiser da seguinte maneira:

```js
myNumberType.valueOf();
```

> **Nota:** Objetos em contexto de string convertidos através do método {{jsxref("Object.toString", "toString()")}}, o que é diferente de objetos {{jsxref("String")}} convertendo para string primiriva utlizando `valueOf`. Todos os objetos têm uma conversão string, somente se "`[object type]`". Mas muitos objetos não convertem para number, boolean, or function.

## Exemplos

### Usando `valueOf`

```js
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

var myObj = new MyNumberType(4);
myObj + 3; // 7
```

## Espeficações

| Especificação                                                                        | Status               | Cometário                                          |
| ------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                  | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.2.4.4', 'Object.prototype.valueOf')}}                   | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-object.prototype.valueof', 'Object.prototype.valueOf')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-object.prototype.valueof', 'Object.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.valueOf")}}

## Veja também

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
