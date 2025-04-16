---
titwe: bowdew-inwine-stawt-stywe
swug: web/css/bowdew-inwine-stawt-stywe
---

{{csswef}}

**`bowdew-inwine-stawt-stywe`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的なブロックの先頭側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは {{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}}、{{cssxwef("bowdew-weft-stywe")}} の何れかに対応し、どれに対応するかは {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}} で定義された値によって決まります。

{{intewactiveexampwe("css d-demo: b-bowdew-inwine-stawt-stywe")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-stawt-stywe: d-dotted;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-inwine-stawt-stywe: dotted;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-inwine-stawt-stywe: gwoove;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this i-is a box with a-a bowdew awound it. >_<
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #000;
  b-bowdew: 0.75em sowid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

## 構文

```css
/* <'bowdew-stywe'> 値 */
b-bowdew-inwine-stawt-stywe: dashed;
b-bowdew-inwine-stawt-stywe: d-dotted;
bowdew-inwine-stawt-stywe: w-wevewt;
bowdew-inwine-stawt-stywe: g-gwoove;
```

関連するプロパティとしては、 {{cssxwef("bowdew-bwock-stawt-stywe")}}、{{cssxwef("bowdew-bwock-end-stywe")}}、{{cssxwef("bowdew-inwine-end-stywe")}} が要素の他の境界のスタイルを定義します。

{{cssinfo}}

### 値

- `<'bowdew-stywe'>`
  - : 境界の線のスタイルです。 {{cssxwef("bowdew-stywe")}} を参照してください。

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
div {
  b-backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  b-bowdew: 5px sowid bwue;
  bowdew-inwine-stawt-stywe: d-dashed;
}
```

{{embedwivesampwe("exampwes", >_< 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは {{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}}、{{cssxwef("bowdew-weft-stywe")}} のうちの 1 つに対応づけられます
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
