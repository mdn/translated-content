---
title: 子結合子
slug: Web/CSS/Child_combinator
tags:
  - CSS
  - リファレンス
  - セレクター
browser-compat: css.selectors.child
translation_of: Web/CSS/Child_combinator
---
{{CSSRef("Selectors")}}

**子結合子** (child combinator) (`>``) は 2 つの CSS セレクターの間に配置されます。 2 つ目のセレクターが 1 つ目のセレクターの直接の子要素の場合にのみ一致します。

```css
/* "my-things"クラスを持つリストの子要素であるリスト項目 */
ul.my-things > li {
  margin: 2em;
}
```

2 つ目のセレクターに一致する要素は、 1 つ目のセレクターに一致する要素の直接の子要素でなければなりません。これは、[子孫結合子](/ja/docs/Web/CSS/Descendant_combinator)が 1 つ目のセレクターに一致する要素が祖先が存在する 2 つ目のセレクターに一致するすべての要素に一致するのに比べて厳密です。

## 構文

```css
セレクター1 > セレクター2 { スタイルプロパティ }
```

## 例

### CSS

```css
span {
  background-color: aqua;
}

div > span {
  background-color: yellow;
}
```

### HTML

```html
<div>
  <span>Span #1, in the div.
    <span>Span #2, in the span that's in the div.</span>
  </span>
</div>
<span>Span #3, not in the div at all.</span>
```

### 結果

{{EmbedLiveSample("Examples", "100%", 100)}}

## 仕様書

| 仕様書                                                                                        | 状態                               | 備考             |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("CSS4 Selectors", "#child-combinators", "child combinator")}}     | {{Spec2("CSS4 Selectors")}} |                     |
| {{SpecName("CSS3 Selectors", "#child-combinators", "child combinators")}}     | {{Spec2("CSS3 Selectors")}} | 変更なし          |
| {{SpecName("CSS2.1", "selector.html#child-selectors", "child selectors")}} | {{Spec2("CSS2.1")}}             | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [子孫結合子](/ja/docs/Web/CSS/Descendant_combinator)
