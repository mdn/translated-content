---
title: GlobalEventHandlers.onabort
slug: Web/API/GlobalEventHandlers/onabort
tags:
  - API
  - イベントハンドラー
  - GlobalEventHandlers
  - NeedsContent
  - NeedsHelp
  - NeedsUpdate
  - プロパティ
  - リファレンス
  - Window
browser-compat: api.GlobalEventHandlers.onabort
translation_of: Web/API/GlobalEventHandlers/onabort
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

**`onabort`** は {{domxref("GlobalEventHandlers")}} ミックスインの[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)で、 HTMLMediaElement に対して送られた {{domxref("HTMLMediaElement/abort_event", "abort")}} イベントを処理します。

[文書の読み込みを中止するための標準](https://html.spec.whatwg.org/multipage/browsing-the-web.html#abort-a-document)が定義されていますが、 [HTML issue #3525](https://github.com/whatwg/html/issues/3525) では、ブラウザーは `onabort` が呼ばれるきっかけとなる `Window` の `abort` イベントを現在発生させてはいけないと提案しています。

TODO: 何が "abort" であるかを定義しなければなりません。ウィンドウマネージャーからウィンドウを閉じること？ページの読み込みを停止すること？どのような手段で、どのような理由で（ユーザー、ネットワーク/サーバー）？どの段階で発行/捕捉されるのでしょうか？ IE では、 `onabort` は `<img>` タグでのみ有効です。

## 構文

```js
window.onabort = functionRef;
```

### 値

`functionRef` は関数名または[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。

## 例

```js
window.onabort = function() {
  alert('Load aborted.');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

このプロパティは Firefox 2 や Safari では利用できません。