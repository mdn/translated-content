---
title: sort
slug: Web/XSLT/Element/sort
---

{{ XsltRef() }}

`<xsl:sort>` 요소는 `<xsl:apply-templates>`나 `<xsl:for-each>`가 선택한 노드에 정렬키를 정의하고 노드를 처리할 순서를 결정합니다.

### 문법

```
<xsl:sort
  select=EXPRESSION
  order="ascending" | "descending"
  case-order="upper-first"| "lower-first"
  lang=XML:LANG-CODE
  data-type="html" | "xml" | "text" />
```

### 필수 속성

없음.

### 선택 속성

- `select`
  - : 정렬할 노드를 지정하는 XPath 식을 씁니다.
- `order`
  - : "`ascending`"나 "`descending`"으로 처리하면 좋을 노드를 지정합니다. 기본값은 "`ascending`"입니다.
- `case-order`
  - : 처음에 오는 게 대문자인지 소문자인지를 나타냅니다. 가능한 값은 "`upper-first`"와 "`lower-first`"입니다.
- `lang`
  - : 어떤 언어를 정렬에 쓸지를 지정합니다.
- `data-type`
  - : 어떤 항목을 알파벳순이나 숫자순으로 순서 매길지를 정의합니다. 가능한 값은 "`text`"와 기본값인 "`text`"가 있는 "`number`"입니다.

### 타입

하위명령, 항상 `<xsl:for-each>`의 자식으로 나타나고 고유(proper) 템플릿이나 `<xsl:apply-templates>` 앞에 나타나야 함.

### 정의

[XSLT section 10, Sorting](http://www.w3.org/TR/xslt#sorting)

### Gecko 지원

지원함.
