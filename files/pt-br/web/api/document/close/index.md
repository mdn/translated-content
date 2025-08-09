---
title: Document.close()
slug: Web/API/Document/close
---

{{APIRef("DOM")}}

O metodo `document.close()` termina a gravação em um documento, aberto com [document.open()](/pt-BR/docs/DOM/document.open).

## Sintaxe

```
document.close();
```

## Exemplo

```
// abre um documento e escreve nele.
// escreve o conteúdo no documento.
// fecha o documento.
document.open();
document.write("<p>O primeiro e unico conteúdo.</p>");
document.close();
```

## Especificação

[DOM Level 2 HTML: `close()` Method](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-98948567)
