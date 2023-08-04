---
title: Document.domain
slug: Web/API/Document/domain
---

{{ApiRef}}

{{domxref("Document")}} 인터페이스의 **`domain`** 속성은 [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)에서 사용하는 현재 문서의 {{glossary("origin", "출처")}}에서 도메인 부분을 설정하거나 가져옵니다.

`domain` 속성을 성공적으로 설정하면 출처의 포트를 {{jsxref("null")}}로 설정합니다.

## 구문

```js
const domainString = document.domain;
document.domain = domainString;
```

### 값

현재 문서 출처의 도메인 부분.

### 예외

- `SecurityError`
  - : 다음 상황에서 `domain`을 변경하려 시도한 경우.\* 샌드박스 설정된 {{htmlelement("iframe")}} 요소에 속한 문서
    - {{glossary("browsing context", "브라우징 맥락")}}이 없는 문서
    - 문서의 [유효 도메인](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain)이 `null`
    - 주어진 값이 문서의 유효 도메인과 같지 않거나, 등록 가능한 도메인 접미사가 아닌 경우
    - {{httpheader('Feature-Policy/document-domain','document-domain')}} {{HTTPHeader("Feature-Policy")}} 헤더가 설정된 경우

## 예제

### 도메인 가져오기

`http://developer.mozilla.org/ko/docs/Web` 주소에서, 다음 코드는 `currentDomain` 변수에 "`developer.mozilla.org`" 문자열을 할당합니다.

```js
const currentDomain = document.domain;
```

### 창 닫기

어느 문서, 예컨대 `www.example.xxx/good.html` 등이 `www.example.com`의 도메인을 가지고 있을 때, 다음 예제는 창을 닫으려 시도합니다.

```js
const badDomain = "www.example.xxx";

if (document.domain == badDomain) {
  // 예시에 불과 (window.close()는 아무것도 하지 않을 수도 있음)
  window.close();
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)
