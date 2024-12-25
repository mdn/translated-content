---
title: どんなテキストエディターが利用できるか
slug: Learn_web_development/Howto/Tools_and_setup/Available_text_editors
original_slug: Learn/Common_questions/Tools_and_setup/Available_text_editors
l10n:
  sourceCommit: 8906ca75f60f205a6dd18fe3c824bbee228802b2
---

{{QuicklinksWithSubPages("/ja/Learn/Common_questions")}}

この記事ではウェブ開発向けのテキストエディターをインストールする際に考慮すべき点をいくつか取り上げます。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need"
        >ウェブサイトを構築するために必要な各種ソフトウェア</a
        >について理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        ウェブ開発者のニーズに合った、最適なテキストエディターの選び方を学びます。
      </td>
    </tr>
  </tbody>
</table>

## 概要

ウェブサイトは、ほとんどテキストファイルで構成されています。その開発を容易で快適なものにするため、最適なテキストエディターを選びましょう。

テキストエディターは、コンピューター科学にとって基本的なものです（ウェブ開発はコンピューター科学そのものですよね）。そのため、膨大な選択肢があります。理想を言えば、できるだけ多くのエディターを試して、ワークフローに適したものを見つけるのが良いです。とは言っても、取っ掛かりをつけるため、いくつかの指針をあげることにします。

まず以下の点を検討しましょう。

- どの OS (オペレーティングシステム) を使用するか？
- どのような技術を扱うのか？
- テキストエディターに、どのような基本機能を求めるか？
- テキストエディターの機能を拡張したいか？
- テキストエディターを使用している間、サポートやヘルプが必要か？
- テキストエディターの使い勝手は重要か？

ここまでで価格に言及していないことに注目してください。明らかにそれも重要ですが、製品価格は、その品質や機能とはあまり関係ありません。使いやすいテキストエディターを無料で手に入れることも可能なのです。

人気のあるエディターの例を挙げてみましょう。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">エディター</th>
      <th scope="col">ライセンス</th>
      <th scope="col">価格</th>
      <th scope="col">OS</th>
      <th scope="col">サポート</th>
      <th scope="col">ドキュメント</th>
      <th scope="col">機能拡張</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://bluefish.openoffice.nl">Bluefish</a></td>
      <td>GPL 3</td>
      <td>無料</td>
      <td>Windows, Mac, Linux</td>
      <td>
        <a href="https://bfwiki.tellefsen.net/index.php/Mailinglists"
          >メーリングリスト</a
        >, <a href="https://bfwiki.tellefsen.net/index.php/Main_Page">wiki</a>
      </td>
      <td><a href="https://bluefish.openoffice.nl/manual/">オンラインマニュアル</a></td>
      <td>あり</td>
    </tr>
    <tr>
      <td><a href="https://brackets.io/" rel="external">Brackets</a></td>
      <td>MIT/BSD</td>
      <td>無料</td>
      <td>Windows, Mac, Linux</td>
      <td>
        <a href="https://webchat.freenode.net/?channels=brackets" rel="external"
          >IRC</a
        >
      </td>
      <td>
        <a href="https://github.com/adobe/brackets/wiki" rel="external"
          >GitHub Wiki</a
        >
      </td>
      <td>
        <a
          href="https://ingorichter.github.io/BracketsExtensionTweetBot/"
          rel="external"
          >あり</a
        >
      </td>
    </tr>
    <tr>
      <td><a href="https://nova.app/" rel="external">Nova</a></td>
      <td>クローズドソース</td>
      <td>$99</td>
      <td>Mac</td>
      <td>
        <a href="https://twitter.com/panic">Twitter</a>,
        <a href="https://panic.com/qa" rel="external">フォーラム</a>,
        <a href="https://nova.app/help/">オンライン</a>
      </td>
      <td><a href="https://help.panic.com/nova/">eBook</a></td>
      <td><a href="https://extensions.panic.com/">あり</a></td>
    </tr>
    <tr>
      <td><a href="https://www.codelobster.com">CodeLobster</a></td>
      <td>クローズドソース</td>
      <td>無料</td>
      <td>Windows, Mac, Linux</td>
      <td>
        <a href="https://www.codelobster.com/forum/index.php" rel="external"
          >フォーラム</a
        >, <a href="mailto:support@codelobster.com">メール</a>
      </td>
      <td><a href="https://www.codelobsteride.com/help/">オンラインマニュアル</a></td>
      <td>あり</td>
    </tr>
    <tr>
      <td>
        <a href="https://www.gnu.org/software/emacs/" rel="external">Emacs</a>
      </td>
      <td>GPL 3</td>
      <td>無料</td>
      <td>Windows, Mac, Linux</td>
      <td>
        <a
          href="https://www.gnu.org/software/emacs/manual/efaq.html"
          rel="external"
          >FAQ</a
        >,
        <a
          href="https://mail.gnu.org/mailman/listinfo/help-gnu-emacs"
          rel="external"
          >メーリングリスト</a
        >, <a href="news://gnu.emacs.help" rel="external">News Group</a>
      </td>
      <td>
        <a
          href="https://www.gnu.org/software/emacs/manual/html_node/emacs/index.html"
          >オンラインマニュアル</a
        >
      </td>
      <td>あり</td>
    </tr>
    <tr>
      <td><a href="https://www.espressoapp.com/">Espresso</a></td>
      <td>クローズドソース</td>
      <td>$99</td>
      <td>Mac</td>
      <td>
        <a href="mailto:hello@espressoapp.com">E-mail</a>
      </td>
      <td>
        <a href="https://help.espressoapp.com/">オンラインマニュアル</a>
      </td>
      <td>あり</td>
    </tr>
    <tr>
      <td><a href="https://wiki.gnome.org/Apps/Gedit">Gedit</a></td>
      <td>GPL</td>
      <td>無料</td>
      <td>Windows, Mac, Linux</td>
      <td>
        <a href="https://discourse.gnome.org/tag/gedit"
          rel="external">Discourse</a>, <a href="irc://irc.gnome.org/%23gedit">IRC</a>
      </td>
      <td>
        <a href="https://help.gnome.org/users/gedit/stable/">オンラインマニュアル</a>
      </td>
      <td><a href="https://wiki.gnome.org/Apps/Gedit/ThirdPartyPlugins">あり</a></td>
    </tr>
    <tr>
      <td><a href="https://kate-editor.org/">Kate</a></td>
      <td>LGPL, GPL</td>
      <td>無料</td>
      <td>Windows, Mac, Linux</td>
      <td>
        <a href="mailto:kwrite-devel@kde.org">メーリングリスト</a>,
        <a href="irc://irc.kde.org/kate">IRC</a>
      </td>
      <td>
        <a href="https://docs.kde.org/index.php?application=kate&language=en"
          >オンラインマニュアル</a
        >
      </td>
      <td>あり</td>
    </tr>
    <tr>
      <td>
        <a href="https://www.activestate.com/products/komodo-edit/" rel="external"
          >Komodo Edit</a
        >
      </td>
      <td>MPL</td>
      <td>無料</td>
      <td>Windows, Mac, Linux</td>
      <td><a href="https://community.komodoide.com/" rel="external">フォーラム</a></td>
      <td>
        <a href="https://docs.activestate.com/komodo" rel="external"
          >オンラインマニュアル</a
        >
      </td>
      <td><a href="https://docs.activestate.com/komodo/12/manual/extensions.html">あり</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://www.notepad-plus-plus.org/" rel="external"
          >Notepad++</a
        >
      </td>
      <td>GPL</td>
      <td>無料</td>
      <td>Windows</td>
      <td>
        <a href="https://sourceforge.net/p/notepad-plus/discussion/">Forum</a>
      </td>
      <td>
        <a
          href="https://npp-user-manual.org/"
          rel="external"
          >オンラインマニュアル</a
        >
      </td>
      <td>
        <a
          href="https://github.com/notepad-plus-plus/nppPluginList"
          rel="external"
          >あり</a
        >
      </td>
    </tr>
    <tr>
      <td><a href="https://www.pspad.com/">PSPad</a></td>
      <td>クローズドソース</td>
      <td>無料</td>
      <td>Windows</td>
      <td>
        <a href="https://www.pspad.com/en/faq.htm">FAQ</a>,
        <a href="https://forum.pspad.com/" rel="external">フォーラム</a>
      </td>
      <td><a href="https://www.pspad.com/en/helpfiles.htm">オンラインヘルプ</a></td>
      <td><a href="https://www.pspad.com/en/pspad-extensions.php">あり</a></td>
    </tr>
    <tr>
      <td>
        <a href="https://www.sublimetext.com/" rel="external">Sublime Text</a>
      </td>
      <td>クローズドソース</td>
      <td>$70</td>
      <td>Windows, Mac, Linux</td>
      <td>
        <a
          href="https://www.sublimetext.com/forum/viewforum.php?f=3"
          rel="external"
          >Forum</a
        >
      </td>
      <td>
        <a href="https://www.sublimetext.com/docs/">Official</a>,<a
          href="https://docs.sublimetext.io/"
        >
          Unofficial</a
        >
      </td>
      <td><a href="https://sublime.wbond.net/">あり</a></td>
    </tr>
    <tr>
      <td><a href="https://macromates.com/" rel="external">TextMate</a></td>
      <td>クローズドソース</td>
      <td>$50</td>
      <td>Mac</td>
      <td>
        <a href="https://twitter.com/macromates">Twitter</a>,
        <a href="https://webchat.freenode.net/?channels=textmate">IRC</a>,
        <a href="https://lists.macromates.com/listinfo/textmate" rel="external"
          >メーリングリスト</a
        >, <a href="mailto:tm-support@macromates.com">E-mail</a>
      </td>
      <td>
        <a href="https://manual.macromates.com/en/">オンラインマニュアル</a>,
        <a href="https://wiki.macromates.com/Main/HomePage" rel="external"
          >Wiki</a
        >
      </td>
      <td>
        <a href="https://wiki.macromates.com/Main/Plugins" rel="external"
          >あり</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.barebones.com/products/bbedit/"
          rel="external"
          >BBEdit</a>
      </td>
      <td>クローズドソース</td>
      <td>無料</td>
      <td>Mac</td>
      <td>
        <a
          href="https://www.barebones.com/support/bbedit/"
          rel="external"
          >FAQ</a
        >
      </td>
      <td>
        <a
          href="https://www.barebones.com/products/bbedit/features.html"
          rel="external"
          >オンラインマニュアル</a
        >
      </td>
      <td>なし</td>
    </tr>
    <tr>
      <td><a href="https://www.vim.org/" rel="external">Vim</a></td>
      <td>
        <a
          href="https://vimdoc.sourceforge.net/htmldoc/uganda.html#license"
          rel="external"
          >固有のオープンライセンス</a
        >
      </td>
      <td>無料</td>
      <td>Windows, Mac, Linux</td>
      <td>
        <a href="https://www.vim.org/maillist.php#vim" rel="external"
          >メーリングリスト</a
        >
      </td>
      <td><a href="http://vimdoc.sourceforge.net/">オンラインマニュアル</a></td>
      <td>
        <a
          href="https://www.vim.org/scripts/script_search_results.php?order_by=creation_date&#x26;direction=descending"
          rel="external"
          >あり</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
      </td>
      <td>
        <a href="https://github.com/microsoft/vscode">オープンソース</a> (MIT
        license) / 製品固有のライセンス
      </td>
      <td>無料</td>
      <td>Windows, Mac, Linux</td>
      <td>
        <a href="https://code.visualstudio.com/docs/supporting/faq">FAQ</a>
      </td>
      <td><a href="https://code.visualstudio.com/docs">ドキュメント</a></td>
      <td><a href="https://marketplace.visualstudio.com/VSCode">あり</a></td>
    </tr>
  </tbody>
</table>

## アクティブラーニング

このアクティブラーニングのコーナーでは、あなたが選択したエディターを使用したりインストールしたりすることを試していただきたいと思います。あなたのコンピューターには、上記で提案したエディターが既にインストールされているかもしれません（例： GNOME デスクトップを使用している場合は Gedit、KDE を使用している場合は Kate など）が、そうでなければ、あなたが選んだ一つまたは複数のテキストエディターを使用してみてください。

お使いのエディターの設定を掘り下げ、マニュアルや文書を読んで、その機能を確認してみてください。特に（エディターで可能であれば）、以下のことを試してみてください。

- 構文ハイライト表示の設定や色の変更
- [インデント](https://ja.wikipedia.org/wiki/%E5%AD%97%E4%B8%8B%E3%81%92)の幅をいじって、ニーズに合わせて適切な設定にする。
- 自動保存とセッション保存の設定を確認する
- 何らかの利用できる[プラグイン](https://ja.wikipedia.org/wiki/プラグイン)を設定し、新しいプラグインの入手方法を調査する
- カラースキームの変更
- ビューの設定を調整し、ビューのレイアウトを変更する方法を確認する
- エディターが対応しているプログラミング言語/技術を確認する

学習中は、ほとんどのテキストエディターの設定については既定値を使用しても問題ありませんが、選択したツールに精通することが重要であり、自分の使用目的に最適なものを選択することができるようになります。エディターやツールのカスタマイズについては、経験を積むことでより深く理解できるようになりますし、より重要なのは、どの機能が自分の目的にとってより有用であるかを知ることです。

## より深く掘り下げる

### 選択基準

それでは、テキストエディターを選ぶとき何を考慮すべきでしょうか？

#### どの OS (オペレーティングシステム) を使用するか

もちろん、あなたの自由です。しかし、エディターの中には特定の OS でしか利用できないものもあるので、もしあなたが行ったり来たりするのが好きなら、選択肢が限られてしまいます。あなたのシステムで動作するのであれば、どんなエディターでも仕事を取得することができますが、クロスプラットフォームのエディターであれば、 OS から OS への移行が容易になります。

そのため、最初に使用する OS を探し、指定されたエディターが対応しているかどうかを調べます。ほとんどのエディターはウェブサイトで Windows と Mac のどちらに対応しているかを明記していますが、特定のバージョンにしか対応していないエディターもあります。 Ubuntu を実行している場合は、 Ubuntu Software Center で検索するのが最善の方法です。もちろん一般的に、 Linux/UNIX の世界はかなり多様で、さまざまなディストリビューションが互換性のない異なるパッケージングシステムで作業しています。つまり、あなたが無名のエディターに心を定めた場合、自分でソースからコンパイルする必要があるかもしれないということです（気の弱い人には向きません）。

#### どのような技術を操りたいのか

一般論を言えば、テキストエディターなら、どんなテキストファイルでも開くことができます。自分のメモ書き程度なら、それで十分です。しかし、ウェブ開発を行い、{{Glossary("HTML")}}、{{Glossary("CSS")}}、{{Glossary("JavaScript")}} を使ったりすると、ファイルはかなり大きくて複雑なものになります。ウェブで扱う技術情報に基づいテキストエディターを選択して、作業を簡単にしましょう。多くのテキストエディターには次のような支援機能があります。

- **[構文ハイライト](https://ja.wikipedia.org/wiki/シンタックスハイライト)**。使用する技術のキーワードを着色表示することで、ファイルが読みやすくなります。
- **[コードの補完](https://ja.wikipedia.org/wiki/自動補完#ソースコードエディタ)**。よく出てくる構造を自動的に補完して、入力を手助けしてくれます（例えば、 HTML のタグを自動的に閉じたり、正しい CSS 属性の候補を挙げるなど）。
- **[コードスニペット](https://ja.wikipedia.org/wiki/スニペット)**。新しい HTML 文書を作り始めるときに見られたように、多くの技術は同じ文書構造を何度も使用します。コードスニペットを文書にあらかじめ記入しておくことで、すべてを入力し直す手間を省くことができます。

構文ハイライトはほとんどのテキストエディターが対応していますが、他の 2 つの機能はまだのものが多いのが現状です。使用する予定のテキストエディターが、 {{Glossary("HTML")}}、 {{Glossary("CSS")}}、それに {{Glossary("JavaScript")}} をハイライトできるか確認しておきましょう。

#### テキストエディターにどのような基本機能を求めるか

ニーズと計画によりますが、以下の機能は多くの場合に有用です。

- 文字列の検索と置換。単一ファイル、あるいは複数ファイルにわたって実行できるとよい。検索には{{Glossary("Regular Expression", "正規表現")}}、必要なら他のパターンを使う。
- 指定した行へ移動する。
- 大きなファイルの離れた場所を、画面を分割して表示する。
- HTML をブラウザー上で見えるように表示する。
- 散在する文字列を同時に選択する。
- プロジェクトファイルとディレクトリーを表示する。
- 自動整形機能で、コードを読みやすくする。
- 英文などのスペルチェックを行う。
- インデント設定に基づきコードを自動インデントする。

#### テキストエディターの機能を拡張したいか

拡張型のテキストエディターは、標準で組み込まれた機能こそ少ないが、必要に応じて機能を拡張することができます。

どのような機能が必要かわからない場合、またはお気に入りのエディターにそのような機能がない場合、拡張可能なエディターを探してみてください。最高のエディターは多くのプラグインを提供しており、新しいプラグインを自動的に探してインストールする方法が理想的です。

もしあなたが豊富な機能が好きで、プラグインのためにエディターの動作が遅くなりがちなら、 [IDE](https://ja.wikipedia.org/wiki/統合開発環境) （統合開発環境）を使用してみてください。 IDE は 1 つのインターフェイスで多くのツールを提供し、初心者には少し大変ですが、エディターの制限が多いと感じるなら常にオプションです。人気のある IDE をいくつか紹介します。

- [Aptana Studio](https://www.axway.com/en/aptana)
- [Eclipse](https://www.eclipse.org/)
- [Komodo IDE](https://www.activestate.com/products/komodo-ide/)
- [NetBeans IDE](https://netbeans.apache.org//)
- [Visual Studio](https://visualstudio.microsoft.com/)
- [WebStorm](https://www.jetbrains.com/webstorm/)

#### テキストエディターを使用している間、サポートやヘルプが必要か

テキストエディターの場合、 2 種類の対応をしているかどうかを確認しましょう。

- ユーザー向けのコンテンツ（FAQ、マニュアル、オンラインヘルプなど）
- 開発者や他のユーザーとのディスカッション（フォーラム、メール、チャットなど）

エディターの使用方法を学ぶときは、書かれているドキュメントを使用しましょう。エディターをインストールしたり使用したりする際にトラブルシューティングが発生した場合は、他のユーザーと連絡を取りましょう。

#### テキストエディターの使い勝手は重要か

たしかに、好みの問題かもしれません。いっぽうでは、表示色やボタンの位置など、 UI （ユーザーインターフェイス）のそこかしこをカスタマイズしたがる人もいます。変更可能な範囲はエディターごとに異なるので、導入前に調べておきましょう。色遣いを変えられるエディターは多くあります。しかし、カスタマイズしたいことがあまり多いようなら、統合開発環境を選んだ方が賢明です。

### インストールとセットアップ

テキストエディターのインストールは、非常に分かりやすいのが普通です。その方法はプラットフォーム（OS）によって変わりますが、それほど難しいものではありません。:

- **Windows:** インストールファイルは通常、 `.exe` や `.msi` の実行可能ファイルとして提供されます。また、圧縮ファイル（`.zip`、`.7z`、`.rar` など）として提供されることもあります。その場合は、解凍するソフトウエアが別途必要になりますが、`.zip` ファイルの解凍ソフトは Windows に標準で付属してきます。
- **Mac:** エディターのウェブサイトから、 `.dmg` ファイルをダウンロードします。 Apple Store から簡単にインストールできるエディターもあります。
- **Linux:** 主要なディストリビューションについては、グラフィカルインターフェイスのあるパッケージマネージャー（Ubuntu ソフトウエアセンター、mintInstall、GNOME Software、 \&c など）からインストールできます。また、パッケージ化された `.deb` や `.rpm` ファイルとして入手できることもできます。リポジトリーサーバーからインストールすることも多いし、最悪の場合ソースコードを自分でコンパイルしなければならないこともあります。テキストエディターのウェブサイトにあるインストール手順の説明を、じっくり調べることをお勧めします。

新しいエディターをインストールしても、**[ファイルの関連付け](https://en.wikipedia.org/wiki/File_association)**を変更するまで、 OS は既定のエディターでテキストファイルを開き続けるでしょう。これは、あなたがファイルをダブルクリックしたときに、 OS があなたの好みのエディターで開くように設定するのに役立ちます。

- [Windows](https://support.microsoft.com/ja/windows)

- [macOS](https://support.apple.com/guide/mac-help/choose-an-app-to-open-a-file-on-mac-mh35597/mac)

- Linux

  - [Ubuntu Unity](https://askubuntu.com/questions/289337/how-can-i-change-file-association-globally)
  - [GNOME](https://help.gnome.org/users/gnome-help/stable/files-open.html.en)
  - [KDE](https://userbase.kde.org/System_Settings/File_Associations)

## 次のステップ

良いテキストエディターが見つかったら、[基本的な作業環境](/ja/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server)（テストサーバー）の構築に着手しましょう。あるいは、[最初のウェブページ](/ja/docs/Learn/Getting_started_with_the_web)を書いてみるのもいいでしょう。
