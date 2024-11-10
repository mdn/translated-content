---
title: Event handling (요약)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

이벤트는 브라우저 창 내부에서 발생하는 신호로 브라우저 또는 운영 체제 환경의 변화를 알려줍니다. 프로그래머는 이벤트가 발생할 때 실행되는 이벤트 처리기 코드를 생성하여 웹 페이지가 변화에 적절하게 반응하도록 할 수 있습니다.

이 페이지에서는 이벤트 및 이벤트 처리기 작업 방법에 대한 매우 간략한 "리마인더"를 제공합니다. 새로운 개발자는 대신 [이벤트 소개](/ko/docs/Learn/JavaScript/Building_blocks/Events)를 읽어야 합니다.

## 이용 가능한 이벤트는 무엇입니까?

이벤트는 해당 이벤트를 방출하는 JavaScript 객체에 대한 페이지 또는 페이지 아래에 문서화됩니다. 예를 들어 브라우저 창 또는 현재 문서에서 발생한 이벤트를 알아보려면 [`Window`](/ko/docs/Web/API/Window#events)와 [`Document`](/ko/docs/Web/API/Document#events)를 참조하십시오.

[이벤트 참조](/ko/docs/Web/Events#Event_index)를 사용하여 애니메이션, 미디어 등 특정 API에 대한 이벤트를 시작하는 JavsScript 객체를 확인할 수 있습니다.

## 이벤트 처리기 등록

이벤트 처리기를 등록하기 위해서는 두 가지 방법을 권장합니다. 이벤트 처리기 코드는 대상 요소의 해당 onevent 속성에 할당하거나 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 메서드를 사용하여 이벤트 처리기를 요소의 이벤트 수신기로 등록하여 실행할 수 있습니다. 어느 경우에나 이벤트 수신기는 [`이벤트` 인터페이스](/ko/docs/Web/API/Event) 또는 [파생된 인터페이스](/ko/docs/Web/API/Event#introduction)를 준수하는 객체를 수신합니다. 주요 차이점은 이벤트 수신기 방법을 사용하여 여러 이벤트 처리기를 추가하거나 제거할 수 있다는 것입니다.

> [!WARNING]
> HTML onevent 특성을 사용하여 이벤트 처리기를 설정하는 세 번째 접근 방식은 권장하지 않습니다. 마크업을 부풀리고 읽기 어렵고 디버그하기 어렵게 만듭니다. 자세한 내용은 [인라인 이벤트 처리기](/ko/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these)를 참조하십시오.

### onevent 속성 사용

관례적으로 이벤트를 실행하는 JavsScript 객체는 이벤트 이름에 "on"을 접두사로 붙여 이름이 지정된 해당 "onevent" 속성을 가집니다. 이러한 속성은 이벤트가 실행될 때 관련 이벤트 처리기 코드를 실행하기 위해 호출되며, 자신의 코드에 의해 직접 호출될 수도 있습니다.

이벤트 처리기 코드를 설정하려면 해당 onevent 속성에 할당하기만 하면 됩니다. 요소의 모든 이벤트에 대해 하나의 이벤트 처리기만 할당할 수 있습니다. 필요한 경우 동일한 속성에 다른 기능을 할당하여 이벤트 처리기를 대체할 수 있습니다.

아래에서는 `onclick` 속성을 사용하여 `click` 이벤트에 대한 간단한 `greet()` 기능을 설정하는 방법을 보여줍니다.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

이벤트를 나타내는 객체는 이벤트 처리기에 첫 번째 인수로 전달됩니다. 이 이벤트 객체는 {{domxref("Event")}} 인터페이스를 구현하거나 이로부터 파생됩니다.

### EventTarget.addEventListener

요소에 이벤트 이벤트 처리기를 설정하는 가장 유연한 방법은 {{domxref("EventTarget.addEventListener")}} 방법을 사용하는 것입니다. 이 방법을 사용하면 요소에 여러 이벤트 수신기를 할당하고 필요한 경우 {{domxref("EventTarget.removeEventListener")}} 를 사용하여 수신기를 제거할 수 있습니다.

> [!NOTE]
> 이벤트 처리기를 추가 및 제거하는 기능을 통해 예를 들어, 동일한 버튼으로 다른 상황에서 다른 작업을 수행할 수 있습니다. 또한, 더 복잡한 프로그램에서 오래된/사용되지 않은 이벤트 처리기를 정리하면 효율성을 향상시킬 수 있습니다.

아래에서는 간단한 `greet()` 함수를 `click` 이벤트의 수신기/이벤트 처리기로 설정하는 방법을 보여줍니다. 원하는 경우 명명된 함수 대신 람다 함수를 사용할 수 있습니다. 이벤트는 이벤트 처리기의 첫 번째 인수로 전달됩니다.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

이 방법은 이벤트가 캡처되고 제거되는 방식을 제어하기 위해 추가 인수/옵션을 취할 수도 있습니다. 자세한 정보는 {{domxref("EventTarget.addEventListener")}} 참조 페이지에서 확인할 수 있습니다.

#### 중단 신호 사용

주목할 만한 이벤트 수신기 기능은 중단 신호를 사용하여 여러 이벤트 처리기를 동시에 정리할 수 있는 기능입니다.

이 작업은 동일한 {{domxref("AbortSignal")}} 를 {{domxref("EventTarget/addEventListener()", "addEventListener()")}} 호출에 전달하여 함께 제거할 수 있는 모든 이벤트 처리기를 호출합니다. 그 다음 `AbortSignal`을 소유한 컨트롤러에서 {{domxref("AbortController/abort()", "abort()")}}를 호출하면 해당 신호와 함께 추가된 모든 이벤트 처리기가 제거됩니다. 예를 들어 `AbortSignal`로 제거할 수 있는 이벤트 처리기를 추가하는 것입니다.

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // 이 처리기에 AbortSignal을 전달
```

그러면 위의 코드로 생성된 이벤트 처리기는 다음과 같이 제거할 수 있습니다.

```js
controller.abort(); // 이 컨트롤러와 연결된 모든 이벤트 처리기를 제거합니다.
```

<section id="Quick_links">
  <ol>
    <li><a href="/ko/docs/Learn/JavaScript/Building_blocks/Events">이벤트에 대한 소개</a></li>
    <li><a href="/ko/docs/Web/Events">이벤트 참고서</a></li>
  </ol>
</section>
