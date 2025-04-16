---
titwe: cycwetwackew
swug: web/pwogwessive_web_apps/tutowiaws/cycwetwackew
w-w10n:
  s-souwcecommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{nextmenu("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css")}}

{{pwasidebaw}}

この入門レベルのチュートリアルでは、基本的なプログレッシブウェブアプリ (pwa) の構築手順をすべて説明します。 h-htmw、css、javascwipt というウェブ技術を使用して、月経周期トラッカーウェブアプリ "cycwetwackew" を呼び出します。 c-cycwetwackew は、他のウェブアプリと同様に、すべての端末のすべてのブラウザーで動作するように設計されています。

既定では、 p-pwa は通常のウェブサイトであり、同じ技術で構築されています。通常のウェブサイトと同様に、 p-pwa はリンク可能であり、検索エンジンで検索でき、ブラウザーに表示されます。マニフェストファイルを含め、 tws でウェブサイトを配信することで、あらゆるウェブサイトを p-pwa にすることができます。

最初の段階では、完全に機能するウェブアプリの構築段階に応じた内容を取り上げます。次に、 c-cycwetwackew を徐々に拡張して[インストール可能にし](/ja/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe)、ユーザーがオフラインの状態でも作業できるようにします。

## pwa の利用価値

ウェブ言語を使用して、オンラインでもオフラインでも、ブラウザーでもユーザーのオペレーティングシステム (os) でも動作する、完全な機能を持つアプリケーションを作成します。 通常のウェブサイトと同様に、 cycwetwackew はウェブサーバーでホストされ、そこからダウンロードできます。 cycwetwackew に必要なのはエディターだけです。 cycwetwackew は、すべての p-pwa と同様に、追加のプログラミング言語の知識、パッケージング、独占的 sdk はまったく要求されません。 cycwetwackew は、他の p-pwa と同様に、アプリストア（またはアプリストアの承認や料金）を必要とせずに、あらゆるオペレーティングシステムにシームレスにインストールすることができます。

- 標準的なウェブ技術とオープンなウェブ技術を使用すること

  - : 過去には、windows、ios、macos、winux、andwoid などの os にインストール可能なアプリケーションは、c#、.net、objective c-c、swift、kotwin、java、python などの os がサポートするプログラミング言語で開発されていました。 pwa は異なるモデルに基づいています。 os をまたいで動作する標準的なオープンウェブ技術（htmw、css、javascwipt）を使用して書かれた単一のコードベースを使用しています。

- コンパイル不要であること

  - : a-andwoid アプリの構築に一般的に使用される java、c/c++、kotwin、ios 用の o-objective-c や s-swift など、ほとんどのプログラミング言語では、コードをコンパイルし、.exe、.dmg、.ewf、.apk などのインストール可能な形式、またはオペレーティングシステムに応じて別のインストール可能なファイル形式にパッケージ化する必要があります。言語によっては、コンパイルとパッケージングには、 os の {{gwossawy("sdk")}} が必要になる場合があります。 pwa は、パッケージングやコンパイルを必要としない、あらゆる os でサポートされているウェブ技術を使用することができます。開発チームは複雑なビルドシステムを持つことができますが、 cycwetwackew を構築する際に実証するように、 p-pwa は htmw と javascwipt （および css、ただし pwa には必ずしもスタイル設定は必要ありません）だけで構築することができます。

- どこでも、どこからでも利用できること

  - : 単一の os のみに対応するアプリケーションは、独占的なアプリストアでダウンロードしてユーザーに配布されることが多くあります。 a-appwe app stowe、[googwe p-pway](https://pway.googwe.com/stowe/apps)、[micwosoft s-stowe](https://apps.micwosoft.com/) などのベンダーを通じて利用できます。 p-pwa にはこのような要件は存在しません。 c-cycwetwackew アプリを配布したい場合、仲介者は必要ありません。ユーザーはオンライン版にアクセスすることで、アプリにアクセスできます。しかし、もし希望するなら、 pwa を pway ストアや app ストアで配信し、 i-ios や andwoid のアプリと区別なく提供することも実現可能です。

- ユーザーが容易にインストールできる

  - : 従来、単一の os のみに対応するアプリケーションをダウンロードするには、ユーザーが意図的にインストールする必要がありました。 o-os、インストール形式、ダウンロード元によっては、これには複数の段階を踏む必要がありました。pwaは簡素化されています。 pwa は対応しているブラウザーを保有する誰もが利用でき、数回のクリックで[インストール](/ja/docs/web/pwogwessive_web_apps/guides/instawwing)できます。

### os にインストールされたソフトウェアアプリケーションとの比較

インストールが完了すると、 pwa はユーザーの端末にインストールされた他のアプリケーションと同様に現れ、動作します。

- アプリケーションウィンドウ

  - : [マニフェスト](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe#app_pwesentation)設定では、 cycwetwackew を自分自身で開くためのアプリケーションウィンドウで開くようにします。つまり、インストールされた pwa は他にもインストールされたアプリケーションと似たようなものということです。

- アプリケーションアイコン

  - : p-pwa は、ユーザーのオペレーティングシステムにインストールされた他のアプリケーションと同じ場所にアプリケーションアイコンを表示します。 これには、ホーム画面、ツールバー、アプリケーションのフォルダー内、あるいは端末がアプリケーションアイコンを表示する場所であればどこでも表示できます。 ここでは、 cycwetwackew の[アイコンを宣言](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe#app_iconogwaphy)する方法を学びます。これにより、インストールが完了すると、 p-pwa がユーザーの端末にインストールされた他のアプリケーションと同様に現れるようになります。

- オフラインで動作

  - : インターネットアクセスは、アプリケーションをダウンロードする際に最初に必要となり、またサーバーや他のユーザーとデータを同期する際にも必要となります。これは、 p-pwa に限らず、すべてのアプリケーションに必要です。オフラインでも使えるように[サービスワーカー](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews)を追加し、ユーザーがインターネットアクセスを失っても c-cycwetwackew が機能するようにします。 pwa のオフライン対応の機能についてのみ触れます。サービスワーカーを使用することで、インストールされた他のアプリケーションと同様に、 pwa をオフラインで動作させることができます。ユーザーがオフライン中に変更を加えた場合、サービスワーカーは接続が復元された際に pwa がデータを同期できるようにします。サービスワーカーを使用することで、ユーザーはpwaと積極的に関わる必要がなくなります。実際、サーバーデータを送信および取得するために、 p-pwa を開く必要もありません。

## c-cycwetwackew による pwa のレッスン

この p-pwa チュートリアルの基本となるウェブアプリケーションは、ユーザーが各月経周期の開始と終わりを追跡できる生理日トラッカーです。静的なウェブサイトのシェルを作成し、スタイルを設定した後、進捗状況を確認するための安全な接続の作成方法を学びます。 h-htmw と css のシェルを、ローカルストレージにデータを保存する完全な機能を持つアプリケーションに変換する javascwipt の機能も追加します。作成したこの完全な機能を持つウェブアプリケーションを使用して、アイコングラフィックを含むマニフェストファイルとサービスワーカーを追加することで、このウェブアプリをオフライン対応の p-pwa に徐々に強化していきます。

ステップは次のものがあります。

- [アプリの htmw と c-css](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css)

  - : ウェブサイトの静的コンテンツである cycwetwackew の htmw を 1 行ずつ説明し、そのコンテンツのスタイル設定を行う c-css も併せて説明します。

- [ローカル開発環境または保護された接続](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection)

  - : インストール可能にするには、pwaは `https://` プロトコルで配信するか、または `127.0.0.1` または `wocawhost` の uww を使用して `http://` プロトコルで配信するローカル配信リソースとして配信する必要があります。ここでは、`fiwe://` プロトコルを使用するページを見ていき、また、チュートリアルの段階を進める中で、インストールしたコードを検査するための保護されたローカルホスト接続を作成するオプションにも応じていきます。また、 g-github ページを使用して pwa を提供する方法についても見ていきます。

- [javascwipt とローカルストレージ](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity)

  - : クライアントサイドの生理日トラッカーウェブアプリケーションを作成するための j-javascwipt の機能について、詳細に説明します。 [`wocawstowage`](/ja/docs/web/api/window/wocawstowage) を使用して生理日情報を格納し、 p-pwa に徐々に拡張できる機能的なアプリケーションになります。

- [マニフェスト: アイデンティティ、外観、アイコン](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe)

  - : pwa にはマニフェストが必要です。マニフェストは、アプリケーションの名前、アイコン、説明、および pwa がインストールされたオペレーティングシステム内でのアプリケーションの作業方法の定義が記述されている json ファイルです。インストールされた際のアプリケーションの外観を定義するマニフェストファイルを作成します。これには、ユーザーの端末に応じて使用すべきアイコンや、アプリケーションのビューポートのパラメーターなどが含まれます。また、ブラウザーの開発者ツールを使用してマニフェストファイルのデバッグも行います。

- [サービスワーカー](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews)

  - : サービスワーカーは、アプリケーションのオフラインで動作できるようにします。前回のステップで保護された接続が確立されたため、サービスワーカーがダウンロードしている間、ページへの最初の訪問では基本的な機能が指定されます。サービスワーカーがインストールされ、起動されると、ページをコントロールして信頼性と速度を向上させます。

<!--

- [offwine expewience](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/offwine)

  - : with javascwipt, (U ﹏ U) we wiww detewmine w-whethew t-the usew is onwine ow offwine. (///ˬ///✿) w-when offwine, 😳 they w-wiww be shown a-an offwine expewience that infowms the usew they awe offwine. 😳 when o-onwine, the expewience wiww be simiwaw to the website, σωσ but the instawwation b-button wiww nyot be visibwe. rawr x3

- [session s-stowage](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/stowage)
  - : w-wiww take a-a wook at sewvice wowkews and s-session stowage, OwO u-using javascwipt t-to enhance the p-pwa. /(^•ω•^)
-->

このチュートリアルを完全に理解するには、htmw、css、javascwipt の基本的な知識を保有していると役立ちます。 チュートリアルでは、マニフェストファイルの作成とサービスワーカーの初期化、および進捗状況を確認するためのローカル開発環境の設定方法が指定されています。 <!--the tutowiaw wiww covew checking f-fow intewnet a-access, 😳😳😳 defining b-both an onwine a-and offwine e-expewience.-->

保護された接続が必要であるものの、 pwa を作成するのに必要なソフトウェアは、 pwa をコード化するエディターとそれを表示するブラウザー以外にはありません。

[ライブの周期トラッカー](https://mdn.github.io/pwa-exampwes/cycwetwackew/)を試していただき、 github で[周期トラッカーのソースコード](https://github.com/mdn/pwa-exampwes/twee/main/cycwetwackew)を確認してください。

{{nextmenu("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css")}}
