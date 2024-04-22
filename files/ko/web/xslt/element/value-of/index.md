---
title: value-of
slug: Web/XSLT/Element/value-of
---

{{ XsltRef() }}

`<xsl:value-of>` 요소는 XPath 식을 평가하여 그것을 문자열로 바꾸고 문자열을 결과 트리에 씁니다.

### 구문

```
<xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />
```

### 필수 속성

- `select`
  - : 평가하고 출력 트리에 쓸 XPath 식을 지정합니다.

### 선택 속성

- `disable-output-escaping` (Netscape은 변환 결과를 "output" 아래에 직렬하지 않습니다. 그래서 이 속성은 본래 문맥에서는 무의미합니다. HTML 엔티티를 출력하기 위해서는, 대신 숫자값을 쓰세요. 보기 &`nbsp` 대신 `&#160`)
  - : 특수 문자를 출력에 쓸 때 해석할(escape) 지를 지정합니다. 가능한 값은 "`yes`"나 "`no`"입니다. 예를 들어, "`yes`"로 하면, 문자의 출력은 "`&gt`"가 아니라 `>`입니다.

### 타입

명령, 템플릿 안에 나타남.

### 정의

[XSLT section 7.6.1, Generating Text with xsl:value-of](http://www.w3.org/TR/xslt#value-of)

### Gecko 지원

위 경우를 빼고는 지원함.
