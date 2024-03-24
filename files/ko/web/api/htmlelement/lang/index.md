---
title: "HTMLElement: lang 속성"
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.lang`** 속성은 요소의 특성 값과 텍스트 내용의 기본 언어를 가져오거나 설정합니다.

이 속성에 의해 반환되는 언어 코드는 {{RFC(5646, "BCP 47로도 알려진 언어 식별용 태그")}}에 정의되어 있습니다. 일반적인 예로 영어의 "en", 일본어의 "ja", 스페인어의 "es" 등을 포함합니다. 이 특성의 기본값은 `unknown`입니다. 이 특성은 여기에 설명된 개별 요소 수준에서 유효하지만 문서의 루트 요소에 지정되는 경우가 가장 많습니다.

또한 `lang` 특성에서만 작동하고 `xml:lang`에서는 작동하지 않습니다.

## 값

문자열입니다.

## 예제

```js
// 이 스니펫은 기본 언어를 비교하고 언어에 기반하여 다른 URL로 리다이렉션합니다.
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
