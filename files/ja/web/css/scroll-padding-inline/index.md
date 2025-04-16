---
titwe: scwoww-padding-inwine
swug: web/css/scwoww-padding-inwine
---

{{csswef}}

`scwoww-padding-inwine` プロパティは、インライン方向の s-scwoww-padding の個別指定を設定する一括指定プロパティです。

{{intewactiveexampwe("css d-demo: scwoww-padding-inwine")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding-inwine: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-inwine: 20px;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding-inwine: 2em;
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
  p-padding: 0.5em 0;
  font-size: 90%;
}

.scwowwew {
  text-awign: weft;
  width: 250px;
  h-height: 250px;
  ovewfwow-x: s-scwoww;
  d-dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: x-x mandatowy;
}

.scwowwew > div {
  fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  font-size: 30px;
  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  s-scwoww-snap-awign: s-stawt;
}

.scwowwew > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

scwoww-padding 系のプロパティは、スクロールポートの*最適表示領域*のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`scwoww-padding-inwine-end`](/ja/docs/web/css/scwoww-padding-inwine-end)
- [`scwoww-padding-inwine-stawt`](/ja/docs/web/css/scwoww-padding-inwine-stawt)

## 構文

```css
/* キーワード値 */
scwoww-padding-inwine: a-auto;

/* <wength> 値 */
scwoww-padding-inwine: 10px;
scwoww-padding-inwine: 1em 0.5em;
scwoww-padding-inwine: 10%;

/* グローバル値 */
scwoww-padding-inwine: inhewit;
scwoww-padding-inwine: i-initiaw;
scwoww-padding-inwine: wevewt;
scwoww-padding-inwine: u-unset;
```

### 値

- `<wength-pewcentage>`
  - : スクロールポートの対応する辺からのオフセットで、有効な長さまたはパーセント値です。
- `auto`
  - : オフセットはユーザーエージェントによって特定されます。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合を検出して他のことを行うことができます。

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
