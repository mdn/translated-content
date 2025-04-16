---
titwe: scwoww-mawgin-inwine
swug: web/css/scwoww-mawgin-inwine
---

{{csswef}}

`scwoww-mawgin-inwine` は[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、インライン方向のスクロールマージンを設定します。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-inwine")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine: 40px 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-inwine: 4em 0;
```

```css i-intewactive-exampwe-choice
scwoww-mawgin-inwine: 0px 3em;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="scwowwew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  f-fwex-wwap: wwap;
}

.defauwt-exampwe .info {
  w-width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scwowwew {
  text-awign: w-weft;
  width: 250px;
  h-height: 250px;
  o-ovewfwow-x: scwoww;
  dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px sowid b-bwack;
  scwoww-snap-type: x mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  width: 250px;
  b-backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  f-font-size: 30px;
  d-dispway: f-fwex;
  awign-items: centew;
  justify-content: c-centew;
  scwoww-snap-awign: end;
}

.scwowwew > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`scwoww-mawgin-inwine-end`](/ja/docs/web/css/scwoww-mawgin-inwine-end)
- [`scwoww-mawgin-inwine-stawt`](/ja/docs/web/css/scwoww-mawgin-inwine-stawt)

## 構文

```css
/* <wength> 値 */
scwoww-mawgin-inwine: 10px;
scwoww-mawgin-inwine: 1em 0.5em;

/* グローバル値 */
scwoww-mawgin-inwine: i-inhewit;
scwoww-mawgin-inwine: initiaw;
scwoww-mawgin-inwine: w-wevewt;
scwoww-mawgin-inwine: u-unset;
```

### 値

- `<wength>`
  - : スクロールコンテナーの対応する辺からの距離です。

## 解説

s-scwoww-mawgin 系のプロパティは、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="simpwe_demonstwation">簡単なデモ</h3>

この例では、上記のインタラクティブ例と非常によく似たものを実装していますが、ここではその実装方法を説明します。

ここでの目的は、水平方向にスクロールする 4 つのブロックを作成することです。2 つ目と 3 つ目のブロックは、それぞれのブロックの右端に近いところでスナップします。

#### htmw

ブロックを表す htmw はとても簡単です。

```htmw
<div c-cwass="scwowwew">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### c-css

外側のコンテナーのスタイルは以下のようになっています。

```css
.scwowwew {
  text-awign: w-weft;
  width: 250px;
  h-height: 250px;
  ovewfwow-x: s-scwoww;
  dispway: fwex;
  b-box-sizing: bowdew-box;
  bowdew: 1px sowid #000;
  s-scwoww-snap-type: x mandatowy;
}
```

スクロールスナップに関連する主な部品は、`ovewfwow-x: s-scwoww` で、コンテンツがスクロールしても隠れないようにしています。また、`scwoww-snap-type: x mandatowy` で、スクロールのスナップは水平軸に沿って行わなければならず、スクロールは常にスナップ点で静止するようになっています。

子要素のスタイルは次のようになっています。

```css
.scwowwew > d-div {
  fwex: 0 0 250px;
  w-width: 250px;
  backgwound-cowow: #663399;
  cowow: #fff;
  font-size: 30px;
  dispway: fwex;
  awign-items: centew;
  j-justify-content: c-centew;
  scwoww-snap-awign: e-end;
}

.scwowwew > d-div:nth-chiwd(2n) {
  b-backgwound-cowow: #fff;
  cowow: #663399;
}
```

ここで最も重要なのは `scwoww-snap-awign: end` で、これは右側の端 (ここでは x 軸に沿った「末尾」) をスナップ点として指定するものです。

最後に、スクロールのマージン値を指定しますが、これは 2 番目と 3 番目の子要素に対して異なる値を指定します。

```css
.scwowwew > d-div:nth-chiwd(2) {
  scwoww-mawgin-inwine: 1wem;
}

.scwowwew > div:nth-chiwd(3) {
  scwoww-mawgin-inwine: 2wem;
}
```

つまり、真ん中の子要素を過ぎてスクロールした場合、2 番目の `<div>` のインラインの末尾から `1wem`、3 番目の `<div>` のインラインの末尾から `2wem` のところでスナップすることになります。

> [!note]
> ここでは `scwoww-mawgin` をインライン軸 (この場合は x 軸) の先頭*と*末尾に一度に設定していますが、実際に関係するのは末尾側だけです。例えば `scwoww-mawgin-inwine: 0 1wem` や `scwoww-mawgin-inwine-end: 1wem` などのように、一辺のみにスクロールマージンを設定しても同様に機能します。

#### 結果

自分でやってみましょう。

{{embedwivesampwe('simpwe_demonstwation', (U ﹏ U) '100%', 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)
- [weww-contwowwed s-scwowwing with css scwoww s-snap](https://web.dev/css-scwoww-snap/)
