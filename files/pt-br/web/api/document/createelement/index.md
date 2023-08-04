---
title: Document.createElement()
slug: Web/API/Document/createElement
---

{{APIRef("DOM")}}

Em um documento [HTML](/pt-BR/docs/Web/HTML), o método **`Document.createElement()`** cria o elemento HTML especificado ou um {{domxref("HTMLUnknownElement")}} se o nome do elemento dado não for conhecido.

Em um documento [XUL](/pt-BR/docs/Mozilla/Tech/XUL), o elemento XUL especificado é criado.

Em outros documentos, ele cria um elemento com um _namespace_ URI `null`.

## Sintaxe

```
var elemento = document.createElement(nomeDaTag);
```

- `elemento` é o objeto {{domxref("Element")}} criado.
- `nomeDaTag` é uma _string_ que especifica o tipo do elemento a ser criado. O {{domxref("Node.nodeName", "nodeName")}} do elemento criado é inicializado com o valor da `nomeDaTag`. Não use nomes qualificados (como "html:a") com este método.

## Exemplo

Este código cria uma nova `<div>` e a insere antes do elemento com ID "`div1`".

### HTML

```html
<!doctype html>
<html>
  <head>
    <title>||Trabalhando com elementos||</title>
  </head>
  <body>
    <div id="div1">O texto acima foi criado dinamicamente.</div>
  </body>
</html>
```

### JavaScript

```js
document.body.onload = adcElemento;

function adcElemento() {
  // cria um novo elemento div
  // e dá à ele conteúdo
  var divNova = document.createElement("div");
  var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("div1");
  document.body.insertBefore(divNova, divAtual);
}
```

{{EmbedLiveSample("Exemplo", 500, 50)}}

## Notas

- Quando chamada em um objeto de documento marcado como um documento HTML, `createElement()` torna seu argumento caixa-baixa antes de criá-lo.
- Para criar um elemento com um nome qualificado e _namespace URI_, use {{ domxref("document.createElementNS()") }}.
- Antes do Gecko 2.0 você podia incluir os símbolos de menor que e maior que em volta da `tagName` no modo _quirks_; a partir do Gecko 2.0, a função comporta-se da mesma forma em ambos os modos _quirks_ e estrito.
- A partir do Gecko 19.0, `createElement(null)` funciona como `createElement("null")`. Note que o Opera torna `null` uma _string_, mas ambos Chrome e Internet Explorer lançarão erros.
- A partir do Gecko 22.0 `createElement()` não mais usa a interface {{domxref("HTMLSpanElement")}} quando o argumento é "bgsounds", "multicol", or "image". Ao invés disso, `HTMLUnknownElement` é usado para "bgsound", "multicol" e {{domxref("HTMLElement")}} `HTMLElement` é usado para "image".
- A implementação Gecko de `createElement` não se conforma à especificação DOM para documentos XUL e XHTML: `localName` e `namespaceURI` não estão definidos para `null` no elemento criado. Veja {{ Bug(280692) }} para detalhes.

## Especificações

- [DOM 2 Core: createElement](https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-2141741547)
- [HTML5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
