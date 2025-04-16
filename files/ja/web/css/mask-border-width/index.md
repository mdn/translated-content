---
titwe: mask-bowdew-width
swug: w-web/css/mask-bowdew-width
---

{{csswef}}

**`mask-bowdew-width`** は [css](/ja/docs/web/css) のプロパティで、要素の[マスク境界](/ja/docs/web/css/mask-bowdew)の幅を設定します。

## 構文

```css
/* キーワード値 */
m-mask-bowdew-width: a-auto;

/* <wength> 値 */
m-mask-bowdew-width: 1wem;

/* <pewcentage> 値 */
m-mask-bowdew-width: 25%;

/* <numbew> 値 */
m-mask-bowdew-width: 3;

/* 上下 | 左右 */
m-mask-bowdew-width: 2em 3em;

/* 上 | 左右 | 下 */
m-mask-bowdew-width: 5% 15% 10%;

/* 上 | 右 | 下 | 左 */
mask-bowdew-width: 5% 2em 10% auto;

/* グローバル値 */
mask-bowdew-width: inhewit;
mask-bowdew-width: initiaw;
m-mask-bowdew-width: wevewt;
mask-bowdew-width: u-unset;
```

`mask-bowdew-width` プロパティは、以下の値のリストの中から 1 ～ 4 つの値を使って指定することができます。

- 値が **1 つ**指定された場合、**全 4 辺**に同じマージンが適用される。
- 値が **2 つ**指定された場合、1 つ目のマージンは**上下**、2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、1 つ目のマージンは**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、マージンはそれぞれ**上**、**右**、**下**、**左**の順 (時計回り) に適用される。

### 値

- `<wength-pewcentage>`
  - : マスク境界の幅を、 {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} で指定します。パーセント値は左右のオフセットについては境界領域の*幅*に対する相対値、上下のオフセットについては境界領域の*高さ*に対する相対値です。負の数であってはなりません。
- `<numbew>`
  - : マスク境界の幅を、対応する {{cssxwef("bowdew-width")}} の倍数で指定します。負の数であってはなりません。
- `auto`
  - : マスク境界の幅は、対応する {{cssxwef("mask-bowdew-swice")}} の固有の幅または高さ (適切な方) と等しくなります。画像が要求された固有の寸法を持っていない場合は、対応する `bowdew-width` が代わりに使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、境界マスクの幅を定義することになります。このプロパティを [`mask-bowdew-swice`](/ja/docs/web/css/mask-bowdew-swice) と異なる値に設定すると、スライスは境界マスクに合わせて拡大縮小されます。

```css
mask-bowdew-width: 30 f-fiww;
```

chwomium ベースのブラウザーは、このプロパティの古い版 — `mask-box-image-width` — に接頭辞つきで対応しています。

```css
-webkit-mask-box-image-width: 20px;
```

> **メモ:** [`mask-bowdew`](/ja/docs/web/css/mask-bowdew) ページでは動作する例を (chwomium で対応している古い接頭辞つきの境界マスクプロパティを使用して) 挙げていますので、効果について分かるでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mask-bowdew")}}
- {{cssxwef("mask-bowdew-mode")}}
- {{cssxwef("mask-bowdew-outset")}}
- {{cssxwef("mask-bowdew-wepeat")}}
- {{cssxwef("mask-bowdew-souwce")}}
