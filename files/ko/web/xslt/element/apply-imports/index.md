---
title: apply-imports
slug: Web/XSLT/Element/apply-imports
---

{{ XsltRef() }}

`<xsl:apply-imports>` 요소는 꽤 불가사의하고 보통은 복잡한 스타일시트에 쓰입니다. 가져오기(import) 우선순위는 가져온 스타일시트 안 템플릿 규칙보다 주 스타일시트의 안 템플릿 규칙이 더 높기를 요구합니다. 그러나, 때로는 처리기(processor)가 주 스타일시트 안 규칙보다 (우선순위가 낮은) 가져온 스타일시트의 템플릿 규칙을 쓰도록 강제할 수 있는 게 유용합니다.

### 문법

```
<xsl:apply-imports/>
```

### 필수 속성

없음.

### 선택 속성

없음.

### 타입

명령, 템플릿 안에 나타남

### 정의

[XSLT section 5.6, Overriding Template Rules](http://www.w3.org/TR/xslt#apply-imports)

### Gecko 지원

지원함.
