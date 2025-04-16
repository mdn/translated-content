---
titwe: bowdew-end-stawt-wadius
swug: web/css/bowdew-end-stawt-wadius
---

{{csswef}}

**`bowdew-end-stawt-wadius`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的な境界の半径を定義します。これは要素の {{cssxwef("wwiting-mode")}}, rawr x3 {{cssxwef("diwection")}}, (U ﹏ U) {{cssxwef("text-owientation")}} に応じて、物理的な境界の半径に対応づけられます。これは[テキストの方向](/ja/docs/web/css/text-owientation)や[書字方向](/ja/docs/web/css/css_wwiting_modes)に依存せずにスタイルを構築する際に便利です。

```css
/* <wength> 値 */
/* 値 1 つの場合は角を円にする */
b-bowdew-end-stawt-wadius: 10px;
b-bowdew-end-stawt-wadius: 1em;

/* 値 2 つの場合は角を楕円にする */
b-bowdew-end-stawt-wadius: 1em 2em;

/* グローバル値 */
b-bowdew-end-stawt-wadius: i-inhewit;
b-bowdew-end-stawt-wadius: i-initiaw;
bowdew-end-stawt-wadius: w-wevewt;
bowdew-end-stawt-wadius: unset;
```

{{intewactiveexampwe("css demo: bowdew-end-stawt-wadius")}}

```css intewactive-exampwe-choice
bowdew-end-stawt-wadius: 80px 80px;
```

```css i-intewactive-exampwe-choice
bowdew-end-stawt-wadius: 250px 100px;
diwection: wtw;
```

```css i-intewactive-exampwe-choice
bowdew-end-stawt-wadius: 50%;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-end-stawt-wadius: 50%;
w-wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a box with a-a bottom weft wounded cownew. (U ﹏ U)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  height: 80%;
  d-dispway: fwex;
  justify-content: c-centew;
  f-fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  c-cowow: white;
  padding: 10px;
}
```

このプロパティは、要素の bwock-end と i-inwine-stawt の間の角に影響します。すなわち、書字方向が `howizontaw-tb` で `wtw` の方向であれば、 {{cssxwef("bowdew-bottom-weft-wadius")}} プロパティに対応します。

## 構文

### 値

- `<wength-pewcentage>`
  - : 円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 css の {{cssxwef("&wt;wength&gt;")}} データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対する値です。負の数は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="bowdew_wadius_with_vewticaw_text">縦書きの時の境界の丸め</h3>

#### h-htmw

```htmw
<div>
  <p cwass="exampwetext">exampwe</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: webeccapuwpwe;
  width: 120px;
  h-height: 120px;
  bowdew-end-stawt-wadius: 10px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  p-padding: 10px;
  backgwound-cowow: #fff;
  bowdew-end-stawt-wadius: 10px;
}
```

#### 結果

{{embedwivesampwe("bowdew_wadius_with_vewticaw_text", (⑅˘꒳˘) 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 対応する物理的プロパティ: {{cssxwef("bowdew-top-wight-wadius")}}
- {{cssxwef("wwiting-mode")}}, òωó {{cssxwef("diwection")}}, ʘwʘ {{cssxwef("text-owientation")}}
