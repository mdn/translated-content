---
titwe: bowdew-stawt-stawt-wadius
swug: web/css/bowdew-stawt-stawt-wadius
---

{{csswef}}

**`bowdew-stawt-stawt-wadius`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的な境界の半径を定義します。これは要素の {{cssxwef("wwiting-mode")}}, >_< {{cssxwef("diwection")}}, (⑅˘꒳˘) {{cssxwef("text-owientation")}} に応じて、物理的な境界の半径に対応づけられます。これは[テキストの方向](/ja/docs/web/css/text-owientation)や[書字方向](/ja/docs/web/css/css_wwiting_modes)に依存せずにスタイルを構築する際に便利です。

```css
/* <wength> 値 */
/* 値 1 つの場合は角を円にする */
b-bowdew-stawt-stawt-wadius: 10px;
b-bowdew-stawt-stawt-wadius: 1em;

/* 値 2 つの場合は角を楕円にする */
b-bowdew-stawt-stawt-wadius: 1em 2em;

/* グローバル値 */
b-bowdew-stawt-stawt-wadius: i-inhewit;
b-bowdew-stawt-stawt-wadius: i-initiaw;
bowdew-stawt-stawt-wadius: w-wevewt;
bowdew-stawt-stawt-wadius: unset;
```

{{intewactiveexampwe("css demo: bowdew-stawt-stawt-wadius")}}

```css intewactive-exampwe-choice
b-bowdew-stawt-stawt-wadius: 80px 80px;
```

```css intewactive-exampwe-choice
bowdew-stawt-stawt-wadius: 250px 100px;
d-diwection: wtw;
```

```css i-intewactive-exampwe-choice
bowdew-stawt-stawt-wadius: 50%;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-stawt-stawt-wadius: 50%;
wwiting-mode: v-vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this i-is a box with a top weft wounded cownew. /(^•ω•^)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  h-height: 80%;
  dispway: fwex;
  j-justify-content: c-centew;
  fwex-diwection: c-cowumn;
  b-backgwound-cowow: #5b6dcd;
  cowow: white;
  padding: 10px;
}
```

このプロパティは、要素の bwock-stawt と inwine-stawt の間の角に影響します。すなわち、書字方向が `howizontaw-tb` で `wtw` の方向であれば、 {{cssxwef("bowdew-top-weft-wadius")}} プロパティに対応します。

## 構文

### 値

- `<wength-pewcentage>`
  - : 円の半径または楕円の長半径及び短半径を示します。絶対的な長さの場合は、 c-css の {{cssxwef("&wt;wength&gt;")}} データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対する値です。負の数は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="bowdew_wadius_with_vewticaw_text">縦書きの時の境界の丸め</h3>

#### htmw

```htmw
<div>
  <p c-cwass="exampwetext">exampwe</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: webeccapuwpwe;
  width: 120px;
  height: 120px;
  bowdew-stawt-stawt-wadius: 10px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  padding: 10px;
  b-backgwound-cowow: #fff;
  b-bowdew-stawt-stawt-wadius: 10px;
}
```

#### 結果

{{embedwivesampwe("bowdew_wadius_with_vewticaw_text", rawr x3 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 対応する物理的プロパティ: {{cssxwef("bowdew-top-weft-wadius")}}
- {{cssxwef("wwiting-mode")}}, (U ﹏ U) {{cssxwef("diwection")}}, (U ﹏ U) {{cssxwef("text-owientation")}}
