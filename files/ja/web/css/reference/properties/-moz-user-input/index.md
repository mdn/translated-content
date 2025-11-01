---
title: -moz-user-input
slug: Web/CSS/Reference/Properties/-moz-user-input
original_slug: Web/CSS/-moz-user-input
l10n:
  sourceCommit: 016ea3d6160143ec4a05d12be1bff9cad594f0e5
---

{{Non-standard_Header}}{{Deprecated_Header}}

Mozilla アプリケーションでは、 **`-moz-user-input`** はある要素がユーザーの入力を受け付けるかどうかを決定します。

Firefox 60 以降、このプロパティでは、通常はユーザー入力を受け入れられない要素に、ユーザー入力を受け入れられるようにすることはできなくなりました。ユーザー入力を無効にする場合のみ、このプロパティを使用することができます。

> [!NOTE]
> `-moz-user-input` は、 CSS 3 の {{cssxref("user-input")}} プロパティの先行実装案の一つでしたが、これはまだ（実装を呼びかける）勧告候補に達していません。類似のプロパティ `user-focus` が [CSS3 UI 仕様の前身であった初期の草稿](https://www.w3.org/TR/2000/WD-css3-userint-20000216) で提案されましたが、作業グループによって却下されました。

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

```plain
-moz-user-input =
  auto | none
```

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
