---
title: footer (rodapé)
slug: Web/HTML/Element/footer
---

### Resumo

O elemento HTML de Rodapé (\<footer>) representa um rodapé para o seu sectioning content (conteúdo de seção) mais próximo ou [sectioning root](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document#sectioning_root) elemento (ou seja, seu parente mais próximo {{HTMLElement ("article")}}, {{HTMLElement ("aside")}}, {{HTMLElement ("nav")}}, {{HTMLElement ("section")}}, {{HTMLElement ("blockquote")}}, {{HTMLElement ("body")}}, {{HTMLElement ("details" )}}, {{HTMLElement ("fieldset")}}, {{HTMLElement ("figure")}}, {{HTMLElement ("td")}}). Normalmente um rodapé contém informações sobre o autor da seção de dados, direitos autorais ou links para documentos relacionados.

> **Note:** **Notas de Uso:**
>
> - Coloque informações sobre o autor em um elemento {{HTMLElement("address")}} que pode ser incluído no elemento `<footer>`.
> - O elemento `<footer>` não é sectioning content portanto, não introduz uma nova seção no [outline](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document).

## Contexto de uso

| Conteúdo permitido         | [Flow content](/pt-BR/docs/HTML/Content_categories#flow_content), mas não o `<footer>` ou {{HTMLElement("header")}} descendentes.                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omissão de tag             | Nenhuma, ambas as tags de início e fim são obrigatórias.                                                                                                                                                                                               |
| Parent Elements permitidos | Qualquer elemento que aceite [flow content](/pt-BR/docs/HTML/Content_categories#flow_content). Note-se que um elemento \<footer> não deve ser um descendente de um {{HTMLElement("address")}}, {{HTMLElement("header")}} ou outro elemento `<footer>`. |
| Documento normativo        | [HTML5, section 4.4.9](http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-footer-element)                                                                                                                                   |

## Atributos

Este elemento não tem outros atributos que os [global attributes](/pt-BR/docs/HTML/Global_attributes), comuns a todos os elementos.

## DOM Interface

Este elemento implementa a interface [`HTMLElement`](/pt-BR/docs/DOM/element).

## Exemplos

```html
<footer>
  Algumas informações de copyright ou talvez alguma informação do autor de um <article>?
</footer>
```

## Compatibilidade com navegadores

{{Compat("html.elements.footer")}}

## Veja também

- Outros elementos de seção relacionados {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document).
