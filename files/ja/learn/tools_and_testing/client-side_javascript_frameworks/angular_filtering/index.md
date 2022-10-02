---
title: To Do アイテムのフィルタリング
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

次に、ユーザーが To Do アイテムをフィルタリングできるようにする機能を追加して、アクティブなアイテム、完了したアイテム、またはすべてのアイテムを表示できるようにしましょう。

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
      <td>アプリにフィルタリング機能を追加します。</td>
    </tr>
  </tbody>
</table>

## フィルタリングコード

フィルタリングは、以前に `app.component.ts` に追加した `filter` プロパティに基づいて構成されています。

```ts
filter: 'all' | 'active' | 'done' = 'all';
```

filter のデフォルト値は `all` ですが、 `active` または `done` にすることもできます。

## フィルター コントロールの追加

`app.component.html` で、次の HTML を **Add** ボタンの前、アイテムをリストするセクションの上に追加します。
次のスニペットでは、HTML の既存のセクションがコメントになっているため、ボタンを配置する場所を正確に確認できます。

```html
<!-- <button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
 -->

  <!-- Buttons that show all, still to do, or done items on click -->
  <div class="btn-wrapper">
    <button
      class="btn btn-menu"
      [class.active]="filter == 'all'"
      (click)="filter = 'all'">
      All
    </button>

    <button
      class="btn btn-menu"
      [class.active]="filter == 'active'"
      (click)="filter = 'active'">
      To Do
    </button>

    <button
      class="btn btn-menu"
      [class.active]="filter == 'done'"
      (click)="filter = 'done'">
      Done
    </button>
  </div>

  <!-- <h2>\{{items.length}} item(s)</h2>
        <ul>... -->
```

ボタンをクリックすると `filter` 値が変更され、Angular がアクティブなボタンにスタイルを適用し、表示する `items` を決定します。

- ユーザーが **All** ボタンをクリックすると、すべてのアイテムが表示されます。
- ユーザーが **To do** ボタンをクリックすると、 `done` の値が `false` のアイテムが表示されます。
- ユーザーが **Done** ボタンをクリックすると、 `done`  値が `true` のアイテムが表示されます。

角括弧 `[]` を使用したクラス属性バインディングは、ボタンのテキストの色を制御します。
クラスバインディング `[class.active]` は、 `filter` の値が式と一致する場合に `active` クラスを適用します。
たとえば、ユーザーが **Done** ボタンをクリックして `filter` 値を `done` に設定すると、クラス バインディング式 `filter == 'done'` は `true` に評価されます。
`filter` 値が `done` の場合、Angular は `active` クラスを **Done** ボタンに適用し、テキストの色を緑色にします。
ユーザーが他のボタンのいずれかをクリックするとすぐに、 `filter` の値は `done` ではなくなるため、緑色のテキスト色は適用されなくなります。

## まとめ

簡単でしたね！ `app.component.ts` には既に `filter` コードがあるので、アイテムのフィルタリングをコントロールする為にテンプレートを編集するだけで済みました。 次の - そして最後の - 記事では、Angular アプリを本番環境で構築する方法を検討し、学習の旅を続けるための追加のリソースを提供します。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

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
  - [Building Angular applications and further resources](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
