---
title: Window.matchMedia() method
slug: Web/API/Window/matchMedia
---

{{APIRef}}

{{domxref("Window")}} 인터페이스의 **`matchMedia()`** 메서드는 새로운 {{domxref("MediaQueryList")}} 객체를 반환합니다. 이 객체를 사용하면 {{domxref("document")}}가 [미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries) 문자열과 일치하는지 확인할 수 있으며, 문서가 해당 미디어 쿼리와 일치하게 되거나 더 이상 일치하지 않게 되는 시점을 감시할 수도 있습니다.

## 구문

```js-nolint
matchMedia(mediaQueryString)
```

### 매개변수

- `mediaQueryString`
  - : 분석할 {{domxref("MediaQueryList")}}를 나타내는 문자열.

  - : CSS에서와 마찬가지로, [미디어 특성](/ko/docs/Web/CSS/@media#media_features)은 반드시 괄호로 감싸야 합니다.
    예: `matchMedia("(width <= 600px)")` 또는 `matchMedia("(orientation: landscape)")`는 올바른 표현이지만 `matchMedia("width < 600px")` 또는 `matchMedia("orientation: landscape")`는 잘못된 표현입니다. 미디어 타입 키워드(`all`, `print`, `screen`)와 논리 연산자(`and`, `or`, `not`, `only`)는 괄호로 감쌀 필요가 없습니다.

### 반환 값

주어진 미디어 쿼리에 대한 새로운 {{domxref("MediaQueryList")}} 객체. 이 객체의 속성과 이벤트를 사용해 조건 일치 여부를 확인하거나, 시간이 지나면서 조건이 변하는지 지속적으로 감시할 수 있습니다.

## 사용 일람

반환된 미디어 쿼리를 사용하면 문서가 해당 미디어 쿼리와 일치하는지를 즉시 확인하거나 이벤트 기반으로 확인할 수 있습니다.

문서가 미디어 쿼리와 일치하는지 한 번만 즉시 확인하려면 {{domxref("MediaQueryList.matches", "matches")}} 속성 값을 확인하면 됩니다. 문서가 미디어 쿼리 조건을 만족하면 `true`를 반환합니다.

문서가 미디어 쿼리와 일치하는지를 항상 인지해야 한다면 객체에 전달되는 {{domxref("MediaQueryList.change_event", "change")}} 이벤트를 감시하면 됩니다. [이에 대한 좋은 예시](/ko/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes)는 {{domxref("Window.devicePixelRatio")}} 문서의 해상도 또는 확대/축소 수준 변화 모니터링 섹션에서 확인할 수 있습니다.

## 예제

다음 예제는 `(width <= 600px)` 미디어 쿼리를 실행하고, 결과로 얻은 `MediaQueryList` 객체의 `matches` 속성 값을 {{HTMLElement("span")}} 요소에 출력합니다. 따라서 뷰포트가 600픽셀 이하라면 "true", 그보다 넓으면 "false"가 표시됩니다.

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

JavaScript 코드는 미디어 쿼리를 matchMedia()에 전달해 이를 컴파일한 다음, 반환된 결과의 {{domxref("MediaQueryList.matches", "matches")}} 속성 값을 {{HTMLElement("span")}} 요소의 {{domxref("HTMLElement.innerText", "innerText")}}에 설정합니다. 이렇게 하면 페이지가 로드된 순간 문서가 해당 미디어 쿼리와 일치하는지 여부를 표시할 수 있습니다.

### HTML

```html
<span class="mq-value"></span>
```

A simple `<span>` to receive the output.

```css hidden
.mq-value {
  font:
    18px arial,
    sans-serif;
  font-weight: bold;
  color: #8888ff;
  padding: 0.4em;
  border: 1px solid #ddddee;
}
```

### 결과

{{EmbedLiveSample("Examples", "100%", "60")}}

추가 코드 예시는 [코드에서 미디어 쿼리 사용하기](/ko/docs/Web/CSS/CSS_media_queries/Testing_media_queries) 문서를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [미디어 쿼리 사용하기](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/ko/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{domxref("MediaQueryList")}}
