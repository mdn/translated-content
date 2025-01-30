---
title: anchor
slug: Web/HTML/Global_attributes/anchor
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}{{SeeCompatTable}}

**`anchor`** は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)で、位置指定要素とアンカー要素を関連付けるために使用されます。この属性の値は、位置指定要素をアンカーする要素の [`id`](/ja/docs/Web/HTML/Global_attributes/id) の値です。その後、 [CSS アンカー位置指定](/ja/docs/Web/CSS/CSS_anchor_positioning/Using)を使用して要素の位置指定を行うことができます。

> [!NOTE]
> それ以外に、CSS を使用して、位置指定要素をアンカー要素に関連付けることもできます。 {{cssxref("anchor-name")}} および {{cssxref("position-anchor")}} プロパティを使用します。 同じ要素に対してどちらのアンカー技術も使用されている場合、 CSS 技術が HTML 技術よりも優先されます。

## 例

### 基本的な `anchor` 属性の使用方法

次の例では、 HTML を使用して、位置指定要素をアンカーに関連付けます。 その後、 CSS を使用して、位置指定要素をアンカーの右側に固定します。

#### HTML

{{htmlelement("div")}} 要素を `id` を `example-anchor` にして作成します。これがアンカー要素になります。次に、 `anchor` 属性が `example-anchor` に設定された別の `<div>` が含まれます。これにより、最初の `<div>` が 2 つ目の `<div>` のアンカーとして指定され、2つが関連付けられたことになります。

また、 2 つの `<div>` の周りには、 {{htmlelement("body")}} がスクロールするように高さを出すための詰め物テキストも含まれます。

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>これは情報ボックスです。</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

CSS を使用して、 `infobox` 要素をアンカー位置指定要素に変換し、そのアンカーに関連して位置指定します。この設定は次のように行います。

- {{cssxref("position")}} プロパティを `fixed` にし、位置指定要素に変換することで、アンカー位置から相対的に位置指定できるようになります。
- {{cssxref("left")}} プロパティを {{cssxref("anchor()")}} 関数に指定し、その値を `right` とします。これにより、位置指定要素がアンカーに固定され、左端がアンカーの右端と揃うように位置指定されます。
- {{cssxref("align-self")}} プロパティを [`anchor-center`](/ja/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) に設定します。これにより、情報ボックスがアンカーのインライン方向の中央に配置されます。
- {{cssxref("margin-left")}} を `10px` に設定し、アンカーが指定された要素とアンカーの間に空間を作成します。

```css
.infobox {
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}
```

#### 結果

この例をスクロールして、情報ボックスがアンカーにどのように結び付けられているかを確認してください。 `anchor` 属性に対応している場合、情報ボックスはアンカーの右側に固定されます。 対応していない場合、情報ボックスはビューポートに固定されます。

{{EmbedLiveSample("Basic `anchor` attribute usage", "100%", 225)}}

## 仕様書

この属性は現在、 HTML 仕様には属してはいません。 `anchor` 属性の追加に関する議論は [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144) をご覧ください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.anchorElement")}}
- CSS の {{cssxref("anchor-name")}} プロパティ
- CSS の　{{cssxref("position-anchor")}} プロパティ
- [CSS アンカー位置指定](/ja/docs/Web/CSS/CSS_anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/CSS_anchor_positioning/Using)ガイド
