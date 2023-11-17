---
title: Inline-level content (インラインレベルコンテンツ)
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: a46d4d15ea85b4bbb83df145228bc40f658868be
---

CSS において、インラインレイアウトに関係するコンテンツは**インラインレベルコンテンツ**と呼ばれます。ほとんどのテキストシーケンス、置換要素、および生成されたコンテンツは、デフォルトでインラインレベルです。

インラインレイアウトでは、テキスト、[置換要素](/ja/docs/Web/CSS/Replaced_element)、その他のインラインボックスが混在したストリームを、行ボックスのスタックに断片化することでレイアウトされます。各行ボックスの中でインラインレベルのボックスは、書字方向に応じて互いに垂直または水平に整列されます。一般的には、テキストのベースラインによって整列されます。これは、CSSで変更することができます。

![inline layout](inline_layout.png)

> **メモ:** HTML (_HyperText Markup Language_) の要素は従来、「ブロックレベル」要素または「インライン要素」の何れかに分類されてきました。これは表示特性であることから、現在は CSS において定義されています。

## 例

```html
<p>
  この span は<span class="highlight">インラインレベル要素</span>です。
  背景は、この要素の影響の始まりと終わりの両方を表示するように色付けされています。
  <input type="radio" /> や <input type="checkbox" /> のような input
  要素もインラインレベルコンテンツです。
</p>
```

この例では、{{HTMLElement("p")}} 要素にいくつかのテキストが含まれています。そのテキストの中に、インラインレベルの要素である {{HTMLElement("span")}} 要素と 2 つの {{HTMLElement("input")}} 要素があります。`<span>` が2行にまたがっている場合、2 つの行ボックスが生成されます。これらの要素はインラインであるため、段落は途切れることのないテキストフローの 1 つの段落として正しく表示されます：

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color: #ee3;
}
```

{{EmbedLiveSample("Examples")}}

## 関連情報

- [ブロックレベルコンテンツ](/ja/docs/Glossary/Block-level_content)
- [インライン整形コンテキスト](/ja/docs/Web/CSS/Inline_formatting_context)
- {{cssxref("display")}}
