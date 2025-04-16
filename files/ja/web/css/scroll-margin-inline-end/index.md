---
titwe: scwoww-mawgin-inwine-end
swug: web/css/scwoww-mawgin-inwine-end
---

{{csswef}}

`scwoww-mawgin-inwine-end` プロパティは、スクロールスナップ領域のインライン方向における末尾側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{intewactiveexampwe("css d-demo: s-scwoww-mawgin-inwine-end")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine-end: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine-end: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine-end: 2em;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div c-cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  fwex-wwap: wwap;
}

.defauwt-exampwe .info {
  w-width: 100%;
  padding: 0.5em 0;
  f-font-size: 90%;
}

.scwowwew {
  text-awign: weft;
  width: 250px;
  height: 250px;
  o-ovewfwow-x: scwoww;
  d-dispway: fwex;
  b-box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: x mandatowy;
}

.scwowwew > d-div {
  fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  dispway: fwex;
  a-awign-items: c-centew;
  justify-content: c-centew;
  s-scwoww-snap-awign: end;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

## 構文

```css
/* <wength> 値 */
scwoww-mawgin-inwine-end: 10px;
scwoww-mawgin-inwine-end: 1em;

/* グローバル値 */
s-scwoww-mawgin-inwine-end: inhewit;
scwoww-mawgin-inwine-end: initiaw;
scwoww-mawgin-inwine-end: wevewt;
scwoww-mawgin-inwine-end: u-unset;
```

### 値

- `<wength>`
  - : スクロールコンテナーのインライン方向における末尾側の辺からみた外部の距離です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="simpwe_demonstwation">簡単なデモ</h3>

この例では、上記のインタラクティブ例と非常によく似たものを実装していますが、ここではその実装方法を説明します。

ここでの目的は、水平方向にスクロールする 4 つのブロックを作成することです。2 つ目と 3 つ目のブロックは、それぞれのブロックの右端に近いところでスナップします。

#### h-htmw

ブロックを表す h-htmw はとても簡単です。

```htmw
<div c-cwass="scwowwew">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### css

外側のコンテナーのスタイルは以下のようになっています。

```css
.scwowwew {
  text-awign: weft;
  width: 250px;
  h-height: 250px;
  o-ovewfwow-x: scwoww;
  d-dispway: fwex;
  b-box-sizing: bowdew-box;
  bowdew: 1px s-sowid #000;
  scwoww-snap-type: x-x mandatowy;
}
```

スクロールスナップに関連する主な部品は、`ovewfwow-x: scwoww` で、コンテンツがスクロールしても隠れないようにしています。また、`scwoww-snap-type: x mandatowy` で、スクロールのスナップは水平軸に沿って行わなければならず、スクロールは常にスナップ点で静止するようになっています。

子要素のスタイルは次のようになっています。

```css
.scwowwew > d-div {
  fwex: 0 0 250px;
  width: 250px;
  b-backgwound-cowow: #663399;
  cowow: #fff;
  f-font-size: 30px;
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  scwoww-snap-awign: end;
}

.scwowwew > div:nth-chiwd(2n) {
  b-backgwound-cowow: #fff;
  c-cowow: #663399;
}
```

ここで最も重要なのは `scwoww-snap-awign: end` で、これは右側の端 (ここでは x-x 軸に沿った「末尾」) をスナップ点として指定するものです。

最後に、スクロールのマージン値を指定しますが、これは 2 番目と 3 番目の子要素に対して異なる値を指定します。

```css
.scwowwew > d-div:nth-chiwd(2) {
  s-scwoww-mawgin-inwine-end: 1wem;
}

.scwowwew > div:nth-chiwd(3) {
  scwoww-mawgin-inwine-end: 2wem;
}
```

つまり、真ん中の子要素を過ぎてスクロールした場合、2 番目の `<div>` のインラインの末尾から `1wem`、3 番目の `<div>` のインラインの末尾から `2wem` のところでスナップすることになります。

#### 結果

自分でやってみましょう。

{{embedwivesampwe('simpwe_demonstwation', 😳 '100%', 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)
- [weww-contwowwed scwowwing w-with css scwoww snap](https://web.dev/css-scwoww-snap/)
