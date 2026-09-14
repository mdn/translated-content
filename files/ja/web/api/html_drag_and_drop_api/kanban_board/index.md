---
title: ドラッグ＆ドロップ付きのカンバンボード
slug: Web/API/HTML_Drag_and_Drop_API/Kanban_board
l10n:
  sourceCommit: 8432c4ca716350c34d197c130e6fe93de5c8250c
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

[ランディングページ](/ja/docs/Web/API/HTML_Drag_and_Drop_API#concepts_and_usage)で述べたように、ドラッグ＆ドロップ API は同時に、ページ内での要素のドラッグ、ページからのデータのドラッグ、ページへのデータのドラッグという 3 つの用途をモデル化します。このチュートリアルでは最初の用途、つまりページ内での要素のドラッグを実演します。[GitHub プロジェクト](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)や [Trello](https://trello.com/) が提供する機能に似たカンバンアプリケーションを実装します。

## 基本的なページレイアウト

ここではドラッグや並べ替えの実演が主目的であるため、タスクの追加や削除といった実際のカンバンボードの動的な側面は省略します。代わりに、すべての列とタスクは HTML にハードコードされます。

```html-nolint live-sample___kanban
<div class="container">
  <div class="task-column">
    <h2>やること</h2>
    <ul class="tasks">
      <li class="task" draggable="true">ソウルストーンの場所を突き止める</li>
    </ul>
  </div>
  <div class="task-column">
    <h2>進行中</h2>
    <ul class="tasks">
      <li class="task" draggable="true">Dr. Strange からタイムストーンを集める</li>
      <li class="task" draggable="true">ビジョンからマインドストーンを集める</li>
      <li class="task" draggable="true">
        コレクターからリアリティストーンを集める
      </li>
    </ul>
  </div>
  <div class="task-column">
    <h2>完了</h2>
    <ul class="tasks">
      <li class="task" draggable="true">ザンダーからパワーストーンを集める</li>
      <li class="task" draggable="true">アスガルドからスペースストーンを集める</li>
    </ul>
  </div>
</div>
```

```css live-sample___kanban
body {
  font-family: "Arial", sans-serif;
}

.container {
  display: flex;
  gap: 0.5rem;
}

.task-column {
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  flex: 1;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.task-column h2 {
  text-align: center;
}

.task {
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  padding: 8px;
  cursor: grab;
}

.task:active {
  cursor: grabbing;
}

@media (width < 600px) {
  .container {
    flex-direction: column;
  }
}
```

これはアプリケーションの基本構造とスタイルを定義します。タスクはそれぞれ[ドラッグ可能](/ja/docs/Web/API/HTML_Drag_and_Drop_API#draggable_items)に設定されていますが、現時点ではドラッグしても何も起こりません。

## ドロップターゲットの宣言

タスク列を、ドラッグされたタスクの有効な[ドロップターゲット](/ja/docs/Web/API/HTML_Drag_and_Drop_API#ドロップターゲット)にしたいと考えています。基本として、 {{domxref("HTMLElement/dragover_event", "dragover")}} を監視し、キャンセルする必要があります。ただし、注意が必要なのは、ドラッグ対象がタスクである場合にのみイベントをキャンセルすることです。他のものをドロップしようとしている場合、その列はドロップ先として機能すべきではありません。

まず、すべての列をグローバル変数に保存します。

```js live-sample___kanban
const columns = document.querySelectorAll(".task-column");
```

次に、各列に対して `dragover` イベントハンドラーを宣言します。このイベントハンドラーは後で拡張されます。

```js
columns.forEach((column) => {
  column.addEventListener("dragover", (event) => {
    // 後で設定するカスタム型をテストする
    if (event.dataTransfer.types.includes("task")) {
      event.preventDefault();
    }
  });
});
```

タスクを列の上にドラッグすると、デフォルトの操作がコピーであるため、ドロップ時にタスクがコピーされることを示すプラス記号などの[カーソル効果](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドロップ効果)が表示される場合があります。後ほど、タスクが実際に移動されるようになるため、このインジケーターを変更します。

## 要素の移動

次に中核となる機能、つまりタスクを列間で移動する機能の実装を行います。この機能は、2 つのステップで構成されます。まずドラッグされた要素を目的の列に追加し、次に元の列から削除します。

ドラッグされた要素とソース列は次のように追跡します。 `dragstart` イベント時に、ドラッグされたタスクに `id` を付与します。その後 `drop` イベント時に、この IDを 使用してタスクを識別し、ソース列から削除します。最後に `dragend` イベント時に ID を削除することを忘れないようにします。これにより、後続のドラッグで重複 ID が生成されるのを防ぎます。

```js live-sample___kanban
const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("dragstart", (event) => {
    task.id = "dragged-task";
    event.dataTransfer.effectAllowed = "move";
    // タスクのドラッグを識別するカスタム型
    event.dataTransfer.setData("task", "");
  });

  task.addEventListener("dragend", (event) => {
    task.removeAttribute("id");
  });
});
```

他の方法としては、各アイテムに一意の ID を割り当て、その ID を [`dataTransfer`](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store) 内に保存する方法や、DOM 要素への参照をグローバル変数に保存する方法があります。これらの手法はすべて、おおむね同じ効果をもたらします。

タスクは常に移動されるべきであり、コピーやリンクされることは想定されていないため、 {{domxref("DataTransfer.effectAllowed")}} プロパティを `"move"` に設定し、許可される効果を移動のみに限定します。この変更により、カーソル効果が更新され、移動操作を示すようになります。さらに、先に示したようにドラッグされたタスクを識別するために使用される `task` 型の `dataTransfer` 項目を設定します。

[ドロップ効果](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects)で述べたように、`effectAllowed` はドラッグ可能な要素の `dragstart` ハンドラーでのみ設定できます。

ここで、ターゲット列の {{domxref("HTMLElement/drop_event", "drop")}} ハンドラー内で実際に移動アクションをトリガーできます。ドラッグされたタスクは ID で特定し、{{domxref("Element.remove()")}} で DOM ツリーから削除した後、ターゲット列に再挿入します。タスクのドロップのみを許可しているため、`draggedTask` が確実に存在することを確信して処理を進められます。

```js
columns.forEach((column) => {
  column.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedTask = document.getElementById("dragged-task");
    draggedTask.remove();
    column.children[1].appendChild(draggedTask);
  });
});
```

この時点で、中核となる UX は既に実装されており、タスクを列間でドラッグできます。

## 特定の位置への挿入

現在、ドロップされたタスクは、ドロップ位置に関係なく常に列の末尾に挿入されます。今回、ドロップロジックを改善し、代わりにドロップ位置に挿入されるようにしました。しかし、ドロップ位置をターゲット列内の挿入インデックスにどのように対応付けるべきでしょうか？これは判断に委ねられますが、次の経験則を使用します（自分で選択しても構いません）。カーソルがホバーしている項目のインデックスに挿入されます。カーソルが最初の項目の上にある場合、または最後の項目の下にある場合、それぞれ列の先頭または末尾に挿入されます。カーソルが 2 つの項目の間にある場合、カーソルの下にある項目のインデックスに挿入されます。

ドロップ位置を明確にするため、ドロップ位置に[視覚的なインジケーター](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#独自のドロップフィードバック)を追加します。これは、ドロップ位置にプレースホルダー要素を挿入することで実現でき、ドロップが発生するとドラッグされたタスクに置き換えられます。まず、プレースホルダー用の作成関数を定義します：

```css live-sample___kanban
.placeholder {
  border: 1px solid #cccccc;
  border-radius: 3px;
}
```

```js live-sample___kanban
function makePlaceholder(draggedTask) {
  const placeholder = document.createElement("li");
  placeholder.classList.add("placeholder");
  placeholder.style.height = `${draggedTask.offsetHeight}px`;
  return placeholder;
}
```

このインジケーターは {{domxref("HTMLElement/dragover_event", "dragover")}} 上で移動されます。これは最も複雑な処理であるため、別関数に抽出しました。`dragover` イベントの以前のコードはこの関数に移行されています。まず必要な要素を取得し、ドラッグがタスクでない場合は安全に中止します。

```js live-sample___kanban
function movePlaceholder(event) {
  if (!event.dataTransfer.types.includes("task")) {
    return;
  }
  event.preventDefault();
  // Must exist because the ID is added for all drag events with a "task" data entry
  const draggedTask = document.getElementById("dragged-task");
  const column = event.currentTarget;
  const tasks = column.children[1];
  const existingPlaceholder = column.querySelector(".placeholder");
```

プレースホルダーが既に存在し、カーソルがまだその内部にある場合、何も変更する必要はありません。この時点で既存のプレースホルダーを削除しないことに注意してください。そうするとページのレイアウトが変更され、ちらつきが発生する可能性があるためです。新しい位置を完全に決定してから初めてレイアウトを変更します。

```js live-sample___kanban
if (existingPlaceholder) {
  const placeholderRect = existingPlaceholder.getBoundingClientRect();
  if (
    placeholderRect.top <= event.clientY &&
    placeholderRect.bottom >= event.clientY
  ) {
    return;
  }
}
```

それ以外の場合は、カーソルの真上に完全に位置していない最初のタスクを検索します。このタスクは、カーソルが全てのアイテムの上にある場合は最初のタスク、カーソルを含むタスク、またはカーソルが 2 つのアイテムの間に位置する場合のカーソルの下のタスクのいずれかになります。プレースホルダーはこのタスクの位置に配置すべきです。なお比較対象は Y 座標のみです。カーソルが左端または右端の余白にある場合でも、タスク上に位置しているとみなされます。適切な挿入位置を特定した後、以下の事項を決定します。

- 挿入位置が既にプレースホルダーである場合、何も変更する必要はありません。ただし、これは上記の条件と完全に同一ではありません。カーソルがプレースホルダーの直上で、2 つの項目の間に位置している場合にも真となる可能性があります。
- ドロップ時にドラッグされたアイテムが開始位置に正確に配置される場合、プレースホルダーを一切表示すべきではありません。これはプレースホルダーがドラッグされたタスクの直隣に配置される場合に発生するため、`draggedTask` の直前に挿入するか (`task === draggedTask`)、または直後に挿入するか (`task.previousElementSibling === draggedTask`) を確認します。この場合でも、既存のプレースホルダーが存在すれば、それを削除します。
- 最後に、決定した位置にプレースホルダーを挿入します。

```js live-sample___kanban
for (const task of tasks.children) {
  if (task.getBoundingClientRect().bottom >= event.clientY) {
    if (task === existingPlaceholder) return;
    existingPlaceholder?.remove();
    if (task === draggedTask || task.previousElementSibling === draggedTask)
      return;
    tasks.insertBefore(
      existingPlaceholder ?? makePlaceholder(draggedTask),
      task,
    );
    return;
  }
}
```

上記のループで適切なタスクが見つからなかった場合、既存のタスクがすべてカーソルの位置より上にあることを意味し、プレースホルダーを末尾に挿入する必要があります。ただし、ドラッグされたタスクが既に最後のアイテムである場合は、プレースホルダーを追加しません。

```js live-sample___kanban
  existingPlaceholder?.remove();
  if (tasks.lastElementChild === draggedTask) return;
  tasks.append(existingPlaceholder ?? makePlaceholder(draggedTask));
}
```

最後に、{{domxref("HTMLElement/dragleave_event", "dragleave")}} または {{domxref("HTMLElement/drop_event", "drop")}} でプレースホルダーが削除されます。`dragleave` は、カーソルが列を離れてその子要素に入る際に発生することに注意してください。カーソルが列から完全に離れた場合にのみプレースホルダーを削除したいので、移動先の要素である {{domxref("MouseEvent/relatedTarget", "relatedTarget")}} が列の子要素であるかどうかを確認する必要があります。

`drop` ハンドラーは、[要素の移動](#要素の移動)で実装した内容を修正します。タスクを末尾に追加する代わりに、中間に挿入する必要があり、そのためにプレースホルダーの位置を活用します。

```js live-sample___kanban
columns.forEach((column) => {
  column.addEventListener("dragover", movePlaceholder);
  column.addEventListener("dragleave", (event) => {
    // If we are moving into a child element,
    // we aren't actually leaving the column
    if (column.contains(event.relatedTarget)) return;
    const placeholder = column.querySelector(".placeholder");
    placeholder?.remove();
  });
  column.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedTask = document.getElementById("dragged-task");
    const placeholder = column.querySelector(".placeholder");
    if (!placeholder) return;
    draggedTask.remove();
    column.children[1].insertBefore(draggedTask, placeholder);
    placeholder.remove();
  });
});
```

## 元のタスクのグレーアウト

ドラッグ中に、元のタスクが元の位置にあるように見える場合があります。「グレーアウト」効果を適用すると、タスクが移動中であることを視覚的に示すことができます。 DOM から単純に削除する方法も一般的ですが、これでは設定済みの他の DOM 測定ロジックに影響を与える可能性があります。そのため、CSS を使用して目的の効果を実現できます。ドラッグ対象のタスクには既に安定した ID が割り当てられているため、この手法は比較的容易です。

```css live-sample___kanban
#dragged-task {
  opacity: 0.2;
}
```

## 結果

{{EmbedLiveSample("kanban", "", 400)}}

## 関連情報

- [HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
