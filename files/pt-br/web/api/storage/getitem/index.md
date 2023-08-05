---
title: localStorage.getItem()
slug: Web/API/Storage/getItem
---

{{APIRef("Web Storage API")}}

Passar o nome da chave para o método `getItem()` da interface {{domxref("Storage")}} retornará o seu valor.

## Sintaxe

```
var aValue = localStorage.getItem(keyName);
```

### Parâmetros

- _`keyName`_
  - : Um {{domxref("DOMString")}} contendo o nome da chave cujo valor você quer obter.

### Retorno

Um {{domxref("DOMString")}} contendo o valor da chave. Se a chave não existe, é retornado null.

## Exemplo

A função seguinte recupera três itens armazenados no local storage e usa-os para definir estilos customizados em uma página.

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> **Nota:** Para ver essa funcionalidade aplicada a um exemplo real, veja nossa [Web Storage Demo](https://github.com/mdn/web-storage-demo).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

[Usando a API Web Storage](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
