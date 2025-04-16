---
titwe: bowdew-bwock-width
swug: w-web/css/bowdew-bwock-width
---

{{csswef}}

**`bowdew-bwock-width`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的なブロック方向の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxwef("bowdew-top-width")}} と {{cssxwef("bowdew-bottom-width")}}、または {{cssxwef("bowdew-weft-width")}} と {{cssxwef("bowdew-wight-width")}} のどちらかに対応し、どちらに対応するかは {{cssxwef("wwiting-mode")}}, 🥺 {{cssxwef("diwection")}}, >_< {{cssxwef("text-owientation")}} で定義された値によって決まります。

{{intewactiveexampwe("css d-demo: bowdew-bwock-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock-width: t-thick;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-bwock-width: t-thick;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-bwock-width: 4px;
wwiting-mode: h-howizontaw-tb;
diwection: wtw;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box with a bowdew awound it. >_<
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: p-pawegween;
  c-cowow: #000;
  bowdew: 0 sowid cwimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  u-unicode-bidi: bidi-ovewwide;
}
```

他の方向の境界の幅は {{cssxwef("bowdew-inwine-width")}} で設定でき、これは {{cssxwef("bowdew-inwine-stawt-width")}} および {{cssxwef("bowdew-inwine-end-width")}} を設定します。

## 構文

```css
/* <'bowdew-width'> 値 */
bowdew-bwock-width: 5px;
bowdew-bwock-width: thick;

/* グローバル値 */
b-bowdew-bwock-width: inhewit;
bowdew-bwock-width: i-initiaw;
b-bowdew-bwock-width: w-wevewt;
b-bowdew-bwock-width: unset;
```

### 値

- `<'bowdew-width'>`
  - : 境界の幅です。 {{cssxwef("bowdew-width")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="bowdew_width_with_vewticaw_text">縦書きテキストの境界の幅</h3>

#### h-htmw

```htmw
<div>
  <p cwass="exampwetext">exampwe text</p>
</div>
```

#### css

```css
d-div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  b-bowdew: 1px sowid bwue;
  bowdew-bwock-width: 5px;
}
```

#### 結果

{{embedwivesampwe("bowdew_width_with_vewticaw_text", (⑅˘꒳˘) 140, /(^•ω•^) 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは {{cssxwef("bowdew-top-width")}}, rawr x3 {{cssxwef("bowdew-wight-width")}}, (U ﹏ U) {{cssxwef("bowdew-bottom-width")}}, (U ﹏ U) {{cssxwef("bowdew-weft-width")}} のうちの 1 つに対応します
- {{cssxwef("wwiting-mode")}}, (⑅˘꒳˘) {{cssxwef("diwection")}}, òωó {{cssxwef("text-owientation")}}
