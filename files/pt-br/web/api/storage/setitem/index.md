---
title: Storage.setItem()
slug: Web/API/Storage/setItem
---

{{APIRef("Web Storage API")}}

O método `setItem()` da interface {{domxref("Storage")}}, quando passado 'chave' e 'valor', irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já exista.

## Syntax

```
storage.setItem(keyName, keyValue);
```

### Parâmetros

- _keyName_
  - : Um {{domxref("DOMString")}} contendo o nome da chave que você deseja criar ou alterar.
- _keyValue_
  - : Um {{domxref("DOMString")}} contendo o valor da chave que você está criando ou atualizando.

### Retornos

_Sem retorno._

### Exceções

`setItem()` poderá lançar uma exceção caso o storage esteja cheio. Particularmente, no Safari Mobile (desde o iOS 5) sempre irá lançar quando o usuário entrar em modo privado (Safari define a quota para 0 bytes no modo privado ao contrário de outros navegadores que permitem o armazenamento em modo privado, usando recipientes de dados separados).
Assim os desenvolvedores devem certificar-se de **sempre tratar as possíveis exceções do `setItem()`**.

## Exemplo

A função abaixo irá criar três dados dentro do local storage.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
```

> **Nota:** Para ver ele sendo usado em um exemplo real, consulte nosso [Web Storage Demo](https://github.com/mdn/web-storage-demo).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

[Usando a Web Storage API](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
