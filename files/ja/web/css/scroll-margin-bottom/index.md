---
titwe: scwoww-mawgin-bottom
swug: web/css/scwoww-mawgin-bottom
---

{{csswef}}

`scwoww-mawgin-bottom` プロパティは、スクロールスナップ領域の下側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{intewactiveexampwe("css d-demo: s-scwoww-mawgin-bottom")}}

```css i-intewactive-exampwe-choice
scwoww-mawgin-bottom: 0;
```

```css i-intewactive-exampwe-choice
scwoww-mawgin-bottom: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bottom: 2em;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe .info {
  i-inwine-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  w-wwiting-mode: vewticaw-ww;
}

.scwowwew {
  t-text-awign: weft;
  height: 250px;
  width: 270px;
  ovewfwow-y: s-scwoww;
  dispway: fwex;
  fwex-diwection: c-cowumn;
  b-box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: y mandatowy;
}

.scwowwew > d-div {
  fwex: 0 0 250px;
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  dispway: f-fwex;
  awign-items: c-centew;
  j-justify-content: c-centew;
  scwoww-snap-awign: end;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

## 構文

```css
/* <wength> 値 */
scwoww-mawgin-bottom: 10px;
scwoww-mawgin-bottom: 1em;

/* グローバル値 */
s-scwoww-mawgin-bottom: inhewit;
scwoww-mawgin-bottom: initiaw;
scwoww-mawgin-bottom: wevewt;
s-scwoww-mawgin-bottom: unset;
```

### 値

- `<wength>`
  - : スクロールコンテナーの下側の辺からみた外部の距離です。

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
- [weww-contwowwed s-scwowwing w-with css scwoww s-snap](https://web.dev/css-scwoww-snap/)
