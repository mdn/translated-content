---
title: <aside>
slug: Web/HTML/Element/aside
---

## Sumario

O elemento HTML **`<aside>`** representa uma seção de uma página que consiste de conteúdo que é tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo. Essas seções são, muitas vezes, representadas como barras laterais. Elas muitas vezes contem explicações laterais, como a definição de um glossário; conteúdo vagamente relacionado, como avisos; a biografia do autor; ou, em aplicações web, informações de perfil ou links de blogs relacionados.

> **Note:** _Notas de uso:_
>
> - **Não use** o elemento `<aside>` para texto entre parenteses, pois este tipo de texto é considerado parte do fluxo principal.

- _[Categoria de conteudo](/pt-BR/docs/HTML/Content_categories)_ [Conteudo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content), conteudo de secionamento, conteudo palpavel.
- _Conteudo permitido_ [Conteudo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content).
- _Omissao de tag_ Nenhuma, ambas as tags de início e fim são obrigatórias.
- _Elementos pai permitidos_ Qualquer elemento que aceita [conteudo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content). Note que um elemento `<aside>` nao deve ser descendente de um elemento {{HTMLElement("address")}}.
- _Interface DOM_ {{domxref("HTMLElement")}}

## Atributos

Este elemento inclui apenas os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

## Exemplos

```html
<aside>
  <p>Algum conteudo relacionado a um &lt;article&gt;</p>
</aside>
```

## Especificações

| Especificaçao                                                                                                 | Status                   | Comentario |
| ------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-aside-element', '&lt;aside&gt;')}}                               | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'the-aside-element.html#the-aside-element', '&lt;aside&gt;')}} {{todo("brokenLink")}} | {{Spec2('HTML5 W3C')}}   |            |

## Compatibilidade com navegadores

{{Compat("html.elements.aside")}}

## Veja também

- Outros elementos de seçao relacionados: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Seçoes e outlines de um documento HTML5](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document).

{{HTMLSidebar}}
