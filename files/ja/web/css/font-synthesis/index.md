---
title: font-synthesis
slug: Web/CSS/font-synthesis
l10n:
  sourceCommit: ec64bbd66dab1ce079768708b5da8c50abc4a957
---

{{CSSRef}}

**`font-synthesis`** は [CSS](/ja/docs/Web/CSS) のプロパティで、指定したフォントファミリに太字、斜体、小文字、添字、上付き文字がない場合に、ブラウザーが合成するかどうかを指定します。

{{EmbedInteractiveExample("pages/css/font-synthesis.html")}}

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- [font-synthesis-weight](/ja/docs/Web/CSS/font-synthesis-weight)
- [font-synthesis-style](/ja/docs/Web/CSS/font-synthesis-style)
- [font-synthesis-small-caps](/ja/docs/Web/CSS/font-synthesis-small-caps)
- [font-synthesis-position](/ja/docs/Web/CSS/font-synthesis-position)

## 構文

```css
/* none または 1 つ以上のその他のキーワード値 */
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
font-synthesis: position;
font-synthesis: small-caps style; /* プロパティ値はどの順でもよい */
font-synthesis: style small-caps weight position; /* プロパティ値はどの順でもよい */

/* グローバル値 */
font-synthesis: inherit;
font-synthesis: initial;
font-synthesis: revert;
font-synthesis: revert-layer;
font-synthesis: unset;
```

### 値

- `none`
  - : 太字およびイタリックの字体を合成しないことを示すキーワードです。
- `weight`
  - : 必要であれば、太字の字体を合成してよいことを示すキーワードです。
- `style`
  - : 必要であれば、イタリックの字体を合成してよいことを示すキーワードです。
- `small-caps`
  - : 必要であれば、スモールキャップの字体を合成してよいことを示すキーワードです。
- `position`
  - : {{cssxref("font-variant-position")}} を使用する場合、下付き・上付き文字の書体は必要に応じてブラウザーが合成する可能性があることを示します。

## 解説

ほとんどの標準的な欧文フォントにはイタリック体や太字の変化形が含まれていますが、多くのノベルティフォントには含まれていません。中国語、日本語、韓国語、その他の表語文字に使用されているフォントは、これらの変化形を含まない傾向があり、それらを合成するとテキストの可読性が損なわれる可能性があります。このような場合には、ブラウザーの既定のフォント合成機能をオフにしたほうがよいかもしれません。

例えば、 [:lang()](/ja/docs/Web/CSS/:lang) 擬似クラスを用いることで、ある言語（この例ではアラビア語）に対してブラウザーが太字や斜体を合成しないようにすることができます。

```css
*:lang(ar) {
  font-synthesis: none;
}
```

下記の表は、一括指定の `font-synthesis` プロパティの値が、個別指定プロパティにどのように割り当てられるかを示しています。

| font-synthesis の値                | [font-synthesis-weight](/ja/docs/Web/CSS/font-synthesis-weight) 値 | [font-synthesis-style](/ja/docs/Web/CSS/font-synthesis-style) 値 | [font-synthesis-small-caps](/ja/docs/Web/CSS/font-synthesis-small-caps) 値 | [font-synthesis-position](/ja/docs/Web/CSS/font-synthesis-position) 値 |
| :--------------------------------- | :----------------------------------------------------------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `none`                             | `none`                                                             | `none`                                                           | `none`                                                                     | `none`                                                                 |
| `weight`                           | `auto`                                                             | `none`                                                           | `none`                                                                     | `none`                                                                 |
| `style`                            | `none`                                                             | `auto`                                                           | `none`                                                                     | `none`                                                                 |
| `small-caps`                       | `none`                                                             | `none`                                                           | `auto`                                                                     | `none`                                                                 |
| `position`                         | `none`                                                             | `none`                                                           | `none`                                                                     | `auto`                                                                 |
| `weight style`                     | `auto`                                                             | `auto`                                                           | `none`                                                                     | `none`                                                                 |
| `weight small-caps`                | `auto`                                                             | `none`                                                           | `auto`                                                                     | `none`                                                                 |
| `weight position`                  | `auto`                                                             | `none`                                                           | `none`                                                                     | `auto`                                                                 |
| `style small-caps`                 | `none`                                                             | `auto`                                                           | `auto`                                                                     | `none`                                                                 |
| `style position`                   | `none`                                                             | `auto`                                                           | `none`                                                                     | `auto`                                                                 |
| `weight style small-caps`          | `auto`                                                             | `auto`                                                           | `auto`                                                                     | `none`                                                                 |
| `weight style position`            | `auto`                                                             | `auto`                                                           | `none`                                                                     | `auto`                                                                 |
| `weight small-caps position`       | `auto`                                                             | `none`                                                           | `auto`                                                                     | `auto`                                                                 |
| `style small-caps position`        | `none`                                                             | `auto`                                                           | `auto`                                                                     | `auto`                                                                 |
| `weight style small-caps position` | `auto`                                                             | `auto`                                                           | `auto`                                                                     | `auto`                                                                 |

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### フォント合成の無効化

この例では、ブラウザーに既定のフォント合成動作を表示させ、合成動作をオフにした場合と比較しています。この例では、この動作を示すために 2 つのインポートされたフォントを使用していることに注意してください。既定では利用できるフォントでフォント合成をオフにすることは再現できないかもしれません。

#### HTML

```html
<pre> DEFAULT </pre>
<p class="english">
  This font supports <strong>bold</strong> and <em>italic</em>.
</p>
<p class="chinese">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
<br />

<pre> SYNTHESIS IS DISABLED </pre>
<p class="english no-syn">
  This font supports <strong>bold</strong> and <em>italic.</em>
</p>
<p class="chinese no-syn">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
<br />

<pre> SYNTHESIS IS ENABLED </pre>
<p class="english">
  This font supports <strong>bold</strong> and <em>italic</em>.
</p>
<p class="chinese syn">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.chinese {
  font-family: "Ma Shan Zheng";
}
.no-syn {
  font-synthesis: none;
}
.syn {
  font-synthesis: style weight;
}
```

#### 結果

{{EmbedLiveSample('Disabling font synthesis', '', '400')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-position")}}
