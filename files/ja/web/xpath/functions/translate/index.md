---
title: translate
slug: Web/XPath/Functions/translate
---

{{ XsltRef() }}

`translate` 関数は、文字列と、その文字列を変換するための文字の集合を評価し、変換された文字列を返します。

### 構文

```
translate(string, abc, XYZ)
```

### 引数

- _`string`_
  - : 評価する文字列。
- _`abc`_
  - : 置換の対象となる文字を格納した文字列。
- _`XYZ`_
  - : 置換に使用する文字を格納した文字列。 例えば _`string`_ の中に _`abc`_ の 1 文字目が見つかると、それらはすべて _`XYZ`_ の 1 文字目に置き換えられる。

### 返値

変換された文字列。

### 注

XPath では、大文字と小文字の変換に使用するための解決策としては、translate 関数はすべての言語において十分なものであるとは言えないと注記されています。 XPath の将来のバージョンでは、大文字と小文字の変換のための関数が追加されるかもしれません。

ですが、現在のところはこの関数が文字列を大文字や小文字に変換するのには最も適しています。

例

```
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

出力

```
THE QUICK BROWN FOX.
```

- _`abc`_ が _`XYZ`_ よりも長い場合、_`XYZ`_ の中に対応する文字がない _`abc`_ の文字はすべて削除されます。

例

```
<xsl:value-of select="translate('The quick brown fox.', 'brown', 'red')" />
```

出力

```
The quick red fdx.
```

- _`XYZ`_ に _`abc`_ よりも多く文字が含まれている場合、余分な文字は無視されます。

### 定義

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-translate)

### Gecko での対応

対応済み。
