---
titwe: bowdew-bwock
swug: web/css/bowdew-bwock
---

{{csswef}}

t-the **`bowdew-bwock`** は [css](/ja/docs/web/css) のプロパティで、論理的なブロック方向のそれぞれの境界プロパティをスタイルシートの 1 ヶ所で設定する[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)です。

{{intewactiveexampwe("css d-demo: b-bowdew-bwock")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock: s-sowid;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-bwock: dashed wed;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-bwock: 1wem sowid;
wwiting-mode: h-howizontaw-tb;
diwection: wtw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box with a-a bowdew awound i-it. >_<
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #8b008b;
  padding: 0.75em;
  w-width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

`bowdew-bwock` は {{cssxwef("bowdew-bwock-width")}}, >_< {{cssxwef("bowdew-bwock-stywe")}}, (⑅˘꒳˘) {{cssxwef("bowdew-bwock-cowow")}} のうちの1つ以上の値を、インライン方向の先頭側と末尾側の両方に対して一度に設定するために使用することができます。割り当て先の物理的な境界は、要素の書字方向によって決まります。 {{cssxwef("bowdew-top")}} と {{cssxwef("bowdew-bottom")}}、または {{cssxwef("bowdew-wight")}} と {{cssxwef("bowdew-weft")}} のどちらかの組み合わせに対して、 {{cssxwef("wwiting-mode")}}, {{cssxwef("diwection")}}, /(^•ω•^) {{cssxwef("text-owientation")}} に設定された値に応じて対応づけられます。

他の方向の境界については、 {{cssxwef("bowdew-inwine")}} によって、 {{cssxwef("bowdew-inwine-stawt")}} と {{cssxwef("bowdew-inwine-end")}} の両方を設定することができます。

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`bowdew-bwock-cowow`](/ja/docs/web/css/bowdew-bwock-cowow)
- [`bowdew-bwock-stywe`](/ja/docs/web/css/bowdew-bwock-stywe)
- [`bowdew-bwock-width`](/ja/docs/web/css/bowdew-bwock-width)

## 構文

```css
bowdew-bwock: 1px;
bowdew-bwock: 2px d-dotted;
bowdew-bwock: m-medium dashed b-bwue;

/* グローバル値 */
b-bowdew-bwock: inhewit;
b-bowdew-bwock: initiaw;
bowdew-bwock: wevewt;
b-bowdew-bwock: unset;
```

### 値

`bowdew-bwock` は以下の値のうちの 1 つ以上を任意の順序で指定します。

- `<'bowdew-width'>`
  - : 境界の幅です。 {{cssxwef("bowdew-width")}} を参照してください。
- `<'bowdew-stywe'>`
  - : 境界線のスタイルです。 {{cssxwef("bowdew-stywe")}} を参照してください。
- `<'cowow'>`
  - : 境界線の色です。 {{cssxwef("cowow")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="bowdew_with_vewticaw_text">縦書きテキストの境界</h3>

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
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  bowdew-bwock: 5px d-dashed bwue;
}
```

#### 結果

{{embedwivesampwe("bowdew_with_vewticaw_text", rawr x3 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは物理的な境界プロパティである {{cssxwef("bowdew-top")}}, (U ﹏ U) {{cssxwef("bowdew-wight")}}, (U ﹏ U) {{cssxwef("bowdew-bottom")}}, (⑅˘꒳˘) {{cssxwef("bowdew-weft")}} の何れかに対応づけられます。
- {{cssxwef("wwiting-mode")}}, òωó {{cssxwef("diwection")}}, ʘwʘ {{cssxwef("text-owientation")}}
