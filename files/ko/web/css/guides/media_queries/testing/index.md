---
title: Testing media queries programmatically
slug: Web/CSS/Guides/Media_queries/Testing
original_slug: Web/CSS/CSS_media_queries/Testing_media_queries
l10n:
  sourceCommit: f7daf15512ea736498837b68bcc36d82d6a323f4
---

{{Glossary("DOM")}} 은 {{domxref("MediaQueryList")}} 인터페이스와 그 메서드 및 속성을 통해 {{Glossary("media query")}} 의 테스트 결과를 프로그래밍 방식의 기능을 제공합니다. `MediaQueryList` 객체를 생성하게 되면 [쿼리](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries) 의 결과물을 확인하거나 결과가 바뀌면 그에 대한 알림을 받을 수 있게 됩니다.

## 미디어 쿼리 목록 생성하기

미디어 쿼리의 결과를 평가하기 전에, 쿼리를 나타내는 {{domxref("MediaQueryList")}} 객체 생성이 선행되어야 합니다. 이를 실행하기 위해서는, {{domxref("window.matchMedia")}} 메서드를 사용할 수 있습니다.

예를 들어, 장치가 가로 모드인지 세로 모드인지 [방향](/ko/docs/Web/CSS/@media/orientation)을 확인하는 쿼리 목록을 설정하려면 다음과 같이 할 수 있습니다.

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## 쿼리의 결과 확인하기

미디어 쿼리 목록을 생성하고 나면, [`matches`](/ko/docs/Web/API/MediaQueryList/matches) 속성의 값을 통하여 쿼리의 결과를 확인할 수 있게 됩니다.

```js
if (mediaQueryList.matches) {
  /* 뷰포트는 현재 세로 방향입니다. */
} else {
  /* 뷰포트는 현재 세로 방향이 아닌 가로 방향입니다. */
}
```

## 쿼리 알림 받기

쿼리의 평가 결과의 변경점을 지속적으로 확인해야 할 경우에는, 이를 반복적으로 확인하는 것보다 [이벤트 수신기](/ko/docs/Web/API/EventTarget/addEventListener) 를 활용하는 것이 더 효율적입니다. 이를 위해 미디어 쿼리의 상태가 변경될 때 (예를 들어, 미디어 쿼리 테스트가 `true` 에서 `false` 변경될 때 등) 호출될 콜백함수를 사용하여 {{domxref("MediaQueryList")}} 객체에 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 메서드를 활용할 수 있습니다.

```js
// 쿼리 목록 생성하기
const mediaQueryList = window.matchMedia("(orientation: portrait)");

//이벤트 수신기의 콜백 함수 정의하기
function handleOrientationChange(mql) {
  // …
}

// 방향 변경 처리기를 한 번 실행합니다.
handleOrientationChange(mediaQueryList);

//쿼리 목록에 콜백 함수를 수신기로써 추가합니다.
mediaQueryList.addEventListener("change", handleOrientationChange);
```

이 코드는 방향을 테스트하는 미디어 쿼리 목록을 생성하고, 여기에 이벤트 수신기를 추가합니다. 수신기를 정의하고 나면, 해당 수신기를 직접적으로 호출할 수 있습니다. 이로 인하여 수신기는 현재 장치의 방향을 기반으로 하여 조정이 이루어지고, 그렇지 않다면 코드는 장치가 실제로 가로 방향 모드에 있지만 세로 방향 모드에 있다고 가정할 수 있게 됩니다.

`handleOrientationChange()` 함수는 쿼리의 결과를 확인하고 방향이 변경될 때에 실행해야 할 작업들을 처리합니다.

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* 뷰포트가 현재 세로 방향입니다. */
  } else {
    /* 뷰포트가 현재 가로 방향입니다. */
  }
}
```

위에서 `evt` 파라미터를 정의했는데 이는 {{domxref("MediaQueryListEvent.media","media")}} 와 {{domxref("MediaQueryListEvent.matches","matches")}} 속성을 포함하는 {{domxref("MediaQueryListEvent")}} 타입의 객체입니다. `MediaQueryList` 의 이러한 기능들에 직접 접근하거나 이벤트 객체를 통하여 쿼리할 수 있습니다.

## 쿼리 알림 중단하기

미디어 쿼리의 값이 변화하면 받는 알림을 중단하기 위해서는, 이전에 정의했던 콜백 함수의 이름을 전달하여 `MediaQueryList` 의 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} 를 호출하여 중단할 수 있습니다.

```js
mediaQueryList.removeEventListener("change", handleOrientationChange);
```

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS 미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries) 모듈
- [CSS 객체 모델](/ko/docs/Web/API/CSS_Object_Model) 모듈
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
