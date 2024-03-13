---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

**`HTMLBodyElement`** インターフェイスは、（通常の {{domxref("HTMLElement")}} インターフェイスから継承されるもの以外に） {{HtmlElement("body")}} 要素を操作するための特別なプロパティとメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLBodyElement.aLink")}} {{deprecated_inline}}
  - : 文字列で、アクティブなハイパーリンクの色を表します。
- {{domxref("HTMLBodyElement.background")}} {{deprecated_inline}}
  - : 文字列で、背景画像リソースの場所の説明を表します。これは URI ではないことに注意してください。ただし、一部のブラウザーの一部の古いバージョンはそれを想定しています。
- {{domxref("HTMLBodyElement.bgColor")}} {{deprecated_inline}}
  - : 文字列で、ドキュメントの背景色を表します。
- {{domxref("HTMLBodyElement.link")}} {{deprecated_inline}}
  - : 文字列で、未訪問のリンクの色を表します。
- {{domxref("HTMLBodyElement.text")}} {{deprecated_inline}}
  - : 文字列で、テキストの前景色を表します。
- {{domxref("HTMLBodyElement.vLink")}} {{deprecated_inline}}
  - : 文字列で、訪問済みのリンクの色を表します。

## インスタンスメソッド

_固有のメソッドはありません。 インターフェイスである {{domxref("HTMLElement")}} からメソッドを継承しています。_

## イベントハンドラー

{{domxref("HTMLElement")}} のイベントを継承しています。

以下の {{domxref("Window")}} の `onXYZ` イベントハンドラープロパティも、 `window` オブジェクトをターゲットとした別名として利用可能です。しかし、これらは `HTMLBodyElement` ではなく、 `window` オブジェクトで直接待ち受けすることをお勧めします。

> **メモ:** `addEventListener()` を `HTMLBodyElement` に対して使用しても、以下に示す `onXYZ` イベントハンドラーを動作させることができません。代わりに {{domxref("window")}} オブジェクトのイベントを待ち受けしてください。

- {{domxref("window.afterprint_event", "HTMLBodyElement.onafterprint")}}
  - : 文書の印刷を開始した後、または印刷プレビューが閉じられた後に発行されます。
- {{domxref("window.beforeprint_event", "HTMLBodyElement.onbeforeprint")}}
  - : 文書を印刷しようとしているとき、または印刷のためにプレビュしようとしているときに発行されます。
- {{domxref("window.beforeunload_event", "HTMLBodyElement.onbeforeunload")}}
  - : ウィンドウ、文書、およびそのリソースがアンロードされようとしているときに発行されます。
- {{domxref("window.gamepadconnected_event", "HTMLBodyElement.ongamepadconnected")}}
  - : ゲームパッドが接続されたことをブラウザーが検出したとき、またはゲームパッドのボタン／軸が初めて使用されたときに発行されます。
- {{domxref("window.gamepaddisconnected_event", "HTMLBodyElement.ongamepaddisconnected")}}
  - : ゲームパッドが切断されたことをブラウザーが検出したときに発行されます。
- {{domxref("window.hashchange_event", "HTMLBodyElement.onhashchange")}}
  - : URLのフラグメント識別子（URL の `#` で始まる部分とそれに続く部分）が変更されたときに発行されます。
- {{domxref("window.languagechange_event", "HTMLBodyElement.onlanguagechange")}}
  - : ユーザーの優先言語が変更されたときに発行されます。
- {{domxref("window.message_event", "HTMLBodyElement.onmessage")}}
  - : ウィンドウがメッセージを受け取ったときに発行されます。例えば、他の閲覧コンテキストから [`Window.postMessage()`](/ja/docs/Web/API/Window/postMessage) を呼び出した場合などに発行されます。
- {{domxref("window.messageerror_event", "HTMLBodyElement.onmessageerror")}}
  - : ウィンドウがデシリアライズできないメッセージを受信したときに発行されます。
- {{domxref("window.offline_event", "HTMLBodyElement.onoffline")}}
  - : ブラウザーがネットワークにアクセスできなくなり、 {{domxref("Navigator.onLine")}} の値が `false` に切り替わったときに発行されます。
- {{domxref("window.online_event", "HTMLBodyElement.ononline")}}
  - : ブラウザーがネットワークにアクセスし、 {{domxref("Navigator.onLine")}} の値が `true` に切り替わったときに発行されます。
- {{domxref("window.pagehide_event", "HTMLBodyElement.onpagehide")}}
  - : ブラウザーがセッションの履歴から別のページを表示する過程で、現在のページを非表示にしたときに発行されます。
- {{domxref("window.pageshow_event", "HTMLBodyElement.onpageshow")}}
  - : ブラウザーがナビゲーションによってウィンドウの文書を表示したときに発行されます。
- {{domxref("window.popstate_event", "HTMLBodyElement.onpopstate")}}
  - : ユーザーがセッション履歴を操作している間に、アクティブな履歴項目が変更されたときに発行されます。
- {{domxref("window.rejectionhandled_event", "HTMLBodyElement.onrejectionhandled")}}
  - : JavaScript のプロミス ({{jsxref("Promise")}}) が拒否され、拒否の処理が行われたときに発行されます。
- {{domxref("window.storage_event", "HTMLBodyElement.onstorage")}}
  - : 他の文書のコンテキストでストレージ領域 (`localStorage`) が変更されたときに発行されます。
- {{domxref("window.unhandledrejection_event", "HTMLBodyElement.onunhandledrejection")}}
  - : プロミス ({{jsxref("Promise")}}) が拒否されたが、拒否の処理が行われなかった場合に発行されます。
- {{domxref("window.unload_event", "HTMLBodyElement.onunload")}}
  - : ドキュメントがアンロードされるときに発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("body") }}
