---
title: EventTarget.addEventListener()
slug: Web/API/EventTarget/addEventListener
tags:
  - Method
  - Reference
browser-compat: api.EventTarget.addEventListener
translation_of: Web/API/EventTarget/addEventListener
---
{{APIRef("DOM")}}

{{domxref("EventTarget")}} 인터페이스의 **`addEventListener()`** 메서드는 지정한 유형의 이벤트를 대상이 수신할 때마다 호출할 함수를 설정합니다.

일반적인 대상은 {{domxref("Element")}}, {{domxref("Document")}}, {{domxref("Window")}}지만, {{domxref("XMLHttpRequest")}}와 같이 이벤트를 지원하는 모든 객체가 대상이 될 수 있습니다.

> **참고:** 이벤트 수신기는 다른 방법으로도 추가할 수 있지만, `addEventListener()` 메서드를 사용해서 다음의 장점을 누리는 것이 좋습니다.
> - 하나의 이벤트 유형에 대해 다수의 수신기를 부착할 수 있습니다. 라이브러리, JavaScript 모듈 등, 다른 라이브러리나 확장 코드와 충돌하지 않고 동작해야 하는 코드에 특히 중요한 점입니다.
> - `onXYZ` 속성과 달리, 수신기가 어떤 이벤트 전파 단계(캡처링 vs. 버블링)에 동작해야 하는지 조절할 수 있습니다.
> - HTML과 SVG 요소가 아니어도 이벤트 대상이라면 사용할 수 있습니다.

`addEventListener()` 메서드는 지정한 이벤트 유형의{{domxref("EventTarget")}} 수신기 리스트에 {{domxref("EventListener")}}를 구현한 함수 또는 객체를 추가하는 방식으로 동작합니다. 추가하려는 함수 또는 객체가 이미 수신기 리스트에 포함되어 있는 경우에는 추가하지 않으므로 수신기는 중복으로 등록되지 않습니다.

추가한 수신기를 반드시 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}로 직접 제거해야 하는 것은 아닙니다.

> **참고:** 두 개의 익명 함수는, 함수 본문이 동일하더라도, `addEventListener()`에 있어 항상 서로 다른 함수로 취급되므로 둘을 동시에 한 대상의 이벤트 수신기로 부착할 수 있습니다.
>
> 사실, 본문의 내용이 항상 동일하고 불변하더라도, 그 본문을 사용해 정의하는 각각의 익명 함수는 항상 서로를 구별할 수 있는 별도의 함수입니다. **반복문 내에서 정의하는 경우에도 마찬가지입니다.**
>
> 이와 같이 반복적으로 익명 함수를 정의하게 되면 문제가 될 수 있습니다. 아래의 [메모리 문제](#메모리_문제)를 확인하세요.

{{domxref("EventTarget")}}에 부착된 이벤트 수신기가 이벤트 처리 중에 새로운 수신기를 등록하더라도, 현재 처리 중인 이벤트로는 그 수신기가 발동하지 않습니다. 그러나 버블링 단계처럼 이후의 이벤트 처리 흐름에서는 발동할 수 있습니다.

## 구문

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

### 매개변수

- `type`
  - : 수신할 [이벤트 유형](/ko/docs/Web/Events)을 나타내는 대소문자 구분 문자열입니다.
- `listener`
  - : 지정한 이벤트({{domxref("Event")}} 인터페이스를 구현한 객체)를 수신할 객체입니다. {{domxref("EventListener")}} 인터페이스를 구현하는 객체거나, JavaScript [함수](/ko/docs/Web/JavaScript/Guide/Functions)여야 합니다. [이벤트 수신기 콜백](#이벤트_수신기_콜백)에서 콜백 자체에 대한 정보를 더 알아보세요.
- `options` {{optional_inline}}
  - : 이벤트 수신기의 특징을 지정할 수 있는 객체입니다. 가능한 옵션은 다음과 같습니다.
    - `capture`
      - : 이벤트 대상의 DOM 트리 하위에 위치한 자손 `EventTarget`으로 이벤트가 전달되기 전에, 이 수신기가 먼저 발동돼야 함을 나타내는 불리언 값입니다.
    - `once`
      - : 수신기가 최대 한 번만 동작해야 함을 나타내는 불리언 값입니다. `true`를 지정할 경우, 수신기가 발동한 후에 스스로를 대상에서 제거합니다.
    - `passive`
      - : `true`일 경우, 이 수신기 내에서 절대 {{domxref("Event.preventDefault", "preventDefault()")}}를 호출하지 않을 것임을 나타내는 불리언 값입니다. 이 값이 `true`인데 수신기가 `preventDefault()`를 호출하는 경우, 사용자 에이전트는 콘솔에 경고를 출력하는 것 외에 아무런 동작도 하지 않습니다. [패시브 수신기로 스크롤 성능 향상](#패시브_수신기로_스크롤_성능_향상)에서 이 값에 대해 더 알아보세요.
    - `signal`
      - : {{domxref("AbortSignal")}}입니다. 지정한 `AbortSignal` 객체의 {{domxref("AbortController.abort", "abort()")}} 메서드를 호출하면 이 수신기가 제거됩니다.

- `useCapture` {{optional_inline}}

  - : 이벤트 대상의 DOM 트리 하위에 위치한 자손 `EventTarget`으로 이벤트가 전달되기 전에, 이 수신기가 먼저 발동돼야 함을 나타내는 불리언 값입니다. 캡처 모드인 수신기는 DOM 트리의 위쪽으로 버블링 중인 이벤트에 의해선 발동하지 않습니다. 이벤트 버블링과 캡처링은 조상-자손 관계를 가진 두 개의 요소가 동일한 이벤트 유형에 대한 수신기를 가지고 있을 때, 두 요소에 이벤트가 전파되는 방법을 말합니다. 이벤트 전파 모드에 따라 두 요소 중 이벤트를 먼저 수신하는 쪽이 달라집니다. [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)와 [JavaScript Event 순서](https://www.quirksmode.org/js/events_order.html#link4)에서 자세한 설명을 확인하세요. 기본 값은 `false`입니다.

    > **참고:** 이벤트의 대상에 부착된 수신기의 경우 캡처링도, 버블링 단계도 아닌 별도의 단계에 발동합니다. 
    > 캡처 모드의 수신기는 캡처 모드가 아닌 다른 모든 수신기보다 앞서 발동합니다.

- `wantsUntrusted` {{optional_inline}} {{Non-standard_inline}}
  - : Firefox(Gecko)에서만 사용할 수 있습니다. `true`일 경우 수신기가 웹 콘텐츠에서 발송하는 합성 이벤트를 수신할 수 있습니다. (기본 값은 브라우저 {{glossary("chrome", "크롬")}}에서는 `false`, 일반 웹 페이지에서는 `true`입니다.) 브라우저 확장, 또는 브라우저 자체 코드에서 유용하게 사용할 수 있습니다.

### 반환 값

없음.

## 사용 일람

### 이벤트 수신기 콜백

`addEventListener()`에 지정하는 이벤트 수신기는 콜백 함수거나, (콜백으로 작동할 {{domxref("EventListener.handleEvent", "handleEvent()")}} 메서드를 가진) {{domxref("EventListener")}} 인터페이스를 구현하는 객체입니다.

콜백 함수 자체는 `handleEvent()` 메서드와 같은 매개변수, 같은 반환 값을 가집니다. 즉, 콜백 함수는 발생한 이벤트를 설명하는 {{domxref("Event")}} 기반 객체를 유일한 매개변수로 받고, 아무것도 반환하지 않습니다.

다음은 {{event("fullscreenchange")}}와 {{event("fullscreenerror")}} 두 유형의 이벤트를 동시에 처리할 수 있는 이벤트 처리 콜백의 예제입니다.

```js
function eventHandler(event) {
  if (event.type == 'fullscreenchange') {
    /* 전체화면 여부 변화 처리 */
  } else /* fullscreenerror */ {
    /* 전체화면 오류 처리 */
  }
}
```

### 옵션 지원을 안전하게 감지하기

과거 DOM 명세에선 `addEventListener()`의 세 번째 매개 변수가 캡처 여부를 나타내는 불리언 값이었습니다. 그러나 시간이 지남에 따라 더 많은 옵션이 필요하다는 것이 분명해졌습니다. 메서드 매개변수를 계속 늘리면 선택적인 옵션을 나타내는 매개변수 처리가 어려워질 것이므로, 이제 세 번째 매개변수는 불리언 값이 아니라 이벤트 수신기의 다양한 성질을 설명하는 옵션 객체가 됐습니다.

구형 브라우저에서는 (그리고 일부 상대적으로 덜 오래된 브라우저에서도) 여전히 세 번째 매개변수에 오로지 불리언 값만 기대하고 있으므로 브라우저간 차이점을 처리할 수 있는 코드를 작성할 필요가 있습니다. 필요한 옵션에 대한 기능 감지 코드를 사용하세요.

예를 들어, `passive` 옵션의 지원 여부를 알아보고 싶다고 가정하겠습니다.

```js
let passiveSupported = false;

try {
  const options = {
    get passive() { // 브라우저가 passive 속성에 접근하려고 하면 이 함수가 실행됨
      passiveSupported = true;
      return false;
    }
  };

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch(err) {
  passiveSupported = false;
}
```

위의 코드는 `passive` 속성에 대한 접근자 함수를 가진 `options` 객체를 생성하고, `passive` 접근자는 자신이 호출되는 순간 `passiveSupported` 플래그 변수를 `true`로 설정합니다. 이 말은, `passiveSupported`가 `true`라면 브라우저가 `options` 객체의 `passive` 속성을 확인한다는 뜻이고, `false`면 확인하지 않는다는 뜻입니다. 그 아래에서는 `addEventListener()`를 사용해 가짜 이벤트 처리기를 등록, 브라우저가 세 번째 매개변수 객체를 인식할 수 있는지 확인하고, `removeEventListener()`로 정리합니다. (이벤트 수신기는 발동할 일이 없으므로 `null`을 지정해도 무방합니다.)

이 방법으로 모든 옵션에 대한 지원 여부를 확인할 수 있습니다. 위 코드와 비슷하게, 확인하려는 옵션에 대한 접근자를 추가하기만 하면 됩니다.

그 후, 실제로 플래그를 사용할 땐 아래와 같이 할 수 있습니다.

```js
someElement.addEventListener("mouseup", handleMouseUp, passiveSupported
                               ? { passive: true } : false);
```

위 코드에서는 {{event("mouseup")}} 이벤트에 대한 수신기를 `someElement` 요소에 추가하고 있습니다. 세 번째 매개변수를 살펴보면, 만약 `passiveSupported`가 `true`일 경우 `passive`를 `true`로 지정한 옵션 객체를 지정하고 있으며, `passiveSupported`가 `false`일 경우, 세 번째 매개변수는 불리언 값이어야 할 것이므로 `useCapture`에 대한 값인 `false`를 지정하는 모습입니다.

직접 알아내는 대신 [Modernizr](https://modernizr.com/docs)나 [Detect It](https://github.com/rafrex/detect-it) 등 서드파티 라이브러리를 사용해 기능 감지를 할 수도 있습니다.

[Web Incubator Community Group](https://wicg.github.io/admin/charter.html)의 [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection)에 대한 글에서 더 자세한 정보를 알아보세요.

## 예제

### 간단한 수신기 추가하기

이 예제는 `addEventListener()`를 사용하여 요소에 대한 마우스 클릭을 감지하는 방법을 보여줍니다.

#### HTML

```html
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// t2의 콘텐츠를 바꾸는 함수
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// 표에 이벤트 수신기 추가
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

위 코드의 `modifyText()`가 `addEventListener()`로 추가하는 `click` 이벤트의 수신기입니다. 표 요소의 어디를 클릭하든, 클릭 이벤트는 버를링을 통해 전파되다가 `modifyText()`를 발동하게 됩니다.

#### 결과

{{EmbedLiveSample('간단한_수신기_추가하기')}}

### 중단 가능한 수신기 추가하기

이 예제는 {{domxref("AbortSignal")}}로 중단할 수 있는 `addEventListener()`의 모습을 보입니다.

#### HTML

```html
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// 표에 중단 가능한 수신기 추가
const controller = new AbortController();
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal } );

// t2의 콘텐츠를 바꾸는 함수
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
    controller.abort(); // 값이 "three"가 되면 수신기 제거
  }
}
```

이 예제는 앞선 첫 번째 예제를 수정해서, 표의 두 번째 행 내용이 "three"가 되면 `addEventListener()`의 옵션에 지정한 {{domxref("AbortSignal")}}의 `abort()`를 호출합니다. 그 결과로 클릭 이벤트 수신기가 해제되고, 두 번째 행의 내용은 "three"에서 바뀌지 않게 됩니다.

#### 결과

{{EmbedLiveSample('중단_가능한_수신기_추가하기')}}

### 익명 함수와 이벤트 수신기

여기선 익명 함수를 사용해 이벤트 수신기에 매개변수를 지정하는 방법을 보입니다.

#### HTML

```html
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// t2의 콘텐츠를 바꾸는 함수
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// 표에 이벤트 수신기 추가
const el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("four")}, false);
```

`addEventListener()` 호출을 살펴보면, 실제로 이벤트에 반응할 `modifyText()` 함수에 매개변수를 제공하는 코드가 익명 함수에 의해 캡슐화된 모습을 볼 수 있습니다.

#### 결과

{{EmbedLiveSample('익명_함수와_이벤트_수신기')}}

### 화살표 함수와 이벤트 수신기

이 예제는 화살표 함수를 사용해서 간단한 이벤트 수신기를 구현하는 모습을 보입니다.

#### HTML

```html
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// t2의 콘텐츠를 바꾸는 함수
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// 화살표 함수를 사용한 이벤트 수신기를 표에 추가
const el = document.getElementById("outside");
el.addEventListener("click", () => { modifyText("four"); }, false);
```

#### 결과

{{EmbedLiveSample('화살표_함수와_이벤트_수신기')}}

화살표 함수와 익명 함수는 비슷하지만, `this` 바인딩에 차이가 있다는 사실에 주의해야 합니다. 익명 함수(와 다른 모든 전통적인 JavaScript 함수)는 스스로의 `this` 바인딩을 생성하지만, 화살표 함수는 자신을 포함하고 있는 함수의 `this` 바인딩을 상속합니다.

따라서 화살표 함수를 포함한 함수의 변수와 상수를 이벤트 처리 코드에서도 사용할 수 있습니다.

### 옵션 객체 사용하기

#### HTML

```html
<div class="outer">
  바깥, 일회용 & 다회용
  <div class="middle" target="_blank">
    중간, 캡처 & 비 캡처
    <a class="inner1" href="https://www.mozilla.org" target="_blank">
      내부 1, 패시브 & (허용되지 않은) preventDefault
    </a>
    <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
      내부 2, 비 패시브 & preventDefault (새 페이지가 열리지 않음)
    </a>
  </div>
</div>
```

#### CSS

```css
.outer, .middle, .inner1, .inner2 {
  display: block;
  width:   520px;
  padding: 15px;
  margin:  15px;
  text-decoration: none;
}
.outer {
  border: 1px solid red;
  color:  red;
}
.middle {
  border: 1px solid green;
  color:  green;
  width:  460px;
}
.inner1, .inner2 {
  border: 1px solid purple;
  color:  purple;
  width:  400px;
}
```

#### JavaScript

```js
const outer  = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const inner1 = document.querySelector('.inner1');
const inner2 = document.querySelector('.inner2');

const capture = {
  capture : true
};
const noneCapture = {
  capture : false
};
const once = {
  once : true
};
const noneOnce = {
  once : false
};
const passive = {
  passive : true
};
const nonePassive = {
  passive : false
};

outer.addEventListener('click', onceHandler, once);
outer.addEventListener('click', noneOnceHandler, noneOnce);
middle.addEventListener('click', captureHandler, capture);
middle.addEventListener('click', noneCaptureHandler, noneCapture);
inner1.addEventListener('click', passiveHandler, passive);
inner2.addEventListener('click', nonePassiveHandler, nonePassive);

function onceHandler(event) {
  alert('바깥, 일회용');
}
function noneOnceHandler(event) {
  alert('바깥, 다회용, 기본 값');
}
function captureHandler(event) {
  //event.stopImmediatePropagation();
  alert('중간, 캡처');
}
function noneCaptureHandler(event) {
  alert('중간, 비 캡처, 기본 값');
}
function passiveHandler(event) {
  // 패시브 수신기 내에서는 preventDefault 사용 불가
  event.preventDefault();
  alert('내부 1, 패시브, 새 페이지 열림');
}
function nonePassiveHandler(event) {
  event.preventDefault();
  //event.stopPropagation();
  alert('내부 2, 비 패시브, 기본 값, 새 페이지 열림');
}
```

#### 결과

바깥과 중간, 내부 컨테이너를 반복해서 클릭해 각각의 옵션이 어떻게 동작하는지 확인해보세요.

{{EmbedLiveSample('옵션_객체_사용하기', 600, 310)}}

`options` 객체에 특정 값을 지정하기 전에, 옵션의 지원 범위는 브라우저와 브라우저 버전에 따라 다르므로 브라우저가 해당 옵션을 지원하는지 먼저 확인하는 것이 좋습니다. [옵션 지원을 안전하게 감지하기](#옵션_지원을_안전하게_감지하기)에서 방법을 알아보세요.

## 기타 일람

### 이벤트 수신기 내부의 this 값

비슷한 요소 다수의 이벤트를 모두 처리할 수 있는 범용 수신기를 정의하는 경우, 부착된 요소의 참조를 가져와야 하는 상황이 종종 발생합니다.

`addEventListener()`를 사용해 요소에 수신기를 부착하게 되면 수신기 내부의 {{jsxref("Operators/this", "this")}} 값은 대상 요소를 가리키게 되며, 이는 수신기가 매개변수로 받게 되는 이벤트 객체의 `currentTarget` 속성과 같습니다.

```js
my_element.addEventListener('click', function (e) {
  console.log(this.className)           // my_element의 className 기록
  console.log(e.currentTarget === this) // `true` 기록
})
```

다만 [화살표 함수는 스스로의 `this` 맥락을 가지지 않는다는 점](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)을 기억해야 합니다.

```js
my_element.addEventListener('click', (e) => {
  console.log(this.className)           // 경고: `this`가 `my_element`가 아님
  console.log(e.currentTarget === this) // `false` 기록
})
```

HTML 소스 코드에서 ({{domxref("GlobalEventHandlers.onclick", "onclick")}} 특성 등을 사용해) 요소의 이벤트 수신기를 지정하는 경우, 이벤트 수신기 특성 내의 JavaScript 코드는 가상의 함수로 감싸인 후, 감싼 함수의 `this`를 `addEventListener()`와 같은 방식으로 바인딩하는 것으로 생각할 수 있습니다. 즉, 해당 특성의 값에서 등장하는 `this`는 특성이 속한 요소를 가리킵니다.

```html
<table id="my_table" onclick="console.log(this.id);"><!-- `this`가 표를 가리키므로 'my_table'을 기록함 -->
  ...
</table>
```

참고로 이벤트 수신기 특성 안에서 호출한 함수의 `this`는 [표준 규칙](/ko/docs/Web/JavaScript/Reference/Operators/this)을 따라가며, 아래 코드로 확인할 수 있습니다.

```html
<script>
  function logID() { console.log(this.id); }
</script>
<table id="my_table" onclick="logID();"><!-- 호출 시, logID의 `this`는 전역 객체를 가리키게 됨 -->
  ...
</table>
```

`logID()` 내의 `this`는 전역 객체 {{domxref("Window")}}의 참조가 됩니다. (단, [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서는 `undefined`)

#### bind()로 this 설정하기

{{jsxref("Function.prototype.bind()")}} 메서드를 사용하면 모든 후속 호출의 `this` 맥락을 고정할 수 있으므로, `this`의 값이 호출 위치에 따라 달라져서 정확히 파악하기 힘들 때 발생하는 문제를 먼저 방지할 수 있습니다. 다만, 바인드한 함수 참조를 어딘가에 보관해놔야 나중에 수신기를 제거할 수 있습니다.

다음은 `bind()`를 사용하는 수신기와 사용하지 않는 수신기의 모습입니다.

```js
const Something = function(element) {
  // this는 Something 인스턴스
  this.name = 'Something Good';
  this.onclick1 = function(event) {
    console.log(this.name); // undefined, this는 element임
  };

  this.onclick2 = function(event) {
    console.log(this.name); // 'Something Good', this는 Something 인스턴스
  };

  // bind가 onclick2의 this 맥락을 고정함
  this.onclick2 = this.onclick2.bind(this);

  element.addEventListener('click', this.onclick1, false);
  element.addEventListener('click', this.onclick2, false);
}
const s = new Something(document.body);
```

다른 방법으로는 {{domxref("EventListener")}} 인터페이스의 `handleEvent()` 메서드를 구현해 모든 이벤트에 대응하는 것입니다.

```js
const Something = function(element) {
  // this는 Something 인스턴스
  this.name = 'Something Good';
  this.handleEvent = function(event) {
    console.log(this.name); // 'Something Good', this는 Something 인스턴스로 바인딩 됨
    switch(event.type) {
      case 'click':
        // 다른 코드...
        break;
      case 'dblclick':
        // 다른 코드...
        break;
    }
  };

  // 수신기 매개변수가 this.handleEvent가 아니라 this인 것에 주의
  element.addEventListener('click', this, false);
  element.addEventListener('dblclick', this, false);

  // 수신기 제거도 가능
  element.removeEventListener('click', this, false);
  element.removeEventListener('dblclick', this, false);
}
const s = new Something(document.body);
```

`this` 참조를 처리할 수 있는 또 다른 방법으로는 객체의 필드에 접근해야 하는 메서드를 익명 함수로 감싸서 제공하는 것이 있습니다.

```js
class SomeClass {

  constructor() {
    this.name = 'Something Good';
  }

  register() {
    const that = this;
    window.addEventListener('keydown', function(e) { that.someMethod(e); });
  }

  someMethod(e) {
    console.log(this.name);
    switch(e.keyCode) {
      case 5:
        // 다른 코드...
        break;
      case 6:
        // 다른 코드...
        break;
    }
  }

}

const myObject = new SomeClass();
myObject.register();
```

### 이벤트 수신기 안팎으로 데이터 옮기기

이벤트 수신기에 데이터를 제공하는 것은 물론, 수신기 실행이 끝난 후 결과를 가져오는 것 또한 매우 어려워보일 것입니다. 이벤트 수신기는 유일한 매개변수로 [이벤트 객체](/ko/docs/Learn/JavaScript/Building_blocks/Events#이벤트_객체)만 받으며, 반환하는 모든 값은 무시됩니다. 그러면 어떻게 수신기에 데이터를 전달하거나, 그 밖으로 데이터를 가져올 수 있을까요? 몇 가지 좋은 방법을 소개합니다.

#### this로 이벤트 수신기에 데이터 전달하기

[위에서 언급했듯](#bind로_this_설정하기), `Function.prototype.bind()`를 사용하면 `this` 참조 변수를 통해 수신기에 값을 전달할 수 있습니다.

```js
const myButton = document.getElementById('my-button-id');
const someString = 'Data';

myButton.addEventListener('click', function () {
  console.log(this); // 예상 값: 'Data'
}.bind(someString));
```

이 방법은 수신기가 발동된 대상을 알 필요가 없을 때 적합하며, 매개변수를 통해 값을 제공하는 것과 크게 다르지 않은 방법을 제공한다는 점이 장점입니다.

#### 바깥 스코프 속성으로 이벤트 수신기에 데이터 전달하기

바깥 스코프에서 `const`, `let`을 사용해 변수를 선언할 경우, 해당 스코프 안의 모든 함수에서도 해당 변수에 접근할 수 있습니다([함수](/ko/docs/Glossary/Function#여러_함수_형식들) 문서에서 바깥/내부 함수에 대한 정보를, [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var#암묵적인_전역변수와_외부_함수_범위) 문서에서 변수 스코프에 대한 정보를 읽어보세요). 따라서, 이벤트 수신기가 바깥 데이터에 접근할 수 있는 가장 쉬운 방법은, 그 데이터를 이벤트 수신기가 선언된 스코프에서 접근할 수 있도록 하는 것입니다.

```js
const myButton = document.getElementById('my-button-id');
let someString = 'Data';

myButton.addEventListener('click', function() {
  console.log(someString);  // 예상 값: 'Data'

  someString = 'Data Again';
});

console.log(someString);  // 예상 값: 'Data' ('Data Again'을 출력하지 않음)
```

> **참고:** 내부 스코프에서 바깥 스코프의 `const`와 `let` 변수에 접근할 수는 있지만, 수신기 내에서 변수의 값을 바꾸더라도 바깥 스코프에 그 변경점이 나타날 것으로 생각해서는 안됩니다. 이벤트 수신기가 발동하는 시점에는 이미 수신기가 속한 스코프가 실행을 마쳤을 것이기 때문입니다.

#### 객체를 사용해 이벤트 수신기 안팎으로 데이터 전달하기

자신을 참조하는 변수가 메모리에 남아있는 한, 객체는 메모리에서 사라지지 않습니다. 이 성질에 더해, 객체는 속성을 갖는다는 점, 그리고 참조로 전달된다는 점을 활용하면 스코프 안팎에서 데이터를 교환하는 창구로 객체를 이용할 수 있습니다.

> **참고:** JavaScript에서는 함수도 사실 객체입니다. 따라서 함수도 속성을 가질 수 있고, 메모리에 유지되는 변수에 할당한 경우 실행 후에도 메모리에서 해제되지 않습니다.

객체를 참조하는 변수가 메모리에 존재하는 한 객체 속성을 사용해 메모리에 데이터를 저장할 수 있으니, 이벤트 수신기 내부로 데이터를 전달할 때도 사용할 수 있고, 이벤트 처리기 실행이 끝난 후 변화된 데이터를 가져와야 할 때도 사용할 수 있습니다. 아래 코드를 살펴보세요.

```js
const myButton = document.getElementById('my-button-id');
const someObject = {aProperty: 'Data'};

myButton.addEventListener('click', function() {
  console.log(someObject.aProperty);   // 예상 값: 'Data'

  someObject.aProperty = 'Data Again'; // 값 변경
});

window.setInterval(function() {
  if (someObject.aProperty === 'Data Again') {
    console.log('Data Again: True');
    someObject.aProperty = 'Data'; // 다음 이벤트 실행을 기다리기 위해 값 초기화
  }
}, 5000);
```

위 예제를 보면, 이벤트 수신기와 인터벌 함수가 정의된 스코프는 `someObject.aProperty`가 바뀌기 전에 실행이 끝나겠지만, `someObject`의 참조가 수신기와 인터벌 함수 메모리에 계속 남아있기 때문에, 양쪽 모두에서 같은 데이터에 접근할 수 있습니다. 즉, 한 쪽이 데이터를 바꾸면 반대편에서도 바뀐 데이터를 볼 수 있습니다.

> **참고:** 객체는 변수에 참조, 실제 데이터가 저장된 메모리의 주소로 할당됩니다. 이 말은 곧, 객체를 담고 있는 변수를 사용하면, 같은 객체를 담은 다른 변수에도 영향을 줄 수 있다는 뜻입니다. 두 개의 변수가 같은 객체를 참조(e.g. `let a = b = {aProperty: 'Yeah'};`)하면, 한 쪽의 변수 데이터만 바꿔도 다른 쪽 데이터가 같이 바뀝니다.

> **참고:** 객체는 변수에 참조로 저장되기 때문에, 함수에서 객체를 반환하면 함수가 종료된 이후에도 계속 지속(데이터를 잃지 않도록 메모리에 유지)시킬 수 있습니다.

### 메모리 문제

```js
const els = document.getElementsByTagName('*');

// 상황 1
for(let i=0 ; i < els.length; i++){
  els[i].addEventListener("click", function(e){/*do something*/}, false);
}

// 상황 2
function processEvent(e){
  /* do something */
}

for(let i=0 ; i < els.length; i++){
  els[i].addEventListener("click", processEvent, false);
}
```

위 코드에서 상황 1의 경우에는 반복문의 매 반복마다 새로운 익명 처리기 함수가 생성됩니다. 반면 상황 2에서는 사전에 정의한 함수를 이벤트 처리기로 사용하므로 처리기 함수를 하나만 사용하고, 따라서 더 작은 메모리 공간만 사용합니다. 더군다나 상황 1에서는, 익명 함수에 대한 참조를 유지하지 않으므로 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}를 호출할 수 없습니다. 반면 상황 2에서는, `processEvent`가 처리기 함수를 가리키므로 `myElement.removeEventListener("click", processEvent, false)`를 할 수 있습니다.

사실, 메모리 소비와 관련하여, 함수 참조를 유지하지 못하는 것은 중요한 문제가 아닙니다. 진짜 문제는 함수 참조를 '정적으로' 유지하지 못하는 것입니다. 이 점을 보여주는 아래의 상황 3과 상황 4에서는 함수 참조를 유지하긴 하지만, 매 반복마다 재정의됩니다. 상황 3에서는 반복할 때마다 익명 함수에 대한 참조를 재할당하고, 상황 4에서는 함수 전체 정의는 변하지 않지만 매번 마치 새로운 함수처럼 반복적으로 재정의되므로 두 상황 모두 정적이지 않습니다. 따라서 코드를 보기엔 다수의 동일한 이벤트 수신기처럼 보이지만, 사실 각 반복마다 새로운 처리기를 참조하는 새로운 이벤트 수신기를 생성하고 있는 것입니다.

```js
const els = document.getElementsByTagName('*');

function processEvent(e){
  /* do something */
}

// 시연을 위해 [i] 대신 [j]를 사용하는 실수를 한 것에 주의하세요. 반복문 내에서 정의한 수신기를 모두 첫 요소에 등록하고 있습니다.

// 상황 3
for(let i = 0, j = 0 ; i < els.length ; i++){
  els[j].addEventListener("click", processEvent = function(e){/* do something */}, false);
}

// 상황 4
for(let i = 0, j = 0 ; i < els.length ; i++){
  function processEvent(e){/* do something */};
  els[j].addEventListener("click", processEvent, false);
}
```

또한 상황 3과 4에서는 함수 참조가 유지되긴 하지만 매번 `addEventListener()` 전에 재정의되므로, `removeEventListener("click", processEvent, false)`로 수신기를 제거할 수는 있으나 오직 마지막으로 정의된 수신기만 제거됩니다.

### 패시브 수신기로 스크롤 성능 향상

명세에 따르면, `passive` 옵션의 기본 값은 항상 `false` 입니다. 그러나 이 기본 값으로 인해 터치 이벤트 등 일부 이벤트의 수신기가 스크롤을 처리 중인 브라우저 메인 스레드를 블록할 가능성이 생기고, 따라서 스크롤 성능이 크게 저하될 수 있습니다.

이 문제를 방지하기 위해 일부 브라우저(Chrome과 Firefox 등)는 문서 레벨 노드인 {{domxref("Window")}}, {{domxref("Document")}}, {{domxref("Document.body")}}의 {{event("touchstart")}}와 {{event("touchmove")}} 이벤트에 대해선 `passive`의 기본 값을 `true`로 바꿔 적용합니다. 패시브 이벤트 수신기는 이벤트를 [취소](/ko/docs/Web/API/Event/preventDefault)할 수 없으므로 사용자가 스크롤할 때 브라우저의 렌더링을 방해하지 않습니다.

> **참고:** 어떤 브라우저/버전에서 이렇게 동작하는지는 아래의 브라우저 호환성 표에 나와있습니다.

`passive` 옵션에 명시적으로 `false`를 지정해서 이 동작을 막을 수 있습니다.

```js
/* 기능 감지 */
let passiveIfSupported = false;

try {
  window.addEventListener("test", null,
    Object.defineProperty(
      {},
      "passive",
      {
        get: function() { passiveIfSupported = { passive: true }; }
      }
    )
  );
} catch(err) {}

window.addEventListener('scroll', function(event) {
  /* do something */
  // event.preventDefault() 사용 불가
}, passiveIfSupported );
```

`addEventListener()`가 `options` 매개변수를 지원하지 않는 구형 브라우저에서 `options` 객체를 지정하면 `useCapture` 매개변수를 사용할 수 없으므로, 위와 같이 [기능 감지](#옵션_지원을_안전하게_감지하기)를 거쳐야 합니다.

{{event("scroll")}} 이벤트에 대해서는 `passive` 옵션을 고려하지 않아도 됩니다. 어차피 취소할 수 없는 이벤트라서, 수신기가 페이지 렌더링을 막을 수도 없기 때문입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("EventTarget.removeEventListener()")}}
- [이벤트 생성 및 발동](/ko/docs/DOM/Creating_and_triggering_events)
- [이벤트 처리기의 `this`에 관한 더 자세한 정보](https://www.quirksmode.org/js/this.html)
