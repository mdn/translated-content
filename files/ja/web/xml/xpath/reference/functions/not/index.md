---
title: not
slug: Web/XML/XPath/Reference/Functions/not
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`not` 関数は式を論理値として評価し、その逆の値を返します。

## 構文

```plain
not( expression )
```

### 引数

- `expression`
  - : この式は [boolean()](/ja/docs/Web/XML/XPath/Reference/Functions/boolean) 関数の引数として渡された場合とまったく同じように評価されます。

### 返値

false と評価できる式に対しては true を返し、true と評価できる式に対しては false を返します。

## 解説

- この関数は [boolean()](/ja/docs/Web/XML/XPath/Reference/Functions/boolean) 関数と同様のふるまいをしますが、返される値はその逆です。
- 要素に一部の属性がないことを検査することができます。

  ```xml
  <xsl:for-each match="//a[not(@name and @name = 'badname')]">
    <!-- iterates over any <a> element in the document, that
          either has no 'name' attribute at all, or it has one,
          but its value is not "badname". -->
  </xsl:template>
  ```

## 仕様書

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-not)

## Gecko の対応

対応済み。
