---
title: "HTMLElement: click() メソッド"
slug: Web/API/HTMLElement/click
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.click()`** メソッドは、要素のマウスクリックをシミュレートします。

`click()` を対応している要素（{{HTMLElement("input")}} など）で使用すると、要素の click イベントが発行されます。 このイベントは、文書ツリー（またはイベントチェーン）の上位の要素にバブルアップし、click イベントを発生させます。

## 構文

```js-nolint
click()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

チェックボックスの上にマウスポインターを移動させたときのマウスクリックをシミュレートします。

### HTML

```html
<form>
  <input
    type="checkbox"
    id="myCheck"
    onmouseover="myFunction()"
    onclick="alert('click event occurred')" />
</form>
```

### JavaScript

```js
// マウスオーバーで、myFunction を実行する
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

  - {{domxref("Element.click_event", "Element.onclick")}}
  - {{domxref("Element.dblclick_event", "Element.ondblclick")}}
  - {{domxref("Element.auxclick_event", "Element.onauxclick")}}
