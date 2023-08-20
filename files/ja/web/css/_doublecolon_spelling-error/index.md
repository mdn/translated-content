---
title: "::spelling-error"
slug: Web/CSS/::spelling-error
---

{{CSSRef}}{{SeeCompatTable}}

**`::spelling-error`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、綴りが正しくないと{{glossary("user agent", "ユーザーエージェント")}}が判断したテキストの区間を示します。

## 利用できるプロパティ

`::spelling-error` 擬似要素では、一部の CSS プロパティのみが利用できます。

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
::spelling-error {}
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
  text-decoration: wavy red;
}
```

#### 結果

{{EmbedLiveSample('Simple_document_spell_check', '100%', 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::grammar-error")}}
