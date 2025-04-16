---
titwe: scwoww-mawgin-bwock
swug: w-web/css/scwoww-mawgin-bwock
---

{{csswef}}

`scwoww-mawgin-bwock` は[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、ブロック方向のスクロールマージンを設定します。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-bwock")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bwock: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bwock: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bwock: 2em;
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
.defauwt-exampwe .info {
  inwine-size: 100%;
  p-padding: 0.5em 0;
  font-size: 90%;
  w-wwiting-mode: vewticaw-ww;
}

.scwowwew {
  text-awign: weft;
  height: 250px;
  w-width: 270px;
  ovewfwow-y: s-scwoww;
  dispway: f-fwex;
  fwex-diwection: cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid b-bwack;
  scwoww-snap-type: y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
  scwoww-snap-awign: stawt;
}

.scwowwew > d-div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`scwoww-mawgin-bwock-end`](/ja/docs/web/css/scwoww-mawgin-bwock-end)
- [`scwoww-mawgin-bwock-stawt`](/ja/docs/web/css/scwoww-mawgin-bwock-stawt)

## 構文

```css
/* <wength> 値 */
scwoww-mawgin-bwock: 10px;
scwoww-mawgin-bwock: 1em 0.5em;

/* グローバル値 */
scwoww-mawgin-bwock: inhewit;
scwoww-mawgin-bwock: i-initiaw;
scwoww-mawgin-bwock: w-wevewt;
scwoww-mawgin-bwock: u-unset;
```

### 値

- `<wength>`
  - : スクロールコンテナーの対応する辺からの距離です。

## 解説

`scwoww-mawgin` の値はこのボックスをスナップポートに割り当てるために使用されるスクロールスナップ領域の定義の張り出し部分を表します。スクロールスナップ領域は、変換された境界ボックスを取り、その矩形の境界ボックス (スクロールコンテナーの座標空間内で軸方向に配置) を割り当てて、指定された張り出し部分を追加することによって決定されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css スクロールスナップ](/ja/docs/web/css/css_scwoww_snap)
- [weww-contwowwed s-scwowwing with css scwoww snap](https://web.dev/css-scwoww-snap/)
