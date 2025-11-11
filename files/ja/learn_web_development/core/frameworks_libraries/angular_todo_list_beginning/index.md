---
title: Angular の todo リストアプリのことはじめ
slug: Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning
l10n:
  sourceCommit: c86c36ca478c7da904c22531e91fdcc2d2a6c690
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}

この時点で、Angular を使用して todo リストアプリケーションの作成を開始する準備が整いました。 完成したアプリケーションには、やることのリストが表示され、機能の編集、削除、追加が含まれます。 この記事では、アプリケーションの構造を理解し、やることの基本的なリストを表示するようになります。

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
      <td>
        基本的なアプリ構造を作成するために、to-do items のリストを表示をすることで、コンポーネント構造、コンポーネント間でのデータ共有、コンテンツの作成、ループなどの基本的な Angular の概念を理解することです。
      </td>
    </tr>
  </tbody>
</table>

## to-do アプリケーションの構造

他のウェブアプリケーションと同様に、 Angular アプリケーションは `index.html` をエントリーポイントとして使用します。 `index.html` は実際にはアプリケーションの最上位の HTML テンプレートです。

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

`<body>` タグ内では、 Angular は特別な要素である `<app-root>` を使用して、メインコンポーネントを挿入します。このメインコンポーネントには、作成した他のコンポーネントも含めることができます。
通常、 `index.html`に触れる必要はありません。代わりに、コンポーネントと呼ばれるアプリケーションの特殊な領域に作業を集中させます。

### コンポーネントを使用して、アプリケーションの構成

コンポーネントは、Angular アプリケーションの中心的な構成要素です。
この to-do アプリケーションには、アプリケーションの基盤としてのコンポーネントと、to-do アイテムを処理するためのコンポーネントの 2 つのコンポーネントがあります。

各コンポーネントは、TypeScript クラス、HTML、および CSS で構成されています。
TypeScript は JavaScript にトランスパイルまたは変換されます。つまり、アプリケーションは最終的にプレーンな JavaScript になりますが、Typescript の拡張機能と合理化された構文を使用できるという便利さがあります。

### @if および @for を使用して UI を動的変更

このチュートリアルでは、テンプレートをいつ、どのようにレンダリングするかを指示する、 Angular の 2 つの重要な[制御フローブロック](https://angular.dev/guide/templates/control-flow)について説明します。このチュートリアルで最初に説明するブロックは、集合を反復処理し、ブロックのコンテンツを繰り返しレンダリングする [`@for`](https://angular.dev/api/core/@for) ブロックです。

このチュートリアルで学ぶ 2 つ目のブロックは [`@if`](https://angular.dev/api/core/@if) です。
`@if` を使用して、条件に基づいてコンテンツを表示させることができます。
例えば、ユーザーが "edit" ボタンをクリックした場合、アイテムの編集に使用される要素を表示させることができます。
ユーザーが "cancel" をクリックした場合、編集に使用される要素が除去されます。

### コンポーネント間でのデータの共有

この to-do アプリケーションでは、データを共有するようにコンポーネントを構成します。
to do リストに新しいアイテムを追加するには、メインコンポーネントが新しいアイテムを 2 番目のコンポーネントに送信する必要があります。
この 2 番目のコンポーネントは、アイテムを管理し、編集、完了のマーク、および個々のアイテムの削除を処理します。

`@Input()` および `@Output()` と呼ばれる特別なデコレーターを使用して、Angular コンポーネント間でデータを共有します。
これらのデコレーターを使用して、特定のプロパティでデータがコンポーネントに出入りできるように指定します。
`@Output()` を使用するには、一方のコンポーネントでイベントを発生させて、もう一方のコンポーネントが利用可能なデータがあることを認識できるようにします。

## Item の定義

`app` ディレクトリーに、次の内容の `item.ts` という名前の新しいファイルを作成します。

```ts
export interface Item {
  description: string;
  done: boolean;
}
```

このファイルは[後で](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Angular_item_component#add_logic_to_itemcomponent)使用するまで使用しませんが、 `item` が何であるかを知って記録する良い機会です。 `Item` インターフェイスは、アプリケーションが `item` が何であるかを理解できるように、 `item` オブジェクトモデルを作成します。この to-do リストの場合、 `item` は説明があり、実行できるオブジェクトです。

## AppComponent にロジックを追加

これで `item` が何なのかが分かったので、アプリケーションにアイテムを追加して、アプリケーションにいくつかのアイテムに渡したことになります。
`app.component.ts` で、内容を次のように置き換えます。

```js
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
}
```

最初の 2 行は JavaScript のインポートです。この場合、 Angular ライブラリーをインポートしています。
`@Component()` デコレーターは、 `AppComponent` に関するメタデータを指定します。
既定のメタデータプロパティは次のとおりです。

- [`standalone`](https://angular.dev/api/core/Component#standalone): そのコンポーネントに [NgModule](https://angular.dev/guide/ngmodules#the-basic-ngmodule) が必要かどうかを指定します。
  スタンドアロンアプリの場合、インポートを使用してテンプレートの依存関係（コンポーネント、ディレクティブなど）を直接管理します。
- [`selector`](https://angular.dev/api/core/Directive#selector): このコンポーネントをインスタンス化するためにテンプレートで使用する CSS セレクターの名前を示します。 これが `'app-root'` です。
  `index.html` の `body` タグ内で、AngularCLI はアプリケーションの生成時に `<app-root></app-root>` を追加しました。
  すべてのコンポーネントセレクターを他のコンポーネント HTML テンプレートに追加することにより、同じように使用します。
- [`templateUrl`](https://angular.dev/api/core/Component#templateUrl): このコンポーネントに関連付ける HTML ファイルを指定します。
  これが、'./app.component.html' です。
- [`styleUrl`](https://angular.dev/api/core/Component#styleUrl): このコンポーネントに特に適用されるスタイルのファイルの場所と名前を提供します。 これが `'./app.component.css'` です。
- [`imports`](https://angular.dev/api/core/Component#imports): テンプレート内で使用できるコンポーネントの依存関係を指定します。

`filter` プロパティは `union` 型です。つまり、 `filter` は `all`, `active` 又は、 `done` の値を持つことができます。
`union` タイプでは、 `filter` プロパティに割り当てる値にタイプミスをすると、TypeScript はバグを早期に発見できるように通知します。
このガイドでは、後の手順でフィルタリングを追加する方法を示しますが、フィルターを使用してすべての items のデフォルトリストを表示することもできます。

`allItems` 配列には、to-do items と `done` が含まれます。
最初のアイテムである `eat` は、 `done` の値が true です。

getter の `get items()` は、 `filter` が `all` と等しい場合、 `allItems` 配列からアイテムを取得します。
それ以外の場合、 `get items()` は、ユーザーがビューをフィルタリングする方法に応じて、 `done` items または未処理の items を返します。
ゲッターはまた、配列の名前を `items` として確立します。これは、次のセクションで使用します。

## AppComponent テンプレートに HTML を追加

ブラウザーで items のリストを表示するには、 `app.component.html` の内容を次の HTML に置き換えます。

```html
<div class="main">
  <h1>\{{ componentTitle }}</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    @for(item of items; track item.description){
    <li>\{{item.description}}</li>
    }
  </ul>
</div>
```

`<li>` は `@for` ブロック内にあり、`items` 配列内のアイテムを反復処理します。
各アイテムに対して、新しい `<li>` が作成されます。
`item.description` を囲む二重中括弧により、 Angular に各アイテムの説明文をそれぞれの `<li>` に表示するよう指示します。

Angular の `@for` ブロックの `track` キーワードは、配列内のどのアイテムが変更されたか、追加されたか、または除去されたかを Angular が識別するのに役立ちます。
これにより、配列を変更した際に Angular が DOM を更新するのがより簡単かつ高速になります。

ブラウザーに、次のようなアイテムのリストが表示されます。

```plain
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## リストに items を追加

to-do リストには、 items を追加する方法が必要です。
`app.component.ts` の中で、クラスの `allItems` の後に次のメソッドを追加します。

```ts
addItem(description: string) {
  if (!description) return;

  this.allItems.unshift({
    description,
    done: false
  });
}
```

`addItem()` メソッドは、ユーザーが提供したアイテムを受け取り、ユーザーが [**Add**] ボタンをクリックすると、そのアイテムを配列に追加します。
`addItem()` メソッドは、配列メソッド `unshift()` を使用して、配列の先頭とリストの先頭に新しいアイテムを追加します。
または、 `push()` を使用して、配列の最後とリストの一番下に新しいアイテムを追加することもできます。

`addItem()` メソッドを使用するには、 `AppComponent` テンプレートの HTML を編集します。
`app.component.html` で、 `<h2>` を次のように置き換えます。

```html
<label for="addItemInput">What would you like to do today?</label>

<input
  #newItem
  placeholder="add an item"
  (keyup.enter)="addItem(newItem.value); newItem.value = ''"
  class="lg-text-input"
  id="addItemInput" />

<button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
```

上記の HTML では、 `#newItem` はテンプレート変数です。この場合のテンプレート変数は、 `<input>` 要素を値として使用しています。テンプレート変数は、コンポーネントのテンプレートのどこからでも参照することができます。

ユーザーが `<input>` フィールドに新しいアイテムを入力し、 **Enter** キーを押すと、`addItem()` メソッドがその値を `allItems` 配列に追加します。
また、 **Enter** キーを押すと、 `<input>` の値が空文字列にリセットされます。 テンプレート変数 `#newItem` は、テンプレート内の `<input>` 要素の値にアクセスするために使用します。
ユーザーは、 **Enter** キーを押す代わりに、同じ `addItem()` メソッドを呼び出す **Add** ボタンをクリックすることもできます。

## まとめ

これで、ブラウザーに to-do の基本的なリストが表示されるはずです。 それは大きな進歩です！ もちろん、やるべきことはまだたくさんあります。 次の記事では、アプリケーションにスタイルを追加する方法について説明します。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_getting_started","Learn_web_development/Core/Frameworks_libraries/Angular_styling", "Learn_web_development/Core/Frameworks_libraries")}}
