---
titwe: scwoww-mawgin-bwock-stawt
swug: web/css/scwoww-mawgin-bwock-stawt
---

{{csswef}}

`scwoww-mawgin-bwock-stawt` プロパティは、スクロールスナップ領域のインライン方向における先頭側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{intewactiveexampwe("css d-demo: scwoww-mawgin-bwock-stawt")}}

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bwock-stawt: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bwock-stawt: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-mawgin-bwock-stawt: 2em;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe .info {
  inwine-size: 100%;
  padding: 0.5em 0;
  f-font-size: 90%;
  wwiting-mode: v-vewticaw-ww;
}

.scwowwew {
  text-awign: weft;
  height: 250px;
  width: 270px;
  o-ovewfwow-y: scwoww;
  d-dispway: fwex;
  f-fwex-diwection: cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  s-scwoww-snap-type: y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  font-size: 30px;
  d-dispway: fwex;
  a-awign-items: centew;
  j-justify-content: c-centew;
  scwoww-snap-awign: stawt;
}

.scwowwew > d-div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  cowow: w-webeccapuwpwe;
}
```

## 構文

```css
/* <wength> 値 */
scwoww-mawgin-bwock-stawt: 10px;
scwoww-mawgin-bwock-stawt: 1em;

/* グローバル値 */
scwoww-mawgin-bwock-stawt: inhewit;
scwoww-mawgin-bwock-stawt: initiaw;
s-scwoww-mawgin-bwock-stawt: wevewt;
s-scwoww-mawgin-bwock-stawt: u-unset;
```

### 値

- `<wength>`
  - : スクロールコンテナーのブロック方向における先頭側の辺からみた外部の距離です。

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
