---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
---

{{ APIRef("DOM") }}

{{domxref("Element")}} の **`removeAttribute()`** メソッドは、指定された名前の属性を要素から削除します。

## 構文

```
element.removeAttribute(attrName);
```

### Parameters

- `attrName`
  - : {{domxref("DOMString")}} で、要素から削除する属性の名前を指定します。指定された属性が存在しない場合、 `removeAttribute()` はエラーを発生させずに戻ります。

### 返値

`undefined` です。

## 使用上の注意

属性の値を直接、または {{domxref("Element.setAttribute", "setAttribute()")}} を使用して `null` に設定するのではなく、 `removeAttribute()` を使用してください。多くの属性は `null` に設定しても、期待通りの動作をしません。

{{ DOMAttributeMethods() }}

## 例

```js
// Given: <div id="div1" align="left" width="200px">
document.getElementById("div1").removeAttribute("align");
// Now: <div id="div1" width="200px">
```

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('DOM WHATWG', '#dom-element-removeattribute', 'Element" removeAttribute')}} | {{Spec2('DOM WHATWG')}} |      |

## ブラウザーの互換性

{{Compat}}
