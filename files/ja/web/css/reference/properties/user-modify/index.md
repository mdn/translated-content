---
title: user-modify
slug: Web/CSS/Reference/Properties/user-modify
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

**`user-modify`** プロパティは Firefox では効果がありません。元々は要素の内容をユーザーが編集できるかどうかを決める予定でした。

> [!WARNING]
> このプロパティは [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性に置き換えられました。

## 構文

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

## 形式文法

{{CSSSyntaxRaw(`user-modify = read-only | read-write | read-write-plaintext-only | write-only`)}}

## 例

### HTML

```html
<div class="readwrite">ユーザーはこのテキストを変更できます。</div>
```

### CSS

```css
.readwrite {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
```

## 仕様書

このプロパティは仕様書で定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-input")}}
- {{CSSxRef("user-select", "-moz-user-select")}}
