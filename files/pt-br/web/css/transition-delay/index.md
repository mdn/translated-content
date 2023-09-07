---
title: transition-delay
slug: Web/CSS/transition-delay
---

{{CSSRef}}

A propriedade CSS **`transition-delay`** (atraso de transição) determina o tempo de duração da espera antes de iniciar um efeito de transição([transition effect](/pt-BR/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)) quando seu valor muda.

{{EmbedInteractiveExample("pages/css/transition-delay.html")}}

Essa espera, ou atraso de transição, pode ser zero, positiva ou negativa:

- Um valor de `0s`(ou `0ms`) iniciará o efeito de transição imediatamente.
- Um valor positivo atrasará o inicio do efeito de transição de acordo com o tempo estabelecido.
- Um valor negativo iniciará o efeito de transição imediatamente e parcialmente durante o efeito. Em outras palavras, o efeito será animado como se já tivesse sido executado pelo tempo estipulado.

Você pode especificar vários atrasos, o que é útil quando é necessário realizar a transição de várias propriedades. Cada atraso pode ser aplicado à propriedade correspondente como especificado pela propriedade de transição({{cssxref("transition-property")}}), que atua como uma lista mestre. Se existem menos atrasos do que o determinado pela lista mestre, a lista de valores de atraso será repetida até que seja suficiente. Se existem mais atrasos, a lista de valores de atraso será trucanda(limitada) ao combinar o número de propriedades. Em ambos os casos, a declaração CSS permacene válida.

## Syntax

```css
/* Valores de Tempo <time>  */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* Valores Globais */
transition-delay: inherit;
transition-delay: initial;
transition-delay: unset;
```

### Valores

- {{cssxref("&lt;time&gt;")}}
  - : Indica a quantidade de tempo de espera entre um valor de propriedade e o inicio do efeito de transição([transition effect](/pt-BR/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)).

### Sintaxe Formal

{{csssyntax}}

## Exemplos

`transition-delay: 0.5s`

```html hidden
<div class="parent">
  <div class="box">Lorem</div>
</div>
```

```css hidden
.parent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 20px;
  left: 0px;
  top: 0px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 0.5s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 0.5s;
  transition-timing-function: linear;
}
.box1 {
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 0.5s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 0.5s;
  transition-timing-function: linear;
}
```

```js hidden
function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
```

{{EmbedLiveSample("delay_0_5s",275,150)}}

`transition-delay: 1s`

```html hidden
<div class="parent">
  <div class="box">Lorem</div>
</div>
```

```css hidden
.parent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 20px;
  left: 0px;
  top: 0px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 1s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 1s;
  transition-timing-function: linear;
}
.box1 {
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 1s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 1s;
  transition-timing-function: linear;
}
```

```js hidden
function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
```

{{EmbedLiveSample("delay_1s",275,150)}}

`transition-delay: 2s`

```html hidden
<div class="parent">
  <div class="box">Lorem</div>
</div>
```

```css hidden
.parent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 20px;
  left: 0px;
  top: 0px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 2s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 2s;
  transition-timing-function: linear;
}
.box1 {
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 2s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 2s;
  transition-timing-function: linear;
}
```

```js hidden
function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
```

{{EmbedLiveSample("delay_2s",275,150)}}

`transition-delay: 4s`

```html hidden
<div class="parent">
  <div class="box">Lorem</div>
</div>
```

```css hidden
.parent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 20px;
  left: 0px;
  top: 0px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 4s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 4s;
  transition-timing-function: ease-in-out;
}
.box1 {
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 4s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 4s;
  transition-timing-function: ease-in-out;
}
```

```js hidden
function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
```

{{EmbedLiveSample("delay_4s",275,150)}}

## Especificações

| Especificação                                                                      | Status                        | Comentário        |
| ---------------------------------------------------------------------------------- | ----------------------------- | ----------------- |
| {{SpecName('CSS3 Transitions', '#transition-delay-property', 'transition-delay')}} | {{Spec2('CSS3 Transitions')}} | Definição inicial |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.transition-delay")}}

## Veja também

- [Usando Transições CSS](/pt-BR/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{domxref("TransitionEvent")}} API
