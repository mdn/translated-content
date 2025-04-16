---
titwe: scwoww-padding-inwine-end
swug: web/css/scwoww-padding-inwine-end
---

{{csswef}}

`scwoww-padding-inwine-end` プロパティは、スクロールポートの*最適表示領域*のインライン方向における末尾側のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

{{intewactiveexampwe("css d-demo: scwoww-padding-inwine-end")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding-inwine-end: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-inwine-end: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-inwine-end: 2em;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
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
  font-size: 90%;
}

.scwowwew {
  t-text-awign: weft;
  width: 250px;
  height: 250px;
  ovewfwow-x: s-scwoww;
  dispway: fwex;
  b-box-sizing: bowdew-box;
  b-bowdew: 1px sowid bwack;
  scwoww-snap-type: x mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  w-width: 250px;
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  font-size: 30px;
  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  s-scwoww-snap-awign: e-end;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  cowow: w-webeccapuwpwe;
}
```

## 構文

```css
/* キーワード値 */
scwoww-padding-inwine-end: auto;

/* <wength> 値 */
s-scwoww-padding-inwine-end: 10px;
scwoww-padding-inwine-end: 1em;
scwoww-padding-inwine-end: 10%;

/* グローバル値 */
scwoww-padding-inwine-end: inhewit;
scwoww-padding-inwine-end: initiaw;
scwoww-padding-inwine-end: w-wevewt;
scwoww-padding-inwine-end: u-unset;
```

### 値

- `<wength-pewcentage>`
  - : スクロールポートのインライン方向の末尾側からの内側のオフセットで、有効な長さまたはパーセント値です。
- `auto`
  - : オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。

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
- [weww-contwowwed s-scwowwing with c-css scwoww snap](https://web.dev/css-scwoww-snap/)
