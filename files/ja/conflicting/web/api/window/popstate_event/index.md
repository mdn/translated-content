---
title: WindowEventHandlers.onpopstate
slug: conflicting/Web/API/Window/popstate_event
tags:
  - API
  - イベントハンドラー
  - HTML DOM
  - HTML5
  - NeedsSpecTable
  - プロパティ
  - Window
  - イベント
translation_of: Web/API/WindowEventHandlers/onpopstate
original_slug: Web/API/WindowEventHandlers/onpopstate
browser-compat: api.WindowEventHandlers.onpopstate
---
{{APIRef}}

**`onpopstate`** は {{domxref("WindowEventHandlers")}} ミックスインのプロパティで、ウィンドウの [`popstate`](/ja/docs/Web/API/Window/popstate_event) イベントを処理するための[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)です。

`popstate` イベントは、同じ文書の2つの履歴項目の間で、アクティブな履歴項目が変わるたびにウィンドウに発行されます。アクティブな履歴項目が `history.pushState()` を呼び出したことで作成されたり、 `history.replaceState()` を呼び出したことで影響されたりした場合、 `popstate` イベントの状態オブジェクトが履歴項目の状態オブジェクトのコピーを保持します。

> **Note:** `history.pushState()` または `history.replaceState()` を呼び出すこと自体は、 `popstate` イベントのトリガーにはなりません。 `popstate` イベントは、戻るボタンをクリックしたり（または JavaScript で `history.back()` を呼び出したり）、同じ文書で 2 つの履歴項目間を移動したりするように、ブラウザーのアクションを実行することのみがトリガーになります。

## 構文

```js
window.onpopstate = funcRef;
```

- `funcRef` はハンドラー関数です。

## 例

例えば、`http://example.com/example.html` のページで次のコードを実行すると、示されているようにアラートを生成します。

```js
window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // "location: http://example.com/example.html?page=1, state: {"page":1}" とアラート
history.back(); // "location: http://example.com/example.html, state: null" とアラート
history.go(2);  // "location: http://example.com/example.html?page=3, state: {"page":3}" とアラート
```

なお、元の履歴項目（この場合は `http://example.com/example.html`）には関連付けられる状態オブジェクトがありませんが、それでも 2 回目の `history.back()` の呼び出し後に項目がアクティブになったとき、 `popstate` イベントが発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.history")}}
- [ブラウザーの履歴の操作](/ja/docs/Web/API/History_API)
- [AJAX ナビゲーションの例](/ja/docs/Web/API/History_API/Example)
