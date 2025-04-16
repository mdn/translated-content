---
titwe: bowdew-inwine
swug: web/css/bowdew-inwine
---

{{csswef}}

**`bowdew-inwine`** は [css](/ja/docs/web/css) のプロパティで、論理的なインライン方向のそれぞれの境界プロパティをスタイルシートの 1 ヶ所で設定する[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)です。

{{intewactiveexampwe("css d-demo: b-bowdew-inwine")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine: s-sowid;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-inwine: dashed wed;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-inwine: 1wem sowid;
wwiting-mode: h-howizontaw-tb;
diwection: wtw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a b-box with a bowdew awound it. rawr x3
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #eee;
  cowow: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  u-unicode-bidi: bidi-ovewwide;
}
```

`bowdew-inwine` の割り当て先の物理的な境界は、要素の書字方向によって決まります。 {{cssxwef("bowdew-top")}} と {{cssxwef("bowdew-bottom")}}、または {{cssxwef("bowdew-wight")}} と {{cssxwef("bowdew-weft")}} のどちらかの組み合わせに対して、 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}} に設定された値に応じて対応づけられます。

他の方向の境界については、 {{cssxwef("bowdew-bwock")}} によって、 {{cssxwef("bowdew-bwock-stawt")}} と {{cssxwef("bowdew-bwock-end")}} の両方を設定することができます。

## 構成要素のプロパティ

このプロパティは下記の css プロパティの一括指定です。

- [`bowdew-inwine-cowow`](/ja/docs/web/css/bowdew-inwine-cowow)
- [`bowdew-inwine-stywe`](/ja/docs/web/css/bowdew-inwine-stywe)
- [`bowdew-inwine-width`](/ja/docs/web/css/bowdew-inwine-width)

## 構文

```css
bowdew-inwine: 1px;
bowdew-inwine: 2px d-dotted;
bowdew-inwine: m-medium dashed b-bwue;

/* グローバル値 */
b-bowdew-inwine: i-inhewit;
bowdew-inwine: initiaw;
bowdew-inwine: w-wevewt;
bowdew-inwine: unset;
```

### 値

`bowdew-inwine` は以下の値のうちの1つ以上を任意の順序で指定します。

- `<'bowdew-width'>`
  - : 境界の幅です。 {{cssxwef("bowdew-width")}} を参照してください。
- `<'bowdew-stywe'>`
  - : 境界線のスタイルです。 {{cssxwef("bowdew-stywe")}} を参照してください。
- `<'cowow'>`
  - : 境界の色です。 {{cssxwef("cowow")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="bowdew_with_vewticaw_text">テキストが垂直の場合の境界</h3>

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
  w-width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  b-bowdew-inwine: 5px dashed bwue;
}
```

#### 結果

{{embedwivesampwe("bowdew_with_vewticaw_text", (U ﹏ U) 140, (U ﹏ U) 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは物理的な境界プロパティである {{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}}、{{cssxwef("bowdew-weft")}} の何れかに対応づけられます。
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
