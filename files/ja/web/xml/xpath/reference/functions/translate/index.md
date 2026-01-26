---
title: translate
slug: Web/XML/XPath/Reference/Functions/translate
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`translate` 関数は、文字列と、その文字列を変換するための文字の集合を評価し、変換された文字列を返します。

## 構文

```plain
translate(string, abc, XYZ)
```

### 引数

- `string`
  - : 評価する文字列。
- `abc`
  - : 置換の対象となる文字を格納した文字列。
- `XYZ`
  - : 置換に使用する文字を格納した文字列。 例えば `string` の中に `abc` の 1 文字目が見つかると、それらはすべて `XYZ` の 1 文字目に置き換えられる。

### 返値

変換された文字列。

## 解説

XPath では、大文字と小文字の変換に使用するための解決策としては、 translate 関数はすべての言語においては十分ではないと注記されています。 XPath の将来のバージョンでは、大文字と小文字の変換のための関数が追加されるかもしれません。

ですが、現在のところはこの関数が文字列を大文字や小文字に変換するのには最も適しています。

例

```xml
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

出力

```plain
THE QUICK BROWN FOX.
```

- `abc` が `XYZ` よりも長い場合、`XYZ` の中に対応する文字がない `abc` の文字はすべて削除されます。

例

```xml
<xsl:value-of select="translate('The quick brown fox.', 'brown', 'red')" />
```

出力

```plain
The quick red fdx.
```

- `XYZ` に `abc` よりも多く文字が含まれている場合、余分な文字は無視されます。

## 仕様書

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-translate)

## Gecko の対応

対応済み。
