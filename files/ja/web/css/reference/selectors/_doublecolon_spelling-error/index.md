---
title: ::spelling-error
slug: Web/CSS/Reference/Selectors/::spelling-error
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**`::spelling-error`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、綴りが正しくないと{{glossary("user agent", "ユーザーエージェント")}}が判断したテキストの区間を示します。

`::spelling-error` 擬似要素は、すべての表示強調擬似要素に共通する特別な継承モデルに従います。この継承の仕組みの詳細については、[表示強調擬似要素の継承](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance)の節を参照してください。

## 利用できるプロパティ

`::spelling-error` を含むセレクターのルールでは、ごく一部の CSS プロパティのみを使用することができます。

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
::spelling-error {
  /* ... */
}
```

## 例

### 文書の単純なスペルチェック

この例では、最終的に対応しているブラウザーでは、表示されたスタイルでフラグ付きのスペルミスを強調表示します。

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends are coegdfgfddffbgning to the party tonight.
</p>
```

#### CSS

```css
::spelling-error {
  text-decoration: wavy red underline;
}
```

#### 結果

{{EmbedLiveSample('Basic_document_spell_check', '100%', 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::grammar-error")}}
- {{cssxref("text-decoration-line")}}
