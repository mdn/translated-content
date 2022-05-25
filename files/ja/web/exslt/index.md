---
title: EXSLT
slug: Web/EXSLT
tags:
  - EXSLT
  - Landing
translation_of: Web/EXSLT
---
EXSLT は [XSLT](/ja/docs/Web/XSLT) に対する一連の拡張機能です。いくつものモジュールがあります。 Firefox が対応しているものは以下の通りです。

{{SubpagesWithSummaries}}

## EXSLT モジュール

EXSLT関数を使用するには、その関数が属する名前空間を宣言し、関数を呼び出す際に適切な接頭辞を使用する必要があります。例えば、正規表現パッケージを使用する場合は次のようにします。

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions">
  <xsl:template match="/">
    ...
    <xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/>
    ...
  </xsl:template>

</xsl:stylesheet>
```

### 共通

EXSLT Common パッケージは、 XSLT の機能を拡張する基本的な関数を提供します。 Common パッケージの名前空間は `http://exslt.org/common` です。

#### 関数

- [`exsl:node-set()`](/ja/docs/Web/EXSLT/exsl/node-set)
- [`exsl:object-type()`](/ja/docs/Web/EXSLT/exsl/object-type)

### Math

EXSLT の Math パッケージは、数値を扱ったり、ノードを比較したりするための関数を提供します。 Math パッケージの名前空間は `http://exslt.org/math` です。

#### 関数

- [`math:highest()`](/ja/docs/Web/EXSLT/math/highest)
- [`math:lowest()`](/ja/docs/Web/EXSLT/math/lowest)
- [`math:max()`](/ja/docs/Web/EXSLT/math/max)
- [`math:min()`](/ja/docs/Web/EXSLT/math/min)

### 正規表現

EXSLT 正規表現パッケージは、JavaScript スタイルの正規表現を使って、テキストのテスト、照合、置換ができる関数を提供します。

EXSLT 正規表現の名前空間は、`http://exslt.org/regular-expressions` です。

#### 関数

- [`regexp:match()`](/ja/docs/Web/EXSLT/regexp/match)
- [`regexp:replace()`](/ja/docs/Web/EXSLT/regexp/replace)
- [`regexp:test()`](/ja/docs/Web/EXSLT/regexp/test)

### セット

EXSLT セットパッケージは、集合の操作ができる関数を提供します。これらの関数の名前空間は `http://exslt.org/sets` です。

#### 関数

- [`set:difference()`](/ja/docs/Web/EXSLT/set/difference)
- [`set:distinct()`](/ja/docs/Web/EXSLT/set/distinct)
- [`set:intersection()`](/ja/docs/Web/EXSLT/set/intersection)
- [`set:has-same-node()`](/ja/docs/Web/EXSLT/set/has-same-node)
- [`set:leading()`](/ja/docs/Web/EXSLT/set/leading)
- [`set:trailing()`](/ja/docs/Web/EXSLT/set/trailing)

### 文字列

EXSLT 文字列パッケージは、文字列の操作ができる関数を提供します。文字列パッケージの名前空間は `http://exslt.org/strings` です。

#### 関数

- [`str:concat()`](/ja/docs/Web/EXSLT/str/concat)
- [`str:split()`](/ja/docs/Web/EXSLT/str/split)
- [`str:tokenize()`](/ja/docs/Web/EXSLT/str/tokenize)

## 関連情報

- [EXSLT ウェブサイト](http://exslt.org/)

<section id="Quick_links">
  <ol>
    <li><strong><a href="/ja/docs/Web/XSLT">XSLT</a></strong></li>
    <li><strong><a href="/ja/docs/Web/XPath">XPath</a></strong></li>
    <li><strong><a href="/ja/docs/Web/EXSLT">EXSLT</a></strong></li>
    <li class="toggle">
      <details open>
        <summary><a href="/ja/docs/Web/EXSLT/exsl">共通 (exsl)</a></summary>
        {{ListSubpagesForSidebar("/ja/docs/Web/EXSLT/exsl", "", "", "exsl:", ")")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/ja/docs/Web/EXSLT/math">Math (math)</a></summary>
        {{ListSubpagesForSidebar("/ja/docs/Web/EXSLT/math", "", "", "math:", ")")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/ja/docs/Web/EXSLT/regexp">正規表現 (regexp)</a></summary>
        {{ListSubpagesForSidebar("/ja/docs/Web/EXSLT/regexp", "", "", "regexp:", ")")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/ja/docs/Web/EXSLT/set">セット (set)</a></summary>
        {{ListSubpagesForSidebar("/ja/docs/Web/EXSLT/set", "", "", "set:", ")")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/ja/docs/Web/EXSLT/str">文字列 (str)</a></summary>
        {{ListSubpagesForSidebar("/ja/docs/Web/EXSLT/str", "", "", "str:", ")")}}
      </details>
    </li>
  </ol>
</section>
