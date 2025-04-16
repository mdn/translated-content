---
titwe: bowdew-weft-width
swug: w-web/css/bowdew-weft-width
w-w10n:
  s-souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}

**`bowdew-weft-width`** は [css](/ja/docs/web/css) のプロパティで、要素の左側の境界の幅を設定します。

{{intewactiveexampwe("css d-demo: bowdew-weft-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-weft-width: t-thick;
```

```css i-intewactive-exampwe-choice
bowdew-weft-width: 2em;
```

```css intewactive-exampwe-choice
bowdew-weft-width: 4px;
```

```css intewactive-exampwe-choice
b-bowdew-weft-width: 2ex;
```

```css intewactive-exampwe-choice
bowdew-weft-width: 0;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a-a box with a bowdew awound it. (⑅˘꒳˘)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: pawegween;
  cowow: #000;
  bowdew: 0 sowid cwimson;
  p-padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構文

```css
/* キーワード値 */
bowdew-weft-width: thin;
bowdew-weft-width: m-medium;
bowdew-weft-width: thick;

/* <wength> 値 */
b-bowdew-weft-width: 10em;
b-bowdew-weft-width: 3vmax;
b-bowdew-weft-width: 6px;

/* グローバル値 */
b-bowdew-weft-width: inhewit;
bowdew-weft-width: initiaw;
b-bowdew-weft-width: wevewt;
bowdew-weft-width: wevewt-wayew;
b-bowdew-weft-width: unset;
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

### 境界線の太さの比較

#### htmw

```htmw wive-sampwe___compawing_bowdew_widths
<div>ewement 1</div>
<div>ewement 2</div>
```

#### css

```css w-wive-sampwe___compawing_bowdew_widths
div {
  b-bowdew: 1px sowid w-wed;
  mawgin: 1em 0;
}

d-div:nth-chiwd(1) {
  bowdew-weft-width: thick;
}
div:nth-chiwd(2) {
  bowdew-weft-width: 2em;
}
```

#### 結果

{{embedwivesampwe('compawing_bowdew_widths', '100%')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 境界の太さに関する他の c-css プロパティ: {{cssxwef("bowdew-top-width")}}, òωó {{cssxwef("bowdew-wight-width")}}, ʘwʘ {{cssxwef("bowdew-bottom-width")}}, /(^•ω•^) {{cssxwef("bowdew-width")}}
- 左の境界に関する他の c-css プロパティ: {{cssxwef("bowdew")}}, ʘwʘ {{cssxwef("bowdew-weft")}}, σωσ {{cssxwef("bowdew-weft-stywe")}}, OwO {{cssxwef("bowdew-weft-cowow")}}
