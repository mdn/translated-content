---
title: to-do アイテムのフィルタリング
slug: Learn_web_development/Core/Frameworks_libraries/Angular_filtering
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}

次に、ユーザーが to-do アイテムをフィルタリングできるようにする機能を追加して、アクティブなアイテム、完了したアイテム、またはすべてのアイテムを表示できるようにしましょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        主要な
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> と
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、
        <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a>
        言語を扱うことができ、
        <a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >端末/コマンドライン</a
        >に関する知識があること。
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

filter の既定値は `all` ですが、 `active` または `done` にすることもできます。

## フィルター コントロールの追加

`app.component.html` で、次の HTML を **Add** ボタンの前、アイテムをリストするセクションの上に追加します。
次のスニペットでは、 HTML の既存のセクションがコメントになっているため、ボタンを配置する場所を正確に確認できます。

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
- ユーザーが **Done** ボタンをクリックすると、 `done` 値が `true` のアイテムが表示されます。

角括弧 `[]` を使用したクラス属性バインディングは、ボタンのテキストの色を制御します。
クラスバインディング `[class.active]` は、 `filter` の値が式と一致する場合に `active` クラスを適用します。
たとえば、ユーザーが **Done** ボタンをクリックして `filter` 値を `done` に設定すると、クラス バインディング式 `filter == 'done'` は `true` に評価されます。
`filter` 値が `done` の場合、Angular は `active` クラスを **Done** ボタンに適用し、テキストの色を緑色にします。
ユーザーが他のボタンのいずれかをクリックするとすぐに、 `filter` の値は `done` ではなくなるため、緑色のテキスト色は適用されなくなります。

## まとめ

簡単でしたね！ `app.component.ts` には既に `filter` コードがあるので、アイテムのフィルタリングをコントロールする為にテンプレートを編集するだけで済みました。 次の - そして最後の - 記事では、Angular アプリを本番環境で構築する方法を検討し、学習の旅を続けるための追加のリソースを提供します。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}
