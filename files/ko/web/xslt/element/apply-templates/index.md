---
title: apply-templates
slug: Web/XSLT/Element/apply-templates
---

{{ XsltRef() }}

`<xsl:apply-templates>` 요소는 입력 트리 안 노드 집합을 선택하고 그 집합에 알맞은 템플릿을 적용하도록 처리기에게 지시합니다.

### 문법

```
<xsl:apply-templates select=EXPRESSION mode=NAME>
  <xsl:with-param> [optional]
  <xsl:sort> [optional]
</xsl:apply-templates>
```

### 필수 속성

없음.

### 선택 속성

- `select`
  - : 처리할 노드를 지정하는 XPath 식을 씁니다. 별표(`*`)는 전체 노드 집합을 선택합니다. 이 속성이 없으면, 현재 노드의 모든 자식 노드를 선택합니다.
- `mode`
  - : 같은 노드를 정의하는 다양한 처리 방법이 있다면, 그 방법들을 구별합니다.

### 타입

명령, 템플릿 안에 나타남

### 정의

[XSLT section 5.4, Applying Template Rules](http://www.w3.org/TR/xslt#section-Applying-Template-Rules)

### Gecko 지원

지원함.
