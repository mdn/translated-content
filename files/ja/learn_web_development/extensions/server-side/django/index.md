---
title: Django ウェブフレームワーク (Python)
slug: Learn_web_development/Extensions/Server-side/Django
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side")}}

Django は、Python で書かれた高機能なサーバーサイドウェブフレームワークで、とても普及しています。このモジュールは、Django が最も人気のあるウェブサーバーフレームワークの 1 つである理由、開発環境の設定方法、独自のウェブアプリケーションを作成する方法を説明します。

## 前提条件

このモジュールを進める前に、Django を知る必要はありません。理想は、[サーバーサイドのウェブサイトプログラミング第一歩](/ja/docs/Learn_web_development/Extensions/Server-side/First_steps) を読んで、サーバーサイドのウェブプログラミングとウェブフレームワークについて理解しておくことです。

プログラミングの概念と [Python](/ja/docs/Glossary/Python) に関する一般的な知識はあるとよいですが、主要概念を理解していることは必須ではありません。

> [!NOTE]
> Python は、初心者が読んで理解しやすい最も簡単なプログラミング言語の 1 つです。つまり、このモジュールをより理解したいのであれば、インターネット上の多数の無料の書籍やチュートリアルがあなたを助けてくれます。（新しいプログラマーは python.org wiki の [Python for Non Programmers](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) ページをチェックすると良いでしょう。）

## ガイド

- [Django の紹介](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Introduction)
  - : この最初の Django の記事では、「Django とは何か」という問いに答え、このウェブフレームワークの特徴と概要を説明します。主な機能の概要と、このモジュールで詳しく説明しない高度な機能などを紹介します。また、Django アプリケーションの主要な構成部品のいくつかを示して、使いはじめる前にどのように使うのか、何ができるのかを知っておきます。
- [Django 開発環境の設定](/ja/docs/Learn_web_development/Extensions/Server-side/Django/development_environment)
  - : Django がどのようなものか知ったので、次は Windows、Linux (Ubuntu)、Mac OS X で Django 開発環境をセットアップしてテストする方法を説明します。一般的なオペレーティングシステムを使っていれば、この記事で Django アプリケーションの開発を始められるでしょう。
- [Django チュートリアル: 地域図書館ウェブサイト](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)
  - : 最初の記事は、実践的なチュートリアルで学習する内容を説明し、「地域図書館ウェブサイト」の概要を示します。このウェブサイトの例は、後の記事で作り進めていきます。
- [Django チュートリアル Part 2: ウェブサイトの骨組み作成](/ja/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)
  - : この記事は、基本的なウェブサイトプロジェクトの「骨組み」をどのように作っていくのかを示します。サイト固有の設定、URL、モデル、ビュー、テンプレートを作成する方法について説明します。
- [Django チュートリアル Part 3: モデルの使用](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Models)
  - : この記事は、地域図書館ウェブサイト用のモデルを定義する方法を示します ― モデルはアプリケーションのデータを格納するデータ構造を表し、Django はデータベースにデータを格納できます。モデルとは何か、どのように定義されるのか、および主要なフィールドタイプのいくつかを説明します。また、モデルデータにアクセスする主な方法のいくつかを簡単に示します。
- [Django チュートリアル Part 4: Django 管理サイト](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)
  - : 地域図書館ウェブサイトのモデルを作成したので、Django 管理サイトを使用して実際の書籍データを追加します。最初に、管理サイトにモデルを登録する方法を示します。その後、ログインしてデータを作成する方法を示します。最後に、管理サイトの表示を改善する方法をいくつか示します。
- [Django チュートリアル Part 5: ホームページの作成](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Home_page)
  - : 最初のページ全体を表示するコードを追加する準備が整いました。ここでは地域図書館ウェブサイトのホームページで各モデルタイプのレコード数を表示し、他のページへのサイドバーナビゲーションリンクを提供します。基本的な URL マップやビューを作成したり、データベースからレコードを取得したり、テンプレートを使用して実践的な経験を積むことができます。
- [Django チュートリアル Part 6: 汎用の一覧表示と詳細表示](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views)
  - : このチュートリアルでは、地域図書館ウェブサイトを拡張し、書籍や著者の一覧と詳細ページを追加します。ここでは、汎用のクラスベースのビューについて学び、共通のユースケースのために書くコードの量をどのように減らせるかを示します。また URL のパターンマッチングがどのように行われるのか詳しく説明します。
- [Django チュートリアル Part 7: セッションフレームワーク](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Sessions)
  - : このチュートリアルでは、地域図書館ウェブサイトを拡張し、ホームページにセッションベースのアクセスカウンターを追加します。これは比較的簡単な例ですが、セッションフレームワークを使用して、自分のサイトの匿名ユーザーに永続的な動作を提供する方法を示しています。
- [Django チュートリアル Part 8: ユーザー認証と権限](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Authentication)
  - : このチュートリアルでは、ユーザーが自分のアカウントで自分のサイトにログインできるようにする方法と、ログインできるかどうかを制御する方法、ログインしているかどうか、アクセス許可によって表示する方法について説明します。このデモンストレーションの一環として、地域図書館ウェブサイトを拡張し、ログインページとログアウトページを追加し、貸し出された本を表示するためのユーザーとスタッフのページを追加します。
- [Django チュートリアル Part 9: フォームの操作](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Forms)
  - : このチュートリアルでは、Django で [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Forms)を扱う方法、特にモデルインスタンスを作成、更新、削除するためのフォームを書く最も簡単な方法を紹介します。このデモンストレーションの一環として、図書館員が書籍を更新したり、管理アプリケーションを使用するのではなく独自のフォームを使用して著者の作成、更新、削除を行えるように、地域図書館ウェブサイトを拡張します。
- [Django チュートリアル Part 10: Django ウェブアプリケーションのテスト](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Testing)
  - : ウェブサイトが成長するにつれて、手動でテストするのが困難になります。コンポーネント間のやりとりが複雑になるにつれて、ある領域の小さな変更が、他の領域へ影響がないか検証するためのテストの追加が多く必要になります。これらの問題を軽減する 1 つの方法は、変更を行うたびに簡単かつ確実に実行できる自動テストを作成することです。このチュートリアルでは、Django のテストフレームワークを使用して、あなたのウェブサイトの単体テストを自動化する方法を示します。
- [Django チュートリアル Part 11: Django を本番環境にデプロイする](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Deployment)
  - : これで、地域図書館の素晴らしいウェブサイトを作成 (およびテスト) できました。公開ウェブサーバーにインストールして、図書館のスタッフやメンバーがインターネット経由でアクセスできるようにしたいですね。この記事では、ウェブサイトを展開するホストを見つける方法と、サイトを実稼働のために必要な準備作業の概要について説明します。
- [Django ウェブアプリケーションセキュリティ](/ja/docs/Learn_web_development/Extensions/Server-side/Django/web_application_security)
  - : ユーザーデータの保護は、ウェブサイトの設計において不可欠な要素です。以前、[ウェブセキュリティ](/ja/docs/Web/Security)の記事でより一般的なセキュリティ上の脅威のいくつかについて説明しました。この記事では、Django の組み込み保護がそのような脅威をどのように処理するかを実践的に実演します。

## 課題

次の課題では、上記のガイドに記載されているように、Django を使用してウェブサイトを作成する方法を理解しているかテストします。

- [DIY Django ミニブログ](/ja/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog)
  - : この課題では、このモジュールから学んだ知識の一部を使用して自分のブログを作成します。

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side")}}
