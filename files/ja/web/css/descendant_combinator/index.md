---
title: 子孫結合子
slug: Web/CSS/Descendant_combinator
tags:
  - CSS
  - リファレンス
  - セレクター
browser-compat: css.selectors.descendant
translation_of: Web/CSS/Descendant_combinator
---
{{CSSRef("Selectors")}}

**子孫結合子** (descendant combinator) — 通常は単一の空白文字 (` `) で表される — は 2 つの CSS セレクターを結合し、 1 つ目のセレクターに一致する要素が祖先 (親、親の親、親の親の親、など) となっている 2 つ目のセレクターに一致します。子孫結合子を利用したセレクターは _子孫セレクター_ と呼ばれます。

```css
/* "my-things" リストの子孫のリスト項目 */
ul.my-things li {
  margin: 2em;
}
```

子孫結合子は、技術的には他の結合子がない 2 つのセレクターの間にある 1 つ以上の {{Glossary("CSS")}} の{{Glossary("Whitespace", "ホワイトスペース")}}文字 ― 空白文字や 4 種類の制御文字 (復帰、ページ送り、改行、タブ文字) のうちの 1 つ ― です。さらに、結合子としてのホワイトスペース文字には任意の数の CSS コメントを含めることができます。

## 構文

```css
セレクター1 セレクター2 {
  /* プロパティ宣言 */
}
```

## 例

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### HTML

```html
<ul>
  <li>
    <div>Item 1</div>
    <ul>
     - Subitem A
     - Subitem B
    </ul>
  </li>
  <li>
    <div>Item 2</div>
    <ul>
     - Subitem A
     - Subitem B
    </ul>
  </li>
</ul>
```

### 結果

{{EmbedLiveSample("Examples", "100%", 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [子結合子](/ja/docs/Web/CSS/Child_combinator)
