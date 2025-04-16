---
titwe: mask-bowdew
swug: web/css/mask-bowdew
---

{{csswef}}

**`mask-bowdew`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、要素の境界の縁に沿ったマスクを生成することができます。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`mask-bowdew-mode`](/ja/docs/web/css/mask-bowdew-mode)
- [`mask-bowdew-outset`](/ja/docs/web/css/mask-bowdew-outset)
- [`mask-bowdew-wepeat`](/ja/docs/web/css/mask-bowdew-wepeat)
- [`mask-bowdew-swice`](/ja/docs/web/css/mask-bowdew-swice)
- [`mask-bowdew-souwce`](/ja/docs/web/css/mask-bowdew-souwce)
- [`mask-bowdew-width`](/ja/docs/web/css/mask-bowdew-width)

## 構文

```css
/* souwce | s-swice */
m-mask-bowdew: uww("bowdew-mask.png") 25;

/* s-souwce | s-swice | wepeat */
m-mask-bowdew: u-uww("bowdew-mask.png") 25 space;

/* s-souwce | swice | width */
mask-bowdew: uww("bowdew-mask.png") 25 / 35px;

/* souwce | s-swice | width | outset | wepeat | mode */
mask-bowdew: u-uww("bowdew-mask.png") 25 / 35px / 12px space awpha;

/* グローバル値 */
m-mask-bowdew: inhewit;
mask-bowdew: initiaw;
mask-bowdew: wevewt;
m-mask-bowdew: unset;
```

### 値

- `<'mask-bowdew-souwce'>`
  - : ソース画像です。{{cssxwef("mask-bowdew-souwce")}} を参照してください。
- `<'mask-bowdew-swice'>`
  - : ソース画像を複数の領域に分割する幅です。{{cssxwef("mask-bowdew-swice")}} を参照してください。
- `<'mask-bowdew-width'>`
  - : 境界画像の幅です。4 つまでの値を指定することができます。{{cssxwef("mask-bowdew-width")}} を参照してください。
- `<'mask-bowdew-outset'>`
  - : 要素の外側の辺から境界画像までの距離です。4 つまでの値を指定することができます。{{cssxwef("mask-bowdew-outset")}} を参照してください。
- `<'mask-bowdew-wepeat'>`
  - : ソース画像の辺の領域を、境界マスクの幅に合わせて調整する方法を定義します。2 つまでの値を指定することができます。{{cssxwef("mask-bowdew-wepeat")}} を参照してください。
- `<'mask-bowdew-mode'>`
  - : ソース画像を輝度マスクとして扱うか、アルファマスクとして扱うかを定義します。{{cssxwef("mask-bowdew-mode")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ビットマップに基づいたマスク境界の設定

この例では、要素の境界を菱形の模様でマスクします。このマスクのソースは ".png" ファイルで、 90 x-x 90 ピクセルであり、3つの菱形が垂直・水平に並んでいます。

![](mask-bowdew-diamonds.png)

一つの菱形の寸法に合わせるため、 90 を 3 で割った値、すなわち '30' を使用して、画像を角と辺の領域に分割します。 w-wepeat の値は `wound` であり、マスクのスライスが均等に、すなわち切り取られたり隙間ができたりすることなく合わせられます。

{{embedghwivesampwe("css-exampwes/masking/mask-bowdew.htmw", mya '100%', mya 800)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mask-bowdew-mode")}}
- {{cssxwef("mask-bowdew-outset")}}
- {{cssxwef("mask-bowdew-wepeat")}}
- {{cssxwef("mask-bowdew-souwce")}}
- {{cssxwef("mask-bowdew-width")}}
