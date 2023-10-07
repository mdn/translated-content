---
title: datalist
slug: Web/HTML/Element/datalist
---

## Sumário

O elemento HTML _Datalist_ (\<datalist>) contém um conjunto de elementos {{ HTMLElement("option") }} que representam as opções possíveis para o valor de outros controles.

## Contexto de uso

| Conteúdo permitido        | [Phrasing content](/pt-BR/HTML/Content_categories#phrasing_content) ou qualquer quantidade de elementos {{ HTMLElement("option") }} (ou nenhum) |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Omissão de tags           | Nenhuma, ambas as tags inicial e final são obrigatórias                                                                                         |
| Elementos pais permitidos | Qualquer elemento que aceite [phrasing content](/pt-BR/HTML/Content_categories#phrasing_content)                                                |
| Documento normativo       | [HTML5, section 4.10.10](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-datalist-element)              |

## Atributos

Esse elemento não tem nenhum atributo a não ser os [global attributes](/pt-BR/HTML/Global_attributes), comuns para todos os elementos.

## Interface do DOM

Esse elemento implementa a interface [`HTMLDataListElement`](/pt-BR/DOM/HTMLDataListElement).

## Exemplos

```html
<input list="browsers" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

[View Live Examples](/samples/html/datalist.html)

Esse código HTML é renderizado assim no Firefox 4:

![datalist.png](/@api/deki/files/4982/=datalist.png)

## Compatibilidade

{{Compat("html.elements.datalist")}}

## Polyfill

Inclua este polyfill para fornecer suporte para navegadores mais antigos e atualmente incompatíveis:
[datalist-polyfill](https://github.com/mfranzke/datalist-polyfill)

## Veja também

- O elemento {{ HTMLElement("input") }}, especialmente seu atributo [`list`](/pt-BR/docs/Web/HTML/Element/input#list);
- O elemento {{ HTMLElement("option") }}.
