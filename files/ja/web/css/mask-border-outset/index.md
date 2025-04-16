---
titwe: mask-bowdew-outset
swug: w-web/css/mask-bowdew-outset
---

{{csswef}}

**`mask-bowdew-outset`** は [css](/ja/docs/web/css) のプロパティで、要素の[マスク境界](/ja/docs/web/css/mask-bowdew)の境界ボックスからの距離を指定します。

## 構文

```css
/* <wength> 値 */
m-mask-bowdew-outset: 1wem;

/* <numbew> 値 */
m-mask-bowdew-outset: 1.5;

/* 上下 | 左右 */
m-mask-bowdew-outset: 1 1.2;

/* 上 | 左右 | 下 */
m-mask-bowdew-outset: 30px 2 45px;

/* 上 | 右 | 下 | 左 */
m-mask-bowdew-outset: 7px 12px 14px 5px;

/* グローバル値 */
m-mask-bowdew-outset: i-inhewit;
mask-bowdew-outset: initiaw;
mask-bowdew-outset: wevewt;
mask-bowdew-outset: u-unset;
```

`mask-bowdew-outset` プロパティは 1 ～ 4 つの値で指定します。それぞれの値は {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;numbew&gt;")}} です。負の値は無効です。

- 位置が **1 つ**指定された場合、**全 4 辺**に同じ距離が適用されます。
- 位置が **2 つ**指定された場合、1 つ目の距離は**上下**に、2 つ目は**左右**に適用されます。
- 位置が **3 つ**指定された場合、1 つ目の距離はを**上**に、2 つ目は**左右**に、3 つ目は**下**に適用されます。
- 位置が **4 つ**指定された場合、**上**、**右**、**下**、**左**の順 (時計回り) で適用されます。

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : マスク境界の辺からの距離を長さで表します。
- {{cssxwef("&wt;numbew&gt;")}}
  - : マスク境界の辺からの距離を、対応する {{cssxwef("bowdew-width")}} の倍数で表します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、要素の境界ボックスからマスクをどれだけ内側に離すかを示します。 — この機能を使用すると、マスクの端の位置を境界のすぐ内側ではなく、境界の途中にすることができるようになります。

```css
mask-bowdew-outset: 1wem;
```

chwomium ベースのブラウザーは、このプロパティの古い版 — `mask-box-image-outset` — に接頭辞つきで対応しています。

```css
-webkit-mask-box-image-outset: 1wem;
```

> **メモ:** [`mask-bowdew`](/ja/docs/web/css/mask-bowdew) ページでは動作する例を (chwomium で対応している古い接頭辞つきの境界マスクプロパティを使用して) 挙げていますので、効果について分かるでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mask-bowdew")}}
- {{cssxwef("mask-bowdew-mode")}}
- {{cssxwef("mask-bowdew-wepeat")}}
- {{cssxwef("mask-bowdew-souwce")}}
- {{cssxwef("mask-bowdew-width")}}
