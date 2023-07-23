---
title: ウェブサイトの公開
slug: Learn/Getting_started_with_the_web/Publishing_your_website
l10n:
  sourceCommit: 0b2ed45bea188abc27cdd92c3faffcb7483d3314
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}

ウェブサイトを構成するコードやファイルの整理が終わったら、それをオンラインで公開して、人々が見つけられるようにする必要があります。この記事では、簡単なサンプルコードを手軽にオンラインに公開する方法を説明します。

## どんな選択肢があるのか

ウェブサイトの公開には、さまざまな方法があるため、複雑なテーマです。この記事では、すべての可能な方法を説明するつもりはありません。その代わりに、初心者にとって実用的な 3 つのアプローチのメリットとデメリットを説明します。そして、多くの読者がすぐに使える方法を紹介します。

### ホストとドメイン名を手に入れる

コンテンツやウェブサイトの外観をより自由にコントロールするために、多くの人はウェブホスティングとドメイン名の購入を選択します。

- ウェブホスティングとは、ホスティング会社の[ウェブサーバー](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)上のファイルスペースを借りることです。ウェブサイトのファイルはウェブサーバー上に置きます。ウェブサーバーは、ウェブサイトのコンテンツをウェブサイトの訪問者に提供します。
- ドメイン名は、 `http://www.mozilla.org` や `http://www.bbc.co.uk` のように、お客様のウェブサイトを見つけるための固有のアドレスです。ドメイン名は、**ドメインレジストラー**から何年でも借りることができます。

多くのプロの手によるウェブサイトはこんな風にして、公開されているわけです。

さらに、ウェブサイトのファイルを実際にサーバーに転送するには、{{Glossary("FTP", "File Transfer Protocol (FTP、ファイル転送プロトコル)")}} のプログラム（詳しくは、[どのくらいコストがかかりますか: ソフトウェア](/ja/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#ソフトウェア)を参照）が必要です。 FTP プログラムの種類は様々ですが、一般的には、ホスティング会社から提供された詳細情報（通常、ユーザー名、パスワード、ホスト名）を使ってウェブサーバーに接続する必要があります。その後、プログラムはローカルファイルとウェブサーバーのファイルを 2 つのウィンドウに表示し、ファイルのやり取りを行うことができます。

![ウェブサイトのすべてのファイルやフォルダーを表示し、サーバーにアップロードするFTPクライアント](ftp.jpg)

#### ホスティングとドメインを見つけるためのヒント

- MDN は、特定の商用ホスティング会社やドメイン名レジストラーを推奨してはいません。ホスティング会社やレジストラーを見つけるには、「ウェブホスティング」や「ドメイン名」で検索してください。どのレジストラーにも、希望するドメイン名が利用可能かどうかを確認する機能があります。
- 自宅やオフィスの{{Glossary("ISP", "インターネットサービスプロバイダー")}}が、小規模なウェブサイトのための限定的なホスティングを提供している場合もあります。利用できる機能は限られていますが、初めての試みには最適かもしれません。
- [Neocities](https://neocities.org/)、Google Sites、[Blogger](https://www.blogger.com)、[WordPress](https://wordpress.com/) のような無料のサービスもあります。有料のものもありますが、最初の実験にはこれらのリソースで十分な場合もあります。
- ホスティングをドメインの両方を提供している会社もたくさんあります。

### GitHub や Google App Engine のようなオンラインツールの利用

ウェブサイトをオンラインで公開できるツールもあります。

- [GitHub](https://github.com/) は、「ソーシャルコーディング」サイトです。コードリポジトリーをアップロードして [Git](https://git-scm.com/) **バージョン管理システム**に保存することができます。このシステムは既定でオープンソースになっており、世界中の誰もが GitHub のコードを見つけ、それを使い、そこから学び、改良することができます。また、 GitHub には [GitHub Pages](https://pages.github.com/) という便利な機能があり、ウェブサイトのコードをウェブ上で公開することができます。
- [Google App Engine](https://cloud.google.com/appengine/) Google のインフラ上でアプリケーションを構築・実行できる強力なプラットフォームです。複数階層のウェブアプリケーションをゼロから構築する場合も、静的なウェブサイトをホスティングする場合も同様です。詳細は、[Google App Engine でウェブサイトをホスティングするには](/ja/docs/Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine)を参照してください。

これらのオプションは通常無料ですが、限定された機能セットでしか成長させることができません。

### CodePen のようなウェブベースの IDE の利用

ウェブサイトの開発環境をエミュレートするウェブアプリは数多くあり、HTML、CSS、JavaScript を入力すると、そのコードの結果をウェブサイトとして表示することができます。一般的に、これらのツールは比較的簡単で、学習にも適しており、コードを共有するのにも適しています (例えば、別のオフィスにいる同僚とテクニックを共有したり、デバッグの助けを求めたりする場合など)。また、 (基本的な機能については) 無料です。レンダリングされたページを、固有のウェブアドレスでホスティングしてくれます。ただし、機能は限られており、通常はアセット (画像など) のホスティングスペースは提供されていません。

これらを試してみて、一番合ったものを見つけてみましょう。

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

![JS Bin のウェブベースの IDE のスクリーンショット](jsbin-screen.png)

## GitHub 経由での公開

では、GitHub Pages 経由でどれくらい簡単にサイトを公開できるかを実際にやってみましょう。

1. まず、 [GitHub にサインアップして](https://github.com/)、メールアドレスの認証を受けましょう。
2. 次に ファイルを入れるための[リポジトリーを作成](https://github.com/new)しましょう。
3. このページ上の、 _Repository name_ ボックスに _ユーザー名_.github.io と入力してください。 _ユーザー名_ はあなたのユーザー名です。例えば、私の友達の Bob Smith であれば _bobsmith.github.io_ と入力します。
   さらに、"_Initialize this repository with a README"_ ボックスをチェックし、 _Create repository_ をクリックしてください。![](github-create-repo.png)
4. ウェブサイトのフォルダーをリポジトリーの中にドラッグアンドドロップしたら、 _Commit changes_ をクリックしましょう。

   > **メモ:** フォルダーの中に `index.html` ファイルがあるかを確認しましょう。

5. では、ウェブサイトをオンライン上で見るために、ブラウザーから username.github.io に移動しましょう。例えば、ユーザー名が chrisdavidmills なら、[chrisdavidmills.github.io](https://chrisdavidmills.github.io/) に移動しましょう。

   > **メモ:** ウェブサイトに使えるようになるには少し時間がかかるかもしれません。ウェブサイトがすぐに表示されない場合は、少し待ってみてください。そしてもう一度試してみましょう。

もっと詳しく知りたい人は [GitHub Pages Help](https://docs.github.com/en/pages/getting-started-with-github-pages) を見てください。

## 参考文献

- [ウェブサーバーとは何か](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- [ドメイン名を理解する](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)
- [ウェブサイトで何かするのにいくらかかるか?](/ja/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Codecademy の良いチュートリアルで、もう少し詳しく追加のテクニック含めて示しています。
- [Cheap or Free Static Website Hosting](https://alignedleft.com/resources/cheap-web-hosting) Scott Murray による利用できるサービスについての使えるアイデアがあります。

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}
