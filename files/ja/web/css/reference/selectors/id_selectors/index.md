---
title: ID セレクター
slug: Web/CSS/Reference/Selectors/ID_selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS の **ID セレクター** (ID selector) は、 [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性の値に基づいて要素と一致します。選択される要素の `id` 属性は、セレクターで指定した値と完全一致していなければなりません。

```css
/* id="demo" のついた要素 */
#demo {
  border: red 2px solid;
}
```

## 構文

```css
#id_value {
  /* … */
}
```

なお、これは次の[属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)と等価です (ただし、詳細度は異なります)。

```css
[id="id_value"] {
  /* … */
}
```

`id_value` の値は有効な [CSS 識別子](/ja/docs/Web/CSS/Reference/Values/ident)でなければなりません。有効な CSS 識別子ではない HTML の `id` 属性は、クラスセレクターで使用する前に[エスケープ](/ja/docs/Web/CSS/Reference/Values/ident#文字のエスケープ)する必要があります。

## 例

### 有効な ID セレクター

### HTML

```html
<p id="blue">この段落は青い背景です。</p>
<p>これは単なる通常の段落です。</p>
```

```html-nolint
<!-- 次の 2 つの段落には、CSS でエスケープしなければならない文字を含む
id 属性が設定されています -->

<p id="item?one">この段落はピンクの背景です。</p>
<p id="123item">この段落は黄色い背景です。</p>
```

#### CSS

```css
#blue {
  background-color: skyblue;
}
```

```css
/* 次の 2 つのルールでは、id 属性はエスケープしなければならない */

#item\?one {
  background-color: pink;
}

#\00003123item {
  background-color: yellow;
}
```

#### 結果

{{EmbedLiveSample("Examples", '100%', 200)}}

### 無効な ID セレクター

次のルール内の ID セレクターは有効な CSS 識別子ではないため、無視されます。

```css example-bad
#item?one {
  background-color: green;
}

#123item {
  background-color: green;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
- [CSS の学習: セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
