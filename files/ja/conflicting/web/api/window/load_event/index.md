---
title: GlobalEventHandlers.onload
slug: conflicting/Web/API/Window/load_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - onload
translation_of: Web/API/GlobalEventHandlers/onload
original_slug: Web/API/GlobalEventHandlers/onload
browser-compat: api.GlobalEventHandlers.onload
---
{{ApiRef()}}

**`onload`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、{{domxref("Window")}}、{{domxref("XMLHttpRequest")}}、{{htmlelement("img")}} 要素などで発生した {{event("load")}} イベントを処理する[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)です。

`load` イベントは指定されたリソースの読み込みが完了したときに発行されます。

## 構文

```js
target.onload = functionRef;
```

### 値

`functionRef` は、ウィンドウの `load` イベントが発行されたときに呼び出されるハンドラー関数です。

## 例

```js
window.onload = function() {
  init();
  doSomethingElse();
};
```

```html
<!doctype html>
<html>
  <head>
    <title>onload test</title>
    // ES5
    <script>
      function load() {
        console.log("load イベントが検出されました。");
      }
      window.onload = load;
    </script>
    // ES2015
    <script>
      const load = () => {
        console.log("load イベントが検出されました。");
      }
      window.onload = load;
    </script>
  </head>
  <body>
    <p>load イベントは、文書の読み込みが完了したときに発行されます。</p>
  </body>
</html>
```

## メモ

`load` イベントは文書の読み込み工程の終了時に発行されます。このイベントが発行された時点で、文書中のすべてのオブジェクトが DOM 内にあり、すべての画像、スクリプト、サブフレームの読み込みが完了しています。

`DOMContentLoaded` や `DOMFrameContentLoaded` のような [DOM イベント](/ja/docs/Web/Events) ({{domxref("EventTarget.addEventListener()")}} で扱うことが可能) もありますが、これらはこのページの DOM が構築された後、他のリソースの読み込みが完了する前に発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Event("load")}} イベント
- `DOMContentLoaded` イベント ([イベントの待ち受け: 単純な DOM イベント](/ja/docs/Listening_to_events_in_Firefox_extensions#Simple_DOM_events)内)
- IIFE [Immediately-invoked function expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
