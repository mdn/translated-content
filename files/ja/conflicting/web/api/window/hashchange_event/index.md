---
title: WindowEventHandlers.onhashchange
slug: conflicting/Web/API/Window/hashchange_event
tags:
  - Event Handler
  - HTML DOM
  - Hash
  - Property
  - Reference
  - URL & Hash
  - WindowEventHandlers
translation_of: Web/API/WindowEventHandlers/onhashchange
original_slug: Web/API/WindowEventHandlers/onhashchange
---
{{APIRef("HTML DOM")}}

{{domxref("WindowEventHandlers")}} ミックスインの **`onhashchange`** プロパティは、[`hashchange`](/ja/docs/Web/API/Window/hashchange_event) イベントを処理するための {{event("Event_handlers", "event handler")}} です。

`hashchange` イベントは、ウィンドウのハッシュが変更されると発生します（{{domxref("Window.location")}} および {{domxref("HTMLHyperlinkElementUtils.hash")}} を参照）。

## 構文

**イベントハンドラの使用**

```
window.onhashchange = funcRef;
```

**HTML イベントハンドラの使用**

```
<body onhashchange="funcRef();">
```

**イベントリスナーの使用**

イベントリスナーを追加するには、{{domxref("EventTarget.addEventListener()", "addEventListener()")}} を使用します。

```
window.addEventListener("hashchange", funcRef, false);
```

### パラメーター

- `funcRef`
  - : 関数への参照。

## 例

### イベントハンドラの使用

この例では、イベントハンドラ（`window.onhashchange`）を使用して、新しいハッシュ値が変更されるたびにチェックします。 それが `#cool-feature` と等しい場合、スクリプトはコンソールにメッセージを記録します。

```js
function locationHashChanged() {
  if (location.hash === '#cool-feature') {
    console.log("あなたはクールな機能を訪れています！");
  }
}

window.onhashchange = locationHashChanged;
```

### イベントリスナーの使用

この例では、イベントリスナーを使用して、ハッシュが変更されるたびに通知を記録します。

```js
function hashHandler() {
  console.log('ハッシュが変更されました！');
}

window.addEventListener('hashchange', hashHandler, false);
```

### ハッシュのオーバーライド

この関数は、新しいハッシュを動的に設定し、2 つの値のいずれかにランダムに設定します。

```js
function changeHash() {
  location.hash = (Math.random() > 0.5) ? 'location1' : 'location2';
}
```

## hashchange イベント

送出された `hashchange` イベントには、次のプロパティがあります。

| フィールド | 型          | 説明                                     |
| ---------- | ----------- | ---------------------------------------- |
| `newURL`   | `DOMString` | ウィンドウがナビゲートされた新しい URL。 |
| `oldURL`   | `DOMString` | ウィンドウがナビゲートされる前の URL。   |

### event.newURL および event.oldURL のポリフィル

```js
// hashchange イベントを登録するコードの前にこのスニペットを実行してください
if (!window.HashChangeEvent)(function(){
  var lastURL = document.URL;
  window.addEventListener("hashchange", function(event){
    Object.defineProperty(event, "oldURL", {enumerable:true,configurable:true,value:lastURL});
    Object.defineProperty(event, "newURL", {enumerable:true,configurable:true,value:document.URL});
    lastURL = document.URL;
  });
}());
```

## 仕様

| 仕様                                                                                                 | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#handler-window-onhashchange', 'onhashchange')}} | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}         | {{Spec2('HTML5.1')}}     |          |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     |          |

## ブラウザーの互換性

{{Compat("api.WindowEventHandlers.onhashchange")}}

## 関連情報

- [`hashchange`](/ja/docs/Web/API/Window/hashchange_event) イベント
- [ブラウザーの履歴の操作](/ja/docs/DOM/Manipulating_the_browser_history)
- [`history.pushState()` メソッドと `history.replaceState()` メソッド](/ja/docs/DOM/window.history)
- {{domxref("WindowEventHandlers.onpopstate")}}
- {{domxref("HTMLHyperlinkElementUtils.hash")}}
