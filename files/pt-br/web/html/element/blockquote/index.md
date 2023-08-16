---
title: <blockquote>
slug: Web/HTML/Element/blockquote
---

## Sumário

O Elemento HTML \<blockquote> (ou Elemento HTML de citação de bloco) indica que o texto incluído é uma longa citação. Normalmente, este é processado visualmente pelo recuo (ver [Notas](/pt-BR/docs/HTML/Element/blockquote#Notes) sobre como mudá-lo). A URL para a fonte da citação pode ser dada usando o atributo **cite**, enquanto uma representação de texto da fonte pode ser dada usando o {{HTMLElement("cite")}} elemento.

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Fluxo de conteúdo](/pt-BR/docs/HTML/Content_categories#Flow_content), raiz selecionamento, conteúdo palpável.
- _Conteúdo permitido_ [Fluxo de conteúdo](/pt-BR/docs/HTML/Content_categories#Flow_content).
- _Tag Omissão_ {{no_tag_omission}}
- _Elementos permitidos_ Qualquer elemento que aceita o [fluxo de conteúdo.](/pt-BR/docs/HTML/Content_categories#Flow_content)
- _Papéis ARIA permitidos_ Qualquer
- _Interface DOM_ {{domxref("HTMLQuoteElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("cite")}}
  - : Uma URL que designa um documento de origem ou mensagem para a informação citada. Este atributo destina-se a apontar para informações explicando o contexto ou a referência para a cotação.

## Notas

Para alterar o recuo de `<blockquote>`, use a propriedade [CSS](/pt-BR/docs/CSS) {{cssxref("margin")}}.

Para citações curtas, use o elemento {{HTMLElement("q")}}.

## Exemplo

```html
<blockquote cite="http://developer.mozilla.org">
  <p>Esta é uma citação tirada da Mozilla Developer Center.</p>
</blockquote>
```

O código HTML acima vai resultar em:

> Esta é uma citação tirada da Mozilla Developer Center.

## Especificação

| Especificação                                                                                   | Status                   | Comentário |
| ----------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-blockquote-element', '&lt;blockquote&gt;')}}      | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-blockquote-element', '&lt;blockquote&gt;')}} | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.2', '&lt;blockquote&gt;')}}                      | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.blockquote")}}

## Veja também

- O elemento {{HTMLElement("q")}} para citações em linha.
- O elemento {{HTMLElement("q")}} para citações de origem.

{{HTMLSidebar}}
