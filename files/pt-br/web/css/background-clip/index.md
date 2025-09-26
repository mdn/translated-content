---
title: background-clip
slug: Web/CSS/background-clip
---

{{CSSRef}}

A propriedade CSS **`background-clip`** especifica se o fundo de um elemento, seja cor ou imagem, se extende debaixo de sua área de borda, preenchimento ou conteúdo.

{{InteractiveExample("CSS Demo: background-clip")}}

```css interactive-example-choice
background-clip: border-box;
```

```css interactive-example-choice
background-clip: padding-box;
```

```css interactive-example-choice
background-clip: content-box;
```

```css interactive-example-choice
background-clip: text;
color: transparent;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is the content of the element.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: #d73611;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333;
  font-size: 2em;
  font-weight: bold;
}
```

Se o elemento não possuir as propriedades {{cssxref("background-image")}} ou {{cssxref("background-color")}} definidas, esta propriedade só terá um efeito visual quando a borda tiver regiões transparentes ou regiões parcialmente opacas (devido ao {{cssxref("border-style")}} ou {{cssxref("border-image")}}); caso contrário a borda encobrirá a diferença.

{{cssinfo}}

## Sintaxe

```css
/* Valores de palavra-chave */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* Valores globais */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
```

### Valores

- `border-box`
  - : O fundo se extende até fora da fronteira da borda (mas por baixo da borda na ordenação-z).
- `padding-box`
  - : Nenhum fundo é desenhado abaixo da borda (o fundo se extende até a borda externa do preenchimento).
- `content-box`
  - : O fundo é desenhado dentro (cortado) a caixa de conteúdo.
- `text` {{experimental_inline}}
  - : O fundo é desenhado dentro (cortado) do texto aparente.

### Sintaxe formal

{{csssyntax}}

## Exemplos

### Usando `border-box`

#### Conteúdo HTML

```html
<p>O fundo se extende atrás da borda.</p>
```

#### Conteúdo CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
  background-clip: border-box;
}
```

#### Resultado

{{EmbedLiveSample('Using_border-box', 540, 200)}}

### Usando `padding-box`

#### Conteúdo HTML

```html
<p>O fundo se extende até dentro da fronteira da borda.</p>
```

#### Conteúdo CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
  background-clip: padding-box;
}
```

#### Resultado

{{EmbedLiveSample('Using_padding-box', 540, 200)}}

### Usando `content-box`

#### Conteúdo HTML

```html
<p>O fundo se extende somente até o limite da caixa de conteúdo.</p>
```

#### Conteúdo CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
  background-clip: content-box;
}
```

#### Resultado

{{EmbedLiveSample('Using_content-box', 540, 200)}}

### Usando `text`

#### Conteúdo HTML

```html
<p>O fundo se extende dentro do texto.</p>
```

#### Conteúdo CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;

  /* Note a necessidade de adicionar trânsparência ao texto*/
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0.2);
}
```

#### Resultado

{{EmbedLiveSample('Using_text', 540, 200)}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{cssxref("clip")}}
- [CSS Box Model](/pt-BR/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
