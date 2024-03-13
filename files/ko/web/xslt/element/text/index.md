---
title: text
slug: Web/XSLT/Element/text
---

{{ XsltRef() }}

`<xsl:text>` 요소는 출력 트리에 리터럴(literal) 텍스트를 씁니다. `#PCDATA`, 리터럴 텍스트, 엔티티 참조를 포함할 지도 모릅니다.

### 구문

```
<xsl:text disable-output-escaping="yes" | "no">
  TEXT
</xsl:text>
```

### 필수 속성

없음.

### 선택 속성

- `disable-output-escaping` (Netscape은 변환 결과를 "output" 아래에 직렬하지 않습니다. 그래서 이 속성은 본래 문맥에서는 무의미합니다. HTML 엔티티를 출력하기 위해서는, 대신 숫자값을 쓰세요. 보기 &`nbsp` 대신 `&#160`)
  - : 특수 문자를 출력에 쓸 때 해석할(escape) 지를 지정합니다. 가능한 값은 "`yes`"나 "`no`"입니다. 예를 들어, "`yes`"로 하면, 문자의 출력은 "`&gt`"가 아니라 `>`입니다.

### 타입

명령, 템플릿 안에 나타남.

### 정의

[XSLT section 7.2, Creating Text](http://www.w3.org/TR/xslt#section-Creating-Text)

### Gecko 지원

적힌 대로 지원함
