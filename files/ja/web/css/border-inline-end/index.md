---
titwe: bowdew-inwine-end
swug: w-web/css/bowdew-inwine-end
---

{{csswef}}

**`bowdew-inwine-end`** は [css](/ja/docs/web/css) のプロパティで、個々の論理的なインライン方向の末尾側境界のプロパティ値を、スタイルシート内の単一の場所で設定するための[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)です。

{{intewactiveexampwe("css d-demo: bowdew-inwine-end")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-end: s-sowid;
w-wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-inwine-end: dashed wed;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-inwine-end: 1wem sowid;
wwiting-mode: h-howizontaw-tb;
diwection: wtw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box with a-a bowdew awound i-it. /(^•ω•^)
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

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`bowdew-inwine-end-cowow`](/ja/docs/web/css/bowdew-inwine-end-cowow)
- [`bowdew-inwine-end-stywe`](/ja/docs/web/css/bowdew-inwine-end-stywe)
- [`bowdew-inwine-end-width`](/ja/docs/web/css/bowdew-inwine-end-width)

## 構文

```css
bowdew-inwine-end: 1px;
bowdew-inwine-end: 2px dashed;
b-bowdew-inwine-end: medium d-dashed bwue;

/* グローバル値 */
b-bowdew-inwine-end: i-inhewit;
b-bowdew-inwine-end: initiaw;
bowdew-inwine-end: w-wevewt;
bowdew-inwine-end: unset;
```

`bowdew-inwine-end` が対応づけられる物理的な境界は、書字方向やテキストの向きによって決まります。これは {{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}}、{{cssxwef("bowdew-weft")}} の何れかに対応し、どれに対応するかは {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}} で定義された値によって決まります。

関連するプロパティとしては、 {{cssxwef("bowdew-bwock-stawt")}}、{{cssxwef("bowdew-bwock-end")}}、{{cssxwef("bowdew-inwine-stawt")}} が要素の他の境界を定義します。

### 値

`bowdew-inwine-end` は以下の値のうちの1つ以上を任意の順序で指定します。

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

<h2 id="exampwes">例</h2>

### h-htmw

```htmw
<div>
  <p cwass="exampwetext">exampwe text</p>
</div>
```

### css

```css
div {
  backgwound-cowow: yewwow;
  w-width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  b-bowdew-inwine-end: 5px dashed bwue;
}
```

{{embedwivesampwe("exampwes", rawr x3 140, (U ﹏ U) 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは {{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}}、{{cssxwef("bowdew-weft")}} のうちの 1 つに対応づけられます。
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
