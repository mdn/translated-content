---
title: position
slug: Web/XML/XPath/Reference/Functions/position
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`position` 関数は、式評価コンテキストのコンテキスト位置に等しい数値を返します。

## 構文

```plain
position()
```

### 返値

式評価コンテキストのコンテキスト位置に等しい整数。

### 注

- コンテキストにおけるノードの位置はゼロ起点ではないことに注意してください。最初のノードの位置は 1 です。

- コンテキストはパスのほかの部分によって決定します。

  ```xml
  <xsl:template match="//a[position() = 5]">
  <!-- このテンプレートは文書内のあらゆる位置にある
          5 番目の a 要素に一致する -->
  </xsl:template>
  ```

  ```xml
  <xsl:template match="//div[@class='foo']/bar[position() = 1]">
  <!-- このテンプレートは class 属性が "foo" に等しい div 要素の子である
        1 番目の bar 要素に一致する -->
  </xsl:template>
  ```

## 仕様書

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-position)

### Gecko の対応

対応済み。
