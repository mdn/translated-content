---
title: header (cabeçalho)
slug: Web/HTML/Reference/Elements/header
original_slug: Web/HTML/Element/header
---

## Sumário

O **elemento HTML** **`<header>`** representa um grupo de suporte introdutório ou navegacional. Pode conter alguns elementos de cabeçalho mas também outros elementos como um logo, seções de cabeçalho, formulário de pesquisa, e outros.

{{InteractiveExample("HTML Demo: &lt;header&gt;", "tabbed-standard")}}

```html interactive-example
<header>
  <a class="logo" href="#">Cute Puppies Express!</a>
</header>

<article>
  <header>
    <h1>Beagles</h1>
    <time>08.12.2014</time>
  </header>
  <p>
    I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and
    their ears are so, so snugly soft!
  </p>
</article>
```

```css interactive-example
.logo {
  background: left / cover
    url("/shared-assets/images/examples/puppy-header.jpg");
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  font:
    bold calc(1em + 2 * (100vw - 120px) / 100) "Dancing Script",
    fantasy;
  color: #ff0083;
  text-shadow: #000 2px 2px 0.2rem;
}

header > h1 {
  margin-bottom: 0;
}

header > time {
  font: italic 0.7rem sans-serif;
}
```

> **Note:** **Notas de utilização:**
>
> - O elemento `<header>` não é separador de conteúdo (sectioning content), portanto, não introduz uma nova seção no [outline](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document).

- _[Categoria de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Flow content](/pt-BR/docs/Web/HTML/Content_categories#flow_content), conteúdo palpável.
- _Conteúdo permitido_[Flow content](/pt-BR/docs/Web/HTML/Content_categories#flow_content), mas não com descendentes de {{HTMLElement("header")}} ou {{HTMLElement("footer")}}
- _Omissão da tag_ Nenhuma, as tags de abertura e fechamento são obrigatórias.
- _Elementos-pai permitidos_ Qualquer elemento que aceite [flow content](/pt-BR/docs/Web/HTML/Content_categories#flow_content). Note que o elemento {{HTMLElement("header")}} não deve ser descendente de {{HTMLElement("address")}}, {{HTMLElement("footer")}} ou outro elemento {{HTMLElement("header")}} .
- _Interface DOM_ {{domxref("HTMLElement")}}

## Atributos

Este elemento não possui outros atributos além dos [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes), comuns a todos os elementos.

## Exemplos

```
<header>
  <h1>Título da Página Principal</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Uma descrição mais detalhada: [O elemento header | HTML5 Doctor](https://html5doctor.com/the-header-element/)
- Outros elementos relacionados a seção: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Seções e outlines de um documento HTML5](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document).

{{HTMLSidebar}}
