---
title: "ARIA: tab ロール"
slug: Web/Accessibility/ARIA/Roles/tab_role
---

ARIA のタブ (`tab`) ロールは、タブリスト (`tablist`) 内のインタラクティブな要素を示し、アクティブ化されると、関連するタブパネル ([`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Roles/Tabpanel_Role)) を表示します。

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

## 説明

タブ (`tab`) ロールを持つ要素は、タブパネル (`tabpanel`) ロールに関連付けられた要素の可視性を制御します。 一般的なユーザーエクスペリエンスのパターンは、コンテンツ領域の上または横にある視覚的なタブのグループであり、別のタブを選択すると、コンテンツが変更され、選択したタブが他のタブよりも目立つようになります。

タブ (`tab`) ロールを持つ要素は、タブリスト (`tablist`) ロールを持つ要素の子であるか、タブリスト (`tablist`) の `aria-owns` プロパティの `id` 部分を持っている*必要があります*。 この組み合わせは、要素が関連要素のグループの一部であることを支援技術に識別させます。 一部の支援技術は、タブリスト (`tablist`) 内のタブ (`tab`) ロール要素の数を数えて、現在ターゲットにしているタブ (`tab`) をユーザーに通知します。 これらには、タブパネル (`tabpanel`) ロールを持つ要素を識別する `aria-controls` プロパティが含まれている*べきです*。 タブパネル (`tabpanel`) ロールを持つ要素にフォーカスがある場合、またはその子にフォーカスがある場合、タブ (`tab`) ロールを持つ接続された要素がタブリスト (`tablist`) 内のアクティブなタブであることを示します。

タブ (`tab`) ロールを持つ要素を操作する場合、要素が選択されているかアクティブになっているときは、`aria-selected` 属性を `true` に設定するべきです。 それ以外の場合は、`false` に設定するべきです。 タブ (`tab`) が選択されているかアクティブになっている場合、その制御されたタブパネル (`tabpanel`) では、`aria-expanded` 属性を `true` に設定し、`hidden` 属性 を `false` に設定するべきです。 それ以外の場合は、その逆になります。

### 関連するロールと属性

- aria-selected
  - : ブール値
- aria-controls
  - : タブパネル (`tabpanel`) ロールを持つ要素の `id`
- id
  - : コンテンツ

### キーボードインタラクション

| キー              | アクション                                                                                                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>Tab</kbd>    | フォーカスがタブリスト (`tablist`) の外にある場合、フォーカスをアクティブなタブに移動します。 フォーカスがアクティブなタブにある場合、フォーカスをキーボードフォーカスの順序の次の要素、理想的にはアクティブなタブに関連付けられたタブパネル (`tabpanel`) に移動します。 |
| <kbd>→</kbd>      | タブリストの次のタブにフォーカスし、任意でアクティブ化します。 現在のタブがタブリストの最後のタブである場合、最初のタブをアクティブ化します。                                                                                                                            |
| <kbd>←</kbd>      | タブリストの前のタブにフォーカスし、任意でアクティブ化します。 現在のタブがタブリストの最初のタブである場合、最後のタブをアクティブ化します。                                                                                                                            |
| <kbd>Delete</kbd> | 許可されている場合、現在選択されているタブをタブリストから削除します。                                                                                                                                                                                                   |

### 必要な JavaScript 機能

> **メモ:** JavaScript を使用せずにタブのような機能を構築する方法はありますが、コンテンツを含むアクセス可能なタブに上記で必要とされるのと同じ機能のセットを提供する HTML と CSS のみの代替の組み合わせはありません。

## 例

この例では、タブ (`tab`) ロールとタブリスト (`tablist`) 、そして要素とタブパネル (`tabpanel`) を組み合わせて、タブ付きコンテンツのインタラクティブなグループを作成します。 ここでは、コンテンツのグループを `div` で囲んでいます。 タブリスト (`tablist`) には、支援技術用にラベルを付けるための `aria-label` があります。 各タブ (`tab`) は、前述の属性を持つボタン (`button`) です。 最初のタブ (`tab`) には `tabindex=0` があり、後で `aria-selected=true` のタブに変更します。 すべてのタブパネル (`tabpanel`) 要素には Tab 可能にするために `tabindex=0` があり、現在アクティブな要素を除くすべてに `hidden` 属性があって、これは JavaScript で変更されます。 ボタンのスタイルを変更し、タブ (`tab`) 要素の [`z-index`](/ja/docs/Web/CSS/z-index) を変更して、アクティブな要素のタブパネル (`tabpanel`) に接続しているように見せたり、非アクティブな要素がアクティブなタブパネル (`tabpanel`) の後ろにあるように見せたりする基本的なスタイルが適用されます。

```html
<div class="tabs">
  <div role="tablist" aria-label="Sample Tabs">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      First Tab
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      Second Tab
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Third Tab
    </button>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Content for the second panel</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Content for the third panel</p>
  </div>
</div>
```

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
  border-color: orange;
  outline: 1px solid orange;
}
```

JavaScript でやるべきことは 2 つあります。 右矢印と左矢印を使用してタブ (`tab`) 要素のフォーカスとタブインデックスを変更する必要があります。 また、タブ (`tab`) をクリックしたときにアクティブなタブ (`tab`) とタブパネル (`tabpanel`) を変更する必要があります。

最初のことを達成するために、タブリスト (`tablist`) でキーダウン ([`keydown`](/ja/docs/Web/API/Element/keydown_event)) イベントをリッスンします。 イベントの [`keyCode`](/ja/docs/Web/API/KeyboardEvent/keyCode) が右矢印の 39 や左矢印の 37 の場合、イベントに反応します。 まず、現在のタブ (`tab`) 要素の `tabindex` を -1 に設定して、Tab 不可能にします。 次に、右矢印が押されている場合は、タブフォーカスカウンターを 1 つ増やします。 カウンターがタブ (`tab`) 要素の数よりも大きい場合は、そのカウンターを 0 に設定して、最初のタブに戻ります。 左矢印が押されている場合は、タブフォーカスカウンターを 1 つ減らし、0 未満の場合、タブ (`tab`) 要素の数から 1 を引いた数に設定します（最後の要素に到達するため）。 最後に、タブフォーカスカウンターと等しいインデックスのタブ (`tab`) 要素にフォーカスを設定し、 `tabindex` を 0 に設定して Tab 可能にします。

アクティブなタブ (`tab`) とタブパネル (`tabpanel`) の変更を処理するために、イベントを受け取り、イベントをトリガーした要素、トリガーした要素の親要素、およびその祖父母要素を取得する関数があります。 次に、親要素内で `aria-selected=true` を持つすべてのタブを検索し、それを `false` に設定してから、トリガーした要素の `aria-selected` を `true` に設定します。 その後、祖父母要素内のすべてのタブパネル (`tabpanel`) 要素を見つけてすべて `hidden` にし、最後に、トリガーしたタブ (`tab`) の `aria-controls` と等しい `id` の要素を選択して、`hidden` 属性を削除して表示します。

```js
window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // 各タブに click イベントハンドラーを追加します
  tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabs);
  });

  // タブリストのタブ間の矢印ナビゲーションを有効にします
  let tabFocus = 0;

  tabList.addEventListener("keydown", (e) => {
    // 右に移動
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // 最後にいる場合は、最初に移動します
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // 左に移動
      } else if (e.keyCode === 37) {
        tabFocus--;
        // 最初にいる場合は、最後に移動します
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // タブから現在すべての選択状態を取り除きます
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach((t) => t.setAttribute("aria-selected", false));

  // このタブを選択されたタブとして設定します
  target.setAttribute("aria-selected", true);

  // すべてのタブパネルを非表示にします
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach((p) => p.setAttribute("hidden", true));

  // 選択されたパネルを表示します
  grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}
```

{{EmbedLiveSample("Example", 600, 130)}}

## ベストプラクティス

自分で追加する必要はなく、代わりに、組み込みの機能的でアクセス可能な機能のために、ボタン (`button`) 要素をタブ (`tab`) ロールと一緒に使用することをお勧めします。 タブ (`tab`) ロールを持つ要素の Tab キー機能を制御するには、すべての非アクティブ要素を `tabindex=-1` に設定し、アクティブ要素を `tabindex=0` に設定することをお勧めします。

## 仕様

{{Specifications}}

## 優先順位

関連するプロパティは何ですか。 また、この属性やプロパティはどのような順序で読み取られますか（どのプロパティがこのプロパティよりも優先され、どのプロパティが上書きされますか）。

## スクリーンリーダーのサポート

TBD

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
