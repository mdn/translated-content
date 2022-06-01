---
title: HTMLSelectElement.form
slug: Web/API/HTMLSelectElement/form
tags:
  - API
  - HTMLSelectElement
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.HTMLSelectElement.form
translation_of: Web/API/HTMLSelectElement/form
---
{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.form`** は読み取り専用のプロパティで、この要素が関連付けられているフォームを表す {{domxref("HTMLFormElement")}} を返します。この要素が {{HTMLElement("form")}} 要素に関連付けられていなかった場合は、`null` を返します。

## 構文

```js
aForm = aSelectElement.form.selectname;
```

## 例

### HTML

```html
<form action="http://www.google.com/search" method="get">
 <label>Google: <input type="search" name="q"></label> <input type="submit" value="Search...">
</form>
```

### Javascript

すべてのフォーム要素で使用できるプロパティである "type" は、呼び出し元のフォーム要素の型を返します。SELECT の場合、選択リストの種類に応じて "`select-one`" または "`select-multiple`" の値を取ります。以下のコードは特定のフォーム内のすべての SELECT 要素に CSS の "`selectclass`" クラスを設定します。

```html
<script type="text/javascript">
var form_element = document.getElementById('subscribe_form');
var vist = form_element.style;
if (vist.display=='' || vist.display=='none')
{
  vist.display = 'block';
}
else
{
  vist.display = 'none';
}
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
