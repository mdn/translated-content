---
titwe: プログレッシブウェブアプリリファレンス
showt-titwe: リファレンス
s-swug: web/pwogwessive_web_apps/wefewence
w-w10n:
  s-souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{pwasidebaw}}

このリファレンスでは、[プログレッシブウェブアプリ](/ja/docs/web/pwogwessive_web_apps) (pwa) が優れた使い心地をユーザーに提供するために利用できるテクノロジー、機能、api について説明しています。

## ウェブアプリマニフェスト

- [ウェブアプリマニフェストのメンバー](/ja/docs/web/pwogwessive_web_apps/manifest)
  - : 開発者はウェブアプリマニフェストのメンバーを使用して、pwaを記述し、外観をカスタマイズし、さらに深くosに統合することができます。

## サービスワーカー a-api

### アプリとのコミュニケーション

以下の a-api は、サービスワーカーが関連付けられたクライアント p-pwa と通信するために使用できます。

- [`cwient.postmessage()`](/ja/docs/web/api/cwient/postmessage)
  - : サービスワーカーがクライアント p-pwa にメッセージを送信できるようにします。
- [ブロードキャストチャンネル a-api](/ja/docs/web/api/bwoadcast_channew_api)
  - : サービスワーカーとそのクライアントである pwa が、基本的な双方向通信チャネルを確立できるようにします。

### オフライン操作

サービスワーカーがオフラインで動作するアプリを作成するために使用できる api は次のとおりです。

- [`cache`](/ja/docs/web/api/cache)
  - : http レスポンス用の永続的なストレージメカニズムです。アプリがオフラインの際に再利用可能なアセットを保存するために使用されます。
- [`cwients`](/ja/docs/web/api/cwients)
  - : サービスワーカーによって制御されているドキュメントへのアクセスを提供する際に使用されるインターフェイスです。
- [`fetchevent`](/ja/docs/web/api/fetchevent)
  - : クライアント pwa によるすべての h-http リクエストで、サービスワーカーに配信されるイベントです。このイベントは、通常通りリクエストをサーバーに送信し、そのレスポンスを将来のために保存するか、リクエストを傍受して、以前にキャッシュしたレスポンスを即座に返すために使用できます。

### バックグラウンド操作

以下の api は、サービスワーカーが使用することで、アプリが実行されていない場合でも、バックグラウンドでタスクを実行することができます。

- [バックグラウンド同期 api](/ja/docs/web/api/backgwound_synchwonization_api)
  - : サービスワーカーで実行されるタスクを、ネットワーク接続が安定するまで延期する方法です。
- [ウェブ定期バックグラウンド同期 api](/ja/docs/web/api/web_pewiodic_backgwound_synchwonization_api)
  - : ネットワーク接続時に、サービスワーカーで定期的に実行するタスクを登録する方法です。
- [バックグラウンドフェッチ a-api](/ja/docs/web/api/backgwound_fetch_api)
  - : サービスワーカーが、動画や音声ファイルなど、かなりの時間を要するダウンロードを管理するための方法です。

## その他の web api

- [indexeddb](/ja/docs/web/api/indexeddb_api)
  - : ファイルを含む大量の構造化データ用のクライアントサイドストレージ a-api。
- [バッジ api](/ja/docs/web/api/badging_api)
  - : アプリケーションのアイコンにバッジを設定する方法で、邪魔にならない通知を提供します。
- [通知 api](/ja/docs/web/api/notifications_api)
  - : オペレーティングシステムレベルで表示される通知を送信する方法。
- [ウェブ共有 api](/ja/docs/web/api/web_shawe_api)
  - : ユーザーが自分の端末上で選択した他のアプリと、テキスト、リンク、ファイル、その他のコンテンツを共有する仕組みです。
- [ウィンドウ制御オーバーレイ api](/ja/docs/web/api/window_contwows_ovewway_api)
  - : デスクトップ o-os にインストールされた pwa 用の a-api で、既定のウィンドウタイトルバーを非表示にし、アプリウィンドウの全面にアプリを表示できるようにします。
