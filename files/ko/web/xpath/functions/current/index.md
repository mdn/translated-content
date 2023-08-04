---
title: current
slug: Web/XPath/Functions/current
---

{{ XsltRef() }}

`current` 함수는 XSLT 명령에서 문맥 노드를 얻는 데 쓸 수 있습니다.

### 문법

```
current()
```

### 반환

오직 현재 노드만을 포함하는 노드 집합.

### 주의

이 함수는 XPath에 더한 XSLT 고유 추가분입니다. 기본 XPath 함수 라이브러리의 일부가 아닙니다.

For an outermost expression (an expression not occurring within another expression), the current node is always the same as the context node (which will be returned by the `.` or `self` syntax). The following two are symantically equivalent.

```
<xsl:value-of select="current()"/>
```

```
<xsl:value-of select="."/>
```

In an inner expression (e.g. in square brackets), the current node is still the same as it would have been in an outermost expression. Thus within all of the following three expressions the `current` function (not the entire expressions) returns the same node. Moreover, the latter two are semantically equivalent.

```
<xsl:value-of select="current()"/>
```

```
<xsl:value-of select="foo/bar[current() = X]"/>
```

```
<xsl:variable name="current" select="current()"/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

And the next code is also semantically equivalent to the latter two, since the `.` occurs in an outermost expression.

```
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

But the `.` always relate to the narrowest context. Thus in

```
<xsl:value-of select="foo/bar[. = X]"/>
```

the `.` returns the `bar` node, which may be different from the current node.

### 정의

[XSLT 1.0 12.4](http://www.w3.org/TR/xslt#function-current)

### Gecko 지원

지원함.
