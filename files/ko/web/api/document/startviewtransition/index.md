---
title: "Document: startViewTransition() 메서드"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("Document")}}{{SeeCompatTable}}

{{domxref("View Transitions API", "View Transitions API", "", "nocode")}}의 **`startViewTransition()`** 메서드는 새로운 뷰 전환을 시작하고 이를 나타내는 {{domxref("ViewTransition")}} 객체를 반환합니다.

`startViewTransition()`이 호출되면 [뷰 전환 과정](/ko/docs/Web/API/View_Transition_API#뷰_전환_프로세스)에 설명된 대로 일련의 단계를 따릅니다.

## 구문

```js-nolint
startViewTransition(callback)
```

### 매개변수

- `callback`
  - : 일반적으로 뷰 전환 과정 중에 DOM을 업데이트하기 위해 호출되는 콜백 함수로, {{jsxref("Promise")}}를 반환합니다. 콜백은 API가 현재 페이지의 스크린샷을 찍으면 호출됩니다. 콜백에 의해 반환된 프로미스가 충족되면 다음 프레임에서 뷰 전환을 시작합니다. 콜백에 의해 반환된 프로미스가 거부되면 전환이 중단됩니다.

### 반환 값

{{domxref("ViewTransition")}} 객체 인스턴스입니다.

## 예제

### 기본 사용법

[기본 뷰 전환 SPA 데모](https://mdn.github.io/dom-examples/view-transitions/spa/)에서 `updateView()` 함수는 View Transitions API를 지원하는 브라우저와 지원하지 않는 브라우저 모두 처리합니다. 지원 브라우저에서는 반환 값에 대한 걱정없이 `startViewTransition()`을 호출하여 뷰 전환 과정을 설정합니다.

```js
function updateView(event) {
  // 이벤트가 <a> 태그에서 실행되는지, <img> 태그에서 실행하는지에 따라 차이를 처리합니다.
  let targetIdentifier;
  if (event.target.firstChild === null) {
    targetIdentifier = event.target;
  } else {
    targetIdentifier = event.target.firstChild;
  }

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // 뷰 전환을 지원하지 않는 브라우저를 위한 폴백입니다.
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // 뷰 전환을 사용합니다.
  const transition = document.startViewTransition(() => displayNewImage());
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
