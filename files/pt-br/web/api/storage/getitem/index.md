---
title: localStorage.getItem()
slug: Web/API/Storage/getItem
translation_of: Web/API/Storage/getItem
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
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}
```

> **Nota:** Para ver essa funcionalidade aplicada a um exemplo real, veja nossa [Web Storage Demo](https://github.com/mdn/web-storage-demo).

## Especificações

| Especificação                                                                        | Status                           | Comment |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('Web Storage', '#dom-storage-getitem', 'getItem()')}} | {{Spec2('Web Storage')}} |         |

## Compatibilidade

{{Compat("api.Storage.getItem")}}

Os níveis de compatibilidade podem variar em todos os navegadores, tanto para o localStorage quanto para o sessionStorage. Aqui temos [estatísticas detalhadas dos níveis de compatibilidade para vários navegadores](http://dev-test.nemikor.com/web-storage/support-test/).

> **Nota:**A partir da versão 5.1 do iOS, o Safari Mobile armazena os dados do localStorage na pasta do cache, sujeito a ser apagado em caso de espaço insificiente.

## Veja também

[Usando a API Web Storage](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
