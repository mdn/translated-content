---
title: WindowEventHandlers.onstorage
slug: conflicting/Web/API/Window/storage_event
tags:
  - API
  - Event Handler
  - Property
  - Reference
  - Web Storage
  - WindowEventHandler
translation_of: Web/API/WindowEventHandlers/onstorage
original_slug: Web/API/WindowEventHandlers/onstorage
---
<div class="syntaxbox">{{ ApiRef() }}</div>

{{domxref("WindowEventHandlers")}} ミックスインの **`onstorage`** プロパティは、[`storage`](/ja/docs/Web/API/Window/storage_event) イベントを処理するための {{event("Event_handlers", "event handler")}} です。

`storage` イベントは、別のドキュメントのコンテキストでストレージ領域が変更されたときに発生します。

## 構文

```
 window.onstorage = functionRef;
```

### 値

`functionRef` は、関数名や[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。 この関数は、その唯一の引数として {{domxref("StorageEvent")}} を受け取ります。

## 例

この例では、別のドキュメントでストレージキーに対する値が変更されるたびに、それを記録します。

```js
window.onstorage = function(e) {
  console.log('キー ' + e.key +
    ' の値が ' + e.oldValue +
    ' から ' + e.newValue + ' に変更されました。');
};
```

## 仕様

| 仕様                                                                                                         | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-window-onstorage','onstorage')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onstorage")}}

## 関連情報

- [`Window: storage` イベント](/ja/docs/Web/API/Window/storage_event)
