---
title: flex-wrap
slug: Web/CSS/flex-wrap
---

{{ CSSRef}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`flex-wrap`** define se os itens flexíveis são forçados a ficarem na mesma linha ou se podem ser quebradas em varias linhas. Se o argumento for valido, ele define a direção em que as linhas são empilhadas.

{{InteractiveExample("CSS Demo: flex-wrap")}}

```css interactive-example-choice
flex-wrap: nowrap;
```

```css interactive-example-choice
flex-wrap: wrap;
```

```css interactive-example-choice
flex-wrap: wrap-reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

Veja [Using CSS flexible boxes](/pt-BR/docs/CSS/Using_CSS_flexible_boxes) para mais propriedades e informação.

## Syntax

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: unset;
```

A propriedade `flex-wrap` é especificada como uma unica palavra-chave escolhida na lista de valores abaixo.

### Valores

Os seguintes valores são aceitos :

- `nowrap`
  - : Os itens flexíveis são agrupados em uma unica linha, o que pode fazer com que o flex container transborde. O **cross-start** é equivalente ao **início** ou **antes**, dependendo do valor da {{cssxref("flex-direction")}}. Este é o valor padrão.
- `wrap`
  - : Os itens flexíveis são quebrados em multiplas linhas. O **cross-start** é equivalente a iniciar ou antes dependendo do valor do `flex-direction` e **cross-end** é o oposto do especificado **cross-start**.
- `wrap-reverse`
  - : Se comporta da mesma maneira que o `wrap` mas a de linha ocorre na direção contrária, ou seja, para a linha acima.

## Formal definição

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Exemplos

### Definindo valores em um flex container wrap

#### HTML

```html
<h4>This is an example for flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css
/* Common Styles */
.content,
.content1,
.content2 {
  color: #fff;
  font: 100 24px/100px sans-serif;
  height: 150px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 300px;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Flexbox Styles */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Resultados

{{ EmbedLiveSample('Setting_flex_container_wrap_values', '700px', '700px', '', 'Web/CSS/flex-wrap') }}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Guia CSS Flexbox: _[Basic Concepts of Flexbox](/pt-BR/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- Guia CSS Flexbox: _[Mastering wrapping of flex items](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
