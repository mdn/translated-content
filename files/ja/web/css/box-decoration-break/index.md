---
title: box-decoration-break
slug: Web/CSS/box-decoration-break
l10n:
  sourceCommit: fb2af1f15456199685a9f4fbaf8c9d003a2bf91f
---

{{CSSRef}}

**`box-decoration-break`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[断片](/ja/docs/Web/CSS/CSS_Fragmentation)が複数の行、段、ページに渡る場合に描画する方法を指定します。

{{EmbedInteractiveExample("pages/css/box-decoration-break.html")}}

指定された値は、次のプロパティの表示方法に影響を与えます。

- {{Cssxref("background")}}
- {{Cssxref("border")}}
- {{Cssxref("border-image")}}
- {{Cssxref("box-shadow")}}
- {{Cssxref("clip-path")}}
- {{Cssxref("margin")}}
- {{Cssxref("padding")}}

## 構文

```css
/* キーワード値 */
box-decoration-break: slice;
box-decoration-break: clone;

/* グローバル値 */
box-decoration-break: inherit;
box-decoration-break: initial;
box-decoration-break: revert;
box-decoration-break: revert-layer;
box-decoration-break: unset;
```

`box-decoration-break` プロパティは、以下の一覧にあるキーワード値の一つで指定します。

### 値

- `slice`
  - : 要素は最初、ボックスが断片化していないかのように描画され、その後でこの仮想ボックスに描画されたものが、それぞれの行/段/ページの部分に分割されます。なお、仮想ボックスはインライン方向に分割された場合には独自の高さを使用し、ブロック方向に分割された場合は独自の幅を使用するため、それぞれの断片ごとに異なる場合があることに注意してください。詳しくは CSS の仕様書を参照してください。
- `clone`
  - : それぞれの断片が、それぞれの断片を囲む指定された境界、パディング、マージンを伴って個別に描画されます。 {{ Cssxref("border-radius") }}, {{ Cssxref("border-image") }}, {{ Cssxref("box-shadow") }} はそれぞれの断片に個別に適用されます。背景もそれぞれの断片で個別に描画されます。つまり、 {{ Cssxref("background-repeat") }}`: no-repeat` がついた背景画像であっても、複数回繰り返されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インラインボックスの断片化

改行を含むインライン要素は次のように整形されます。

```html
<style>
  .example {
    background: linear-gradient(to bottom right, yellow, green);
    box-shadow:
      8px 8px 10px 0px deeppink,
      -5px -5px 5px 0px blue,
      5px 5px 15px 0px yellow;
    padding: 0em 1em;
    border-radius: 16px;
    border-style: solid;
    margin-left: 10px;
    font: 24px sans-serif;
    line-height: 2;
  }
</style>
…
<span class="example">The<br />quick<br />orange fox</span>
```

これは次のようになります。

![box-decoration-break:slice と例で与えられたスタイルでスタイル付けされたインライン要素のレンダリングの画面ショット](box-decoration-break-inline-slice.png)

上記のスタイルに `box-decoration-break: clone` を追加すると、

```css
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
```

これは次のような結果になります。

![box-decoration-break:clone と例で与えられたスタイルでスタイル付けされたインライン要素のレンダリングの画面ショット](box-decoration-break-inline-clone.png)

ブラウザーで[上記の 2 つのインラインの例を試してみる](https://mdn.dev/archives/media/attachments/2014/07/12/8179/df096e9eb57177d8b7fdcd0c8f64ef18/box-decoration-break-inline.html)ことができます。

これはインライン要素に大きな `border-radius` の値を使用した例です。二番目の `"iM"` には、 `"i"` と `"M"` の間に改行があります。それに対して、最初の `"iM"` には改行がありません。なお、２つの断片の描画結果を水平に並べると、断片化されていない描画結果と同じになります。

![2 つ目のインライン要素の例のレンダリングのスクリーンショット。](box-decoration-break-slice-inline-2.png)

ブラウザーで[上の例を試してみる](https://mdn.dev/archives/media/attachments/2014/07/12/8191/7a067e5731355081e856ea02b978ea2e/box-decoration-break-inline-extreme.html)ことができます。

### ブロックボックスの断片化

上記と同様のスタイルのブロックボックスは、断片化がないと次のような結果になります。

![例で使用したブロック要素を断片化せずにレンダリングした画面です。](box-decoration-break-block.png)

上記のブロックが 3 つの段に分割されると、次のような結果になります。

![box-decoration-break:slice でスタイル付けされた例で使用されている断片ブロックのレンダリングの画面ショットです。](box-decoration-break-block-slice.png)

なお、これらの断片を縦に並べると、断片化されていない描画結果と同じになります。

そして、同じ例を `box-decoration-break: clone` で整形すると、次のような結果になります。

![box-decoration-break:clone でスタイル付けされた例で使用されている断片ブロックのレンダリングの画面ショットです。](box-decoration-break-block-clone.png)

それぞれの断片に同じ境界線、ボックスの影、背景が複製されることに注意してください。

ブラウザーで[上の例を試してみる](https://mdn.dev/archives/media/attachments/2014/07/12/8187/6288bde9d276d78e203c9f8b9a26ff65/box-decoration-break-block.html)ことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("break-after")}}, {{cssxref("break-before")}}, {{cssxref("break-inside")}}
