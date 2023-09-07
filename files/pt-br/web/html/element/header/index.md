---
title: header (cabeçalho)
slug: Web/HTML/Element/header
---

## Sumário

O **elemento HTML** **`<header>`** representa um grupo de suporte introdutório ou navegacional. Pode conter alguns elementos de cabeçalho mas também outros elementos como um logo, seções de cabeçalho, formulário de pesquisa, e outros.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

> **Note:** **Notas de utilização:**
>
> - O elemento `<header>` não é separador de conteúdo (sectioning content), portanto, não introduz uma nova seção no [outline](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document).

- _[Categoria de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), conteúdo palpável.
- _Conteúdo permitido_[Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), mas não com descendentes de {{HTMLElement("header")}} ou {{HTMLElement("footer")}}
- _Omissão da tag_ Nenhuma, as tags de abertura e fechamento são obrigatórias.
- _Elementos-pai permitidos_ Qualquer elemento que aceite [flow content](/pt-BR/docs/HTML/Content_categories#Flow_content). Note que o elemento {{HTMLElement("header")}} não deve ser descendente de {{HTMLElement("address")}}, {{HTMLElement("footer")}} ou outro elemento {{HTMLElement("header")}} .
- _Interface DOM_ {{domxref("HTMLElement")}}

## Atributos

Este elemento não possui outros atributos além dos [atributos globais](/pt-BR/docs/HTML/Global_attributes), comuns a todos os elementos.

## Exemplos

```
<header>
  <h1>Título da Página Principal</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header>
```

## Especificações

| Especificação                                                                     | Status                   | Comentário |
| --------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-header-element', '&lt;header&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'sections.html#the-header-element', '&lt;header&gt;')}}   | {{Spec2('HTML5 W3C')}}   |            |

## Compatibilidade com navegadores

{{Compat("html.elements.header")}}

## Veja também

- Uma descrição mais detalhada: [O elemento header | HTML5 Doctor](http://html5doctor.com/the-header-element/)
- Outros elementos relacionados a seção: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Seções e outlines de um documento HTML5](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document).

{{HTMLSidebar}}
