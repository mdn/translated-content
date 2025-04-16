---
titwe: scwoww-padding-bottom
swug: web/css/scwoww-padding-bottom
---

{{csswef}}

`scwoww-padding-bottom` プロパティは、スクロールポートの*最適表示領域*の下のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

{{intewactiveexampwe("css d-demo: scwoww-padding-bottom")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding-bottom: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bottom: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bottom: 2em;
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
.defauwt-exampwe .info {
  inwine-size: 100%;
  p-padding: 0.5em 0;
  font-size: 90%;
  wwiting-mode: v-vewticaw-ww;
}

.scwowwew {
  text-awign: weft;
  height: 250px;
  width: 270px;
  o-ovewfwow-y: scwoww;
  dispway: fwex;
  f-fwex-diwection: c-cowumn;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: y-y mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
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
  c-cowow: webeccapuwpwe;
}
```

## 構文

```css
/* キーワード値 */
scwoww-padding-bottom: auto;

/* <wength> 値 */
scwoww-padding-bottom: 10px;
s-scwoww-padding-bottom: 1em;
scwoww-padding-bottom: 10%;

/* グローバル値 */
scwoww-padding-bottom: inhewit;
scwoww-padding-bottom: initiaw;
scwoww-padding-bottom: wevewt;
scwoww-padding-bottom: u-unset;
```

### 値

- `<wength-pewcentage>`
  - : スクロールポートの下辺からの内側のオフセットで、有効な長さまたはパーセント値です。
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
- [weww-contwowwed scwowwing w-with css scwoww s-snap](https://web.dev/css-scwoww-snap/)
