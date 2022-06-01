---
title: EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
tags:
  - Method
  - Reference
browser-compat: api.EventTarget.removeEventListener
translation_of: Web/API/EventTarget/removeEventListener
---
{{APIRef("DOM")}}

{{domxref("EventTarget")}} 인터페이스의 **`EventTarget.removeEventListener()`** 메서드는 {{domxref("EventTarget.addEventListener()")}}로 이벤트 대상에 등록한 수신기를 제거합니다. 제거 대상 수신기의 식별은 이벤트 유형, 수신기 함수 참조, 그리고 식별에 관련된 다양한 옵션을 사용해 이뤄집니다. [제거할 이벤트 수신기의 식별](#제거할_이벤트_수신기의_식별)을 참고하세요.

`EventTarget`에 등록된 {{domxref("EventListener")}} 중 무엇에도 일치하지 않는 매개변수를 사용해서 `removeEventListener()`를 호출하면 아무 효과도 발생하지 않습니다.

{{domxref("EventTarget")}}의 어느 수신기 중 하나가 이벤트를 처리하는 중에 다른 수신기를 제거할 경우, 제거된 {{domxref("EventListener")}}는 현재 이벤트에 대해 발동하지 않습니다. 그러나 다시 부착할 수는 있습니다.

> **경고:** 같은 수신기를 다른 캡처 플래그 값으로 두 번, 즉 한 번은 `capture` 플래그를 지정하고 한 번은 지정하지 않은 채 부착하는 경우 각각 따로따로 제거해야 합니다. 캡처 플래그를 지정한 수신기의 제거는 비 캡처 수신기에 영향을 주지 않고, 그 반대도 마찬가지입니다.

{{domxref("EventTarget.addEventListener", "addEventListener()")}}에 {{domxref("AbortSignal")}}을 지정한 후, 나중에 {{domxref("AbortSignal.abort", "abort()")}}를 호출해서 수신기를 제거하는 방법도 있습니다.

## 구문

```js
removeEventListener(type, listener);
removeEventListener(type, listener, options);
removeEventListener(type, listener, useCapture);
```

### 매개변수

- `type`
  - : 이벤트 수신기를 제거할 이벤트 유형입니다.
- `listener`
  - : 이벤트 대상에서 제거할 수신기 {{domxref("EventListener")}} 함수입니다.
- `options` {{optional_inline}}
  - : 제거할 이벤트 수신기의 특징을 나타내는 옵션 객체입니다.

    가능한 옵션은 다음과 같습니다.

    - `capture`: 제거할 {{domxref("EventListener")}}가 캡처링 수신기로 등록됐는지에 대한 여부를 나타내는 불리언 값입니다. 기본 값은 `false`입니다.

- `useCapture` {{optional_inline}}
  - : 제거할 {{domxref("EventListener")}}가 캡처링 수신기로 등록됐는지에 대한 여부를 나타내는 불리언 값입니다. 기본 값은 `false`입니다.

### 반환 값.

없음.

### 제거할 이벤트 수신기의 식별

{{domxref("EventTarget.addEventListener", "addEventListener()")}}로 이벤트 수신기를 추가했다면, 수신기를 제거해야 할 때가 오기도 합니다. 당연히 추가할 때 지정한 것과 같은 `type` 및 `listener`를 `removeEventListener()`의 매개변수로 지정해야 하겠지만, `options`나 `useCapture` 매개변수는 어떻게 해야 할까요?

`addEventListener()`는 옵션이 다르다면 이벤트 유형 하나에 같은 수신기를 여러 번 부착합니다. 그러나 `removeEventListener()`가 고려하는 옵션은 `capture`/`useCapture` 플래그 단 하나입니다. 따라서 `capture`/`useCapture` 값은 일치해야 하지만, 나머지 옵션은 일치하지 않아도 됩니다.

다음의 `addEventListener()` 호출을 예시로 보겠습니다.

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

이제 아래의 두 `removeEventListener()` 호출을 살펴보세요.

```js
element.removeEventListener("mousedown", handleMouseDown, false);     // 실패
element.removeEventListener("mousedown", handleMouseDown, true);      // 성공
```

첫 번째 호출은 `useCapture`가 일치하지 않았기 때문에 실패하고, 두 번째 호출은 일치하기 때문에 성공합니다.

이제 다음 코드를 확인하세요.

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

위 코드에서는 `passive`를 `true`로 지정한 `option` 객체를 지정했습니다. 다른 옵션은 기본 값인 `false`가 됩니다.

아래의 `removeEventListener()` 호출 각각을 살펴보세요. `capture`나 `useCapture`가 `true`인 호출은 실패하고, 나머지는 모두 성공합니다.

`removeEventListener()`에 영향을 주는 옵션은 `capture` 뿐입니다.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true });     // 성공
element.removeEventListener("mousedown", handleMouseDown, { capture: false });    // 성공
element.removeEventListener("mousedown", handleMouseDown, { capture: true });     // 실패
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    // 성공
element.removeEventListener("mousedown", handleMouseDown, false);                 // 성공
element.removeEventListener("mousedown", handleMouseDown, true);                  // 실패
```

다만 일부 브라우저 버전에서는 이 동작이 일관적이지 않으므로, 어쩔 수 없는 경우가 아니라면 `addEventListener()`에 지정한 옵션을 그대로 `removeEventListener()`에 제공하는 편이 낫습니다.

## 예제

이 예제는 `click` 이벤트 수신기를 제거하는 `mouseover` 이벤트 수신기를 보입니다.

```js
const body = document.querySelector('body')
const clickTarget = document.getElementById('click-target')
const mouseOverTarget = document.getElementById('mouse-over-target')

let toggle = false;
function makeBackgroundYellow() {
  if (toggle) {
    body.style.backgroundColor = 'white';
  } else {
    body.style.backgroundColor = 'yellow';
  }

  toggle = !toggle;
}

clickTarget.addEventListener('click',
  makeBackgroundYellow,
  false
);

mouseOverTarget.addEventListener('mouseover', function () {
  clickTarget.removeEventListener('click',
    makeBackgroundYellow,
    false
  );
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("EventTarget.addEventListener()")}}
