---
title: Block-level content (ブロックレベルコンテンツ)
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

CSS において、ブロックレイアウトに関係するコンテンツは**ブロックレベルコンテンツ**と呼ばれます。

ブロックレイアウトでは、ボックスは次々と垂直に、包含ブロックの上からレイアウトされます。各ボックスの左の外辺は、格納するブロックの左の辺に接します。ブロックレベル要素は常に新しい行から始まります。英語やアラビア語のような横書きでは、親要素（コンテナー）の水平空間全体と、コンテンツを含む高さに等しい垂直空間を占めるため、「ブロック」を作成することになります。

> [!NOTE]
> 上記のブロックレイアウトの動作は、包含ブロックの {{cssxref("writing-mode")}} が[デフォルト値](/ja/docs/Web/CSS/Reference/Properties/writing-mode#formal_definition)と異なる場合には変わります。

> [!NOTE]
> HTML (_HyperText Markup Language_) の要素は従来、「ブロックレベル」要素または「インライン要素」の何れかに分類されてきました。これは表示特性であることから、現在は CSS において定義されています。

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

- 関連する用語:
  - {{glossary("Inline-level content")}}
- [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)
- {{cssxref("display")}}
- {{cssxref("writing-mode")}}
