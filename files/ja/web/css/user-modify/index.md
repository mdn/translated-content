---
title: user-modify
slug: Web/CSS/user-modify
tags:
  - CSS
  - CSS プロパティ
  - CSS:Mozilla 拡張
  - CSS:WebKit 拡張
  - 非推奨
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.user-modify
translation_of: Web/CSS/user-modify
---
{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

**`user-modify`** プロパティは Firefox では効果がありません。元々は要素の内容をユーザーが編集できるかどうかを決める予定でした。

```css
/* キーワード値 */
user-modify: read-only;
user-modify: read-write;
user-modify: write-only;

/* グローバル値 */
user-modify: inherit;
user-modify: initial;
user-modify: revert;
user-modify: unset;
```

> **Warning:** このプロパティは {{HTMLAttrxRef("contenteditable")}} 属性に置き換えられました。

## 構文

`-moz-user-modify` プロパティは、以下のリストにあるキーワード値の一つで指定します。

### 値

- `read-only`
  - : 既定値です。内容は読み取り専用です。
- `read-write`
  - : ユーザーが内容を読み書きできます。
- `read-write-plaintext-only` {{Non-standard_Inline}}
  - : `read-write` と同じですが、リッチテキスト書式は失われます。
- `write-only`
  - : ユーザーが内容を編集できますが、読むことはできません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### HTML

```html
<div class="readwrite">The user is able to change this text.</div>
```

### CSS

```css
.readwrite {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
```

## 仕様書

このプロパティは仕様書で定義されていません。類似のプロパティである `user-focus` が、 [CSS3 UI 仕様書の早期の草稿](https://www.w3.org/TR/2000/WD-css3-userint-20000216)で提案されましたが、作業グループによって拒否されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-input")}}
- {{CSSxRef("-moz-user-select")}}
