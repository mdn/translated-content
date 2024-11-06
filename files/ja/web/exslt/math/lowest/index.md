---
title: math:lowest()
slug: Web/EXSLT/math/lowest
---

{{XSLTRef}}{{QuickLinksWithSubpages("/ja/docs/Web/EXSLT")}}

`math:lowest()` は、指定されたノードセットの最小値（[`math:min()`](/ja/docs/Web/EXSLT/math/min) を使用して計算した最小値）を持つノードを返します。

ノードの文字列値を数値に変換した値が最小値と等しい場合、この最小値を持ちます。

## 構文

```
math:lowest(nodeSet)
```

### 引数

- `nodeSet`
  - : 最小値を返すノードセット。

### 返値

[`math:min()`](/ja/docs/Web/EXSLT/math/min) が返すノードのコピーで構成された結果ツリーの断片です。

## 仕様書

[EXSLT - MATH:LOWEST](http://exslt.org/math/functions/lowest/index.html)
