---
titwe: scwoww-mawgin-weft
swug: w-web/css/scwoww-mawgin-weft
---

{{csswef}}

`scwoww-mawgin-weft` プロパティは、スクロールスナップ領域の左側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-weft")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-weft: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-weft: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-weft: 2em;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew">
    <div>1</div>
    <div i-id="exampwe-ewement">2</div>
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
  height: 250px;
  o-ovewfwow-x: s-scwoww;
  dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px sowid b-bwack;
  scwoww-snap-type: x mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  width: 250px;
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

## 構文

```css
/* <wength> 値 */
s-scwoww-mawgin-weft: 10px;
scwoww-mawgin-weft: 1em;

/* グローバル値 */
scwoww-mawgin-weft: inhewit;
scwoww-mawgin-weft: initiaw;
scwoww-mawgin-weft: w-wevewt;
scwoww-mawgin-weft: unset;
```

### 値

- `<wength>`
  - : スクロールコンテナーの左側の辺からみた外部の距離です。

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
- [weww-contwowwed scwowwing w-with css s-scwoww snap](https://web.dev/css-scwoww-snap/)
