---
title: "ARIA: listbox ロール"
short-title: listbox
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

`listbox` ロールは、1 つまたは複数の静的なアイテムをユーザーが選択できるリストに使用します。HTML の {{HTMLElement('select')}} 要素とは異なり、画像を含むことができます。

## 解説

`listbox` ロールは、HTML の {{HTMLElement("select")}} 要素と同様に、ユーザーが 1 つまたは複数の静的なアイテムを選択できるリストを生成する要素を識別するために使用されます。{{HTMLElement("select")}} とは異なり、リストボックスには画像を含めることができます。リストボックスには、ロールが [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) である子要素、またはロールが [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) であり、ロールが `option` の子要素を含む子要素を含むことができます。

HTML の選択要素や、1 アイテムしか選択できない場合はラジオボタンのグループ、複数アイテムを選択できる場合はチェックボックスのグループを使用することを強くお勧めします。 なぜなら、全ての子孫に対するフォーカスを管理するためには、キーボードでの操作がたくさん必要であり、ネイティブの HTML 要素はこの機能をただで提供してくれるからです。

`listbox` ロールを持つ要素は、暗黙的な [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) の値として `vertical`（垂直）を持ちます。

<kbd>Tab</kbd> キーでリストに移動すると、他に選択されているアイテムがなければ、リストの最初のアイテムが選択されます。<kbd>↑</kbd>/<kbd>↓</kbd> でリスト内を移動でき、<kbd>Shift</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd> を押すと、移動しながら選択範囲を拡大できます。1 文字以上の文字を入力すると、リストアイテム間を移動できます（その文字と同じ文字で始まるそれぞれのアイテム内を巡回し、複数の文字を入力するとそれ全体で始まる最初のアイテムへ移動します）。現在のアイテムに関連付けられたコンテキストメニューがある場合、<kbd>Shift</kbd> + <kbd>F10</kbd> を押すとそのメニューが表示されます。リストアイテムにチェックボックスがある場合、スペースキーを使用して[チェックボックス](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)のオン/オフを切り替えることができます。選択可能なリストアイテムについては、スペースキーで選択状態を切り替え、<kbd>Shift</kbd> + スペースキーで連続したアイテムを選択し、<kbd>Ctrl</kbd> + 矢印キーで選択せずに移動し、<kbd>Ctrl</kbd> + スペースキーで連続していないアイテムを選択できます。すべてのアイテムを選択するには、チェックボックスやリンクなどの方法を使用することをお勧めします。また、この操作のショートカットキーとして <kbd>Ctrl</kbd> + <kbd>A</kbd> を使用することもできます。

リストボックスロールが要素に追加されるか、そのような要素が可視になると、スクリーンリーダーは、リストボックスがフォーカスを得たときにリストボックスのラベルとロールをアナウンスします。 選択肢やアイテムがリスト内でフォーカスされると、次にそれがアナウンスされ、スクリーンリーダーがサポートしていれば、続いてリストでのアイテムの位置が示されます。 リスト内でフォーカスが移動すると、スクリーンリーダーは関連するアイテムをアナウンスします。

### 関連する ARIA のロール、ステート、プロパティ

#### 関連するロール

- [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
  - : 1 つ以上のネストされた選択肢が必要です。 選択された全ての選択肢では、[`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) が `true` に設定されています。 選択されていない全ての選択肢では、[`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) が `false` に設定されています。 選択肢が選択可能でない場合は、[`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) を省略します。
- [`list`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : リストアイテム (`listitem`) 要素を含むセクション。

#### ステートとプロパティ

- [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : リストボックス内で現在アクティブな要素の `id` 文字列を保持します。 それが選択肢要素である場合、その選択肢の [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) の値が `true` であるかどうかに関係なく、それは最後にインタラクトされた選択肢の `id` になります。 複数選択可能なリストボックス内であっても、1 つの `id` の値のみを取ります。 `id` がリストボックスの DOM 子孫を参照していない場合、その `id` は [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) 属性の ID の中に含まれている必要があります。
- [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : これは、リストボックスの DOM 子要素ではない要素 IDs のスペース区切りのリストです。 ここにリストされている IDs は、他の要素の [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) 属性にもリストできません。
- [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : ユーザーが複数の選択肢を選択できる場合は、これを含めて `true` に設定します。 `true` に設定されている場合、選択可能な*全ての*選択肢には、[`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) 属性が含まれ、`true` または `false` に設定されているべきです。 選択可能*でない*選択肢は、[`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) 属性を持つ*べきではありません*。
    `false` または省略されている場合、いずれかの選択肢が選択されているならば、現在選択されている選択肢のみが [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) 属性を必要とし、`true` に設定されている必要があります。
- [`aria-required`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : 空でない文字列値を持つ選択肢を選択する必要があることを示す論理属性。

- [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : ユーザーは、選択肢が選択されているかいないかを変更することはできませんが、リストボックスはそれ以外の操作が可能です。

- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : リストボックスを識別する、人間が読むことができる文字列値。 可視のラベルがある場合は、代わりに [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用してそのラベルを参照するべきです。

- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : リストボックスを識別する、要素 ID のスペースで区切られたリストで、1 つ以上の可視の要素を識別します。 可視のラベルがない場合は、代わりに [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してラベルを含めるべきです。（注: 2 つの L が付いた "labelled" は、アクセシビリティ API の規約に基づく正しいスペルです。）

- [`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : リストボックスのロールをより明確に識別する、人間が読むことができる文字列値。 スクリーンリーダーは、ラベルを（ある場合は）読んだ後に、「リストボックス」と言う代わりに、この値をユーザーに読み上げることがよくあります。

### キーボード操作

- 単一選択リストボックスがフォーカスを受け取ったとき
  - リストボックスがフォーカスを受け取る前にどの選択肢も選択されていなかった場合、最初の選択肢がフォーカスを受け取ります。 任意で、最初の選択肢を自動選択することもできます。
  - リストボックスがフォーカスを受け取る前に選択肢が選択されていた場合、フォーカスは選択されている選択肢に設定されます。

- 複数選択リストボックスがフォーカスを受け取ったとき
  - リストボックスがフォーカスを受け取る前にどの選択肢も選択されていなかった場合、フォーカスは最初の選択肢に設定され、選択状態の自動変更は行われません。
  - リストボックスがフォーカスを受け取る前に 1 つ以上の選択肢が選択されていた場合、フォーカスはリストの中で最初に選択されている選択肢に設定されます。

- <kbd>↓</kbd>（下矢印）

  : 次の選択肢にフォーカスを移動します。 任意で、単一選択リストボックスでは、選択もフォーカスと共に移動することがあります。

- <kbd>↑</kbd>（↑矢印）

  : 前の選択肢にフォーカスを移動します。 任意で、単一選択リストボックスでは、選択もフォーカスと共に移動することがあります。

- <kbd>Home</kbd>

  （任意）: 最初の選択肢にフォーカスを移動します。 任意で、単一選択リストボックスでは、選択もフォーカスと共に移動することがあります。 5 つ以上の選択肢があるリストでは、このキーに対応することを強くお勧めします。

- <kbd>End</kbd>

  （任意）: 最後の選択肢にフォーカスを移動します。 任意で、単一選択リストボックスでは、選択もフォーカスと共に移動することがあります。 5 つ以上の選択肢があるリストでは、このキーに対応することを強くお勧めします。

- 先行入力は、全てのリストボックス、特に 7 つ以上の選択肢があるリストボックスに対してお勧めします。
  - 文字を入力: フォーカスは、入力された文字で始まる名前を持つ次のアイテムに移動します。
  - 複数の文字をすばやく続けて入力: フォーカスは、入力された文字列で始まる名前を持つ次のアイテムに移動します。

- **複数選択**: 作成者は、複数選択に対応するために 2 つのインタラクションモデルのいずれかを実装することができます。 ユーザーがリスト内を移動しながら <kbd>Shift</kbd> や <kbd>Ctrl</kbd> などの修飾キーを押し続けなくてもよい推奨モデルや、選択状態が失われるのを避けるために移動中に修飾キーを押し続ける必要のある代替モデルがあります。
  - 推奨選択モデル — 修飾キーを押し続ける必要はありません。
    - <kbd>スペース</kbd>: フォーカスされた選択肢の選択状態を変更します。
    - <kbd>Shift + ↓</kbd>（任意）: 次の選択肢にフォーカスを移動し、選択状態をトグルします。
    - <kbd>Shift + ↑</kbd>（任意）: 前の選択肢にフォーカスを移動し、選択状態をトグルします。
    - <kbd>Shift + スペース</kbd>（任意）: 直前に選択したアイテムからフォーカスされたアイテムまでの連続したアイテムを選択します。
    - <kbd>Ctrl + Shift + Home</kbd>（任意）: フォーカスされた選択肢から最初の選択肢までの全ての選択肢を選択します。 任意で、フォーカスを最初の選択肢に移動します。
    - <kbd>Ctrl + Shift + End</kbd>（任意）: フォーカスされた選択肢から最後の選択肢までの全ての選択肢を選択します。 任意で、フォーカスを最後の選択肢に移動します。
    - <kbd>Ctrl + A</kbd>（任意）: リスト内の全ての選択肢を選択します。 任意で、全ての選択肢が選択されている場合は、全ての選択肢の選択を解除することもできます。

### 必要な JavaScript 機能

#### 単一選択リストボックスで選択肢を選択する

ユーザーが選択肢を選択すると、以下が起こる必要があります。

1. 前に選択した選択肢の選択を解除し、[`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) を `false` に設定するか、属性を完全に削除して、新しく選択を解除した選択肢の外観を選択されていないように変更します。
2. 新しく選択した選択肢を選択し、選択肢に `aria-selected="true"` を設定し、新しく選択した選択肢の外観を選択されているように変更します。
3. リストボックスの [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) の値を、新しく選択した選択肢の `id` に更新します。
4. 選択肢のぼかし、フォーカス、選択状態を視覚的に処理します。

#### 複数選択リストボックスで選択肢の状態をトグルする

ユーザーが選択肢をクリックしたり、選択肢にフォーカスしているときに<kbd>スペース</kbd>を押すなどして、選択肢の状態をトグルすると、以下が起こる必要があります。

1. 現在フォーカスされている選択肢の [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) ステート (状態) をトグル切り替えし、`aria-selected` の状態を `false` なら `true` に、`true` なら `false` に変更します。
2. 選択状態を反映するように選択肢の外観を変更します。
3. 選択肢を選択の解除へトグルしている場合でも、リストボックスの [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) の値を、ユーザーが直前に操作した選択肢の `id` に更新します。

> [!NOTE]
> ARIA の使用の第一のルールは、要素を転用して ARIA のロール、ステート、プロパティを追加することでアクセス可能にするのではなく、必要としている意味論と振る舞いがすでに組み込まれているネイティブな機能を使用できることです。 `<option>` 要素を子孫に持つ `<select>` 要素は、必要な全ての操作をネイティブに処理します。

## 例

### 例 1: aria-activedescendant を使用する単一選択リストボックス

次のスニペットでは、[`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) を使用して、リストボックスロールが HTML ソースコードに直接追加される方法を示しています。

```html
<p id="listbox1label" role="label">色を選択:</p>
<div
  role="listbox"
  tabindex="0"
  id="listbox1"
  aria-labelledby="listbox1label"
  aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">
    緑
  </div>
  <div role="option" id="listbox1-2">オレンジ</div>
  <div role="option" id="listbox1-3">赤</div>
  <div role="option" id="listbox1-4">青</div>
  <div role="option" id="listbox1-5">紫</div>
  <div role="option" id="listbox1-6">ペリウィンクル</div>
</div>
```

```js
const listbox = document.getElementById("listbox1");
listbox.addEventListener("click", listItemClick);
listbox.addEventListener("keydown", listItemKeyEvent);
listbox.addEventListener("keypress", listItemKeyEvent);
```

これは、ネイティブの HTML の {{htmlelement('select')}} 要素と {{htmlelement('label')}} 要素でより簡単に処理できます。

```html
<label for="listbox1">色を選択:</label>
<select id="listbox1">
  <option selected>緑</option>
  <option>オレンジ</option>
  <option>赤</option>
  <option>青</option>
  <option>紫</option>
  <option>ペリウィンクル</option>
</select>
```

### それ以外の例

- [スクロール可能なリストボックスの例](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/)<sup>(英語)</sup>: 1 より大きい `size` 属性を持つ HTML の `<select>` と同様な、スクロールしてより多くの選択肢を表示する単一選択リストボックス。
- [折りたたみ可能なドロップダウンリストボックスの例](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/)<sup>(英語)</sup>: 属性 `size="1"` を持つ HTML の `<select>` と同様な、アクティブにすると展開される単一選択の折りたたみ可能なリストボックス。
- [並べ替え可能な選択肢を持つリストボックスの例](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/)<sup>(英語)</sup>: 選択肢の追加、移動、および削除が可能なツールバーが付属する、単一選択リストボックスと複数選択リストボックスの両方の例。

## ベストプラクティス

- キーボードからアクセス可能にするために、作成者はこのロールの全ての子孫の[フォーカスを管理](https://www.w3.org/TR/wai-aria-1.1/#managingfocus)<sup>(英語)</sup>すべきです。
- リストがフォーカスされていない場合、作成者は選択に異なるスタイリングを使用することをお勧めします。 例えば、アクティブでない選択は、より明るい背景色で表示されることが多いです。
- リストボックスが別のウィジェットの一部でない場合は、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) プロパティを設定すべきです。
- 1 つ以上の項目が DOM 上でリストボックスの子でない場合、追加の `aria-*` プロパティを設定する必要があります（[ARIA のベストプラクティス](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)<sup>(英語)</sup>を参照）。
- リストボックスを[展開](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)する正当な理由がある場合は、[`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ロールの方がより適切かもしれません。

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement('select')}} 要素
- HTML {{HTMLElement('label')}} 要素
- HTML {{HTMLElement('option')}} 要素
- [ARIA: `combobox` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `option` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: `list` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listitem` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA のベストプラクティス — リストボックス](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)<sup>(英語)</sup>
