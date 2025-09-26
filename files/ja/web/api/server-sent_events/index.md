---
title: サーバー送信イベント
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("Server Sent Events")}} {{AvailableInWorkers}}

伝統的には、ウェブページが新たなデータを受け取るために、サーバーにリクエストを送信しなければなりません。すなわち、ページがサーバーからデータを要求します。サーバー送信イベントによって、サーバーがウェブページにメッセージをプッシュ送信することにより、サーバーからウェブページへ新たなデータをいつでも送信することができます。入ってくるメッセージは、ウェブページ内の _[イベント](/ja/docs/Web/API/Event)およびデータ_ として扱うことができます。

{{AvailableInWorkers}}

> [!NOTE]
> Firefox は現在、サービスワーカーでのサーバー送信イベントの使用に対応していません（専用ワーカーと共有ワーカーでは対応しています）。 [Firefox バグ 1681218](https://bugzil.la/1681218) を参照してください。

## 概念と使用方法

サーバー送信イベントの使い方を学ぶには、[サーバー送信イベントの使用](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)を参照してください。

## インターフェイス

- {{domxref("EventSource")}}
  - : サーバーへの接続、イベントやデータの受信、エラー、コネクションの切断など、すべての機能の扱いを定義します。

## 例

- [PHP を使用した簡単な SSE のデモ](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## 仕様書

{{Specifications}}

## 関連情報

### ツール

- [Mercure: a real-time communication protocol (publish-subscribe) built on top of SSE](https://mercure.rocks/)
- [Node.js 向けの EventSource のポリフィル](https://github.com/EventSource/eventsource)
- Remy Sharp による [EventSource のポリフィル](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle の [EventSource のポリフィル](https://github.com/Yaffle/EventSource)
- Rick Waldron's [jquery plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [declarative SSE support](https://intercoolerjs.org/docs.html#sse)

### 関連トピック

- [サーバーからのデータ取得](/ja/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JavaScript](/ja/docs/Web/JavaScript)
- [WebSocket](/ja/docs/Web/API/WebSockets_API)

### その他のリソース

- [ウォール/フィードを作成するソーシャルアプリケーション](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) powered by server-sent events and [its code on GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
