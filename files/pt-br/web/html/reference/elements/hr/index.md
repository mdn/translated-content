---
title: <hr>
slug: Web/HTML/Reference/Elements/hr
original_slug: Web/HTML/Element/hr
---

## Sumário

O **elemento HTML `<hr>`** representa uma quebra temática entre elementos de nível de parágrafo (por exemplo , uma mudança da cena de uma história, ou uma mudança de tema com uma seção). Nas versões anteriores do HTML, representava uma linha horizontal. Pode continuar sendo exibida como uma linha horizontal nos navegadores, mas agora está definida em termos semânticos, em vez de termos de apresentação.

- _[Categorias de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Fluxo de conteúdo](/pt-BR/docs/Web/HTML/Content_categories#flow_content).
- _Conteúdo permitido_ Nenhum, é um {{Glossary("empty element")}}.
- _Omissão de Tag_ Deve conter a tag de início, mas não precisa ter uma tag de encerramento.
- _Elementos pai permitidos_ Qualquer elemento que aceite [fluxo de conteúdo](/pt-BR/docs/Web/HTML/Content_categories#flow_content).
- _Interface DOM_ {{domxref("HTMLHRElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Define a regra de alinhamento na página. Se nenhum valor for especificado, o valor padrão é `left`.
- `color` {{Deprecated_Inline}} {{Non-standard_inline}}
  - : Define a regra da cor através do nome da cor ou um valor hexadecimal.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Define a regra para não ter sombreamento.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Define a altura, em pixels.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Define a regra de comprimento na página através de um valor em pixel ou porcentagem.

## Exemplo

```html
<p>
  Este é o primeiro parágrafo do texto. Este é o primeiro parágrafo do texto.
  Este é o primeiro parágrafo do texto. Este é o primeiro parágrafo do texto.
</p>

<hr />

<p>
  Este é o segundo parágrafo do texto. Este é o segundo parágrafo do texto. Este
  é o segundo parágrafo do texto. Este é o segundo parágrafo do texto.
</p>
```

O HTML acima irá produzir:

Este é o primeiro parágrafo do texto. Este é o primeiro parágrafo do texto. Este é o primeiro parágrafo do texto. Este é o primeiro parágrafo do texto.

---

Este é o segundo parágrafo do texto. Este é o segundo parágrafo do texto. Este é o segundo parágrafo do texto. Este é o segundo parágrafo do texto.

## Notas

Para alterar a aparencia da linha ou as lacunas entre ela e os parágrafos, utilize [folhas de estilo em cascata](/pt-BR/docs/Web/CSS).

## Especificações

{{Specifications}}

## Compatibilidade nos Navegadores

{{Compat}}

## Veja também

- [Elemento HTML parágrafo](/pt-BR/docs/Web/HTML/Element/p)

{{HTMLSidebar}}
