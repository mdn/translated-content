---
title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{deprecated_header}}{{non-standard_header}}

**`-moz-user-focus`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ある要素がフォーカスを持つことができるかどうかを示すために使用されます。

この値を `ignore` に設定することで、その要素のフォーカスを無効にすることができます。その要素はタブ順で飛ばされます。
デフォルトは `none` であり、これにより要素へのフォーカスが無効化され、その要素を選択しようとした場合、他の要素のフォーカスが除去されます。

## 構文

```css
/* キーワード値 */
-moz-user-focus: none;
-moz-user-focus: normal;
-moz-user-focus: ignore;

/* グローバル値 */
-moz-user-focus: inherit;
-moz-user-focus: initial;
-moz-user-focus: unset;
```

### 値

- `ignore`
  - : その要素は、キーボードフォーカスを受け付けず、タブ順でスキップされます。
- `normal`
  - : 要素がキーボードフォーカスを受けられるようになります。
- `none`
  - : この要素はキーボードフォーカスを受け入れません。
    要素を選択しようとすると、他の要素のフォーカスが除去されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`-moz-user-focus = ignore | normal | none`)}}

## 例

### HTML

```html
<input class="ignored" value="ユーザーはこの要素にフォーカスを与えることができません。" />
```

### CSS

```css
.ignored {
  -moz-user-focus: ignore;
}
```

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
