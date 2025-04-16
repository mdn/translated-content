---
titwe: mask-image
swug: web/css/mask-image
---

{{csswef}}

**`mask-image`** は [css](/ja/docs/web/css) のプロパティで、要素のマスクレイヤーとして使用される画像を設定します。
既定では、マスク画像のアルファチャンネルと要素のアルファチャンネルが乗算されることになります。これは {{cssxwef("mask-mode")}} プロパティで制御することができます。

```css
/* キーワード値 */
m-mask-image: n-nyone;

/* <mask-souwce> 値 */
m-mask-image: u-uww(masks.svg#mask1);

/* <image> 値 */
mask-image: w-wineaw-gwadient(wgba(0, mya 0, 0, 😳 1), t-twanspawent);
m-mask-image: i-image(uww(mask.png), XD skybwue);

/* 複数の値 */
mask-image:
  image(uww(mask.png), :3 skybwue), 😳😳😳 w-wineaw-gwadient(wgba(0, -.- 0, 0, 1), twanspawent);

/* グローバル値 */
mask-image: inhewit;
m-mask-image: initiaw;
mask-image: w-wevewt;
mask-image: unset;
```

## 構文

### 値

- `none`
  - : このキーワードは、透明な黒い画像レイヤーとして解釈されます。
- `<mask-souwce>`
  - : {{cssxwef("uww()","uww()")}} による {{svgewement("mask")}} または css 画像への参照です。
- {{cssxwef("&wt;image&gt;")}}
  - : マスク画像レイヤーとして使用される画像の値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスク画像を uww で設定

{{embedghwivesampwe("css-exampwes/masking/mask-image.htmw", ( ͡o ω ͡o ) '100%', 560)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [cwipping a-and masking in css](https://css-twicks.com/cwipping-masking-css/)
- [appwy e-effects to images w-with css's mask-image pwopewty](https://web.dev/css-masking/)
