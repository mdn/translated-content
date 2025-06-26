---
title: CycleTracker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}

{{PWASidebar}}

この入門レベルのチュートリアルでは、基本的なプログレッシブウェブアプリ (PWA) の構築手順をすべて説明します。 HTML、CSS、JavaScript というウェブ技術を使用して、月経周期トラッカーウェブアプリ "CycleTracker" を呼び出します。 CycleTracker は、他のウェブアプリと同様に、すべての端末のすべてのブラウザーで動作するように設計されています。

既定では、 PWA は通常のウェブサイトであり、同じ技術で構築されています。通常のウェブサイトと同様に、 PWA はリンク可能であり、検索エンジンで検索でき、ブラウザーに表示されます。マニフェストファイルを含め、 TLS でウェブサイトを配信することで、あらゆるウェブサイトを PWA にすることができます。

最初の段階では、完全に機能するウェブアプリの構築段階に応じた内容を取り上げます。次に、 CycleTracker を徐々に拡張して[インストール可能にし](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)、ユーザーがオフラインの状態でも作業できるようにします。

## PWA の利用価値

ウェブ言語を使用して、オンラインでもオフラインでも、ブラウザーでもユーザーのオペレーティングシステム (OS) でも動作する、完全な機能を持つアプリケーションを作成します。 通常のウェブサイトと同様に、 CycleTracker はウェブサーバーでホストされ、そこからダウンロードできます。 CycleTracker に必要なのはエディターだけです。 CycleTracker は、すべての PWA と同様に、追加のプログラミング言語の知識、パッケージング、独占的 SDK はまったく要求されません。 CycleTracker は、他の PWA と同様に、アプリストア（またはアプリストアの承認や料金）を必要とせずに、あらゆるオペレーティングシステムにシームレスにインストールすることができます。

- 標準的なウェブ技術とオープンなウェブ技術を使用すること
  - : 過去には、Windows、iOS、macOS、Linux、Android などの OS にインストール可能なアプリケーションは、C#、.Net、Objective C、Swift、Kotlin、Java、Python などの OS がサポートするプログラミング言語で開発されていました。 PWA は異なるモデルに基づいています。 OS をまたいで動作する標準的なオープンウェブ技術（HTML、CSS、JavaScript）を使用して書かれた単一のコードベースを使用しています。

- コンパイル不要であること
  - : Android アプリの構築に一般的に使用される Java、C/C++、Kotlin、iOS 用の Objective-C や Swift など、ほとんどのプログラミング言語では、コードをコンパイルし、.exe、.dmg、.elf、.apk などのインストール可能な形式、またはオペレーティングシステムに応じて別のインストール可能なファイル形式にパッケージ化する必要があります。言語によっては、コンパイルとパッケージングには、 OS の {{glossary("SDK")}} が必要になる場合があります。 PWA は、パッケージングやコンパイルを必要としない、あらゆる OS でサポートされているウェブ技術を使用することができます。開発チームは複雑なビルドシステムを持つことができますが、 CycleTracker を構築する際に実証するように、 PWA は HTML と JavaScript （および CSS、ただし PWA には必ずしもスタイル設定は必要ありません）だけで構築することができます。

- どこでも、どこからでも利用できること
  - : 単一の OS のみに対応するアプリケーションは、独占的なアプリストアでダウンロードしてユーザーに配布されることが多くあります。 Apple App Store、[Google Play](https://play.google.com/store/apps)、[Microsoft Store](https://apps.microsoft.com/) などのベンダーを通じて利用できます。 PWA にはこのような要件は存在しません。 CycleTracker アプリを配布したい場合、仲介者は必要ありません。ユーザーはオンライン版にアクセスすることで、アプリにアクセスできます。しかし、もし希望するなら、 PWA を Play ストアや App ストアで配信し、 iOS や Android のアプリと区別なく提供することも実現可能です。

- ユーザーが容易にインストールできる
  - : 従来、単一の OS のみに対応するアプリケーションをダウンロードするには、ユーザーが意図的にインストールする必要がありました。 OS、インストール形式、ダウンロード元によっては、これには複数の段階を踏む必要がありました。PWAは簡素化されています。 PWA は対応しているブラウザーを保有する誰もが利用でき、数回のクリックで[インストール](/ja/docs/Web/Progressive_web_apps/Guides/Installing)できます。

### OS にインストールされたソフトウェアアプリケーションとの比較

インストールが完了すると、 PWA はユーザーの端末にインストールされた他のアプリケーションと同様に現れ、動作します。

- アプリケーションウィンドウ
  - : [マニフェスト](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_presentation)設定では、 CycleTracker を自分自身で開くためのアプリケーションウィンドウで開くようにします。つまり、インストールされた PWA は他にもインストールされたアプリケーションと似たようなものということです。

- アプリケーションアイコン
  - : PWA は、ユーザーのオペレーティングシステムにインストールされた他のアプリケーションと同じ場所にアプリケーションアイコンを表示します。 これには、ホーム画面、ツールバー、アプリケーションのフォルダー内、あるいは端末がアプリケーションアイコンを表示する場所であればどこでも表示できます。 ここでは、 CycleTracker の[アイコンを宣言](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#app_iconography)する方法を学びます。これにより、インストールが完了すると、 PWA がユーザーの端末にインストールされた他のアプリケーションと同様に現れるようになります。

- オフラインで動作
  - : インターネットアクセスは、アプリケーションをダウンロードする際に最初に必要となり、またサーバーや他のユーザーとデータを同期する際にも必要となります。これは、 PWA に限らず、すべてのアプリケーションに必要です。オフラインでも使えるように[サービスワーカー](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)を追加し、ユーザーがインターネットアクセスを失っても CycleTracker が機能するようにします。 PWA のオフライン対応の機能についてのみ触れます。サービスワーカーを使用することで、インストールされた他のアプリケーションと同様に、 PWA をオフラインで動作させることができます。ユーザーがオフライン中に変更を加えた場合、サービスワーカーは接続が復元された際に PWA がデータを同期できるようにします。サービスワーカーを使用することで、ユーザーはPWAと積極的に関わる必要がなくなります。実際、サーバーデータを送信および取得するために、 PWA を開く必要もありません。

## CycleTracker による PWA のレッスン

この PWA チュートリアルの基本となるウェブアプリケーションは、ユーザーが各月経周期の開始と終わりを追跡できる生理日トラッカーです。静的なウェブサイトのシェルを作成し、スタイルを設定した後、進捗状況を確認するための安全な接続の作成方法を学びます。 HTML と CSS のシェルを、ローカルストレージにデータを保存する完全な機能を持つアプリケーションに変換する JavaScript の機能も追加します。作成したこの完全な機能を持つウェブアプリケーションを使用して、アイコングラフィックを含むマニフェストファイルとサービスワーカーを追加することで、このウェブアプリをオフライン対応の PWA に徐々に強化していきます。

ステップは次のものがあります。

- [アプリの HTML と CSS](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS)
  - : ウェブサイトの静的コンテンツである CycleTracker の HTML を 1 行ずつ説明し、そのコンテンツのスタイル設定を行う CSS も併せて説明します。

- [ローカル開発環境または保護された接続](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)
  - : インストール可能にするには、PWAは `https://` プロトコルで配信するか、または `127.0.0.1` または `localhost` の URL を使用して `http://` プロトコルで配信するローカル配信リソースとして配信する必要があります。ここでは、`file://` プロトコルを使用するページを見ていき、また、チュートリアルの段階を進める中で、インストールしたコードを検査するための保護されたローカルホスト接続を作成するオプションにも応じていきます。また、 GitHub ページを使用して PWA を提供する方法についても見ていきます。

- [JavaScript とローカルストレージ](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)
  - : クライアントサイドの生理日トラッカーウェブアプリケーションを作成するための JavaScript の機能について、詳細に説明します。 [`localStorage`](/ja/docs/Web/API/Window/localStorage) を使用して生理日情報を格納し、 PWA に徐々に拡張できる機能的なアプリケーションになります。

- [マニフェスト: アイデンティティ、外観、アイコン](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)
  - : PWA にはマニフェストが必要です。マニフェストは、アプリケーションの名前、アイコン、説明、および PWA がインストールされたオペレーティングシステム内でのアプリケーションの作業方法の定義が記述されている JSON ファイルです。インストールされた際のアプリケーションの外観を定義するマニフェストファイルを作成します。これには、ユーザーの端末に応じて使用すべきアイコンや、アプリケーションのビューポートのパラメーターなどが含まれます。また、ブラウザーの開発者ツールを使用してマニフェストファイルのデバッグも行います。

- [サービスワーカー](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)
  - : サービスワーカーは、アプリケーションのオフラインで動作できるようにします。前回のステップで保護された接続が確立されたため、サービスワーカーがダウンロードしている間、ページへの最初の訪問では基本的な機能が指定されます。サービスワーカーがインストールされ、起動されると、ページをコントロールして信頼性と速度を向上させます。

<!--

- [Offline experience](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/offline)

  - : With JavaScript, we will determine whether the user is online or offline. When offline, they will be shown an offline experience that informs the user they are offline. When online, the experience will be similar to the website, but the installation button will not be visible.

- [Session storage](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Storage)
  - : Will take a look at service workers and session storage, using JavaScript to enhance the PWA.
-->

このチュートリアルを完全に理解するには、HTML、CSS、JavaScript の基本的な知識を保有していると役立ちます。 チュートリアルでは、マニフェストファイルの作成とサービスワーカーの初期化、および進捗状況を確認するためのローカル開発環境の設定方法が指定されています。 <!--The tutorial will cover checking for internet access, defining both an online and offline experience.-->

保護された接続が必要であるものの、 PWA を作成するのに必要なソフトウェアは、 PWA をコード化するエディターとそれを表示するブラウザー以外にはありません。

[ライブの周期トラッカー](https://mdn.github.io/pwa-examples/cycletracker/)を試していただき、 GitHub で[周期トラッカーのソースコード](https://github.com/mdn/pwa-examples/tree/main/cycletracker)を確認してください。

{{NextMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS")}}
