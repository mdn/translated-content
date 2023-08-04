---
title: for-each
slug: Web/XSLT/Element/for-each
---

{{ XsltRef() }}

`<xsl:for-each>` 요소는 노드 집합을 선택하고 같은 방식으로 각 노드를 처리합니다. 노드 집합을 되풀이하(iterate)거나 현재 노드를 바꾸는데 자주 씁니다. 하나 이상의 `<xsl:sort>` 요소가 이 요소의 자식으로 나타나면, 처리에 앞서 정렬을 합니다. 그렇지 않으면, 노드는 문서 순으로 처리합니다.

### 문법

```
<xsl:for-each select=EXPRESSION>
  <xsl:sort> [optional]
  TEMPLATE
</xsl:for-each>
```

### 필수 속성

- `select`
  - : 처리할 노드를 선택하기 위해 XPath 식을 씁니다.

### 선택 속성

없음.

### 타입

명령, 템플릿 안에 나타남.

### 정의

[XSLT section 8, Repetition](http://www.w3.org/TR/xslt#for-each)

### Gecko 지원

지원함.
