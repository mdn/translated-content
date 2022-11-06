---
title: Git と GitHub
slug: Learn/Tools_and_testing/GitHub
---

{{LearnSidebar}}

すべての開発者が、何らかの**バージョン管理システム** (**VCS**) を使用しています。これは、他の開発者との共同作業において、お互いの作業を上書きする危険がなく、また、後で問題が発見された場合には以前のバージョンのコードベースにロールバックすることができるツールです。 (少なくともウェブ開発者の間では) 最も人気のある VCS は **Git** であり、 **GitHub** はリポジトリのホスティングとそれを操作するためのいくつかのツールを提供するサイトです。このモジュールは、この 2 つについて知っておくべきことを紹介することを目的としています。

## 概要

VCS は本質的に、ソフトウェア開発のためのものです。

- 完全に自分一人でプロジェクトに取り組むことは稀で、他の人と一緒に作業を始めるとすぐに、二人が同時に同じコードを更新しようとする場合、互いの作業が衝突する危険性が出てきます。このような事態を回避するためには、何らかの仕組みを用意しておく必要があり、それが結果的に仕事のロスを避けるのに役立ちます。
- 一人で、あるいは他の人と一緒にプロジェクトを進める際には、コンピューターが壊れてもコードが失われないように、中央にバックアップできるようにしておきたいものです。
- また、後で問題が発見された場合には、以前のバージョンにロールバックできるようにしておきたいものです。同じファイルの異なるバージョン、例えば `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js` のようなものを作成して、自分の仕事でこれを始めているかもしれませんが、これは実にエラーが起こりやすく、信頼性に欠けます。
- チームのメンバーは、それぞれ別のバージョンのコード (Git では**ブランチ**と呼びます) を作成し、そのバージョンで新機能の開発を行い、作業が終わったら制御された方法 (GitHub では**プルリクエストを使用します**) でマスターバージョンにマージしたいと考えるのが一般的です。

VCS は、上記のニーズを満たすツールを提供します。 [Git](https://git-scm.com/) は VCS の一例であり、 [GitHub](https://github.com/) は Git サーバーに加えて、コードの問題点の報告、レビューツール、タスクの割り当てやタスクの状態管理などのプロジェクト管理機能など、個人やチームで git リポジトリを扱うための実に便利なツールを提供するウェブサイト＋インフラです。

> **メモ:** Git は実際には*分散*バージョン管理システムです。つまり、コードベースを含むリポジトリの完全なコピーが、自分のコンピュータ (そして他の全員のコンピュータ) に作られます。自分のコピーに変更を加え、その変更をサーバーにプッシュします。サーバーでは、管理者があなたの変更をマスターコピーにマージするかどうかを決定します。

> **注目:** #### フロントエンドのウェブ開発者を目指している方へゴールに向かって頑張るために必要な情報をまとめたコースをご用意しました。[**始めましょう**](/ja/docs/Learn/Front-end_web_developer)

## 前提条件

Git と GitHub を使用するには、以下のものが必要です。

- Git がインストールされたデスクトップコンピューター ([Git のダウンロードページ](https://git-scm.com/downloads)を参照)。
- Git を使うためのツール。仕事のやり方によっては、 [Git の GUI クライアント](https://git-scm.com/downloads/guis/) (GitHub Desktop、SourceTree、Git Kraken などがお勧めです) を使うこともできますし、端末ウィンドウを使うこともできます。実際、 GUI を使うにしても、 Git の端末コマンドの基本だけは覚えておいたほうが役立つでしょう。
- [GitHub アカウント](https://github.com/join)。まだお持ちでない場合は、このリンクからサインアップしてください。

前提知識としては、このモジュールを始めるにあたり、ウェブ開発、Git/GitHub、VCS について何も知らなくても構いません。しかし、適度なコンピューターリテラシーを持ち、リポジトリに保存するためのコードがあるように、いくらかのコーディングの知識を持つことをお勧めします。

また、ディレクトリー間の移動、ファイルの作成、システムの `PATH` の変更など、基本的な端末の知識があることが望ましいです。

> **メモ:** GitHub が Git で使えるサイトやツールセットとして唯一のものではありません。 GitLab のような他のツールもありますし、自分で Git サーバーを立ち上げて GitHub の代わりに使うこともできます。このコースでは、 GitHub を使った方法だけを紹介しています。

## ガイド

以下のリンクは、外部サイト (訳注: 多くは英語) のリソースに移動しますのでご注意ください。最終的には、 Git/GitHub に特化した独自のコースを設けることを目指していますが、現時点では、これらのサイトがこの主題を把握するのに役立つでしょう。

- [Hello, World (from GitHub)](https://guides.github.com/activities/hello-world/) (英語)
  - : 始めるのによいところです。 — リポジトリやブランチの作成、コミットの作成、プルリクエストの作成とマージなど、 Git の基本を学びながら、 GitHub をすぐに使い始めることができる実用的なガイドとなっています。
- [Git Handbook (from GitHub)](https://guides.github.com/introduction/git-handbook/) (英語)
  - : この Git ハンドブックでは、 VCS とは何か、リポジトリとは何か、 GitHub の基本モデルはどうなっているのか、 Git コマンドとその例など、もう少し深く掘り下げて説明しています。
- [Forking Projects (from GitHub)](https://guides.github.com/activities/forking/) (英語)
  - : 誰かのコードに協力したいときには、プロジェクトをフォークすることが不可欠です。このガイドでは、その方法を説明します。
- [プルリクエストについて (GitHub より)](https://docs.github.com/ja/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
  - : 提案されたコードの変更を、他の人のリポジトリに配信して検討してもらう方法であるプルリクエストを管理す津ための有益なガイドです。
- [Mastering issues (from GitHub)](https://guides.github.com/features/issues/) (英語)
  - : 課題 (issue) とは、 GitHub プロジェクトのフォーラムのようなものです。質問をしたり問題を報告したりすることができ、そこで更新を管理することができます (たとえば、問題を修正する人を割り当てたり、問題を明確にしたり、問題が修正されたことを人々に知らせたりすることができます)。この記事では、課題について知っておくべきことを説明します。

> **メモ:** Git や GitHub でできることは**他にもたくさん**ありますが、以上のことは Git を効果的に使い始めるために最低限知っておくべきことだと思います。 Git の理解が深まるにつれ、より複雑なコマンドを使い始めると簡単に間違えてしまうことに気づくでしょう。心配しないでください。プロのウェブ開発者であっても、 Git が分かりにくいと感じることがあり、ウェブ上で解決策を探したり、 [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) や [Dangit, git!](https://dangitgit.com/) のようなサイトを参考にして問題を解決することがよくあります。

## 関連情報

- [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
- [Git command list](https://git-scm.com/docs)
- [Mastering markdown](https://guides.github.com/features/mastering-markdown/) (the text format you write in on PR, issue comments, and `.md` files).
- [Getting Started with GitHub Pages](https://guides.github.com/features/pages/) (デモやウェブサイトを GitHub で公開する方法).
- [Learn Git branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (Git であることを実現するための方法や、間違えた場合の修正方法など、とても有用な概説が書かれています。).
- [Dangit, git!](https://dangitgit.com/) (もう一つの有用な概説で、特に、間違ったときに物事を修正する方法です。).
