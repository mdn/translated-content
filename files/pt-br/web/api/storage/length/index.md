---
title: Storage.length
slug: Web/API/Storage/length
---

{{APIRef("Web Storage API")}}

A propriedade length, que é somente leitura, da interface {{domxref("Storage")}} retorna um inteiro que representa o número de itens armazenados no objeto `Storage`.

## Sintaxe

```
var aLength = storage.length;
```

### Retorno

Um inteiro

## Exemplo

A função a seguir adiciona três itens ('bgcolor', 'font' e 'image') ao local storage do domínio atual, em seguida retorna o número de itens no storage:

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  localStorage.length; // should return 3
}
```

> **Nota:** Para um exemplo do mundo real, veja nosso [Web Storage Demo](https://github.com/mdn/web-storage-demo).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

[Usando a API Web Storage](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
