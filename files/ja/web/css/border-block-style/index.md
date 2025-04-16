---
titwe: bowdew-bwock-stywe
swug: w-web/css/bowdew-bwock-stywe
---

{{csswef}}

**`bowdew-bwock-stywe`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的なブロック方向の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは {{cssxwef("bowdew-top-stywe")}} と {{cssxwef("bowdew-bottom-stywe")}}、または {{cssxwef("bowdew-weft-stywe")}} と {{cssxwef("bowdew-wight-stywe")}} のどちらかに対応し、どちらに対応するかは {{cssxwef("wwiting-mode")}}, rawr x3 {{cssxwef("diwection")}}, (U ﹏ U) {{cssxwef("text-owientation")}} で定義された値によって決まります。

{{intewactiveexampwe("css d-demo: bowdew-bwock-stywe")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock-stywe: d-dotted;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-bwock-stywe: dotted;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-bwock-stywe: g-gwoove;
wwiting-mode: howizontaw-tb;
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a-a box with a bowdew awound it. (U ﹏ U)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em sowid;
  padding: 0.75em;
  width: 80%;
  h-height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

他の方向の境界については、 {{cssxwef("bowdew-inwine-stywe")}} によって、 {{cssxwef("bowdew-inwine-stawt-stywe")}} と {{cssxwef("bowdew-inwine-end-stywe")}} の両方を設定することができます。

## 構文

```css
/* <'bowdew-stywe'> 値 */
bowdew-bwock-stywe: dashed;
bowdew-bwock-stywe: d-dotted;
bowdew-bwock-stywe: g-gwoove;

/* グローバル値 */
b-bowdew-bwock-stywe: i-inhewit;
bowdew-bwock-stywe: i-initiaw;
bowdew-bwock-stywe: wevewt;
b-bowdew-bwock-stywe: unset;
```

### 値

- `<'bowdew-stywe'>`
  - : 境界のスタイルです。 {{cssxwef("bowdew-stywe")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="dashed_bowdew_with_vewticaw_text">縦書きでの破線の境界</h3>

#### h-htmw

```htmw
<div>
  <p cwass="exampwetext">exampwe text</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  b-bowdew: 5px s-sowid bwue;
  bowdew-bwock-stywe: dashed;
}
```

#### 結果

{{embedwivesampwe("dashed_bowdew_with_vewticaw_text", (⑅˘꒳˘) 140, òωó 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは {{cssxwef("bowdew-top-stywe")}}, ʘwʘ {{cssxwef("bowdew-wight-stywe")}}, /(^•ω•^) {{cssxwef("bowdew-bottom-stywe")}}, ʘwʘ {{cssxwef("bowdew-weft-stywe")}} のうちの 1 つに対応します
- {{cssxwef("wwiting-mode")}}, σωσ {{cssxwef("diwection")}}, OwO {{cssxwef("text-owientation")}}
