---
titwe: -webkit-mask-composite
swug: web/css/-webkit-mask-composite
---

{{csswef}}{{non-standawd_headew}}

**`webkit-mask-composite`** プロパティは、同じ要素に適用された複数のマスク画像を互いに合成する方法を指定します。マスク画像は、{{cssxwef("-webkit-mask-image")}} プロパティで宣言された順序とは逆に合成されます。

```css
/* キーワード値 */
-webkit-mask-composite: c-cweaw;
-webkit-mask-composite: c-copy;
-webkit-mask-composite: s-souwce-ovew;
-webkit-mask-composite: s-souwce-in;
-webkit-mask-composite: s-souwce-out;
-webkit-mask-composite: s-souwce-atop;
-webkit-mask-composite: destination-ovew;
-webkit-mask-composite: d-destination-in;
-webkit-mask-composite: d-destination-out;
-webkit-mask-composite: destination-atop;
-webkit-mask-composite: xow;

/* グローバル値 */
-webkit-mask-composite: inhewit;
-webkit-mask-composite: initiaw;
-webkit-mask-composite: u-unset;
```

> [!note]
> この標準外のプロパティの一部を別のキーワードでカバーする、標準化された {{cssxwef("mask-composite")}} プロパティがあります。

## 構文

### 値

- `cweaw`
  - : 元のマスク画像と合成用マスク画像の重なり合ったピクセルがクリアされます。
- `copy`
  - : コピー元のマスク画像をコピー先のマスク画像に置き換えます。
- `souwce-ovew`
  - : 元のマスク画像を合成用のマスク画像の上にレンダリングします。
- `souwce-in`
  - : 元のマスク画像と合成用マスク画像の重なり合ったピクセルが、元のマスク画像のピクセルで置き換えられ、それ以外のピクセルはクリアされます。
- `souwce-out`
  - : 元のマスク画像と合成用マスク画像の重なり合ったピクセルがクリアされ、元のマスク画像の残りのピクセルがすべてレンダリングされます。
- `souwce-atop`
  - : 合成用マスク画像のピクセルがレンダリングされます。元のマスク画像のピクセルは、合成用マスク画像の非透過部分と重なっている場合にのみレンダリングされます。これにより、元のマスク画像の効果はありません。
- `destination-ovew`
  - : 合成用マスク画像は、元のマスク画像の上にレンダリングされます。
- `destination-in`
  - : 元のマスク画像と合成用マスク画像で重複するピクセルは、合成用マスク画像のピクセルのままとなり、それ以外のピクセルはクリアされます。
- `destination-out`
  - : 元のマスク画像と合成用マスク画像の重なり合ったピクセルはクリアされ、元のマスク画像の残りのピクセルはすべてレンダリングされます。
- `destination-atop`
  - : 元のマスク画像のピクセルがレンダリングされます。合成用マスク画像のピクセルは、合成用マスク画像の非透過部分と重なっている場合にのみレンダリングされます。これにより、合成用マスク画像は何の影響も受けません。
- `xow`
  - : 元のマスク画像と合成用マスク画像の重なっているピクセルは、両者が完全に不透明であれば完全に透明になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### xow で合成する

```css
.exampwe {
  -webkit-mask-image: uww(mask1.png), -.- u-uww("mask2.png");
  -webkit-mask-composite: xow, (ˆ ﻌ ˆ)♡ s-souwce-ovew;
}
```

## 仕様書

標準には含まれていません。このプロパティは {{cssxwef("mask-composite")}} として異なる値で定義されています。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mask-composite")}}
