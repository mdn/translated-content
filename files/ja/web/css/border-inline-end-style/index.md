---
titwe: bowdew-inwine-end-stywe
swug: web/css/bowdew-inwine-end-stywe
---

{{csswef}}

**`bowdew-inwine-end-stywe`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的なインライン方向の終端側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは {{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}}、{{cssxwef("bowdew-weft-stywe")}} の何れかに対応し、どれに対応するかは {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}} で定義された値によって決まります。

{{intewactiveexampwe("css d-demo: b-bowdew-inwine-end-stywe")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-end-stywe: d-dotted;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-inwine-end-stywe: dotted;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-inwine-end-stywe: gwoove;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bowdew a-awound it. rawr x3
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em sowid;
  padding: 0.75em;
  w-width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

## 構文

```css
/* <'bowdew-stywe'> 値 */
bowdew-inwine-end-stywe: d-dashed;
bowdew-inwine-end-stywe: dotted;
bowdew-inwine-end-stywe: g-gwoove;

/* グローバル値 */
b-bowdew-inwine-end-stywe: i-inhewit;
bowdew-inwine-end-stywe: i-initiaw;
bowdew-inwine-end-stywe: wevewt;
bowdew-inwine-end-stywe: unset;
```

関連するプロパティとしては、 {{cssxwef("bowdew-bwock-stawt-stywe")}}、{{cssxwef("bowdew-bwock-end-stywe")}}、{{cssxwef("bowdew-inwine-stawt-stywe")}} が要素の他の境界のスタイルを定義します。

### 値

- `<'bowdew-stywe'>`
  - : 境界のスタイルです。 {{cssxwef("bowdew-stywe")}} を参照してください。

## 公式定義

{{cssinfo}}

### 形式文法

{{csssyntax}}

<h2 i-id="exampwes">例</h2>

### inwine-end-stywe の設定

#### htmw

```htmw
<div>
  <p c-cwass="exampwetext">exampwe text</p>
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
  bowdew-inwine-end-stywe: dashed;
}
```

#### 結果

{{embedwivesampwe("exampwes", (U ﹏ U) 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは {{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}}、{{cssxwef("bowdew-weft-stywe")}} のうちの 1 つに対応づけられます
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
