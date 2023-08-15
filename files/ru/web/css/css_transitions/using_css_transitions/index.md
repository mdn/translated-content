---
title: Использование CSS переходов
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
---

{{CSSref}}{{SeeCompatTable}}

**CSS transitions** предоставляют способ контролировать скорость анимации, при изменении CSS-свойств. Вместо того, чтобы свойство применилось сразу, вы можете сделать это действие происходящим в течение какого-то момента времени. Например, если вы смените цвет элемента с белого на чёрный, изменение произойдёт моментально, а вот с CSS transitions, изменения произойдут за временные интервалы, следующих кривой ускорения, все из которых могут быть настроены.

Анимации, составляющие переход между двумя состояниями, часто называют _неявными переходами_, так как промежуточные состояния в период между начальным и конечным состоянием неявно определяются браузером.![A CSS transition tells the browser to draw the intermediate states between the initial and final states, showing the user a smooth transitions.](/files/4529/TransitionsPrinciple.png)

CSS переходы позволяют вам решить какие свойства нужно анимировать (перечислением их явно), когда анимация начнётся (установкой задержки), как долго переход будет выполняться (установкой продолжительности), а также как она будет запущена (определением функции по времени, например линейно или быстро в начале, медленно в конце).

> **Примечание:** CSS переходы могут использоваться без префиксов, однако спецификация только недавно достигла стабильности, префиксы по-прежнему необходимы для браузеров на WebKit. Они также необходимы для поддержки старых версий браузеров (таких как: Firefox 15, Opera 12 и более ранних). Таблица совместимости приведена внизу страницы с ещё большим количеством информации.

## Какие CSS-свойства анимируются?

Разработчик может определить какое свойство и как анимировать. Это позволяет создавать сложные переходы. Так как некоторые свойства не имеет смысла анимировать, перечень [доступных для анимирования свойств](/ru/docs/CSS/CSS_animated_properties) ограничен определённым набором.

> **Примечание:** Замечание: Перечень анимируемых свойств может меняться по мере изменения спецификации.

> **Примечание:** Значение свойства `auto` является сложным случаем. Спецификация не рекомендует анимировать в значение `auto` и из значения `auto`. Браузеры, основанные на Gecko, исполняют это требование в точности, а основанные на WebKit не так строго. Использование переходов с `auto` следует избегать, так как это может привести к непредсказуемым результатам, в зависимости от браузера и его версии.

> **Примечание:** Необходимо также соблюдать осторожность при использовании переходов сразу после добавления элемента в DOM с помощью `.appendChild()` или удаления его `display: none; свойства`. Это выглядит, как будто никогда не происходило начальное состояние, а элемент всегда был в конечном состоянии. Самый простой способ преодолеть это ограничение - применить `window.setTimeout()` c некоторым количеством миллисекунд до изменения CSS-свойства, которое вы собираетесь анимировать.

### Пример анимирования нескольких свойств

#### HTML

```html
<body>
  <p>
    К блоку ниже применятся анимации для свойств: width, height,
    background-color, transform. Наведите на него, чтоб увидеть, как они
    анимируются
  </p>
  <div class="box"></div>
</body>
```

#### CSS

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

{{ EmbedLiveSample('Пример_анимирования_нескольких_свойств', 600, 300) }}

## CSS-свойства, определяющие переходы

CSS переходы контролируются свойством {{cssxref("transition")}}. Это лучший способ их настроить, позволяет избежать длинных свойств и их несоответствий, которые могут сделать отладку CSS долгой.

Можно контролировать определённые параметры перехода следующими подсвойствами:

**(Заметьте, что циклы переходов бесконечны только для наших примеров; CSS `transition`s только анимируют смену свойства. Если вам нужно визуализировать этот цикл, обратите внимание на свойство [`animation`](/ru/docs/CSS/animation).)**

- {{cssxref("transition-property")}}
  - : Указывает имя или имена свойств, чьи переходы должны анимироваться. Только свойства, указанные здесь, анимируются в переходах; изменение других свойств будет происходить обычным образом.
- {{cssxref("transition-duration")}}

  - : Определяет время происхождения перехода. Можно указать время анимирования всех свойств перехода сразу или для каждого свойства в отдельности. `transition-duration: 0.5s`

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

  - : ![](/files/3434/TF_with_output_gt_than_1.png)Определяет функцию, указывающую, как вычисляются промежуточные значения свойств. Вы также можете выбрать ослабления от функции замедления Шпаргалка.Большинство [функций времени](/ru/docs/CSS/timing-function) может быть определено графиком соответствующей функции, образующей четырьмя точками кривую Безье. Также можете выбрать функцию отсюда [Easing Functions Cheat Sheet](http://easings.net/).

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
    transition-property: width height background-color font-size left top color;
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
    transition-property: width height background-color font-size left top color;
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
    transition-property: width height background-color font-size left top color;
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
    transition-property: width height background-color font-size left top color;
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
    transition-property: width height background-color font-size left top color;
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
    transition-property: width height background-color font-size left top color;
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
    transition-property: width height background-color font-size left top color;
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
    transition-property: width height background-color font-size left top color;
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

  ```

  ```

- {{cssxref("transition-delay")}}

  - : Определяет как много должно пройти времени, перед тем как начнётся переход.

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

Короткая запись синтаксиса:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Определение завершения перехода

Есть событие, срабатывающее, когда переход завершён. Во всех браузерах, совместимых со стандартами, есть событие `transitionend`, в WebKit есть `webkitTransitionEnd`. Смотрите таблицу поддержки браузерами для дополнительной информации. У `transitionend` есть 2 свойства:

- `propertyName`
  - : Строка, показывающая изменение какого свойства завершено.
- `elapsedTime`
  - : Число с точкой, какое количество времени переход выполнялся, до того как запустилось событие. Это значение не равно свойству {{cssxref("transition-delay")}}.

Как обычно, используйте метод {{domxref("element.addEventListener()")}}, чтобы следить за этим событием:

```js
el.addEventListener("transitionend", updateTransition, true);
```

> **Примечание:** Событие `transitionend` не произойдёт, когда переход был прерван до его завершения, например, если установили {{cssxref("display")}}`: none` или значение анимируемого свойства изменилось`.`

## Когда у списков значений свойств разные длины

Если любой список свойств короче, чем другие, его значения повторяются, чтобы сделать его длину как и у других. Например:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Это рассматривается, как если бы это было:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

Похожим образом, если какой-то список свойств длиннее, чем у {{cssxref("transition-property")}}, он обрезается:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

Будет интерпретировано как:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

## Простой пример

Пример 4 секунды выполняет плавное изменение шрифта за 2 секунды, после того как пользователь навёл мышь на элемент:

```css
#delay1 {
  position: relative;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  font-size: 14px;
}

#delay1:hover {
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  font-size: 36px;
}
```

## Использование переходов для подсвечивания меню

Они часто используются для подсвечения элементов в меню при наведении мыши. С помощью переходов легко сделать такой эффект более привлекательным.

Перед тем, как вы посмотрите на код, возможно захотите [посмотреть на живое демо](https://codepen.io/anon/pen/WOEpva) (считаем, что ваш браузер поддерживает переходы). Также может [посмотреть на CSS](/samples/cssref/transitions/sample2/transitions.css), используемый этим примером.

Сначала зададим меню в HTML:

```html
<div class="sidebar">
  <p><a class="menuButton" href="home">Home</a></p>
  <p><a class="menuButton" href="about">About</a></p>
  <p><a class="menuButton" href="contact">Contact Us</a></p>
  <p><a class="menuButton" href="links">Links</a></p>
</div>
```

Теперь напишем CSS для нашего меню:

```css
.menuButton {
  position: relative;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  text-align: left;
  background-color: grey;
  left: 5px;
  top: 5px;
  height: 26px;
  color: white;
  border-color: black;
  font-family: sans-serif;
  font-size: 20px;
  text-decoration: none;
  box-shadow: 2px 2px 1px black;
  padding: 2px 4px;
  border: solid 1px black;
}

.menuButton:hover {
  position: relative;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  background-color: white;
  color: black;
  box-shadow: 2px 2px 1px black;
}
```

Этот CSS устанавливает внешний вид меню, с фоном и цветом текста, изменяющимися при наведении ({{cssxref(":hover")}}).

Вместо описания эффекта можете [посмотреть на живой пример](/samples/cssref/transitions/sample2), если ваш [браузер поддерживает переходы](#Browser_compatibility).

## Использование переходов, чтобы сделать JavaScript функциональность плавной

Переходы - крутая вещь, чтоб сделать вид вещей плавней, без надобности что-то делать в вашей JS функциональности. Зацените следующий пример:

```html
<p>Кликните куда-нибудь, чтобы подвинуть шар</p>
<div id="foo"></div>
```

Используя JavaScript, добиваемся эффекта перемещения шара на определённую позицию:

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

C помощью CSS сглаживаем эффект без дополнительных усилий. Просто добавляем переход и любое изменение свойств происходит плавно:

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

Можете поиграть с этим здесь: <http://jsfiddle.net/9h261pzo/291/>

## Спецификации

| Specification                            | Status                        | Comment            |
| ---------------------------------------- | ----------------------------- | ------------------ |
| {{SpecName('CSS3 Transitions', '', '')}} | {{Spec2('CSS3 Transitions')}} | Initial definition |

## Смотрите также

- [Нижнее меню](http://techstream.org/Web-Design/Dock-Menu-with-CSS3) с использованием CSS переходов
- Интерфейс {{domxref("TransitionEvent")}} и событие {{event("transitionend")}}.
- [Использование CSS-анимаций](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
