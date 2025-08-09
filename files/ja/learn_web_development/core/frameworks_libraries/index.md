---
title: JavaScript フレームワークとライブラリー
slug: Learn_web_development/Core/Frameworks_libraries
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript フレームワークは、最新のフロントエンドウェブ開発に欠かせないものであり、開発者にスケーラブルでインタラクティブなウェブアプリケーションを構築するための試行錯誤されたツールを提供しています。現代の多くの企業では、フレームワークをツールの標準的な一部として使用しているため、多くのフロントエンド開発の仕事でフレームワークの経験が必要とされています。

フロントエンド開発者を目指していると、フレームワークを学ぶ際にどこから始めればいいのか悩むことがあります。フレームワークは常に新しいものが登場するため、多くの種類の中から選ぶことができます。これらはほとんど同じように動作しますが、いくつかの点において異なっています。そしてフレームワークを利用する上では、具体的に注意しなければならないこともあります。

この記事では、あなたがフレームワークを学び始めるための快適な出発点を提供することを目的としています。私たちは、React/ReactDOM や Vue、その他の特定のフレームワークについて知っておく必要があるすべてのことを網羅的に教えることを目指しているわけではありません。その代わりに、以下のようなより基本的な質問に答えたいと思います。

- なぜフレームワークを使うべきなのか？どんな問題を解決してくれるのか？
- フレームワークを選ぼうとするとき、どのような質問をすればいいか？フレームワークを使う必要があるのか？
- フレームワークにはどのような機能があるのか？フレームワークは一般的にどのように機能するのか、そしてその機能の実装はどのように異なるのか？
- これらは素の JavaScript や HTML とどのように関係しているのか？

その後、異なるフレームワークの選択の要点をカバーするチュートリアルをいくつか提供し、あなたが自分自身でより深く学び始めるのに十分なコンテキストと親しみやすさを提供します。アクセシビリティなどのウェブプラットフォームの基本的なベストプラクティスを忘れずに、実用的な方法でフレームワークについて学んでいただきたいと思います。

また、 React 以外のフレームワークを選択したい方のために、他にもいくつかのチュートリアルを提供しており、それらには基本的な内容に応じたフレームワークの選択方法が記載されています。

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
- [React ToDo リストをはじめる](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
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

### Ember のチュートリアル

> [!NOTE]
> この Ember チュートリアルは 2020 年 5 月に Ember/Ember CLI version 3.18.0 で動作確認を行いました。
>
> もし、コードとサンプルのバージョンとを確認する必要があれば、[ember-todomvc-tutorial リポジトリー](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) で最新版を見ることができます。実行中のライブバージョンについては <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> から確認ができます（ただしチュートリアルで取り扱っていない機能も含まれています）。

- [Ember を始める](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Ember_getting_started)
  - : 最初の Ember 記事では、Ember がどのように作業し、何のために有益なのかを見、Ember ツールチェーンをローカルにインストールし、サンプルアプリを作成し、そして開発に必要な初期設定を行います。
- [Ember アプリの構成とコンポーネント化](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization)
  - : この記事では、TodoMVC Ember アプリの構造を計画し、そのための HTML を追加し、その HTML 構造をコンポーネントに分割することに、すぐに取りかかりましょう。
- [Ember の対話: イベント、クラス、状態](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state)
  - : この点では、アプリに対話機能を追加し、新しい ToDo アイテムを追加して表示する機能を提供することを始めます。その過程で、Ember のイベントの使用、インタラクティブ機能を制御する JavaScript コードを含むコンポーネント クラスの作成、アプリのデータ状態を追跡するサービスの設定を見ていきます。
- [Ember の対話性: フッター機能、条件付きレンダリング](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer)
  - : これで、このアプリのフッター機能に取り組み始める時刻になりました。ここでは、まだ完了していない ToDo の数を正しく表示するために ToDo カウンターを取得し、完了した ToDo (チェックボックスがチェックされているもの) に正しくスタイルを適用します。また、「完了をクリアする」ボタンの配線も行います。その過程で、テンプレートで条件付きレンダリングを使用する方法について学びます。
- [Ember におけるルーティング](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Ember_routing)
  - : この記事では、ルーティングまたは URL ベースのフィルタリングについて学びます。これを使用して、 3 つの Todo ビュー（"All"、"Active"、"Completed"）それぞれに固有の URL を提供することにします。
- [Ember のリソースとトラブルシューティング](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Ember_resources)
  - : 最後の Ember 記事では、学習をさらに進めるために使用できるリソースのリストと、有益なトラブルシューティングなどの情報を提供しています。

## Vue のチュートリアル

> [!NOTE]
> この Vue チュートリアルは 2023 年 1 月に、Vue 3.2.45 で動作確認を行いました。
>
> もし、コードとサンプルのバージョンとを確認する必要があれば、 [todo-vue リポジトリー](https://github.com/mdn/todo-vue)で最新版を見ることができます。実行中のライブバージョンについては <https://mdn.github.io/todo-vue/> から確認ができます。

- [Vue を始める](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)
  - : これで、フレームワークの 3 つ目である Vue を紹介することができます。この記事では、 Vue の背景を少し見て、インストールと新しいプロジェクトの作成方法を学び、プロジェクト全体と個々のコンポーネントのハイレベルな構造を勉強し、プロジェクトをローカルで実行する方法を確認し、例の構築を始めるために取得します。
- [最初の Vue コンポーネントの作成](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_first_component)
  - : これで、 Vue をより深く掘り下げ、自分自身でカスタムコンポーネントを作成する時が来ました。まず、 Todo リストの各項目を表すコンポーネントを作成するところから始めます。その過程で、他のコンポーネントの内部でコンポーネントを呼び出すこと、 props を介してデータを渡すこと、データの状態を保存することなど、いくつかの重要な概念について学びます。
- [Vueコンポーネントの一覧の表示](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists)
  - : この点で、完全に動作するコンポーネントを保有することができました。これで、アプリに複数の `ToDoItem` コンポーネントを追加する準備が整いました。この記事では、 `App.vue` コンポーネントに Todo データの集合を追加し、それをループさせて `v-for` ディレクティブを使用して `ToDoItem` コンポーネント内に表示するところを見ていきます。
- [新しい todo フォームの追加: Vue のイベント、メソッド、モデル](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models)
  - : これでサンプルデータを所有し、各データを受け取ってアプリの `ToDoItem` 内にレンダリングするループができました。次に本当に必要なのは、ユーザーが自分自身でアプリに ToDo 項目を入力できるようにする機能です。そのためには、テキスト `<input>` と、データが送信されたときに発行されるイベント、送信時にデータを追加してリストを再レンダリングするメソッド、データを制御するモデルが必要になります。この記事で扱うのは、このようなものです。
- [CSS による Vue コンポーネントのスタイル設定](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_styling)
  - : いよいよ、アプリの見栄えを少しばかり良くする時刻が到来しました。この記事では、 Vue のコンポーネントを CSS でスタイル設定するための異なる形を探ります。
- [Vue の computed プロパティの使用](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)
  - : この記事では、 Vue の computed プロパティと呼ばれる機能を使用して、完了した Todo アイテムの数を表示するカウンターを追加します。この著作物はメソッドと似たような作業をしますが、依存関係の 1 つが動作したときだけ再実行されます。
- [Vue の条件付きレンダリング: 既存の TODO の編集](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering)
  - : これで、まだ欠けている機能の主要な部分の一つである、既存のTodoアイテムを編集する機能を追加する時が来ました。この機能を実現するために、 Vue の条件付きレンダリング機能である `v-if` と `v-else` を利用して、既存の Todo アイテムビューと、 Todo アイテムのラベルを更新できる編集ビューを切り替えられるようにします。また、 Todo アイテムを削除する機能の追加も見ていきます。
- [Vue のフォーカス管理のための refs と lifecycle メソッド](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management)
  - : Vue の使用はほぼ終了しました。最後に見るべき機能は、フォーカス管理です。別の言い方をすれば、アプリのキーボードアクセシビリティをどのように向上させるか、ということです。この処理に Vue refs を使用することを見ていきます。この機能は、仮想 DOM の下にある基礎 DOM ノードに直接アクセスしたり、あるコンポーネントから子コンポーネントの内部 DOM 構造に直接アクセスしたりすることができる先進的な機能です。
- [Vue のリソース](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_resources)
  - : これで、 Vue の学習の締めくくりとして、さらに学習を進めるために使用できるリソースのリストと、他にも有益なヒントを提供します。

## Svelte のチュートリアル

> [!NOTE]
> Svelte のチュートリアルは 2020 年 8 月に、 Svelte 3.24.1 でテストしました。
>
> もし、コードとサンプルのバージョンとを確認する必要があれば、 [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) リポジトリーで最新版を見ることができます。実行中のライブバージョンについては <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2> から確認ができます。

- [Svelte を始める](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started)
  - : この記事では、 [Svelte フレームワーク](https://svelte.jp/)の簡単な紹介をします。 Svelte がどのように動作するのか、そしてこれまで見てきた他のフレームワークやツールと何が違うのかを見ていきます。その後、開発環境を構築し、サンプルアプリを作成し、プロジェクトの構造を理解し、ローカルで実行し、本番用にビルドする方法を学びます。
- [Svelte Todo リストアプリを始める](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_Todo_list_beginning)
  - : さて、 Svelte でこれらがどのように動作するのか基本的な理解ができたところで、例のアプリであるTodoリストの作成を始めてみましょう。この記事では、まずアプリに求められる機能を見ていきます。次に `Todos.svelte` コンポーネントを作成し、静的なマークアップとスタイルを所有し、 ToDo リストアプリの機能を開発し始めるための準備をすべて整えます（この後の記事で詳しく説明します）。
- [Svelte の動的な動作: 変数とプロップを一緒に作業する](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_variables_props)
  - : これでマークアップとスタイルが保有されたので、 Svelte の ToDo リストアプリに必要な機能の開発に取り掛かることができます。この記事では、変数と props を使用してアプリを動的にし、 ToDo を追加したり削除したり、完了マークをつけたり、ステータスでフィルタリングしたりできるようにします。
- [Svelte アプリのコンポーネント化](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_components)
  - : この記事の主な目的は、アプリを管理しやすいコンポーネントに分割し、それらのコンポーネント間で情報を共有する方法を見ることです。アプリをコンポーネント化し、さらにユーザーが既存のコンポーネントを更新できるように機能を追加していきます。
- [高度な Svelte: リアクティブ、ライフサイクル、アクセシビリティ](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility)
  - : この記事では、アプリの最終的な機能を追加し、さらにアプリをコンポーネント化します。オブジェクトや配列の更新に関連するリアクティビティの問題に対処する方法について学びます。よくある落とし穴を避けるために、 Svelte のリアクティブシステムを少し深く掘り下げる必要があります。また、アクセシビリティのフォーカスに関する問題の解決や、その他の問題にも目を向けていきます。
- [Svelte のストアでの作業](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_stores)
  - : この記事では、Svelteで状態管理を処理するもう一つの方法である[ストア](https://learn.svelte.dev/tutorial/writable-stores)を示します。ストアは、値を格納するグローバルなデータリポジトリーです。コンポーネントはストアに格納され、その値が変更されたときに通知を受け取ることができます。
- [TypeScript support in Svelte](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript)
  - : これで、 Svelte アプリケーションで TypeScript を使用する方法を学ぶことができます。まず、 TypeScript とは何か、そして TypeScript が私たちにもたらす好ましいこととは何かを学びます。次に、 TypeScript ファイルを使用して作業するために、プロジェクトをどのように設定するかを見ていきます。最後に、 TypeScript の機能を十分に活かすためにはどのような修正が必要なのか、アプリを確認します。
- [展開と次の手順](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next)
  - : この最終記事では、アプリケーションを展開してオンラインにする方法と、 Svelte の学習を継続するために取得すべきリソースをいくつか紹介します。

### Angular のチュートリアル

> [!NOTE]
> この Angular のチュートリアルは 2021 年 4 月に、 Angular CLI (NG) 11.2.5 で動作確認を行いました。

- [Angular を始める](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Angular_getting_started)
  - : この記事では、Angular が提供するものを確認し、前提条件をインストールしてサンプルアプリを設定し、Angular の基本的なアーキテクチャを確認します。
- [Angular todo リストアプリの事始め](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning)
  - : この時点で、Angular を使用して todo リストアプリケーションの作成を開始する準備が整いました。 完成したアプリケーションには、やることのリストが表示され、機能の編集、削除、追加が含まれます。 この記事では、アプリケーションの構造を理解し、やることの基本的なリストを表示するようになります。
- [Angular アプリのスタイリング](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Angular_styling)
  - : 基本的なアプリケーション構造がセットアップされ、アプリケーションが表示されるようになったので、次の段階へ移って、Angular がアプリケーションのスタイリングをどのように処理するかを見てみましょう。
- [item コンポーネントの作成](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component)
  - : コンポーネントは、アプリケーションを整理するための方法を提供されます。この記事では、リスト内の個々の項目を処理するコンポーネントを作成し、チェック、編集、削除の機能を追加する方法を説明します。 Angular のイベントモデルについて説明します。
- [To Do アイテムのフィルタリング](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Angular_filtering)
  - : これで、ユーザーが ToDo 項目をフィルタリングして、アクティブ、完了、すべての項目を表示できるようにする機能を追加することにしましょう。
- [Angular アプリケーションのビルドとその他のリソース](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Angular_building)
  - : この最後の Angular の記事は、プロダクションに適したアプリを構築する方法を取り上げ、学習の旅を続けるためのさらなるリソースを提供します。

## どのフレームワークを選ぶべきか？

私たちは、 5 つのフレームワーク、Angular、Ember、React/ReactDOM、Svelte、Vue を扱います。

- これらはしばらくの間は人気が続く選択肢です。ソフトウェアツールの場合と同様に、来週には販売中止にならない可能性が高く、就職活動中にスキルセットに加えるのに望ましい選択肢として、現在も積極的に開発されているものを選ぶのが良いでしょう。
- 強力なコミュニティと優れたドキュメントがあります。特に始めたばかりの頃は、複雑なテーマを学習する際に助けを得られることがとても重要です。
- 私たちは現代のフレームワークをすべて網羅するためのリソースは持っていません。常に新しいものが現れるため、最新版を掲載するのはとても難しいでしょう。
- 初心者のうちは、利用できる膨大な数の選択肢の中から何に注目すべきかを選ぼうとするのは、とても難しい問題です。そのため、リストを短くすることが有効です。

前もって言っておきますが、取り上げたフレームワークは私たちがベストだと思うから選んだわけでは**ありません**。また推奨しているわけでもありません。ただ、上記の基準を満たしていると考えただけです。

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
