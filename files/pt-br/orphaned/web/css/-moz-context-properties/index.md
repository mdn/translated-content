---
title: "-moz-context-properties"
slug: orphaned/Web/CSS/-moz-context-properties
---

{{CSSRef}}{{Non-standard_header}}

> **Nota:** Essa característica está disponível desde o Fireforx 55, mas só é suportada atualmente com imagens SVG carregadas via URLs `chrome://` ou `resource://`. Para experimentar o recurso em SVG na web é necessário definir `svg.context-properties.content.enabled` para `true`.

Se você referenciar uma imagem SVG em uma página web (como com o elemento {{htmlelement("img")}} ou como imagem de fundo), a imagem SVG pode coordenar com o elemento de incorporação (seu contexto) para que a imagem adote os valores da propriedade definidos no elemento de incorporação. Para fazer isso o elemento de incorporação pecisa listar as propriedades que precisarão ficar disponíveis para a imagem listando-os como valores da propriedade de **`-moz-context-properties`**, e a imagem precisa optar em usar essas propriedades usando valores como o `context-fill`.

{{cssinfo}}

## Sintaxe

```css
/* Valores-chave */
-moz-context-properties: fill;
-moz-context-properties: fill, stroke;

/* Valores globais */
-moz-context-properties: inherit;
-moz-context-properties: initial;
-moz-context-properties: unset;
```

### Valores

- `fill`
  - : Expõe o valor `fill` definido na imagem para o SVG incorporado.
- `stroke`
  - : Expõe o valor `stroke` definido na imagem para o SVG incorporado.
- `fill-opacity`
  - : Expõe o valor `fill-opacity` definido na imagem para o SVG incorporado.
- `stroke-opacity`
  - : Expõe o valor `stoke-opacity` definido na imagem para o SVG incorporado.

### Sintaxe formal

{{csssyntax}}

## Exemplo

Nesse exemplo temos um simples SVG incorporado usando o elemento `<img>`.

Você precisa primeiro especificar no elemento de incorporação as propriedades cujos valores deseja expor ao SVG incorporado, usando a propriedade `-moz-context-properties`. Por exemplo:

```css
.img1 {
  width: 100px;
  height: 100px;
  -moz-context-properties: fill, stroke;
  fill: lime;
  stroke: purple;
}
```

Agora que você o fez, a imagem SVG pode usar os valores das propriedades {{cssxref("fill")}} e {{cssxref("stroke")}}, por exemplo:

```html
<img class="img1" src="data:image/svg+xml;utf8,<svg xmlns='https://www.w3.org/2000/svg'>
                       <rect width='100%' height='100%' stroke-width='30px'
                       fill='context-fill red' stroke='context-stroke' fill-opacity='0.5'/></svg>">
```

Aqui nós definimos a imagem `src` para uma URI de dado contendo uma simples imagem SVG; o `<rect>` foi feito para receber os valores de `fill` e `stroke` de {{cssxref("fill")}} e {{cssxref("stroke")}} definidos no elemento `<img>` dando a eles a palavras-chave `context-fill`/`context-stroke` em seus valores, juntamente com a cor de fallback para o preenchimento (vermelho) que será usada caso o SVG seja carregado sozinho em uma janela top-level (onde não terá elemento de contexto para prover valores de contexto). Note que se uma cor é definida diretamente no SVG, e a cor de contexto é também especificada, a cor de contexto sobrescreve a cor direta.

> **Nota:** Você pode encontrar um [exemplo funcinal no Github](https://mdn.github.io/css-examples/moz-context-properties/).

## Especificações

Essa propriedade não está definida em nenhum padrão CSS.

## Compatibilidade com navegadores

{{Compat("css.properties.-moz-context-properties")}}
