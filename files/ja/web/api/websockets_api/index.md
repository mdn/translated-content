---
title: WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
tags:
  - API
  - クライアント
  - 通信
  - 概要
  - サーバー
  - 双方向
  - WebSocket
  - WebSocket API
  - ウェブソケット
  - データ
  - 対話
translation_of: Web/API/WebSockets_API
---
{{DefaultAPISidebar("Websockets API")}}

**WebSocket API** は、ユーザーのブラウザーとサーバー間で対話的な通信セッションを開くことができる先進技術です。この API によって、サーバーにメッセージを送信したり、応答をサーバーにポーリングすることなく、イベント駆動型のレスポンスを受信したりすることができます。

> **Note:** WebSocket のコネクションは機能的にどこか標準 Unix スタイルのソケットに似ていますが、関連はありません。

## インターフェイス

- [`WebSocket`](/ja/docs/Web/API/WebSocket)
  - : WebSocket サーバーに接続し、その接続を通じてデータを送受信するための主要インターフェイス
- [`CloseEvent`](/ja/docs/Web/API/CloseEvent)
  - : 接続が閉じた時に WebSocket オブジェクトによって送信されるイベントです。
- [`MessageEvent`](/ja/docs/Web/API/MessageEvent)
  - : サーバーからメッセージを受信した時に WebSocket オブジェクトによって送信されるイベント

## ガイド

- [WebSocket クライアントアプリケーションの記述](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [WebSocket サーバーの記述](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [WebSocket サーバーを C# で書く](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [WebSocket サーバーを Java で書く](/ja/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)

## ツール

- [AsyncAPI](https://www.asyncapi.com/): WebSocket のようなイベントドリブン型アーキテクチャを記述するための仕様です。 OpenAPI 仕様で REST API を記述するのと同じように、 WebSocket ベースの API を記述するために使用することができます。 [WebSocket で AsyncAPI の利用を検討すべき理由](https://www.asyncapi.com/blog/websocket-part1)と[利用する方法](https://www.asyncapi.com/blog/websocket-part2)を紹介します。
- [HumbleNet](https://hacks.mozilla.org/2017/06/introducing-humblenet-a-cross-platform-networking-library-that-works-in-the-browser/): ブラウザーで動作するクロスプラットフォームのネットワークライブラリです。ブラウザー間の違いを抽象化する WebSocket や WebRTC の C ラッパー、ゲームやその他のアプリで複数ユーザーのネットワーク機能を作成するものから成ります。
- [µWebSockets](https://github.com/uWebSockets/uWebSockets): [C++11](https://isocpp.org/) および [Node.js](https://nodejs.org) で書かれた可用性の高い WebSocket サーバーとクライアントの実装です。
- [ClusterWS](https://github.com/ClusterWS/ClusterWS): [Node.js](https://nodejs.org) でスケーラブルな WebSocket アプリケーションを構築する、軽量で高速で強力なフレームワークです。
- [CWS](https://github.com/ClusterWS/cWS): Node.js のための高速な C++ による WebSocket の実装です (uWebSockets v0.14 のフォーク)
- [Socket.IO](https://socket.io): 長いポーリングと WevSocket ベースのサードバーティ―の [Node.js](https://nodejs.org) 用転送プロトコルです。
- [SocketCluster](http://socketcluster.io/): スケーラビリティに焦点を当てた [Node.js](https://nodejs.org) 用の pub/sub WebSocket フレームワークです。
- [WebSocket-Node](https://github.com/Worlize/WebSocket-Node): [Node.js](https://nodejs.org) 用の WebSocket サーバー API 実装です。
- [Total.js](http://www.totaljs.com): [Node.js](https://www.nodejs.org) 用の ウェブアプリケーションフレームワーク(使用例: [WebSocket chat](https://github.com/totaljs/examples/tree/master/websocket))
- [Faye](https://www.npmjs.com/package/faye-websocket): [Node.js](https://nodejs.org) 用の [WebSocket](/ja/docs/Web/API/WebSockets_API) (双方向接続) と [EventSource](/ja/docs/Web/API/EventSource/) (片方向接続) サーバーおよびクライアント
- [SignalR](http://signalr.net/): SignalR は単一のコードだけで、もし WebSockets が使用可能な場合、基盤として WebSockets を使用し、そうでない場合はほかの代替技術にフォールバックします。
- [Caddy](https://caddyserver.com/docs/websocket): WebSocket として任意のコマンド (stdin/stdout) を中継することができるウェブサーバーです。
- [ws](https://github.com/websockets/ws): [Node.js](https://nodejs.org/) のための有名な WebSocket クライアント＆サーバーライブラリです。
- [jsonrpc-bidirectional](https://github.com/bigstepinc/jsonrpc-bidirectional): 非同期の RPC で、単一の接続を用いて、サーバー上にエクスポートされた機能と、同時にクライアント上のものがあります (クライアントがサーバーを呼び出すことができ、サーバーもクライアントを呼び出すことができます)。
- [cowboy](https://github.com/ninenines/cowboy): Cowboy は高速で最新の HTTP サーバーで、 Erlang/OTP のためのものであり、 WebSocket に対応しています。
- [WebSocket King](https://websocketking.com): WebSocket サーバーの開発、テスト、作業を支援するクライアントツールです。
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): WebSockset の wss:\// または ws:\// および通常ソケットの ssl:\//, tcp:\// を介して接続を処理するために PHP で書かれたサーバーです。
- [Channels](https://channels.readthedocs.io/en/stable/index.html): WebSocket（および長時間動作する非同期接続を必要とする他のプロトコル）の対応を追加する Django ライブラリーです。
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): Flask アプリケーションに、クライアントとサーバー間の低遅延な双方向通信を提供します。
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket は、WebSocket プロトコルの [Go](https://golang.org/) による実装です。

## 関連トピック

- [AJAX](/ja/docs/Web/Guide/AJAX)
- [JavaScript](/ja/docs/Web/JavaScript)

## 仕様書

| 仕様書                                                                                     |
| ------------------------------------------------------------------------------------------------- |
| [HTML Living Standard # network](https://html.spec.whatwg.org/multipage/web-sockets.html#network) |
| [RFC 6455, The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)                 |

## ブラウザーの互換性

{{Compat("api.WebSocket")}}

## 関連情報

- [RFC 6455 — The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket API Specification](https://www.w3.org/TR/websockets/)
- [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events)
