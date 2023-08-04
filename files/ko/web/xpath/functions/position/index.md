---
title: position
slug: Web/XPath/Functions/position
---

{{ XsltRef() }}

`position` 함수는 식 평가 문맥(expression evaluation context)와 위치가 같은 숫자를 반환합니다.

### 구문

```
position()
```

### 반환

식 평가 문맥과 위치가 같은 정수.

### 주의

- 문맥 안 노드의 위치는 0 기반이 아님을 주의하세요. 첫 노드는 위치가 1입니다.
- 문맥은 경로의 나머지로 결정됩니다.

```
<xsl:template match="//a[position() = 5">
 <!-- 이 템플릿은 문서 안 다섯 번째 a 요소와 일치합니다. -->
</xsl:template>
```

```
<xsl:template match="//div[@class='foo']/bar[position() = 1]">
 <!-- 이 템플릿은 class 속성이 "foo"이고 div 요소의 자식인 첫 번째 bar 요소와 일치합니다 -->
</xsl:template>
```

### 정의

[XPath 1.0 4.1](http://www.w3.org/TR/xpath#function-position)

### Gecko 지원

지원함.
