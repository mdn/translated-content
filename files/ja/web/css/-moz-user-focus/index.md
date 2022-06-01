---
title: '-moz-user-focus'
slug: Web/CSS/-moz-user-focus
tags:
  - '-moz-user-focus'
  - CSS
  - CSS:Mozilla 拡張
  - NeedsContent
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.-moz-user-focus
translation_of: Web/CSS/-moz-user-focus
---
{{CSSRef}} {{Non-standard_header}}

**`-moz-user-focus`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ある要素がフォーカスを持つことができるかどうかを示すために使用されます。

```css
/* キーワード値 */
-moz-user-focus: normal;
-moz-user-focus: ignore;

/* グローバル値 */
-moz-user-focus: inherit;
-moz-user-focus: initial;
-moz-user-focus: unset;
```

この値を `ignore` に設定することで、その要素のフォーカスを無効にすることができます。その要素はタブ順で飛ばされます。

{{cssinfo}}

> **Note:** このプロパティは XUL の {{XULElem("textbox")}} 要素では動作しません。`textbox` 自体はフォーカスを受けないからです。代わりに、XBL は無名の HTML {{HTMLElement("input")}} 要素を `textbox` の中に作成し、その要素がフォーカスを受けます。`textbox` がキーボードのフォーカスを受けないようにするには、そのタブインデックスを `-1` に設定することで、またマウスのフォーカスを受けないようにするには、`mousedown` イベントの既定のアクションを防ぐことで可能です。

## 構文

### 値

- `ignore`
  - : その要素は、キーボードフォーカスを受け付けず、タブ順でスキップされます。
- `normal`
  - : 要素がキーボードフォーカスを受けられるようになります。
- `select-after`
  - : ?
- `select-before`
  - : ?
- `select-menu`
  - : ?
- `select-same`
  - : ?
- `select-all`
  - : ?
- `none`
  - : ?

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<input class="ignored" value="The user cannot focus on this element.">
```

### CSS

```css
.ignored {
  -moz-user-focus: ignore;
}
```

## 仕様書

どの標準にも含まれていません。同様のプロパティである `user-focus` は、[CSS3 UI 仕様の前身の初期草稿](https://www.w3.org/TR/2000/WD-css3-userint-20000216)で提案されましたが、ワーキンググループで却下されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify", "-moz-user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
