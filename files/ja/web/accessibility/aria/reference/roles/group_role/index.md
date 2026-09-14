---
title: "ARIA: group ロール"
short-title: group
slug: Web/Accessibility/ARIA/Reference/Roles/group_role
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

`group` ロールは、支援技術によってページの概要や目次に含まれないことを意図している、一連のユーザーインターフェイスオブジェクトを識別するものです。

## 解説

HTML の {{HTMLElement("fieldset")}} 要素と最も密接に関連する `group` 文書構造ロールは、一連のユーザーインターフェースオブジェクトを識別するために使用されます。これは、[`region`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) と比較して、ページの概要や目次には記載しないことを意図していないものです。

`group` ロールを使用しましょう。アイテムの関連する機能を形成するために使用します。[`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) ウィジェット内の子要素が階層内で兄弟要素の集合を形成する場合や、[`directory`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role) 内の同じコンテナーを持つアイテムの集合などです。

[`list`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) のコンテキストで `group` を使用する場合は、`group` の子要素を [`listitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role) 要素に制限してください。この場合、ネストされた {{HTMLElement("li")}} 子要素を持つ、複数の順序付きリストまたは順序なしリスト（{{HTMLElement("ol")}} または {{HTMLElement("ul")}}）を使用することを推奨します。

[`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) のコンテキストで使用する場合、許可される子要素は {{HTMLElement("option")}} 要素のみです。この場合、代わりに {{HTMLElement("select")}}、{{HTMLElement("option")}}、{{HTMLElement("optgroup")}} を使用することを推奨します。

`group` の要素は入れ子にすることができます。

`group` ロールは、ページ内の主要な識別可能なセクションには使用しないでください。そのセクションが、ページの目次に記載するほど重要なものである場合は、`region` ロール、または標準の[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles)を使用してください。

要素にロールが追加されると、ブラウザーは支援技術製品に対してアクセシビリティ・グループ・イベントを送信し、支援技術製品はそれに基づいてユーザーに通知を行うことが可能です。

### 例

下記 HTML サンプルコードでは、`tree` ビューで `group` ロールを使用しています。

```html
<div id="tree1" role="tree" tabindex="-1">
  <div
    id="animals"
    class="groupHeader"
    role="presentation"
    aria-owns="animalGroup"
    aria-expanded="true">
    <img
      role="presentation"
      tabindex="-1"
      src="images/treeExpanded.gif"
      alt="" />
    <span role="treeitem" tabindex="0">動物</span>
  </div>
  <div id="animalGroup" role="group">
    <div id="birds" role="treeitem">
      <span tabindex="-1">鳥</span>
    </div>
    <div
      id="cats"
      class="groupHeader"
      role="presentation"
      aria-owns="catGroup"
      aria-expanded="false">
      <img
        role="presentation"
        tabindex="-1"
        src="images/treeContracted.gif"
        alt="" />
      <span role="treeitem" tabindex="0">猫</span>
    </div>
    <div id="catGroup" role="group">
      <div id="siamese" role="treeitem">
        <span tabindex="-1">シャム猫</span>
      </div>
      <div id="tabby" role="treeitem">
        <span tabindex="-1">虎猫</span>
      </div>
    </div>
  </div>
</div>
```

次の例では、`group` ロールを使用し、[`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) のドロップダウンメニューに [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) が含まれています。

```html
<div role="menu">
  <ul role="group">
    <li role="menuitem">受信トレイ</li>
    <li role="menuitem">アーカイブ</li>
    <li role="menuitem">ごみ箱</li>
  </ul>
  <ul role="group">
    <li role="menuitem">カスタムフォルダー 1</li>
    <li role="menuitem">カスタムフォルダー 2</li>
    <li role="menuitem">カスタムフォルダー 3</li>
  </ul>
  <ul role="group">
    <li role="menuitem">新規フォルダー</li>
  </ul>
</div>
```

このメニューは、{{HTMLElement('select')}} および {{HTMLElement('option')}} 要素を使用して作成できます。この場合、`group` ロールは {{HTMLElement('optgroup')}} 要素に最も近いものとなります。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('fieldset')}} 要素
- [ARIA: `section` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `row` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: `select` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [ARIA: `toolbar` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
