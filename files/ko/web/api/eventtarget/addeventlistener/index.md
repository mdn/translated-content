---
title: EventTarget.addEventListener()
slug: Web/API/EventTarget/addEventListener
tags:
  - API
  - DOM
  - Event Handlers
  - Event Listener
  - EventTarget
  - JavaScript
  - Method
  - Reference
translation_of: Web/API/EventTarget/addEventListener
---
{{APIRef("DOM Events")}}

{{domxref("EventTarget")}}의 **`addEventListener()`** 메서드는 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정합니다. 일반적인 대상은 {{domxref("Element")}}, {{domxref("Document")}}, {{domxref("Window")}}지만, {{domxref("XMLHttpRequest")}}와 같이 이벤트를 지원하는 모든 객체를 대상으로 지정할 수 있습니다.

`addEventListener()`는 {{domxref("EventTarget")}}의 주어진 이벤트 유형에, {{domxref("EventListener")}}를 구현한 함수 또는 객체를 이벤트 처리기 목록에 추가해 작동합니다.

## 구문

    target.addEventListener(type, listener[, options]);
    target.addEventListener(type, listener[, useCapture]);
    target.addEventListener(type, listener[, useCapture, wantsUntrusted {{Non-standard_inline}}]); // Gecko/Mozilla only

### 매개변수

<dl><dt><code>type</code></dt><dd>반응할 <a href="/ko/docs/Web/Events">이벤트 유형</a>을 나타내는 대소문자 구분 문자열.</dd><dt><code>listener</code></dt><dd>지정된 타입의 이벤트가 발생했을 때, 알림({{domxref("Event")}} 인터페이스를 구현하는 객체)을 받는 객체입니다. {{domxref("EventListener")}} 인터페이스 또는 JavaScript <a href="/en-US/docs/JavaScript/Guide/Functions">function</a>를 구현하는 객체여야만 합니다. 콜백 자체에 대한 자세한 내용은 {{anch("The event listener callback")}} 를 참조하세요.</dd><dt><code>options</code> {{optional_inline}}</dt><dd>이벤트 리스너에 대한 특성을 지정하는 옵션 객체입니다. 사용 가능한 옵션은 다음과 같습니다 :<ul><li><code>capture</code>: DOM 트리의 하단에 있는 <code>EventTarget</code> 으로 전송하기 전에, 등록된 <code>listener</code> 로 이 타입의 이벤트의 전송여부를 나타내는 {{jsxref("Boolean")}} 입니다.</li><li><code>once</code>: 리스너를 추가한 후 한 번만 호출되어야 함을 나타내는 {{jsxref("Boolean")}}입니다. <code>true</code>이면 호출할 때 <code>listener</code> 가 자동으로 삭제됩니다.</li><li><code>passive</code>: <code>true</code>일 경우, <code>listener</code>에서 지정한 함수가 {{domxref("Event.preventDefault", "preventDefault()")}}를 호출하지 않음을 나타내는 {{jsxref("Boolean")}}입니다. passive listener 가 <code>preventDefault()</code>를 호출하면 user agent는 콘솔 경고를 생성하는 것 외의 작업은 수행하지 않습니다. 자세한 내용은 {{anch("Improving scrolling performance with passive listeners")}} 를 참조하세요.</li><li>{{non-standard_inline}} <code>mozSystemGroup</code>: listener를 시스템 그룹에 추가해야함을 나타내는 {{jsxref("Boolean")}} 입니다. 오직 XBL 혹은 파이어폭스 브라우저의 {{glossary("chrome")}}에서 실행되는 코드에서만 사용할 수 있습니다.</li></ul></dd><dt><code>useCapture</code> {{optional_inline}}</dt><dd>DOM 트리의 하단에 있는 <code>EventTarget</code> 으로 전송하기 전에, 등록된 <code>listener</code> 로 이 타입의 이벤트의 전송여부를 나타내는 {{jsxref("Boolean")}} 입니다. 트리에서 위쪽으로 버블링되는 이벤트는 캡처를 사용하도록, 지정된 listener를 트리거하지 않습니다. 이벤트 버블링과 캡쳐는 두 요소(엘리먼트)가 해당 이벤트에 대한 핸들(함수)를 등록한 경우, 다른 요소 내에 중첩된 요소에서 발생하는 이벤트를 전파하는 두 가지 방법 입니다. 이벤트 전파 모드는 요소가 이벤트를 수신하는 순서를 판별합니다. 자세한 설명은 <a href="http://www.w3.org/TR/DOM-Level-3-Events/#event-flow">DOM Level 3 Events</a> 과 <a href="http://www.quirksmode.org/js/events_order.html#link4">JavaScript Event order</a> 를 참조하세요. 값을 지정하지 않으면, <code>useCapture</code> 의 기본값은 <code>false</code> 입니다.</dd><dd><div class="note"><strong>참고:</strong> 이벤트 타겟에 연결된 이벤트 리스너의 경우, 이벤트는 캡쳐링과 버블링 단계가 아니라 타겟 단계에 있습니다. 타겟 단계의 이벤트는 <code>useCapture</code> 매개변수(파라미터)와 상관없이, 그들이 등록된 순서대로 요소의 모든 리스너를 트리거합니다.</div><div class="note"><strong>참고:</strong> <code>useCapture</code> 가 항상 선택사항인 것은 아닙니다. 가장 광범위한 브라우저 호환성을 위해 포함시키는 것이 좋습니다.</div></dd><dt><code>wantsUntrusted</code> {{Non-standard_inline}}</dt><dd>파이어폭스(겍코) 명세의 매개변수 입니다. <code>true</code>의 경우, 리스너는 웹 컨텐츠에 의해 dispatch되는 합성 이벤트를 수신합니다. (기본값은 {{glossary("chrome")}} 브라우저의 경우 <code>false</code> , 보통의 웹 페이지에서는 <code>true</code>입니다.) 이 매개 변수는 브라우저 자체 뿐만 아니라, 에드온에게도 유용합니다.</dd></dl>

## Usage notes

### 이벤트 리스너 콜백

이벤트 리스너는 콜백 함수로 지정할 수 있습니다. 또는 {{domxref("EventListener.handleEvent", "handleEvent()")}} 메서드가 콜백 함수 역할을 하는 {{domxref("EventListener")}}를 구현하는 객체로 지정할 수 있습니다.

콜백 함수 자체는 `handleEvent()` 메서드와 동일한 매개 변수와 반환값을 가집니다. 즉, 콜백은 단일 매개 변수를 허용합니다: 발생한 이벤트를 설명하는 {{domxref("Event")}}에 기반한 객체이며, 아무것도 반환하지 않습니다.

예를들어 {{event("fullscreenchange")}} 와 {{event("fullscreenerror")}}를 처리하는데 사용할 수 있는 이벤트 핸들러 콜백은 다음과 같습니다:

```js
function eventHandler(event) {
  if (event.type == 'fullscreenchange') {
    /* handle a full screen toggle */
  } else /* fullscreenerror */ {
    /* handle a full screen toggle error */
  }
}
```

### 옵션 지원을 안전하게 감지

이전 버전의 DOM 명세에선, `addEventListener()`의 세 번째 매개 변수는 캡쳐의 사용여부를 나타내는 Boolean값 이었습니다. 시간이 지남에 따라 더 많은 옵션이 필요하다는 것이 분명 해졌습니다. 함수에 매개 변수를 추가하는 대신 (옵션값을 처리할 때 엄청나게 복잡한 작업), 세 번째 매개 변수는 다양한 속성을 포함 할 수 있는 객체로 변경되었습니다. 이 객체는 이벤트 리스너를 제거하는 프로세스를 구성하는 옵션값을 정의할 수 있습니다.

지난 버전의 브라우저(뿐만 아니라 너무 오래된 브라우저)에서는 여전히 세 번째 매개 변수가 Boolean 이라고 가정하고 시나리오를 지능적으로 처리할 코드를 작성해야 합니다. 관심있는 각 옵션에 대해 기능 감지를 사용하여 이 작업을 수행할 수 있습니다.

예를들어서, `passive` 옵션을 확인하려면 다음과 같이 하세요 :

    var passiveSupported = false;

    try {
      var options = {
        get passive() { // This function will be called when the browser
                        //     attempts to access the passive property.
          passiveSupported = true;
        }
      };

      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch(err) {
      passiveSupported = false;
    }

이렇게 하면 `passive` 속성(프로퍼티)에 대한 getter함수를 사용하여 `options` 객체가 만들어집니다; get을 호출 할 경우 gtter는 플래그 `passiveSupported`를 `true`로 설정합니다. 즉, 브라우저가 `options` 객체의 `passive` 속성 값을 검사하면 `passiveSupported`가 `true`로 설정됩니다; 그렇지 않으면 `false`가 유지됩니다. 그리고 `addEventListener()`를 호출하여 가짜 이벤트 핸들러를 설정합니다. 해당 옵션을 지정하여 브라우저가 객체를 세 번째 매개 변수로 인식하면 옵션을 확인합니다. 그런 다음 `removeEventListener()` 를 호출하여 스스로 정리합니다. (`handleEvent()`는 호출되지 않은 이벤트 리스너에서는 무시됩니다.)

이 방법으로 지원되는 옵션이 있는지 확인할 수 있습니다. 위와 비슷한 코드를 사용하여 해당 옵션에 대한 getter를 추가하기 만하면됩니다.

그런 다음 문제의 옵션을 사용하는 실제 이벤트 리스너를 만들려면 다음과 같이 쓸 수 있습니다:

```js
someElement.addEventListener("mouseup", handleMouseUp, passiveSupported
                               ? { passive: true } : false);
```

여기에서는 {{event("mouseup")}} 이벤트에 대한 리스너를 `someElement`요소에 추가합니다.  새 번째 매개변수의 경우 `passiveSupported`가 `true`면, `options` 객체를 `passive` : `true` 로 설정합니다; 그렇지 않으면, 우리는 Boolean을 전달해야 함올 알고있습니다. `useCapture` 매개변수의 값으로 `false` 를 전달합니다.

원하는 경우 [Modernizr](https://modernizr.com/docs) 혹은 [Detect It](https://github.com/rafrex/detect-it) 과 같은 서드파티 라이브러리를 사용하여 이러한 테스트를 수행할 수 있습니다.

[Web Incubator Community Group](https://wicg.github.io/admin/charter.html)의 [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection)에 대한 기사에서 더 많은 것을 배울 수 있습니다.

## 예제

### 간단한 리스너 추가

이 예제는 `addEventListener()` 를 사용하여 요소에 대한 마우스 클릭을 감지하는 방법을 보여줍니다.

#### HTML

```html
<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

이 코드에서, `modifyText()` 는 `addEventListener()`를 사용하여 등록된 `click` 이벤트에 대한 리스너입니다. 테이블의 아무곳이나 클릭하더라도, 핸들러에서 버블링되고 `modifyText()` 가 실행됩니다.

#### 결과

{{EmbedLiveSample('간단한_리스너_추가')}}

### 익명 함수와 이벤트 리스너

여기서는 익명 함수를 사용하여 매개 변수를 이벤트 리스너에 전달하는 방법을 살펴보겠습니다.

#### HTML

```html
<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Function to add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("four")}, false);
```

리스너는 코드를 캡슐화 하는 익명 함수입니다. 이 익명의 함수는 실제로 이벤트에 응답하는 책임이 있는 `modifyText()` 함수에 매개변수를 전달 할 수 있습니다.

#### Result

{{EmbedLiveSample('익명_함수와_이벤트_리스너')}}

### 화살표 함수와 이벤트 리스너

이 예제는 화살표 함수를 사용하여 구현된 간단한 이벤트 리스너를 보여줍니다.

#### HTML

```html
<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Add event listener to table with an arrow function
var el = document.getElementById("outside");
el.addEventListener("click", () => { modifyText("four"); }, false);
```

#### 결과

{{EmbedLiveSample('화살표_함수와_이벤트_리스너')}}

화살표 함수와 익명 함수는 유사하지만 서로 다른 `this`바인딩을 가집니다. 익명(모든 전통적인 자바스크립트 함수)는 그들 자신의 `this` 바인딩을 만들지만, 화살표 함수는 포함하고 있는 함수의 `this`바인딩을 상속합니다.

즉, 화살표 함수를 사용할 때 포함하고 있는 함수에서 사용중인 변수 및 상수를 이벤트 핸들러에서 사용할 수 있습니다.

### 옵션의 사용 예제

#### HTML

```html
<div class="outer">
    outer, once & none-once
    <div class="middle" target="_blank">
        middle, capture & none-capture
        <a class="inner1" href="https://www.mozilla.org" target="_blank">
            inner1, passive & preventDefault(which is not allowed)
        </a>
        <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
            inner2, none-passive & preventDefault(not open new page)
        </a>
    </div>
</div>
```

#### CSS

```css
    .outer, .middle, .inner1, .inner2 {
        display:block;
        width:520px;
        padding:15px;
        margin:15px;
        text-decoration:none;
    }
    .outer{
        border:1px solid red;
        color:red;
    }
    .middle{
        border:1px solid green;
        color:green;
        width:460px;
    }
    .inner1, .inner2{
        border:1px solid purple;
        color:purple;
        width:400px;
    }
```

#### JavaScript

```js
    let outer  = document.getElementsByClassName('outer') [0];
    let middle = document.getElementsByClassName('middle')[0];
    let inner1 = document.getElementsByClassName('inner1')[0];
    let inner2 = document.getElementsByClassName('inner2')[0];

    let capture = {
        capture : true
    };
    let noneCapture = {
        capture : false
    };
    let once = {
        once : true
    };
    let noneOnce = {
        once : false
    };
    let passive = {
        passive : true
    };
    let nonePassive = {
        passive : false
    };


    outer.addEventListener('click', onceHandler, once);
    outer.addEventListener('click', noneOnceHandler, noneOnce);
    middle.addEventListener('click', captureHandler, capture);
    middle.addEventListener('click', noneCaptureHandler, noneCapture);
    inner1.addEventListener('click', passiveHandler, passive);
    inner2.addEventListener('click', nonePassiveHandler, nonePassive);

    function onceHandler(event)
    {
        alert('outer, once');
    }
    function noneOnceHandler(event)
    {
        alert('outer, none-once, default');
    }
    function captureHandler(event)
    {
        //event.stopImmediatePropagation();
        alert('middle, capture');
    }
    function noneCaptureHandler(event)
    {
        alert('middle, none-capture, default');
    }
    function passiveHandler(event)
    {
        // Unable to preventDefault inside passive event listener invocation.
        event.preventDefault();
        alert('inner1, passive, open new page');
    }
    function nonePassiveHandler(event)
    {
        event.preventDefault();
        //event.stopPropagation();
        alert('inner2, none-passive, default, not open new page');
    }
```

#### Result

옵션이 어떻게 작동하는지 보려면 각각 outer, middle, inner 컨테이너를 클릭해 보세요.

{{ EmbedLiveSample('옵션의_사용_예제', 600, 310, '', 'Web/API/EventTarget/addEventListener') }}

`options` 객체에서 특정 값을 사용하기 전에, 모든 브라우저의 모든 버전이 지원하는 것은 아니므로, 사용자의 브라우저가 해당 기능을 지원하는지 확인하는 것이 좋습니다. 자세한 내용은 {{anch("Safely detecting option support")}} 을 참조하세요.

## Other notes

### 왜 `addEventListener`를 사용하나요?

`addEventListener()` 는 W3C 에서 지정한 DOM에 이벤트 리스너를 등록하는 방법입니다. 장점은 다음과 같습니다:

- 이벤트에 대해 하나 이상의 핸들러를 추가할 수 있습니다. 이는 {{Glossary("AJAX")}} 라이브러리, 자바스크립트 모듈, 또는 다른 라이브러리/확장 기능과 잘 작동해야 하는 다른 종류의 코드에 특히 유용합니다.
- 리스너가 활성화 되면 (캡쳐링과 버블링) 단계의 세밀한 제어를 제공합니다.
- HTML 요소뿐만 아니라, 모든 DOM 요소에서 작동합니다.

대안으로, [이벤트 리스너를 등록하는 오래된 방법](#Older_way_to_register_event_listeners)은 아래에 설명되어 있습니다.

### 이벤트 전달중에 리스너 추가

{{domxref("EventListener")}} 가 이벤트 처리중에 {{domxref("EventTarget")}}에 추가되었다면, 그 이벤트는 리스너를 트리거하지 않습니다. 그러나 동일한 리스너는 버블링 단계와 같은 이벤트 흐름의 나중 단계에서 트리거 될 수 있습니다.

### 다수의 동일한 이벤트 리스너

만약 동일한 여러개의 `EventListener` 가 동일한 매개변수(parameter)로 동일한 `EventTarget` 에 등록되었다면, 중복된 항목(인스턴스)들은 버려집니다. `EventListener`는 두번 호출되지 않으며 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} 메서드를 사용해 직접 제거할 필요가 없습니다. 그러나 익명 함수를 핸들러로 사용할 때, 루프를 도는 경우가 있습니다. 이 경우 단순히 반복적으로 호출하는 동일한 소스 코드를 사용하여 이벤트를 등록하더라도, 익명 함수는 동일하지 않고 이 때문에 리스너 또한 동일하지 않습니다. 이와 같은 경우 동일한 함수를 반복적으로 정의하는 것이 더 문제가 될 수 있습니다. (아래의 [메모리 문제](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener$edit#Memory_issues)를 참조하세요.)

### 핸들러 내부의 `this` 값

유사한 요소 집합에 대한 일반적인 핸들러를 사용할 때와 같이, 이벤트 핸들러가 동작한 엘리먼트를 참조하는것이 좋습니다.

`addEventListener()` 를 사용하여 핸들러 함수를 요소에 연결하면, 핸들러 내부의 [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) 값은 요소에 대한 참조입니다. 이것은 핸들러에 전달 된 이벤트 인수(아규먼트)의 `currentTarget` 속성(프로퍼티)값과 같습니다.

```js
my_element.addEventListener('click', function (e) {
  console.log(this.className)           // logs the className of my_element
  console.log(e.currentTarget === this) // logs `true`
})
```

다시 말해, [화살표 함수에는 `this` 컨텍스트가 없습니다](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this).

```js
my_element.addEventListener('click', (e) => {
  console.log(this.className)           // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this) // logs `false`
})
```

HTML 소스의 요소(element)에 이벤트 핸들러(예: onclick)가 지정된 경우, 속성 값(attribute value)의 자바스크립트 코드는 효과적으로 `addEventListener()` 에 따라  `this`값을 바인드하는 핸들러 함수로 래핑됩니다. 코드 내에서 `this`가 발생하면 요소에 대한 참조를 나타냅니다.

```html
<table id="my_table" onclick="console.log(this.id);"><!-- `this` refers to the table; logs 'my_table' -->
  ...
</table>
```

속성 값(attribute value)의 코드에 의해 호출 된 함수 내부의 `this` 는 [표준 규칙들](/ko/docs/Web/JavaScript/Reference/Operators/this)에 따라 동작합니다. 다음은 그 예입니다.

```html
<script>
  function logID() { console.log(this.id); }
</script>
<table id="my_table" onclick="logID();"><!-- when called, `this` will refer to the global object -->
  ...
</table>
```

`logID()` 내의 `this` 값은 {{domxref("Window")}} 전역 객체에 대한 참조입니다. (혹은 [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) 의 경우 `undefined`입니다.)

#### `bind()`를 사용하여 `this`지정하기

[`Function.prototype.bind()`](/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind) 메서드를 사용하면 지정한 함수에 대한 모든 호출에 대해 `this` 값으로 사용해야 하는 값을 지정할 수 있습니다. 이를 이용하여 함수가 호출 된 컨텍스트에 따라 `this` 가 무엇인지 명확하지 않은 문제를 쉽게 우회할 수 있습니다. 그러나 나중에 제거할 수 있도록, 주위에 리스너에 대한 참조를 유지해야 합니다.

다음은 `bind()` 를 사용한, 사용하지 않은 예제입니다 :

```js
var Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.onclick1 = function(event) {
    console.log(this.name); // undefined, as |this| is the element
  };
  this.onclick2 = function(event) {
    console.log(this.name); // 'Something Good', as |this| is bound to newly created object
  };
  element.addEventListener('click', this.onclick1, false);
  element.addEventListener('click', this.onclick2.bind(this), false); // Trick
}
var s = new Something(document.body);
```

또 다른 해결책은 `handleEvent()`라는 특수 함수를 사용하여 어떤 이벤트를 캐치 하는것입니다 :

```js
var Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.handleEvent = function(event) {
    console.log(this.name); // 'Something Good', as this is bound to newly created object
    switch(event.type) {
      case 'click':
        // some code here...
        break;
      case 'dblclick':
        // some code here...
        break;
    }
  };

  // Note that the listeners in this case are |this|, not this.handleEvent
  element.addEventListener('click', this, false);
  element.addEventListener('dblclick', this, false);

  // You can properly remove the listeners
  element.removeEventListener('click', this, false);
  element.removeEventListener('dblclick', this, false);
}
var s = new Something(document.body);
```

*`this`에 대한 참조를 처리하는 또 다른 방법은,* `EventListener` 에 함수를 전달하는 것입니다. 이 함수는 접근을 필요로 하는 필드가 들어있는, 객체의 메서드를 호출하는 함수입니다:

```js
class SomeClass {

  constructor() {
    this.name = 'Something Good';
  }

  register() {
    var that = this;
    window.addEventListener('keydown', function(e) {return that.someMethod(e);});
  }

  someMethod(e) {
    console.log(this.name);
    switch(e.keyCode) {
      case 5:
        // some code here...
        break;
      case 6:
        // some code here...
        break;
    }
  }

}

var myObject = new SomeClass();
myObject.register();
```

### 오래된 인터넷 익스플로러와 attachEvent

인터넷 익스플로러 9 이전 버전에서는, 표준 `addEventListener()` 가 아닌 {{domxref("EventTarget.attachEvent", "attachEvent()")}}를 사용해야 합니다. IE의 경우 위의 예제를 다음과 같이 수정합니다:

```js
if (el.addEventListener) {
  el.addEventListener('click', modifyText, false);
} else if (el.attachEvent)  {
  el.attachEvent('onclick', modifyText);
}
```

`attachEvent()`의 단점은 다음과 같습니다: `this`의 값이 이벤트가 바인드되어 있는 요소 대신에, `window`객체에 대한 참조가 됩니다.

`attachEvent()` 메서드는 `onresize` 이벤트와 쌍을 이루어 웹 페이지의 특정 요소의 크기가 리사이징 되는 시점을 감지할 수 있습니다. `mselementresize` 라는 독점적인 이벤트는, 이벤트 핸들러를 등록하는 `addEventListener` 메서드와 함께 사용할 때 `onresize`와 유사한 기능을 제공하여, 특정 HTML 요소의 크기를 리사이징 할 때 실행됩니다.

### 호환성

스크립트 시작 부분에 다음 코드를 사용하여, 인터넷 익스플로러 8 에서 지원하지 않는 `addEventListener()`, `removeEventListener()`, {{domxref("Event.preventDefault()")}}, {{domxref("Event.stopPropagation()")}} 을 해결할 수 있습니다. 이 코드는 `handleEvent()`와 {{event("DOMContentLoaded")}} 이벤트에 대한 사용을 지원합니다.

<div class="note"><p><strong>참고: </strong>IE8 에서는 <code>useCapture</code>를 지원할 수 있는 다른 방법이 없습니다. 다음의 코드는 IE8 지원만 추가합니다. 이 IE8 폴리필은 표준 모드에서만 작동합니다: doctype 선언이 필요합니다.</p></div>

```js
(function() {
  if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault=function() {
      this.returnValue=false;
    };
  }
  if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation=function() {
      this.cancelBubble=true;
    };
  }
  if (!Element.prototype.addEventListener) {
    var eventListeners=[];

    var addEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var self=this;
      var wrapper=function(e) {
        e.target=e.srcElement;
        e.currentTarget=self;
        if (typeof listener.handleEvent != 'undefined') {
          listener.handleEvent(e);
        } else {
          listener.call(self,e);
        }
      };
      if (type=="DOMContentLoaded") {
        var wrapper2=function(e) {
          if (document.readyState=="complete") {
            wrapper(e);
          }
        };
        document.attachEvent("onreadystatechange",wrapper2);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});

        if (document.readyState=="complete") {
          var e=new Event();
          e.srcElement=window;
          wrapper2(e);
        }
      } else {
        this.attachEvent("on"+type,wrapper);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
      }
    };
    var removeEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var counter=0;
      while (counter<eventListeners.length) {
        var eventListener=eventListeners[counter];
        if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
          if (type=="DOMContentLoaded") {
            this.detachEvent("onreadystatechange",eventListener.wrapper);
          } else {
            this.detachEvent("on"+type,eventListener.wrapper);
          }
          eventListeners.splice(counter, 1);
          break;
        }
        ++counter;
      }
    };
    Element.prototype.addEventListener=addEventListener;
    Element.prototype.removeEventListener=removeEventListener;
    if (HTMLDocument) {
      HTMLDocument.prototype.addEventListener=addEventListener;
      HTMLDocument.prototype.removeEventListener=removeEventListener;
    }
    if (Window) {
      Window.prototype.addEventListener=addEventListener;
      Window.prototype.removeEventListener=removeEventListener;
    }
  }
})();
```

### 이벤트 리스너를 등록하는 고전적인 방법

`addEventListener()`는 DOM 2 [Events](http://www.w3.org/TR/DOM-Level-2-Events) 명세와 함께 도입되었습니다. 그 전에는 다음과 같이 이벤트 리스너를 등록했습니다:

```js
// Passing a function reference ? do not add '()' after it, which would call the function!
el.onclick = modifyText;

// Using a function expression
element.onclick = function() {
  // ... function logic ...
};
```

This 이 메서드는 요소의 기존 `click` 이벤트 리스너가 있을 경우에, 그것을 대체합니다. `blur` (`onblur`) 및 `keypress` (`onkeypress`) 와 같은 다른 이벤트 및 이벤트 핸들러도 비슷하게 작동합니다.

이것은 본질적으로 {{glossary("DOM", "DOM 0")}}의 일부였기 때문에, 이벤트 리스너를 추가하는데 매우 광범위하게 지원되며 특별한 크로스 브라우징 코드가 필요하지 않습니다. 이것은 일반적으로 `addEventListener()`의 추가 기능이 필요하지 않으면, 이벤트 리스너를 동적으로 등록하는데 사용합니다.

### 메모리 이슈

```js
var i;
var els = document.getElementsByTagName('*');

// Case 1
for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", function(e){/*do something*/}, false);
}

// Case 2
function processEvent(e){
  /*do something*/
}

for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", processEvent, false);
}
```

위의 첫 번째 경우, 루프의 각 반복마다 새로운 익명 핸들러 함수가 생성됩니다. 두 번째 경우에는 이전에 선언한 동일한 함수를 이벤트 핸들러로 사용하므로, 메모리 소비가 줄어듭니다. 또한 첫 번째 경우에는 removeEventListener()를 호출할 수 없습니다. 익명 함수에 대한 참조가 유지되지 않기 때문입니다.(루프가 생성할 수 있는 여러개의 익명 함수 중 하나에 보관되지 않습니다) 두 번째 경우에는 `processEvent`가 함수 참조이기 때문에, `myElement.removeEventListener("click", processEvent, false)`를 수행할 수 있습니다.

사실, 메모리 소비와 관련하여, 함수 참조를 유지하는 것은 진짜 문제가 아닙니다. 오히려 정적 함수 참조를 유지하는 것이 부족합니다. 아래의 두 경우(3,4번째 케이스) 모두 함수 참조가 유지되지만, 각 반복에서 재정의 되므로 정적이 아닙니다. 세 번째 경우에는 익명 함수에 대한 참조가, 반복될 때 마다 다시 할당됩니다. 네 번째 경우에는 전체 함수 정의가 변경되지 않지만, 새로운 것처럼(컴파일러에 의해 \[\[promoted]]되지 않는 한) 반복적으로 정의되고 있고 그래서 정적이지 않습니다. 따라서 간단하게 \[\[여러개의 동일한 이벤트 리스너]]인 것처럼 보이지만, 두 경우 모두 각 반복은 핸들러 함수에 대한 고유한 참조로 새로운 리스너를 생성합니다. 그러나 함수 정의 자체는 변경되지 않으므로, 모든 중복 리스너에 대해 같은 함수가 여전히 호출될 수 있습니다.(특히 코드가 최적화되는 경우)

또한 두 경우 모두 함수 참조가 유지되었지만, 각 가산에 대해 반복적으로 재정의 되었습니다. 위에서 사용했던 remove 문(statement)으로는 리스너를 제거할 수 있지만, 마지막으로 추가한 리스너만 제거됩니다.

```js
// For illustration only: Note "MISTAKE" of [j] for [i] thus causing desired events to all attach to SAME element

// Case 3
for(var i=0, j=0 ; i<els.length ; i++){
  /*do lots of stuff with j*/
  els[j].addEventListener("click", processEvent = function(e){/*do something*/}, false);
}

// Case 4
for(var i=0, j=0 ; i<els.length ; i++){
  /*do lots of stuff with j*/
  function processEvent(e){/*do something*/};
  els[j].addEventListener("click", processEvent, false);
}
```

### passive 리스너로 스크롤링 성능 향상

명세에 따르면, `passive` option의 기본값은 항상 `false` 입니다. 그러나 이것은 이벤트 리스너가 특정 터치 이벤트를 처리하는 경우(다른 이벤트를 포함하여), 스크롤을 처리하는 동안 브라우저의 메인 스레드를 차단하기 때문에, 스크롤 처리 시 성능이 크게 저하될 수 있습니다.

이러한 문제를 방지하기 위하여, 일부 브라우저(특히 크롬과 파이어폭스)는 document-level nodes인 {{domxref("Window")}}, {{domxref("Document")}}, {{domxref("Document.body")}}의 경우 {{event("touchstart")}} 와{{event("touchmove")}} 이벤트에 대해 `passive` 옵션의 기본값을 `true`로 변경했습니다. 이렇게 하면 이벤트 리스너가 호출되지 않으므로, 사용자가 스크롤 하는 동안 페이지 렌더링을 차단할 수 없습니다.

> **참고:** 이 변경된 동작을 구현하는 브라우저(혹은 브라우저의 버전)을 알아야 할 경우 아래의 호환성 표를 참조하세요.

다음과 같이 `passive`의 값을 명시적으로 `false`로 설정을 오버라이드 하여 이 동작을 무시할 수 있습니다:

```js
/* Feature detection */
var passiveIfSupported = false;

try {
  window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function() { passiveIfSupported = { passive: true }; } }));
} catch(err) {}

window.addEventListener('scroll', function(event) {
  /* do something */
  // can't use event.preventDefault();
}, passiveIfSupported );
```

`addEventListener()`에 대한 `options` 매개변수를 지원하지 않는 이전 브라우저에서는, [feature detection](#Safely_detecting_option_support)를 사용하지 않고는 `useCapture` 인수를 사용하지 못하도록 해야 합니다.

{{event("scroll")}} 이벤트의 기본 `passive` 값에 대해 걱정할 필요는 없습니다. 취소할 수 없기 때문에, 이벤트 리스너는 페이지 렌더링을 차단할 수 없습니다.

## 명세

| Specification                                                                                                                            | Status                           | Comment            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("DOM WHATWG", "#dom-eventtarget-addeventlistener", "EventTarget.addEventListener()")}}         | {{Spec2("DOM WHATWG")}} |                    |
| {{SpecName("DOM4", "#dom-eventtarget-addeventlistener", "EventTarget.addEventListener()")}}                 | {{Spec2("DOM4")}}         |                    |
| {{SpecName("DOM2 Events", "#Events-EventTarget-addEventListener", "EventTarget.addEventListener()")}} | {{Spec2("DOM2 Events")}} | Initial definition |

## 브라우저 호환성

{{Compat("api.EventTarget.addEventListener", 3)}}

## 같이 보기

- {{domxref("EventTarget.removeEventListener()")}}
- [Creating and triggering custom events](/en-US/docs/DOM/Creating_and_triggering_events)
- [More details on the use of `this` in event handlers](http://www.quirksmode.org/js/this.html)
