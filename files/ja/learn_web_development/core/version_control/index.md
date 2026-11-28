---
title: バージョン管理
slug: Learn_web_development/Core/Version_control
l10n:
  sourceCommit: 1dc2c39b38fcfe047ea29d33a3d97c01b2791539
---

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

バージョン管理ツール（**バージョン管理システム**または **VCS** と呼ばれることもあります）は、コードのバックアップ、コードベースでの共同作業、必要に応じた以前のバージョンへのロールバックなど、現代のコーディングワークフローに不可欠です。

[Git](https://git-scm.com/) はバージョン管理ツールの一例です。一方、[GitHub](https://github.com/) は Git サーバーに加え、個人やチームで Git リポジトリーを扱うための便利なツールを提供するウェブサイトおよびインフラです。GitHub ではコードに関する課題を報告したり、共同でコードをレビューしたりできます。また、課題のトリアージ、タスクの割り当て、プロジェクトの計画など、プロジェクト管理の機能も備えています。

このモジュールでは、Git と GitHub を使ったバージョン管理の要点を説明します。

## 前提条件

- Git をインストールしたデスクトップコンピューター（[Git のダウンロードページ](https://git-scm.com/downloads/)を参照してください）。
- Git を使うためのツール。作業方法に応じて、次のいずれかを使用できます。
  - [Git GUI クライアント](https://git-scm.com/downloads/guis/)（[GitHub Desktop](https://desktop.github.com/download/)、[Sourcetree](https://www.sourcetreeapp.com/)、[GitKraken](https://www.gitkraken.com/) などがおすすめです）。
  - コマンドラインまたはターミナルウィンドウ（基本を学ぶには[コマンドライン短期集中講座](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)を参照してください）。
- [GitHub アカウント](https://github.com/signup)。まだアカウントをお持ちでない場合は、リンク先から登録してください。

## ガイド

- [GitHub とは？（GitHub より）](https://docs.github.com/ja/get-started/start-your-journey/what-is-github)
  - : Git と GitHub とは何か、どのように連携するか、使い始める方法を説明します。
- [Hello, World（GitHub より）](https://docs.github.com/ja/get-started/using-github/hello-world)
  - : リポジトリーやブランチの作成、コミット、プルリクエストの作成とマージなど、Git の基本を学びながら、すぐに GitHub を使い始められる実践的なガイドです。
- [Git の使用（GitHub より）](https://docs.github.com/ja/get-started/using-git)
  - : Git ハンドブックでは、バージョン管理ツールやリポジトリーとは何か、GitHub の基本的な仕組み、Git コマンドやその例などを、もう少し詳しく説明します。
- [プロジェクトへの協力（GitHub より）](https://docs.github.com/ja/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : 他の人のコードに協力するには、プロジェクトをフォークすることが重要です。このガイドでは、その方法を説明します。
- [プルリクエストについて（GitHub より）](https://docs.github.com/ja/pull-requests/reference/pull-requests)
  - : プルリクエストを管理するためのガイドです。プルリクエストを使うと、他の人のリポジトリーへのコード変更を提案し、レビューやメインのコードベースへのマージを依頼できます。
- [課題について（GitHub より）](https://docs.github.com/ja/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
  - : 課題は GitHub プロジェクトのフォーラムのようなもので、質問をしたり、問題を報告したりできます。また、課題の更新を管理することもできます。例えば、修正担当者を割り当てたり、課題の内容を明確にしたり、修正済みであることを関係者に知らせたりできます。この記事では、課題について知っておくべきことを説明します。
- [ウェブサイトの公開 > おすすめの方法](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website#github_経由での公開)
  - : GitHub Pages を使って基本的なサイトを公開する手順を、関連する GitHub のドキュメントへのリンクとともに説明します。

> [!NOTE]
> Git を深く学ぶと、より複雑なコマンドを使うときに間違えやすいことが分かってくるでしょう。心配はいりません。プロのウェブ開発者でも Git に戸惑うことがあり、ウェブで解決策を探したり、[Flight rules for Git](https://github.com/k88hudson/git-flight-rules)<sup>(英語)</sup> や [Dangit, git!](https://dangitgit.com/)<sup>(英語)</sup> のようなサイトを参考にして問題を解決したりします。

> [!NOTE]
> Scrimba の [Intro to Git](https://scrimba.com/intro-to-git-c0l4grs2sa)<sup>(英語)</sup> <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#パートナーリンクと埋め込み)</sup>では、Git と GitHub の使い方を実践的に学べます。

## 関連情報

- GitHub Docs で取り上げられている、その他の役立つトピック:
  - [GitHub フローを理解する](https://docs.github.com/ja/get-started/using-github/github-flow)
  - [マージの競合への対処](https://docs.github.com/ja/pull-requests/how-tos/merge-and-close-pull-requests)
  - [.gitignore を使ってファイルを無視する](https://docs.github.com/ja/get-started/git-basics/ignoring-files)
  - [GitHub への認証](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
  - [Markdown のマスター](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)（プルリクエストや課題へのコメント、`.md` ファイルで使うテキスト形式です）。
- [Git コマンド一覧](https://git-scm.com/docs)<sup>(英語)</sup>
- [Learn Git branching](https://learngitbranching.js.org/)<sup>(英語)</sup>
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules)<sup>(英語)</sup>（Git で特定の操作を行う方法や、間違えた場合の修正方法をまとめた便利なガイドです）。
- [Dangit, git!](https://dangitgit.com/)<sup>(英語)</sup>（間違えたときの修正方法を中心にまとめた、もう一つの便利なガイドです）。

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
