---
title: opacity
slug: Web/CSS/opacity
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`opacity`** は CSS のプロパティで、要素の不透明度を設定します。不透明度は要素の裏にあるコンテンツが隠れる度合いであり、透明度の逆です。

{{EmbedInteractiveExample("pages/css/opacity.html")}}

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

  - : {{cssxref("number")}} を `0.0` 以上 `1.0` 以下で、また {{cssxref("percentage")}} を `0%` 以上 `100%` 以下で、チャネルの不透明度（つまり、アルファチャネルの値）を表します。範囲外の数値も有効ですが、近い方の限界値に丸められます。

    | 値                                                    | 意味                                                           |
    | ----------------------------------------------------- | -------------------------------------------------------------- |
    | `0`                                                   | 要素は完全に透明です（つまり、不可視です）。                   |
    | `0` と `1` の中間にある何れかの {{cssxref("number")}} | 要素は半透明です（つまり、要素の背後のコンテンツが見えます）。 |
    | `1` （既定値）                                        | 要素は完全に不透明です（中身が詰まって見えます）。             |

## 解説

`opacity` の値は子要素に継承されませんが、要素のコンテンツを含む全体に適用されます。すなわち、ある要素とその子の不透明度が互いに異なっていたとしても、その要素の背景に対してはすべて同じ不透明度になります。

このプロパティを `1` 以外の値で用いると、その要素は新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)を作ります。

背景の不透明度のみを変更したい場合は、{{cssxref("background")}} プロパティでアルファチャネルを使用できる{{cssxref("color_value", "色の値")}}を使用してください。

```css
background: rgba(0, 0, 0, 0.4);
```

## アクセシビリティの考慮

テキストの opacity を調整した場合、テキストの色と、テキストが配置されている背景の色とのコントラスト比が、弱視の人がページの内容を読むことができる程度に十分高くなるよう確認することが重要です。

色のコントラスト比は、透明度を調整したテキストと背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/intro/wcag) によれば、テキストコンテンツで 4.5:1 以上、見出しのような大きめのテキストで 3:1 以上のコントラスト比が求められています。大きめのテキストとは、太字ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の分離を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

次の例では、`opacity` プロパティで要素とその内容全体の不透明度を変更することで、テキストを非常に読みにくくしています。

#### HTML

```html
<div class="light">何とか見える程度でしょう。</div>
<div class="medium">簡単に見えるでしょう。</div>
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
  opacity: 0.2; /* Barely see the text over the background */
}
.medium {
  opacity: 0.5; /* See the text more clearly over the background */
}
.heavy {
  opacity: 0.9; /* See the text very clearly over the background */
}
```

#### 結果

{{EmbedLiveSample('Setting_opacity', '640', '105')}}

### ホバー時の透明度の設定

次の例では、ホバー時に不透明度を変更し、親要素の縞模様の背景画像が透けて見えるようにしています。

#### HTML

```html
<div class="wrapper">
  <img
    src="//interactive-examples.mdn.mozilla.net/media/dino.svg"
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
    rgba(255, 255, 255, 0.5) 50%
  );
  background-size: 20px 20px;
}
```

#### 結果

{{EmbedLiveSample('Setting_opacity_on_hover', '150', '200')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
