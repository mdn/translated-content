---
title: match
slug: Web/EXSLT/regexp/match
---

{{ XsltRef() }}

`regexp:match()` performs regular expression matching on a string, returning the submatches found as a result.

### 语法

```js
regexp:match(targetString,regExpString[[,flagsString]])
```

### 参数

- `targetString`
  - : The string to perform regular expression matching upon.
- `regExpString`
  - : The JavaScript style regular expression to evaluate.
- `flagsString`
  - : An optional string containing character flags.

The character flags are:

- `g`
  - : 全局匹配。The submatches from every match in the string are returned. If this flag isn't specified, only the submatches from the first match are returned.
- `i`
  - : Case insensitive match. If this flag is specified, the match is performed in a case insensitive fashion.

### Returns

A node set of `match` elements, each of which has the string value equal to a portion of the first parameter string as captured by the regular expression. If the match isn't a global one, the first match element has the value of the portion of the string matched by the entire regular expression.

例如：

```xml
<xsl:for-each select="regExp:match('http://developer.mozilla.org/en/docs/Firefox_3_for_developers',
                                   '(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)')">
   Part <xsl:value-of select="position()" /> = <xsl:value-of select="." />
</xsl:for-each>
```

This code generates the following output:

```plain
Part 1 = http://developer.mozilla.org/en/docs/Firefox_3_for_developers
Part 2 = http
Part 3 = developer.mozilla.org
Part 4 =
Part 5 = /en/docs/Firefox_3_for_developers
```

### 定义

[EXSLT - REGEXP:MATCH](http://www.exslt.org/regexp/functions/match/index.html)

### Gecko support

Supported in Gecko 1.9 and later.
