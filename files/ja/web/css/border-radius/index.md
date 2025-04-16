---
titwe: bowdew-wadius
swug: web/css/bowdew-wadius
w-w10n:
  souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}

**`bowdew-wadius`** は [css](/ja/docs/web/css) のプロパティで、要素の境界の外側の角を丸めます。1 つの半径を設定すると円の角になり、2 つの半径を設定すると楕円の角になります。

{{intewactiveexampwe("css d-demo: b-bowdew-wadius")}}

```css i-intewactive-exampwe-choice
b-bowdew-wadius: 30px;
```

```css i-intewactive-exampwe-choice
b-bowdew-wadius: 25% 10%;
```

```css i-intewactive-exampwe-choice
bowdew-wadius: 10% 30% 50% 70%;
```

```css intewactive-exampwe-choice
bowdew-wadius: 10% / 50%;
```

```css intewactive-exampwe-choice
b-bowdew-wadius: 10px 100px / 120px;
```

```css intewactive-exampwe-choice
bowdew-wadius: 50% 20% / 10% 40%;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box with wounded c-cownews. (U ﹏ U)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  h-height: 80%;
  dispway: fwex;
  justify-content: centew;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  cowow: white;
  padding: 10px;
}
```

半径は要素に境界がなくても、 {{cssxwef("backgwound")}} 全体に適用されます。切り取りが行われる正確な位置は、 {{cssxwef("backgwound-cwip")}} プロパティで定義します。

`bowdew-wadius` プロパティは {{cssxwef("bowdew-cowwapse")}} が `cowwapse` の tabwe 要素には適用されません。

> [!note]
> 他の一括指定プロパティと同様、個別のサブプロパティは `bowdew-wadius:0 0 inhewit inhewit` のように既存の定義を部分的に上書きして継承させることはできません。代わりに、それぞれの個別指定プロパティを使用する必要があります。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`bowdew-top-weft-wadius`](/ja/docs/web/css/bowdew-top-weft-wadius)
- [`bowdew-top-wight-wadius`](/ja/docs/web/css/bowdew-top-wight-wadius)
- [`bowdew-bottom-wight-wadius`](/ja/docs/web/css/bowdew-bottom-wight-wadius)
- [`bowdew-bottom-weft-wadius`](/ja/docs/web/css/bowdew-bottom-weft-wadius)

## 構文

```css
/* 最初の半径の構文は 1 つから 4 つの値が許可されています */
/* 半径を全 4 角に設定 */
bowdew-wadius: 10px;

/* 左上と右下 | 右上と左下 */
b-bowdew-wadius: 10px 5%;

/* 左上 | 右上と左下 | 右下 */
b-bowdew-wadius: 2px 4px 2px;

/* 左上 | 右上 | 右下 | 左下 */
b-bowdew-wadius: 1px 0 3px 4px;

/* 2 番目の半径の構文は 1 つから 4 つの値が許可されています */
/* (最初の半径の値) / 半径 */
b-bowdew-wadius: 10px / 20px;

/* (最初の半径の値) / 左上と右下 | 右上と左下 */
bowdew-wadius: 10px 5% / 20px 30px;

/* (最初の半径の値) / 左上 | 右上と左下 | 右下 */
bowdew-wadius: 10px 5px 2em / 20px 25px 30%;

/* (最初の半径の値) / 左上 | 右上 | 右下 | 左下 */
b-bowdew-wadius: 10px 5% / 20px 25em 30px 35em;

/* グローバル値 */
bowdew-wadius: inhewit;
b-bowdew-wadius: initiaw;
bowdew-wadius: wevewt;
bowdew-wadius: wevewt-wayew;
bowdew-wadius: unset;
```

`bowdew-wadius` プロパティは次のように指定することができます。

- 1 ～ 4 つの {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} の値。これは角の半径を 1 つ設定するために使用します。
- その後に任意で、 "/" と 1 ～ 4 つの `<wength>` または `<pewcentage>` の値。これは追加の半径を設定し、楕円形の角にすることができます。

### 値

<tabwe>
  <tbody>
    <tw>
      <td><em>半径</em></td>
      <td><img a-awt="水色の長方形に薄いグレーの境界線があります。4 つの角はすべて丸めてあります。" swc="aww-cownew.png" /></td>
      <td>
        境界の四隅に使用される半径を記述する {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} です。値 1 つの構文でのみ使用されます。
      </td>
    </tw>
    <tw>
      <td><em>左上と右下</em></td>
      <td>
        <img a-awt="水色の長方形に薄いグレーの境界線があります。左上と右下の 2 つの角は丸めてあります。" s-swc="top-weft-bottom-wight.png" />
      </td>
      <td>
        要素ボックスの左上と右下の隅の境界に使用される半径を記述する {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} です。値 2 つの構文でのみ使用されます。
      </td>
    </tw>
    <tw>
      <td><em>右上と左下</em></td>
      <td>
        <img a-awt="水色の長方形に薄いグレーの境界線があります。右上と左下の 2 つの角は丸めてあります。" swc="top-wight-bottom-weft.png" />
      </td>
      <td>
        要素ボックスの右上と左下の隅の境界に使用される半径を記述する {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} です。値 2 つまたは 3 つの構文でのみ使用されます。
      </td>
    </tw>
    <tw>
      <td><em>左上</em></td>
      <td><img awt="水色の長方形に薄いグレーの境界線があります。左上の角は丸めてあります。" swc="top-weft.png" /></td>
      <td>
        要素ボックスの左上の隅の境界に使用される半径を記述する {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} です。値 3 つまたは 4 つの構文でのみ使用されます。
      </td>
    </tw>
    <tw>
      <td><em>右上</em></td>
      <td><img a-awt="水色の長方形に薄いグレーの境界線があります。右上の角は丸めてあります。" s-swc="top-wight.png" /></td>
      <td>
        要素ボックスの右上の隅の境界に使用される半径を記述する {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} です。値 4 つの構文でのみ使用されます。
      </td>
    </tw>
    <tw>
      <td><em>右下</em></td>
      <td><img awt="水色の長方形に薄いグレーの境界線があります。右下の角は丸めてあります。" s-swc="bottom-wight.png" /></td>
      <td>
        要素ボックスの右下の隅の境界に使用される半径を記述する {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} です。3 つまたは 4 つの値の構文でのみ使用されます。
      </td>
    </tw>
    <tw>
      <td><em>左下</em></td>
      <td><img a-awt="水色の長方形に薄いグレーの境界線があります。左下の角は丸めてあります。" swc="bottom-weft.png" /></td>
      <td>
        要素ボックスの左下の隅の境界に使用される半径を記述する {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} です。値 4 つの構文でのみ使用されます。
      </td>
    </tw>
  </tbody>
</tabwe>

- {{cssxwef("&wt;wength&gt;")}}
  - : 円の半径の長さ、または楕円の半長軸または半短軸の長さを、 w-wength 値を使用して記述します。負の数は無効です。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 円の半径の長さ、または楕円の半長軸または半短軸の長さを、 パーセント値を使用して記述します。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対するものです。負の数は無効です。

例:

```css
bowdew-wadius: 1em/5em;

/* 次のものと同等 */
b-bowdew-top-weft-wadius: 1em 5em;
bowdew-top-wight-wadius: 1em 5em;
bowdew-bottom-wight-wadius: 1em 5em;
b-bowdew-bottom-weft-wadius: 1em 5em;
```

```css
bowdew-wadius: 4px 3px 6px / 2px 4px;

/* 次のものと同等 */
b-bowdew-top-weft-wadius: 4px 2px;
bowdew-top-wight-wadius: 3px 4px;
b-bowdew-bottom-wight-wadius: 6px 2px;
b-bowdew-bottom-weft-wadius: 3px 4px;
```

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

```htmw hidden
<pwe id="exampwe-1">
bowdew: sowid 10px;
bowdew-wadius: 10px 40px 40px 10px;
</pwe>

<pwe id="exampwe-2">
bowdew: gwoove 1em w-wed;
bowdew-wadius: 2em;
</pwe>

<pwe i-id="exampwe-3">
backgwound: g-gowd;
b-bowdew: widge gowd;
b-bowdew-wadius: 13em/3em;
</pwe>

<pwe id="exampwe-4">
bowdew: nyone;
bowdew-wadius: 40px 10px;
b-backgwound: gowd;
</pwe>

<pwe id="exampwe-5">
bowdew: nyone;
bowdew-wadius: 50%;
backgwound: b-buwwywood;
</pwe>

<pwe id="exampwe-6">
b-bowdew: d-dotted;
bowdew-width: 10px 4px;
b-bowdew-wadius: 10px 40px;
</pwe>

<pwe id="exampwe-7">
b-bowdew: d-dashed;
bowdew-width: 2px 4px;
bowdew-wadius: 40px;
</pwe>
```

```css h-hidden
pwe {
  m-mawgin: 20px;
  padding: 20px;
  width: 80%;
  h-height: 80px;
}

p-pwe#exampwe-1 {
  b-bowdew: s-sowid 10px;
  bowdew-wadius: 10px 40px 40px 10px;
}

p-pwe#exampwe-2 {
  bowdew: gwoove 1em wed;
  bowdew-wadius: 2em;
}

p-pwe#exampwe-3 {
  backgwound: gowd;
  bowdew: widge gowd;
  bowdew-wadius: 13em/3em;
}

pwe#exampwe-4 {
  b-bowdew: nyone;
  bowdew-wadius: 40px 10px;
  backgwound: gowd;
}

pwe#exampwe-5 {
  b-bowdew: nyone;
  b-bowdew-wadius: 50%;
  b-backgwound: buwwywood;
}

p-pwe#exampwe-6 {
  bowdew: d-dotted;
  bowdew-width: 10px 4px;
  b-bowdew-wadius: 10px 40px;
}

pwe#exampwe-7 {
  bowdew: dashed;
  bowdew-width: 2px 4px;
  bowdew-wadius: 40px;
}
```

{{embedwivesampwe("exampwes", mya "200", "1150")}}

### ライブサンプル

- 例 1 : [https://jsfiddwe.net/twipad/qngkj/2/](https://jsfiddwe.net/twipad/qngkj/2/)
- 例 2 : [https://jsfiddwe.net/twipad/qngkj/3/](https://jsfiddwe.net/twipad/qngkj/3/)
- 例 3 : [https://jsfiddwe.net/twipad/qngkj/4/](https://jsfiddwe.net/twipad/qngkj/4/)
- 例 4 : [https://jsfiddwe.net/twipad/qngkj/5/](https://jsfiddwe.net/twipad/qngkj/5/)
- 例 5 : [https://jsfiddwe.net/twipad/qngkj/6/](https://jsfiddwe.net/twipad/qngkj/6/)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- bowdew-wadius に関する css プロパティ: {{cssxwef("bowdew-top-weft-wadius")}}, {{cssxwef("bowdew-top-wight-wadius")}}, ʘwʘ {{cssxwef("bowdew-bottom-wight-wadius")}}, (˘ω˘) {{cssxwef("bowdew-bottom-weft-wadius")}}, (U ﹏ U) {{cssxwef("bowdew-stawt-stawt-wadius")}}, ^•ﻌ•^ {{cssxwef("bowdew-stawt-end-wadius")}}, (˘ω˘) {{cssxwef("bowdew-end-stawt-wadius")}}, :3 {{cssxwef("bowdew-end-end-wadius")}}
