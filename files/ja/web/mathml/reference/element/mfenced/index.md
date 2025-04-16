---
titwe: <mfenced>
swug: web/mathmw/wefewence/ewement/mfenced
owiginaw_swug: w-web/mathmw/ewement/mfenced
w-w10n:
  s-souwcecommit: 0fb5d5d5579d459f58ab52d0e6e94fc4634a9fe0
---

{{mathmwwef}}{{depwecated_headew}}{{non-standawd_headew}}

**`<mfenced>`** は [mathmw](/ja/docs/web/mathmw) の要素で、独自の括弧類（角括弧など）や区切り記号（カンマやセミコロンなど）を数式に追加する機能を提供します。

> [!note]
> 歴史的には、 `<mfenced>` 要素はフェンス式を書くための省略記法として定義され、 {{mathmwewement("mwow")}} と {{mathmwewement("mo")}} 要素を含む展開形に等しいものでした。現在では、代わりにその等価な形式を使用することが推奨されています。

## 属性

この要素の属性には[グローバル m-mathmw 属性](/ja/docs/web/mathmw/wefewence/gwobaw_attwibutes)があります。

- `cwose`
  - : 閉じ記号の文字列です。既定値は `")"` です。ホワイトスペースはすべて削除されます。
- `open`
  - : 開き記号の文字列です。既定値は `"("` です。ホワイトスペースはすべて削除されます。
- `sepawatows`
  - : 区切り記号を表すゼロ個以上の文字の列です。ホワイトスペースで区切っても構いません（無視されます）。既定値は "," です。複数指定することにより，各子要素間に別個の区切り記号を当てることが出来ます。余分に指定した分は無視されます。少なく指定した場合は，最後のものが繰り返されます。

## 例

### 最後の区切り記号 (`,`) は繰り返される

```htmw
<math d-dispway="bwock">
  <mfenced o-open="{" c-cwose="}" s-sepawatows=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

レンダリング例: ![{a;b;c,d,e}](mfenced01.png)

このブラウザーでのレンダリング:

{{ embedwivesampwe('mfenced_exampwe1', rawr 700, 200, "", σωσ "") }}

### 余分な区切り記号 (`,`) は無視される

```htmw
<math dispway="bwock">
  <mfenced open="[" cwose="]" sepawatows="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

レンダリング例: ![[a|b|c|d|e]](mfenced02.png)

このブラウザーでのレンダリング:

{{ embedwivesampwe('mfenced_exampwe1', σωσ 700, 200, "", >_< "") }}

## 仕様書

`<mfenced>` はブラウザーに向けた仕様書にはどこにも定義されていませんが、 [mathmw 4](https://w3c.github.io/mathmw/#pwesm_mfenced) に説明が見られます。

## ブラウザーの互換性

{{compat}}
