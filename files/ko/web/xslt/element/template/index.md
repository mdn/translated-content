---
title: template
slug: Web/XSLT/Element/template
---

{{ XsltRef() }}

`<xsl:template>` 요소는 출력 생성 템플릿을 정의합니다. 이 요소는 match 속성이나 name 속성 집합이 있어야 합니다.

### 문법

```
<xsl:template
  match=PATTERN
  name=NAME
  mode=NAME
  priority=NUMBER>
  <xsl:param> [optional]
  TEMPLATE
</xsl:template>
```

### 필수 속성

없음.

### 선택 속성

- `match`
  - : 이 템플릿을 쓰면 좋을 요소를 결정하는 패턴을 지정합니다. `name` 속성이 없다면, 필수 속성입니다.
- `name`
  - : `<xsl:call-template>` 요소가 호출할 수 있는 이 템플릿에 이름을 지정합니다.
- `mode`
  - : 이 템플릿에 `<xsl:apply-templates>` 요소의 속성과 일치할 수 있는 특유한 모드를 지정합니다. 이는 같은 정보를 다양한 방식으로 처리하는데 유용합니다.
- `priority`
  - : 이 템플릿에 숫자로 된 우선권을 지정합니다. 이는 `Infinity`와 다른 아무 숫자일 수 있습니다. 처리기는 하나 이상의 템플릿이 같은 노드와 일치할 때 이 숫자를 씁니다.

### 타입

최상위, `<xsl:stylesheet>`나 `<xsl:transform>`의 자식이어야 함.

### 정의

[XSLT section 5.3, Defining Template Rules](http://www.w3.org/TR/xslt#section-Defining-Template-Rules)

### Gecko 지원

지원함.
