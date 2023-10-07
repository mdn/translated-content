---
title: text-decoration
slug: Web/CSS/text-decoration
---

{{CSSRef}}

**`text-decoration`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、テキストの装飾的な線の表示を設定します。これは {{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-style")}} およびさらに新しい {{cssxref("text-decoration-thickness")}} プロパティの一括指定です。

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

文字列の装飾は、子孫の文字列要素に適用されます。つまり、要素に文字列装飾が指定されれば、子要素では装飾を外すことができません。例えば、`<p>This text has <em>some emphasized words</em> in it.</p>` というマークアップと、 `p { text-decoration: underline; }` のスタイル規則では、段落全体に下線が引かれます。 `em { text-decoration: none; }` のスタイル規則を適用しても変化せず、段落全体に下線が引かれたままになります。しかし、 `em { text-decoration: overline; }` の規則で "some emphasized words" に第二の装飾が施されます。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`text-decoration-color`](/ja/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/ja/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/ja/docs/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/ja/docs/Web/CSS/text-decoration-thickness)

## 構文

```css
text-decoration: underline;
text-decoration: overline red;
text-decoration: none;

/* グローバル値 */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: revert-layer;
text-decoration: unset;
```

`text-decoration` プロパティは、個別指定の text-decoration プロパティを表す 1 つまたは複数の値を空白で区切って指定します。

### 値

- {{cssxref("text-decoration-line")}}
  - : 使用する装飾の種類を設定します。 `underline` や `line-through` などです。
- {{cssxref("text-decoration-color")}}
  - : 装飾の色を設定します。
- {{cssxref("text-decoration-style")}}
  - : 装飾に使用する線のスタイルを設定します。 `solid`, `wavy`, `dashed` などです。
- {{cssxref("text-decoration-thickness")}}
  - : 装飾に使われる線の太さを設定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### text-decoration の値のデモ

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

```html
<p class="under">This text has a line underneath it.</p>
<p class="over">This text has a line over it.</p>
<p class="line">This text has a line going through it.</p>
<p>
  This <a class="plain" href="#">link will not be underlined</a>, as links
  generally are by default. Be careful when removing the text decoration on
  anchors since users often depend on the underline to denote hyperlinks.
</p>
<p class="underover">This text has lines above <em>and</em> below it.</p>
<p class="thick">
  This text has a really thick purple underline in supporting browsers.
</p>
<p class="blink">
  This text might blink for you, depending on the browser you use.
</p>
```

{{EmbedLiveSample('Examples','auto','320')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- text-decoration の個別指定プロパティは、 {{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-style")}}、 {{cssxref("text-decoration-thickness")}} です。
- {{cssxref("text-decoration-skip-ink")}}、 {{cssxref("text-underline-offset")}}、 {{cssxref("text-underline-position")}} 属性もテキストの装飾に影響しますが、一括指定プロパティには含まれません。
- {{cssxref("list-style")}} 属性は HTML の {{HTMLElement("ol")}} および {{HTMLElement("ul")}} のリストの表示方法を制御します。
