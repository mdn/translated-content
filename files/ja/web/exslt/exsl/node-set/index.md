---
title: exsl:node-set()
slug: Web/EXSLT/exsl/node-set
tags:
  - EXSLT
  - NeedsSpecTable
  - リファレンス
translation_of: Web/EXSLT/exsl/node-set
---
{{XSLTRef}}{{QuickLinksWithSubpages("/ja/docs/Web/EXSLT")}}

`exsl:node-set()` は結果木の断片からノードセットを返します。これは、変数の値を取得するために select 属性ではなく `xsl:variable` を見たときに得られるものです。これにより、変数内に作成された XML を複数のステップで処理することができます。

また、`exsl:node-set()` を使って、文字列をテキストノードにすることができます。

## 構文

```
exsl:node-set(object)
```

### 引数

- `object`
  - : 対応するノードセットを返す対象となるオブジェクト。

### 返値

指定された `object` に対応するノードセットです。

## 仕様書

[EXSLT - EXSL:NODE-SET](http://exslt.org/exsl/functions/node-set/index.html)
