---
title: ウェブサイトの公開
short-title: 公開
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

ウェブサイトを構成するコードやファイルの整理が終わったら、それをオンラインで公開して、人々が見つけられるようにする必要があります。この記事では、簡単なサンプルコードを手軽にオンラインに公開する方法を説明します。

> [!NOTE]
> この記事に沿って進めるには、ローカルコンピューター上にサンプルウェブサイトが利用できる必要があります。少なくとも有効な `index.html` ファイルが含まれている必要があります。まだ作成していない場合は、このモジュールの前回の記事（[ウェブサイトをどんな外見にするか](/ja/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)から順に学習しながら、ウェブサイトを作成することをお勧めします。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブサイトを構築する際に使用する基本ソフトウェア、およびファイルシステムに概ね慣れておくこと。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>ウェブサイトを公開すべき基本的なツールと概念 — ホスト、ドメイン、 FTP プログラム。</li>
          <li>他のホストオプションにはどのようなものがあるか。例えば、Google App Engine、GitHub、CodePen など。</li>
          <li>GitHub Pages を使用したウェブサイトの公開。</li>
          <li>ホスティング、支払方法、ウェブサイトをオンラインで公開する方法。</li>
          <li>ドメインの登録方法。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## どんな選択肢があるのか

ウェブサイトの公開には、さまざまな方法があるため、複雑なテーマです。この記事では、すべての可能な方法を説明するつもりはありません。その代わりに、初心者にとって実用的な 3 つのアプローチのメリットとデメリットを説明します。そして、多くの読者がすぐに使える方法を紹介します。

### ホストとドメイン名を手に入れる

コンテンツやウェブサイトの見え方をより自由に制御するために、多くのプロやビジネスは、ウェブホスティングとドメイン名の購入を選択します。

- ウェブホスティングとは、ホスティング会社の[ウェブサーバー](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)上のファイルスペースを借りることです。ウェブサイトのファイルはウェブサーバー上に置きます。ウェブサーバーは、ウェブサイトのコンテンツをウェブサイトの訪問者に提供します。
- [ドメイン名](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) は、`https://www.mozilla.org` や `https://www.bbc.co.uk` のように、ウェブサイトを見つけるための固有のウェブアドレスです。ドメイン名は、**ドメインレジストラー**から何年でも借りることができます。

ウェブホスティングとドメイン名の両方を同じ会社から取得している場合、両者が連携するように自動的に設定される傾向があります。しかし、別個の会社から取得している場合や、ホスティング会社を別の会社に変更したい場合は、ドメイン名を正しいサーバーを指すようにするためのちょっとした設定を行う必要があります。これは、ユーザーがそのウェブアドレスにアクセスした際に、ウェブサイトが表示されるようにするためです。通常、この設定を行うのが最適で、ドメイン登録業者のウェブサイトにログインし、ドメインの[ネームサーバー](https://kinsta.com/blog/what-is-a-nameserver/)を、ホスティング会社が指定したものに設定します。

企業は、ウェブサーバーにファイルを転送するためにさまざまな仕組みを使用しています。多くの企業では複数の選択肢を持ち、代表的なものとしては次のようなものがあります。

- ドラッグ＆ドロップインターフェイス（これについては、後ほど [GitHub 経由での公開](#github_経由での公開)で例をご紹介します）。
- {{Glossary("FTP", "FTP（ファイル転送プロトコル）")}}プログラム。FTP プログラムにはさまざまな種類がありますが、一般的には、ホスティング会社から指定された情報（通常はユーザー名、パスワード、ホスト名）を使用してウェブサーバーに接続する必要があります。その後、プログラムは 2 つのウィンドウにローカルファイルとウェブサーバー上のファイルを示し、ファイルのやり取りを行う方法を提供します。
- ウェブサイトのソースコードを GitHub のリポジトリー（下記参照）に保管し、ホスティング会社にアクセス権限を付与して、ソースコードを取得し、必要に応じてビルドを行い、公開する方法。
- 一部の企業では、ファイルの転送に使用できる[コマンドラインツール](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)を提供しています。

#### ホスティングとドメインを見つけるためのヒント

- MDN は、特定の商用ホスティング会社やドメイン名レジストラーを推奨してはいません。ホスティング会社やレジストラーを見つけるには、「ウェブホスティング」や「ドメイン名」で検索してください。どのレジストラーにも、希望するドメイン名が利用可能かどうかを確認する機能があります。
- 自宅やオフィスの{{Glossary("ISP", "インターネットサービスプロバイダー")}}が、小規模なウェブサイトのための限定的なホスティングを提供している場合もあります。利用できる機能は限られていますが、初めての試みには最適かもしれません。
- [Neocities](https://neocities.org/)、[Google Sites](https://sites.google.com/)、[WordPress](https://wordpress.com/) のような無料のサービスもあります。こうしたサービスの範囲は限定的である場合もありますが、初期の実験を行うには十分です。

### オンラインツールの利用

ウェブサイトをオンラインで公開できるツールもあります。

- [GitHub](https://github.com/) は、「ソーシャルコーディング」サイトです。コードリポジトリーをアップロードして [Git](https://git-scm.com/) **バージョン管理システム**に保存することができます。このシステムは既定でオープンソースになっており、世界中の誰もが GitHub のコードを見つけ、それを使い、そこから学び、改良することができます。また、 GitHub には [GitHub Pages](https://pages.github.com/) という便利な機能があり、ウェブサイトのコードをウェブ上で公開することができます。
- [Netlify](https://www.netlify.com/) は、GitHub リポジトリーから直接静的ウェブサイトをホスティングできるウェブホスティングプラットフォームです。同時に、デプロイプレビュー、サーバーレス機能、フォーム処理など、数多くの追加機能も提供しています。
- [Fly.io](https://fly.io/) は、アプリケーションやデータベースをユーザーの近くに展開することができるプラットフォームです。バックエンドサービスが要求されるウェブアプリケーションを保有している場合に、特に適しています。

これらのオプションは、一般的に無料で利用できますが、機能には制限があります。

### CodePen のようなウェブベースの IDE の利用

ウェブアプリの開発環境をエミュレートするウェブアプリは数多くあり、HTML、CSS、JavaScriptを書き込むことができる上に、それらがレンダリングされて出力ペインに表示されます。一般的に、これらのツールは簡単で、学習にも適しており、コードを共有するのにも適しています（例えば、別のオフィスにいる同僚とテクニックを共有したり、デバッグの助けを求めたりする場合など）。また、（基本的な機能については）無料です。レンダリングされたページを、固有のウェブアドレスでホスティングしてくれます。ただし、機能は限られており、通常は資産（画像など）のホスティングスペースは提供されていません。

これらを試してみて、一番合ったものを見つけてみましょう。

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## GitHub 経由での公開

では、GitHub Pages 経由でサイトを公開する方法を試してみましょう。

1. まず、 [GitHub にサインアップして](https://github.com/)、メールアドレスの認証を受けましょう。
2. 次に ファイルを入れるための[リポジトリーを作成](https://github.com/new)しましょう。このページで次のようにします。
   1. このページ上の、 _Repository name_ ボックスに _ユーザー名_.github.io と入力してください。 _ユーザー名_ はあなたのユーザー名です。例えば、Bob Smith であれば _bobsmith.github.io_ と入力します。
   2. ページの最下部にある _Create repository_ ボタンをクリックしてください。
3. 次のページで、_uploading an existing file_ というリンクを探してクリックしてください。これでファイルのアップロードページが表示されます。
4. この時点で、ローカルファイルシステムからウェブページ上にファイルをドラッグ＆ドロップして、GitHub リポジトリーにアップロードするのが最適です。その手順は次のとおりです。
   1. お使いのコンピューターで、ファイルエクスプローラーまたは Finder のウィンドウを開いてください。
   2. ファイルエクスプローラーとウェブブラウザーのウィンドウの両方が見えるようにしてください。画面上でそれらを隣り合わせに配置してください。
   3. ファイルエクスプローラーのウィンドウで、サンプルウェブサイトが含まれているフォルダーまで移動してください。
      > [!NOTE]
      > フォルダーの中に `index.html` ファイルがあるかを確認しましょう。
   4. サンプルウェブサイトのファイルをすべて選択します（例えば、キーボードショートカットの <kbd>Ctrl</kbd> + <kbd>A</kbd> を使用するか、macOS では <kbd>Cmd</kbd> + <kbd>A</kbd> を使用します）。
   5. ファイルエクスプローラーからファイルをドラッグし、GitHub ページの "Drag files here to add them to your repository" というセクションにドロップしてください。
   6. このセクションの境界線とテキストが変化し、ファイルをドロップできる状態であることを示します。この場所でファイルをドロップしてください。
   7. ページ下部の _Commit changes_ ボタンをクリックしてください。
5. ウェブサイトをオンライン上で見るために、ブラウザーから _username_.github.io に移動しましょう。例えば、ユーザー名が _chrisdavidmills_ なら、[_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/) に移動しましょう。

   > [!NOTE]
   > ウェブサイトが公開されるまで、数分かかることがあります。すぐに表示されない場合は、数分待ってから再度試してください。

もっと詳しく知りたい人は [GitHub Pages Help](https://docs.github.com/en/pages/getting-started-with-github-pages) を見てください。

## 参考文献

- [ウェブサーバーとは何か](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [ドメイン名を理解する](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [ウェブサイトで何かするのにいくらかかるか?](/ja/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): Codecademy の良いチュートリアルで、もう少し詳しく追加のテクニック含めて示しています。

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
