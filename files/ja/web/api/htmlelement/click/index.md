---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
tags:
  - API
  - HTML DOM
  - HTMLElement
  - メソッド
  - リファレンス
browser-compat: api.HTMLElement.click
translation_of: Web/API/HTMLElement/click
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.click()`** メソッドは、要素のマウスクリックをシミュレートします。

`click()` を対応している要素（{{HTMLElement("input")}} など）で使用すると、要素の click イベントが発行されます。 このイベントは、文書ツリー（またはイベントチェーン）の上位の要素にバブルアップし、click イベントを発生させます。

## 構文

```js
element.click()
```

## 例

チェックボックスの上にマウスポインターを移動させたときのマウスクリックをシミュレートします。

### HTML

```html
<form>
  <input type="checkbox" id="myCheck" onmouseover="myFunction()" onclick="alert('click event occurred')">
</form>
```

### JavaScript

```js
// マウスオーバーで、myFunction を実行します
function myFunction() {
  document.getElementById("myCheck").click();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連するイベントハンドラー

  - {{domxref("GlobalEventHandlers.onclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}
  - {{domxref("GlobalEventHandlers.onauxclick")}}
