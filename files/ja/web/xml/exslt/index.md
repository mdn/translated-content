---
title: EXSLT
slug: Web/XML/EXSLT
l10n:
  sourceCommit: 049e8715d907f47677e85637b5f8292d5376a9f1
---

EXSLT は [XSLT](/ja/docs/Web/XML/XSLT) を拡張する一連の機能で、XML 文書を変換する関数をモジュールごとに提供します。

EXSLT 関数を使用するには、その関数が属する名前空間を宣言し、関数を呼び出すときに適切な接頭辞を使用する必要があります。

例えば、正規表現パッケージを使用するには、次のようにします。

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions">
  <xsl:template match="/">
    <!-- … -->
    <xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/>
    <!-- … -->
  </xsl:template>
</xsl:stylesheet>
```

## リファレンス

[EXSLT リファレンス](/ja/docs/Web/XML/EXSLT/Reference)では、共通処理、数学、正規表現、集合操作、文字列操作のための名前空間と関数について説明しています。

### 共通

EXSLT Common パッケージは、XSLT の機能を拡張する基本的な関数を提供します。Common パッケージの名前空間は `http://exslt.org/common` です。

#### 関数

- [`exsl:node-set()`](/ja/docs/Web/XML/EXSLT/Reference/exsl/node-set)
- [`exsl:object-type()`](/ja/docs/Web/XML/EXSLT/Reference/exsl/object-type)

### Math

EXSLT の Math パッケージは、数値を扱ったり、ノードを比較したりするための関数を提供します。Math パッケージの名前空間は `http://exslt.org/math` です。

#### 関数

- [`math:highest()`](/ja/docs/Web/XML/EXSLT/Reference/math/highest)
- [`math:lowest()`](/ja/docs/Web/XML/EXSLT/Reference/math/lowest)
- [`math:max()`](/ja/docs/Web/XML/EXSLT/Reference/math/max)
- [`math:min()`](/ja/docs/Web/XML/EXSLT/Reference/math/min)

### 正規表現

EXSLT 正規表現パッケージは、JavaScript スタイルの正規表現を使って、テキストのテスト、照合、置換ができる関数を提供します。

EXSLT 正規表現パッケージの名前空間は `http://exslt.org/regular-expressions` です。

#### 関数

- [`regexp:match()`](/ja/docs/Web/XML/EXSLT/Reference/regexp/match)
- [`regexp:replace()`](/ja/docs/Web/XML/EXSLT/Reference/regexp/replace)
- [`regexp:test()`](/ja/docs/Web/XML/EXSLT/Reference/regexp/test)

### セット

EXSLT セットパッケージは、集合の操作ができる関数を提供します。これらの関数の名前空間は `http://exslt.org/sets` です。

#### 関数

- [`set:difference()`](/ja/docs/Web/XML/EXSLT/Reference/set/difference)
- [`set:distinct()`](/ja/docs/Web/XML/EXSLT/Reference/set/distinct)
- [`set:intersection()`](/ja/docs/Web/XML/EXSLT/Reference/set/intersection)
- [`set:has-same-node()`](/ja/docs/Web/XML/EXSLT/Reference/set/has-same-node)
- [`set:leading()`](/ja/docs/Web/XML/EXSLT/Reference/set/leading)
- [`set:trailing()`](/ja/docs/Web/XML/EXSLT/Reference/set/trailing)

### 文字列

EXSLT 文字列パッケージは、文字列を操作する関数を提供します。文字列パッケージの名前空間は `http://exslt.org/strings` です。

#### 関数

- [`str:concat()`](/ja/docs/Web/XML/EXSLT/Reference/str/concat)
- [`str:split()`](/ja/docs/Web/XML/EXSLT/Reference/str/split)
- [`str:tokenize()`](/ja/docs/Web/XML/EXSLT/Reference/str/tokenize)

## 関連情報

- [EXSLT ウェブサイト](https://exslt.github.io/)
