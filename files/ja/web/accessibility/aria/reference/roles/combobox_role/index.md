---
title: "ARIA: combobox ロール"
short-title: combobox
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: d86426e69aaed1dbf19f09d92d78d1d320737733
---

`combobox` ロールは、要素を `input` または `button` として識別し、これらが `listbox` や `grid` など、ユーザーが値を設定するのに役立つ動的にポップアップ表示される他の要素を制御するものです。コンボボックスは編集可能（テキスト入力を許可）または選択のみ（ポップアップからの選択のみを許可）のどちらかです。

## 解説

`combobox` は、名前付き入力フィールドと、その入力フィールドに使用可能な値を提供するポップアップを組み合わせた複合ウィジェットです。このウィジェットの目的は、ユーザーが完全な値を入力しなくても値を選択できるようにし、対応している値が制限されている場合は、無効または非対応の値をユーザーが入力することを防ぐことで、ユーザー体験を向上させることです。

`combobox` ロールは、編集可能なコンボボックスの場合は input 要素に、選択のみのコンボボックスの場合は button 要素に設定できます。この要素は、ユーザーが値を設定するのに役立つ動的にポップアップ表示されるリストボックスやグリッドなどの他の要素を制御します。

`combobox` ロールを持つ要素は、編集可能な単一行テキストフィールド（{{HTMLElement('datalist')}} を持つものと同様の {{HTMLElement('input')}} 要素を使用）または選択のみの要素（直接テキスト入力を許可せず、現在の値のみを表示する `button` 要素を使用）のどちらかです。

WAI-ARIA のコンボボックスに必要な属性は [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) だけです。ただし、実装に応じて、通常は他のいくつかの属性が必要です：[`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)、[`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)、[`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)、[`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)。

通常、コンボボックスの初期状態は折りたたまれており、`aria-expanded="false"` が設定されています。折りたたまれた状態では、コンボボックス要素と、オプションでポップアップを呼び出すための兄弟要素であるボタンのみが表示されます。折りたたまれているときは、[`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) を `false` の値に設定することが必須です。これは、ウィジェットが拡張可能であることを支援技術に示すためです。

コンボボックスは、現在の値を示すコンボボックス要素と、それに紐づくポップアップ要素の両方が表示されている場合に、展開状態になります。展開時には、`aria-expanded="true"` を設定する必要があります。

`combobox` に紐づくポップアップ要素は、[`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)、[`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)、[`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、または [`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) 要素のいずれかです。

コンボボックスには `listbox` の暗黙的な [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) 値があるため、ポップアップが `listbox` の場合、この属性を含めることは任意です。コンボボックスのポップアップ要素が `tree`、`grid`、`dialog`（`listbox` 以外）のいずれかの場合、`aria-haspopup` 属性が必要です。`aria-haspopup` の値は、`tree`、`grid`、`dialog`、または `listbox` ロールのいずれかでなければなりません。このプロパティについて、`true` は `menu` を意味するので、値がブール値ではなく、ポップアップのロールに対応することを確認してください。

コンボボックスのポップアップが表示される際は、コンボボックス要素の [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 属性が、ポップアップの `listbox`、`tree`、`grid`、`dialog` 要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) に設定されていることを確認してください。これは、`combobox` ロールを持つ要素と、それが制御するポップアップとの関係を示す方法です。（注：古い ARIA 仕様では、これは `aria-controls` ではなく `aria-owns` でした。そのため、古いコンボボックスの実装では `aria-owns` が見られる場合があります。コード内の `aria-owns` は `aria-controls` に更新する必要があります！）

コンボボックスの UI に、ポインターやタッチイベントを介してポップアップの表示を制御できるアイコンなどの可視コントロールが含まれている場合、そのコントロールは {{HTMLElement('button')}}、type が `button` の {{HTMLElement('input')}}、または [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) が `-1` の [`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) ロール要素であるべきです。これにより、ボタンはフォーカス可能になりますが、キーボードタブシーケンスには含まれません。これは、role が `combobox` の要素の子孫であってはなりません。

キーボードアクセシブルにするには、`combobox` 要素と、ポップアップの `listbox`、`tree`、`grid`、`dialog` に含まれる要素との間でフォーカスを移動するためのキーボードサポートをプログラムする必要があります。一般的な慣例の一つは、<kbd>Down Arrow</kbd> が input からポップアップ要素の最初のフォーカス可能な子孫にフォーカスを移動することです。

[`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) プロパティは、DOM フォーカスがコンボボックスに残る実装において、コンボボックスポップアップの現在アクティブな要素（例：ポップアップ `listbox` 内の `option`）を識別するために使用できます。ポップアップが呼び出された時に DOM フォーカスがコンボボックスに残らず、代わりに DOM フォーカスがダイアログなどのポップアップ内に移動する場合、`aria-activedescendant` は必要ない場合があります。

コンボボックスが編集可能な {{HTMLElement('input')}} 要素として実装されている場合、コンボボックスの値は input の値です。`button` 要素で実装された選択のみのコンボボックスの場合、値はポップアップ内の選択されたオプションから取得されます。

[`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) 属性は、テキスト入力をサポートする編集可能なコンボボックスにのみ適用されます。これらのコンボボックスについては、提供される動作に対応する値（`inline`、`list`、`both`）に属性を設定します。この属性は、テキストを入力すると、ユーザーの意図する値の 1 つ以上の予測が表示され、これらの予測がどのように提示されるかを指定することを示します。`button` 要素を使用する選択のみのコンボボックスでは、テキスト入力が不可能であるため、`aria-autocomplete` は使用すべきではありません。

すべての `combobox` にはアクセシブル名が必要で、これは 3 つの方法のいずれかで提供できます：

1. {{HTMLElement('input')}} 要素の場合、関連付けられた {{HTMLElement('label')}} を使用する。
2. UI に可視ラベルが存在する場合、ラベル要素の `id` を参照する [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用する。
3. 可視ラベルが存在しない場合、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用する。

> [!NOTE]
> これらの方法の 1 つのみを使用してください。組み合わせないでください。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : 必須。コンボボックスが開いている (`true`) か閉じている (`false`) かを識別します。
- [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : 暗黙的。省略された場合、デフォルトは `listbox` です。`tree`、`grid`、または `dialog` もサポートします。コンボボックスにポップアップがあることを識別し、そのタイプを示します。

### キーボード操作

- <kbd>Down Arrow</kbd>
  - : 閉じている場合はポップアップを開き、次のオプションにフォーカスを移動します。何も選択されていない場合は最初のオプションに移動します。

- <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> （任意）
  - : ポップアップが利用可能だが表示されていない場合、フォーカスを移動せずにポップアップを表示します。

- <kbd>Up Arrow</kbd>
  - : 閉じている場合はポップアップを開き、前のオプションにフォーカスを移動します。何も選択されていない場合は最後のオプションに移動します。

- <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> （任意）
  - : ポップアップにフォーカスがある場合、コンボボックスにフォーカスを戻します。そうでなければポップアップを閉じます。

- <kbd>Escape</kbd>
  - : 開いている場合はポップアップを閉じます。ポップアップが既に閉じている場合、編集可能なコンボボックスの値をクリアします。

#### 編集可能なコンボボックスのキーボード操作

- <kbd>Enter</kbd>
  - : ポップアップで自動補完候補が選択されている場合、コンボボックスの値を更新し、入力カーソルを末尾に移動することで候補を受け入れます。
    デフォルトアクション（例：メッセージングアプリケーションで、受け入れた値を受信者リストに追加する）をトリガーする場合もあります。

- <kbd>Tab</kbd>
  - : 現在の値を受け入れ、次のフォーカス可能要素にフォーカスを移動します。

#### 選択のみのコンボボックスのキーボード操作

- <kbd>Enter</kbd> または <kbd>Space</kbd>
  - : ポップアップが閉じている場合、ポップアップを開きます。ポップアップが開いていてオプションが選択されている場合、選択されたオプションをコンボボックスの値として受け入れ、ポップアップを閉じます。

- <kbd>Tab</kbd>
  - : 現在の選択を受け入れ、次のフォーカス可能要素にフォーカスを移動します。

- <kbd>Home</kbd> または <kbd>End</kbd>
  - : ポップアップが開いている場合、それぞれ最初または最後のオプションにフォーカスを移動します。

## 例

```html
<label for="jokes">好きなジョークの種類を選んでください</label>
<div class="combo-wrap">
  <input
    type="text"
    id="jokes"
    role="combobox"
    aria-controls="joketypes"
    aria-autocomplete="list"
    aria-expanded="false"
    data-active-option="item1"
    aria-activedescendant="" />
  <span aria-hidden="true" data-trigger="multiselect"></span>
  <ul id="joketypes" role="listbox" aria-label="Jokes">
    <li class="active" role="option" id="item1">Puns</li>
    <li class="option" role="option" id="item2">Riddles</li>
    <li class="option" role="option" id="item3">Observations</li>
    <li class="option" role="option" id="item4">Knock-knock</li>
    <li class="option" role="option" id="item5">One liners</li>
  </ul>
</div>
```

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement('label')}} 要素
- HTML {{HTMLElement('select')}} 要素
- HTML {{HTMLElement('option')}} 要素
- HTML {{HTMLElement('input')}} 要素
- [ARIA: `listbox` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [ARIA: `option` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: `list` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listitem` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Best Practices – Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Accessibleコンボボックスmodule](https://dequelabs.github.io/combobo/demo/) examples by Deque
