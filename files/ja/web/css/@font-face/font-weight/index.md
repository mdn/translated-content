---
title: font-weight
slug: Web/CSS/@font-face/font-weight
tags:
  - '@font-face'
  - アットルール記述子
  - CSS
  - リファレンス
  - 記述子
  - font-weight
browser-compat: css.at-rules.font-face.font-weight
translation_of: Web/CSS/@font-face/font-weight
---
{{CSSRef}}

**`font-weight`** は CSS の記述子で、 {{cssxref("@font-face")}} ルールで指定されたフォントの太さを指定することができます。別に {{cssxref("font-weight")}} プロパティを使用して、テキストを表示する文字の太さや細さを設定することができます。

特定のフォントファミリーについて、同じフォントファミリーの異なるスタイルに対応する様々なフォントフェイスをダウンロードできるようにすることができ、 `font-weight` 記述子を使用してフォントフェイスの太さを正確に指定することができます。 CSS 記述子の値は対応する font プロパティと同じです。

一般に、特定のフォントファミリーには限られた太さのみが利用できます。指定された太さが存在しない場合、近い太さが使用されます。太字がないフォントでは、ふつうはユーザーエージェントが合成します。これを抑止するには、 {{cssxref('font-synthesis')}} プロパティを使用してください。

## 構文

```css
/* 単一の値 */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* 複数の値 */
font-weight: normal bold;
font-weight: 300 500;
```

`font-weight` プロパティは、以下に挙げる値のうちの一つを使用して記述します。

### 値

- `normal`
  - : 通常のフォントの太さです。 `400` と同じです。
- `bold`
  - : 太字のフォントの太さです。 `700` と同じです。
- `<number>`
  - : 1 以上 1000 以下の {{cssxref("&lt;number&gt;")}} 値です。数値が大きいと、数値が小さい物より太さが太い (又は同じ) ことを表します。よく使用される値は、以下の[一般的な太さの名前との対応](#一般的な太さの名前との対応)にあるように、共通の太さの名前に対応しています。

`font-weight` 仕様書の古いバージョンでは、このプロパティはキーワード値と数値 100, 200, 300, 400, 500, 600, 700, 800, 900 のみを受け付けていました。可変フォント以外では実際にはこれらのセット値しか利用できません。ただし、可変フォント以外では細かい値 (例えば 451) は、これらの値のいずれかに変換されます。

CSS Fonts レベル 4 では、構文を拡張して 1 から 1000 までの任意の数値を受け付けるようになり、{{anch("Variable fonts", "可変フォント")}}が導入され、フォントの太さにもっと細かい範囲を使用することができるようになりました。

### 一般的な太さの名前との対応

`100` から `900` の数値は、おおよそ以下の太さの名前に対応します。

| 値    | 太さの名前                |
| ----- | ------------------------- |
| 100   | Thin (Hairline)           |
| 200   | Extra Light (Ultra Light) |
| 300   | Light                     |
| 400   | Normal                    |
| 500   | Medium                    |
| 600   | Semi Bold (Demi Bold)     |
| 700   | Bold                      |
| 800   | Extra Bold (Ultra Bold)   |
| 900   | Black (Heavy)             |

### 可変フォント

多くのフォントは、[一般的な太さの名前との対応](#一般的な太さの名前との対応)の中の数値の一つに対応する特定の太さを持っています。しかし、可変フォントと呼ばれる一部のフォントは、もっと高いまたは低い粒度の太さの範囲に対応しており、これにより、デザイナーは選択した太さをより詳細に制御することができます。

TrueType や OpenType の可変フォントでは、 "wght" バリエーションが様々な幅を実装するために使用されます。

## アクセシビリティの考慮

弱視の人は、 `font-weight` の値が `100` (Thin/Hairline) または `200` (Extra Light) の場合、特にフォントの[コントラスト比が低い場合](/ja/docs/Web/CSS/color#accessibility_concerns)は、テキストを読むのが難しくなることがあります。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### @font-face ルールにおける通常のフォントの太さの設定

以下の例は、ローカルの Open Sans フォントを見つけるか、またはそれをインポートして、通常の太さのフォントを使用することができます。

```css
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-weight: 400;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
