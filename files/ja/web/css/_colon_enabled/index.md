---
title: ":enabled"
slug: Web/CSS/:enabled
---

{{CSSRef}}

**`:enabled`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、すべての有効な要素を表します。有効な要素とは、アクティブ化 (選択、クリック、入力など) したりフォーカスを得たりすることができるものです。要素には無効な状態、つまりアクティブ化したりフォーカスを得たりすることができない状態もあります。

```css
/* 有効な <input> を選択 */
input:enabled {
  color: blue;
}
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
