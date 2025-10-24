---
title: ウェブサイトを作るのにどんなソフトウェアが必要か
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

この記事では、ウェブサイトを編集、アップロード、または閲覧するときに必要なソフトウェアについて説明します。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        すでに<a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web">ウェブページ、ウェブサイト、ウェブサーバー、検索エンジンの違い</a>について知っておく必要があります。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        ウェブサイトを編集、アップロード、閲覧するときに必要なソフトウェアについて学びます。
      </td>
    </tr>
  </tbody>
</table>

## 概要

ウェブ開発に必要なほとんどのプログラムは無料でダウンロードできます。この記事では、いくつかのリンクを提供します。

次のようなツールが必要です。

- ウェブページの作成と編集
- ウェブサーバーにファイルをアップロードする
- ウェブサイトを見る

ほぼすべてのオペレーティングシステムには、既定でテキストエディターとブラウザーが含まれており、ウェブサイトの閲覧に使用できます。結果的には、通常はファイルをウェブサーバーに転送するためのソフトウェアを入手するだけで済みます。

## アクティブラーニング

_利用可能なアクティブラーニングはまだありません。[ぜひ協力をご検討ください](/ja/docs/MDN/Community/Getting_started)。_

## より深く掘り下げる

### ウェブページの作成と編集

ウェブサイトを作成したり編集したりするために、テキストエディターが必要です。テキストエディターは、形式を持たないテキストファイルの作成や修正を行います。 **{{Glossary("RTF")}}** のような他の形式では、太字や下線のような書式を追加することができます。しかし、これらの形式はウェブページの作成には適していません。ウェブサイトを構築する際に幅広い作業に使用するので、どのテキストエディターを使用するかを考えておきましょう。

すべてのデスクトップ OS には、基本的なテキストエディターが付属しています。これらのエディターはすべて簡単なものですが、ウェブページのコーディングのための特別な機能は持っていません。そこで、お望みなら、利用可能なサードパーティのツールがたくさんあります。サードパーティのテキストエディターには、構文の色付け、自動補完、セクションの折りたたみ、コード検索などの便利な追加機能がよくついています。エディターの簡単なリストを挙げておきます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">OS</th>
      <th scope="col">内蔵エディター</th>
      <th scope="col">サードパーティのエディター</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li>
            <a
              href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%A2%E5%B8%B3"
              rel="external"
              >メモ帳</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://notepad-plus-plus.org/">Notepad++</a></li>
          <li>
            <a href="https://visualstudio.microsoft.com/">Visual Studio Code</a>
          </li>
          <li><a href="https://www.jetbrains.com/webstorm/">Web Storm</a></li>
          <li><a href="https://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li>
            <a href="https://ja.wikipedia.org/wiki/テキストエディット" rel="external"
              >TextEdit</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <a href="https://www.barebones.com/products/textwrangler/"
              >TextWrangler</a
            >
          </li>
          <li>
            <a href="https://visualstudio.microsoft.com/">Visual Studio Code</a>
          </li>
          <li><a href="https://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a href="https://ja.wikipedia.org/wiki/Vi" rel="external">Vi</a>
            (すべての UNIX)
          </li>
          <li>
            <a href="https://ja.wikipedia.org/wiki/Gedit" rel="external"
              >GEdit</a
            >
            (GNOME)
          </li>
          <li>
            <a
              href="https://ja.wikipedia.org/wiki/Kate"
              rel="external"
              >Kate</a
            >
            (KDE)
          </li>
          <li>
            <a href="https://ja.wikipedia.org/wiki/Leafpad" rel="external"
              >LeafPad</a
            >
            (Xfce)
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://www.gnu.org/software/emacs/">Emacs</a></li>
          <li><a href="https://www.vim.org/" rel="external">VIM</a></li>
          <li>
            <a href="https://visualstudio.microsoft.com/">Visual Studio Code</a>
          </li>
          <li><a href="https://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>ChromeOS</td>
      <td>
        <ul>
          <li><a href="https://en.wikipedia.org/wiki/Text_(Chrome_app)">Text</a></li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

こちらは、高度なテキストエディターのスクリーンショット例です。

![Notepad++ のスクリーンショット](notepadplusplus.png)

こちらは、オンラインのテキストエディターのスクリーンショット例です。

![ShiftEdit のスクリーンショット](shiftedit.png)

### ウェブ上へのファイルのアップロード

ウェブサイトを公開する準備が整ったら、ウェブページをウェブサーバーにアップロードする必要があります。さまざまなプロバイダーからサーバー上のスペースを購入できます（[ウェブ上で何かをするためにどれくらいコストがかかる？](/ja/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)を参照）。どのプロバイダーを使用するかが決まったら、プロバイダーは通常、SFTP URL、ユーザー名、パスワード、およびそれらのサーバーへの接続に必要なその他の情報の形式で、アクセス情報をメールで送信します。(S)FTPは今や幾分時代遅れになっていて、 [RSync](https://ja.wikipedia.org/wiki/Rsync) や [Git/GitHub](https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site) のような他のアップロードシステムが普及し始めていることを覚えておいてください。

> [!NOTE]
> FTP は本質的に安全ではありません。ホスティングプロバイダーが安全な接続、例えば SSH を介した SFTP または RSync の使用を許可していることを確認してください。

ウェブサーバーを作成する際、ウェブサーバーにファイルをアップロードすることは非常に重要なステップなので、[別の記事](/ja/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)で詳しく説明します。ここでは、単純な機能に限った無料 (S)FTP クライアントの例を示すにとどめます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">OS</th>
      <th colspan="2" scope="col">FTP ソフトウェア</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li><a href="https://winscp.net">WinSCP</a></li>
          <li><a href="https://mobaxterm.mobatek.net/">Moba Xterm</a></li>
        </ul>
      </td>
      <td rowspan="3">
        <ul>
          <li>
            <a href="https://filezilla-project.org/">FileZilla</a> (すべての OS)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a
              href="https://apps.gnome.org/ja/Nautilus/"
              rel="external"
              >Nautilus/Files</a
            >
            (GNOME)
          </li>
          <li>
            <a href="https://dolphin.com/" rel="external">Dolphin</a> (KDE)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li><a href="https://cyberduck.de/">Cyberduck</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>ChromeOS</td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a> (すべての OS)</li>
        </ul>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### ウェブサイトのテスト

[利用可能なウェブブラウザーは数多くあります](https://en.wikipedia.org/wiki/List_of_web_browsers)。ウェブサイトを開発している場合は、少なくとも次の主要なブラウザーで、デスクトップとモバイルの両方のプラットフォームで検査して、ほとんどのユーザーに正しく動作することを確認してください。

- [Mozilla Firefox](https://www.mozilla.org/ja/firefox/new/)
- [Google Chrome](https://www.google.com/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

特定のグループ（技術プラットフォームやロケールなど）を対象とする場合は、[UC Browser](https://www.ucweb.com/) や [Opera Mini](https://www.opera.com/mini) などの追加のブラウザーでサイトを検査する必要があるかもしれません。

一部のブラウザーは特定のオペレーティングシステムでしか動作しないため、検査は複雑になります。特に、 Apple Safari は iOS、iPadOS、macOS で動作します。 [Browsershots](https://browsershots.org/) または [Browserstack](https://www.browserstack.com/) などのサービスをうまく活用することをお勧めします。 Browsershots は、さまざまなブラウザーで表示されるウェブサイトのスクリーンショットを作成します。 Browserstack は、仮想マシンへの完全なリモートアクセスを提供するため、最も一般的な環境やさまざまなオペレーティングシステムでサイトを検査することができます。あるいは、自分自身で仮想マシンを設定することもできますが、そのためにはある程度の専門知識が必要です。

詳しくは[テスト実行のための戦略: テストラボを用意する](/ja/docs/Learn_web_development/Extensions/Testing/Testing_strategies#テストラボを用意する)を参照してください。

ぜひ、実際の端末、特に実際のモバイル端末で検査を実行してください。もちろん、モバイル端末は高価ですので、あまり費用をかけずに多くのプラットフォームで検査を行いたい場合は、チームで端末を共有することをお勧めします。実際の端末の検査にスケーラブルなクラウドアクセスを利用したい場合は、 [App Live: BrowserStack's Interactive Mobile App Testing platform](https://www.browserstack.com/app-live) も検討してみてください。

## 次のステップ

- 一部のソフトウェアは無料ですが、すべてではありません。[ウェブ上で何かをするのにいくらのコストがかかるかを調べましょう](/ja/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)。
- テキストエディターについてさらに学びたいのなら、[テキストエディターの選び方とインストール方法](/ja/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors)に関する記事をお読みください。
- ウェブ上にウェブサイトを公開する方法が分からないのであれば、[「ウェブサーバーにファイルをアップロードする方法」](/ja/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)を参照してください。
