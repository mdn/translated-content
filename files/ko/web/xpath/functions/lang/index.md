---
title: lang
slug: Web/XPath/Functions/lang
---

{{XsltSidebar}}{{ XsltRef() }}

`lang` 함수는 문맥 노드가 인수로 준 언어와 일치하는 지를 결정하고 true나 false를 반환합니다.

### 구문

```
lang(string )
```

### 인수

- `string`
  - : 일치 여부에 사용하는 언어 코드나 지역화 (언어와 나라) 코드.

### 반환

문맥 노드가 인수로 준 언어와 일치하면 `true`. 그렇지 않으면, `false`.

### 주의

- 노드의 언어는 노드의 `xml:lang` 속성으로 결정됩니다. 만약 현재 노드에 `xml:lang` 속성이 없으면, `xml:lang` 속성이 있는 가장 가까운 조상(ancestor) 노드의 `xml:lang` 속성값을 현재 노드의 언어로 결정합니다. 만약 언어가 결정될 수 없으면 (`xml:lang` 속성이 있는 조상이 없는 경우), 이 함수는 false를 반환합니다.
- If 인수로 준 `string`이 나라 코드를 지정하지 않으면, 이 함수는 아무 나라 코드를 갖는 그 언어의 노드와 일치합니다. 반대는 true가 아닙니다.

이 XML 코드 조각을 주고

```
<p xml:lang="en">I went up a floor.</p>
<p xml:lang="en-GB">I took the lift.</p>
<p xsl:lang="en-US">I rode the elevator.</p>
```

XSL 템플릿이 이렇다면

```
<xsl:value-of select="count(//p[lang('en')])" />
<xsl:value-of select="count(//p[lang('en-GB')])" />
<xsl:value-of select="count(//p[lang('en-US')])" />
<xsl:value-of select="count(//p[lang('de')])" />
```

출력은 다음과 같을 지도 모릅니다.

```
3
1
1
0
```

### 정의

[XPath 1.0 4.3](https://www.w3.org/TR/xpath#function-lang)

### Gecko 지원

지원함.
