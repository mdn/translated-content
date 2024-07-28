---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
---

{{JSRef}} {{deprecated_header}}O método **`anchor()`** cria uma string começando com uma tag inicial `<a name="...">`, um texto e uma tag final `</a>`.

> [!WARNING]
> Não use este método. Ao invés, use [DOM APIs](/pt-BR/docs/Web/API/Document_Object_Model). Além disso, a especificação HTML não permite mais que o elemento \<a> tenha um atributo **"name"**, portanto, esse método nem mesmo cria uma tag válida.

## Sintaxe

```
str.anchor(name)
```

### Parâmetros

- `name`
  - : Uma string que deve representar o valor do atributo _`name`._

### Valor retornado

Uma string começando com uma tag de início _`<a name="name">`_, depois o valor da string e, em seguida, uma tag de fim _`</a>`_.

## Descrição

Não use este método. Ao invés, use [DOM APIs](/pt-BR/docs/Web/API/Document_Object_Model). Além disso, a especificação HTML não permite mais que o elemento _`<a>`_ tenha um atributo **"name"**, portanto, esse método nem mesmo cria uma tag válida.

## Exemplos

### Usando `anchor()`

```js
const nome = 'Ricardo';
console.log(nome.anchor('https://developer.mozilla.org/pt-BR/)');
```

irá retornar o seguinte código HTML:

```html
'<a name="https://developer.mozilla.org/pt-BR/">Ricardo</a>'
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("String.prototype.link()")}}
