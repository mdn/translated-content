---
title: item コンポーネントの作成
slug: Learn_web_development/Core/Frameworks_libraries/Angular_item_component
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

コンポーネントは、アプリケーションを構成する方法を提供します。 この記事では、リスト内の個々の item を処理するコンポーネントを作成し、チェック、編集、および削除機能を追加する方法について説明します。 ここでは、Angular イベントモデルについて説明します。

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
        イベントが更新を処理するためにどのように機能するかなど、コンポーネントの詳細を学習します。 チェック、編集、および削除機能を追加します。
      </td>
    </tr>
  </tbody>
</table>

## コンポーネントの新規作成

コマンドラインで、次の CLI コマンドを使用して `item` という名前のコンポーネントを作成します。

```bash
ng generate component item
```

`ng generate component` コマンドは、指定した名前でコンポーネントとフォルダーを作成します。
ここで、フォルダーとコンポーネントの名前は `item` です。
`item` ディレクトリーは `app` フォルダー内にあります。

```plain
src/app/item
├── item.component.css
├── item.component.html
├── item.component.spec.ts
└── item.component.ts
```

`AppComponent` と同様に、 `ItemComponent` は次のファイルで構成されています。

- `item.component.html` は HTML です
- `item.component.ts` はロジックです
- `item.component.css` はスタイルです
- `item.component.spec.ts` は、コンポーネントをテストするためのものです

HTML ファイルと CSS ファイルへの参照は、 `item.component.ts` の `@Component()` デコレーターメタデータで確認できます。

```js
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
```

## ItemComponent の HTML を追加

`ItemComponent` は、完了したアイテムをチェックしたり、編集したり、削除したりする方法をユーザーに提供するタスクを引き継ぐことができます。

`item.component.html` のプレースホルダーコンテンツを次のように置き換えて、アイテムを管理するためのマークアップを追加します。

```html
<div class="item">
  <input
    [id]="item.description"
    type="checkbox"
    (change)="item.done = !item.done"
    [checked]="item.done" />
  <label [for]="item.description">\{{item.description}}</label>

  @if (!editable) {
  <div class="btn-wrapper">
    <button class="btn" (click)="editable = !editable">Edit</button>
    <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
  </div>
  }

  <!-- このセクションは、ユーザーが Edit ボタンをクリックした場合のみ表示されます -->
  @if (editable) {
  <div>
    <input
      class="sm-text-input"
      placeholder="edit item"
      [value]="item.description"
      #editedItem
      (keyup.enter)="saveItem(editedItem.value)" />

    <div class="btn-wrapper">
      <button class="btn" (click)="editable = !editable">Cancel</button>
      <button class="btn btn-save" (click)="saveItem(editedItem.value)">
        Save
      </button>
    </div>
  </div>
  }
</div>
```

最初の入力フィールドはチェックボックスであるため、ユーザーはアイテムが完了したときにアイテムをチェックできます。
チェックボックスの `<label>` にある二重中括弧 `\{{}}` は、Angular の補間を示します。
Angular は `\{{item.description}}` を使用して、 `items` 配列から現在の `item` の説明を取得します。
次のセクションでは、コンポーネントがデータを共有する方法について詳しく説明します。

現在のアイテムを編集および削除するための次の 2 つのボタンは、 `<div>` 内にあります。
この `<div>` は `@if` ブロックであり、条件に基づいてテンプレートの一部をレンダリングするために使用することができます。
この `@if` は、 `editable` が `false` の場合、この `<div>` が DOM にあることを意味します。 `editable` が `true` の場合、Angular はこの `<div>` を DOM から削除します。

```html
@if (!editable) {
<div class="btn-wrapper">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
}
```

ユーザーが **Edit** ボタンをクリックすると、 `editable` が true になり、この `<div>` とその子が DOM から削除されます。
ユーザーが **Edit** をクリックする代わりに **Delete** をクリックすると、 `ItemComponent` は `AppComponent` に削除を通知するイベントを発生させます。

`@if` も次の `<div>` にありますが、 `editable` 値 `true` に設定されています。
この場合、 `editable` が `true` の場合、 Angular は `<div>` とその子要素 `<input>` と `<button>` を DOM に配置します。

```html
<!-- このセクションは、ユーザーが Edit ボタンをクリックした場合のみ表示されます -->
@if (editable) {
<div>
  <input
    class="sm-text-input"
    placeholder="edit item"
    [value]="item.description"
    #editedItem
    (keyup.enter)="saveItem(editedItem.value)" />

  <div class="btn-wrapper">
    <button class="btn" (click)="editable = !editable">Cancel</button>
    <button class="btn btn-save" (click)="saveItem(editedItem.value)">
      Save
    </button>
  </div>
</div>
}
```

`[value]="item.description"` を使用すると、 `<input>` の値は現在のアイテムの `description` にバインドされます。
このバインディングにより、アイテムの `description` が `<input>` の値になります。
したがって、 `description` が `eat` の場合、 `description` はすでに `<input>` にあります。
このように、ユーザーがアイテムを編集するとき、 `<input>` の値はすでに `eat` です。

`<input>` のテンプレート変数 `#editedItem` は、Angular がユーザーがこの `<input>` に入力したものをすべて `editedItem` という変数に格納することを意味します。
`keyup` イベントは `saveItem()` メソッドを呼び出し、ユーザーが **Save** をクリックする代わりに Enter キーを押すことを選択した場合、 `editedItem` 値を渡します。

ユーザーが **Cancel** ボタンをクリックすると、 `editable` が `false` に切り替わり、DOM から編集用の入力とボタンが削除されます。
`editable` が `false` の場合、Angular は **Edit** と **Delete** ボタンを使用して `<div>` を DOM に戻します。

**Save** ボタンをクリックすると、 `saveItem()` メソッドが呼び出されます。
`saveItem()` メソッドは `#editedItem` `<input>` から値を取得し、アイテムの `description` を `editedItem.value` 文字列に変更します。

## AppComponent の準備

次のセクションでは、 `AppComponent` と `ItemComponent` の通信に依存するコードを追加します。
`app.component.ts` ファイルの先頭付近に以下の行を追加し、`Item` をインポートします。

```ts
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";
```

次に、同じファイルのクラスに次の内容を追加することで、 AppComponent を構成可能な状態にします。

```js
remove(item: Item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}
```

`remove()` メソッドは JavaScript の `Array.splice()` メソッドを使用して、関連するアイテムの `indexOf` にある 1 つのアイテムを削除します。
平易な英語では、これは `splice()` メソッドが配列からアイテムを削除することを意味します。
`splice()` メソッドの詳細については、[`Array.prototype.splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) のドキュメントを参照してください。

## ItemComponent にロジックを追加

`ItemComponent` UI を使用するには、関数やデータの出入り方法などのロジックをコンポーネントに追加する必要があります。
`item.component.ts` で、JavaScript インポートを次のように編集します。

```js
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";
```

`Input`, `Output`, および `EventEmitter` を追加すると、 `ItemComponent` が `AppComponent` とデータを共有できるようになります。
`Item` をインポートすることにより、 `ItemComponent` は `item` が何であるかを理解することができます。
`@Component` を更新して [`CommonModule`](https://angular.dev/api/common/CommonModule) を `app/item/item.component.ts` で使用するように更新すると、 `@if` ブロックを使用することができます。

```js
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
```

`item.component.ts` 内で、生成された `ItemComponent` クラスを次のように置き換えます。

```js
export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;

    this.editable = false;
    this.item.description = description;
  }
}
```

`editable` プロパティは、ユーザーがアイテムを編集できるテンプレートのセクションを切り替えるのに役立ちます。
`editable` は、 `@if` 文 `@if(editable)` と同じ HTML のプロパティです。
テンプレートでプロパティを使用する場合は、クラスでも宣言する必要があります。

`@Input()`, `@Output()`, 及び `EventEmitter` は、2 つのコンポーネント間の通信を容易にします。
`@Input()` は、データがコンポーネントに入るための出入り口として機能し、 `@Output()` は、データがコンポーネントから出て行くための出入り口として機能します。
`@Output()` は `EventEmitter` 型である必要があります。これにより、別のコンポーネントと共有する準備ができているデータがあるときに、コンポーネントがイベントを発生させることができます。

> [!NOTE]
> クラスのプロパティ宣言内の `!` は、[確定代入アサーション](https://www.typescriptlang.org/docs/handbook/2/classes.html#--strictpropertyinitialization)と呼ばれます。この演算子は、コンストラクターの定義から TypeScript が判断できない場合でも、 `item` フィールドが常に初期化され、 `undefined` ではないことを TypeScript に伝えます。この演算子をコードに記載しておらず、 TypeScript のコンパイル設定が厳格な場合、アプリのコンパイルに失敗します。

`@Input()` を使用して、プロパティの値がコンポーネントの外部から取得できることを指定します。
`@Output()` を `EventEmitter` と組み合わせて使用して、プロパティの値がコンポーネントを離れることができるように指定して、別のコンポーネントがそのデータを受け取れるようにします。

`saveItem()` メソッドは引数として `description` を取ります。
`description` は、リスト内のアイテムを編集するときにユーザーが HTML の `<input>` に入力するテキストです。
この `description` は、 `#editedItem` テンプレート変数を持つ `<input>` からの同じ文字列です。

ユーザーが値を入力せずに **Save** をクリックした場合、 `saveItem()` は何も返さず、 `description` を更新しません。
この `if` 文がない場合、ユーザーは HTML の `<input>` に何も入力せずに **Save** をクリックすると、 `description` は空の文字列になります。

ユーザーがテキストを入力して save をクリックすると、 `saveItem()` は `editable` を false に設定します。これにより、テンプレートの `@if` が編集機能を削除し、再び **Edit** と **Delete** ボタンをレンダリングします。

この時点でアプリケーションをコンパイルする必要がありますが、ブラウザーで新機能を確認できるように、 `AppComponent` で `ItemComponent` を使用する必要があります。

## AppComponent で ItemComponent を使用

親子関係のコンテキストで 1 つのコンポーネントを別のコンポーネントに含めると、必要な場所でコンポーネントを柔軟に使用できます。

`AppComponent` は、他のコンポーネントを含めることができるアプリケーションのシェルとして機能します。

`AppComponent` で `ItemComponent` を使用するには、 `AppComponent` テンプレートに `ItemComponent` セレクターを配置します。
Angular は、 `@Component()` デコレーターのメタデータ内にあるコンポーネントのセレクターを指定します。
この例では、セレクターは `app-item` です。

```js
@Component({
  selector: 'app-item',
  // ...
```

`AppComponent` 内で `ItemComponent` セレクターを使用するには、コンポーネントクラスに定義したセレクターに対応する要素 `<app-item>` を `app.component.html` に追加します。
`app.component.html` の現在の順序付けされていないリストを次の更新されたバージョンに置き換えます。

```html
<h2>
  \{{items.length}}
  <span> @if (items.length === 1) { item } @else { items } </span>
</h2>

<ul>
  @for (item of items; track item.description) {
  <li>
    <app-item (remove)="remove(item)" [item]="item"></app-item>
  </li>
  }
</ul>
```

`app.component.ts` の `imports` を変更し、 `ItemComponent` と `CommonModule` を含めます。

```js
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, ItemComponent],
})
```

`<h2>` の中の二重中括弧構文 `\{{}}` は、 `items` 配列の長さを取得し、数値を表示します。

`<h2>` の `<span>` は `@if` と `else` を使用して、 `<h2>` が "item" と "items" のどちらを表示するかを決定します。
リストに item が 1 つしかない場合は、 "item" を含む `<span>` が表示されます。
それ以外の場合、 `items` 配列の長さが `1` 以外の場合、 `<span>` は "items" と表示します。

`@for` - Angular の制御フローブロックを、 `items` 配列のすべてのアイテムを反復処理するために使用します。
Angular の `@for` は`@if` のように、より少ないコードを記述しながら DOM の構造を変更するのに役立つもう 1 つのディレクティブです。
それぞれの `item` に対して、 Angular は `<li>` とその中のすべてを繰り返します。これには `<app-item>` が含まれます。
これは、配列内のアイテムごとに、 Angular が `<app-item>` の別のインスタンスを作成することを意味します。
配列内の任意の数のアイテムに対して、 Angular はその数の `<li>` 要素を作成します。

いくつか例を挙げると、 `<div>`, `<span>`, や `<p>`, などの他の要素にも `@for` を使用できます。

`AppComponent` には、アイテムを削除するための `remove()` メソッドがあります。これは、 `ItemComponent` の `remove` プロパティにバインドされています。
角括弧内の `item` プロパティ `[]` は、 `AppComponent` と `ItemComponent` の間の `item` の値をバインドします。

これで、リストからアイテムを編集および削除できるようになります。
アイテムを追加または削除すると、アイテムの数も変更されます。
リストをより使いやすくするには、 `ItemComponent` にいくつかのスタイルを追加します。

## ItemComponent にスタイルを追加

コンポーネントのスタイルシートを使用して、そのコンポーネントに固有のスタイルを追加できます。
次の CSS は、基本的なスタイル、ボタンのフレックスボックス、およびカスタムチェックボックスを追加します。

次のスタイルを `item.component.css` に貼り付けます。

```css
.item {
  padding: 0.5rem 0 0.75rem 0;
  text-align: left;
  font-size: 1.2rem;
}

.btn-wrapper {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.btn {
  /* menu buttons flexbox styles */
  flex-basis: 49%;
}

.btn-save {
  background-color: #000;
  color: #fff;
  border-color: #000;
}

.btn-save:hover {
  background-color: #444242;
}

.btn-save:focus {
  background-color: #fff;
  color: #000;
}

.checkbox-wrapper {
  margin: 0.5rem 0;
}

.btn-warn {
  background-color: #b90000;
  color: #fff;
  border-color: #9a0000;
}

.btn-warn:hover {
  background-color: #9a0000;
}

.btn-warn:active {
  background-color: #e30000;
  border-color: #000;
}

.sm-text-input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #555;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
  margin: 1rem 0;
}

/* Custom checkboxes
Adapted from https://css-tricks.com/the-checkbox-hack/#custom-designed-radio-buttons-and-checkboxes */

/* Base for label styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25em;
  height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "\2713\0020";
  position: absolute;
  top: 0.15em;
  left: 0.22em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #0d8dee;
  transition: all 0.2s;
  font-family: "Lucida Sans Unicode", "Arial Unicode MS", Arial;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}

/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted blue;
}
```

## まとめ

これで、アイテムを追加、編集、および削除できるスタイル付きの Angular の ToDo リストアプリケーションができました。
次のステップは、特定の条件を満たすアイテムを確認できるようにフィルタリングを追加することです。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_styling","Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
