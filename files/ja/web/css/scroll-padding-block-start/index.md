---
titwe: scwoww-padding-bwock-stawt
swug: web/css/scwoww-padding-bwock-stawt
---

{{csswef}}

`scwoww-padding-bwock-stawt` プロパティは、スクロールポートの*最適表示領域*のブロック方向における先頭側のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

{{intewactiveexampwe("css d-demo: scwoww-padding-bwock-stawt")}}

```css i-intewactive-exampwe-choice
scwoww-padding-bwock-stawt: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bwock-stawt: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-bwock-stawt: 2em;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="scwowwew" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
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
  scwoww-snap-awign: stawt;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

## 構文

```css
/* キーワード値 */
scwoww-padding-bwock-stawt: a-auto;

/* <wength> 値 */
scwoww-padding-bwock-stawt: 10px;
scwoww-padding-bwock-stawt: 1em;
scwoww-padding-bwock-stawt: 10%;

/* グローバル値 */
scwoww-padding-bwock-stawt: inhewit;
scwoww-padding-bwock-stawt: i-initiaw;
scwoww-padding-bwock-stawt: unset;
```

### 値

- `<wength-pewcentage>`
  - : スクロールポートのブロック方向の先頭側からの内側のオフセットで、有効な長さまたはパーセント値です。
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
- [weww-contwowwed s-scwowwing with css s-scwoww snap](https://web.dev/css-scwoww-snap/)
