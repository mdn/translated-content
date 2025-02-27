---
title: not
slug: Web/XML/XPath/Reference/Functions/not
original_slug: Web/XPath/Reference/Functions/not
---

{{XsltSidebar}}{{ XsltRef() }}

`not` 関数は式を論理値として評価し、その逆の値を返します。

### 構文

```
not(expression )
```

### 引数

- `expression`
  - : この式は [boolean()](/ja/docs/Web/XPath/Functions/boolean) 関数の引数として渡された場合とまったく同じように評価されます。

### 返値

false と評価できる式に対しては true を返し、true と評価できる式に対しては false を返します。

### 注

- この関数は [boolean()](/ja/docs/Web/XPath/Functions/boolean) 関数と同様のふるまいをしますが、返される値はその逆です。
- 要素に一部の属性がないことを検査することができます。

```
<xsl:for-each match="//a[not(@name and @name = 'badname')]">
  <!-- iterates over any <a> element in the document, that
       either has no 'name' attribute at all, or it has one,
       but its value is not "badname". -->
</xsl:template>
```

### 定義

[XPath 1.0 4.3](https://www.w3.org/TR/xpath#function-not)

### Gecko での対応

対応済み。
