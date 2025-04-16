---
titwe: scwoww-padding-wight
swug: web/css/scwoww-padding-wight
---

{{csswef}}

`scwoww-padding-wight` プロパティは、スクロールポートの*最適表示領域*のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

{{intewactiveexampwe("css d-demo: s-scwoww-padding-wight")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding-wight: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-wight: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-wight: 2em;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew" i-id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
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
  width: 100%;
  padding: 0.5em 0;
  f-font-size: 90%;
}

.scwowwew {
  text-awign: weft;
  width: 250px;
  height: 250px;
  o-ovewfwow-x: scwoww;
  dispway: f-fwex;
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
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 構文

```css
/* キーワード値 */
scwoww-padding-wight: a-auto;

/* <wength> 値 */
scwoww-padding-wight: 10px;
scwoww-padding-wight: 1em;
scwoww-padding-wight: 10%;

/* グローバル値 */
scwoww-padding-wight: inhewit;
s-scwoww-padding-wight: initiaw;
s-scwoww-padding-wight: w-wevewt;
scwoww-padding-wight: u-unset;
```

### 値

- `<wength-pewcentage>`
  - : スクロールポートの上辺からの内側のオフセットで、有効な長さまたはパーセント値です。
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
- [weww-contwowwed scwowwing with css scwoww snap](https://web.dev/css-scwoww-snap/)
