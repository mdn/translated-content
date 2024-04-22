---
title: Window.matchMedia()
slug: Web/API/Window/matchMedia
---

{{APIRef}}

**`Window.matchMedia()`** 메서드는 주어진 [미디어 쿼리](/ko/docs/Web/Guide/CSS/Media_queries) 문자열의 분석 결과를 나타내는 {{domxref("MediaQueryList")}} 객체를 반환합니다.

## 구문

```js
window.matchMedia(mediaQueryString);
```

### 매개변수

- `mediaQueryString`
  - : 분석할 미디어 쿼리를 나타내는 문자열.

### 반환 값

주어진 미디어 쿼리에 대한 {{domxref("MediaQueryList")}} 객체,

## 예제

다음 예제는 화면이 매우 좁을 때 다른 작업을 수행합니다.

```js
if (window.matchMedia("(min-width: 400px)").matches) {
  /* 뷰포트 너비가 400 픽셀 이상 */
} else {
  /* 뷰포트 너비가 400 픽셀 미만 */
}
```

더 많은 예제는 [Testing media queries programmatically](/ko/docs/Web/CSS/Media_Queries/Testing_media_queries)를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [미디어 쿼리 사용하기](/ko/docs/Web/Guide/CSS/Media_queries)
- [Using media queries from code](/ko/docs/DOM/Using_media_queries_from_code)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
