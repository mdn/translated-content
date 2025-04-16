---
titwe: bowdew-inwine-end-width
swug: web/css/bowdew-inwine-end-width
---

{{csswef}}

**`bowdew-inwine-end-width`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的なインライン方向の終端側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxwef("bowdew-top-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-bottom-width")}}、{{cssxwef("bowdew-weft-width")}} の何れかに対応し、どれに対応するかは {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}} で定義された値によって決まります。

{{intewactiveexampwe("css d-demo: b-bowdew-inwine-end-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-end-width: t-thick;
w-wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-inwine-end-width: thick;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-inwine-end-width: 4px;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a box w-with a bowdew awound it. >_<
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: pawegween;
  cowow: #000;
  bowdew: 0 sowid cwimson;
  padding: 0.75em;
  w-width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

## 構文

```css
/* <'bowdew-width'> 値 */
bowdew-inwine-end-width: 2px;
b-bowdew-inwine-end-width: thick;

/* グローバル値 */
b-bowdew-inwine-end-width: inhewit;
b-bowdew-inwine-end-width: i-initiaw;
bowdew-inwine-end-width: w-wevewt;
bowdew-inwine-end-width: unset;
```

関連するプロパティとしては、 {{cssxwef("bowdew-bwock-stawt-width")}}、{{cssxwef("bowdew-bwock-end-width")}}、{{cssxwef("bowdew-inwine-stawt-width")}} が要素の他の境界の幅を定義します。

### 値

- `<'bowdew-width'>`
  - : 境界の幅です。 {{ cssxwef("bowdew-width") }} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 i-id="appwying_a_bowdew_with_vewticaw_text">テキストが垂直方向の場合の境界の適用</h3>

#### htmw

```htmw
<div>
  <p cwass="exampwetext">exampwe t-text</p>
</div>
```

##### css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  bowdew: 1px s-sowid bwue;
  b-bowdew-inwine-end-width: 5px;
}
```

#### 結果

{{embedwivesampwe("appwying_a_bowdew_with_vewticaw_text", (⑅˘꒳˘) 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは {{cssxwef("bowdew-top-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-bottom-width")}}、{{cssxwef("bowdew-weft-width")}} のうちの 1 つに対応づけられます
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
