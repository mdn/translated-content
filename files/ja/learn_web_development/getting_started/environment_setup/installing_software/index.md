---
title: 基本的なソフトウェアのインストール
short-title: ソフトウェアのインストール
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

この記事では、簡単なウェブ開発をするのに必要なソフトウェアや、今すぐインストールすべきもの（コードエディターや現行のウェブブラウザーなど）について説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        コンピューターのオペレーティングシステム (OS) に慣れていること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>始めるのに必要なソフトウェアを理解すること。</li>
          <li>コードエディター、数種類の現行ブラウザー、ローカルテスト用サーバーをインストールすること。</li>
          <li>他の一般的な種類のアプリについて、さまざまな選択肢を探ること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## コードエディター

優れたコードエディターは、開発者にとって自分のマシンに持つべき最も重要なツールの一つです。コードエディターは、コードを書く場所であるだけでなく、他にも数多くの機能を備えています。このシリーズの後半では、コードエディターについて 1 つの記事全体を割いて詳しく解説しています。

現時点では、[Visual Studio Code](https://code.visualstudio.com/)のインストールをお勧めします。これはさまざまなプラットフォームで利用できるほか、優れた機能群とサポートを備えており、私たちも主に使用しているエディターだからです。この記事の残りの内容を一緒に進めていくには、今すぐこれをインストールしてください。

## 現行のウェブブラウザー

ウェブ開発において、現行のウェブブラウザーを用意することは不可欠です。そうすることで、訪問者がアクセスに使用するブラウザー上で、ウェブサイトやアプリをテストできるようになります。また、最新のウェブ技術に対応し、最新のセキュリティ修正が適用されるよう、ブラウザーを常に最新の状態に保つ必要があります。

よく使われる主要なブラウザーは、以下の通りです。

- デスクトップブラウザー:
  - [Chromium](https://ja.wikipedia.org/wiki/Chromium) ベース: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/ja/download/), [Microsoft Edge](https://explore.microsoft.com/ja-jp/edge), [Vivaldi](https://vivaldi.com/)
  - [Gecko](https://ja.wikipedia.org/wiki/Gecko) ベース: [Mozilla Firefox](https://www.firefox.com/ja/)
  - [WebKit](https://ja.wikipedia.org/wiki/WebKit) ベース: [Apple Safari](https://www.apple.com/safari/)
- モバイル/その他の端末のブラウザー:
  - Chromium ベース (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/ja-jp/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/)
  - Gecko ベース (Android): [Mozilla Firefox](https://www.firefox.com/ja/download/android/)
  - WebKit ベース (iOS): [Apple Safari](https://www.apple.com/safari/)
    > [!NOTE]
    > 以上に挙げた Android 用ブラウザーのほとんどには iOS 版も存在しますが、これらは過去には Apple の App Store の規則により、内部ではすべて Apple の WebKit エンジンを採用していました。本稿執筆時点では、規制の変更に伴い、各ブラウザーメーカーが独自のレンダリングエンジンを基盤とした iOS 版ブラウザーを作成しているところです。詳細は [Apple is finally allowing full versions of Chrome and Firefox to run on the iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu) を参照してください。

ほとんどの現行ブラウザーは、更新プログラムを自動的にインストールし、再起動時に変更を適用するようになっています。通常、ブラウザーの「バージョン情報」ページで更新の有無を調べることができます。このページは、ブラウザーやOSによって利用できる場所が若干異なり、例えば次のような場所にあります。

- Firefox: macOS では _Firefox_ > _About Firefox_ で、Windows では メニューアイコン > ヘルプ > Firefox について から利用できます。
- Chrome: macOS では _Chrome_ > _About Google Chrome_ で、Windows では メニューアイコン > ヘルプ > Google Chrome について から利用できます。

### どのブラウザーをインストールすべきか

とりあえずは、コードのテスト用に、デスクトップ用とモバイル／その他の端末用のブラウザーをいくつかインストールしておくことをお勧めします。少なくとも 2 つの異なるレンダリングエンジン（例えば Chromium と Gecko）を搭載したブラウザーをインストールし、同じレンダリングエンジンに基づく複数のブラウザーだけでテストを行わないようにしてください。コードには、特定のレンダリングエンジンにのみ影響するバグが含まれている可能性があるため、これは重要なことです。

WebKit ベースのブラウザーは、Windows、Linux、Android の各オペレーティングシステムでは利用できません。3 つの主要なレンダリングエンジンすべてでコードをテストしたい場合で、お使いのコンピューターが Windows ベースである場合は、macOS または iOS ベースのテスト用端末を取得するか、仮想マシンやテストプラットフォームなどのソフトウェアベースのソリューションを使用する必要があります。ただし、現段階では包括的な検査について心配する必要はありません。異なるレンダリングエンジンでコードを検査すべきであることを認識し、ある程度の実践経験を取得するだけで、これで十分です。

[テスト](/ja/docs/Learn_web_development/Extensions/Testing)モジュールでは、テスト戦略を見ていきます。

## ローカルウェブサーバー

通常、ブラウザーにウェブアドレスを入力してウェブサイトを読み込むと、そのサイトを表示するためにブラウザーが組み合わせて使用するファイルは、世界のどこか別の場所にあるサーバーコンピューター上でホストされているリモートウェブサーバーから取得されます。この仕組みについて詳しくは、このシリーズの次の記事で解説します。

ローカル（自分のマシン上）でウェブサイトを作成する際、多くの場合、メインの HTML インデックスファイルをブラウザーで直接読み込んでテストすることができます。しかし、例えば一部のサンプルについては、正常に動作させるために、ローカルにインストールされたウェブサーバーを介して実行する必要があります。

### ローカルウェブサーバーのインストール

ローカルサーバーを利用できる最も簡単な方法の一つは、コードエディターの拡張機能を使用することです。こうすれば、コードエディター内で直接利用できるようになります。Visual Studio Code 内で、以下の手順を実行してください。

1. _表示_ > _拡張機能_ メニュー項目を使用して、_拡張機能_ ペインを開きます。
2. このペインの上部にある「検索...」ボックスに "live preview" を入力してください。検索結果のトップに、Microsoft が作成した [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) 拡張機能が表示されるはずです。
3. そのオプションをクリックすると、その機能に関する情報ページが開き、そこにはその機能を使用する方法も記載されています。
4. _インストール_ボタンを押して、拡張機能をインストールしてください。
5. これで、エディターで HTML ファイルを編集中に、「プレビューを表示」ボタンをクリックすると、別のタブでライブサンプルを開くことができるはずです。

以上の上の方法は単純ですが、それほど柔軟ではありません。将来的には、手持ちのどのブラウザーでもサンプルを読み込むことができる、より柔軟なローカルサーバーの選択肢が必要になるかもしれません。それ以外にも選択肢（およびローカルサーバーが必要な理由に関する詳細な背景情報）については、[ローカルテストサーバーを用意するには](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)をご覧ください。

## グラフィックエディター

ウェブ開発者はよく、作成するウェブサイトで使用するために画像ファイルを加工することが必要となります。これはグラフィック資産の設計・生成を意味することもありますが、同様に、グラフィックがグラフィックデザイナー（チームメイトやサードパーティーなど）から提供されることも多く、その場合は、ウェブ開発者が受け取ったファイルのトリミングやサイズ変更を求められることがあります。

MDN の学習記事で、自分自身でグラフィックを作成する必要があるものはありませんが、指定されたファイルを加工する必要がある記事がいくつかあります。

学習の過程で必要になるまでは、グラフィックエディターをインストールしないことをお勧めします。また、実に価値があると思わない限り、高価な商用製品にお金をかけるのは避けましょう

現時点では、例えば以下の例のように、十分な機能を備えたフリーソフトやオンラインサービスが数多くあります。

- macOS には[プレビュー](https://support.apple.com/en-gb/guide/preview/welcome/mac)というツールが標準で搭載されています。これは主に画像や PDF の閲覧に使用されますが、サイズ変更、回転、トリミング、注釈の追加、異なるファイル形式間の変換など、画像編集に実に役立つ機能もいくつか備えています。
- Windows に標準搭載されている[フォトアプリ](https://support.microsoft.com/ja/windows/apps/photos/manage-photos-and-videos-with-microsoft-photos-app)にも、同様の機能が多数備わっています。
- [tinypng](https://tinypng.com/) のウェブサイトでは、PNG や JPEG などの画像を圧縮することができる無料のサービスを提供しています。これは、ウェブサイトで使用する資産を準備をする際に、頻繁に行う必要がある課題です。

商用ソフトに関しては、[Adobe Photoshop](https://www.adobe.com/products/photoshop.html) が特に写真編集において長年にわたり業界標準となっていますが、[Sketch](https://www.sketch.com/) のようなプログラムは、アイコンや UI の制作に適しています。同時に、[Figma](https://www.figma.com/)、[The Affinity Suite](https://www.affinity.studio/)、[Canva](https://www.canva.com/) といった、人気のある新参ツールも登場しています。

以上のアプリのほとんどには試用版や無料モードがあり、試してみる価値があります。また、[GIMP](https://www.gimp.org/)、[Adobe Express](https://www.adobe.com/express/)、[Paint.NET](https://paint.net/) など、評判が良い無料アプリもいくつかあります。

## バージョン管理ツール

**バージョン管理**ツールは、開発者がサーバー上のファイルを管理したり、チームとプロジェクトで共同作業を行ったり、コードや資産を共有したり、編集上の競合を避けたりするために使用されます。現在、[Git](https://git-scm.com/) は、[GitHub](https://github.com/) や [GitLab](https://about.gitlab.com/) といったホスティングサービスと共に、最も普及しているバージョン管理システムです。

バージョン管理ツールはウェブ開発チームにとって不可欠ですが、現時点ではそのことを気にする必要はありません。当シリーズの「コア」モジュールの終盤に、[バージョン管理](/ja/docs/Learn_web_development/Core/Version_control)に特化したモジュールをご用意しています。

## サイト展開用アプリ

ウェブサイトやアプリの開発が（ローカルコンピューター上、または開発サーバー上で）完了したら、ユーザーがそのウェブアドレスを入力してウェブ上で閲覧できるように、リモートウェブサーバーに公開しましょう。

この方法を行うには、ホスティングを契約して [SFTP アプリ](/ja/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp)を使用したり、[GitHub Pages](https://pages.github.com/) や [Netlify](https://www.netlify.com/)といったサービスを使用する方法、さらには [CodePen](https://codepen.io/) や [JSFiddle](https://jsfiddle.net/) のようなツールを使用して、他の人と共有するための簡単なデモを用意する方法など、さまざまな方法があります。

これだけの選択肢があると、圧倒されてしまうかもしれませんが、心配はいりません。現時点で、ウェブサイトの公開について何も必要ないのです。このトピックについては、このコースの後半で何度も見ていきます。まもなく、[初めてのウェブサイト](/ja/docs/Learn_web_development/Getting_started/Your_first_website)というモジュールで、実際に体験する予定です。

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
