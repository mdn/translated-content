---
title: exsl:node-set()
slug: Web/XML/EXSLT/Reference/exsl/node-set
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`exsl:node-set()` は結果木の断片からノード集合を返します。これは、変数の値を取得するために `select` 属性ではなく `xsl:variable` 要素の内容を使ったときに得られるものです。これにより、変数内に作成された XML を複数のステップで処理することができます。

また、`exsl:node-set()` を使って、文字列をテキストノードにすることができます。

## 構文

```plain
exsl:node-set(object)
```

### 引数

- `object`
  - : 対応するノード集合を返す対象となるオブジェクト。

### 返値

指定された `object` に対応するノード集合です。

## 仕様書

[EXSLT - EXSL:NODE-SET](https://exslt.github.io/exsl/functions/node-set/index.html)
