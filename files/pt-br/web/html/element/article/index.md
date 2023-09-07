---
title: article (artigo)
slug: Web/HTML/Element/article
---

## Resumo

O _Elemento HTML Article_ (\<article>) representa uma composição independente em um documento, página, aplicação, ou site, ou que é destinado a ser distribuido de forma independente ou reutilizável, por exemplo, em sindicação. Este poderia ser o post de um fórum, um artigo de revista ou jornal, um post de um blog, um comentário enviado por um usuário, um gadget ou widget interativos, ou qualquer outra forma de conteúdo independente.

> **Note:** _Notas de uso:_
>
> - Quando um elemento `<article>` está aninhado, o elemento interior representa um artigo relacionado com o elemento exterior. Por exemplo, os comentários do post de um blog podem ser elementos `<article>` aninhados em `<article>` representando o post do blog.
> - Informações sobre o autor de um elemento `<article>` podem ser fornecidas através do elemento {{ HTMLElement("address") }} ,mas ele não se aplica aos elementos `<article>` aninhados.
> - A data e hora de publicação de um elemento `<article>` pode ser descrita usando o atributo [`pubdate`](/pt-BR/docs/Web/HTML/Element/time#pubdate) de um elemento {{ HTMLElement("time") }}.

## Contexto de uso

| Conteúdo permitido       | [Flow content](</en/HTML/Content_categories#Flow content>)                                                                                                                                          |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omissão de tag           | Nenhuma, tanto tag de início quanto de fim são obrigatórias                                                                                                                                         |
| Elementos pai permitidos | Qualquer elemento que aceita [flow content](/pt-BR/HTML/Content_categories#flow_content). Note-se que um elemento `<article>` não pode ser descendente de um elemento {{ HTMLElement("address") }}. |
| Documento normativo      | [HTML5, section 4.4.4](http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-article-element)                                                                               |

## Atributos

Este elemento não possui outros elementos se não os [global attributes](/pt-BR/HTML/Global_attributes), comuns a todos os elementos.

## Interface DOM

Este elemento implementa a interface [`HTMLElement`](/pt-BR/DOM/element) .

## Exemplos

```html
<article>
  <h4>Um artigo realmente impressionante</h4>
  <p>Lotes de texto incrível.</p>
</article>
```

### Resultado

\<article>

#### Um artigo realmente impressionante

Lotes de texto incrível.

\</article>

### Compatibilidade

{{Compat("html.elements.article")}}

## Veja também

- Outros elementos de seção relacionados: {{ HTMLElement("body") }}, {{ HTMLElement("nav") }}, {{ HTMLElement("section") }}, {{ HTMLElement("aside") }}, {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}, {{ HTMLElement("hgroup") }}, {{ HTMLElement("header") }}, {{ HTMLElement("footer") }}, {{ HTMLElement("address") }}
- [Sections and outlines of an HTML5 document](/pt-BR/Sections_and_Outlines_of_an_HTML5_document).
