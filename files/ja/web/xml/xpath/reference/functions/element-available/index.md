---
title: element-available
slug: Web/XML/XPath/Reference/Functions/element-available
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`element-available` 関数は、要素が利用可能かどうかを判断し、true または false を返します。

## 構文

```plain
element-available( QName )
```

### 引数

- `QName`
  - : 有効な QName を評価する必要があります。QName は式のスコープ内の名前空間宣言を使用して展開された名前に展開されます。

### 返値

展開された名前が命令の名前である場合にのみ true を返します。展開された名前が XSLT 名前空間 URI と等しい名前空間 URI を持つ場合、XSLT で定義された要素を参照します。それ以外の場合は拡張要素を参照します。展開された名前が null の名前空間 URI を持つ場合、要素利用可能な関数は false を返します。

## 仕様書

[XSLT 1.0 15](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-element-available)

## Gecko の対応

対応済み。
