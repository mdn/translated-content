---
title: group ロールの使用
slug: Web/Accessibility/ARIA/Roles/group_role
---

### 説明

このテクニックは、[`group`](http://www.w3.org/TR/wai-aria/#group) ロールを使用する方法を示し、ブラウザーと支援技術に与える影響について説明します。

`group` ロールは、[`region`](http://www.w3.org/TR/wai-aria/#region) とは対照的に、目次やページの要約に含まれないように意図された一連のユーザーインターフェイスオブジェクトを識別するために使用されます（スクリプトや支援技術によって動的に作成される構造のような）。 グループ（group）はページ上で主要な知覚可能なセクションと見なされるべきではありません。 このロールが要素に追加されると、ブラウザーは、アクセス可能なグループイベントを支援技術製品に送り、支援技術製品はそれをユーザーに通知することができます。

グループは、階層内の兄弟の集合を形成するツリーウィジェット内の子供や、ディレクトリ内に同じコンテナを持つ項目の集合のような、関連する機能を持つ項目の論理的集合を形成するために使用されるべきです。 ただし、グループがリストのコンテキストで使用される場合、作者はその子を [`listitem`](http://www.w3.org/TR/wai-aria/#listitem) 要素に制限する必要があります。 グループ要素はネストすることができます。

支援技術によるグループの適切な取り扱いは、それが提供されるコンテキストによって決まります。

作者がページの目次に含まれることを保証するためにセクションが重要であると考える場合は、そのセクションに [`region`](http://www.w3.org/TR/wai-aria/#region) ロールまたは[標準的なランドマークロール](http://www.w3.org/TR/wai-aria/#landmark_roles)を割り当てるべきです。

### ユーザーエージェントと支援技術への影響

`group` ロールが要素に追加されるか、またはそのような要素が可視になると、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ API で `group` ロールを持つものとして要素を公開します。
- オペレーティングシステムのアクセシビリティ API をサポートしている場合は、アクセス可能なグループイベントを発生させます。

支援技術製品は、そのようなイベントをリスンし、それに応じてユーザーに以下を通知するべきです。

- スクリーンリーダーは、フォーカスが最初にその中のコントロールに着くとグループをアナウンスし、もし [`aria-describedby`](http://www.w3.org/TR/wai-aria/#aria-describedby) が設定されていれば、その説明が読み上げられます。 これに続いて、フォーカスされたコントロールをアナウンスすることができます。
- スクリーン拡大鏡でグループが拡大されることがあります。

> **メモ:** 支援技術がどのようにこの技術を扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1: HTML ツリービューでの group ロールの使用

以下のスニペットは、HTML ソースコードに group ロールを直接追加する方法を示しています。

```html
<div id="tree1" role="tree" tabindex="-1">
  <div
    id="animals"
    class="groupHeader"
    role="presentation"
    aria-owns="animalGroup"
    aria-expanded="true">
    <img role="presentation" tabindex="-1" src="images/treeExpanded.gif" />
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
      <img role="presentation" tabindex="-1" src="images/treeContracted.gif" />
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

#### 例 2: HTML ドロップダウンメニューでの group ロールの使用

以下のスニペットは、HTML ソースコードに group ロールを直接追加する方法を示しています。

```html
<div role="menu">
  <ul role="group">
    <li role="menuitem">受信トレイ</li>
    <li role="menuitem">アーカイブ</li>
    <li role="menuitem">ごみ箱</li>
  </ul>
  <ul role="group">
    <li role="menuitem">カスタムフォルダ 1</li>
    <li role="menuitem">カスタムフォルダ 2</li>
    <li role="menuitem">カスタムフォルダ 3</li>
  </ul>
  <ul role="group">
    <li role="menuitem">新規フォルダ</li>
  </ul>
</div>
```

#### 動作する例

- Unknown Title (`http://test.cita.illinois.edu/aria/tree/tree2.php`) **\[broken link]**

### 注

- グループの DOM サブツリーの外側にあるグループメンバーは、そのグループに参加するために明示的な関係を割り当てられている必要があります。

### 使用された ARIA 属性

- [group](http://www.w3.org/TR/wai-aria/#group)

### 関連する ARIA 技術

- [region](http://www.w3.org/TR/wai-aria/#region) ロール

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- ARIA Best Practices – Directories, Groups and Regions: <http://www.w3.org/TR/wai-aria-practices/#kbd_layout_groupheading> （該当項目は削除されています。）
