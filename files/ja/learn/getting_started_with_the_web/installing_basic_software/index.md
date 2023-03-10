---
title: 基本的なソフトウェアのインストール
slug: Learn/Getting_started_with_the_web/Installing_basic_software
l10n:
  sourceCommit: c3f60e53c878be3cc8d196c31a83928a42449088
---

{{LearnSidebar}}{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

*基本的なソフトウェアのインストール*では、簡単なウェブ開発をするのに必要なツールを紹介し、それらのツールを適切にインストールする方法を紹介します。

## 現時点で実際にどのようなツールが必要か

この記事では、必要最小限のツールをセットアップしましょう。テキストエディターと最新のウェブブラウザーです。

### テキストエディターのインストール

コンピューターには、おそらくすでにテキストエディターが入っています。 Windows には[メモ帳](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%A2%E5%B8%B3)が、 macOS には[テキストエディット](https://ja.wikipedia.org/wiki/%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%A8%E3%83%87%E3%82%A3%E3%83%83%E3%83%88)が、 Linux にはディストリビューションによっていろいろですが、 Ubuntu には [gedit](https://ja.wikipedia.org/wiki/Gedit) が初めからインストールされているはずです。

ウェブ開発においては、おそらくメモ帳やテキストエディットより良いものがあります。おすすめは [Visual Studio Code](https://code.visualstudio.com/) で、これは無料のエディターであり、ライブプレビューやコードヒントを提供しています。

### 最新のウェブブラウザーのインストール

次に、コードをテストするためのデスクトップウェブブラウザーをいくつかインストールしましょう。以下からオペレーティングシステムを選び、リンクから好きなブラウザーをインストールしてみてください。

- Linux: [Firefox](https://www.mozilla.org/ja/firefox/new/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Brave](https://brave.com).
- Windows: [Firefox](https://www.mozilla.org/ja/firefox/new/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Internet Explorer](https://support.microsoft.com/ja/windows/internet-explorer-downloads-d49e1f0d-571c-9a7b-d97e-be248806ca70), [Microsoft Edge](https://www.microsoft.com/edge), [Brave](https://brave.com) （Windows 10 には最初から Edge が付属しています。 Windows 7 以降を使用している場合は、 Internet Explorer 11 がインストールできます。それ以外の場合は、他のブラウザーをインストールしてください。）
- macOS: [Firefox](https://www.mozilla.org/ja/firefox/new/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/safari/), [Brave](https://brave.com) （macOS と iOS には最初から Safari が付属しています。）

次に進む前に、テストに使えるように最低でも 2 つのブラウザーをインストールするようにしてください。

> **メモ:** Internet Explorer は最新のウェブ機能と互換性がなく、プロジェクトを実行できない場合があります。使用している人はほとんどいないので、ふつうはウェブプロジェクトを作るのに意識する必要はありません。学習中であれば、まず意識する必要はありません。時には、それに対応しなければならないプロジェクトに遭遇することもあるかもしれません。

### ローカルのウェブサーバーのインストール

いくつかの例では、正しく動作させるためにウェブサーバー上で実行する必要があるものもあります。[ローカルテストサーバーのインストール方法](/ja/docs/Learn/Common_questions/set_up_a_local_testing_server)にて、その方法が見つかります。

## プロはどんなツールを使っている？

以下の一覧はいかにも怖そうですが、幸いなことに、これらのほとんどについて何も知らなくてもウェブ開発を始めることは可能です。

- **コンピューター**。当たり前のことだと思う人もいるかもしれませんが、携帯電話や図書館のコンピューターを使ってこの記事を読んでいる人もいるでしょう。しっかりとしたウェブ開発のためには、Windows、macOS、Linux などが動作するデスクトップ・ノートパソコンを使ってください。
- **テキストエディター**。コードを書くために必要です。テキストエディター（たとえば [Visual Studio Code](https://code.visualstudio.com/)、[Notepad++](https://notepad-plus-plus.org/)、[Sublime Text](https://www.sublimetext.com/)、[Atom](https://atom.io/)、[GNU Emacs](https://www.gnu.org/software/emacs/)、[VIM](https://www.vim.org/)）でも、複合的な機能を持つソフトウェア（[Dreamweaver](https://www.adobe.com/jp/products/dreamweaver.html) や [WebStorm](https://www.jetbrains.com/webstorm/)）でも構いません。 Office 文書のエディターは、ウェブブラウザーが使うレンダリングエンジンに干渉する隠し要素に依存しているため、この用途には適していません。
- **ウェブブラウザー**。自分が書いたコードをテストするために必要です。現在最も使われているブラウザーは、[Firefox](https://www.mozilla.org/ja/firefox/new/)、[Chrome](https://www.google.com/chrome/)、[Opera](https://www.opera.com/)、[Safari](https://www.apple.com/safari/)、[Internet Explorer](https://support.microsoft.com/en-us/windows/internet-explorer-downloads-d49e1f0d-571c-9a7b-d97e-be248806ca70) や [Microsoft Edge](https://www.microsoft.com/edge) などです。モバイル端末や、ウェブサイトを見る人たちが使うかもしれない古いブラウザー（IE 8-10 など）でもサイトがどう動くのかをテストしましょう。テキストベースの端末ウェブブラウザーである [Lynx](https://lynx.browser.org/) は、視覚障碍のあるユーザーがサイトをどのように体験しているかを見るのに適しています。
- **画像編集ソフト**（[GIMP](https://www.gimp.org/)、[Paint.NET](https://www.getpaint.net/)、[Photoshop](https://www.adobe.com/jp/products/photoshop.html)、[Sketch](https://www.sketch.com)、[XD](https://www.adobe.com/products/xd.html) など）。ウェブページの画像を作成するために必要になります。
- **バージョン管理システム**。複数の人とチームでサイトを作るときや、他の人とコードを共有するときに、誤って編集の衝突などが起こらないようにするために必要になります。現在では、 [Git](http://git-scm.com/) が最も有名なバージョン管理システムであり、これに基づいたコードホスティングサービスの [GitHub](https://github.com/) や [GitLab](https://about.gitlab.com/) もとても有名です。
- **FTP プログラム**。ウェブページを公開する時にファイルをサーバーにアップロードするために必要です（この目的では、 FTP の代わりに [Git](https://git-scm.com/) が用いられつつあります）。(S)FTP の機能が含まれている、[Cyberduck](https://cyberduck.io/)、[Fetch](https://fetchsoftworks.com/)、[FileZilla](https://filezilla-project.org/) などのプログラムを使うと良いでしょう。
- **自動化システム**、[Webpack](https://webpack.js.org/)、[Grunt](https://gruntjs.com/)、[Gulp](https://gulpjs.com/) はコードの最小化やテストの実行などのような反復作業を自動的に実行することができます。
- ライブラリーやフレームワークなど、共通機能をすばやく書くためのものです。ライブラリーは、既存の JavaScript や CSS のファイルであり、コードで使用するために、すぐに使える機能を提供しています。フレームワークは、この考えをさらに進めて、ウェブアプリケーションを書くためのカスタム構文を持つ完全なシステムを提供する傾向があります。
- 他にも便利なツールがたくさんあります！

{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

## このモジュール

- [基本的なソフトウェアのインストール](/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
- [ウェブサイトをどんな外見にするか](/ja/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [ファイルの扱い](/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [HTML の基本](/ja/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS の基本](/ja/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [JavaScript の基本](/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [ウェブサイトの公開](/ja/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
- [ウェブのしくみ](/ja/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
