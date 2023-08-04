---
title: background-clip
slug: Web/CSS/background-clip
---

{{CSSRef}}

A propriedade CSS **`background-clip`** especifica se o fundo de um elemento, seja cor ou imagem, se extende debaixo de sua área de borda, preenchimento ou conteúdo.

{{EmbedInteractiveExample("pages/css/background-clip.html")}}

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

| Especificação                                                               | Estado                        | Comentário |
| --------------------------------------------------------------------------- | ----------------------------- | ---------- |
| {{SpecName('CSS3 Backgrounds', '#the-background-clip', 'background-clip')}} | {{Spec2('CSS3 Backgrounds')}} |            |

## Compatibilidade com navegadores

{{Compat("css.properties.background-clip")}}

## Veja também

- {{cssxref("clip")}}
- [CSS Box Model](/pt-BR/docs/Web/CSS/box_model)
