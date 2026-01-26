---
title: "ARIA: menuitem ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitem_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

`menuitem` ロールは、要素が `menu` または `menubar` に含まれる選択肢セットの中のオプションであることを示します。

## 説明

`menuitem` は、[`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) または [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) に含まれる選択肢セットにおける 3 つのオプションタイプのうちの 1 つです。他の 2 つは [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) と [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) です。`menuitem` は、`menu` または `menubar` ロールを持つ要素の子孫、または所有される要素としてのみ存在し、オプションとして `menu` に含まれるか所有される [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロールを持つ要素内にネストすることもできます。

`menuitem` が DOM で menu の子孫でない場合、関係を示すために menu に [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) 属性を含めてください。`aria-owns` がメニューコンテナーに設定されて、コンテナーの DOM 子でない要素を含める場合、それらの要素は支援技術において参照される順序で、および DOM の子である項目の後に、読み上げ順序に現れます。視覚的なフォーカス順序が支援技術の読み上げ順序と一致するようにしてください。

メニュー内のすべての `menuitem` は、無効かどうかに関係なく、フォーカス可能です。`menuitem` が無効であることを示すには、要素に [`aria-disabled="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) を設定してください。

`menuitem` にサブメニューがある場合、メニューアイテムが活性化されたときに新しいサブレベルメニューを表示するようにプログラムし、メニューアイテムがサブメニューを開くために使用されることを支援技術に示すために [`aria-haspopup="menu"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) または `true` 値を含めてください。

`menuitem` がダイアログボックスを起動することを示す一般的な慣例は、メニューアイテムラベルに「…」（省略記号）を追加することです。例："名前を付けて保存…"

すべての `menuitem` はアクセシブル名を持つ必要があります。この名前は、デフォルトで要素の内容から取得されます。内容が有用なアクセシブル名を提供しない場合、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用して表示ラベルを参照できます。アクセシブル名を提供する表示コンテンツが利用できない場合、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) でアクセシブル名を提供できます。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) ロール
  - : 選択肢のリストを提供するウィジェット。必須のコンテキストロール（または `menubar`）
- [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) ロール
  - : 通常表示され続け、水平に表示される `menu` の表示。必須のコンテキストロール（または `menu`）
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロール
  - : `menu` または `menubar` 内にあるか、それらによって所有され、関連する `menuitem` のセットを識別するために使用できます
- [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : 要素は知覚可能だが無効であり、操作できないことを示します
- [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : `menuitem` によってトリガーできるインタラクティブなポップアップの可用性とタイプを示します

### キーボードインタラクション

- <kbd>Enter</kbd> と <kbd>Space</kbd>
  - : `menuitem` にサブメニューがある場合、サブメニューを開いて最初のアイテムにフォーカスを置きます。それ以外の場合、アイテムを活性化してメニューを閉じます。
- <kbd>↓</kbd>
  - : `menubar` 内のサブメニューを持つ `menuitem` では、サブメニューを開いてサブメニューの最初のアイテムにフォーカスを置きます。それ以外の場合、次のアイテムにフォーカスを移動し、オプションで最後から最初への折り返しを行います。
- <kbd>↑</kbd>
  - : 前のアイテムにフォーカスを移動し、オプションで最初から最後への折り返しを行います。オプションで、`menuitem` が menubar にあってサブメニューを持つ場合、サブメニューを開いてサブメニューの最後のアイテムにフォーカスを置きます。
- <kbd>→</kbd>
  - : メニューボタンで開かれた `menu` にいて `menubar` にない場合、menuitem にサブメニューがないなら何もしません。フォーカスが `menubar` にある場合、次のアイテムにフォーカスを移動し、オプションで最後から最初への折り返しを行います。フォーカスが `menu` にあってサブメニューを持つ `menuitem` にある場合、サブメニューを開いて最初のアイテムにフォーカスを置きます。フォーカスが `menu` にあってサブメニューを持たないアイテムにある場合、サブメニューと任意の親メニューを閉じ、`menubar` の次のアイテムにフォーカスを移動し、フォーカスが現在サブメニューを持つ `menuitem` にある場合、その `menuitem` のサブメニューをフォーカスをサブメニューに移動せずに開くか、その `menuitem` のサブメニューを開いてサブメニューの最初のアイテムにフォーカスを置きます。
- <kbd>←</kbd>
  - : フォーカスが `menubar` にある場合、前のアイテムにフォーカスを移動し、オプションで最初から最後への折り返しを行います。フォーカスがメニューのアイテムのサブメニューにある場合、サブメニューを閉じて親 `menuitem` にフォーカスを戻します。フォーカスが `menubar` のアイテムのサブメニューにある場合、サブメニューを閉じ、`menubar` の前のアイテムにフォーカスを移動し、フォーカスが現在サブメニューを持つ `menuitem` にある場合、その `menuitem` のサブメニューをフォーカスをサブメニューに移動せずに開くか、その `menuitem` のサブメニューを開いてサブメニューの最初のアイテムにフォーカスを置きます。
- <kbd>Home</kbd>
  - : 矢印キーの折り返しがサポートされていない場合、現在の `menu` または `menubar` の最初のアイテムにフォーカスを移動します。
- <kbd>End</kbd>
  - : 矢印キーの折り返しがサポートされていない場合、現在の `menu` または `menubar` の最後のアイテムにフォーカスを移動します。
- 印刷可能な文字に対応する任意のキー（オプション）
  - : その印刷可能な文字で始まるラベルを持つ現在のメニューの次のアイテムにフォーカスを移動します。
- <kbd>Escape</kbd>
  - : フォーカスを含むメニューを閉じ、メニューを開いた要素やコンテキスト（例：メニューボタンや親 `menuitem`）にフォーカスを戻します。
- <kbd>Tab</kbd>
  - : タブ順序の次の要素にフォーカスを移動し、フォーカスを持っていたアイテムが menubar にない場合、そのメニューと開いているすべての親メニューコンテナーを閉じます。
- <kbd>Shift + Tab</kbd>
  - : タブ順序の前の要素にフォーカスを移動し、フォーカスを持っていたアイテムが menubar にない場合、そのメニューと開いているすべての親メニューコンテナーを閉じます。

コンテキストアクションの結果としてメニューが開かれるか menu bar がフォーカスを受け取る場合、<kbd>Escape</kbd> または <kbd>Enter</kbd> が呼び出しコンテキストにフォーカスを戻すことがあります。

ナビゲーション menubar の一部の実装では、機能の実行とサブメニューの表示の両方を行う menuitem 要素があることがあります。このような実装では、<kbd>Enter</kbd> と <kbd>Space</kbd> がナビゲーション機能を実行し、水平 menubar では <kbd>Down Arrow</kbd> が同じ menuitem に関連付けられたサブメニューを開きます。

`menubar` 内のアイテムが垂直に配置され、メニューコンテナー内のアイテムが水平に配置される場合、<kbd>↓</kbd> は上記で説明した <kbd>→</kbd> のように動作し、<kbd>→</kbd> は上記で説明した <kbd>←</kbd> のように動作し、その逆も同様です。

## 例

```html
<div>
  <button id="menubutton" aria-haspopup="true" aria-controls="menu">
    <img src="hamburger.svg" alt="Page Sections" />
  </button>
  <ul id="menu" role="menu" aria-labelledby="menubutton">
    <li role="presentation">
      <a role="menuitem" href="#description">Description</a>
    </li>
    <li role="presentation">
      <a
        role="menuitem"
        href="#associated_wai-aria_roles_states_and_properties">
        Associated WAI-ARIA roles, states, and properties
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#keyboard_interactions">
        Keyboard interactions
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#examples">Examples</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#specifications">Specifications</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#see_also">See Also</a>
    </li>
  </ul>
</div>
```

## 仕様書

{{Specifications}}

## 関連情報

- [`menuitemcheckbox` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`listitem` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`option` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
