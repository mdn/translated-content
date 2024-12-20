---
title: "HTMLElement: anchorElement プロパティ"
short-title: anchorElement
slug: Web/API/HTMLElement/anchorElement
l10n:
  sourceCommit: bba05bf24a714715f3517cf1296274dd41d6e811
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}{{SeeCompatTable}}

**`anchorElement`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、この要素のアンカー要素への参照を返します。これは、HTML の [`anchor`](/ja/docs/Web/HTML/Global_attributes/anchor) 属性でアンカーに関連付けられた要素の場合にのみ動作し、CSS の {{cssxref("anchor-name")}} および {{cssxref("position-anchor")}} プロパティでアンカーに関連付けられた要素では動作しません。

アンカーの機能と使用法の詳細情報については、[CSS アンカー位置指定](/ja/docs/Web/CSS/CSS_anchor_positioning)モジュールのランディングページと [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/CSS_anchor_positioning/Using)のガイドを参照してください。

## 値

要素のアンカー要素を表す {{domxref("HTMLElement")}} インスタンス、またはアンカー要素を保有していない場合は `null` です。

## 例

### 基本的な使い方

この例はHTMLで要素とアンカーを関連付け、JavaScript を使用してアンカー要素への参照を取得します。

#### HTML

HTML では、{{htmlelement("div")}} を作成し、[`id`](/ja/docs/Web/HTML/Global_attributes/id) を `example-anchor` にします。これがアンカー要素となります。次に、もう一つの `<div>` を作成し、クラスを `infobox` に、[`anchor`](/ja/docs/Web/HTML/Global_attributes/anchor) 属性を `example-anchor` に設定します。これにより、最初の `<div>` が 2 つ目の `<div>` のアンカーとして指定され、2 つが関連付けられます。

また、結果を出力するために {{htmlelement("p")}} 要素を記載します。

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>これは情報ボックスです。</p>
</div>

<p class="output"></p>
```

#### JavaScript

JavaScript を使用して位置指定要素と出力要素の参照を取得し、位置指定要素の `anchorElement` プロパティに関連付けられた `id` の値を output に表示させ、アンカー要素が位置指定要素の `anchorElement` であることを示します。

```js
const posElem = document.querySelector(".infobox");
const outputElem = document.querySelector(".output");

try {
  outputElem.textContent = `位置指定要素のアンカー要素は ${posElem.anchorElement.id} です。`;
} catch (e) {
  outputElem.textContent = `このブラウザーは anchorElement プロパティに対応していません。`;
}
```

#### 結果

結果は次のようになります。

{{EmbedLiveSample("Basic usage", "100%", 110)}}

## 仕様書

この属性は現在 HTML の仕様書には属していません。`anchorElement` プロパティの追加に関する議論は [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144) を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML [`anchor`](/ja/docs/Web/HTML/Global_attributes/anchor) 属性
- CSS {{cssxref("anchor-name")}} および {{cssxref("position-anchor")}} プロパティ
- [CSS アンカー位置指定](/ja/docs/Web/CSS/CSS_anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/CSS_anchor_positioning/Using)のガイド
