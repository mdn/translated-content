---
title: -moz-user-input
slug: Web/CSS/Reference/Properties/-moz-user-input
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

Mozilla アプリケーションでは、 **`-moz-user-input`** はある要素がユーザーの入力を受け付けるかどうかを決定します。

Firefox 60 以降、このプロパティは、通常はユーザー入力を受け入れない要素にその機能を与えることはできなくなりました。ユーザー入力を無効化するためにのみ使用できます。

`user-input` プロパティは現在、標準化の流れにはありません。

## 構文

```css
/* キーワード値 */
-moz-user-input: auto;
-moz-user-input: none;

/* グローバル値 */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

### 値

- `auto`
  - : {{HTMLElement("textarea")}} のように、通常ユーザー入力を受け付ける要素は、ユーザー入力に応答します。
- `none`
  - : 要素はユーザーからの入力に反応せず {{CSSxRef(":active")}} になりません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`-moz-user-input = auto | none`)}}

## 例

### 要素のユーザー入力の無効化

```css
input.example {
  /* ユーザーはテキストの選択はできますが変更はできません。 */
  -moz-user-input: none;
}
```

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("user-modify", "-moz-user-modify")}}
- {{CSSxRef("user-select", "-moz-user-select")}}
