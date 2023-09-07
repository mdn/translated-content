---
title: Using CSS transitions
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
---

{{CSSref}}

**CSS transitions** provê uma forma de controlar a velocidade de uma animação quando há mudanças de propriedades CSS. Ao invés de uma propriedade entrar em vigor imediatamente, você pode fazer com que as mudanças em uma propriedade ocorram durante um periodo de tempo. Por exemplo, se você mudar a cor de um elemento de branco para preto, a alteração será instantanea. Utilizando transições CSS, as alterações acontecem em uma intervalo de tempo que seguem uma curva de aceleração, e todas podem ser personalizadas

Animações que envolvem transições entre dois estados geralmente são chamadas de _transições implicitas,_ como os estados entre o começo e o fim são implicitamente definidos pelo browser

![A CSS transition tells the browser to draw the intermediate states between the initial and final states, showing the user a smooth transitions.](/files/4529/TransitionsPrinciple.png)

Animações CSS permitem que você decida quais propriedades animar (listando-os explicitamente), quando a animação deve começar (definindo o delay), quão longa a transição será (definindo a duração), e como a transição irá ocorrer (definindo o tempo da função, linear ou rápido no início, lento no final).

## Quais propriedade CSS podem transicionadas?

Você mesmo pode definir qual propriedade será transicionada e de qual maneira. E isso permite a criação de transições complexas. Como não faz sentido animar algumas propriedades, existe uma lista finita [com propriedades que podem ser transicionadas](/pt-BR/docs/Web/CSS/CSS_animated_properties).

> **Nota:** A lista de propriedades que podem ser animadas sofre alterações a medida que a especificação se desenvolve.

> **Nota:** O valor `automatico` , geralmente é complexo. A especificação recomenda não animar com valores automaticos. Alguns [user agents](/pt-BR/docs/Web/HTTP/Headers/User-Agent), como aqueles baseados no Genko, implementam esse requisito, como aqueles baseados no WebKit, são menos rigosos. Animações CSS que utlizam o valor `automatico`, podem levar resultados imprevisiveis, dependendo do Browser e da versão, e isso pode ser evitado.

## Definindo transições

Transições CSS são controladas usando a propriedade {{cssxref("transition")}}. Essa é a melhor maneira de configurar uma transição, assim evitamos parâmetros fora de sintonia, o que pode ser muito frustrante desperdiçar tanto tempo debuggando CSS.

Você pode controlar componentes individuais da transição com a seguinte sub propriedade:

**(Observe que essas transições fazem um loop infinitamente apenas para o propósito de nossos exemplos; `transitions` apenas visualizam a mudança na propriedade de começo ao fim. Se você precisar de visualizações desse loop, procure na propriedade {{cssxref("animation")}}.)**

- {{cssxref("transition-property")}}
  - : Especifica o nome ou nomes das propriedades CSS que as transições serão aplicadas. Somente as propriedades listadas aqui serão animadas durante a transição; alterações e todas outras propriedades ocorrem instantaneamente.
- {{cssxref("transition-duration")}}

  - : Especifica a duração em que as transições devem ocorrer. Você pode especificar uma única duração que se aplica a todas as propriedades durante a transição ou vários valores para permitir que cada propriedade faça a transição em um período de tempo diferente.

    `transition-duration: 0.5s`

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
      -webkit-transition-property: width height background-color font-size left
        top transform -webkit-transform color;
      -webkit-transition-duration: 0.5s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        transform -webkit-transform color;
      transition-duration: 0.5s;
      transition-timing-function: ease-in-out;
    }
    .box1 {
      transform: rotate(270deg);
      -webkit-transform: rotate(270deg);
      width: 50px;
      height: 50px;
      background-color: blue;
      color: yellow;
      font-size: 18px;
      left: 150px;
      top: 25px;
      position: absolute;
      -webkit-transition-property: width height background-color font-size left
        top transform -webkit-transform color;
      -webkit-transition-duration: 0.5s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        transform -webkit-transformv color;
      transition-duration: 0.5s;
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

    {{EmbedLiveSample("duration_0_5s", 275, 150)}}

    `transition-duration: 1s`

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
      -webkit-transition-property: width height background-color font-size left
        top -webkit-transform color;
      -webkit-transition-duration: 1s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        transform color;
      transition-duration: 1s;
      transition-timing-function: ease-in-out;
    }
    .box1 {
      transform: rotate(270deg);
      -webkit-transform: rotate(270deg);
      width: 50px;
      height: 50px;
      background-color: blue;
      color: yellow;
      font-size: 18px;
      left: 150px;
      top: 25px;
      position: absolute;
      -webkit-transition-property: width height background-color font-size left
        top -webkit-transform transform color;
      -webkit-transition-duration: 1s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        transform -webkit-transform color;
      transition-duration: 1s;
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

    {{EmbedLiveSample("duration_1s",275,150)}}

    `transition-duration: 2s`

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
      -webkit-transition-property: width height background-color font-size left
        top transform -webkit-transform color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        transform -webkit-transform color;
      transition-duration: 2s;
      transition-timing-function: ease-in-out;
    }
    .box1 {
      transform: rotate(270deg);
      -webkit-transform: rotate(270deg);
      width: 50px;
      height: 50px;
      background-color: blue;
      color: yellow;
      font-size: 18px;
      left: 150px;
      top: 25px;
      position: absolute;
      -webkit-transition-property: width height background-color font-size left
        top transform -webkit-transform color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        transform -webkit-transform color;
      transition-duration: 2s;
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

    {{EmbedLiveSample("duration_2s",275,150)}}

    `transition-duration: 4s`

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
      -webkit-transition-property: width height background-color font-size left
        top transform -webkit-transform color;
      -webkit-transition-duration: 4s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        transform -webkit-transform color;
      transition-duration: 4s;
      transition-timing-function: ease-in-out;
    }
    .box1 {
      transform: rotate(270deg);
      -webkit-transform: rotate(270deg);
      width: 50px;
      height: 50px;
      background-color: blue;
      color: yellow;
      font-size: 18px;
      left: 150px;
      top: 25px;
      position: absolute;
      -webkit-transition-property: width height background-color font-size left
        top transform -webkit-transform color;
      -webkit-transition-duration: 4s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        transform -webkit-transform color;
      transition-duration: 4s;
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

    {{EmbedLiveSample("duration_4s",275,150)}}

- {{cssxref("transition-timing-function")}}

  - : ![](/files/3434/TF_with_output_gt_than_1.png) Especifica uma função para definir como os valores intermediários das propriedades são calculados. As [timing functions](/pt-BR/docs/Web/CSS/timing-function) determinam como os valores intermediários da transição são calculados. A maioria das funções de temporização pode ser especificada fornecendo o gráfico da função correspondente, conforme definido por quatro pontos definindo um bezier cúbico. Você também pode escolher o [Easing Functions Cheat Sheet](http://easings.net/).

    `transition-timing-function: ease`

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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: ease;
      transition-property: width height background-color font-size left top
        color;
      transition-duration: 2s;
      transition-timing-function: ease;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: ease;
      transition-property: width height background-color font-size left top
        color;
      transition-duration: 2s;
      transition-timing-function: ease;
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

    {{EmbedLiveSample("ttf_ease",275,150)}}

    `transition-timing-function: linear`

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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: linear;
      transition-property: width height background-color font-size left top
        color;
      transition-duration: 2s;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: linear;
      transition-property: width height background-color font-size left top
        color;
      transition-duration: 2s;
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

    {{EmbedLiveSample("ttf_linear",275,150)}}

    `transition-timing-function: step-end`

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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: step-end;
      transition-property: width height background-color font-size left top
        color;
      transition-duration: 2s;
      transition-timing-function: step-end;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: step-end;
      transition-property: width height background-color font-size left top
        color;
      transition-duration: 2s;
      transition-timing-function: step-end;
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

    {{EmbedLiveSample("ttf_stepend",275,150)}}

    `transition-timing-function: steps(4, end)`

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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: steps(4, end);
      transition-property: width height background-color font-size left top
        color;
      transition-duration: 2s;
      transition-timing-function: steps(4, end);
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-timing-function: steps(4, end);
      transition-property: width height background-color font-size left top
        color;
      transition-duration: 2s;
      transition-timing-function: steps(4, end);
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

    {{EmbedLiveSample("ttf_step4end",275,150)}}

- {{cssxref("transition-delay")}}

  - : Define quanto tempo esperar entre o momento que uma propriedade é alterada e a transição começa.

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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-delay: 0.5s;
      -webkit-transition-timing-function: linear;
      transition-property: width height background-color font-size left top
        color;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-delay: 0.5s;
      -webkit-transition-timing-function: linear;
      transition-property: width height background-color font-size left top
        color;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-delay: 1s;
      -webkit-transition-timing-function: linear;
      transition-property: width height background-color font-size left top
        color;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-delay: 1s;
      -webkit-transition-timing-function: linear;
      transition-property: width height background-color font-size left top
        color;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-delay: 2s;
      -webkit-transition-timing-function: linear;
      transition-property: width height background-color font-size left top
        color;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-delay: 2s;
      -webkit-transition-timing-function: linear;
      transition-property: width height background-color font-size left top
        color;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-delay: 4s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        color;
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
      -webkit-transition-property: width height background-color font-size left
        top color;
      -webkit-transition-duration: 2s;
      -webkit-transition-delay: 4s;
      -webkit-transition-timing-function: ease-in-out;
      transition-property: width height background-color font-size left top
        color;
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

A sintaxe do CSS é abreviada da seguinte forma:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Exemplos

### Exemplo simples

Esse exemplo executa uma transição de com duração de 4 segundos de delay entre o tempo que o usuário passa o mouse sobre o elemento (evento mouseover), e o início do efeito da animação

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

### Exemplo de multiplicas animações de propriedades

```html hidden
<body>
  <p>
    The box below combines transitions for: width, height, background-color,
    transform. Hover over the box to see these properties animated.
  </p>
  <div class="box">Sample</div>
</body>
```

#### Conteúdo CSS

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  -webkit-transition:
    width 2s,
    height 2s,
    background-color 2s,
    -webkit-transform 2s;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    transform 2s;
}

.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
```

{{EmbedLiveSample('Multiple_animated_properties_example', 600, 300)}}

### Quando os tamanhos dos valores das listas das propriedades são de tamanhos diferentes

Se alguma propriedade da lista de valores for menor que os outros, esse valor será repetido para que eles correspondam. Por exemplo:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Isso é tratado como se fosse:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

Da mesma forma, se um valor da propriedade da lista, for maior que a {{cssxref("transition-property")}}, ela será truncada, então você terá o seguinte CSS:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

Isso pode ser interpretado como:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Usando transições ao destacar menus

Um uso comum de css é para destacar os itens do menu, como hover quando o usúario passa o mouse sobre um elemento. É facíl fácil usar transições CSS para tornar o efeito mais atraente;

Antes de olharmos para os códigos, você poderia dar uma olhada nesse [live demo](https://codepen.io/anon/pen/WOEpva) (assumindo que seu browser suporte transições).

Primeiro, nós criamos o menu utilizando apenas HTML

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Em seguida, nós implementamos o CSS para implementar o visual e aparência do nosso menu. As partes relevantes são serão mostrada aqui:

```css
a {
  color: #fff;
  background-color: #333;
  transition: all 1s ease-out;
}

a:hover,
a:focus {
  color: #333;
  background-color: #fff;
}
```

Este CSS estabelece a aparência do menu, com as cores de fundo e texto mudando quando o o ocorre o evento de {{cssxref(":hover")}} e estado de {{cssxref(":focus")}}.

## Exemplos JavaScript

> **Nota:** Cuidados devem ser tomados ao usar uma transição imediatamente após:
>
> - adding the element to the DOM using `.appendChild()`
> - removing an element's `display: none;` property.
>
> This is treated as if the initial state had never occurred and the element was always in its final state. The easy way to overcome this limitation is to apply a `window.setTimeout()` of a handful of milliseconds before changing the CSS property you intend to transition to.

### Using transitions to make JavaScript functionality smooth

Transitions are a great tool to make things look much smoother without having to do anything to your JavaScript functionality. Take the following example.

```html
<p>Click anywhere to move the ball</p>
<div id="foo"></div>
```

Using JavaScript you can make the effect of moving the ball to a certain position happen:

```js
var f = document.getElementById("foo");
document.addEventListener(
  "click",
  function (ev) {
    f.style.transform = "translateY(" + (ev.clientY - 25) + "px)";
    f.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
  },
  false,
);
```

With CSS you can make it smooth without any extra effort. Simply add a transition to the element and any change will happen smoothly:

```css
p {
  padding-left: 60px;
}

#foo {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

Você pode brincar um pouco aqui: <http://jsfiddle.net/9h261pzo/291/>

### Detectando o começo e a completude de uma transição

Você pode usar o evento {{event("transitionend")}} para detectar a uma animação que estava sendo executada chegou ao fim. Esse é o objeto {{domxref("TransitionEvent")}}, que possúi duas propriedades adicionadas além do objeto típico

- `propertyName`
  - : A string indicando o nome da propriedade CSS cuja transição será completada
- `elapsedTime`
  - : A float indicating the number of seconds the transition had been running at the time the event fired. This value isn't affected by the value of {{cssxref("transition-delay")}}.

As usual, you can use the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method to monitor for this event:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Você detecta o começo de uma transição usando {{event("transitionrun")}} (antes do delay) e {{event("transitionstart")}} (depois do delay):

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> **Nota:**: O evento `transitionend` não dispara se a transição é abortada antes de a transição ser concluída, porque o efeito é feito com {{cssxref("display")}}`: none`

## Especificações

| Especificação                            | Status                        | Comentário        |
| ---------------------------------------- | ----------------------------- | ----------------- |
| {{SpecName('CSS3 Transitions', '', '')}} | {{Spec2('CSS3 Transitions')}} | Definição Inícial |

## Veja Também

- The {{domxref("TransitionEvent")}} interface and the {{event("transitionend")}} event.
- [Utilizando animações css](/pt-BR/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
