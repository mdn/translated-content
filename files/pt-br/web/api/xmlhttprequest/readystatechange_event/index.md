---
title: XMLHttpRequest.onreadystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
---

{{APIRef}}

Um [`EventHandler`](/pt-BR/docs/Web/API/EventHandler) é chamado sempre que o atributo `readyState` é modificado. O callback é chamado a partir da interface do usuário. A propriedade **`XMLHttpRequest.onreadystatechange`** contém o manipulador de eventos que é chamado quando o evento [readystatechange](/pt-BR/docs/Web/Events/readystatechange) é disparado, ou seja, toda vez que a propriedade {{domxref("XMLHttpRequest.readyState", "readyState")}} do {{domxref("XMLHttpRequest")}} é modificada.

> **Aviso:** **Atenção:** Isso não deve ser usado com solicitações síncronas e não deve ser usado como código nativo.

O evento `readystatechange` não será chamado quando a `XMLHttpRequest` request for cancelada pelo método [abort()](/pt-BR/docs/Web/API/XMLHttpRequest/abort).

> **Nota:** **Atualização**: Está disparando na última versão de navegadores (Firefox 51.0.1, Opera 43.0.2442.991, Safari 10.0.3 (12602.4.8), Chrome 54.0.2840.71, Edge, IE11). Exemplo [aqui](https://jsfiddle.net/merksam/ve5oc0gn/) - _basta recarregar a página algumas vezes_.

## Sitaxe

```
XMLHttpRequest.onreadystatechange = callback;
```

### Valores

- `callback` é a função que será executada quando o readyState mudar.

## Exemplo

```js
var xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
