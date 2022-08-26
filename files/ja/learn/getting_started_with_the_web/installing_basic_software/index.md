---
title: 基本的なソフトウェアのインストール
slug: Learn/Getting_started_with_the_web/Installing_basic_software
tags:
  - WebMechanics
  - l10n:priority
  - セットアップ
  - ツール
  - テキストエディタ
  - ブラウザー
  - 初心者
  - 学習
translation_of: Learn/Getting_started_with_the_web/Installing_basic_software
---
{{LearnSidebar}}{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

*「基本的なソフトウェアのインストール」*では、あなたが簡単な Web 開発をするのに必要なツールを紹介して、それらのツールを適切にインストールする方法について説明します。

## プロフェッショナルはどんなツールを使っている？

- **コンピューター** 当たり前のことだと思う人もいるかもしれませんが、携帯電話や図書館のコンピューターを使ってこの記事を読んでいる人もいるでしょう。しっかりとした Web 開発のためには、Windows、Mac、Linux などが実行されているデスクトップパソコンやノートパソコンを使った方がいいです。
- **テキストエディター** コードを書くために必要です。テキストエディター (たとえば [Visual Studio Code](https://code.visualstudio.com/)、[Notepad++](https://notepad-plus-plus.org/)、[Sublime Text](https://www.sublimetext.com/)、[Atom](https://atom.io/)、[GNU Emacs](https://www.gnu.org/software/emacs/)、[VIM](https://www.vim.org/)) でも、複合的な機能を持つソフトウェア ([Dreamweaver](https://www.adobe.com/jp/products/dreamweaver.html) や [WebStorm](https://www.jetbrains.com/webstorm/)) でも構いません。Office 文書のエディタは、Web ブラウザーが使うレンダリングエンジンに干渉する隠し要素に依存しているため、この用途には適していません。
- **Web ブラウザー** 自分が書いたコードをテストするために必要です。現在最も使われているブラウザーは、[Firefox](https://www.mozilla.org/ja/firefox/new/)、[Chrome](https://www.google.com/chrome/browser/)、[Opera](http://www.opera.com/)、[Safari](https://www.apple.com/safari/)、[Internet Explorer](http://windows.microsoft.com/ja-jp/internet-explorer/download-ie) や [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) などです。携帯電話などのモバイルデバイスで Web サイトがどのように表示されるのかもテストするべきです。また、Web サイトを見る人たちが使うかもしれない古いブラウザー (IE 8-10 など) でもできればテストした方が良いです。テキストベースのターミナル Web ブラウザーである [Lynx](https://lynx.browser.org/) は、視覚障害のあるユーザーがサイトをどのように体験しているかを見るのに最適です。
- **画像編集ソフト** ([GIMP](http://www.gimp.org/)、[Paint.NET](http://www.getpaint.net/)、[Photoshop](https://www.adobe.com/jp/products/photoshop.html) など) Web ページの画像を作成するために必要になります。
- **バージョン管理システム** 複数の人とチームでサイトを作るときや、他の人とコードを共有するときに、誤って編集の衝突などが起こらないようにするために必要になります。現在では、[Git](http://git-scm.com/) が最も有名なバージョン管理システムであり、[Git](http://git-scm.com/) に基づいたコードホスティングサービスの [GitHub](https://github.com/) もとても有名です。
- **FTP プログラム** Web ページを公開する時にファイルをサーバーにアップロードするために必要です (この目的で、だんだんと、FTP の代わりに [Git](http://git-scm.com/) が用いられつつあります)。(S)FTP の機能が含まれている、[Cyberduck](https://cyberduck.io/)、[Fetch](http://fetchsoftworks.com/)、[FileZilla](https://filezilla-project.org/) などのプログラムを使うと良いでしょう。
- **自動化システム**、[Grunt](http://gruntjs.com/) または [Gulp](https://gulpjs.com/) のようなソフトウェアを使うと、同じような繰り返し作業を自動的に実行することができます。たとえば、コードのサイズを自動的に小さくしたり、エラーがないかどうかを自動で確認することができます。
- テンプレート、ライブラリ、フレームワークなど。これらを利用すると、Web サイトを作る時によく使われるコードを短時間で用意することができます。
- 他にも便利なツールがたくさんあります！

## 今の私にはどんなツールが必要？

上のリストにはたくさんのツールが書かれていて、ちょっと恐ろしかったかもしれませんね。でも大丈夫です。Web 開発を始めるのには、まだ上のツールをほとんど知らなくても問題ありません。これから私たちが、Web 開発に必要最小限のツールのセットアップの仕方を説明しておきます。必要なものは、テキストエディタと最新の Web ブラウザーだけで十分です。

### テキストエディタのインストール

あなたのコンピューターには、おそらく初めから基本的なテキストエディタがインストールされているはずです。Windows には[メモ帳](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%A2%E5%B8%B3)が、MacOS には[テキストエディット](https://ja.wikipedia.org/wiki/%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%A8%E3%83%87%E3%82%A3%E3%83%83%E3%83%88)が、Linux の場合はディストリビューションによっていろいろですが、Ubuntu には [gedit](https://ja.wikipedia.org/wiki/Gedit) が初めからインストールされているはずです。

ただ、Web 開発をする時には、メモ帳やテキストエディットのようなソフトウェアよりも、もっと高機能なプログラムを使うべきです。私たちのおすすめのソフトウェアは、 [Visual Studio Code](https://code.visualstudio.com/) です。これは無料で利用することができ、ライブプレビューやコードヒントを提供します。

### 最新の Web ブラウザーのインストール

次に、これから私たちが書くコードをテストするためのブラウザーをいくつかインストールしましょう。あなたが使っているオペレーティングシステムを選び、リンクから好きなブラウザーをインストールしてみてください。

- Linux: [Firefox](https://www.mozilla.org/ja/firefox/new/)、[Chrome](https://www.google.com/chrome/browser/)、[Opera](https://www.opera.com/)、[Brave](https://brave.com)。
- Windows: [Firefox](https://www.mozilla.org/ja/firefox/new/)、[Chrome](https://www.google.com/chrome/browser/)、[Opera](https://www.opera.com/)、[Internet Explorer](http://windows.microsoft.com/ja-jp/internet-explorer/download-ie)、[Microsoft Edge](https://www.microsoft.com/en-us/edge)、[Brave](https://brave.com) (Windows 10 には Edge がデフォルトで付属していますが、Windows 7 以降の場合は、IE Internet Explorer 11 をインストールすることができます。そうでない場合には、Internet Explorer 以外のブラウザーをインストールしてください)
- Mac: [Firefox](https://www.mozilla.org/ja/firefox/new/)、[Chrome](https://www.google.com/chrome/browser/)、[Opera](https://www.opera.com/)、[Safari](https://www.apple.com/safari/)、[Brave](https://brave.com) (Safari は、iOS と MacOS に初めからインストールされています)

次に進む前に、テストに使えるように最低でも 2 つのブラウザーをインストールするようにしてください。

> **Note:** Internet Explorer は最新の Web 機能と互換性がなく、プロジェクトを実行できない場合があります。現在は Internet Explorer を使用している人はほとんどいないので、通常はあなたの Web プロジェクトとそれの互換性について心配する必要はありません — 間違いなく学習中はあまり心配する必要はありません。

### ローカルの Web サーバーのインストール

いくつかの例では、動作を成功させるのに Web サーバーでの実行が必要です。[ローカルテストサーバーのインストール方法](/ja/docs/Learn/Common_questions/set_up_a_local_testing_server)にて、その方法が見つかります。

{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

## このモジュール

- [基本的なソフトウェアのインストール](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)
- [Web サイトをどんな外見にするか](/ja/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [ファイルの扱い](/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [HTML の基本](/ja/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS の基本](/ja/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [JavaScript の基本](/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Web サイトの公開](/ja/docs/Learn/Getting_started_with_the_web/%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%82%92%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B)
- [Web のしくみ](/ja/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
