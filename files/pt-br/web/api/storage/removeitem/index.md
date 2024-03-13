---
title: Storage.removeItem()
slug: Web/API/Storage/removeItem
---

{{APIRef("Web Storage API")}}

O método `removeItem()` da interface {{domxref("Storage")}}, quando passado um nome de chave, irá remover essa chave do armazenamento.

## Syntax

```
storage.removeItem(keyName);
```

### Parâmetros

- _**keyName**_
  - : A {{domxref("DOMString")}} contendo o nome da chave que você deseja remover.

### Retorno

_Nenhum valor de retorno._

## Exemplo

A função a seguir cria três itens de dados no armazenamento local, em seguida, remove o item "image".

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.removeItem("image");
}
```

> **Nota:** Para ver o uso em um exemplo prático veja nosso [Web Storage Demo](https://github.com/mdn/web-storage-demo).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

[Usando a API Web Storage](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
