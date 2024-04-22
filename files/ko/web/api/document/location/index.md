---
title: Document.location
slug: Web/API/Document/location
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`Document.location`** 은 {{domxref("Location")}} 객체를 반환하는 읽기 전용 속성입니다. {{domxref("Location")}}은 document의 URL에 대한 정보를 포함하고 해당 URL을 변경하거나 다른 URL을 로딩하는 메서드를 제공합니다.

`Document.location`은 읽기 전용 `Location` 객체지만, 문자열을 할당할 수도 있습니다. 즉, 대부분의 경우에 `document.location`을 문자열처럼 사용할 수 있습니다. `document.location = 'http://www.example.com'`은 `document.location.href = 'http://www.example.com'`와 동의어입니다. 만약 다른 문자열을 할당한다면 브라우저가 할당된 웹사이트를 로드합니다.

URL을 문자열로 가져오려면 읽기 전용 속성인 {{domxref("document.URL")}}도 사용할 수 있습니다.

만약 현재 document가 브라우저 맥락이 아니라면 `null`을 반환합니다.

## 값

{{domxref("Location")}} 객체

## 예제

```js
console.log(document.location);
// Location 객체를 console에 출력
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 반환 값의 인터페이스 {{domxref("Location")}}.
- 비슷한 정보지만 {{Glossary("browsing context")}}에 속한 {{domxref("Window.location")}}.
