---
title: <div>
slug: Web/HTML/Element/div
---

## Resumo

O **elemento de divisão** **[HTML](/pt-BR/docs/Web/HTML) `<div>` **é um container genérico para conteúdo de fluxo, que de certa forma não representa nada. Ele pode ser utilizado para agrupar elementos para fins de estilos (usando **class** ou **id**), ou porque eles compartilham valores de atributos, como **lang**. Ele deve ser utilizado somente quando não tiver outro elemento de semântica (tal como {{HTMLElement("article")}} ou {{HTMLElement("nav")}}).

- _[Categoria de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Flow content](/pt-BR/docs/Web/HTML/Content_categories#Flow_content), palpable content.
- _Conteúdo permitido_ [Flow content](/pt-BR/docs/Web/HTML/Content_categories#Flow_content).
- _Omissão de tag_ Nenhuma, as tags de abertura e fechamento são obrigatórias. {{no_tag_omission}}
- _Elementos pais permitidos_ Qualquer elemento que aceite conteúdo de fluxo.
- _Interface DOM_ {{domxref("HTMLDivElement")}}

## Atributos

Esse elemento inclui [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

No HTML 5, o atributo **align** no **\<div>** é obsoleto.

## Exemplos

```html
<div>
  <p>
    Qualquer tipo de conteúdo aqui. Como &lt;p&gt;, &lt;table&gt;. Você dá o
    nome!
  </p>
</div>
```

### Resultado

Qualquer tipo de conteúdo aqui. Como \<p>, \<table>. Você dá o nome!

## Especificações

| Especificação                                                                       | Status                   | Comentário |
| ----------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-div-element', '&lt;div&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-div-element', '&lt;div&gt;')}}   | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.4', '&lt;div&gt;')}}               | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade dos navegadores

{{Compat("html.elements.div")}}

## Veja também

- Semantic sectioning elements: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- {{HTMLElement("span")}} element for styling of phrasing content

{{HTMLSidebar}}
