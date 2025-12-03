---
title: <length-percentage>
slug: Web/CSS/Reference/Values/length-percentage
original_slug: Web/CSS/length-percentage
l10n:
  sourceCommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

**`<length-percentage>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、 {{Cssxref("length")}} または {{Cssxref("percentage")}} が取りうる値を表します。

## 構文

この型に利用できる個々の構文の詳細は、 {{Cssxref("length")}} および {{Cssxref("percentage")}} の文書を参照してください。

## 形式文法

{{csssyntax}}

## 例

### length-percentage の例

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

許可されている型として `<length-percentage>` が指定されているところでは、これはパーセント値が長さとして解決されるので、 {{cssxref("calc", "calc()")}} の式で利用することができます。したがって、以下のすべての値が {{cssxref("width")}} で利用できます。

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
- [CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)
