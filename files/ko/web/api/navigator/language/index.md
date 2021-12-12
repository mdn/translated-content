---
title: Navigator.language
slug: Web/API/Navigator/language
tags:
  - API
  - Language
  - Navigator
  - Property
  - Read-only
  - Reference
browser-compat: api.Navigator.language
translation_of: Web/API/Navigator/language
---
{{APIRef("HTML DOM")}}

**`Navigator.language`** 읽기 전용 속성은 사용자의 선호 언어(일반적으로 브라우저 UI의 언어)를 나타내는 문자열을 반환합니다.

## 구문

```js
const lang = navigator.language
```

### 값

{{RFC(5646, "Tags for Identifying Languages(BCP 47)")}}가 정의한 언어 태그의 {{domxref("DOMString")}}입니다. 유효한 값은 "en", "en-US", "ko", "ko-KR" 등입니다.

iOS Safari 버전 10.2 이전에서는 "en-us", "ko-kr"처럼 국가 코드를 소문자로 반환합니다.

## 예제

```js
if (/^en\b/.test(navigator.language)) {
  doLangSelect(window.navigator.language);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
