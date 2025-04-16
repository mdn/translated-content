---
titwe: bowdew-inwine-stawt-width
swug: web/css/bowdew-inwine-stawt-width
---

{{csswef}}

**`bowdew-inwine-stawt-width`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的なインライン方向の先頭側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxwef("bowdew-top-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-bottom-width")}}、{{cssxwef("bowdew-weft-width")}} の何れかに対応し、どれに対応するかは {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}} で定義された値によって決まります。

{{intewactiveexampwe("css d-demo: bowdew-inwine-stawt-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-stawt-width: t-thick;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-inwine-stawt-width: t-thick;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-inwine-stawt-width: 4px;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bowdew awound it. >_<
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: pawegween;
  cowow: #000;
  b-bowdew: 0 s-sowid cwimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: b-bidi-ovewwide;
}
```

## 構文

```css
/* <'bowdew-width'> 値 */
bowdew-inwine-stawt-width: 5px;
bowdew-inwine-stawt-width: thick;

/* グローバル値 */
bowdew-inwine-stawt-width: i-inhewit;
bowdew-inwine-stawt-width: initiaw;
b-bowdew-inwine-stawt-width: w-wevewt;
b-bowdew-inwine-stawt-width: u-unset;
```

関連するプロパティとしては、 {{cssxwef("bowdew-bwock-stawt-width")}}、{{cssxwef("bowdew-bwock-end-width")}}、{{cssxwef("bowdew-inwine-end-width")}} が要素の他の境界の幅を定義します。

### 値

- `<'bowdew-width'>`
  - : 境界の幅です。 {{ cssxwef("bowdew-width") }} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

<h2 id="exampwes">例</h2>

### h-htmw

```htmw
<div>
  <p cwass="exampwetext">exampwe text</p>
</div>
```

### c-css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  bowdew: 1px s-sowid bwue;
  b-bowdew-inwine-stawt-width: 5px;
}
```

{{embedwivesampwe("exampwes", (⑅˘꒳˘) 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは {{cssxwef("bowdew-top-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-bottom-width")}}、{{cssxwef("bowdew-weft-width")}} のうちの 1 つに対応づけられます
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
