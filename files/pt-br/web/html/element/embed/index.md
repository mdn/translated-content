---
title: <embed>
slug: Web/HTML/Element/embed
---

## Sumário

O **elemento HTML `<embed>`** incorpora conteúdo externo no ponto especificado no documento. Este conteúdo é fornecido por um aplicativo externo ou outra fonte de conteúdo interativo, como um plug-in de navegador.

{{InteractiveExample("HTML Demo: &lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="video/mp4"
  src="/shared-assets/videos/flower.mp4"
  width="250"
  height="200" />
```

> [!NOTE]
> Este tópico documenta apenas o elemento definido como parte do HTML5. Ele não trata da implementação anterior e não padronizada do elemento.

Lembre-se de que a maioria dos navegadores modernos descontinuou e removeu o suporte para plug-ins de navegador. Portanto, confiar no `<embed>` geralmente não é aconselhável se você deseja que seu site funcione no navegador do usuário comum.

- _[Categoria de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Flow content](/pt-BR/docs/Web/HTML/Content_categories#flow_content), [phrasing content](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content), embedded content, interactive content, palpable content.
- _Conteúdo permitido_ Nenhum, é um {{Glossary("empty element")}}.
- _Omissão de Tag_ Deve iniciar com uma tag de início, mas não deve ter uma tag de fechamento.
- _Elementos pai (ancestral) permitidos_ Qualquer elemento que aceita incorporação de conteúdo.
- _Interface DOM_ {{domxref("HTMLEmbedElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- `height`
  - : A altura apresentada do recurso, em [CSS pixels.](https://drafts.csswg.org/css-values/#px) Este deve ser um valor absoluto; porcentagens _não_ são permitidas.
- `src`
  - : A URL do recurso que está sendo incorporado.
- `type`
  - : O [tipo MIME](/pt-BR/docs/Glossary/MIME_type) a ser usado para a seleção do _plug-in_ de instanciação.
- `width`
  - : A largura apresentada do recurso, em CSS pixels. Este deve ser um valor absoluto; porcentagens _não_ são permitidas.

## Exemplo

```html
<embed type="video/quicktime" src="movie.mov" width="640" height="480" />
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

> [!NOTE]
> Atualmente existe uma diferença na implementação pelos navegadores. Enquanto carrega, no Chrome e no Opera, aparece o conteúdo do recurso em HTML, no Firefox, mostra uma mensagem genérica falando que o conteúdo precisa de um _plug-in_ (veja o [Erro do Firefox 730768](https://bugzil.la/730768)). É recomendado que se use os elementos {{HTMLElement("object")}} ou {{HTMLElement("iframe")}}.

{{Compat}}

## Veja também

- Outros elementos usados para incorporar conteúdo de vários tipos, incluem: {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, and {{HTMLElement("video")}}.
- Posicionamento e dimensionamento de conteúdos incorporados dentro da janela de exibição: {{cssxref("object-position")}} and {{cssxref("object-fit")}}

{{ HTMLSidebar }}
