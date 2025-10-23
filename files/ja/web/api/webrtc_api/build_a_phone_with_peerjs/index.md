---
title: PeerJS によるインターネット接続電話の構築
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{DefaultAPISidebar("WebRTC")}}

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}

WebRTC の主な課題の 1 つが、使用したり開発したりするのがかなり複雑だということです。シグナリングサービスを処理したり、正しいエンドポイントを呼び出すタイミングを把握したりすると、混乱してしまいます。しかし、良いニュースもあります。 [PeerJS](https://peerjs.com/) は WebRTC のフレームワークで、アプリケーションの機能に集中できるように、通信とシグナリングのロジックをすべて抽象化します。 PeerJS にはクライアント側のフレームワークとサーバーの 2 つの部分があります。

この一連の記事では、 PeerJS を使用して単純な電話アプリケーションを作成します。サーバーサイドフレームワークとクライアントサイドフレームワークの両方を使用しますが、ほとんどの作業はクライアントサイドのコードを扱うことになります。

### 前提条件

このチュートリアルは中級レベルです。このチュートリアルに挑戦する前に、次のものに親しんでいる必要があります。

- [バニラ JavaScript](/ja/docs/Web/JavaScript)
- [Node](https://nodejs.org/ja/docs/)
- [Express](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
- [HTML](/ja/docs/Web/HTML)

始める前に、 [node](https://nodejs.org/en/download/) と [Yarn](https://classic.yarnpkg.com/en/docs/install) がインストールされていることを確認してください（後の記事の説明では Yarn を想定していますが、推奨するなら [npm](https://docs.npmjs.com/getting-started/) や他のマネージャを使用するのも自由です）。

> [!NOTE]
> 手順を追うほうが学習しやすいという方には、この[コードによるチュートリアル](https://github.com/SamsungInternet/WebPhone/tree/master/tutorial)も提供していますので、代わりに使用してください。

### 目次

1. [セットアップ](/ja/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup)
2. [ピアの接続](/ja/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers)
   1. [マイクの使用権限を取得](/ja/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission)
   2. [HTML の表示と隠蔽](/ja/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html)
   3. [ピアコネクションの作成](/ja/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection)
   4. [呼び出しの作成](/ja/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call)
   5. [呼び出しへの応答](/ja/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call)
   6. [通話の終了](/ja/docs/Web/API/WebRTC_API/build_a_phone_with_peerjs/connect_peers/End_a_call)

3. [配布と追加の読み物](/ja/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Deployment_and_further_reading)

{{NextMenu("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup")}}
