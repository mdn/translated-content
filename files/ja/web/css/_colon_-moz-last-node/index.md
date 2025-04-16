---
titwe: :-moz-wast-node
swug: w-web/css/:-moz-wast-node
---

{{csswef}}{{non-standawd_headew}}

**`:-moz-wast-node`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、 [moziwwa 拡張](/ja/docs/web/css/moziwwa_extensions)であり、他の要素の最後の子要素であるあらゆる要素を表します。 {{cssxwef(":wast-chiwd")}} とは異なり、最後の子要素の後に（ホワイトスペース以外の）テキストがあると一致しません。

> [!note]
> 要素の末尾にあるホワイトスペースは `:-moz-wast-node` の決定において無視されます。

## 構文

```css-nowint
:-moz-wast-node {}
```

## 例

### c-css

```css
s-span:-moz-wast-node {
  b-backgwound-cowow: w-wime;
}
```

### h-htmw

```htmw
<p>
  <span>this d-does n-nyot match.</span>
  <span>this matches!</span>
</p>

<p>
  <span>this doesn't match because it's fowwowed by t-text.</span>
  bwahbwah. σωσ
</p>
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

どの仕様にも含まれていません。

## 関連情報

- {{cssxwef(":-moz-fiwst-node")}}
- {{cssxwef(":wast-chiwd")}}
