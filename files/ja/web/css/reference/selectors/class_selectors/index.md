---
title: クラスセレクター
slug: Web/CSS/Reference/Selectors/Class_selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS](/ja/docs/Web/CSS) の**クラスセレクター** (class selector) は、 [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) 属性の内容に基づいて要素を選択します。

```css
/* class="spacious" であるすべての要素 */
.spacious {
  margin: 2em;
}

/* class="spacious" であるすべての <li> 要素 */
li.spacious {
  margin: 2em;
}

/* "spacious" および "elegant" の両方をクラスリストに含む <li> 要素すべて */
/* 例えば、 class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
```

## 構文

```css
.class_name {
  /* … */
}
```

なお、これは次の[属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)と等価です。

```css
[class~="class_name"] {
  /* … */
}
```

`class_name` の値は有効な [CSS 識別子](/ja/docs/Web/CSS/Reference/Values/ident)でなければなりません。有効な CSS 識別子ではない HTML の `class` 属性は、クラスセレクターで使用する前に[エスケープ](/ja/docs/Web/CSS/Reference/Values/ident#文字のエスケープ)する必要があります。

## 例

### 有効なクラスセレクター

#### HTML

```html-nolint
<p class="red">この段落は赤い文字です。</p>
<p class="red yellow-bg">
  この段落は赤い文字で、黄色の背景です。
</p>
<p class="red fancy">この段落は赤い文字で、"fancy" スタイルです。</p>
<p>これは単なる通常の段落です。</p>
```

```html-nolint
<!-- 次の 2 つの段落には、CSS でエスケープしなければならない文字を含む
クラス属性が設定されています -->

<p class="item?one">この段落はピンクの背景です。</p>
<p class="123item">この段落は黄色の背景です。</p>
```

#### CSS

```css
.red {
  color: #ff3333;
}

.yellow-bg {
  background: #ffffaa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #7777ff;
}
```

```css
/* 次の 2 つのルールでは、クラス属性はエスケープしなければならない */

.item\?one {
  background-color: pink;
}

.\00003123item {
  background-color: yellow;
}
```

#### 結果

{{EmbedLiveSample('Examples', "", 300)}}

### 無効なクラスセレクター

次のルール内のクラスセレクターは、有効な CSS 識別子ではないため、無視されます。

```css example-bad
.item?one {
  background-color: green;
}

.123item {
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
