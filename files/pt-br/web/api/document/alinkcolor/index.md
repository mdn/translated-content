---
title: Document.alinkColor
slug: Web/API/Document/alinkColor
---

{{APIRef("DOM")}}{{Deprecated_header}}

Retorna ou define a cor de um link ativo no corpo do documento. Um link está ativo durante o tempo entre os eventos `mousedown` e `mouseup`.

## Sintaxe

```
var color = document.alinkColor;
document.alinkColor = color;
```

color é uma string que contém o nome da cor (e.g., `blue`, `darkblue`, etc.) ou o valor hexadecimal da cor (e.g., `#0000FF`)

## Notas

O valor padrão para esta propriedade no Mozilla Firefox é vermelho (`#ee0000` em hexadecimal).

`document.alinkColor` está obsoleto em [DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). Uma alternativa é o seletor de CSS {{Cssxref(":active")}}.

Outra alternativa é `document.body.aLink`, embora tenha sido [depreciado no HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-alink) a favor da alternativa CSS.

[Gecko](/pt-BR/docs/Mozilla/Gecko) suporta ambos `alinkColor`/`:active` e {{Cssxref(":focus")}}. Suporte para Internet Explorer 6 e 7 `alinkColor`/`:active` apenas para [HTML anchor (\<a>) links](/pt-BR/docs/Web/HTML/Element/a) e o comportamento é o mesmo que `:focus` sob Gecko. Não há suporte para `:focus` no IE.

## Compatibilidade com navegadores

{{Compat}}
