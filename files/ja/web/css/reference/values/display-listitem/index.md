---
title: <display-listitem>
slug: Web/CSS/Reference/Values/display-listitem
original_slug: Web/CSS/display-listitem
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

`list-item` キーワードは、要素に {{CSSxRef("list-style")}} プロパティで指定された内容 (例えば見出し記号) を含む `::marker` 擬似要素と共に、自身の内容物のために指定された種類の基本的なボックスを生成します。

## 構文

`list-item` 単独の値を指定すると、要素はリスト項目のように動作します。これは {{CSSxRef("list-style-type")}} や {{CSSxRef("list-style-position")}} と共に使用することができます。

`list-item` は {{CSSxRef("&lt;display-outside&gt;")}} キーワードのいずれかと、 {{CSSxRef("&lt;display-inside&gt;")}} の `flow` または `flow-root` キーワードと組み合わせることもできます。

> [!NOTE]
> 二つの値の構文に対応しているブラウザーでは、内部表示種別がないと既定で `flow` になります。外部表示種別が指定されないと、基本ボックスは外部表示種別が `block` になります。

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<div class="fake-list">I will display as a list item</div>
```

### CSS

```css
.fake-list {
  display: list-item;
  list-style-position: inside;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
