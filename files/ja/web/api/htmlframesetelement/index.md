---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`HTMLFrameSetElement`** インターフェイスは、(継承している普通の {{domxref("HTMLElement")}} インターフェイスに加えて) {{HTMLELEment("frameset")}} 要素を操作するための特別なプロパティを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親の {{domxref("HTMLElement")}} からプロパティを継承します。_

- {{domxref("HTMLFrameSetElement.cols")}} {{deprecated_inline}}
  - : 文字列で、フレームセット内の各カラムの幅を表すコンマ区切りのリストです。
- {{domxref("HTMLFrameSetElement.rows")}} {{deprecated_inline}}
  - : 文字列で、フレームセット内の各カラムの高さを表すコンマ区切りのリストです。

## インスタンスメソッド

_固有のメソッドはありませんが、親の {{domxref("HTMLElement")}} からメソッドを継承します。_

## イベントハンドラー

{{domxref("HTMLElement")}} のイベントを継承します。

以下の {{domxref("Window")}} `onXYZ` イベントハンドラープロパティは対象の `window` オブジェクトへのエイリアスとして利用可能です。とはいえ、`HTMLFrameSetElement` でリッスンするのではなく、`window` オブジェクトで直接リッスンすることを推奨します。

> [!NOTE]
> 以下に挙げる `onXYZ` イベントにおいて、`HTMLFrameSetElement` で `addEventListener()` を使っても動きません。かわりに {{domxref("window")}} オブジェクトでイベントをリッスンしてください。

- {{domxref("window.afterprint_event", "HTMLFrameSetElement.onafterprint")}}
  - : 関連付けられたドキュメントの印刷を開始したか、印刷プレビューが閉じられた後発火します。
- {{domxref("window.beforeprint_event", "HTMLFrameSetElement.onbeforeprint")}}
  - : 関連付けられたドキュメントを印刷しようとしているか、印刷プレビューを開いているとき発火します。
- {{domxref("window.beforeunload_event", "HTMLFrameSetElement.onbeforeunload")}}
  - : ウィンドウ、ドキュメント、リソースがアンロードされようとしているとき発火します。
- {{domxref("window.gamepadconnected_event", "HTMLFrameSetElement.ongamepadconnected")}}
  - : ゲームパッドが接続されたことをブラウザーが検出したか、ゲームパッドのボタンまたは軸が最初に操作されたとき発火します。
- {{domxref("window.gamepaddisconnected_event", "HTMLFrameSetElement.ongamepaddisconnected")}}
  - : ゲームパッドが切断されたことをブラウザーが検出したとき発火します。
- {{domxref("window.hashchange_event", "HTMLFrameSetElement.onhashchange")}}
  - : URL のフラグメント識別子 (URL のうち記号 `#` とその後の部分) が変更されたとき発火します。
- {{domxref("window.languagechange_event", "HTMLFrameSetElement.onlanguagechange")}}
  - : ユーザーが好む言語が変更されたとき発火します。
- {{domxref("window.message_event", "HTMLFrameSetElement.onmessage")}}
  - : ウインドウが (たとえば他の閲覧コンテキストで [`Window.postMessage()`](/ja/docs/Web/API/Window/postMessage) を呼び出して送信された) メッセージを受信したとき発火します。
- {{domxref("window.messageerror_event", "HTMLFrameSetElement.onmessageerror")}}
  - : ウインドウがデシリアライズできないメッセージを受信したとき発火します。
- {{domxref("window.offline_event", "HTMLFrameSetElement.onoffline")}}
  - : ブラウザーがネットワークにアクセスできなくなり、{{domxref("Navigator.onLine")}} の値が `false` に変化したとき発火します。
- {{domxref("window.online_event", "HTMLFrameSetElement.ononline")}}
  - : ブラウザーがネットワークにアクセスできるようになり、{{domxref("Navigator.onLine")}} の値が `true` に変化したとき発火します。
- {{domxref("window.pagehide_event", "HTMLFrameSetElement.onpagehide")}}
  - : ブラウザーがセッションの履歴から他のページを表示する処理の中で現在のページを隠したとき発火します。
- {{domxref("window.pageshow_event", "HTMLFrameSetElement.onpageshow")}}
  - : ブラウザーがナビゲーションによりウインドウのドキュメントを表示するとき発火します。
- {{domxref("window.popstate_event", "HTMLFrameSetElement.onpopstate")}}
  - : ユーザーがセッションの歴史をナビゲートする中で、アクティブな歴史のエントリーが変更されたとき発火します。
- {{domxref("window.rejectionhandled_event", "HTMLFrameSetElement.onrejectionhandled")}}
  - : JavaScript の {{jsxref("Promise")}} が拒否され、拒否がハンドルされたとき毎回発火します。
- {{domxref("window.storage_event", "HTMLFrameSetElement.onstorage")}}
  - : 他のドキュメントのコンテキストでストレージエリア (`localStorage`) が変更されたとき発火します。
- {{domxref("window.unhandledrejection_event", "HTMLFrameSetElement.onunhandledrejection")}}
  - : {{jsxref("Promise")}} が拒否され、拒否がハンドルされなかったとき毎回発火します。
- {{domxref("window.unload_event", "HTMLFrameSetElement.onunload")}}
  - : ドキュメントがアンロードされているとき発火します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("frameset")}}
- フレーム外でこの要素に相当するもの: {{domxref("HTMLFrameSetElement")}}
