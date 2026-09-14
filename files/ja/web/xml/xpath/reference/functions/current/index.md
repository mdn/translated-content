---
title: current
slug: Web/XML/XPath/Reference/Functions/current
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`current` 関数を使用すると、 XSLT 命令でコンテキストノードを取得できます。

## 構文

```plain
current()
```

### 返値

現在のノードのみを含むノード集合。

## 解説

この関数は XSLT 固有の XPath への追加です。コア XPath 関数ライブラリーの一部ではありません。

一番外側の式（別の式内に現れない式）の場合、現在のノードは常にコンテキストノード（`.` または `self` 構文によって返されます）と同じです。次の 2 つは意味的に同等です。

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

内側の式（角括弧など）では、現在のノードは一番外側の式の場合と同じです。したがって、次の 3 つの式のすべてにおいて`current`関数（式全体ではない）が同じノードを返します。さらに、後者の 2 つは意味的に同等です。

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="foo/bar[current() = X]"/>
```

```xml
<xsl:variable name="current" select="current()"/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

そして、次のコードは最も外側の式に `.` があるので、後者のコードと意味的に同じです。

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

しかし、 `.` は常に最も狭い文脈に関係しています。したがって、

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

`.` は `bar` ノードを返します。これは現在のノードとは異なる場合があります。

## 仕様書

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-current)

## Gecko の対応

対応済み。
