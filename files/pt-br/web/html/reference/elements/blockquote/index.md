---
title: <blockquote>
slug: Web/HTML/Reference/Elements/blockquote
original_slug: Web/HTML/Element/blockquote
---

## Sumário

O Elemento HTML \<blockquote> (ou Elemento HTML de citação de bloco) indica que o texto incluído é uma longa citação. Normalmente, este é processado visualmente pelo recuo (ver [Notas](/pt-BR/docs/Web/HTML/Element/blockquote#notes) sobre como mudá-lo). A URL para a fonte da citação pode ser dada usando o atributo **cite**, enquanto uma representação de texto da fonte pode ser dada usando o {{HTMLElement("cite")}} elemento.

- _[Categorias de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Fluxo de conteúdo](/pt-BR/docs/Web/HTML/Content_categories#flow_content), raiz selecionamento, conteúdo palpável.
- _Conteúdo permitido_ [Fluxo de conteúdo](/pt-BR/docs/Web/HTML/Content_categories#flow_content).
- _Tag Omissão_ Nenhuma, tanto a tag inicial quanto a final são obrigatórias.
- _Elementos permitidos_ Qualquer elemento que aceita o [fluxo de conteúdo.](/pt-BR/docs/Web/HTML/Content_categories#flow_content)
- _Papéis ARIA permitidos_ Qualquer
- _Interface DOM_ {{domxref("HTMLQuoteElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- `cite`
  - : Uma URL que designa um documento de origem ou mensagem para a informação citada. Este atributo destina-se a apontar para informações explicando o contexto ou a referência para a cotação.

## Notas

Para alterar o recuo de `<blockquote>`, use a propriedade [CSS](/pt-BR/docs/Web/CSS) {{cssxref("margin")}}.

Para citações curtas, use o elemento {{HTMLElement("q")}}.

## Exemplo

```html
<blockquote cite="http://developer.mozilla.org">
  <p>Esta é uma citação tirada da Mozilla Developer Center.</p>
</blockquote>
```

O código HTML acima vai resultar em:

> Esta é uma citação tirada da Mozilla Developer Center.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- O elemento {{HTMLElement("q")}} para citações em linha.
- O elemento {{HTMLElement("q")}} para citações de origem.

{{HTMLSidebar}}
