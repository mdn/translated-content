---
title: プログレッシブウェブアプリ (PWA)
slug: Web/Progressive_web_apps
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

**プログレッシブウェブアプリ** (Progressive web apps, PWA) は、ウェブプラットフォーム技術を使用して構築されたアプリですが、プラットフォーム専用のアプリのような使い勝手を提供します。

PWA はウェブサイトのように、単一のコードベースから複数のプラットフォームや端末で動作することができます。プラットフォーム専用のアプリのように、端末にインストールし、オフラインやバックグラウンドで処理し、端末や他にもインストールされているアプリと統合することができます。

## ガイド

これらのガイドでは、PWA のさまざまな側面について概念的に説明しています。PWAでどのようなことができるかを理解し、それを実現する方法を理解するのに十分なポインターを提供するためのものです。

- [プログレッシブウェブアプリとは](/ja/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : PWA の紹介、従来のウェブサイトやプラットフォーム専用のアプリとの比較、主な機能の輪郭線。
- [PWA をインストール可能にする](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : PWA を定義する要素の 1 つは、端末にインストールでき、ユーザーにはプラットフォーム専用のアプリとして表示されることです。これは、端末の永続的な機能であり、ユーザーは他のアプリと同様に、OS から直接起動することができます。このガイドでは、「インストール可能」ということの意味、PWA をインストール可能にするために指定された必要条件、インストール時の使い勝手をカスタマイズする方法について説明します。
- [ウェブアプリのインストールとアンインストール](/ja/docs/Web/Progressive_web_apps/Guides/Installing)
  - : このガイドでは、ユーザーが端末に PWA をインストールおよびアンインストールする方法を説明します。
- [オフライン操作とバックグラウンド処理](/ja/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : このガイドでは、端末のネットワーク接続が途切れがちでも、PWA がユーザーに良い使い勝手を得るためにはどのような技術を設定すればよいか、また、メインのアプリを実行していない場合でもバックグラウンドで操作を行うにはどのような技術を設定すればよいかについてご紹介します。
- [キャッシュ](/ja/docs/Web/Progressive_web_apps/Guides/Caching)
  - : PWA がリソースをローカルにキャッシュすることを可能にする API の概要、および PWA がオフライン機能を実装する際に使用する一般的な戦略をいくつか紹介します。
- [PWA のベストプラクティス](/ja/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWA は、さまざまなブラウザーや端末での動作に対応し、アクセシビリティを確保し、優れたパフォーマンスを発揮し、オペレーティングシステムと適切に統合されている必要があります。このガイドでは、PWA を可能な限り優れたものにするための最善の手法の例が掲載されています。

## 方法論

これらのガイドでは、特定の PWA 機能の実装方法について、具体的な詳細な手順が説明されています。

- [スタンドアロンアプリの作成](/ja/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : PWA が起動された際に、ブラウザーのタブではなく、自分自身で専用のウィンドウで起動されるように指定する方法を説明します。
- [アプリのアイコンを定義](/ja/docs/Web/Progressive_web_apps/How_to/Define_app_icons)
  - : PWA が端末にインストールされた際に使用するアイコンセットを自分自身で定義する方法を説明しています。
- [アプリの色のカスタマイズ](/ja/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : PWA の背景色とテーマ色を設定するにはどうすればよいかを記述しています。
- [バッジの表示](/ja/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : PWA のアイコンにバッジを表示する方法について説明しています。例えば、ユーザーに新しいメッセージが届いたことを知らせる場合などです。
- [アプリのよくあるアクションをショートカットとして公開](/ja/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : PWA の一般的な操作を公開する方法について、オペレーティングシステムのアプリショートカットメニューから起動できることが記述されています。
- [アプリ間のデータ共有](/ja/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : PWA がオペレーティングシステムのアプリ共有メカニズムを使用して、他にもデータを共有できることを説明しています。
- [PWA からのインストールの起動](/ja/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : 開発者が自分自身で UI を提供し、ユーザーに PWA のインストールを促す方法を説明しています。
- [PWA とのファイルの関連付け](/ja/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : ファイルの種類と PWA の関連付けを作成する方法を説明し、ユーザーがファイルをクリックすると、PWA が起動して何かを処理するようにすることができます。

## チュートリアル

これらのチュートリアルでは、PWA をゼロから作成します。チュートリアルでは、アプリを作成する段階を最初から最後まで順を追って説明し、アプリのさまざまな機能の実装方法について解説します。

- [初めての PWA の作成](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker)
  - : これは初心者向けのチュートリアルで、月の周期を追跡する PWA の作成方法を説明しています。レッスンには、完全に機能するウェブアプリを作成するために要求される HTML、CSS、JavaScript の概要、テスト環境の設定、ウェブアプリを PWA にアップグレードするための完全な説明が含まれています。マニフェストの開発と検査、サービスワーカーの追加、サービスワーカーを使用した古いキャッシュの削除など、ウェブアプリを PWA にアップグレードするためのガイドが記載されています。
- [PWA を深く掘り下げる](/ja/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
  - : これは中級者向けのチュートリアルで、[js13kGames 2017](https://2017.js13kgames.com/) 競技の A-Frame カテゴリーに送信したゲームの情報を掲載している PWA の作成手順を説明しています。 このチュートリアルでは、通知、プッシュ通知、アプリのパフォーマンスなどの追加機能を含め、PWA を作成するうえで必要な基本事項をすべて記載しています。

## リファレンス

PWA を構築する際に使用するウェブ技術に関するリファレンスドキュメントです。

### ウェブアプリマニフェスト

- [ウェブアプリマニフェストのメンバー](/ja/docs/Web/Manifest)
  - : 開発者はウェブアプリマニフェストメンバーを使用して PWA を記述し、その外観をカスタマイズし、さらに深く OS に統合することができます。

### サービスワーカー API

#### アプリとのコミュニケーション

サービスワーカーが関連付けられたクライアント PWA と通信するために使用できる API は次のとおりです。

- [`Client.postMessage()`](/ja/docs/Web/API/Client/postMessage)
  - : サービスワーカーがクライアント PWA にメッセージを送信できるようにします。
- [ブロードキャストチャンネル API](/ja/docs/Web/API/Broadcast_Channel_API)
  - : サービスワーカーとそのクライアントである PWA が、基本的な双方向通信チャネルを確立できるようにします。

#### オフライン操作

次の API をサービスワーカーで使用することで、アプリをオフラインで動作させることができます。

- [`Cache`](/ja/docs/Web/API/Cache)
  - : HTTP レスポンス用の永続的なストレージメカニズムは、アプリがオフラインの際に再利用できる資産を保存するために使用します。
- [`Clients`](/ja/docs/Web/API/Clients)
  - : サービスワーカーによって制御されている文書にアクセスするために提供されたインターフェイスです。
- [`FetchEvent`](/ja/docs/Web/API/FetchEvent)
  - : クライアント PWA によって行われるすべての HTTP リクエストとともに、サービスワーカーに配信されるイベント。このイベントを使用して、通常通りサーバーにリクエストを送信し、将来使用するためにレスポンスを保存することも、リクエストを傍受して前回キャッシュしたレスポンスで即座に応答することもできます。

#### バックグラウンド処理

以下の API を使用することで、サービスワーカーは、アプリが実行されていない場合でもバックグラウンドでタスクを実行することができます。

- [バックグラウンド同期 API](/ja/docs/Web/API/Background_Synchronization_API)
  - : 安定したネットワークに接続するまで、タスクを延期してサービスワーカーで実行する方法です。
- [ウェブ定期バックグラウンド同期 API](/ja/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : ネットワーク接続時に、サービスワーカーで定期的に実行するタスクを登録する方法です。
- [バックグラウンドフェッチ API](/ja/docs/Web/API/Background_Fetch_API)
  - : サービスワーカーが、動画や音声ファイルの場合など、ダウンロードにかなりの時間がかかる場合でもダウンロードを管理するためのメソッド。

### その他のウェブ API

- [IndexedDB](/ja/docs/Web/API/IndexedDB_API)
  - : ファイルを含む大量の構造化データ用のクライアント側ストレージ API です。
- [バッジ API](/ja/docs/Web/API/Badging_API)
  - : アプリケーションアイコンにバッジを設定する方法で、煩わしさを抑えた通知を提供します。
- [通知 API](/ja/docs/Web/API/Notifications_API)
  - : オペレーティングシステムレベルで表示される通知を送信する方法です。
- [ウェブ共有 API](/ja/docs/Web/API/Web_Share_API)
  - : ユーザーが端末上で選択した他のアプリとテキスト、リンク、ファイル、および他にもコンテンツを共有する仕組みです。
- [ウィンドウ制御オーバーレイ API](/ja/docs/Web/API/Window_Controls_Overlay_API)
  - : デスクトップ OS にインストールされた PWA 用の API で、既定のウィンドウタイトルバーを非表示にし、アプリウィンドウの全面にアプリを表示できるようにします。

## 関連情報

- [Progressive web apps](https://web.dev/explore/progressive-web-apps) (web.dev)
- [Learn PWA](https://web.dev/learn/pwa/) (web.dev)
- [プログレッシブ Web アプリ (PWA) の概要](https://learn.microsoft.com/ja-jp/microsoft-edge/progressive-web-apps-chromium/) (learn.microsoft.com, 2023)
