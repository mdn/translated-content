---
title: プログレッシブウェブアプリリファレンス
short-title: リファレンス
slug: Web/Progressive_web_apps/Reference
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

このリファレンスでは、[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) が優れた使い心地をユーザーに提供するために利用できるテクノロジー、機能、API について説明しています。

## ウェブアプリマニフェスト

- [ウェブアプリマニフェストのメンバー](/ja/docs/Web/Progressive_web_apps/Manifest)
  - : 開発者はウェブアプリマニフェストのメンバーを使用して、PWAを記述し、外観をカスタマイズし、さらに深くOSに統合することができます。

## サービスワーカー API

### アプリとのコミュニケーション

以下の API は、サービスワーカーが関連付けられたクライアント PWA と通信するために使用できます。

- [`Client.postMessage()`](/ja/docs/Web/API/Client/postMessage)
  - : サービスワーカーがクライアント PWA にメッセージを送信できるようにします。
- [ブロードキャストチャンネル API](/ja/docs/Web/API/Broadcast_Channel_API)
  - : サービスワーカーとそのクライアントである PWA が、基本的な双方向通信チャネルを確立できるようにします。

### オフライン操作

サービスワーカーがオフラインで動作するアプリを作成するために使用できる API は次のとおりです。

- [`Cache`](/ja/docs/Web/API/Cache)
  - : HTTP レスポンス用の永続的なストレージメカニズムです。アプリがオフラインの際に再利用可能なアセットを保存するために使用されます。
- [`Clients`](/ja/docs/Web/API/Clients)
  - : サービスワーカーによって制御されているドキュメントへのアクセスを提供する際に使用されるインターフェイスです。
- [`FetchEvent`](/ja/docs/Web/API/FetchEvent)
  - : クライアント PWA によるすべての HTTP リクエストで、サービスワーカーに配信されるイベントです。このイベントは、通常通りリクエストをサーバーに送信し、そのレスポンスを将来のために保存するか、リクエストを傍受して、以前にキャッシュしたレスポンスを即座に返すために使用できます。

### バックグラウンド操作

以下の API は、サービスワーカーが使用することで、アプリが実行されていない場合でも、バックグラウンドでタスクを実行することができます。

- [バックグラウンド同期 API](/ja/docs/Web/API/Background_Synchronization_API)
  - : サービスワーカーで実行されるタスクを、ネットワーク接続が安定するまで延期する方法です。
- [ウェブ定期バックグラウンド同期 API](/ja/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : ネットワーク接続時に、サービスワーカーで定期的に実行するタスクを登録する方法です。
- [バックグラウンドフェッチ API](/ja/docs/Web/API/Background_Fetch_API)
  - : サービスワーカーが、動画や音声ファイルなど、かなりの時間を要するダウンロードを管理するための方法です。

## その他の Web API

- [IndexedDB](/ja/docs/Web/API/IndexedDB_API)
  - : ファイルを含む大量の構造化データ用のクライアントサイドストレージ API。
- [バッジ API](/ja/docs/Web/API/Badging_API)
  - : アプリケーションのアイコンにバッジを設定する方法で、邪魔にならない通知を提供します。
- [通知 API](/ja/docs/Web/API/Notifications_API)
  - : オペレーティングシステムレベルで表示される通知を送信する方法。
- [ウェブ共有 API](/ja/docs/Web/API/Web_Share_API)
  - : ユーザーが自分の端末上で選択した他のアプリと、テキスト、リンク、ファイル、その他のコンテンツを共有する仕組みです。
- [ウィンドウ制御オーバーレイ API](/ja/docs/Web/API/Window_Controls_Overlay_API)
  - : デスクトップ OS にインストールされた PWA 用の API で、既定のウィンドウタイトルバーを非表示にし、アプリウィンドウの全面にアプリを表示できるようにします。
