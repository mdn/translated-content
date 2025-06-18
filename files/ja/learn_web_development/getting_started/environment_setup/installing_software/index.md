---
title: 基本的なソフトウェアのインストール
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

この記事では、簡単なウェブ開発に必要なツールと、それらを正しくインストールする方法を示します。これで、コードエディターと最新のウェブブラウザーなど、必要最小限のツールを設定することができます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        コンピューターのオペレーティングシステムに慣れていること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>始めるのに必要なソフトウェアを理解すること。</li>
          <li>基本的なソフトウェアをインストールすること。</li>
          <li>プロのウェブ開発者が使用するソフトウェアについて、大まかに理解すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## コードエディターのインストール

コンピューターには、おそらくすでにテキストエディターが入っています。 Windows には[メモ帳](https://ja.wikipedia.org/wiki/メモ帳)が、 macOS には[テキストエディット](https://ja.wikipedia.org/wiki/テキストエディット)が、 Linux にはディストリビューションによっていろいろですが、 Ubuntu 22.04 LTS リリースには [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor) が初めからインストールされてされています。

ウェブ開発においては、おそらくメモ帳やテキストエディットより良いものがあります。おすすめは [Visual Studio Code](https://code.visualstudio.com/) で、これは無料のエディターであり、ライブプレビューやコードヒントを提供しています。

## 最新のウェブブラウザーのインストール

ひとまず、コードをテストするために、デスクトップウェブブラウザーを数種類インストールします。できれば、それぞれの行からブラウザーを1つずつインストールし、テストできるようにしておいてください（同じレンダリングエンジンをベースにした複数のブラウザーだけでテストすることのないように）。

- Chromium: [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Brave](https://brave.com/), [Microsoft Edge](https://www.microsoft.com/ja-jp/edge)
- Gecko: [Firefox](https://www.mozilla.org/ja/firefox/new/)
- WebKit: [Safari](https://www.apple.com/safari/) （macOS と iOS のみ）

### ローカルのウェブサーバーのインストール

いくつかの例では、正しく動作させるためにウェブサーバー上で実行する必要があるものもあります。[ローカルテストサーバーのインストール方法](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)にて、その方法が見つかります。

## プロはどんなツールを使っている？

以下の一覧はいかにも怖そうですが、幸いなことに、これらのほとんどについて何も知らなくてもウェブ開発を始めることは可能です。

- **コンピューター**。当たり前のことだと思う人もいるかもしれませんが、携帯電話や図書館のコンピューターを使ってこの記事を読んでいる人もいるでしょう。しっかりとしたウェブ開発のためには、Windows、macOS、Linux などが動作するデスクトップやノートパソコンを使ってください。
- **テキストエディター**。コードを書くために必要です。テキストエディター（たとえば [Visual Studio Code](https://code.visualstudio.com/)、[Notepad++](https://notepad-plus-plus.org/)、[Sublime Text](https://www.sublimetext.com/)、[GNU Emacs](https://www.gnu.org/software/emacs/)、[VIM](https://www.vim.org/)）でも、複合的な機能を持つソフトウェア（[Dreamweaver](https://www.adobe.com/jp/products/dreamweaver.html) や [WebStorm](https://www.jetbrains.com/webstorm/)）でも構いません。 Office 文書のエディターは、ウェブブラウザーが使うレンダリングエンジンに干渉する隠し要素に依存しているため、この用途には適していません。
- **ウェブブラウザー**。自分が書いたコードをテストするために必要です。現在最も使われているブラウザーは、[Firefox](https://www.mozilla.org/ja/firefox/new/)、[Chrome](https://www.google.com/chrome/)[Safari](https://www.apple.com/safari/)、[Microsoft Edge](https://www.microsoft.com/edge) などです。また、モバイル端末や、対象とするユーザーが使用している可能性のある他のブラウザーで、サイトがどのように表示されるかについても検査すべきです。テキストベースの端末ウェブブラウザーである [Lynx](https://lynx.browser.org/) は、視覚障碍のあるユーザーがサイトをどのように体験しているかを見るのに適しています。
- **画像編集ソフト**（[GIMP](https://www.gimp.org/)、[Figma](https://www.figma.com/)、[Paint.NET](https://www.getpaint.net/)、[Photoshop](https://www.adobe.com/jp/products/photoshop.html)、[Sketch](https://www.sketch.com/)、[XD](https://helpx.adobe.com/support/xd.html) など）。ウェブページの画像を作成するために必要になります。
- **バージョン管理システム**。複数の人とチームでサイトを作るときや、他の人とコードを共有するときに、誤って編集の衝突などが起こらないようにするために必要になります。現在では、 [Git](http://git-scm.com/) が最も有名なバージョン管理システムであり、これに基づいたコードホスティングサービスの [GitHub](https://github.com/) や [GitLab](https://about.gitlab.com/) もとても有名です。

他にも、自分のプロジェクトに特化したツール、特にウェブ開発者向けのツールについての詳細情報は、「[クライアントサイドのウェブ開発ツールについて理解する](/ja/docs/Learn_web_development/Extensions/Client-side_tools)」をご覧ください。

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
