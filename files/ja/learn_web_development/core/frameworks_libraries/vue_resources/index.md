---
title: Vue resources
slug: Learn_web_development/Core/Frameworks_libraries/Vue_resources
l10n:
  sourceCommit: 5340aace9b48dc6f885fca3a90d03e7637cd0cb0
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

ここで、学習をさらに進めるために使用できるリソースのリストと、その他の役立つヒントを示して、Vue の紹介をします。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <p>
          最低限、主要な
          <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> と
          <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、
          <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          を扱うことができ、
          <a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">ターミナル/コマンドライン</a>に関する知識があることが推奨されます。
        </p>
        <p>
          Vue コンポーネントは、アプリのデータを管理する JavaScript オブジェクトと、基盤となる DOM 構造にマッピングする HTML ベースのテンプレート構文の組み合わせとして記述されます。インストール、および Vue のより高度な機能（シングルファイルコンポーネントやレンダリング関数など）を使うには、Node.js と npm がインストールされたターミナルが必要です。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        Vue の詳しい情報の調べ方を学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## 詳細情報

Vue について詳しく知りたい場合は、次のサイトをご覧ください。

- [Vue Docs](https://vuejs.org/) — 例、クックブック、参考資料などの様々なドキュメントが含まれているメインの Vue の サイト。ここは、Vue を深く学び始めるのに最も良い場所です。
- [Vue GitHub Repo](https://github.com/vuejs/vue) — Vue 自体のソースコード。Vue のコードベースに直接 issue を報告することや、貢献ができる場所です。Vue のソースコードを学ぶことで、フレームワークの動きのより深い理解や、より良いコードを書くことに役立ちます。

- [Vue Discussions](https://github.com/vuejs/core/discussions) — Vue のヘルプを得るための公式フォーラム。
- [Vue CLI Docs](https://cli.vuejs.org/) — Vue CLI のドキュメント。CLI を使って生成する出力をカスタマイズ、拡張するための情報が含まれています。
- [Nuxt](https://nuxt.com/) — Nuxt はサーバーサイド Vue フレームワークです。Nuxt が提供するサーバーサイドレンダリング機能を使わない場合であっても、メンテナンスがしやすいアプリケーションを作るのに役立つアーキテクチャに関する意見が含まれていて、有用です。このサイトは Nuxt を使うための詳しいドキュメントを提供します。
- [Vue Mastery](https://www.vuemastery.com/courses/) — Vue に特化した有料の教育プラットフォームで、一部は無料のレッスンも含まれています。
- [Vue School](https://vueschool.io/) — 別の有料の Vue 特化教育プラットフォーム。

## Vue アプリをビルドし、公開する

Vue CLI はウェブにアプリケーションを公開するためのツールを提供しています。使い方は以下の通りです。

- ローカルサーバーを立ち上げている場合、ターミナルから <kbd>Ctrl</kbd> \+ <kbd>C</kbd> を押して、サーバーを止めてください。

- 次に、コンソールで`npm run build` (または、`yarn build`)を行ってください。

実行後、新しい 本番環境用のファイルがすべて含まれた `dist` ディレクトリーが作られます。ウェブにサイトを公開するために、このフォルダーの内容をホスティング環境にコピーします。

> [!NOTE]
> Vue CLI は [specific guide on how to publish your app](https://cli.vuejs.org/guide/deployment.html#platform-guides) を含み、一般的なホストプラットフォームに関する情報があります。

## Vue 2

Vue 2 は 2023 年 12 月 31 日にサポート終了し、全ての CLI ツールのデフォルトはバージョン 3 以降になります。
[Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) は コンポーネント上で `setup()` 関数が使用されるプロパティベースの API です。この関数から返されるのは、`<template>` で有効な関数のみです。この API を使う場合は、"reactive" プロパティを明示的に書かなければなりません。Vue は [Options API](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs) を用いて処理します。[Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) は基本的により良いユースケースです。

Vue 2 からのアップグレードをする場合、[Vue 3 migration guide](https://v3-migration.vuejs.org/) を見ることをお勧めします。

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
