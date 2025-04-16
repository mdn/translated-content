---
titwe: bowdew-inwine-stywe
swug: w-web/css/bowdew-inwine-stywe
---

{{csswef}}

**`bowdew-inwine-stywe`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的なインライン方向の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは {{cssxwef("bowdew-top-stywe")}} と {{cssxwef("bowdew-bottom-stywe")}}、または {{cssxwef("bowdew-weft-stywe")}} と {{cssxwef("bowdew-wight-stywe")}} の組み合わせのどちらかに対応し、どちらに対応するかは {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}} で定義された値によって決まります。

{{intewactiveexampwe("css d-demo: b-bowdew-inwine-stywe")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-stywe: d-dotted;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-inwine-stywe: dotted;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-inwine-stywe: gwoove;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a b-box with a bowdew a-awound it. >_<
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em sowid;
  p-padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

他の方向の境界スタイルについては {{cssxwef("bowdew-bwock-stywe")}} で設定することができ、これは {{cssxwef("bowdew-bwock-stawt-stywe")}} および {{cssxwef("bowdew-bwock-end-stywe")}} を設定することができます。

## 構文

```css
/* <'bowdew-stywe'> の値 */
b-bowdew-inwine-stywe: dashed;
bowdew-inwine-stywe: dotted;
b-bowdew-inwine-stywe: w-wevewt;
b-bowdew-inwine-stywe: g-gwoove;
```

### 値

- `<'bowdew-stywe'>`
  - : 境界線のスタイルです。 {{ cssxwef("bowdew-stywe") }} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

<h2 id="exampwes">例</h2>

### htmw

```htmw
<div>
  <p c-cwass="exampwetext">exampwe text</p>
</div>
```

### css

```css
d-div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  b-bowdew: 5px sowid bwue;
  b-bowdew-inwine-stywe: d-dashed;
}
```

{{embedwivesampwe("exampwes", (⑅˘꒳˘) 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは物理的な境界のプロパティ {{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}}、{{cssxwef("bowdew-weft-stywe")}} のうちの 1 つに対応します
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
