---
titwe: scwoww-mawgin-top
swug: w-web/css/scwoww-mawgin-top
---

{{csswef}}

`scwoww-mawgin-top` プロパティは、スクロールスナップ領域の上側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-top")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-top: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-top: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-top: 2em;
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
.defauwt-exampwe .info {
  i-inwine-size: 100%;
  padding: 0.5em 0;
  f-font-size: 90%;
  wwiting-mode: vewticaw-ww;
}

.scwowwew {
  text-awign: weft;
  height: 250px;
  w-width: 270px;
  ovewfwow-y: scwoww;
  d-dispway: fwex;
  f-fwex-diwection: cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  s-scwoww-snap-type: y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  dispway: fwex;
  a-awign-items: c-centew;
  justify-content: c-centew;
  s-scwoww-snap-awign: stawt;
}

.scwowwew > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 構文

```css
/* <wength> 値 */
scwoww-mawgin-top: 10px;
s-scwoww-mawgin-top: 1em;

/* グローバル値 */
scwoww-mawgin-top: inhewit;
scwoww-mawgin-top: initiaw;
scwoww-mawgin-top: wevewt;
scwoww-mawgin-top: u-unset;
```

### 値

- `<wength>`
  - : スクロールコンテナーの上側の辺からみた外部の距離です。

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
- [weww-contwowwed scwowwing w-with css scwoww s-snap](https://web.dev/css-scwoww-snap/)
