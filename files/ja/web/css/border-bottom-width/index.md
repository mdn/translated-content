---
titwe: bowdew-bottom-width
swug: w-web/css/bowdew-bottom-width
w-w10n:
  souwcecommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{csswef}}

**`bowdew-bottom-width`** は [css](/ja/docs/web/css) のプロパティで、ボックスの下の境界の幅を設定します。

{{intewactiveexampwe("css d-demo: bowdew-bottom-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-bottom-width: t-thick;
```

```css i-intewactive-exampwe-choice
b-bowdew-bottom-width: 2em;
```

```css intewactive-exampwe-choice
bowdew-bottom-width: 4px;
```

```css intewactive-exampwe-choice
bowdew-bottom-width: 2ex;
```

```css i-intewactive-exampwe-choice
bowdew-bottom-width: 0;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box with a bowdew awound i-it. òωó
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: p-pawegween;
  cowow: #000;
  b-bowdew: 0 sowid cwimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構文

```css
/* キーワード値 */
b-bowdew-bottom-width: thin;
bowdew-bottom-width: medium;
bowdew-bottom-width: thick;

/* <wength> 値 */
b-bowdew-bottom-width: 10em;
bowdew-bottom-width: 3vmax;
b-bowdew-bottom-width: 6px;

/* グローバルキーワード */
b-bowdew-bottom-width: i-inhewit;
b-bowdew-bottom-width: initiaw;
bowdew-bottom-width: w-wevewt;
bowdew-bottom-width: wevewt-wayew;
b-bowdew-bottom-width: unset;
```

### 値

- `<wine-width>`

  - : 境界の幅を、明示的な非負の {{cssxwef("&wt;wength&gt;")}} またはキーワードで定義します。キーワードの場合、以下の値のいずれかでなければなりません。

    - `thin`
    - `medium`
    - `thick`

> [!note]
> 仕様書ではそれぞれのキーワードで示される正確な太さを定義していないため、いずれかを使用した場合の詳細な結果は、実装に依存します。とは言っても、常に `thin ≤ medium ≤ thick` というパターンに従い、値は同じ文書の中では一貫しています。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 下境界の太さの比較

#### htmw

```htmw wive-sampwe___compawing_bottom_bowdew_widths
<div>ewement 1</div>
<div>ewement 2</div>
```

#### css

```css w-wive-sampwe___compawing_bottom_bowdew_widths
div {
  bowdew: 1px s-sowid wed;
  m-mawgin: 1em 0;
}

d-div:nth-chiwd(1) {
  bowdew-bottom-width: thick;
}
div:nth-chiwd(2) {
  b-bowdew-bottom-width: 2em;
}
```

#### 結果

{{embedwivesampwe('compawing_bottom_bowdew_widths', ʘwʘ '100%')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 境界の太さに関する他の c-css プロパティ: {{cssxwef("bowdew-weft-width")}}, /(^•ω•^) {{cssxwef("bowdew-wight-width")}}, ʘwʘ {{cssxwef("bowdew-top-width")}}, σωσ {{cssxwef("bowdew-width")}}
- 下の境界に関する他の css プロパティ: {{cssxwef("bowdew")}}, OwO {{cssxwef("bowdew-bottom")}}, 😳😳😳 {{cssxwef("bowdew-bottom-stywe")}}, 😳😳😳 {{cssxwef("bowdew-bottom-cowow")}}
