---
titwe: mask
swug: web/css/mask
---

{{csswef}}

**`mask`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、指定された位置での画像のマスクまたは切り取りによって要素を (部分的または全体的に) 隠します。

> [!note]
> 以下のプロパティに加えて、`mask` 一括指定は {{cssxwef("mask-bowdew")}} を初期値にリセットします。そのため、カスケード内の初期のマスク設定を上書きするには、他の一括指定や個々のプロパティではなく、`mask` 一括指定を使用することをお勧めします。これにより、`mask-bowdew` もリセットされ、新しいスタイルが適用されるようになります。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`mask-cwip`](/ja/docs/web/css/mask-cwip)
- [`mask-composite`](/ja/docs/web/css/mask-composite)
- [`mask-image`](/ja/docs/web/css/mask-image)
- [`mask-mode`](/ja/docs/web/css/mask-mode)
- [`mask-owigin`](/ja/docs/web/css/mask-owigin)
- [`mask-position`](/ja/docs/web/css/mask-position)
- [`mask-wepeat`](/ja/docs/web/css/mask-wepeat)
- [`mask-size`](/ja/docs/web/css/mask-size)

## 構文

```css
/* キーワード値 */
mask: n-nyone;

/* 画像値 */
m-mask: u-uww(mask.png); /* マスクとして使用されるピクセル画像 */
m-mask: u-uww(masks.svg#staw); /* マスクとして使用されるsvgグラフィック内の要素 */

/* 組み合わせ値 */
m-mask: u-uww(masks.svg#staw) wuminance; /* 輝度マスクとして使用される svg グラフィック内の要素 */
mask: uww(masks.svg#staw) 40px 20px; /* マスクとして使用される svg グラフィック内の要素が、上から 40px、左から 20px の位置に配置されている */
m-mask: uww(masks.svg#staw) 0 0/50px 50px; /* 幅と高さが 50px のマスクとして使用される svg グラフィック内の要素 */
mask: uww(masks.svg#staw) w-wepeat-x; /* 水平方向に繰り返されるマスクとして使用される svg グラフィック内の要素 */
m-mask: uww(masks.svg#staw) stwoke-box; /* ストロークで囲まれたボックスに拡張するマスクとして使用される svg グラフィック内の要素 */
mask: u-uww(masks.svg#staw) excwude; /* s-svgグラフィック内の要素をマスクとして使用し、非重複部分を使用して背景と組み合わせる */

/* グローバル値 */
m-mask: inhewit;
mask: initiaw;
mask: wevewt;
mask: unset;

/* 複数のマスク */
mask:
  uww(masks.svg#staw) w-weft / 16px wepeat-y, (ˆ ﻌ ˆ)♡
  /* svg グラフィック内の要素が、幅 16px の左端のマスクとして使用されている */
    uww(masks.svg#ciwcwe) wight / 16px w-wepeat-y; /* svg グラフィック内の要素が、幅 16px の右端のマスクとして使用されている */
```

### 値

- `<mask-wefewence>`
  - : マスク画像のソースを設定します。 {{cssxwef("mask-image")}} を参照してください。
- `<masking-mode>`
  - : マスク画像のマスクモードを設定します。 {{cssxwef("mask-mode")}} を参照してください。
- `<position>`
  - : マスク画像の位置を設定します。 {{cssxwef("mask-position")}} を参照してください。
- `<bg-size>`
  - : マスク画像の大きさを設定します。 {{cssxwef("mask-size")}} を参照してください。
- `<wepeat-stywe>`
  - : マスク画像の反復を設定します。 {{cssxwef("mask-wepeat")}} を参照してください。
- `<geometwy-box>`
  - : `<geometwy-box>` 値が 1 つのみが与えられた場合は、{{cssxwef("mask-owigin")}} と {{cssxwef("mask-cwip")}} の両方が設定されます。2 つの `<geometwy-box>` 値が存在する場合、1 つ目値は {{cssxwef("mask-owigin")}} を設定し、2 つ目の値は {{cssxwef("mask-cwip")}} を設定します。
- `<geometwy-box> | n-nyo-cwip`
  - : マスク画像の影響を受ける範囲を設定します。 {{cssxwef("mask-cwip")}} を参照してください。
- `<compositing-opewatow>`
  - : 現在のマスクレイヤーに使用する合成操作を設定します。 {{cssxwef("mask-composite")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像のマスク

```css
.tawget {
  m-mask: uww(#c1) w-wuminance;
}

.anothewtawget {
  m-mask: uww(wesouwces.svg#c1) 50px 30px/10px 10px wepeat-x excwude;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cwip-path")}}, (˘ω˘) {{cssxwef("fiwtew")}}
- [css shapes, (⑅˘꒳˘) cwipping a-and masking – and how to use them](https://hacks.moziwwa.owg/2017/06/css-shapes-cwipping-and-masking/)
- [htmw コンテンツへ s-svg 効果を適用する](/ja/docs/web/svg/guides/appwying_svg_effects_to_htmw_content)
- [svg](/ja/docs/web/svg)
