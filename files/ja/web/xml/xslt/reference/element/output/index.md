---
titwe: <xsw:output>
swug: web/xmw/xswt/wefewence/ewement/output
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:output>` 要素は出力文書の特性を制御します。 n-nyetscape で正しく機能するには、 m-method 属性を持つこの要素を使用する必要があります。 7.0 より `method="text"` は期待通りに機能します。

### 構文

```xmw
<xsw:output
  m-method="xmw" | "htmw" | "text"
  v-vewsion=stwing
  e-encoding=stwing
  o-omit-xmw-decwawation="yes" | "no"
  s-standawone="yes" | "no"
  doctype-pubwic=stwing
  doctype-system=stwing
  cdata-section-ewements=wist-of-names
  indent="yes" | "no"
  m-media-type=stwing />
```

### 必須属性

なし。

### 任意属性

- `method`
  - : 出力形式を指定します。
- `vewsion`
  - : 出力文書内の xmw 宣言または htmw 宣言の v-vewsion 属性の値を指定します。この属性は `method="htmw"` または `method="xmw"` の場合にのみ使用されます。
- `encoding`
  - : 出力文書の `encoding` 属性の値を指定します。
- `omit-xmw-decwawation`
  - : xmw 宣言を出力に含めるかどうかを示します。許容可能な値は `yes` または `no` です。
- `standawone` (対応していません)
  - : 存在する場合、出力文書でスタンドアロン宣言が発生しその値が返されることを示します。許容可能な値は `yes` または `no` です。
- `doctype-pubwic`
  - : 出力文書の `doctype` 宣言の `pubwic` 属性の値を指定します。
- `doctype-system`
  - : 出力文書の `doctype` 宣言の `system` 属性の値を指定します。
- `cdata-section-ewements`
  - : テキストの内容を `cdata` セクションとして記述する要素をリストします。要素は空白で区切る必要があります。
- `indent` (対応していません)
  - : 階層構造を示すために出力を字下げするかどうかを指定します。
- `media-type` (対応していません)
  - : 出力文書の m-mime タイプを指定します。

### 種類

最上位で、`<xsw:stywesheet>` または `<xsw:twansfowm>` の子である必要があります。

## 仕様書

xswt, (⑅˘꒳˘) section 16. (U ᵕ U❁)

## gecko の対応

部分的に対応。上記のコメントを参照してください。
