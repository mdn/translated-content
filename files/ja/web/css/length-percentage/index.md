---
title: <length-percentage>
slug: Web/CSS/length-percentage
tags:
  - CSS
  - CSS データ型
  - データ型
  - リファレンス
  - length-percentage
  - 単位
  - 値
browser-compat: css.types.length-percentage
translation_of: Web/CSS/length-percentage
---
{{CSSRef}}

**`<length-percentage>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 {{Cssxref("length")}} または {{Cssxref("percentage")}} が取りうる値を表します。

## 構文

この型に利用できる個々の構文の詳細は、 {{Cssxref("length")}} および {{Cssxref("percentage")}} の文書を参照してください。

## 例

<h3 id="length-percentage_examples">length-percentage の例</h3>

以下の簡単な例では、`<length-percentage>` の値を使用するいくつかのプロパティを示しています。

#### HTML

```html
<p>パーセント値や長さは様々な場面で使うことができます。</p>
```

#### CSS

```css
p {
  /* length-percentage の例 */
  width: 75%;
  height: 200px;
  margin: 3rem;
  padding: 1%;
  border-radius: 10px 10%;
  font-size: 250%;
  line-height: 1.5em;

  /* length の例 */
  text-shadow: 1px 1px 1px red;
  border: 5px solid red;
  letter-spacing: 3px;

  /* percentage example */
  text-size-adjust: 20%;
}
```

#### 結果

{{EmbedLiveSample('length-percentage_examples', '100%', 320)}}

### calc() での使用

許可されている型として `<length-percentage>` が指定されているところでは、これはパーセント値が長さとして解決されるので、 {{cssxref("calc()")}} の式で利用することができます。したがって、以下のすべての値が {{Cssxref("width")}} で利用できます。

```css example-good
width: 200px;
width: 20%;
width: calc(100% - 200px);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;length&gt;")}}
- [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)
