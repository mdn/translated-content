---
title: regexp:match()
slug: Web/XML/EXSLT/Reference/regexp/match
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

`regexp:match()` は文字列に対して正規表現による照合を行い、その結果見つかった部分一致を返します。

## 構文

```plain
regexp:match(targetString, regExpString[, flagsString])
```

### 引数

- `targetString`
  - : 正規表現を照合する対象の文字列です。
- `regExpString`
  - : 評価する JavaScript 形式の正規表現です。
- `flagsString` {{optional_inline}}
  - : 文字フラグを含む省略可能な文字列です。

使用できるフラグ文字は次のとおりです。

- `g`
  - : グローバル一致です。文字列内のすべての一致に対する部分一致を返します。このフラグを指定しない場合は、最初の一致の部分一致のみを返します。
- `i`
  - : 大文字と小文字を区別しない照合です。このフラグを指定すると、大文字と小文字を区別せずに照合します。

### 返値

正規表現が捕捉した第一引数の一部と同じ文字列値を持つ `match` 要素からなるノード集合です。グローバル照合でない場合、最初の `match` 要素の値は、文字列のうち正規表現全体に一致した部分になります。

例:

```xml
<xsl:for-each select="regExp:match('https://developer.mozilla.org/en/docs/Firefox_3_for_developers',
                                   '(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)')">
   Part <xsl:value-of select="position()" /> = <xsl:value-of select="." />
</xsl:for-each>
```

このコードは次の結果を生成します。

```plain
Part 1 = https://developer.mozilla.org/en/docs/Firefox_3_for_developers
Part 2 = https
Part 3 = developer.mozilla.org
Part 4 =
Part 5 = /en/docs/Firefox_3_for_developers
```

## 仕様書

[EXSLT - REGEXP:MATCH](https://exslt.github.io/regexp/functions/match/index.html)
