---
title: "HTML 属性: size"
slug: Web/HTML/Attributes/size
---

{{HTMLSidebar}}

**`size`** 属性は、 {{htmlelement('input')}} 要素の幅と {{htmlelement('select')}} 要素の高さを定義します。 `input` については、 `type` 属性が {{HTMLElement("input/text", "text")}} または {{HTMLElement("input/password", "password")}} の場合は文字数です。これは 0 以上の整数でなければなりません。 `size` が指定されていないか、無効な値が指定された場合、入力欄にサイズが宣言されず、そのフォームコントロールはユーザーエージェントに基づいた既定の幅になります。 CSS が幅に影響を与えるプロパティで要素を対象としている場合は、 CSS が優先されます。

`size` 属性は制約検証には影響しません。

## 例

一部の入力型で `size` を指定すると、入力欄の幅を制御することができます。 select に size を追加すると、閉じた状態のときにいくつの選択肢が見えるかを定義します。

```html
<label for="fruit">Enter a fruit</label> <input type="text" size="15" id="fruit">
<label for="vegetable">Enter a vegetable</label> <input type="text" id="vegetable">

<select name="fruits" size="5">
  <option>banana</option>
  <option>cherry</option>
  <option>strawberry</option>
  <option>durian</option>
  <option>blueberry</option>
</select>

<select name="vegetables" size="5">
<option>carrot</option>
<option>cucumber</option>
<option>cauliflower</option>
<option>celery</option>
<option>collard greens</option>
</select>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`maxlength`](/ja/docs/Web/HTML/Attributes/maxlength)
- [`minlength`](/ja/docs/Web/HTML/Attributes/minlength)
- [`pattern`](/ja/docs/Web/HTML/Attributes/pattern)
