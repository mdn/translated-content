---
title: CSS 트랜지션 사용하기
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
---

{{CSSRef}}

**CSS 트랜지션**은 CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공합니다. 속성 변경이 즉시 영향을 미치게 하는 대신, 그 속성의 변화가 일정 기간에 걸쳐 일어나도록 할 수 있습니다. 예를 들어, 여러분이 어떤 요소의 색상을 흰색에서 검은색으로 변경한다면, 변화는 대개 즉시 일어납니다. CSS 트랜지션을 이용하면, 모두 커스터마이즈 가능한 어떤 가속도 곡선을 따르는 시간 주기마다 변화가 일어납니다.

두 상태 사이의 트랜지션을 포함하는 애니메이션을 종종 암묵적 트랜지션이라고 부르는데, 이는 시작과 종료 상태 사이의 상태를 브라우저가 암묵적으로 정의하기 때문입니다.

![A CSS transition tells the browser to draw the intermediate states between the initial and final states, showing the user a smooth transitions.](/files/4529/TransitionsPrinciple.png)

CSS transitions는 여러분이 (명시적으로 목록을 작성해서) 어떤 속성을 움직이게 할지, (딜레이를 설정해서) 언제 애니메이션이 시작할지, (지속 시간을 설정해서) 트랜지션을 얼마나 지속할지, 그리고 (예를 들면, 선형이거나 초기 빠름, 종료 느림과 같은 타이밍 함수를 정의해서) 어떻게 트랜지션을 실행하는지 결정하게 합니다.

## 애니메이션 가능한 CSS 속성은?

웹 작성자는 어떤 속성을 어떤 방식으로 움직일지를 정의할 수 있습니다. 이것은 복잡한 트랜지션을 생성할 수 있게 합니다. 어떤 속성은 움직이게 하는 것이 말이 되지 않으므로, [애니메이션 가능한 속성의 집합](/ko/docs/CSS/CSS_animated_properties)은 유한한 집합으로 제한됩니다.

> **참고:** 노트: 애니메이션 가능한 속성의 집합은 변할 수 있습니다. 개발자는 주의해서 진행해야 합니다.

> **참고:** 또한, 종종 auto 값은 매우 복잡한 경우입니다. 스펙은 그러한 어떤 값에서 시작하고 끝나도록 움직이도록 요구하지 않습니다. Gecko 기반의 유저 에이전트처럼 몇몇은 이 요구사항을 구현했고, WebKit 기반의 유저 에이전트 같은 다른 것들은 덜 엄격합니다. 애니메이션에 auto를 사용하면 이는 브라우저와 버전에 따라 예상하지 못한 결과를 초래할 수 있으며 피해야 합니다.

### 다수의 애니메이션이 적용된 속성 예제

#### HTML 내용

```html
<body>
  <p>
    아래 박스는 width, height, background-color, transform을 위한 트랜지션을
    결합합니다. 박스 위에 마우스를 올려 속성들의 애니메이션을 보세요.
  </p>
  <div class="box"></div>
</body>
```

#### CSS 내용

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

{{ EmbedLiveSample('%EB%8B%A4%EC%88%98%EC%9D%98_%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%EC%9D%B4_%EC%A0%81%EC%9A%A9%EB%90%9C_%EC%86%8D%EC%84%B1_%EC%98%88%EC%A0%9C', '600', '300', '', 'Web/Guide/CSS/Using_CSS_transitions') }}

## 트랜지션 정의에 사용한 CSS 속성

CSS 트랜지션은 단축(shorthand) 속성 {{cssxref("transition")}}을 사용하여 제어합니다. 이것은 트랜지션을 설정하는 가장 좋은 방법입니다. 파라미터 목록의 길이가 싱크가 맞지 않는 것을 피하기가 더 쉬워지기 때문입니다. 싱크가 맞지 않으면 CSS를 디버그하는데 많은 시간을 들여야 해서 크게 좌절할 수 있습니다.

여러분은 아래의 서브 속성으로 트랜지션의 개별 컴포넌트를 제어할 수 있습니다:

**(이 트랜지션은 단지 예제를 목적으로 계속해서 루프를 돕니다. 그리고 CSS `transition` 들은 시작에서 종료까지 어떤 속성의 변화만을 시각화합니다. 그 루프를 시각화하려면 CSS `animation` 속성을 살펴보세요.)**

- {{ cssxref("transition-property") }}
  - : 트랜지션을 적용해야 하는 CSS 속성의 이름 혹은 이름들을 명시합니다. 여기에 나열한 속성만 트랜지션하는 동안 움직입니다. 또한, 다른 모든 속성에 대한 변화는 보통 때와 같이 즉시 일어납니다.
- {{ cssxref("transition-duration") }}

  - : 트랜지션이 일어나는 지속 시간을 명시합니다. 트랜지션 동안 모든 속성에 적용하는 단일 지속 시간을 명시하거나, 다른 주기로 각 속성이 트랜지션하게 하는 여러 지속 시간을 명시할 수 있습니다.

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

    {{EmbedLiveSample("duration_0_5s",275,150)}}

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

- {{ cssxref("transition-timing-function") }}

  - : ![](/files/3434/TF_with_output_gt_than_1.png)속성의 중간값을 계산하는 방법을 정의하는 함수를 명시합니다. *Timing functions*는 트랜지션의 중간값을 계산하는 방법을 결정합니다. 대부분의 [타이밍 함수](/ko/docs/CSS/timing-function)는 큐빅 베이지어(cubic bezier)를 정의하는 네 점에 의해 정의되므로 상응하는 함수의 그래프로 제공해서 명시할 수 있습니다. [Easing Functions Cheat Sheet](http://easings.net/)에서 이징(easing, 역자주: 시간에 따른 파라미터 값의 변화율을 명시하는 함수)을 선택할 수도 있습니다.

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

- {{ cssxref("transition-delay") }}

  - : 속성이 변한 시점과 트랜지션이 실제로 시작하는 사이에 기다리는 시간을 정의합니다.

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

다음과 같이 단축 CSS 문법을 사용합니다.

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## 트랜지션 완료 감지하기

트랜지션을 완료하면 발생하는 단일 이벤트가 있습니다. 모든 표준을 따르는 브라우저에서 그 이벤트는 `transitionend` 이며, `WebKit` 에서는 `webkitTransitionEnd` 입니다. 자세한 내용은 맨 아래의 호환성 테이블을 참고하세요. `transitionend` 이벤트는 두 속성을 제공합니다.

- `propertyName`
  - : 트랜지션을 완료한 CSS 속성의 이름을 나타내는 문자열
- `elapsedTime`
  - : 이벤트가 발생한 시점에 해당 트랜지션이 진행된 시간을 초로 나타내는 실수. 이 값은 {{ cssxref("transition-delay") }} 값에 영향을 받지 않습니다.

평소대로 {{ domxref("element.addEventListener()") }} 메소드를 사용하여 이 이벤트를 모니터링할 수 있습니다.

```js
el.addEventListener("transitionend", updateTransition, true);
```

> **참고:** **노트:** 트랜지션을 중단하면 `transitionend` 이벤트는 발생하지 않습니다. 트랜지션을 완료하기 전에 애니메이션하고 있는 속성의 값이 바뀌기 때문입니다.

## 속성값 목록이 다른 개수를 가진 경우

어떤 속성의 값 목록이 다른 것보다 짧다면, 일치되도록 그 값을 반복합니다. 예를 들면,

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

위는 아래와 같이 처리합니다.

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

비슷하게, 어떤 속성의 값 목록이 {{ cssxref("transition-property") }} 목록보다 길다면, 그것은 끝을 잘라냅니다. 그래서, 아래의 CSS가 있다면,

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

위를 아래와 같이 해석합니다.

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

## 간단한 예제

이 예제는 사용자가 마우스를 해당 요소 위에 올려놓고 애니메이션 효과가 시작할 때까지 2초의 딜레이가 있는 4초짜리 폰트 크기 트랜지션을 수행합니다.

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

## 메뉴 하이라이팅에 트랜지션 사용

CSS의 흔한 사용은 사용자가 마우스 커서를 메뉴 위에 올려놓을 때 그 메뉴 아이템을 하이라이팅하는 것입니다. 트랜지션을 사용하여 효과를 훨씬 더 매력적으로 만들 수 있습니다.

코드 스니핏(snippets, 역자주: 재활용이 가능한 소스 조각)을 보기 전에, (여러분의 브라우저가 트랜지션을 지원한다고 가정하면) [라이브 데모](/samples/cssref/transitions/sample2)를 보고 싶을지도 모르겠습니다. 그것이 사용한 [CSS를 직접](/samples/cssref/transitions/sample2/transitions.css) 볼 수도 있습니다.

우선 HTML을 사용하여 메뉴를 설정합니다.

```html
<div class="sidebar">
  <p><a class="menuButton" href="home">Home</a></p>
  <p><a class="menuButton" href="about">About</a></p>
  <p><a class="menuButton" href="contact">Contact Us</a></p>
  <p><a class="menuButton" href="links">Links</a></p>
</div>
```

그리고 우리 메뉴의 모습과 느낌(look and feel)을 CSS로 만듭니다. 관련 부분이 여기 있습니다.

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

이 CSS는 그 요소가 {{ cssxref(":hover") }} 상태일 때 배경과 텍스트 색상 모두를 변경하면서 메뉴의 모습을 설정합니다.

그 효과를 장황하게 설명하는 대신, [브라우저가 트랜지션을 지원한다면](/en/CSS/CSS_transitions#Browser_compatibility), [라이브 샘플을 살펴보세요](/samples/cssref/transitions/sample2).

## 트랜지션을 이용하여 JavaScript 기능 부드럽게 하기

트랜지션은 JavaScript 기능에 아무것도 하지 않고 훨씬 더 부드럽게 보이도록 하는 훌륭한 도구입니다. 아래 예제를 보세요.

```html
<p>Click anywhere to move the ball</p>
<div id="foo"></div>
```

JavaScript를 사용하여 공을 어떤 위치로 움직이는 효과가 일어나게 할 수 있습니다.

```js
var f = document.getElementById("foo");
document.addEventListener(
  "click",
  function (ev) {
    f.style.left = ev.clientX - 25 + "px";
    f.style.top = ev.clientY - 25 + "px";
  },
  false,
);
```

추가 노력 없이 CSS로 이것을 부드럽게 할 수 있습니다. 단순히 그 요소에 트랜지션을 추가하면 어떠한 변화도 부드럽게 일어날 것입니다.

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
  transition: all 1s;
}
```

여기에서 확인할 수 있습니다. <http://jsfiddle.net/RwtHn/5/>

## 명세

{{Specifications}}

## 같이 보기

- [CSS3 Dock Menu](http://techstream.org/Web-Design/Dock-Menu-with-CSS3) using CSS transitions
- The {{ domxref("TransitionEvent") }} interface and the [`transitionend`](/ko/docs/Mozilla_event_reference/transitionend) event.
