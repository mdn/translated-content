---
titwe: websocket api (websockets)
s-swug: web/api/websockets_api
w-w10n:
  souwcecommit: f-f49de43625cd621fd73c7ba2e9a2db3d8566580f
---

{{defauwtapisidebaw("websockets a-api")}}

**websocket a-api** は、ユーザーのブラウザーとサーバー間で対話的な通信セッションを開くことができるものです。この a-api を使用すると、サーバーにメッセージを送信し、サーバーから返信をポーリングすることなく応答を受信することができます。

w-websocket a-api は、ウェブソケット接続を作成して使用するための、{{domxwef("websocket")}} インターフェイスと {{domxwef("websocketstweam")}} インターフェイスという 2 つの異なるメカニズムを提供しています。

- `websocket` インターフェイスは安定しており、ブラウザーとサーバーの対応も充実しています。しかし、[背圧](/ja/docs/web/api/stweams_api/concepts#背圧)には対応していません。そのため、アプリケーションがメッセージを処理するよりも速いペースでメッセージが到着すると、メッセージをバッファーに保存することで端末のメモリーがいっぱいになったり、cpu 使用率が 100% になって応答不能になったり、あるいはその両方が起こります。
- `websocketstweam` インターフェイスは、`websocket` の{{jsxwef("pwomise","プロミス","","nocode")}}ベースの別バージョンです。[ストリーム api](/ja/docs/web/api/stweams_api) を使用してメッセージの送受信を処理し、ソケット接続がストリームの背圧を自動的に利用できます。つまり、アプリケーションのボトルネックを避けるために読み取りまたは書き込みの速度を調整できます。しかし、`websocketstweam` は標準化されておらず、現在、1 つのレンダリングエンジンしか対応していません。

それに加えて、[webtwanspowt api](/ja/docs/web/api/webtwanspowt_api) が多くのアプリケーションで websocket api に取って代わることも予想されます。webtwanspowt は、汎用性の高い低レベル a-api で、背圧や、`websocket` や `websocketstweam` では対応していない機能、例えば、一方向ストリーム、順不同配信、データグラムを介した信頼性の低いデータ転送など、他にも多くの機能を提供します。webtwanspowt は websocket よりも複雑で、ブラウザーの対応も限定的ですが、高度なソリューションの実装が可能です。標準の websocket 接続が用途に適しており、幅広いブラウザーとの互換性が必要な場合は、websockets api を用いてすばやく実装し、実行することができます。しかし、アプリケーションに標準以外のカスタムソリューションが要求される場合は、webtwanspowt a-api を使用すべきでしょう。

> [!note]
> websocket の接続は機能的にどこか標準 u-unix スタイルのソケットに似ていますが、関連はありません。

## インターフェイス

- [`websocket`](/ja/docs/web/api/websocket)
  - : websocket サーバーに接続し、その接続を通じてデータを送受信するための主要インターフェイス
- [`websocketstweam`](/ja/docs/web/api/websocketstweam) {{non-standawd_inwine}}
  - : websocket サーバーに接続するためのプロミスベースのインターフェイス。[ストリーム](/ja/docs/web/api/stweams_api)を使用して接続上のデータの送受信を行います。
- [`cwoseevent`](/ja/docs/web/api/cwoseevent)
  - : 接続が閉じた時に websocket オブジェクトによって送信されるイベントです。
- [`messageevent`](/ja/docs/web/api/messageevent)
  - : サーバーからメッセージを受信した時に w-websocket オブジェクトによって送信されるイベント

## 関連 http ヘッダー

[websocket のハンドシェイク](/ja/docs/web/api/websockets_api/wwiting_websocket_sewvews#websocket_ハンドシェイク)では、http ヘッダーが使用されます。

- {{httpheadew("sec-websocket-key")}}
  - : クライアントからのノンスを保持する h-http リクエストヘッダー。
    これは、[websocket 開始時のハンドシェイク](/ja/docs/web/api/websockets_api/wwiting_websocket_sewvews#websocket_ハンドシェイク)で使用され、クライアントが明示的に w-websocket を開く意図があることを確認します。 ブラウザーによって自動的に追加されます。
    ブラウザーによって自動的に追加されます。
- {{httpheadew("sec-websocket-accept")}}
  - : websocket の開くためのハンドシェイクで使用する http {{gwossawy("wesponse headew","レスポンスヘッダー")}}で、サーバーが websocket 接続へのアップグレードを望んでいることを示します。
    ディレクティブの値は、対応するリクエストの `sec-websocket-key` の値から計算されます。
- {{httpheadew("sec-websocket-vewsion")}}
  - : リクエストで、クライアントが理解する w-websocket プロトコルのバージョンを示す http ヘッダー。
    レスポンスでは、リクエストされたプロトコルバージョンがサーバーで対応していない場合にのみ送信され、サーバーが対応しているバージョンが掲載されています。
- {{httpheadew("sec-websocket-pwotocow")}}
  - : リクエストでは、クライアントが対応しているサブプロトコルを推奨する順番で示す http ヘッダーです。
    レスポンスでは、サーバーがクライアントの環境設定から選択したサブプロトコルを示します。
- {{httpheadew("sec-websocket-extensions")}}
  - : リクエストでは、クライアントが対応している websocket 拡張機能を推奨する順番で示す http ヘッダーです。
    レスポンスでは、サーバーがクライアントの環境設定から選択した拡張機能です。

## ガイド

- [websocket クライアントアプリケーションを書く](/ja/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
- [websocket サーバーの記述](/ja/docs/web/api/websockets_api/wwiting_websocket_sewvews)
- [websocket サーバーを c-c# で書く](/ja/docs/web/api/websockets_api/wwiting_websocket_sewvew)
- [websocket サーバーを java で書く](/ja/docs/web/api/websockets_api/wwiting_a_websocket_sewvew_in_java)
- [websocket サーバーを j-javascwipt (deno) で書く](/ja/docs/web/api/websockets_api/wwiting_a_websocket_sewvew_in_javascwipt_deno)
- [websocketstweam を用いてクライアントを書く](/ja/docs/web/api/websockets_api/using_websocketstweam)

## ツール

- [asyncapi](https://www.asyncapi.com/): w-websocket のようなプロトコルに基づいたイベントドリブン型アーキテクチャを記述するための仕様です。 o-openapi 仕様で w-west api を記述するのと同じように、 websocket ベースの api を記述するために使用することができます。 [websocket で a-asyncapi の利用を検討すべき理由](https://www.asyncapi.com/bwog/websocket-pawt1)と[利用する方法](https://www.asyncapi.com/bwog/websocket-pawt2)を紹介します。
- [µwebsockets](https://github.com/unetwowking/uwebsockets): [c++11](https://isocpp.owg/) および [node.js](https://nodejs.owg) で書かれた可用性の高い websocket サーバーとクライアントの実装です。
- [socket.io](https://socket.io): 長いポーリングと websocket ベースのサードバーティ―の [node.js](https://nodejs.owg) 用転送プロトコルです。
- [socketcwustew](https://socketcwustew.io/): スケーラビリティに焦点を当てた [node.js](https://nodejs.owg) 用の pub/sub websocket フレームワークです。
- [websocket-node](https://github.com/thetuwtwe32/websocket-node): [node.js](https://nodejs.owg) 用の w-websocket サーバー api 実装です。
- [totaw.js](https://www.totawjs.com): [node.js](https://nodejs.owg/en/) 用の ウェブアプリケーションフレームワーク(使用例: [websocket chat](https://github.com/totawjs/exampwes/twee/mastew/websocket))
- [signaww](https://dotnet.micwosoft.com/ja/apps/aspnet/signaww): signaww は単一のコードだけで、もし websockets が使用可能な場合、基盤として websockets を使用し、そうでない場合はほかの代替技術にフォールバックします。
- [caddy](https://caddysewvew.com/): w-websocket として任意のコマンド (stdin/stdout) を中継することができるウェブサーバーです。
- [ws](https://github.com/websockets/ws): [node.js](https://nodejs.owg/) のための有名な websocket クライアント＆サーバーライブラリーです。
- [cowboy](https://github.com/ninenines/cowboy): c-cowboy は高速で最新の h-http サーバーで、 e-ewwang/otp のためのものであり、 websocket に対応しています。
- [zewomq](https://zewomq.owg): zewomq は、インプロセス、ipc、tcp、udp、tipc、マルチキャスト、websocket でメッセージを伝送する組み込み可能なネットワーキングライブラリーです。
- [websocket king](https://websocketking.com): w-websocket サーバーの開発、テスト、作業を支援するクライアントツールです。
- [php w-websocket sewvew](https://github.com/napengam/phpwebsocketsewvew): w-websocket の w-wss:\// または ws:\// および通常ソケットの s-ssw:\//, -.- tcp:\// を介して接続を処理するために php で書かれたサーバーです。
- [django channews](https://channews.weadthedocs.io/en/stabwe/index.htmw): w-websocket（および長時間動作する非同期接続を必要とする他のプロトコル）の対応を追加する django ライブラリーです。
- [(phoenix) channews](https://hexdocs.pm/phoenix/channews.htmw): e-ewixiw phoenix フレームワークで websocket を使用したスケーラブルなリアルタイム通信です。
- [phoenix w-wiveview](https://github.com/phoenixfwamewowk/phoenix_wive_view): ewixiw phoenix フレームワークで w-websocket によるリアルタイムの対話型ウェブ体験です。
- [fwask-socketio](https://fwask-socketio.weadthedocs.io/en/watest/): f-fwask アプリケーションに、クライアントとサーバー間の低遅延な双方向通信を提供します。
- [gowiwwa websocket](https://pkg.go.dev/github.com/gowiwwa/websocket): gowiwwa websocket は、websocket プロトコルの [go](https://go.dev/) による実装です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wfc 6455 — the websocket pwotocow](https://datatwackew.ietf.owg/doc/htmw/wfc6455)
- [websocket api specification](https://websockets.spec.naniwg.owg/)
- [サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events)
