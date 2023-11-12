---
title: Block-level content (ブロックレベルコンテンツ)
slug: Glossary/Block-level_content
l10n:
  sourceCommit: a46d4d15ea85b4bbb83df145228bc40f658868be
---

CSS において、ブロックレイアウトに関係するコンテンツは**ブロックレベルコンテンツ**と呼ばれます。

ブロックレイアウトでは、ボックスは次々と垂直に、包含ブロックの上からレイアウトされます。各ボックスの左の外辺は、格納するブロックの左の辺に接します。ブロックレベル要素は常に新しい行から始まります。英語やアラビア語のような横書きでは、親要素（コンテナー）の水平空間全体と、コンテンツを含む高さに等しい垂直空間を占めるため、「ブロック」を作成することになります。

> **メモ:** 上記のブロックレイアウトの動作は、包含ブロックの書字方向 ([`writing-mode`](/ja/docs/Web/CSS/writing-mode)) が[既定値](/ja/docs/Web/CSS/writing-mode#formal_definition)と異なる場合には変わります。

> **メモ:** HTML (_HyperText Markup Language_) の要素は従来、「ブロックレベル」要素または「インライン要素」の何れかに分類されてきました。これは表示特性であることから、現在は CSS において定義されています。

## 例

この例では、2 つの段落 ({{HTMLElement("p")}}) 要素が {{HTMLElement("div")}} の中に収められています。

```html
<div>
  <p>
    これは最初の段落です。これらの段落の背景色は、親要素と区別できるよう色付けされています。
  </p>
  <p>これが 2 番目の段落です。</p>
</div>
```

段落 ({{HTMLElement("p")}}) 要素は既定ではブロックレベルです。このためブロックレイアウトで表示されます。

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Examples")}}

## 関連情報

- [インラインレベルコンテンツ](/ja/docs/Glossary/Inline-level_content)
- [ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/ja/docs/Web/CSS/writing-mode)
