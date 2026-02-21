---
title: opacity
slug: Web/CSS/Reference/Properties/opacity
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`opacity`** は CSS のプロパティで、要素の不透過度を設定します。不透過度は要素の裏にあるコンテンツが隠れる度合いであり、透過度の逆です。

{{InteractiveExample("CSS デモ: opacity")}}

```css interactive-example-choice
opacity: 0;
```

```css interactive-example-choice
opacity: 0.33;
```

```css interactive-example-choice
opacity: 1;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  background-color: #963770;
  color: white;
  padding: 1em;
}
```

## 構文

```css
opacity: 0.9;
opacity: 90%;

/* グローバル値 */
opacity: inherit;
opacity: initial;
opacity: revert;
opacity: revert-layer;
opacity: unset;
```

### 値

- `<alpha-value>`
  - : {{cssxref("number")}} を `0.0` 以上 `1.0` 以下で、また {{cssxref("percentage")}} を `0%` 以上 `100%` 以下で、チャネルの不透過度（つまり、アルファチャネルの値）を表します。範囲外の数値も有効ですが、近い方の限界値に丸められます。

    | 値                                                    | 意味                                                           |
    | ----------------------------------------------------- | -------------------------------------------------------------- |
    | `0`                                                   | 要素は完全に透明です（つまり、不可視です）。                   |
    | `0` と `1` の中間にある何れかの {{cssxref("number")}} | 要素は半透明です（つまり、要素の背後のコンテンツが見えます）。 |
    | `1` （既定値）                                        | 要素は完全に不透明です（中身が詰まって見えます）。             |

## 解説

`opacity` は、子要素には継承されないものの、そのコンテンツを含む要素全体に適用されます。したがって、要素とその子要素は、互いに対して異なる不透過度を持つ場合でも、要素の背景に対してはすべて同じ不透過度を持ちます。

背景のみの不透過度を変更するには、 {{cssxref("background")}} プロパティにアルファチャンネルのある[色値](/ja/docs/Web/CSS/Reference/Values/color_value)を使用します。例を示します。

```css
background: rgb(0 0 0 / 40%);
```

`opacity` の値が `0` に設定されると、要素とそのすべての子要素は見えなくなりますが、 DOM の一部として存在し続けます。つまり、これらは引き続き[ポインターイベント](/ja/docs/Web/API/Pointer_events)を発生させ、タブ順序に含まれている場合はフォーカスを取得します。ユーザビリティを損なわないよう、ユーザー操作が行われた際にこれらの要素を可視化するか、CSS の {{cssxref("pointer-events")}} プロパティでポインターイベントを無効化し、`disabled` 属性による無効化または [`tab-index="-1"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) を設定してタブ順序から除外してください。

`opacity` の値を `1` 以外の値で用いると、その要素は新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を生成します。

スクリーンリーダーへ情報を提供するために不透過度を単独で使用すべきではありません。HTML の [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性、CSS の {{cssxref("visibility")}}、または CSS の {{cssxref("display")}} スタイルプロパティを使用してください。[`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) 属性の使用は避けるのが最善ですが、要素が不透過度で非表示にされている場合は、スクリーンリーダーからも非表示にする必要があります。

### 不透過度のトランジション

不透過度を[トランジション](/ja/docs/Web/CSS/Guides/Transitions)させながら要素をページに追加する場合、その要素が事前に [`visibility: hidden`](/ja/docs/Web/CSS/Reference/Properties/visibility#hidden)、
 [`display: none`](/ja/docs/Web/CSS/Reference/Properties/display#none)、[`content-visibility: hidden`](/ja/docs/Web/CSS/Reference/Properties/content-visibility#hidden) で非表示にされていた場合は、{{cssxref("@starting-style")}} と [`transition-behavior: allow-discrete`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) の両方を記載する必要があります。

```css
.card {
  transition:
    opacity 5s,
    display 5s;
  background-color: orange;

  transition-behavior: allow-discrete;
  @starting-style {
    opacity: 0;
  }
}

.card.hidden {
  display: none;
  opacity: 0;
}
```

当初のスタイルを指定したトランジションを利用できるようにするには、`@starting-style` ルールが必要です。上記のコードでは、`@starting-style` 内で `opacity: 0` を設定することで、要素が最初のスタイル更新を受ける際のトランジションの始点を指定します。詳細は {{cssxref("@starting-style")}} を参照してください。

`display: none` へのトランジションでは `transition-behavior: allow-discrete` を設定する必要があります。詳細は {{cssxref("transition-behavior")}} プロパティを参照してください。

## アクセシビリティ

テキストの不透過度を調整した場合、テキストの色と、テキストが配置されている背景の色とのコントラスト比が、弱視の人がページの内容を読むことができる程度に十分高くなるよう確認することが重要です。

色のコントラスト比は、透過度を調整したテキストと背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) によれば、テキストコンテンツで 4.5:1 以上、見出しのような大きめのテキストで 3:1 以上のコントラスト比が求められています。大きめのテキストとは、太字ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の分離を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

さまざまなオペレーティングシステムでは、透過性を抑えるための設定を提供しています。ユーザーのオペレーティングシステムの透過性に関する設定に基づいて `opacity` を設定するには、[`prefers-reduced-transparency`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) メディアクエリーを使用してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

次の例では、`opacity` プロパティで要素とその内容全体の不透過度を変更することで、テキストを非常に読みにくくしています。

#### HTML

```html
<div class="light">何とか見える程度でしょう。</div>
<div class="medium">見やすいでしょう。</div>
<div class="heavy">とても見やすいでしょう。</div>
```

#### CSS

```css
div {
  background-color: yellow;
  font-weight: bold;
  font-size: 130%;
}
.light {
  opacity: 0.2; /* 背景に文字がかすかに見える */
}
.medium {
  opacity: 0.5; /* 背景の上でテキストがより鮮明に見える */
}
.heavy {
  opacity: 0.9; /* 背景の上でテキストがとても鮮明に見える */
}
```

#### 結果

{{EmbedLiveSample('Setting_opacity', '640', '105')}}

### ホバー時の透過度の設定

次の例では、ホバー時に不透過度を変更し、親要素の縞模様の背景画像が透けて見えるようにしています。

#### HTML

```html
<div class="wrapper">
  <img
    src="/shared-assets/images/examples/dino.svg"
    alt="MDN Dino"
    width="128"
    height="146"
    class="opacity" />
</div>
```

#### CSS

```css
img.opacity {
  opacity: 1;
}

img.opacity:hover {
  opacity: 0.5;
}

.wrapper {
  width: 200px;
  height: 160px;
  background-color: #f03cc3;
  background-image: linear-gradient(
    90deg,
    transparent 50%,
    rgb(255 255 255 / 50%) 50%
  );
  background-size: 20px 20px;
}
```

#### 結果

{{EmbedLiveSample('Setting_opacity_on_hover', '150', '200')}}

### ユーザー設定に基づくスタイル

ユーザーのオペレーティングシステムの透過性の設定に基づいて要素をスタイル設定するには、[`prefers-reduced-transparency`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) メディアクエリーを使用します。次の例は、`prefers-color-scheme` メディアクエリーを使用して、ユーザーの好みに基づいて希望の `opacity` を指定する方法を示しています。

```css
.element {
  opacity: 0.5;
}

@media (prefers-reduced-transparency) {
  .element {
    opacity: 1;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`prefers-reduced-transparency`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) メディアクエリー
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- SVG の {{SVGAttr("opacity")}} 属性
