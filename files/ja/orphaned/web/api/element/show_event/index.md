---
title: "Element: show イベント"
slug: orphaned/Web/API/Element/show_event
l10n:
  sourceCommit: a122e87245c624ba56197641b4d7b21b643a6021
---

{{APIRef}}{{deprecated_header}}{{Non-standard_header}}

**`show`** イベントは、 {{domxref("Element/contextmenu_event", "contextmenu")}} イベントが [`contextmenu` 属性](/ja/docs/Web/HTML/Global_attributes/contextmenu)を持つ要素に発生またはバブリングしたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('show', (event) => {});

onshow = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```html
<div contextmenu="test"></div>
<menu type="context" id="test">
  <menuitem label="alert" onclick="alert('the alert label has been clicked')" />
</menu>

<script>
  document.getElementById("test").addEventListener(
    "show",
    (e) => {
      alert("the context menu will be displayed");
    },
    false
  );
</script>
```

## 仕様書

このイベントは標準化が行われていません。

## ブラウザーの互換性

{{Compat}}
