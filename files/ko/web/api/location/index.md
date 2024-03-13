---
title: Location
slug: Web/API/Location
---

{{APIRef("HTML DOM")}}

**`Location`** 인터페이스는 객체가 연결된 장소(URL)를 표현합니다. `Location` 인터페이스에 변경을 가하면 연결된 객체에도 반영되는데, {{domxref("Document")}}와 {{domxref("Window")}} 인터페이스가 이런 `Location`을 가지고 있습니다. 각각 {{domxref("Document.location")}}과 {{domxref("Window.location")}}으로 접근할 수 있습니다.

## 속성

`Location` 인터페이스는 아무 속성도 상속하지 않지만, {{domxref("URLUtils")}}의 속성을 구현합니다.

- {{domxref("Location.href")}}
  - : 온전한 URL을 값으로 하는 {{domxref("DOMString")}}입니다. 바뀔 경우 연결된 문서도 새로운 페이지로 이동합니다. 연결된 문서와 다른 오리진에서도 설정할 수 있습니다.
- {{domxref("Location.protocol")}}
  - : URL의 프로토콜 부분을 값으로 하는 {{domxref("DOMString")}}으로, 마지막의 `':'`도 포함합니다.
- {{domxref("Location.host")}}
  - : URL의 호스트 부분을 값으로 하는 {{domxref("DOMString")}}으로, 호스트명, `':'`, 포트 번호를 포함합니다.
- {{domxref("Location.hostname")}}
  - : URL의 도메인 부분을 값으로 하는 {{domxref("DOMString")}}입니다.
- {{domxref("Location.port")}}
  - : URL의 포트 번호를 값으로 하는 {{domxref("DOMString")}}입니다.
- {{domxref("Location.pathname")}}
  - : `'/'` 문자 뒤 URL의 경로를 값으로 하는 {{domxref("DOMString")}}입니다.
- {{domxref("Location.search")}}
  - : `'?'` 문자 뒤 URL의 쿼리스트링을 값으로 하는 {{domxref("DOMString")}}입니다. 모던 브라우저에서는 {{domxref("URLSearchParams.get()")}}과 {{domxref("URL.searchParams")}}를 사용해서 인자를 쉽게 추출할 수 있습니다.
- {{domxref("Location.hash")}}
  - : `'#'` 문자 뒤 URL의 프래그먼트 식별자를 값으로 하는 {{domxref("DOMString")}}입니다.
- {{domxref("Location.username")}}
  - : 도메인 이름 이전에 명시된 사용자명을 값으로 하는 {{domxref("DOMString")}}입니다.
- {{domxref("Location.password")}}
  - : 도메인 이름 이전에 명시된 비밀번호를 값으로 하는 {{domxref("DOMString")}}입니다.
- {{domxref("Location.origin")}} {{readOnlyInline}}
  - : 지정한 장소 오리진의 표준 형태를 값으로 하는 {{domxref("DOMString")}}입니다.

## 메서드

`Location` 인터페이스는 아무 메서드도 상속하지 않지만, {{domxref("URLUtils")}}의 메서드를 구현합니다.

- {{domxref("Location.assign()")}}
  - : 주어진 URL의 리소스를 불러옵니다.
- {{domxref("Location.reload()")}}
  - : 현재 URL의 리소스를 다시 불러옵니다. 선택적으로 매개변수에 `true`를 제공해 브라우저 캐시를 무시하고 서버에서 새로 불러올 수 있습니다,
- {{domxref("Location.replace()")}}
  - : Replaces the current resource with the one at the provided URL. The difference from the `assign()` method is that after using `replace()` the current page will not be saved in session {{domxref("History")}}, meaning the user won't be able to use the _back_ button to navigate to it.
- {{domxref("Location.toString()")}}
  - : Returns a {{domxref("DOMString")}} containing the whole URL. It is a synonym for {{domxref("URLUtils.href")}}, though it can't be used to modify the value.

## 예제

```js
// Create anchor element and use href property for the purpose of this example
// A more correct alternative is to browse to the URL and use document.location or window.location
var url = document.createElement("a");
url.href =
  "https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container";
console.log(url.href); // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(url.protocol); // https:
console.log(url.host); // developer.mozilla.org:8080
console.log(url.hostname); // developer.mozilla.org
console.log(url.port); // 8080
console.log(url.pathname); // /en-US/search
console.log(url.search); // ?q=URL
console.log(url.hash); // #search-results-close-container
console.log(url.origin); // https://developer.mozilla.org:8080
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- Two methods creating such an object: {{domxref("Window.location")}} and {{domxref("Document.location")}}.
- URL related interfaces: {{domxref("URL")}}, {{domxref("URLSearchParams")}} and {{domxref("HTMLHyperlinkElementUtils")}}
