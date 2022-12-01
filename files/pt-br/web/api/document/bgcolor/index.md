---
title: Document.bgColor
slug: Web/API/Document/bgColor
---

{{APIRef("DOM")}} {{ Deprecated_header() }}

A propriedade obsoleta `bgColor` obtém ou atribue a cor de fundo do documento atual.

## Sintaxe

```
color = document.bgColor
document.bgColor = color
```

### Parâmetros

- `color` é uma sequência de caracteres representando a cor como uma palavra (p. ex. "red") ou um valor hexadecimal (p. ex. "`#ff0000`").

## Exemplo

```
document.bgColor = "darkblue";
```

## Notas

O valor padrão para esta propriedade no Firefox é branco (`#ffffff` em hexadecimal).

`document.bgColor` está obsoleto no [DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). A alternativa recomendada é fazer uso do atributo CSS {{Cssxref("background-color")}} que pode ser acessado através do DOM com `document.body.style.backgroundColor`. Uma outra alternativa é o `document.body.bgColor`, apesar dessa também estar obsoleta no HTML 4.01 em funcão da alternativa do CSS.
