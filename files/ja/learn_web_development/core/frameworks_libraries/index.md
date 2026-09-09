---
title: JavaScript フレームワークとライブラリー
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 238b07dfeb8c347c590bd02a63140867525d511c
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript フレームワークは、最新のフロントエンドウェブ開発に欠かせないものであり、開発者にスケーラブルでインタラクティブなウェブアプリケーションを構築するための、実績のあるツールを提供しています。現代の多くの企業では、フレームワークをツールの標準的な一部として使用しているため、多くのフロントエンド開発の仕事でフレームワークの経験が必要とされています。この一連の記事は、フレームワークを学ぶ始める上で、役立つ出発点となります。

フロントエンド開発者を目指していると、フレームワークを学ぶ際にどこから始めればいいのか悩むことがあります。フレームワークは常に新しいものが登場するため、多くの種類の中から選ぶことができます。これらはほとんど同じように動作しますが、いくつかの点において異なっています。そしてフレームワークを利用する上では、具体的に注意しなければならないこともあります。

この記事では、あなたがフレームワークを学び始めるための快適な出発点を提供することを目的としています。私たちは、React/ReactDOM やその他の特定のフレームワークについて知っておく必要があるすべてのことを網羅的に教えることを目指しているわけではありません。その代わりに、以下のようなより基本的な質問に答えたいと思います。

- なぜフレームワークを使うべきなのか？どんな問題を解決してくれるのか？
- フレームワークを選ぼうとするとき、どのような質問をすればいいか？フレームワークを使う必要があるのか？
- フレームワークにはどのような機能があるのか？フレームワークは一般的にどのように機能するのか、そしてその機能の実装はどのように異なるのか？
- これらは素の JavaScript や HTML とどのように関係しているのか？

その後、様々なフレームワークの選択の要点をカバーするチュートリアルをいくつか提供し、自分自身でより深く学び始めるのに十分なコンテキストと親しみやすさを提供します。アクセシビリティなどのウェブプラットフォームの基本的なベストプラクティスを忘れずに、実用的な方法でフレームワークについて学んでいただきたいと思います。

> [!NOTE]
> Scrimba の[ライブラリー/フレームワーク](https://scrimba.com/learn-react-c0e/~033a?via=MDN)<sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>の対話型チュートリアルでは、フレームワークとライブラリーの違いに関する有用な概要、ウェブ上におけるライブラリーとフレームワークの簡単な歴史、そして React に関する具体的な背景情報が提供されています。

## 前提知識

クライアントサイドのフレームワークを学習する前に、ウェブ開発で用いる主要な言語の基礎を学ぶ必要があります。それは [HTML](/ja/docs/Learn_web_development/Core/Structuring_content) と [CSS](/ja/docs/Learn_web_development/Core/Styling_basics)、そして特に [JavaScript](/ja/docs/Learn_web_development/Core/Scripting) です。

ウェブプラットフォームの基本的な機能を理解すれば、その上で構築されているフレームワークのトラブルも自信を持って解決できるでしょう。そうすれば、あなたの書くコードはより豪華でプロフェッショナルなものになるはずです。

## 入門ガイド

- [クライアントサイドフレームワークの紹介](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : フレームワークの一般的な概要から始め、 JavaScript とフレームワークの簡単な歴史、フレームワークがなぜ存在し、何を与えてくれるのか、学習するフレームワークを選ぶにはどう考え始めるべきか、クライアント側のフレームワークにどんな選択肢があるのか、について見ていきます。
- [フレームワークの主な機能](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : 主要な JavaScript フレームワークでは、 DOM の更新、ブラウザーイベントの処理、および楽しい開発体験を提供するために、それぞれ異なる手法が採用されています。この記事では、「4大フレームワーク」の主な機能を調べ、フレームワークがどのように動作する傾向があるのかを高いレベルから見ていき、フレームワーク間の違いについて見ていきます。

## React のチュートリアル

> [!NOTE]
> この React のチュートリアルは 2023 年 1 月に、React/ReactDOM 18.2.0 と create-react-app 5.0.1 で動作確認を行いました。
>
> もし、コードとサンプルのバージョンとを確認する必要があれば、 [todo-react リポジトリー](https://github.com/mdn/todo-react)で最新版を見ることができます。実行中のライブバージョンについては、 <https://mdn.github.io/todo-react/> から確認ができます。

- [React を始める](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : この記事では React のはじめかたを説明します。React の背景と使い方について説明し、ローカル環境で基本的な React ツールチェーンを設定します。また、シンプルな基本アプリを作成して、React がどのようなプロセスで機能するのかを学んでいきます。
- [React ToDo アプリをはじめる](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : 例えば、React でアイディアを検証するためにアプリを試作してみることになったとします（いわゆる、Proof of Concept - 概念実証）。ユーザーが作業したいタスクを追加、編集、削除することができ、また、タスクを削除せずに完了とすることができるアプリです。この記事では、基本的な App コンポーネントの構造とスタイルを整え、後から追加する個々のコンポーネントの定義とインタラクティブな機能の準備を行っていきます。
- [React アプリのコンポーネント化](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : この時点では、アプリは一枚岩です。アプリに何かをさせる前に、管理しやすく、記述しやすいコンポーネントに分解する必要があります。React には、何がコンポーネントで何がコンポーネントでないかという難しいルールはありません。それはあなた次第なのです！この記事では、アプリをコンポーネントに分解するための賢明な方法を紹介します。
- [React での対話性: イベントと状態](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : コンポーネント計画がうまくいったら、今度はアプリを完全に静的な UI から、実際に対話したり変更したりできるような UI に更新し始めましょう。この記事では、イベントと状態について調べながら、この作業を行います。
- [React での対話性: 編集、フィルタリング、条件付きレンダリング](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : React の旅が終わりに近づくにつれて（少なくとも今は）、Todo リスト アプリの主要な機能領域に最後の仕上げを追加します。これには、既存のタスクを編集できるようにすることと、タスクのリストをすべて、完了、未完了の間でフィルタリングすることが含まれます。その過程で、条件付きUIレンダリングについても見ていきます。
- [React におけるアクセシビリティ](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : 最後のチュートリアル記事では、 React のフォーカス管理など、キーボードのみのユーザーとスクリーンリーダーユーザーの両方にとってユーザビリティを向上させ、混乱を軽減することができる（シャレた）アクセシビリティに焦点を当てます。
- [React のリソース](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : この記事の最終回では、さらに学習を進めるために使用できる React のリソースの一覧を提供しています。

## その他のフレームワークの選択

フレームワークを学び始めるのに React を使用したくないという場合は、別の選択肢を選んでも構いません。

代替案として、以下のものを検討するようお勧めします。

- [Angular](https://angular.jp/): [Angular チュートリアル](https://angular.jp/tutorials/learn-angular)で学びます。
- [Ember](https://emberjs.com/)<sup>(英語)</sup>: [Learning Ember.js docs](https://emberjs.com/learn/)<sup>(英語)</sup> で学びます。
- [Svelte](https://svelte.dev/)<sup>(英語)</sup>: [Svelte tutorial](https://svelte.dev/tutorial/svelte/welcome-to-svelte)<sup>(英語)</sup> で学びます。
- [Vue](https://ja.vuejs.org/): [Vue クイックスタート](https://ja.vuejs.org/guide/quick-start) で学びます。

ここで率直に言いますが、前回述べたフレームワークを選んだのは、それらが最高だと考えているからでも、何らかの方法で推奨しているからでも**ありません**。単に、新しいソフトウェアを学ぶために時間を割く際に考えてみるべき以下の基準において、それらが高い評価を得ていると考えているからです。

- これらは十分なサポート体制が整っており、当分は存続するでしょう。ソフトウェアツールの場合と同様に、来週には販売中止にならない可能性が高く、就職活動中にスキルセットに加えるのに望ましい選択肢として、現在も積極的に開発されているものを選ぶのが良いでしょう。
- 強力なコミュニティと優れたドキュメントがあります。特に始めたばかりの頃は、複雑なテーマを学習する際に助けを得られることがとても重要です。

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
