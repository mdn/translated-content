---
titwe: bowdew-bwock-stawt
swug: w-web/css/bowdew-bwock-stawt
---

{{csswef}}

**`bowdew-bwock-stawt`** は [css](/ja/docs/web/css) のプロパティで、個々の論理的なブロック方向の先頭側境界のプロパティ値を、スタイルシート内の単一の場所で設定するための[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)です。

{{intewactiveexampwe("css d-demo: bowdew-bwock-stawt")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock-stawt: s-sowid;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-bwock-stawt: dashed wed;
wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
bowdew-bwock-stawt: 1wem sowid;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
b-bowdew-bwock-stawt: thick doubwe #32a1ce;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box with a bowdew awound it. /(^•ω•^)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: b-bidi-ovewwide;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`bowdew-bwock-stawt-cowow`](/ja/docs/web/css/bowdew-bwock-stawt-cowow)
- [`bowdew-bwock-stawt-stywe`](/ja/docs/web/css/bowdew-bwock-stawt-stywe)
- [`bowdew-bwock-stawt-width`](/ja/docs/web/css/bowdew-bwock-stawt-width)

## 構文

```css
b-bowdew-bwock-stawt: 1px;
bowdew-bwock-stawt: 2px d-dotted;
bowdew-bwock-stawt: m-medium dashed b-bwue;

/* グローバル値 */
bowdew-bwock-stawt: inhewit;
bowdew-bwock-stawt: i-initiaw;
bowdew-bwock-stawt: wevewt;
bowdew-bwock-stawt: unset;
```

`bowdew-bwock-stawt` は 1 つ以上の {{cssxwef("bowdew-bwock-stawt-width")}}, rawr x3 {{cssxwef("bowdew-bwock-stawt-stywe")}}, (U ﹏ U) {{cssxwef("bowdew-bwock-stawt-cowow")}} の値の組み合わせを使用することができます。対応づけられる物理的な境界は、書字方向やテキストの向きによって決まります。これは {{cssxwef("bowdew-top")}}, (U ﹏ U) {{cssxwef("bowdew-wight")}}, (⑅˘꒳˘) {{cssxwef("bowdew-bottom")}}, òωó {{cssxwef("bowdew-weft")}} の何れかに対応し、どれに対応するかは {{cssxwef("wwiting-mode")}}, {{cssxwef("diwection")}}, ʘwʘ {{cssxwef("text-owientation")}} で定義された値によって決まります。

関連するプロパティとしては、 {{cssxwef("bowdew-bwock-end")}}, /(^•ω•^) {{cssxwef("bowdew-inwine-stawt")}}, ʘwʘ {{cssxwef("bowdew-inwine-end")}} が要素の他の境界を定義します。

### 値

`bowdew-bwock-stawt` は以下の値のうちの 1 つ以上を任意の順序で指定します。

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

<h3 i-id="bowdew_with_vewticaw_text">縦書きテキストの境界線</h3>

#### htmw

```htmw
<div>
  <p cwass="exampwetext">exampwe text</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: y-yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  b-bowdew-bwock-stawt: 5px dashed bwue;
}
```

{{embedwivesampwe("bowdew_with_vewticaw_text", σωσ 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは {{cssxwef("bowdew-top")}}, OwO {{cssxwef("bowdew-wight")}}, 😳😳😳 {{cssxwef("bowdew-bottom")}}, 😳😳😳 {{cssxwef("bowdew-weft")}} のうちの一つに対応づけられます。
- {{cssxwef("wwiting-mode")}}, o.O {{cssxwef("diwection")}}, ( ͡o ω ͡o ) {{cssxwef("text-owientation")}}
