---
title: :enabled
slug: Web/CSS/Reference/Selectors/:enabled
original_slug: Web/CSS/:enabled
---

**`:enabled`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、すべての有効な要素を表します。有効な要素とは、アクティブ化 (選択、クリック、入力など) したりフォーカスを得たりすることができるものです。要素には無効な状態、つまりアクティブ化したりフォーカスを得たりすることができない状態もあります。

```css
/* 有効な <input> を選択 */
input:enabled {
  color: blue;
}
```

{{InteractiveExample("CSS デモ: :enabled", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:enabled {
  background-color: gold;
}
```

```html interactive-example
<form>
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" />

  <label for="emp">Employed:</label>
  <select id="emp" name="emp" disabled>
    <option>No</option>
    <option>Yes</option>
  </select>

  <label for="empDate">Employment Date:</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">Resume:</label>
  <input id="resume" name="resume" type="file" />
</form>
```

## 構文

```
:enabled
```

## 例

以下の例は有効なときに文字列の色とボタンの {{htmlElement("input")}} を緑色にし、無効な時に灰色にします。これでユーザーは要素が操作できるかどうかを知るのに役立ちます。

### HTML

```html
<form action="url_of_form">
  <label for="FirstField">First field (enabled):</label>
  <input type="text" id="FirstField" value="Lorem" /><br />

  <label for="SecondField">Second field (disabled):</label>
  <input type="text" id="SecondField" value="Ipsum" disabled="disabled" /><br />

  <input type="button" value="Submit" />
</form>
```

### CSS

```css
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
```

### 結果

{{EmbedLiveSample("Examples", 550, 95)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":disabled")}}
