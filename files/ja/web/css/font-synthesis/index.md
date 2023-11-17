---
title: font-synthesis
slug: Web/CSS/font-synthesis
---

{{CSSRef}}

**`font-synthesis`** は [CSS](/ja/docs/Web/CSS) のプロパティで、太字やイタリックの字体がない場合に、ブラウザーが合成してよいかどうかを制御します。

## 構文

```css
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
font-synthesis: small-caps;
font-synthesis: weight style small-caps;

/* グローバル値 */
font-synthesis: inherit;
font-synthesis: initial;
font-synthesis: revert;
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

## 解説

ほとんどの標準的な欧文フォントにはイタリック体や太字の変化形が含まれていますが、多くのノベルティフォントには含まれていません。中国語、日本語、韓国語、その他の表語文字に使用されているフォントは、これらの変化形を含まない傾向があり、それらを合成するとテキストの可読性が損なわれる可能性があります。このような場合には、ブラウザーの既定のフォント合成機能をオフにしたほうがよいかもしれません。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Disabling_font_synthesis">フォント合成の無効化</h3>

#### HTML

```html
<em class="syn">Synthesize me! 站直。</em>
<br />
<em class="no-syn">Don't synthesize me! 站直。</em>
```

#### CSS

```css
em {
  font-weight: bold;
}
.syn {
  font-synthesis: style weight small-caps;
}
.no-syn {
  font-synthesis: none;
}
```

#### 結果

{{ EmbedLiveSample('Disabling_font_synthesis', '', '75') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
