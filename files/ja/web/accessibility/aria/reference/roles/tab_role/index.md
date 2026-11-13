---
title: "ARIA: tab ロール"
short-title: tab
slug: Web/Accessibility/ARIA/Reference/Roles/tab_role
l10n:
  sourceCommit: 7ba6358a0ff684cc67c60b76d6d972722bbf0d18
---

ARIA の`tab` ロールは、`tablist` 内の操作可能な要素を示し、アクティブ化されると、関連する`tabpanel` を表示します。

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## 解説

タブ (`tab`) ロールを持つ要素は、タブパネル ([`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)) ロールに関連付けられた要素の可視性を制御します。 一般的なユーザーエクスペリエンスのパターンは、コンテンツ領域の上または横にある視覚的なタブのグループであり、別のタブを選択すると、コンテンツが変更され、選択したタブが他のタブよりも目立つようになります。

`tab` ロールを持つ要素は、タブリスト (`tablist`) ロールを持つ要素の子であるか、`tablist` の [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) プロパティの `id` 部分を持っている必要があります。 この組み合わせは、要素が関連要素のグループの一部であることを支援技術に識別させます。 一部の支援技術は、`tablist` 内の `tab` ロール要素の数を数えて、現在ターゲットにしている `tab` をユーザーに通知します。これらには、`tabpanel` ロールを持つ要素を識別する [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) プロパティが含まれているべきです。 `tabpanel` ロールを持つ要素にフォーカスがある場合、またはその子にフォーカスがある場合、`tab` ロールを持つ接続された要素が `tablist` 内のアクティブなタブであることを示します。

`tab` ロールを持つ要素を操作する場合、要素が選択されているかアクティブになっているときは、[`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) 属性を `true` に設定するべきです。 それ以外の場合は、`false` に設定するべきです。 `tab` が選択されているかアクティブになっている場合、その制御された`tabpanel` では、[`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 属性を `true` に設定し、`hidden` 属性 を `false` に設定するべきです。 それ以外の場合は、その逆になります。

### すべての子孫はプレゼンテーション型である

プラットフォームのアクセシビリティ API で表される場合、テキストのみが含まれているユーザーインターフェイス要素がいくつかあります。アクセシビリティ API は、`tab` 要素に含まれる意味的要素を表現する手段を持っていません。この制限に対処するため、ブラウザーは、`tab` 要素のすべての子孫要素に対して自動的に [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) ロールを適用します。これは、意味的な子要素に対応しないロールであるためです。

例えば、見出しが含まれている次の `tab` 要素を考えてみましょう。

```html
<div role="tab"><h3>タブのタイトル</h3></div>
```

`tab` の子要素はプレゼンテーション型であるため、次のコードと同等です。

```html
<div role="tab"><h3 role="presentation">タブのタイトル</h3></div>
```

支援技術のユーザーの視点位置からは、この見出しは存在しないものとなります。なぜなら、前回のコードスニペットは、[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree)において次の内容と同等であるためです。

```html
<div role="tab">タブのタイトル</div>
```

### 関連するロールと属性

- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : 論理値
- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : `tabpanel` ロールを持つ要素の `id`
- [id](/ja/docs/Web/HTML/Reference/Global_attributes/id)
  - : コンテンツ

### キーボード操作

| キー                              | アクション                                                                                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>Tab</kbd>                    | フォーカスが `tablist` の外にある場合、フォーカスをアクティブなタブに移動します。 フォーカスがアクティブなタブにある場合、フォーカスをキーボードフォーカスの順序の次の要素、理想的にはアクティブなタブに関連付けられた `tabpanel` に移動します。 |
| <kbd>→</kbd>                      | タブリストの次のタブにフォーカスし、任意でアクティブ化します。 現在のタブがタブリストの最後のタブである場合、最初のタブをアクティブ化します。                                                                                                    |
| <kbd>←</kbd>                      | タブリストの前のタブにフォーカスし、任意でアクティブ化します。 現在のタブがタブリストの最初のタブである場合、最後のタブをアクティブ化します。                                                                                                    |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | タブにフォーカスが当たると、そのタブがアクティブになり、関連付けられたパネルを表示します。                                                                                                                                                       |
| <kbd>Home</kbd>                   | タブ一覧の最初のタブにフォーカスを合わせ、オプションでそのタブをアクティブにします。                                                                                                                                                             |
| <kbd>End</kbd>                    | タブ一覧の最後のタブにフォーカスを合わせ、オプションでそのタブをアクティブにします。                                                                                                                                                             |
| <kbd>Delete</kbd>                 | 許可されている場合、現在選択されているタブをタブリストから削除します。                                                                                                                                                                           |

### 必要な JavaScript 機能

> [!NOTE]
> JavaScript を使用せずにタブのような機能を構築する方法はありますが、コンテンツを含むアクセス可能なタブに上記で必要とされるのと同じ機能のセットを提供する HTML と CSS のみの代替の組み合わせはありません。

## 例

この例では、`tab` ロールと `tablist`、および `tabpanel` を持つ要素を組み合わせて、インタラクティブなタブ付きコンテンツグループを作成しています。ここでは、コンテンツグループを `div` で囲み、`tablist` には支援技術向けにラベルを付ける `aria-label` を設定しています。それぞれの `tab` は、前述の属性を持つ `button` です。最初の `tab` には、`tabindex="0"` と `aria-selected="true"` の両方が適用されています。これら 2 つの属性は常にこのように連携させる必要があります。つまり、別のタブが選択されると、そのタブに `tabindex="0"` と `aria-selected="true"` が適用されることになります。選択されていないすべてのタブには、`aria-selected="false"` と `tabindex="-1"` を設定する必要があります。

すべての `tabpanel` 要素には、タブで移動できるように `tabindex="0"` が設定されており、現在アクティブなものを除くすべての要素には `hidden` 属性が設定されています。`tabpanel` が JavaScript によって表示されるようになると、`hidden` 属性は除去されます。

> [!NOTE]
> タブパネル内の最初の要素がフォーカス可能（リンクなど）である場合、タブパネルに `tabindex` を設定する必要はありません。これは、そのリンクにタブキーで移動することで、パネルのコンテンツの読み上げも同時に開始されるためです。ただし、セット内のパネルに、最初のコンテンツ要素がフォーカス不可能であるものが 1 つでも含まれている場合は、スクリーンリーダーのユーザーがパネルのコンテンツに一貫して移動できるよう、タブセット内のすべての `tabpanel` 要素をフォーカス可能にする必要があります。

```html
<div class="tabs">
  <div role="tablist" aria-label="オペレーティングシステムを選択してください">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      Windows
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      macOS
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Linux
    </button>
  </div>
  <div class="tab-panels">
    <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
      <p>Windows でこのアプリケーションを実行する方法</p>
    </div>
    <div
      id="panel-2"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-2"
      hidden>
      <p>macOS でこのアプリケーションを実行する方法</p>
    </div>
    <div
      id="panel-3"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-3"
      hidden>
      <p>Linux でこのアプリケーションを実行する方法</p>
    </div>
  </div>
</div>
```

ボタンのスタイル設定を調整し、`tab` 要素の {{cssxref("z-index")}} を変更することで、アクティブな要素については `tabpanel` とつながっているような錯覚を与え、アクティブでない要素についてはアクティブな `tabpanel` の後ろにあるような錯覚を与える、基本的なスタイル設定が適用されています。アクティブなタブとアクティブでないタブを、境界線を太くしたりサイズを大きくしたりするなどして、明確に判別する必要があります。

```css hidden
.tabs {
  padding: 1em;
}

[role="tablist"] {
  margin-bottom: -1px;
}

[role="tab"] {
  position: relative;
  z-index: 1;
  background: white;
  border-radius: 5px 5px 0 0;
  border: 1px solid grey;
  border-bottom: 0;
  padding: 0.2em;
}

[role="tab"][aria-selected="true"] {
  z-index: 3;
  border-top-width: 4px;
}

[role="tabpanel"] {
  position: relative;
  padding: 0 0.5em 0.5em 0.7em;
  border: 1px solid grey;
  border-radius: 0 0 5px 5px;
  background: white;
  z-index: 2;
}

[role="tabpanel"]:focus {
  border-color: #356fb3;
  outline: 1px solid #356fb3;
}
```

ユーザー操作は JavaScript によって処理されます。まず、`tablist`、その中のすべての `tab` 要素、`tabpanel` 要素のコンテナー、およびそのコンテナー内で存在するすべての `tabpanel` 要素への参照を取得します。これは HTML の構造に関するいくつかの前提に基づいているため、構造を変更する場合は、このコードも変更する必要があります。1 つのページに複数のタブ付きインターフェイスを持つ場合は、このコードを関数にまとめ、`tabsContainer`を引数として渡すことができます。

```js
const tabsContainer = document.querySelector(".tabs");
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(":scope > .tab-panels");
const tabPanels = Array.from(
  tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'),
);
```

キーボード操作については、`tablist` で [`keydown`](/ja/docs/Web/API/Element/keydown_event) イベントを待ち受けしています。このデモでは、ユーザーが矢印キーで移動する際に `tab` をアクティブ化せず、フォーカスを移動させるだけにするようにしています。フォーカスを受け取ったときに `tab` を表示させたい場合は、新しいタブに対して単に `focus()` を呼び出すのではなく、`showTab()` 関数（後述）を呼び出してください。

```js
tabList.addEventListener("keydown", (e) => {
  const currentTab = e.target;
  const currentIndex = tabs.indexOf(currentTab);
  if (currentIndex === -1) return; // フォーカスされている要素がタブでない場合は終了
  let newIndex = 0;

  switch (e.key) {
    case "ArrowRight":
      newIndex = (currentIndex + 1) % tabs.length;
      break;
    case "ArrowLeft":
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      break;
    case "Home":
      newIndex = 0;
      break;
    case "End":
      newIndex = tabs.length - 1;
      break;
    default:
      return; // キーが認識されない場合は終了
  }

  e.preventDefault();
  e.stopPropagation();
  tabs[newIndex].focus();
});
```

タブパネルは、<kbd>Enter</kbd> または <kbd>Space</kbd> キーを `tab` 要素にフォーカスが当たっている状態で押すか、`tab` 要素をクリックした場合にのみ有効になります。まず、表示させる `tab` 要素を引数として受け取る関数 `showTab()` を定義します。

```js
function showTab(targetTab) {
  // 他のタブの選択を解除し、このタブを選択状態に設定する
  for (const tab of tabs) {
    if (tab === targetTab) continue;
    tab.setAttribute("aria-selected", false);
    tab.tabIndex = -1;
  }
  targetTab.setAttribute("aria-selected", true);
  targetTab.tabIndex = 0;

  // 他のタブパネルを非表示にし、選択したパネルを表示させる
  const targetTabPanel = document.getElementById(
    targetTab.getAttribute("aria-controls"),
  );
  for (const panel of tabPanels) {
    if (panel === targetTabPanel) continue;
    panel.hidden = true;
  }
  targetTabPanel.hidden = false;
}
```

これで、この関数を `click` イベントまたは `keydown` イベントのいずれかで呼び出すことができるようになりました。

```js
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    showTab(e.target);
  });
  tab.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      showTab(e.target);
    }
  });
});
```

{{EmbedLiveSample("Example", 600, 130)}}

## ベストプラクティス

自分で追加する必要はなく、代わりに、組み込みの機能的でアクセス可能な機能のために、{{HTMLElement('button')}} 要素を `tab` ロールと一緒に使用することをお勧めします。`tab` ロールを持つ要素の Tab キー機能を制御するには、すべてのアクティブでない要素を `tabindex="-1"` に設定し、アクティブ要素を `tabindex="0"` に設定することをお勧めします。

## 優先順位

関連するプロパティにはどのようなものがあり、この属性またはプロパティはどのような順序で読み込まれるのか、どのプロパティがこのプロパティよりも優先されるのか、またどのプロパティが上書きされるのか。

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement('button')}} 要素
- [KeyboardEvent.key](/ja/docs/Web/API/KeyboardEvent/key)
- [ARIA `tabpanel` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
