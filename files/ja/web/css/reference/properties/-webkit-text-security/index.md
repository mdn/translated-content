---
title: CSS `-webkit-text-security` プロパティ
short-title: -webkit-text-security
slug: Web/CSS/Reference/Properties/-webkit-text-security
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_Header}}

**`-webkit-text-security`** は標準外の CSS プロパティで、{{HtmlElement("form")}} フィールド（{{HtmlElement("input")}} や {{HtmlElement("textarea")}} など）内の文字を、図形に置き換えることで非表示にします。このプロパティは、`type=password` ではないフィールドにのみ影響します。

## 構文

```css
-webkit-text-security: circle;
-webkit-text-security: disc;
-webkit-text-security: square;
-webkit-text-security: none;

/* グローバル値 */
-webkit-text-security: inherit;
-webkit-text-security: initial;
-webkit-text-security: revert;
-webkit-text-security: revert-layer;
-webkit-text-security: unset;
```

## 形式文法

{{CSSSyntaxRaw(`-webkit-text-security = circle | disc | square | none`)}}

## 例

### テキスト入力の非表示

下記の入力欄に文字を入力してみてください。ブラウザーがこのプロパティに対応している場合、入力した文字が視覚的に四角に置き換わります。

#### HTML

```html
<label for="name">名前:</label> <input type="text" name="name" id="name" />
```

#### CSS

```css
input {
  -webkit-text-security: square;
}
```

#### 結果

{{EmbedLiveSample("Obscuring_a_text_input")}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebKit CSS 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions)
