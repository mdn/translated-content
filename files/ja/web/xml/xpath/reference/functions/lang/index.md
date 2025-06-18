---
title: lang
slug: Web/XML/XPath/Reference/Functions/lang
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`lang` 関数は、コンテキストノードの言語が渡された言語に一致するかどうかを判定し、論理値 true または false を返します。

## 構文

```plain
lang(string )
```

### 引数

- `string`
  - : 照合する言語コードまたはローカライゼーション（言語と国）コード。

### 返値

コンテキストノードが与えられた言語に一致すれば `true`。そうでなければ `false`。

## 解説

- ノードの言語はそのノードの `xml:lang` 属性で決定されます。 現在のノードが `xml:lang` 属性を持たなければ、 `xml:lang` 属性を持つ直近の祖先の `xml:lang` 属性の値が現在のノードの言語を決定します。言語を判定することができなければ（どの祖先も `xml:lang` 属性を持たなければ）、この関数は false を返します。

- 与えられた `string` に国コードが指定されていなければ、国コードにかかわらずその言語のどのノードにも一致します。その逆は真ではありません。

このような XML の断片と、

```xml
<p xml:lang="en">I went up a floor.</p>
<p xml:lang="en-GB">I took the lift.</p>
<p xml:lang="en-US">I rode the elevator.</p>
```

このような XSL テンプレートの一部があったとすると、

```xml
<xsl:value-of select="count(//p[lang('en')])" />
<xsl:value-of select="count(//p[lang('en-GB')])" />
<xsl:value-of select="count(//p[lang('en-US')])" />
<xsl:value-of select="count(//p[lang('de')])" />
```

出力は次のようになるでしょう。

```plain
3
1
1
0
```

## 仕様書

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-lang)

## Gecko の対応

対応済み。
