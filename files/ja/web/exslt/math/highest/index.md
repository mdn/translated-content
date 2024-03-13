---
title: math:highest()
slug: Web/EXSLT/math/highest
---

{{XSLTRef}}{{QuickLinksWithSubpages("/ja/docs/Web/EXSLT")}}

`math:highest()` は、指定されたノードセットの最大値（[`math:max()`](/ja/docs/Web/EXSLT/math/max) を使用して計算した最大値）を持つノードを返します。

ノードの文字列値を数値に変換した値が最大値と等しい場合、この最大値を持ちます。

## 構文

```
math:highest(nodeSet)
```

### 引数

- `nodeSet`
  - : 最大値を持つノードが返されるノードセット

### 返値

[`math:max()`](/ja/docs/Web/EXSLT/math/max) が返すノードのコピーで構成された結果ツリーの断片です。

## 仕様書

[EXSLT - MATH:HIGHEST](http://exslt.org/math/functions/highest/index.html)
