---
title: Document.characterSet
slug: Web/API/Document/characterSet
---

{{ ApiRef("DOM") }}

**`Document.characterSet`** 읽기 전용 속성은 현재 문서가 렌더링에 사용하는 [문자 인코딩](/ko/docs/Glossary/character_encoding)을 반환합니다.

> **참고:** `Document.charset`과 `Document.inputEncoding` 속성은 `Document.characterSet`의 이전 별칭입니다. 더 이상 사용지 마세요.

## 예제

```html
<button onclick="console.log(document.characterSet);">
  콘솔에 인코딩 출력
</button>
<!-- "ISO-8859-1"이나 "UTF-8" 등, 문서의 캐릭터 셋 기록 -->
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
