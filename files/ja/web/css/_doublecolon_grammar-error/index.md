---
title: '::grammar-error'
slug: Web/CSS/::grammar-error
tags:
  - CSS
  - 実験的
  - 擬似要素
  - リファレンス
  - セレクター
browser-compat: css.selectors.grammar-error
translation_of: Web/CSS/::grammar-error
---
{{CSSRef}}{{SeeCompatTable}}

**`::grammar-error`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、{{glossary("user agent", "ユーザーエージェント")}}が文法的に正しくないとしたテキストの区間を示します。

## 利用できるプロパティ

`::grammar-error` 擬似要素では、一部の CSS プロパティのみが利用できます。

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} およびその個別指定プロパティ
- {{cssxref("text-decoration")}} および関連プロパティ
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## 構文

```css
::grammar-error
```

## 例

### 単純な文書の文法チェック

この例では、最終的に対応しているブラウザーでは、フラグの立った文法エラーがあれば、示したスタイルで強調表示されます。

#### HTML

```html
<p>My friends is coming to the party tonight.</p>
```

#### CSS

```css
::grammar-error  {
  text-decoration: underline red;
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Simple_document_grammar_check', '100%', 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::spelling-error")}}
