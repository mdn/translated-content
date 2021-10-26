---
title: shape-outside
slug: Web/CSS/shape-outside
tags:
  - 境界
  - CSS
  - CSS プロパティ
  - CSS シェイプ
  - 浮動領域
  - プロパティ
  - Reference
  - シェイプ
  - マージン
  - recipe:css-property
  - shape-outside
  - wrapping
browser-compat: css.properties.shape-outside
translation_of: Web/CSS/shape-outside
---
{{CSSRef}}

**`shape-outside`** は [CSS](/ja/docs/Web/CSS) のプロパティで、隣接するインラインコンテンツが回り込むシェイプ (形状) を — 矩形でない場合もありますが — 定義します。既定では、インラインコンテンツはマージンボックスを回り込みます。`shape-outside` によって、この回り込みをカスタマイズし、テキストが単純なボックスではなく複雑なオブジェクトの周りを回り込めるようにします。

{{EmbedInteractiveExample("pages/css/shape-outside.html")}}

## 構文

```css
/* キーワード値 */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* 関数値 */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);
shape-outside: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

/* <url> 値 */
shape-outside: url(image.png);

/* <gradient> 値 */
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);

/* グローバル値 */
shape-outside: initial;
shape-outside: inherit;
shape-outside: revert;
shape-outside: unset;
```

`shape-outside` プロパティは、*浮動領域*と*浮動要素*を表す以下に挙げた値を使用して指定します。浮動領域はインラインコンテンツ (浮動要素) が囲む形状を指定します。

### 値

- `none`
  - : 浮動領域は影響を受けません。インラインコンテンツは通常通り、要素のマージンボックスを回り込みます。
- `<shape-box>`

  - : 浮動領域は浮動要素の辺の形状に従って ([CSS ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) で定義された通りに) 計算されます。これは`margin-box`、`border-box`、`padding-box`、`content-box` の何れかになります。この形状は {{cssxref("border-radius")}} プロパティで生成された丸い角も含みます ({{cssxref("background-clip")}} と同様の動作です)。

    - `margin-box`
      - : マージンの外側の縁で囲まれた形状を定義します。この形状の角の半径は、対応する {{cssxref("border-radius")}} および {{cssxref("margin")}} の値で決定されます。 `border-radius / margin` の比率が `1` 以上の場合、マージンの角の半径は `border-radius + margin` です。この比率が `1` 未満の場合、マージンの角の半径は `border-radius + (margin * (1 + (ratio-1)^3))` となります。
    - `border-box`
      - : 境界の外側の縁で囲まれた形状を定義します。この形状は、境界の外側の形状における通常のルールに従います。
    - `padding-box`
      - : パディングの外側の縁で囲まれた形状を定義します。この形状は、境界の内側の形状における通常のルールに従います。
    - `content-box`
      - : コンテンツの外側の縁で囲まれた形状を定義します。このボックスのそれぞれの角の半径は、 `0` と `border-radius - border-width - padding` の大きい方になります。

- {{cssxref("&lt;basic-shape&gt;")}}
  - : 浮動領域は、{{cssxref("basic-shape/inset()","inset()")}}、{{cssxref("basic-shape/circle()","circle()")}}、{{cssxref("basic-shape/ellipse()","ellipse()")}}、{{cssxref("basic-shape/polygon()","polygon()")}}、またはレベル 2 の仕様書で追加された `path()` の何れかによって生成された形状に基づいて計算されます。`<shape-box>` も提供された場合は、`<basic-shape>` 関数の参照ボックスを定義します。それ以外の場合、参照ボックスは既定で `margin-box` になります。
- {{cssxref("&lt;image&gt;")}}
  - : 浮動領域は指定された {{cssxref("&lt;image&gt;")}} のアルファチャンネルに基づいて、 {{cssxref("shape-image-threshold")}} で定義されたように抽出され計算されます。

> **Note:** {{glossary("User agent", "ユーザーエージェント")}}は、`shape-outside` の値に含まれるすべての URL に対して、HTML5 の仕様で定義されている CORS に対応している可能性のあるフェッチメソッドを使用する必要があります。読み取りの際、ユーザーエージェントは "Anonymous" モードを使用し、参照元をスタイルシートの URL に設定し、文書の URL を含むオリジンを設定しなければなりません。この結果、有効な代替画像がないなどのネットワークエラーが発生した場合は、**`none`** の値を指定したのと同様になります。

## 補間

1 つ目と 2 つ目の `<basic-shape>` の間でアニメーションを行う場合、次のルールが適用されます。シェイプ関数の中の値は、単純なリストとして補間されます。このリストの値の補間は、可能な限り {{cssxref("&lt;length&gt;")}}、{{cssxref("&lt;percentage&gt;")}}、{{cssxref("calc()")}} のいずれかとして補間されます。リストの値がこれらの型ではなく、同一であった場合 (両方のリストの同じ位置に `nonzero` があった場合など)、それらの値は補間されます。

- 両方の形状は、同じ参照ボックスを使用する必要があります。
- 両方の形状が同じ型であった場合、その型が `ellipse()` または `circle()` であり、かつどの半径にも `closest-side` や `farthest-side` のキーワードを使用していない場合は、シェイプ関数内のそれぞれの値の間で補間されます。
- 両方の形状が `inset()` 型であった場合、シェイプ関数内のそれぞれの値の間で補間されます。
- 両方の形状が `polygon()` 型であった場合、両方の多角形の頂点の数が同じで、同じ `<fill-rule>` を使用していた場合は、シェイプ関数内のそれぞれの値の間で補完されます。
- それ以外の場合は、補間は行われません。

## 公式定義

{{CSSInfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Funneling_text">漏斗状のテキスト</h3>

#### HTML

```html
<div class="main">
  <div class="left"></div>
  <div class="right"></div>
  <p>
    Sometimes a web page's text content appears to be
    funneling your attention towards a spot on the page
    to drive you to follow a particular link. Sometimes
    you don't notice.
  </p>
</div>
```

#### CSS

```css
.main {
  width: 530px;
}

.left,
.right {
  width: 40%;
  height: 12ex;
  background-color: lightgray;
}

.left {
  -webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  -webkit-shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
}

p {
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample("Funneling_text", "100%", 130)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS シェイプ](/ja/docs/Web/CSS/CSS_Shapes)
- [CSS シェイプの概要](/ja/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- [ボックス値からのシェイプ](/ja/docs/Web/CSS/CSS_Shapes/From_box_values)
- [基本シェイプ](/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
- [画像からのシェイプ](/ja/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}
