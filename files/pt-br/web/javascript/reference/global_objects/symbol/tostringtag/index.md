---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
---

{{JSRef}}

O símbolo **`Symbol.toStringTag`** é uma propriedade com valor string que é usada para a criação de uma descrição de string de um objeto padrão. É acessado internalmente pelo método {{jsxref("Object.prototype.toString()")}}.

{{EmbedInteractiveExample("pages/js/symbol-tostringtag.html")}}{{js_property_attributes(0,0,0)}}

## Exemplos

### Tags padrões

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// ... e mais
```

### Símbolos built-in toStringTag

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... e mais
```

### Classes personalizadas para objeto tag

Quando cria sua própria classe, o JavaScript padroniza para "Object" tag:

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

### Tag costumizada com toStringTag

Agora, com a ajuda do `toStringTag`, você é capaz de costumizar sua própria tag:

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### toStringTag disponível em todos os objetos protótipos da DOM

Devido a uma mudança nas especificações [WebIDL spec change](https://github.com/heycam/webidl/pull/357) em meados de 2020, navegadores estão adicionando uma propriedade `Symbol.toStringTag` para todos os objetos protótipos da DOM . Por exemplo, para acessar a propriedade `Symbol.toStringTag` no {{domxref("HTMLButtonElement")}}:

```js
let test = document.createElement("button");
test.toString(); // Retorna [object HTMLButtonElement]
test[Symbol.toStringTag]; // Retona HTMLButtonElement
```

## Especificações

| Especificação                                                            |
| ------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-symbol.tostringtag', 'Symbol.toStringTag')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Symbol.toStringTag")}}

## Veja também

- {{jsxref("Object.prototype.toString()")}}
