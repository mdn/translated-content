---
title: Storage.clear()
slug: Web/API/Storage/clear
---

{{APIRef("Web Storage API")}}

O método `clear()` da interface {{domxref("Storage")}}, quando realizado uma chamada, todas as chaves do armazenamento são esvaziadas.

## Syntaxe

```js
storage.clear();
```

### Parametros

_Nenhum parametro.._

### Retorno

_Nenhum retorno._

## Exemplo

A função abaixo cria três itens e armazenam localmente, depois remove todos utilizando a função clear().

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.clear();
}
```

> **Nota:** Para visualizar um exemplo real, veja nossa seção [Demonstração de Web Storage](https://github.com/mdn/web-storage-demo).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

[Utilizando a API Web Storage](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
