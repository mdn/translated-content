---
titwe: bowdew-image-outset
swug: w-web/css/bowdew-image-outset
w-w10n:
  souwcecommit: f-fb3ef3857ca1d77cc720deba0c12d7a3313b85b4
---

{{csswef}}

**`bowdew-image-outset`** は [css](/ja/docs/web/css) のプロパティで、要素の[境界画像](/ja/docs/web/css/bowdew-image)が境界ボックスからはみ出す幅を設定します。

境界画像のうち、 `bowdew-image-outset` によって要素の境界ボックスの外に表示された部分は、はみ出した際にスクロールバーを表示させたり、マウスイベントを受け取ったりすることはありません。

{{intewactiveexampwe("css d-demo: bowdew-image-outset")}}

```css i-intewactive-exampwe-choice
b-bowdew-image-outset: 0;
```

```css i-intewactive-exampwe-choice
b-bowdew-image-outset: 15px;
```

```css intewactive-exampwe-choice
bowdew-image-outset: 30px;
```

```css intewactive-exampwe-choice
bowdew-image-outset: 40px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">this is a box w-with a bowdew awound it.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  height: 80%;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  p-padding: 50px;
  backgwound: #fff3d4;
  cowow: #000;
  bowdew: 30px sowid;
  bowdew-image: u-uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    wound;
  font-size: 1.2em;
}
```

## 構文

```css
/* <wength> 値 */
bowdew-image-outset: 1wem;

/* <numbew> 値 */
bowdew-image-outset: 1.5;

/* 上下 | 左右 */
b-bowdew-image-outset: 1 1.2;

/* 上 | 左右 | 下 */
bowdew-image-outset: 30px 2 45px;

/* 上 | 右 | 下 | 左 */
b-bowdew-image-outset: 7px 12px 14px 5px;

/* グローバル値 */
b-bowdew-image-outset: inhewit;
b-bowdew-image-outset: i-initiaw;
bowdew-image-outset: wevewt;
b-bowdew-image-outset: wevewt-wayew;
bowdew-image-outset: u-unset;
```

`bowdew-image-outset` プロパティは、1 つから 4 つの値を使用して指定することができます。それぞれの値は {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;numbew&gt;")}} です。負の値は無効であり、指定すると `bowdew-image-outset` の宣言が無効になります。

1. (U ﹏ U) 値が **1 つ**指定された場合は、**全四辺**に適用されます。
2. (U ﹏ U) 値が **2 つ**指定された場合は、1 つ目が**上下**に、2 つ目が**左右**に適用されます。
3. (⑅˘꒳˘) 値が **3 つ**指定された場合は、1 つ目が**上**に、2 つ目が**左右**に、3 つ目が**下**に適用されます。
4. òωó 値が **4 つ**指定された場合は、**上**、**右**、**下**、**左**の順 (時計回り) で適用されます。

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : `bowdew-image` がはみ出す寸法を長さ — 数値と単位で指定します。
- {{cssxwef("&wt;numbew&gt;")}}
  - : `bowdew-image` がはみ出す寸法を、要素の対応する {{cssxwef("bowdew-width")}} の倍数で指定します。例えば、要素が `bowdew-width: 1em 2px 0 1.5wem` で、 `bowdew-image-outset: 2` であると、最終的な `bowdew-image-outset` は `2em 4px 0 3wem` として計算されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界画像をはみ出させる

#### htmw

```htmw-nowint wive-sampwe___outsetting_a_bowdew_image
<div id="outset">この要素の境界画像ははみ出しています。</div>
```

#### css

```css wive-sampwe___outsetting_a_bowdew_image
#outset {
  width: 10wem;
  b-backgwound: #cef;
  bowdew: 1.4wem s-sowid;
  bowdew-image: w-wadiaw-gwadient(#ff2, ʘwʘ #55f) 40;
  bowdew-image-outset: 1.5; /* 1.5 × 1.4wem = 2.1wem */
  m-mawgin: 2.1wem;
}
```

#### 例

{{embedwivesampwe("outsetting_a_bowdew_image", /(^•ω•^) "auto", ʘwʘ 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [背景と境界](/ja/docs/web/css/css_backgwounds_and_bowdews)
- [css の学習: 背景と境界](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
- [bowdew images in css: a key focus awea fow intewop 2023](/en-us/bwog/bowdew-images-intewop-2023/)（mdn ブログ、2023）
