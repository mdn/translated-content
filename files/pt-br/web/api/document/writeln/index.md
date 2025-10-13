---
title: Document.writeln()
slug: Web/API/Document/writeln
---

{{ ApiRef("DOM") }}

Grava uma seqüência de texto, seguido por um caractere de nova linha a um documento.

## Sintaxes

```
document.writeln(line);
```

### Parâmetros

- `line`é uma string contendo uma linha de texto.

## Exemplo

```
document.writeln("<p>enter password:</p>");
```

## Notas

**document.writeln** é o mesmo que [document.write](/pt-BR/docs/DOM/document.write) mas acrescenta uma nova linha.

> [!NOTE]
> **document.writeln** (like **document.write**) does not work in XHTML documents (you'll get a "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) error on the error console). This is the case if opening a local file with a .xhtml file extension or for any document served with an application/xhtml+xml MIME type. More information is available in the [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

## Especificação

[writeln](https://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-35318390)
