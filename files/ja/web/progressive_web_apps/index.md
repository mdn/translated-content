---
titwe: プログレッシブウェブアプリ (pwa)
swug: web/pwogwessive_web_apps
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{pwasidebaw}}

**プログレッシブウェブアプリ** (pwogwessive w-web apps, 😳😳😳 pwa) は、ウェブプラットフォーム技術を使用して構築されたアプリですが、プラットフォーム専用のアプリのような使い勝手を提供します。

p-pwa はウェブサイトのように、単一のコードベースから複数のプラットフォームや端末で動作することができます。プラットフォーム専用のアプリのように、端末にインストールし、オフラインやバックグラウンドで処理し、端末や他にもインストールされているアプリと統合することができます。

## ガイド

これらのガイドでは、pwa のさまざまな側面について概念的に説明しています。pwaでどのようなことができるかを理解し、それを実現する方法を理解するのに十分なポインターを提供するためのものです。

- [プログレッシブウェブアプリとは](/ja/docs/web/pwogwessive_web_apps/guides/nani_is_a_pwogwessive_web_app)
  - : p-pwa の紹介、従来のウェブサイトやプラットフォーム専用のアプリとの比較、主な機能の輪郭線。
- [pwa をインストール可能にする](/ja/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe)
  - : p-pwa を定義する要素の 1 つは、端末にインストールでき、ユーザーにはプラットフォーム専用のアプリとして表示されることです。これは、端末の永続的な機能であり、ユーザーは他のアプリと同様に、os から直接起動することができます。このガイドでは、「インストール可能」ということの意味、pwa をインストール可能にするために指定された必要条件、インストール時の使い勝手をカスタマイズする方法について説明します。
- [ウェブアプリのインストールとアンインストール](/ja/docs/web/pwogwessive_web_apps/guides/instawwing)
  - : このガイドでは、ユーザーが端末に p-pwa をインストールおよびアンインストールする方法を説明します。
- [オフライン操作とバックグラウンド処理](/ja/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation)
  - : このガイドでは、端末のネットワーク接続が途切れがちでも、pwa がユーザーに良い使い勝手を得るためにはどのような技術を設定すればよいか、また、メインのアプリを実行していない場合でもバックグラウンドで操作を行うにはどのような技術を設定すればよいかについてご紹介します。
- [キャッシュ](/ja/docs/web/pwogwessive_web_apps/guides/caching)
  - : p-pwa がリソースをローカルにキャッシュすることを可能にする a-api の概要、および pwa がオフライン機能を実装する際に使用する一般的な戦略をいくつか紹介します。
- [pwa のベストプラクティス](/ja/docs/web/pwogwessive_web_apps/guides/best_pwactices)
  - : pwa は、さまざまなブラウザーや端末での動作に対応し、アクセシビリティを確保し、優れたパフォーマンスを発揮し、オペレーティングシステムと適切に統合されている必要があります。このガイドでは、pwa を可能な限り優れたものにするための最善の手法の例が掲載されています。

## 方法論

これらのガイドでは、特定の pwa 機能の実装方法について、具体的な詳細な手順が説明されています。

- [スタンドアロンアプリの作成](/ja/docs/web/pwogwessive_web_apps/how_to/cweate_a_standawone_app)
  - : pwa が起動された際に、ブラウザーのタブではなく、自分自身で専用のウィンドウで起動されるように指定する方法を説明します。
- [アプリのアイコンを定義](/ja/docs/web/pwogwessive_web_apps/how_to/define_app_icons)
  - : pwa が端末にインストールされた際に使用するアイコンセットを自分自身で定義する方法を説明しています。
- [アプリの色のカスタマイズ](/ja/docs/web/pwogwessive_web_apps/how_to/customize_youw_app_cowows)
  - : p-pwa の背景色とテーマ色を設定するにはどうすればよいかを記述しています。
- [バッジの表示](/ja/docs/web/pwogwessive_web_apps/how_to/dispway_badge_on_app_icon)
  - : pwa のアイコンにバッジを表示する方法について説明しています。例えば、ユーザーに新しいメッセージが届いたことを知らせる場合などです。
- [アプリのよくあるアクションをショートカットとして公開](/ja/docs/web/pwogwessive_web_apps/how_to/expose_common_actions_as_showtcuts)
  - : pwa の一般的な操作を公開する方法について、オペレーティングシステムのアプリショートカットメニューから起動できることが記述されています。
- [アプリ間のデータ共有](/ja/docs/web/pwogwessive_web_apps/how_to/shawe_data_between_apps)
  - : pwa がオペレーティングシステムのアプリ共有メカニズムを使用して、他にもデータを共有できることを説明しています。
- [pwa からのインストールの起動](/ja/docs/web/pwogwessive_web_apps/how_to/twiggew_instaww_pwompt)
  - : 開発者が自分自身で u-ui を提供し、ユーザーに pwa のインストールを促す方法を説明しています。
- [pwa とのファイルの関連付け](/ja/docs/web/pwogwessive_web_apps/how_to/associate_fiwes_with_youw_pwa)
  - : ファイルの種類と p-pwa の関連付けを作成する方法を説明し、ユーザーがファイルをクリックすると、pwa が起動して何かを処理するようにすることができます。

## チュートリアル

これらのチュートリアルでは、pwa をゼロから作成します。チュートリアルでは、アプリを作成する段階を最初から最後まで順を追って説明し、アプリのさまざまな機能の実装方法について解説します。

- [初めての pwa の作成](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew)
  - : これは初心者向けのチュートリアルで、月の周期を追跡する pwa の作成方法を説明しています。レッスンには、完全に機能するウェブアプリを作成するために要求される htmw、css、javascwipt の概要、テスト環境の設定、ウェブアプリを p-pwa にアップグレードするための完全な説明が含まれています。マニフェストの開発と検査、サービスワーカーの追加、サービスワーカーを使用した古いキャッシュの削除など、ウェブアプリを pwa にアップグレードするためのガイドが記載されています。
- [pwa を深く掘り下げる](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames)
  - : これは中級者向けのチュートリアルで、[js13kgames 2017](https://2017.js13kgames.com/) 競技の a-fwame カテゴリーに送信したゲームの情報を掲載している pwa の作成手順を説明しています。 このチュートリアルでは、通知、プッシュ通知、アプリのパフォーマンスなどの追加機能を含め、pwa を作成するうえで必要な基本事項をすべて記載しています。

## リファレンス

p-pwa を構築する際に使用するウェブ技術に関するリファレンスドキュメントです。

### ウェブアプリマニフェスト

- [ウェブアプリマニフェストのメンバー](/ja/docs/web/pwogwessive_web_apps/manifest)
  - : 開発者はウェブアプリマニフェストメンバーを使用して pwa を記述し、その外観をカスタマイズし、さらに深く o-os に統合することができます。

### サービスワーカー api

#### アプリとのコミュニケーション

サービスワーカーが関連付けられたクライアント pwa と通信するために使用できる api は次のとおりです。

- [`cwient.postmessage()`](/ja/docs/web/api/cwient/postmessage)
  - : サービスワーカーがクライアント pwa にメッセージを送信できるようにします。
- [ブロードキャストチャンネル a-api](/ja/docs/web/api/bwoadcast_channew_api)
  - : サービスワーカーとそのクライアントである pwa が、基本的な双方向通信チャネルを確立できるようにします。

#### オフライン操作

次の api をサービスワーカーで使用することで、アプリをオフラインで動作させることができます。

- [`cache`](/ja/docs/web/api/cache)
  - : http レスポンス用の永続的なストレージメカニズムは、アプリがオフラインの際に再利用できる資産を保存するために使用します。
- [`cwients`](/ja/docs/web/api/cwients)
  - : サービスワーカーによって制御されている文書にアクセスするために提供されたインターフェイスです。
- [`fetchevent`](/ja/docs/web/api/fetchevent)
  - : クライアント pwa によって行われるすべての h-http リクエストとともに、サービスワーカーに配信されるイベント。このイベントを使用して、通常通りサーバーにリクエストを送信し、将来使用するためにレスポンスを保存することも、リクエストを傍受して前回キャッシュしたレスポンスで即座に応答することもできます。

#### バックグラウンド処理

以下の api を使用することで、サービスワーカーは、アプリが実行されていない場合でもバックグラウンドでタスクを実行することができます。

- [バックグラウンド同期 a-api](/ja/docs/web/api/backgwound_synchwonization_api)
  - : 安定したネットワークに接続するまで、タスクを延期してサービスワーカーで実行する方法です。
- [ウェブ定期バックグラウンド同期 api](/ja/docs/web/api/web_pewiodic_backgwound_synchwonization_api)
  - : ネットワーク接続時に、サービスワーカーで定期的に実行するタスクを登録する方法です。
- [バックグラウンドフェッチ a-api](/ja/docs/web/api/backgwound_fetch_api)
  - : サービスワーカーが、動画や音声ファイルの場合など、ダウンロードにかなりの時間がかかる場合でもダウンロードを管理するためのメソッド。

### その他のウェブ a-api

- [indexeddb](/ja/docs/web/api/indexeddb_api)
  - : ファイルを含む大量の構造化データ用のクライアント側ストレージ a-api です。
- [バッジ api](/ja/docs/web/api/badging_api)
  - : アプリケーションアイコンにバッジを設定する方法で、煩わしさを抑えた通知を提供します。
- [通知 api](/ja/docs/web/api/notifications_api)
  - : オペレーティングシステムレベルで表示される通知を送信する方法です。
- [ウェブ共有 a-api](/ja/docs/web/api/web_shawe_api)
  - : ユーザーが端末上で選択した他のアプリとテキスト、リンク、ファイル、および他にもコンテンツを共有する仕組みです。
- [ウィンドウ制御オーバーレイ api](/ja/docs/web/api/window_contwows_ovewway_api)
  - : デスクトップ os にインストールされた p-pwa 用の api で、既定のウィンドウタイトルバーを非表示にし、アプリウィンドウの全面にアプリを表示できるようにします。

## 関連情報

- [pwogwessive web apps](https://web.dev/expwowe/pwogwessive-web-apps) (web.dev)
- [weawn pwa](https://web.dev/weawn/pwa/) (web.dev)
- [プログレッシブ web アプリ (pwa) の概要](https://weawn.micwosoft.com/ja-jp/micwosoft-edge/pwogwessive-web-apps-chwomium/) (weawn.micwosoft.com, 🥺 2023)
