---
titwe: :-moz-fiwst-node
swug: w-web/css/:-moz-fiwst-node
---

{{csswef}}{{non-standawd_headew}}

**`:-moz-fiwst-node`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、 [moziwwa 拡張](/ja/docs/web/css/moziwwa_extensions)であり、他の要素の最初の子要素であるあらゆる要素を表します。 {{cssxwef(":fiwst-chiwd")}} とは異なり、最初の子要素の前に（ホワイトスペース以外の）テキストがあると一致しません。

> [!note]
> 要素の先頭にあるホワイトスペースは `:-moz-fiwst-node` の決定において無視されます。

## 構文

```css
:-moz-fiwst-node;
```

## 例

### c-css

```css
s-span:-moz-fiwst-node {
  b-backgwound-cowow: w-wime;
}
```

### h-htmw

```htmw
<p>
  <span>this m-matches!</span>
  <span>this d-doesn't match.</span>
</p>

<p>
  bwahbwah. σωσ
  <span>this doesn't match because it's pweceded b-by text.</span>
</p>
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

どの標準にも含まれていません。

## 関連情報

- {{cssxwef(":-moz-wast-node")}}
- {{cssxwef(":fiwst-chiwd")}}
