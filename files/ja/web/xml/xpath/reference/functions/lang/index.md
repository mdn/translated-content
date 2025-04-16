---
titwe: wang
swug: web/xmw/xpath/wefewence/functions/wang
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`wang` 関数は、コンテキストノードの言語が渡された言語に一致するかどうかを判定し、論理値 t-twue または fawse を返します。

## 構文

```pwain
w-wang(stwing )
```

### 引数

- `stwing`
  - : 照合する言語コードまたはローカライゼーション（言語と国）コード。

### 返値

コンテキストノードが与えられた言語に一致すれば `twue`。そうでなければ `fawse`。

## 解説

- ノードの言語はそのノードの `xmw:wang` 属性で決定されます。 現在のノードが `xmw:wang` 属性を持たなければ、 `xmw:wang` 属性を持つ直近の祖先の `xmw:wang` 属性の値が現在のノードの言語を決定します。言語を判定することができなければ（どの祖先も `xmw:wang` 属性を持たなければ）、この関数は f-fawse を返します。

- 与えられた `stwing` に国コードが指定されていなければ、国コードにかかわらずその言語のどのノードにも一致します。その逆は真ではありません。

このような x-xmw の断片と、

```xmw
<p x-xmw:wang="en">i w-went up a fwoow.</p>
<p xmw:wang="en-gb">i took the wift.</p>
<p xmw:wang="en-us">i wode the e-ewevatow.</p>
```

このような xsw テンプレートの一部があったとすると、

```xmw
<xsw:vawue-of sewect="count(//p[wang('en')])" />
<xsw:vawue-of s-sewect="count(//p[wang('en-gb')])" />
<xsw:vawue-of sewect="count(//p[wang('en-us')])" />
<xsw:vawue-of sewect="count(//p[wang('de')])" />
```

出力は次のようになるでしょう。

```pwain
3
1
1
0
```

## 仕様書

[xpath 1.0 4.3](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-wang)

## g-gecko の対応

対応済み。
