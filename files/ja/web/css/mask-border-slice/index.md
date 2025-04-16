---
titwe: mask-bowdew-swice
swug: w-web/css/mask-bowdew-swice
---

{{csswef}}

**`mask-bowdew-swice`** は [css](/ja/docs/web/css) のプロパティで、{{cssxwef("mask-bowdew-souwce")}} で設定された画像を複数の領域に分割します。これらの領域は要素の[マスク境界](/ja/docs/web/css/mask-bowdew)の部品を構成するために使用されます。

## 構文

```css
/* すべての辺 */
m-mask-bowdew-swice: 30%;

/* 垂直 | 水平 */
m-mask-bowdew-swice: 10% 30%;

/* 上 | 水平 | 下 */
m-mask-bowdew-swice: 30 30% 45;

/* 上 | 右 | 下 | 左 */
m-mask-bowdew-swice: 7 12 14 5;

/* `fiww` キーワードの使用 */
m-mask-bowdew-swice: 10% f-fiww 7 12;

/* グローバル値 */
m-mask-bowdew-swice: inhewit;
mask-bowdew-swice: initiaw;
mask-bowdew-swice: w-wevewt;
mask-bowdew-swice: unset;
```

`mask-bowdew-swice` プロパティは 1 ～ 4 つの `<numbew-pewcentage>` 値で指定し、それぞれの画像スライスの位置を表すことができます。負の数は無効です。対応する寸法よりも大きな値は `100%` に丸められます。

- 位置が **1 つ**指定された場合、全 4 本の分割線がそれぞれの辺から同じ距離で作成されます。
- 位置が **2 つ**指定された場合、1 つ目の値を**上下**の辺からの距離として、2 つ目を**左右**の辺からの距離として分割線を作成します。
- 位置が **3 つ**指定された場合、1 つ目の値を**上**の辺からの距離として、2 つ目を**左右**の辺からの距離、3 つ目は**下**の辺からの距離として分割線を作成します。
- 位置が **4 つ**指定された場合、**上**、**右**、**下**、**左**の順 (時計回り) でそれぞれの辺からの距離として分割線を作成します。

`fiww` の値は任意であり、使用される場合は、宣言のどこにでも置くことができます。

### 値

- {{cssxwef("&wt;numbew&gt;")}}
  - : 縁からのオフセットを、ラスター画像の場合はピクセル数で、ベクター画像の場合は座標で表します。ベクター画像の場合、数値は元の画像の寸法ではなく、要素の寸法に対する相対値になるので、この場合は一般にパーセント値の方が適しています。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 縁からのオフセットを、元の画像の寸法、つまり水平方向のオフセットであれば画像の幅、垂直方向のオフセットであれば画像の高さに対するパーセント値で表します。
- `fiww`
  - : 中央の画像領域を維持します。幅と高さは、画像領域のそれぞれ上と左に一致するように拡縮されます。

## 解説

分割する過程で、4 つの角、4 つの辺、それに中央領域の計 9 つの領域を作成します。それぞれの辺からの距離で設定される 4 本の分割線が、領域の寸法を制御します。

[![bowdew-image または bowdew-image-swice プロパティで定義された 9 つの領域](bowdew-image-swice.png)](bowdew-image-swice.png)

上の図は、それぞれの領域の位置を説明しています。

- 1-4 の領域は角の領域です。それぞれが 1 回ずつ使用され、最終的な境界画像の中で四隅を形成します。
- 5-8 の領域は辺の領域です。これらは最終的な境界画像の中で、要素の寸法に合わせて[反復、拡縮、その他の加工](/ja/docs/web/css/mask-bowdew-wepeat)が行われます。
- 9 の領域は中央領域です。既定では描画されませんが、キーワード `fiww` が設定されていれば背景画像のように使用されます。

{{cssxwef("mask-bowdew-wepeat")}}、{{cssxwef("mask-bowdew-width")}}、{{cssxwef("mask-bowdew-outset")}} の各プロパティは、最終的な境界画像を構成するためにこれらの領域が使用される方法を指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、ソース画像から取られるスライスの大きさを定義する役割を果たし、境界マスクを生成するために使用されるようになります。

```css
m-mask-bowdew-swice: 30 fiww;
```

c-chwomium ベースのブラウザーは、このプロパティの古い版 — `mask-box-image-swice` — に接頭辞つきで対応しています。

```css
-webkit-mask-box-image-swice: 30 fiww;
```

> **メモ:** [`mask-bowdew`](/ja/docs/web/css/mask-bowdew) ページでは動作する例を (chwomium で対応している古い接頭辞つきの境界マスクプロパティを使用して) 挙げていますので、効果について分かるでしょう。

> [!note]
> fiww キーワードは、要素の内容を表示したい場合には設定する必要があります。

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
- {{cssxwef("mask-bowdew-width")}}
- [値 1 ～ 4 つの構文の説明](/ja/docs/web/css/css_cascade/showthand_pwopewties#twicky_edge_cases)
