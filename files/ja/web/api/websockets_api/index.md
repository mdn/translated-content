---
title: WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: f49de43625cd621fd73c7ba2e9a2db3d8566580f
---

{{DefaultAPISidebar("WebSockets API")}}

**WebSocket API** は、ユーザーのブラウザーとサーバー間で対話的な通信セッションを開くことができるものです。この API を使用すると、サーバーにメッセージを送信し、サーバーから返信をポーリングすることなく応答を受信することができます。

WebSocket API は、ウェブソケット接続を作成して使用するための、{{domxref("WebSocket")}} インターフェイスと {{domxref("WebSocketStream")}} インターフェイスという 2 つの異なるメカニズムを提供しています。

- `WebSocket` インターフェイスは安定しており、ブラウザーとサーバーの対応も充実しています。しかし、[背圧](/ja/docs/Web/API/Streams_API/Concepts#背圧)には対応していません。そのため、アプリケーションがメッセージを処理するよりも速いペースでメッセージが到着すると、メッセージをバッファーに保存することで端末のメモリーがいっぱいになったり、CPU 使用率が 100% になって応答不能になったり、あるいはその両方が起こります。
- `WebSocketStream` インターフェイスは、`WebSocket` の{{jsxref("Promise","プロミス","","nocode")}}ベースの別バージョンです。[ストリーム API](/ja/docs/Web/API/Streams_API) を使用してメッセージの送受信を処理し、ソケット接続がストリームの背圧を自動的に利用できます。つまり、アプリケーションのボトルネックを避けるために読み取りまたは書き込みの速度を調整できます。しかし、`WebSocketStream` は標準化されておらず、現在、1 つのレンダリングエンジンしか対応していません。

それに加えて、[WebTransport API](/ja/docs/Web/API/WebTransport_API) が多くのアプリケーションで WebSocket API に取って代わることも予想されます。WebTransport は、汎用性の高い低レベル API で、背圧や、`WebSocket` や `WebSocketStream` では対応していない機能、例えば、一方向ストリーム、順不同配信、データグラムを介した信頼性の低いデータ転送など、他にも多くの機能を提供します。WebTransport は WebSocket よりも複雑で、ブラウザーの対応も限定的ですが、高度なソリューションの実装が可能です。標準の WebSocket 接続が用途に適しており、幅広いブラウザーとの互換性が必要な場合は、WebSockets API を用いてすばやく実装し、実行することができます。しかし、アプリケーションに標準以外のカスタムソリューションが要求される場合は、WebTransport API を使用すべきでしょう。

> [!NOTE]
> WebSocket の接続は機能的にどこか標準 Unix スタイルのソケットに似ていますが、関連はありません。

## インターフェイス

- [`WebSocket`](/ja/docs/Web/API/WebSocket)
  - : WebSocket サーバーに接続し、その接続を通じてデータを送受信するための主要インターフェイス
- [`WebSocketStream`](/ja/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : WebSocket サーバーに接続するためのプロミスベースのインターフェイス。[ストリーム](/ja/docs/Web/API/Streams_API)を使用して接続上のデータの送受信を行います。
- [`CloseEvent`](/ja/docs/Web/API/CloseEvent)
  - : 接続が閉じた時に WebSocket オブジェクトによって送信されるイベントです。
- [`MessageEvent`](/ja/docs/Web/API/MessageEvent)
  - : サーバーからメッセージを受信した時に WebSocket オブジェクトによって送信されるイベント

## 関連 HTTP ヘッダー

[WebSocket のハンドシェイク](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#websocket_ハンドシェイク)では、HTTP ヘッダーが使用されます。

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : クライアントからのノンスを保持する HTTP リクエストヘッダー。
    これは、[WebSocket 開始時のハンドシェイク](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#websocket_ハンドシェイク)で使用され、クライアントが明示的に WebSocket を開く意図があることを確認します。 ブラウザーによって自動的に追加されます。
    ブラウザーによって自動的に追加されます。
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : WebSocket の開くためのハンドシェイクで使用する HTTP {{glossary("response header","レスポンスヘッダー")}}で、サーバーが WebSocket 接続へのアップグレードを望んでいることを示します。
    ディレクティブの値は、対応するリクエストの `Sec-WebSocket-Key` の値から計算されます。
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : リクエストで、クライアントが理解する WebSocket プロトコルのバージョンを示す HTTP ヘッダー。
    レスポンスでは、リクエストされたプロトコルバージョンがサーバーで対応していない場合にのみ送信され、サーバーが対応しているバージョンが掲載されています。
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : リクエストでは、クライアントが対応しているサブプロトコルを推奨する順番で示す HTTP ヘッダーです。
    レスポンスでは、サーバーがクライアントの環境設定から選択したサブプロトコルを示します。
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : リクエストでは、クライアントが対応している WebSocket 拡張機能を推奨する順番で示す HTTP ヘッダーです。
    レスポンスでは、サーバーがクライアントの環境設定から選択した拡張機能です。

## ガイド

- [WebSocket クライアントアプリケーションを書く](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [WebSocket サーバーの記述](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [WebSocket サーバーを C# で書く](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [WebSocket サーバーを Java で書く](/ja/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [WebSocket サーバーを JavaScript (Deno) で書く](/ja/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [WebSocketStream を用いてクライアントを書く](/ja/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## ツール

- [AsyncAPI](https://www.asyncapi.com/): WebSocket のようなプロトコルに基づいたイベントドリブン型アーキテクチャを記述するための仕様です。 OpenAPI 仕様で REST API を記述するのと同じように、 WebSocket ベースの API を記述するために使用することができます。 [WebSocket で AsyncAPI の利用を検討すべき理由](https://www.asyncapi.com/blog/websocket-part1)と[利用する方法](https://www.asyncapi.com/blog/websocket-part2)を紹介します。
- [µWebSockets](https://github.com/uNetworking/uWebSockets): [C++11](https://isocpp.org/) および [Node.js](https://nodejs.org) で書かれた可用性の高い WebSocket サーバーとクライアントの実装です。
- [Socket.IO](https://socket.io): 長いポーリングと WebSocket ベースのサードバーティ―の [Node.js](https://nodejs.org) 用転送プロトコルです。
- [SocketCluster](https://socketcluster.io/): スケーラビリティに焦点を当てた [Node.js](https://nodejs.org) 用の pub/sub WebSocket フレームワークです。
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): [Node.js](https://nodejs.org) 用の WebSocket サーバー API 実装です。
- [Total.js](https://www.totaljs.com): [Node.js](https://nodejs.org/en/) 用の ウェブアプリケーションフレームワーク(使用例: [WebSocket chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/ja/apps/aspnet/signalr): SignalR は単一のコードだけで、もし WebSockets が使用可能な場合、基盤として WebSockets を使用し、そうでない場合はほかの代替技術にフォールバックします。
- [Caddy](https://caddyserver.com/): WebSocket として任意のコマンド (stdin/stdout) を中継することができるウェブサーバーです。
- [ws](https://github.com/websockets/ws): [Node.js](https://nodejs.org/) のための有名な WebSocket クライアント＆サーバーライブラリーです。
- [cowboy](https://github.com/ninenines/cowboy): Cowboy は高速で最新の HTTP サーバーで、 Erlang/OTP のためのものであり、 WebSocket に対応しています。
- [ZeroMQ](https://zeromq.org): ZeroMQ は、インプロセス、IPC、TCP、UDP、TIPC、マルチキャスト、WebSocket でメッセージを伝送する組み込み可能なネットワーキングライブラリーです。
- [WebSocket King](https://websocketking.com): WebSocket サーバーの開発、テスト、作業を支援するクライアントツールです。
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): WebSocket の wss:\// または ws:\// および通常ソケットの ssl:\//, tcp:\// を介して接続を処理するために PHP で書かれたサーバーです。
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): WebSocket（および長時間動作する非同期接続を必要とする他のプロトコル）の対応を追加する Django ライブラリーです。
- [(Phoenix) Channels](https://hexdocs.pm/phoenix/channels.html): Elixir Phoenix フレームワークで WebSocket を使用したスケーラブルなリアルタイム通信です。
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Elixir Phoenix フレームワークで WebSocket によるリアルタイムの対話型ウェブ体験です。
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): Flask アプリケーションに、クライアントとサーバー間の低遅延な双方向通信を提供します。
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket は、WebSocket プロトコルの [Go](https://go.dev/) による実装です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [RFC 6455 — The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket API Specification](https://websockets.spec.whatwg.org/)
- [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events)
