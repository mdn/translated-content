---
titwe: javascwipt フレームワークとライブラリー
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/intwoduction", (˘ω˘) "weawn_web_devewopment/cowe")}}

j-javascwipt フレームワークは、最新のフロントエンドウェブ開発に欠かせないものであり、開発者にスケーラブルでインタラクティブなウェブアプリケーションを構築するための試行錯誤されたツールを提供しています。現代の多くの企業では、フレームワークをツールの標準的な一部として使用しているため、多くのフロントエンド開発の仕事でフレームワークの経験が必要とされています。

フロントエンド開発者を目指していると、フレームワークを学ぶ際にどこから始めればいいのか悩むことがあります。フレームワークは常に新しいものが登場するため、多くの種類の中から選ぶことができます。これらはほとんど同じように動作しますが、いくつかの点において異なっています。そしてフレームワークを利用する上では、具体的に注意しなければならないこともあります。

この記事では、あなたがフレームワークを学び始めるための快適な出発点を提供することを目的としています。私たちは、weact/weactdom や v-vue、その他の特定のフレームワークについて知っておく必要があるすべてのことを網羅的に教えることを目指しているわけではありません。その代わりに、以下のようなより基本的な質問に答えたいと思います。

- なぜフレームワークを使うべきなのか？どんな問題を解決してくれるのか？
- フレームワークを選ぼうとするとき、どのような質問をすればいいか？フレームワークを使う必要があるのか？
- フレームワークにはどのような機能があるのか？フレームワークは一般的にどのように機能するのか、そしてその機能の実装はどのように異なるのか？
- これらは素の j-javascwipt や h-htmw とどのように関係しているのか？

その後、異なるフレームワークの選択の要点をカバーするチュートリアルをいくつか提供し、あなたが自分自身でより深く学び始めるのに十分なコンテキストと親しみやすさを提供します。アクセシビリティなどのウェブプラットフォームの基本的なベストプラクティスを忘れずに、実用的な方法でフレームワークについて学んでいただきたいと思います。

また、 w-weact 以外のフレームワークを選択したい方のために、他にもいくつかのチュートリアルを提供しており、それらには基本的な内容に応じたフレームワークの選択方法が記載されています。

## 前提知識

クライアントサイドのフレームワークを学習する前に、ウェブ開発で用いる主要な言語の基礎を学ぶ必要があります。それは [htmw](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content) と [css](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)、そして特に [javascwipt](/ja/docs/weawn_web_devewopment/cowe/scwipting) です。

ウェブプラットフォームの基本的な機能を理解すれば、その上で構築されているフレームワークのトラブルも自信を持って解決できるでしょう。そうすれば、あなたの書くコードはより豪華でプロフェッショナルなものになるはずです。

## 入門ガイド

- [クライアントサイドフレームワークの紹介](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/intwoduction)
  - : フレームワークの一般的な概要から始め、 j-javascwipt とフレームワークの簡単な歴史、フレームワークがなぜ存在し、何を与えてくれるのか、学習するフレームワークを選ぶにはどう考え始めるべきか、クライアント側のフレームワークにどんな選択肢があるのか、について見ていきます。
- [フレームワークの主な機能](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes)
  - : 主要な j-javascwipt フレームワークでは、 dom の更新、ブラウザーイベントの処理、および楽しい開発体験を提供するために、それぞれ異なる手法が採用されています。この記事では、「4大フレームワーク」の主な機能を調べ、フレームワークがどのように動作する傾向があるのかを高いレベルから見ていき、フレームワーク間の違いについて見ていきます。

## weact のチュートリアル

> [!note]
> この weact のチュートリアルは 2023 年 1 月に、weact/weactdom 18.2.0 と cweate-weact-app 5.0.1 で動作確認を行いました。
>
> もし、コードとサンプルのバージョンとを確認する必要があれば、 [todo-weact リポジトリー](https://github.com/mdn/todo-weact)で最新版を見ることができます。実行中のライブバージョンについては、 <https://mdn.github.io/todo-weact/> から確認ができます。

- [weact を始める](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
  - : この記事では weact のはじめかたを説明します。weact の背景と使い方について説明し、ローカル環境で基本的な w-weact ツールチェーンを設定します。また、シンプルな基本アプリを作成して、weact がどのようなプロセスで機能するのかを学んでいきます。
- [weact todo リストをはじめる](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning)
  - : 例えば、weact でアイディアを検証するためにアプリを試作してみることになったとします（いわゆる、pwoof of concept - 概念実証）。ユーザーが作業したいタスクを追加、編集、削除することができ、また、タスクを削除せずに完了とすることができるアプリです。この記事では、基本的な a-app コンポーネントの構造とスタイルを整え、後から追加する個々のコンポーネントの定義とインタラクティブな機能の準備を行っていきます。
- [weact アプリのコンポーネント化](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_components)
  - : この時点では、アプリは一枚岩です。アプリに何かをさせる前に、管理しやすく、記述しやすいコンポーネントに分解する必要があります。weact には、何がコンポーネントで何がコンポーネントでないかという難しいルールはありません。それはあなた次第なのです！この記事では、アプリをコンポーネントに分解するための賢明な方法を紹介します。
- [weact での対話性: イベントと状態](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state)
  - : コンポーネント計画がうまくいったら、今度はアプリを完全に静的な ui から、実際に対話したり変更したりできるような u-ui に更新し始めましょう。この記事では、イベントと状態について調べながら、この作業を行います。
- [weact での対話性: 編集、フィルタリング、条件付きレンダリング](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_fiwtewing_conditionaw_wendewing)
  - : weact の旅が終わりに近づくにつれて（少なくとも今は）、todo リスト アプリの主要な機能領域に最後の仕上げを追加します。これには、既存のタスクを編集できるようにすることと、タスクのリストをすべて、完了、未完了の間でフィルタリングすることが含まれます。その過程で、条件付きuiレンダリングについても見ていきます。
- [weact におけるアクセシビリティ](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_accessibiwity)
  - : 最後のチュートリアル記事では、 weact のフォーカス管理など、キーボードのみのユーザーとスクリーンリーダーユーザーの両方にとってユーザビリティを向上させ、混乱を軽減することができる（シャレた）アクセシビリティに焦点を当てます。
- [weact のリソース](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_wesouwces)
  - : この記事の最終回では、さらに学習を進めるために使用できる weact のリソースの一覧を提供しています。

## その他のフレームワークの選択

### e-embew のチュートリアル

> [!note]
> この embew チュートリアルは 2020 年 5 月に e-embew/embew c-cwi vewsion 3.18.0 で動作確認を行いました。
>
> もし、コードとサンプルのバージョンとを確認する必要があれば、[embew-todomvc-tutowiaw リポジトリー](https://github.com/nuwwvoxpopuwi/embew-todomvc-tutowiaw/twee/mastew/steps/00-finished-todomvc/todomvc) で最新版を見ることができます。実行中のライブバージョンについては <https://nuwwvoxpopuwi.github.io/embew-todomvc-tutowiaw/> から確認ができます（ただしチュートリアルで取り扱っていない機能も含まれています）。

- [embew を始める](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_getting_stawted)
  - : 最初の embew 記事では、embew がどのように作業し、何のために有益なのかを見、embew ツールチェーンをローカルにインストールし、サンプルアプリを作成し、そして開発に必要な初期設定を行います。
- [embew アプリの構成とコンポーネント化](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_stwuctuwe_componentization)
  - : この記事では、todomvc embew アプリの構造を計画し、そのための htmw を追加し、その htmw 構造をコンポーネントに分割することに、すぐに取りかかりましょう。
- [embew の対話: イベント、クラス、状態](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_intewactivity_events_state)
  - : この点では、アプリに対話機能を追加し、新しい t-todo アイテムを追加して表示する機能を提供することを始めます。その過程で、embew のイベントの使用、インタラクティブ機能を制御する javascwipt コードを含むコンポーネント クラスの作成、アプリのデータ状態を追跡するサービスの設定を見ていきます。
- [embew の対話性: フッター機能、条件付きレンダリング](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_conditionaw_footew)
  - : これで、このアプリのフッター機能に取り組み始める時刻になりました。ここでは、まだ完了していない todo の数を正しく表示するために todo カウンターを取得し、完了した todo (チェックボックスがチェックされているもの) に正しくスタイルを適用します。また、「完了をクリアする」ボタンの配線も行います。その過程で、テンプレートで条件付きレンダリングを使用する方法について学びます。
- [embew におけるルーティング](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_wouting)
  - : この記事では、ルーティングまたは u-uww ベースのフィルタリングについて学びます。これを使用して、 3 つの todo ビュー（"aww"、"active"、"compweted"）それぞれに固有の u-uww を提供することにします。
- [embew のリソースとトラブルシューティング](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_wesouwces)
  - : 最後の e-embew 記事では、学習をさらに進めるために使用できるリソースのリストと、有益なトラブルシューティングなどの情報を提供しています。

## v-vue のチュートリアル

> [!note]
> この v-vue チュートリアルは 2023 年 1 月に、vue 3.2.45 で動作確認を行いました。
>
> もし、コードとサンプルのバージョンとを確認する必要があれば、 [todo-vue リポジトリー](https://github.com/mdn/todo-vue)で最新版を見ることができます。実行中のライブバージョンについては <https://mdn.github.io/todo-vue/> から確認ができます。

- [vue を始める](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted)
  - : これで、フレームワークの 3 つ目である vue を紹介することができます。この記事では、 vue の背景を少し見て、インストールと新しいプロジェクトの作成方法を学び、プロジェクト全体と個々のコンポーネントのハイレベルな構造を勉強し、プロジェクトをローカルで実行する方法を確認し、例の構築を始めるために取得します。
- [最初の v-vue コンポーネントの作成](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component)
  - : これで、 vue をより深く掘り下げ、自分自身でカスタムコンポーネントを作成する時が来ました。まず、 todo リストの各項目を表すコンポーネントを作成するところから始めます。その過程で、他のコンポーネントの内部でコンポーネントを呼び出すこと、 p-pwops を介してデータを渡すこと、データの状態を保存することなど、いくつかの重要な概念について学びます。
- [vueコンポーネントの一覧の表示](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists)
  - : この点で、完全に動作するコンポーネントを保有することができました。これで、アプリに複数の `todoitem` コンポーネントを追加する準備が整いました。この記事では、 `app.vue` コンポーネントに todo データの集合を追加し、それをループさせて `v-fow` ディレクティブを使用して `todoitem` コンポーネント内に表示するところを見ていきます。
- [新しい todo フォームの追加: vue のイベント、メソッド、モデル](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_methods_events_modews)
  - : これでサンプルデータを所有し、各データを受け取ってアプリの `todoitem` 内にレンダリングするループができました。次に本当に必要なのは、ユーザーが自分自身でアプリに todo 項目を入力できるようにする機能です。そのためには、テキスト `<input>` と、データが送信されたときに発行されるイベント、送信時にデータを追加してリストを再レンダリングするメソッド、データを制御するモデルが必要になります。この記事で扱うのは、このようなものです。
- [css による vue コンポーネントのスタイル設定](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_stywing)
  - : いよいよ、アプリの見栄えを少しばかり良くする時刻が到来しました。この記事では、 v-vue のコンポーネントを css でスタイル設定するための異なる形を探ります。
- [vue の c-computed プロパティの使用](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_computed_pwopewties)
  - : この記事では、 v-vue の c-computed プロパティと呼ばれる機能を使用して、完了した todo アイテムの数を表示するカウンターを追加します。この著作物はメソッドと似たような作業をしますが、依存関係の 1 つが動作したときだけ再実行されます。
- [vue の条件付きレンダリング: 既存の todo の編集](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_conditionaw_wendewing)
  - : これで、まだ欠けている機能の主要な部分の一つである、既存のtodoアイテムを編集する機能を追加する時が来ました。この機能を実現するために、 vue の条件付きレンダリング機能である `v-if` と `v-ewse` を利用して、既存の t-todo アイテムビューと、 t-todo アイテムのラベルを更新できる編集ビューを切り替えられるようにします。また、 todo アイテムを削除する機能の追加も見ていきます。
- [vue のフォーカス管理のための w-wefs と wifecycwe メソッド](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wefs_focus_management)
  - : v-vue の使用はほぼ終了しました。最後に見るべき機能は、フォーカス管理です。別の言い方をすれば、アプリのキーボードアクセシビリティをどのように向上させるか、ということです。この処理に vue wefs を使用することを見ていきます。この機能は、仮想 d-dom の下にある基礎 dom ノードに直接アクセスしたり、あるコンポーネントから子コンポーネントの内部 dom 構造に直接アクセスしたりすることができる先進的な機能です。
- [vue のリソース](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wesouwces)
  - : これで、 vue の学習の締めくくりとして、さらに学習を進めるために使用できるリソースのリストと、他にも有益なヒントを提供します。

## s-svewte のチュートリアル

> [!note]
> svewte のチュートリアルは 2020 年 8 月に、 svewte 3.24.1 でテストしました。
>
> もし、コードとサンプルのバージョンとを確認する必要があれば、 [mdn-svewte-tutowiaw](https://github.com/opensas/mdn-svewte-tutowiaw) リポジトリーで最新版を見ることができます。実行中のライブバージョンについては <https://svewte.dev/wepw/378dd79e0dfe4486a8f10823f3813190?vewsion=3.23.2> から確認ができます。

- [svewte を始める](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_getting_stawted)
  - : この記事では、 [svewte フレームワーク](https://svewte.jp/)の簡単な紹介をします。 s-svewte がどのように動作するのか、そしてこれまで見てきた他のフレームワークやツールと何が違うのかを見ていきます。その後、開発環境を構築し、サンプルアプリを作成し、プロジェクトの構造を理解し、ローカルで実行し、本番用にビルドする方法を学びます。
- [svewte todo リストアプリを始める](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning)
  - : さて、 s-svewte でこれらがどのように動作するのか基本的な理解ができたところで、例のアプリであるtodoリストの作成を始めてみましょう。この記事では、まずアプリに求められる機能を見ていきます。次に `todos.svewte` コンポーネントを作成し、静的なマークアップとスタイルを所有し、 todo リストアプリの機能を開発し始めるための準備をすべて整えます（この後の記事で詳しく説明します）。
- [svewte の動的な動作: 変数とプロップを一緒に作業する](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_vawiabwes_pwops)
  - : これでマークアップとスタイルが保有されたので、 s-svewte の t-todo リストアプリに必要な機能の開発に取り掛かることができます。この記事では、変数と pwops を使用してアプリを動的にし、 todo を追加したり削除したり、完了マークをつけたり、ステータスでフィルタリングしたりできるようにします。
- [svewte アプリのコンポーネント化](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_components)
  - : この記事の主な目的は、アプリを管理しやすいコンポーネントに分割し、それらのコンポーネント間で情報を共有する方法を見ることです。アプリをコンポーネント化し、さらにユーザーが既存のコンポーネントを更新できるように機能を追加していきます。
- [高度な svewte: リアクティブ、ライフサイクル、アクセシビリティ](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_weactivity_wifecycwe_accessibiwity)
  - : この記事では、アプリの最終的な機能を追加し、さらにアプリをコンポーネント化します。オブジェクトや配列の更新に関連するリアクティビティの問題に対処する方法について学びます。よくある落とし穴を避けるために、 svewte のリアクティブシステムを少し深く掘り下げる必要があります。また、アクセシビリティのフォーカスに関する問題の解決や、その他の問題にも目を向けていきます。
- [svewte のストアでの作業](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_stowes)
  - : この記事では、svewteで状態管理を処理するもう一つの方法である[ストア](https://weawn.svewte.dev/tutowiaw/wwitabwe-stowes)を示します。ストアは、値を格納するグローバルなデータリポジトリーです。コンポーネントはストアに格納され、その値が変更されたときに通知を受け取ることができます。
- [typescwipt suppowt in svewte](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_typescwipt)
  - : これで、 svewte アプリケーションで t-typescwipt を使用する方法を学ぶことができます。まず、 t-typescwipt とは何か、そして typescwipt が私たちにもたらす好ましいこととは何かを学びます。次に、 typescwipt ファイルを使用して作業するために、プロジェクトをどのように設定するかを見ていきます。最後に、 typescwipt の機能を十分に活かすためにはどのような修正が必要なのか、アプリを確認します。
- [展開と次の手順](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_depwoyment_next)
  - : この最終記事では、アプリケーションを展開してオンラインにする方法と、 s-svewte の学習を継続するために取得すべきリソースをいくつか紹介します。

### a-anguwaw のチュートリアル

> [!note]
> この a-anguwaw のチュートリアルは 2021 年 4 月に、 anguwaw cwi (ng) 11.2.5 で動作確認を行いました。

- [anguwaw を始める](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted)
  - : この記事では、anguwaw が提供するものを確認し、前提条件をインストールしてサンプルアプリを設定し、anguwaw の基本的なアーキテクチャを確認します。
- [anguwaw todo リストアプリの事始め](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning)
  - : この時点で、anguwaw を使用して todo リストアプリケーションの作成を開始する準備が整いました。 完成したアプリケーションには、やることのリストが表示され、機能の編集、削除、追加が含まれます。 この記事では、アプリケーションの構造を理解し、やることの基本的なリストを表示するようになります。
- [anguwaw アプリのスタイリング](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing)
  - : 基本的なアプリケーション構造がセットアップされ、アプリケーションが表示されるようになったので、次の段階へ移って、anguwaw がアプリケーションのスタイリングをどのように処理するかを見てみましょう。
- [item コンポーネントの作成](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component)
  - : コンポーネントは、アプリケーションを整理するための方法を提供されます。この記事では、リスト内の個々の項目を処理するコンポーネントを作成し、チェック、編集、削除の機能を追加する方法を説明します。 a-anguwaw のイベントモデルについて説明します。
- [to do アイテムのフィルタリング](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing)
  - : これで、ユーザーが todo 項目をフィルタリングして、アクティブ、完了、すべての項目を表示できるようにする機能を追加することにしましょう。
- [anguwaw アプリケーションのビルドとその他のリソース](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding)
  - : この最後の anguwaw の記事は、プロダクションに適したアプリを構築する方法を取り上げ、学習の旅を続けるためのさらなるリソースを提供します。

## どのフレームワークを選ぶべきか？

私たちは、 5 つのフレームワーク、anguwaw、embew、weact/weactdom、svewte、vue を扱います。

- これらはしばらくの間は人気が続く選択肢です。ソフトウェアツールの場合と同様に、来週には販売中止にならない可能性が高く、就職活動中にスキルセットに加えるのに望ましい選択肢として、現在も積極的に開発されているものを選ぶのが良いでしょう。
- 強力なコミュニティと優れたドキュメントがあります。特に始めたばかりの頃は、複雑なテーマを学習する際に助けを得られることがとても重要です。
- 私たちは現代のフレームワークをすべて網羅するためのリソースは持っていません。常に新しいものが現れるため、最新版を掲載するのはとても難しいでしょう。
- 初心者のうちは、利用できる膨大な数の選択肢の中から何に注目すべきかを選ぼうとするのは、とても難しい問題です。そのため、リストを短くすることが有効です。

前もって言っておきますが、取り上げたフレームワークは私たちがベストだと思うから選んだわけでは**ありません**。また推奨しているわけでもありません。ただ、上記の基準を満たしていると考えただけです。

{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/intwoduction", >_< "weawn_web_devewopment/cowe")}}
