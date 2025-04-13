---
title: font-size
slug: Web/CSS/font-size
---

{{CSSRef}}

A propriedade **`font-size`** no [CSS](/pt-BR/docs/Web/CSS) estabelece o tamanho da fonte.

Esta propriedade também é usada para computar o tamanho de `em`, `ex`, e outras unidades {{CSSxRef("&lt;length&gt;")}} relativas.

{{InteractiveExample("CSS Demo: font-size")}}

```css interactive-example-choice
font-size: 1.2rem;
```

```css interactive-example-choice
font-size: x-small;
```

```css interactive-example-choice
font-size: smaller;
```

```css interactive-example-choice
font-size: 12px;
```

```css interactive-example-choice
font-size: 80%;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

## Sintaxe

```css
/* Valores de tamanho absoluto - <absolute-size> */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* Valores de tamanho relativo - <relative-size> */
font-size: smaller;
font-size: larger;

/* Valores de altura - <length> */
font-size: 12px;
font-size: 0.8em;

/* Valores percentuais - <percentage> */
font-size: 80%;

/* Valor math */
font-size: math;

/* Valores globais */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: revert-layer;
font-size: unset;
```

### Valores

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`

  - : Palavras-chave de {{CSSxRef("absolute-size", "tamanho absoluto")}}, baseadas no tamanho de fonte padrão do usuário (que é o `medium`).

- `larger`, `smaller`

  - : Palavras-chave de {{CSSxRef("relative-size", "tamanho relativo")}}. A fonte ficará maior ou menor em comparação ao tamanho da fonte do elemento pai, a razão destes tamanhos é aproximadamente a mesma do que a razão entre duas palavras-chave de tamanho absoluto consecutivas.

- {{CSSxRef("&lt;length&gt;")}}

  - : Um valor de {{CSSxRef("&lt;length&gt;")}} positivo. Para a maioria das unidades relativas de fonte (como `em` e `ex`), o tamanho da fonte é relativo ao tamanho da fonte do elemento pai.

    Para unidades relativas de fonte que são baseadas no elemento raiz (como o `rem`), o tamanho da fonte é relativo ao tamanho da fonte usado pelo {{HTMLElement("html")}} (o elemento raiz).

- {{CSSxRef("&lt;percentage&gt;")}}

  - : Um valor de {{CSSxRef("&lt;percentage&gt;")}} positivo, relativo ao tamanho da fonte do elemento pai.
    > [!NOTE]
    > Para maximizar a acessibilidade, geralmente é ideal usar valores que são relativos ao tamanho de fonte padrão do usuário.

- `math`
  - : [Regras de dimensionamento](https://w3c.github.io/mathml-core/#the-math-script-level-property) serão aplicadas quando for determinado o valor computado da propriedade `font-size` para elementos matemáticos relativo ao `font-size` do elemento que o contém.
    Veja a propriedade {{CSSxRef("math-depth")}} para mais informações.

## Descrição

Existem diversas maneiras de especificar o tamanho da fonte, incluindo palavras-chave ou valores numéricos para pixels ou ems. Escolha o método apropriado com base nas necessidades de cada página da web.

### Palavras-chave

Palavras-chave são um bom método para definir tamanhos de fonte na web. Ao definir um tamanho de fonte de palavra-chave no elemento {{HTMLElement("body")}}, você pode usar tamanhos relativos em todo o resto da página, dando-lhe a capacidade de aumentar ou diminuir o tamanho da fonte em toda a página de acordo.

### Pixels

Definir o tamanho da fonte com valores de pixels (`px`) é uma boa escolha quando você precisa de precisão a nível de pixel. Um valor de `px` é estático. Este é um método independente de sistema operacional e compatível entre navegadores no qual você diz para o navegador renderizar as letras exatamente no número de pixels de altura que especificou. Os resultados podem variar ligeiramente entre navegadores, pois eles podem usar algoritmos diferentes para obter um efeito semelhante.

Abordagens diferentes de tamanho de fonte podem ser combinadas. Por exemplo, se um elemento pai é definido como `16px` e seu elemento filho é definido como `larger`, o elemento filho exibe na página uma fonte maior do que a fonte do elemento pai.

> [!NOTE]
> Definir tamanhos de fonte em `px` _[não é acessível](https://en.wikipedia.org/wiki/Web_accessibility)_, pois o usuário não pode alterar o tamanho da fonte em alguns navegadores. Usuários com visão limitada, por exemplo, podem preferir definir um tamanho de fonte muito maior do que o escolhido por um designer da web. Evite usá-los se você deseja criar um design inclusivo.

### Ems

Usando um valor `em` cria um tamanho de fonte dinâmico (historicamente, a unidade `em` foi derivada da largura de um "M" maiúsculo da família tipográfica). O valor numérico atua como um multiplicador da propriedade `font-size` no elemento em que é usado. Considere este exemplo:

```css
p {
  font-size: 2em;
}
```

Neste caso, o tamanho da fonte dos elementos {{HTMLElement("p")}} será o dobro do valor computado de `font-size` herdado por eles. Por extensão, um `font-size` de `1em` é igual ao `font-size` computado do elemento no qual é usado.

Se um `font-size` não foi definido em nenhum dos ancestrais de `<p>`, então `1em` será igual ao `font-size` padrão do navegador, que geralmente é `16px`. Portanto, por padrão, `1em` é equivalente a `16px`, e `2em` é equivalente a `32px`. Se você definir um `font-size` de `20px` no elemento `<body>`, então `1em` nos elementos `<p>` será equivalente a `20px`, e `2em` será equivalente a `40px`.

Para calcular o valor `em` equivalente a qualquer valor de pixel necessário, você pode usar esta fórmula:

```plain
em = valor de pixels desejado / font-size do elemento pai em pixels
```

Por exemplo, suponha que o `font-size` do elemento `<body>` da página seja `16px`. Se o tamanho da fonte que você deseja for `12px`, você deverá especificar `0.75em` (porque 12/16 = 0,75). Da mesma forma, se você quiser um tamanho de fonte de `10px`, especifique `0.625em` (10/16 = 0,625); para `22px`, especifique `1.375em` (22/16).

O `em` é uma unidade muito útil em CSS, pois adapta automaticamente seu tamanho em relação ao tamanho de fonte que o leitor escolher usar.

Há um fato importante a ter em mente: valores `em` acumulam. Considere o HTML e CSS a seguir:

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6em;
}
```

```html
<div>
  <span>Externo <span>interno</span> externo</span>
</div>
```

O resultado é:

{{EmbedLiveSample("Ems", 400, 100)}}

Assumindo que o `font-size` padrão do navegador é `16px`, as palavras "externo" serão renderizadas em `25.6px`, mas a palavra "interno" será renderizada em `40.96px`. Isso ocorre porque o `font-size` do elemento {{HTMLElement("span")}} interno é `1.6em`, que é relativo ao `font-size` do seu elemento pai, que por sua vez é relativo ao `font-size` do próximo elemento pai. Isso costuma ser chamado de _**compounding**_.

### Rems

Valores `rem` foram inventados para contornar o problema de acumulação mencionado acima. Os valores `rem` são relativos ao elemento `<html>`, não ao elemento pai. Em outras palavras, eles permitem que você especifique um tamanho de fonte de um jeito relativo sem ser afetado pelo tamanho da fonte do elemento pai, eliminando assim a acumulação.

O CSS abaixo é quase idêntico ao do exemplo anterior. A única exceção é que a unidade foi alterada para `rem`.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Depois aplicamos este CSS ao mesmo HTML, que é assim:

```html
<div>
  <span>Externo <span>interno</span> externo</span>
</div>
```

{{EmbedLiveSample("Rems", 400, 100)}}

Neste exemplo, as palavras "Externo interno externo" são todas exibidas em `25.6px` (assumindo que o `font-size` do navegador foi deixado no valor padrão de `16px`).

### Ex

Assim como a unidade `em`, o `font-size` de um elemento definido usando a unidade `ex` é computado (ou dinâmico). Ele se comporta da mesma forma, com exceção de que, quando você define a propriedade `font-size` usando unidades `ex`, o `font-size` é igual à altura-x da [primeira fonte disponível](https://www.w3.org/TR/css-fonts-3/#first-available-font) usada na página. O valor numérico multiplica o `font-size` que o elemento herdou e o `font-size` acumula relativamente.

Veja o W3C Editor's Draft para uma descrição mais detalhada das [unidades de comprimento relativas à fonte](https://drafts.csswg.org/css-values-4/#font-relative-length) como o `ex`.

## Definição formal

{{CSSInfo}}

## Sintaxe formal

{{CSSSyntax}}

## Exemplos

### Definindo tamanhos de fonte

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">H1 pequeno</h1>
<h1 class="larger">H1 maior</h1>
<h1 class="point">H1 24 point</h1>
<h1 class="percent">H1 200%</h1>
```

#### Resultado

{{EmbedLiveSample('Definindo_tamanhos_de_fonte', 600, 250)}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{CSSxRef("font-size-adjust")}}
- {{CSSxRef("font-style")}}
- {{CSSxRef("font-weight")}}
- {{CSSxRef("math-depth")}}
- {{CSSxRef("math-style")}}
- Atributo SVG {{SVGAttr("font-size")}}
- Aprender: [Fundamental text and font styling](/pt-BR/docs/Learn_web_development/Core/Text_styling/Fundamentals)
