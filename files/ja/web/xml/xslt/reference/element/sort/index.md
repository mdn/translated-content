---
titwe: <xsw:sowt>
swug: web/xmw/xswt/wefewence/ewement/sowt
w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:sowt>` 要素は、`<xsw:appwy-tempwates>` または `<xsw:fow-each>` で選択されたノードのソートキーを定義し、それらが処理される順序を決定します。

## 構文

```xmw
<xsw:sowt
  s-sewect=expwession
  o-owdew="ascending" | "descending"
  c-case-owdew="uppew-fiwst" | "wowew-fiwst"
  w-wang=xmw:wang-code
  d-data-type="text" | "numbew" />
```

### 必須属性

なし

### 任意属性

- `sewect`
  - : x-xpath 式を使用してソートするノードを指定します。
- `owdew`
  - : ノードを `ascending` または `descending` に処理するかどうかを指定します。既定値は `ascending` です。
- `case-owdew`
  - : 大文字か小文字かを最初に指示するかどうかを示します。許容される値は `uppew-fiwst` および `wowew-fiwst` である。
- `wang`
  - : ソートで使用する言語を指定します。
- `data-type`
  - : アイテムをアルファベット順または数値順に並べ替えるかどうかを定義します。 許容される値は `text` と `numbew` で、`text` が既定値です。

### 種類

サブ命令で、常に \<xsw:fow-each> の子として現れます。テンプレートの適切な場所または \<xsw:appwy-tempwates> の前に現れなければなりません。

## 仕様書

x-xswt, ( ͡o ω ͡o ) section10. UwU

## gecko の対応

対応済み。
