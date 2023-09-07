---
title: <hr>
slug: Web/HTML/Element/hr
---

## Sumário

O **elemento HTML `<hr>`** representa uma quebra temática entre elementos de nível de parágrafo (por exemplo , uma mudança da cena de uma história, ou uma mudança de tema com uma seção). Nas versões anteriores do HTML, representava uma linha horizontal. Pode continuar sendo exibida como uma linha horizontal nos navegadores, mas agora está definida em termos semânticos, em vez de termos de apresentação.

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Fluxo de conteúdo](/pt-BR/docs/HTML/Content_categories#Flow_content).
- _Conteúdo permitido_ Nenhum, é um {{Glossary("empty element")}}.
- _Omissão de Tag_ Deve conter a tag de início, mas não precisa ter uma tag de encerramento.
- _Elementos pai permitidos_ Qualquer elemento que aceite [fluxo de conteúdo](/pt-BR/docs/HTML/Content_categories#Flow_content).
- _Interface DOM_ {{domxref("HTMLHRElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Define a regra de alinhamento na página. Se nenhum valor for especificado, o valor padrão é `left`.
- {{htmlattrdef("color")}} {{Deprecated_Inline}} {{Non-standard_inline}}
  - : Denife a regra da cor através do nome da cor ou um valor hexadecimal.
- {{htmlattrdef("noshade")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Deine a regra para não ter sombreamento.
- {{htmlattrdef("size")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Denife a altura, em pixels.
- {{htmlattrdef("width")}} {{deprecated_inline}} {{Non-standard_Inline}}
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

Para alterar a aparencia da linha ou as lacunas entre ela e os parágrafos, utilize [folhas de estilo em cascata](/pt-BR/docs/CSS).

## Especificações

| Especificação                                                                     | Status                   | Comentário                                       |
| --------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------ |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-hr-element', '&lt;hr&gt;')}} | {{Spec2('HTML WHATWG')}} | Definição do elemento `hr`                       |
| {{SpecName('HTML WHATWG', 'rendering.html#the-hr-element-0')}}                    | {{Spec2('HTML WHATWG')}} | Sugestão de renderização padrão do elemento `hr` |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-hr-element', '&lt;hr&gt;')}}   | {{Spec2('HTML5 W3C')}}   |                                                  |
| {{SpecName('HTML4.01', 'present/graphics.html#h-15.3', '&lt;hr&gt;')}}            | {{Spec2('HTML4.01')}}    |                                                  |

## Compatibilidade nos Navegadores

{{Compat("html.elements.hr")}}

## Veja também

- [Elemento HTML parágrafo](/pt-BR/docs/HTML/Element/p)

{{HTMLSidebar}}
