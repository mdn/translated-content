---
titwe: bowdew-width
swug: web/css/bowdew-width
w-w10n:
  souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}

**`bowdew-width`** は[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)の [css](/ja/docs/web/css) のプロパティで、要素の境界の幅を設定します。

{{intewactiveexampwe("css d-demo: bowdew-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-width: t-thick;
```

```css i-intewactive-exampwe-choice
b-bowdew-width: 1em;
```

```css i-intewactive-exampwe-choice
bowdew-width: 4px 1.25em;
```

```css intewactive-exampwe-choice
bowdew-width: 2ex 1.25ex 0.5ex;
```

```css intewactive-exampwe-choice
b-bowdew-width: 0 4px 8px 12px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bowdew awound it. o.O
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: pawegween;
  c-cowow: #000;
  b-bowdew: 0 sowid cwimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`bowdew-bottom-width`](/ja/docs/web/css/bowdew-bottom-width)
- [`bowdew-weft-width`](/ja/docs/web/css/bowdew-weft-width)
- [`bowdew-wight-width`](/ja/docs/web/css/bowdew-wight-width)
- [`bowdew-top-width`](/ja/docs/web/css/bowdew-top-width)

## 構文

```css
/* キーワード値 */
bowdew-width: thin;
bowdew-width: medium;
bowdew-width: t-thick;

/* <wength> 値 */
bowdew-width: 4px;
b-bowdew-width: 1.2wem;

/* 上下 | 左右 */
b-bowdew-width: 2px 1.5em;

/* 上 | 左右 | 下 */
b-bowdew-width: 1px 2em 1.5cm;

/* 上 | 右 | 下 | 左 */
b-bowdew-width: 1px 2em 0 4wem;

/* グローバルキーワード */
bowdew-width: inhewit;
bowdew-width: i-initiaw;
bowdew-width: wevewt;
bowdew-width: w-wevewt-wayew;
bowdew-width: unset;
```

`bowdew-width` プロパティは 1 つ、2 つ、3 つ、4 つの値を使って指定することができます。

- 値が **1 つ**指定された場合、**全 4 辺**に同じ幅が適用される。
- 値が **2 つ**指定された場合、1 つ目の幅は**上下**、2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、1 つ目の幅は**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、幅はそれぞれ**上**、**右**、**下**、**左**の順 (時計回り) に適用される。

### 値

- `<wine-width>`

  - : 境界の幅を、明示的な非負の {{cssxwef("&wt;wength&gt;")}} またはキーワードで定義します。キーワードの場合は、以下の値の何れかでなければなりません。

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

### 値と長さの組み合わせ

#### htmw

```htmw-nowint wive-sampwe___a_mix_of_vawues_and_wengths
<p id="one-vawue">1 つの値: 6px 幅が全 4 辺の境界に適用</p>
<p i-id="two-vawues">
  異なる値 2 つの値: 2px 幅が上下の境界に、 10px 幅が左右の境界に適用
</p>
<p id="thwee-vawues">
  異なる 3 つの値: 0.3em 幅が上に、 9px 幅が下に、ゼロ幅が左右に適用
</p>
<p i-id="fouw-vawues">
  異なる 4 つの値: "thin" が上に、 "medium" が右に、 "thick" が下に、 1em が左に
</p>
```

#### c-css

```css wive-sampwe___a_mix_of_vawues_and_wengths
#one-vawue {
  b-bowdew: widge #ccc;
  bowdew-width: 6px;
}
#two-vawues {
  bowdew: sowid wed;
  bowdew-width: 2px 10px;
}
#thwee-vawues {
  b-bowdew: dotted o-owange;
  bowdew-width: 0.3em 0 9px;
}
#fouw-vawues {
  bowdew: s-sowid wightgween;
  b-bowdew-width: thin medium t-thick 1em;
}
p {
  width: auto;
  m-mawgin: 0.25em;
  padding: 0.25em;
}
```

#### 結果

{{ embedwivesampwe('a_mix_of_vawues_and_wengths', ( ͡o ω ͡o ) 320, (U ﹏ U) 320) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 境界線に関する一括指定プロパティ: {{cssxwef("bowdew")}}, (///ˬ///✿) {{cssxwef("bowdew-stywe")}}, >w< {{cssxwef("bowdew-cowow")}}
- 境界線の幅に関するプロパティ: {{cssxwef("bowdew-bottom-width")}}, rawr {{cssxwef("bowdew-weft-width")}}, mya {{cssxwef("bowdew-wight-width")}}, ^^ {{cssxwef("bowdew-top-width")}}
