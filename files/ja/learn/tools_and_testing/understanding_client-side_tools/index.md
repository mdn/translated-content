---
title: クライアントサイドウェブ開発ツールの理解
slug: Learn/Tools_and_testing/Understanding_client-side_tools
---

{{LearnSidebar}}

クライアントサイドツールには、なかなか難しいものもありますが、この記事シリーズでは、いくつかの一般的なクライアントサイドツールの種類について、その目的を示し、一緒に連携させることができるツール、パッケージマネージャを使ったインストール方法、
コマンドラインでの制御を説明します。最後にツールチェーンの例を示して、生産性を高める方法を説明します。

**["クライアントサイドツールの概要"で今すぐ始めましょう](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)**

## 前提条件

ここで紹介しているツールを使う前に、まずはコアの[HTML](/ja/docs/Learn/HTML)、[CSS](/ja/docs/Learn/CSS)、[JavaScript](/ja/docs/Learn/JavaScript)の基礎を学習することをお勧めします。

> **注目:**
>
> #### フロントエンドのウェブ開発者を目指している方へ

> ゴールに向かって頑張るために必要な情報をまとめたコースをご用意しました。
>
> [**始めましょう**](/ja/docs/Learn/Front-end_web_developer)

## ガイド

- [1. クライアントサイドツールの概要](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)
  - : この記事では、最新のウェブツールの概要、どのような種類のツールがあるのか、どこでウェブアプリ開発のライフサイクルを見つけるのか、そして個々のツールのヘルプを見つける方法について説明します。
- [2. コマンドライン集中コース](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
  - : 開発プロセスにおいて、ターミナル (または"コマンドライン") で何らかのコマンドを実行する必要があることは間違いありません。この記事では、ターミナルの紹介、ターミナルに入力する基本的なコマンド、コマンドを連鎖させる方法、独自のコマンドライン・インターフェース (CLI) ツールを追加する方法について説明します。
- [3. パッケージ管理の基本](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)
  - : この記事では、プロジェクトツールの依存関係をインストールしたり、最新の状態に保つなど、自分のプロジェクトでどのようにパッケージマネージャを使用できるかを理解するために、パッケージマネージャーについて詳しく説明していきます。
- [4. ツールチェーンの紹介](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain)
  - : このシリーズの最後の数回では、サンプルケーススタディのツールチェーンを構築するプロセスを通じて、ツールに関する知識を確実なものにします。開発環境を構築し、変換ツールを導入し、実際にアプリを Netlify にデプロイするプロセスを紹介します。
- [5. アプリのデプロイ](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment)
  - : シリーズの最終回では、前回の記事で構築したツールチェーンの例を使い、サンプルアプリをデプロイできるようにしていきます。コードを GitHub にプッシュし、Netlify を使ってデプロイし、簡単なテストを組み込む方法も紹介します。
