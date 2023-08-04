---
title: message
slug: Web/XSLT/Element/message
---

{{ XsltRef() }}

`<xsl:message>` 요소는 (NS에서 자바스크립트 콘솔에) 메시지를 출력하고 선택에 따라 스타일시트 실행을 끝냅니다. 디버깅에 유용할 수 있습니다.

### 문법

```
<xsl:message terminate="yes" | "no" >
  TEMPLATE
</xsl:message>
```

### 필수 속성

없음.

### 선택 속성

- `terminate`
  - : "`yes`"로 설정하면, 실행을 끝마치는 게 좋겠다는 것을 나타냅니다. 기본값은 "`no`"이고 어느 경우에는 메시지가 출력하고 실행을 계속합니다.

### 타입

명령, 템플릿 안에 나타남.

### 정의

[XSLT section 13, Messages](http://www.w3.org/TR/xslt#message)

### Gecko 지원

지원함.
