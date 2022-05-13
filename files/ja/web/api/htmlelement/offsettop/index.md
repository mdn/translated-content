---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.HTMLElement.offsetTop
translation_of: Web/API/HTMLElement/offsetTop
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetTop`** は読み取り専用プロパティで、現在の要素の外枠から、*最も近い位置にある*祖先要素である {{domxref("HTMLelement.offsetParent", "offsetParent")}} の上枠の内側までの距離を相対的に返します。

## 値

数値です。

## 例

```js
var d = document.getElementById("div1");
var topPos = d.offsetTop;

if (topPos > 10) {
  // 要素が offsetParent から 11px 以上離れている場合の処理をここに記述
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

Webkit では、要素が非表示である場合（この要素または任意の祖先の `style.display` が `"none"` である場合）、または要素自体の `style.position` が `"fixed"` に設定されている場合、このプロパティは仕様に従って `null` を返します。

Internet Explorer (9) では、このプロパティは、要素自体の `style.position` が `"fixed"` に設定されている場合には `null` を返します。
（`display:none` を指定しても、このブラウザーには影響しません。）
