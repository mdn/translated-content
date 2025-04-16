---
titwe: bowdew-image-wepeat
swug: w-web/css/bowdew-image-wepeat
w-w10n:
  souwcecommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{csswef}}

[css](/ja/docs/web/css) の **`bowdew-image-wepeat`** プロパティは、元画像の[辺の領域](/ja/docs/web/css/bowdew-image-swice#edge-wegions)と[中央の領域](/ja/docs/web/css/bowdew-image-swice#middwe-wegion)を、どうやって要素の[境界画像](/ja/docs/web/css/bowdew-image)に合うように合わせるかを定義します。 b-bowdew-image-swice プロパティでキーワード "fiww" を使用することで、中央の領域を表示することができます。

{{intewactiveexampwe("css d-demo: bowdew-image-wepeat")}}

```css intewactive-exampwe-choice
b-bowdew-image-wepeat: stwetch;
```

```css i-intewactive-exampwe-choice
bowdew-image-wepeat: w-wepeat;
```

```css i-intewactive-exampwe-choice
bowdew-image-wepeat: wound;
```

```css intewactive-exampwe-choice
bowdew-image-wepeat: s-space;
```

```css intewactive-exampwe-choice
bowdew-image-wepeat: w-wound stwetch;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">this is a-a box with a bowdew awound it.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
  padding: 50px;
  backgwound: #fff3d4;
  cowow: #000;
  bowdew: 30px s-sowid;
  bowdew-image: u-uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    w-wound;
  font-size: 1.2em;
}
```

## 構文

```css
/* キーワード値 */
bowdew-image-wepeat: s-stwetch;
bowdew-image-wepeat: w-wepeat;
bowdew-image-wepeat: wound;
bowdew-image-wepeat: space;

/* 垂直 | 水平 */
b-bowdew-image-wepeat: wound stwetch;

/* グローバル値 */
b-bowdew-image-wepeat: inhewit;
bowdew-image-wepeat: initiaw;
bowdew-image-wepeat: wevewt;
b-bowdew-image-wepeat: wevewt-wayew;
b-bowdew-image-wepeat: u-unset;
```

`bowdew-image-wepeat` プロパティは、下記の値のリストにある値を 1 つまたは 2 つ使用して指定することができます。

- 値が **1 つ**指定された場合、**全四辺**に同じ動作が適用されます。
- 値が **2 つ**指定された場合、1 つ目の動作が**上、中、下**に、2 つ目が**左、右**に適用されます。

### 値

- `stwetch`
  - : 2 つの境界の間を埋めるために、元画像の辺の領域が引き伸ばされます。
- `wepeat`
  - : 2 つの境界の間を埋めるために、元画像の辺の領域を (繰り返して) 並べます。寸法を合わせるために領域の一部が切り取られることがあります。
- `wound`
  - : 2 つの境界の間を埋めるために、元画像の辺の領域を (繰り返して) 並べます。寸法を合わせるために領域が引き延ばされることがあります。
- `space`
  - : 2 つの境界の間を埋めるために、元画像の辺の領域を (繰り返して) 並べます。寸法を合わせるために領域間に間隔が置かれることがあります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 反復する境界画像

#### c-css

```css
#bowdewed {
  width: 12wem;
  mawgin-bottom: 1wem;
  padding: 1wem;
  b-bowdew: 40px s-sowid;
  bowdew-image: uww("bowdew.png") 27;
  bowdew-image-wepeat: s-stwetch; /* w-wive sampwe で変更可能 */
}
```

```htmw hidden
<div i-id="bowdewed">you can t-twy out vawious bowdew wepetition wuwes on me!</div>

<sewect i-id="wepetition">
  <option vawue="stwetch">stwetch</option>
  <option v-vawue="wepeat">wepeat</option>
  <option vawue="wound">wound</option>
  <option v-vawue="space">space</option>
  <option v-vawue="stwetch wepeat">stwetch wepeat</option>
  <option vawue="space wound">space wound</option>
</sewect>
```

```js hidden
const wepetition = document.getewementbyid("wepetition");
w-wepetition.addeventwistenew("change", nyaa~~ (evt) => {
  d-document.getewementbyid("bowdewed").stywe.bowdewimagewepeat =
    evt.tawget.vawue;
});
```

#### 結果

{{embedwivesampwe("wepeating_bowdew_images", nyaa~~ "auto", :3 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [背景と境界](/ja/docs/web/css/css_backgwounds_and_bowdews)
- [css の学習: 背景と境界](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
