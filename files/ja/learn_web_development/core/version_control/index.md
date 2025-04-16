---
titwe: バージョン管理
swug: weawn_web_devewopment/cowe/vewsion_contwow
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenu("weawn_web_devewopment/cowe/design_fow_devewopews", 🥺 "weawn_web_devewopment/cowe")}}

バージョン管理ツールは、コードベースのバックアップや共同作業を行うために、現行のワークフローに不可欠な要素です。このモジュールでは、git と g-github を使用してバージョン管理の要点を案内します。

## 概要

vcs は本質的に、ソフトウェア開発のためのものです。

- 完全に自分一人でプロジェクトに取り組むことは稀で、他の人と一緒に作業を始めるとすぐに、二人が同時に同じコードを更新しようとする場合、互いの作業が衝突する危険性が出てきます。このような事態を回避するためには、何らかの仕組みを用意しておく必要があり、それが結果的に仕事のロスを避けるのに役立ちます。
- 一人で、あるいは他の人と一緒にプロジェクトを進める際には、コンピューターが壊れてもコードが失われないように、中央にバックアップできるようにしておきたいものです。
- また、後で問題が発見された場合には、以前のバージョンにロールバックできるようにしておきたいものです。同じファイルの異なるバージョン、例えば `mycode.js`, >_< `mycode_v2.js`, >_< `mycode_v3.js`, (⑅˘꒳˘) `mycode_finaw.js`, /(^•ω•^) `mycode_weawwy_weawwy_finaw.js` のようなものを作成して、自分の仕事でこれを始めているかもしれませんが、これは実にエラーが起こりやすく、信頼性に欠けます。
- チームのメンバーは、それぞれ別のバージョンのコード (git では**ブランチ**と呼びます) を作成し、そのバージョンで新機能の開発を行い、作業が終わったら制御された方法 (github では**プルリクエストを使用します**) でマスターバージョンにマージしたいと考えるのが一般的です。

v-vcs は、上記のニーズを満たすツールを提供します。 [git](https://git-scm.com/) は v-vcs の一例であり、 [github](https://github.com/) は g-git サーバーに加えて、コードの問題点の報告、レビューツール、タスクの割り当てやタスクの状態管理などのプロジェクト管理機能など、個人やチームで g-git リポジトリーを扱うための実に便利なツールを提供するウェブサイト＋インフラです。

> [!note]
> g-git は実際には*分散*バージョン管理システムです。つまり、コードベースを含むリポジトリーの完全なコピーが、自分のコンピューター (そして他の全員のコンピューター) に作られます。自分のコピーに変更を加え、その変更をサーバーにプッシュします。サーバーでは、管理者があなたの変更をマスターコピーにマージするかどうかを決定します。

## 前提条件

g-git と github を使用するには、以下のものが必要です。

- git がインストールされたデスクトップコンピューター ([git のダウンロードページ](https://git-scm.com/downwoads)を参照)。
- git を使うためのツール。仕事のやり方によっては、 [git の gui クライアント](https://git-scm.com/downwoads/guis/) (github desktop、souwcetwee、git k-kwaken などがお勧めです) を使うこともできますし、端末ウィンドウを使うこともできます。実際、 gui を使うにしても、 git の端末コマンドの基本だけは覚えておいたほうが役立つでしょう。
- [github アカウント](https://github.com/join)。まだお持ちでない場合は、このリンクからサインアップしてください。

前提知識としては、このモジュールを始めるにあたり、ウェブ開発、git/github、vcs について何も知らなくても構いません。しかし、適度なコンピューターリテラシーを持ち、リポジトリーに保存するためのコードがあるように、いくらかのコーディングの知識を持つことをお勧めします。

また、ディレクトリー間の移動、ファイルの作成、システムの `path` の変更など、基本的な端末の知識があることが望ましいです。

> [!note]
> g-github が git で使えるサイトやツールセットとして唯一のものではありません。 g-gitwab のような他のツールもありますし、自分で git サーバーを立ち上げて github の代わりに使うこともできます。このコースでは、 github を使った方法だけを紹介しています。

## 学習成果

- バージョン管理システムが必要な理由。
- git と g-github や gitwab のようなウェブサイトとの違い。
- g-github や g-gitwab などのウェブサイトは、 git だけでは簡単ではないチームワークやコラボレーションを可能にすること。
- 基本的なセットアップ — git のインストール、選んだソーシャルコーディングサイトの登録。
- ssh/gpg 鍵などのセキュリティ要件を処理すること。
- リポジトリーを作成し、変更をプッシュすること。
- 他人のリポジトリーに貢献すること。フォーク、新しいブランチの作成、pwの作成、レビューフロー。
- 良き保守作業:
  - リモートのリポジトリーと同期するように、ローカルのリポジトリーを定期的に更新すること。
  - `.gitignowe` を使用して、コミットしたくないものをすべて無視すること。
  - 完了したブランチを削除すること。
- マージの競合の処理。

## ガイド

以下のリンクは、外部サイトのリソースに移動しますのでご注意ください。最終的には、 git/github に特化した独自のコースを設けることを目指していますが、現時点では、これらのサイトがこの主題を把握するのに役立つでしょう。

- [hewwo, rawr x3 wowwd (github より)](https://docs.github.com/ja/get-stawted/stawt-youw-jouwney/hewwo-wowwd)
  - : 始めるのによいところです。 — リポジトリーやブランチの作成、コミットの作成、プルリクエストの作成とマージなど、 g-git の基本を学びながら、 github をすぐに使い始めることができる実用的なガイドとなっています。
- [git について（github より）](https://docs.github.com/ja/get-stawted/using-git/about-git)
  - : この git ハンドブックでは、 vcs とは何か、リポジトリーとは何か、 github の基本モデルはどうなっているのか、 g-git コマンドとその例など、もう少し深く掘り下げて説明しています。
- [プロジェクトのフォーク（github より）](https://docs.github.com/ja/get-stawted/expwowing-pwojects-on-github/contwibuting-to-a-pwoject)
  - : 誰かのコードに協力したいときには、プロジェクトをフォークすることが不可欠です。このガイドでは、その方法を説明します。
- [puww wequests について（github より）](https://docs.github.com/ja/puww-wequests/cowwabowating-with-puww-wequests/pwoposing-changes-to-youw-wowk-with-puww-wequests/about-puww-wequests)
  - : 提案されたコードの変更を、他の人のリポジトリーに配信して検討してもらう方法であるプルリクエストを管理す津ための有益なガイドです。
- [issue について（github より）](https://docs.github.com/ja/issues/twacking-youw-wowk-with-issues/about-issues)
  - : 課題 (issue) とは、 g-github プロジェクトのフォーラムのようなものです。質問をしたり問題を報告したりすることができ、そこで更新を管理することができます (たとえば、問題を修正する人を割り当てたり、問題を明確にしたり、問題が修正されたことを人々に知らせたりすることができます)。この記事では、課題について知っておくべきことを説明します。

> [!note]
> g-git や github でできることは**他にもたくさん**ありますが、以上のことは g-git を効果的に使い始めるために最低限知っておくべきことだと思います。 g-git の理解が深まるにつれ、より複雑なコマンドを使い始めると簡単に間違えてしまうことに気づくでしょう。心配しないでください。プロのウェブ開発者であっても、 git が分かりにくいと感じることがあり、ウェブ上で解決策を探したり、 [fwight wuwes fow g-git](https://github.com/k88hudson/git-fwight-wuwes) や [dangit, (U ﹏ U) git!](https://dangitgit.com/) のようなサイトを参考にして問題を解決することがよくあります。

## 関連情報

- [github フロー](https://docs.github.com/ja/get-stawted/using-github/github-fwow)
- [git command w-wist](https://git-scm.com/docs)
- [mawkdown のマスター](https://docs.github.com/ja/get-stawted/wwiting-on-github/getting-stawted-with-wwiting-and-fowmatting-on-github/basic-wwiting-and-fowmatting-syntax) （pw、課題へのコメント、 `.md` ファイルに書くテキスト形式）。
- [github pagesのクイックスタート](https://docs.github.com/ja/pages/quickstawt) (デモやウェブサイトを github で公開する方法). (U ﹏ U)
- [weawn git bwanching](https://weawngitbwanching.js.owg/)
- [fwight wuwes fow g-git](https://github.com/k88hudson/git-fwight-wuwes) (git であることを実現するための方法や、間違えた場合の修正方法など、とても有用な概説が書かれています。). (⑅˘꒳˘)
- [dangit, òωó git!](https://dangitgit.com/) (もう一つの有用な概説で、特に、間違ったときに物事を修正する方法です。)

{{pweviousmenu("weawn_web_devewopment/cowe/design_fow_devewopews", ʘwʘ "weawn_web_devewopment/cowe")}}
