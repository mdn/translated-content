---
title: <mark>
slug: Web/HTML/Element/mark
---

## Sumário

O **Elemento HMTL `<mark>` **representa um trecho de destaque em um texto, por exemplo, uma sequência de texto marcado como referência, devido à sua relevância em um contexto particular. Por Exemplo, pode ser utilizado em uma página que mostra os resultados de uma busca onde todas as instâncias da palavra pesquisadas receberam destaque.

> **Note:** _Notas de Uso:_
>
> - Em uma citação ou outro tipo de bloco, O texto destacado normalmente marca o texto que é referenciado fora da citação, ou marcado para um analise específica, mesmo que o autor original não considerou importante.
> - No texto principal, o trecho destacado normalmente marca um conteúdo que pode ser de especial relevância para usuário corrente, como resultado de pesquisa.
> - Não use o o elemento `<mark>` para destaque de sintaxe; uso o elemento {{HTMLElement("span")}} para essa finalidade.
> - Não confunda o elemento `<mark>` com o elemento {{HTMLElement("strong")}} . O elemento {{HTMLElement("strong")}} é usado para denotar trechos de importância especial, quando o elemento `<mark>` é utilizado para denotar trechos de relevância especial.

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Conteúdo de Fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content), palpable content.
- _Conteúdo Permitido_ [Phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Omissão de Tag_ {{no_tag_omission}}
- _Elementos parent permitidos_ Qualquer elemento que aceite [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLElement")}}

## Atributos

Este elemento inclue apenas [atributos Globais](/pt-BR/docs/HTML/Global_attributes).

## Exemplo

```html
<p>
  O elemento &lt;mark&gt; é usado para <mark>destacar</mark> partes do texto
</p>
```

## Especificações

| Especificações                                                                            | Status                   | Comentários |
| ----------------------------------------------------------------------------------------- | ------------------------ | ----------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-mark-element', '&lt;mark&gt;')}} | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', 'the-mark-element.html#the-mark-element', '&lt;mark&gt;')}}       | {{Spec2('HTML5 W3C')}}   |             |

## Compatibilidade

{{Compat("html.elements.mark")}}

## Veja Também

- Outros [text-level semantics elements](/pt-BR/docs/HTML/Text-level_semantics_elements): {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("b")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.

{{HTMLSidebar}}
