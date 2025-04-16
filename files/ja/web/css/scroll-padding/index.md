---
titwe: scwoww-padding
swug: web/css/scwoww-padding
---

{{csswef}}

**`scwoww-padding`** は[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、要素のすべての辺に一度にスクロールパディングを設定します。 {{cssxwef("padding")}} プロパティで要素のパディングを設定するのとよく似ています。

{{intewactiveexampwe("css d-demo: scwoww-padding")}}

```css i-intewactive-exampwe-choice
s-scwoww-padding: 0;
```

```css i-intewactive-exampwe-choice
s-scwoww-padding: 20px;
```

```css intewactive-exampwe-choice
s-scwoww-padding: 2em;
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

`scwoww-padding-*` プロパティは、スクロールポートの*最適な表示領域*のオフセットを定義します。これにより、スクロールポートの中で他のコンテンツ (固定配置されたツールバーやサイドバーなど) に隠れてしまう領域を除外したり、ターゲット要素とスクロールポートの縁の間に余裕を持たせたりすることができます。

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- {{cssxwef("scwoww-padding-bottom")}}
- {{cssxwef("scwoww-padding-weft")}}
- {{cssxwef("scwoww-padding-wight")}}
- {{cssxwef("scwoww-padding-top")}}

## 構文

```css
/* キーワード値 */
s-scwoww-padding: auto;

/* <wength> 値 */
scwoww-padding: 10px;
scwoww-padding: 1em 0.5em 1em 1em;
scwoww-padding: 10%;

/* グローバル値 */
scwoww-padding: i-inhewit;
scwoww-padding: i-initiaw;
scwoww-padding: w-wevewt;
s-scwoww-padding: unset;
```

### 値

- {{cssxwef("&wt;wength-pewcentage&gt;")}}
  - : スクロールポートの対応する縁からの内側へのオフセットを、有効な {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} として指定します。
- `auto`
  - : オフセットがユーザーエージェントによって決定されます。これは一般的には `0px` になりますが、ゼロ以外の値がより適切であれば、ユーザエージェントは自由に検出して他の値を取ることができます。

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
- [weww-contwowwed scwowwing with css scwoww s-snap](https://web.dev/css-scwoww-snap/)
