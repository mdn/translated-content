---
title: ::grammar-error
slug: Web/CSS/Reference/Selectors/::grammar-error
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`::grammar-error`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、{{glossary("user agent", "ユーザーエージェント")}}が文法的に正しくないとしたテキストの部分を示します。

`::grammar-error` 擬似要素は、すべての表示強調擬似要素に共通する特別な継承モデルに従います。この継承の仕組みの詳細については、[表示強調擬似要素の継承](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance)の節を参照してください。

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
::grammar-error {
  /* ... */
}
```

## 例

### 単純な文書の文法チェック

この例では、最終的に対応しているブラウザーでは、フラグの立った文法エラーがあれば、示したスタイルで強調表示されます。

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends is coming to the party tonight.
</p>
```

#### CSS

```css
::grammar-error {
  text-decoration: underline red;
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Basic_document_grammar_check', '100%', 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::spelling-error")}}
