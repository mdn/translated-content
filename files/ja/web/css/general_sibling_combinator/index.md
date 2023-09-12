---
title: 一般兄弟結合子
slug: Web/CSS/General_sibling_combinator
---

{{CSSRef("Selectors")}}

**一般兄弟結合子** (general sibling combinator, `~`) は 2 個のセレクターを結びつけ、 1 つ目の要素の後に 2 つ目の要素のがあり（直後である必要はない）、かつ両者が同じ親{{Glossary("element", "要素")}}の子であるすべてのパターンに一致します。

```css
/* 任意の画像の兄弟で、
   その画像より後方にある段落 */
img ~ p {
  color: red;
}
```

## 構文

```css
先行する要素 ~ 選択される要素 { スタイルプロパティ }
```

## 例

### CSS

```css
p ~ span {
  color: red;
}
```

### HTML

```html
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a red span!</span>
<span>And this is a red span!</span>
<code>More code...</code>
<div>How are you?</div>
<p>Whatever it may be, keep smiling.</p>
<h1>Dream big</h1>
<h2>that's all.</h2>
<span>And yet again this is a red span!</span>
```

### 結果

{{EmbedLiveSample("Examples", "auto", 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [隣接兄弟結合子](/ja/docs/Web/CSS/Adjacent_sibling_combinator)
