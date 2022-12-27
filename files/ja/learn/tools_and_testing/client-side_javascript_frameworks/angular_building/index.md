---
title: Angular アプリケーションのビルドとその他のリソース
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - client-side
  - Angular
  - Building
  - Resources
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

この Angular の最後の記事では、本番環境に対応したアプリをビルドする方法について説明し、学習の旅を続けるためその他のリソースを提供します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <p>
          <a href="/ja/docs/Learn/HTML">HTML</a>、
          <a href="/ja/docs/Learn/CSS">CSS</a>、
          <a href="/ja/docs/Learn/JavaScript">JavaScript</a> に精通していること、
          <a
            href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >ターミナル/コマンドライン</a
          >に関する知識があること。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>Angular アプリをビルドする方法を学ぶ。</td>
    </tr>
  </tbody>
</table>

## 完成したアプリケーションのビルド

アプリケーションの開発が完了したので、Angular CLI の `build` コマンドを実行できます。
`todo` ディレクトリで `build` コマンドを実行すると、アプリケーションは `dist/` という名前のディレクトリにコンパイル結果が出力されます。

`todo` ディレクトリで、コマンド ラインで次のコマンドを実行します。

```bash
ng build -c production
```

CLI はアプリケーションをコンパイルし、コンパイル結果を新しい `dist` ディレクトリに出力します。
`ng build` の `--configuration production`/`-c production` フラグは、プロダクションに不要なものを取り除きます。

## アプリケーションのデプロイ

アプリケーションをデプロイするには、 `dist/my-project-name` フォルダーを Web サーバーに追加します。
これらのファイルは静的であるため、次のようなファイルを提供できる任意の Web サーバーでホストできます。

- Node.js
- Java
- .NET

[Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting), or [App Engine](https://cloud.google.com/appengine/docs/standard/python/getting-started/hosting-a-static-website) などのバックエンドを使用できます

## その次

ここまで基本的なアプリケーションを作成しましたが、Angular の学びはまだ始まったばかりです。
以下の Angular のドキュメントを調べることで、さらに学ぶことができます。

- [Tour of Heroes](https://angular.io/tutorial): サービスの使用、ナビゲーション、サーバーからのデータの取得など、Angular の機能に焦点を当てた詳細なチュートリアル。
- Angular [Components](https://angular.io/guide/component-overview) ガイド: ライフサイクル、コンポーネントの相互作用、ビューのカプセル化などのトピックをカバーする一連の記事。
- [Forms](https://angular.io/guide/forms-overview) ガイド: Angular でのリアクティブ フォームの作成、入力の検証、動的フォームの作成について説明する記事。

## まとめ

以上です。 Angular を楽しんでいただければ幸いです。

{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## このモジュール

- [クライアント側フレームワークの紹介](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [フレームワークの主な機能](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [React をはじめる](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [React ToDo リストをはじめる](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [React アプリのコンポーネント化](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [React のアクセシビリティ](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React リソース](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)

- Angular

  - [Angular をはじめる](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Angular todo リストアプリの事始め](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Angular アプリのスタイリング](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [item コンポーネントの作成](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [To Do アイテムのフィルタリング](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Angular アプリケーションのビルドとその他のリソース](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
