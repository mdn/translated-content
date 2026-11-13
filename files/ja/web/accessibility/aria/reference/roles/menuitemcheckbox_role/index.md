---
title: "ARIA: menuitemcheckbox ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

`menuitemcheckbox` は、可能な値が `true`、`false`、または `mixed` のチェック可能な状態を持つ `menuitem` です。

## 説明

menu と menubar 内のアイテムはメニューアイテムです。メニューアイテムには、[`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)、[`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)、`menuitemcheckbox` の 3 つのタイプがあります。

これら 3 つの要素は、[`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) または [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) ロールを持つ要素に含まれるか、それによって所有されることのみ可能で、オプションとして [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロールを持つグループ化要素内にネストできます。`menu` または `menubar` にネストされるか、そうでなければ所有される（[`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) を参照）ことは、メニューアイテムが関連するウィジェットであることを識別します。

`menuitemcheckbox` 要素を含むメニューアイテムは、`group` 要素内でグループ化されるか、[`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) ロールで区切られることができます。または {{HTMLElement('fieldset')}} や {{HTMLElement('hr')}} などの他の同等のネイティブロールを持つ要素で同様のことができます。

`menuitemcheckbox` のロールを含むメニューアイテムは、[`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) を使用している場合は [`checked`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox#checked) 属性を使用すべきですが、そうでなければチェックボックスの状態を支援技術に公開するために [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) 属性を含める必要があります。

`checkbox` タイプの {{HTMLElement('input')}} の `checked` 属性と同様に、`menuitemcheckbox` の `aria-checked` 属性は、メニューアイテムがチェックされているか（`true`）、チェックされていないか（`false`）、またはチェックされた値とチェックされていない値が混在する他のメニューアイテムのサブレベルメニューを表すか（`mixed`）を示します。`mixed` 値は、チェックボックスの [`indeterminate`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) 属性に似ており、チェックされてもチェックされていない状態でもない第 3 の状態の外観を与えます。

アクセシブル名が必要です。理想的には、`<input type="checkbox">` を使用している場合は関連付けられた {{htmlelement('label')}} 要素、または表示されている子孫コンテンツからアクセシブル名が取得されるべきです。ラベルや子孫コンテンツが不十分で、できれば [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用して非子孫コンテンツを参照するか、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用する場合、これら 2 つの ARIA プロパティは他の子孫コンテンツを支援技術から隠すことを認識してください。

セット内のすべての要素が DOM に存在しない場合、[`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) と [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) プロパティを含めてください。`menuitemcheckbox` で `aria-setsize` と `aria-posinset` を指定する場合、セパレーターを除く、メニュー内のアイテムの総数に対する値を設定してください。

`menuitemcheckbox` 要素は記述コンテンツを含むことができますが、子孫として対話型コンテンツを持つことはできず、`tabindex` 属性が指定された子孫も持てません。

### すべての子孫はプレゼンテーショナル

プラットフォームアクセシビリティ API で表現される際に、テキストのみを含むことができるユーザーインターフェイスコンポーネントのタイプがいくつかあります。アクセシビリティ API には、`menuitemcheckbox` に含まれるセマンティック要素を表現する方法がありません。この制限に対処するために、ブラウザーは、セマンティックな子をサポートしないロールであるため、任意の `menuitemcheckbox` 要素のすべての子孫要素に自動的に [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) ロールを適用します。

例えば、見出しを含む次の `menuitemcheckbox` 要素を考えてみてください。

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></div>
```

`menuitemcheckbox` の子孫はプレゼンテーショナルであるため、次のコードは同等です：

```html
<div role="menuitemcheckbox">
  <h6 role="presentation">Name of my checkbox</h6>
</div>
```

支援技術ユーザーの観点からは、前のコードスニペットが [アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree) 内で次のものと同等であるため、見出しは存在しません：

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) ロール
  - : ユーザーが呼び出すことができる一般的なアクションや機能のリストを提供するウィジェット。
- [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) ロール
  - : 頻繁に使用されるコマンドの一貫したセットが表示され続け、通常水平に表示される `menu` に似ています。
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロール
  - : `menu` または `menubar` 内の `menuitemcheckbox` 要素を含む `menuitem` 要素のグループのコンテナー。
- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)（必須）
  - : `true`、`false`、または `mixed` に設定され、menuitemcheckbox の現在の「チェック済み」状態を示します

### キーボードインタラクション

`menu` が開くか、`menubar` がフォーカスを受け取ると、キーボードフォーカスは最初のアイテムに置かれます。両方とも `menuitemcheckbox` 要素を含むすべてのアイテムがフォーカス可能です。

`menuitemcheckbox` が `menubar` のサブメニューまたはメニューボタンで開かれたメニュー内にある場合、以下のキーボードインタラクションをプログラムする必要があります。

- <kbd>Enter</kbd>
  - : `menuitemcheckbox` の `aria-checked` 状態をトグルし、メニューを閉じます。
- <kbd>Space</kbd>
  - : `menuitemcheckbox` の `aria-checked` 状態をトグルします。メニューは閉じません。
- <kbd>Escape</kbd>
  - : メニューを閉じます。menubar では、親 menubar アイテムにフォーカスを移動します。
- <kbd>→</kbd>
  - : サブメニューを閉じます。menubar では、menubar の次のアイテムにフォーカスを移動し、サブメニューがあればそれを開きます。
- <kbd>←</kbd>
  - : メニューを閉じます。menubar では、menubar の前のアイテムにフォーカスを移動し、サブメニューがあればそれを開きます。
- <kbd>↓</kbd>
  - : メニューの次のアイテムにフォーカスを移動します。フォーカスが最後のアイテムにある場合、最初のアイテムにフォーカスを移動します。
- <kbd>↑</kbd>
  - : メニューの前のアイテムにフォーカスを移動します。フォーカスが最初のアイテムにある場合、最後のアイテムにフォーカスを移動します。
- <kbd>Home</kbd>
  - : メニューの最初のアイテムにフォーカスを移動します。
- <kbd>End</kbd>
  - : メニューの最後のアイテムにフォーカスを移動します。
- <kbd>アルファベット</kbd>
  - : タイプされた文字で始まる名前を持つ次のアイテムにフォーカスを移動します。タイプされた文字で始まる名前を持つアイテムがない場合、フォーカスは移動しません。

### 必要な JavaScript

#### 必要なイベントハンドラー

- `onclick`
  - : チェックボックスとそれに関連するラベルの両方でのマウスクリックを処理し、`aria-checked` 属性の値とチェックボックスの外観を変更してチェックボックスの状態を変更し、見えるユーザーにチェック済みまたは未チェックの状態が見えるようにします
- `onKeyDown`
  - : ユーザーが <kbd>Space</kbd> キーを押してチェックボックスの状態を変更する場合を処理し、`aria-checked` 属性の値とチェックボックスの外観を変更して、見えるユーザーにチェック済みまたは未チェックの状態が見えるようにします。また、上記のキーボードナビゲーションセクションでリストされたすべてのキーを処理します。

## 例

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

[`tabindex="-1"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) により、`menuitemcheckbox` がフォーカス可能になりますが、ページのタブシーケンスの一部にはなりません。`aria-checked="true"` を含めた場合、`menuitemcheckbox` がチェック済みであることを示し、属性セレクター `[role='menuitemcheckbox'][aria-checked='true']` を使用してチェック済み状態を視覚的にスタイリングします。`aria-checked="false"` が存在すると、`menuitemcheckbox` がチェック可能だが現在チェックされていないことが支援技術に示されます。アクセシブル名 "purple" はコンテンツから取得されます。

選択された状態の視覚的外観は、チェック済みチェックボックスです。これは [CSS 生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content) を使用して作成でき、CSS の [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors) を使用して `aria-checked` 値と同期し、色を [継承](/ja/docs/Web/CSS/Reference/Values/inherit) することで、表示されてコンテンツと同じ色にできます。

```css
[role="menuitemcheckbox"]::before {
  display: inline-block;
  content: "";
  color: transparent;
  width: 1em;
  text-align: center;
  outline: 1px solid;
  margin-inline-end: 2px;
  font-family: sans-serif;
}
[role="menuitemcheckbox"][aria-checked="true"]::before {
  color: inherit;
  content: "X";
}
```

### 好ましい HTML

ARIA の第一のルールは、必要なセマンティクスと動作を持つネイティブ HTML 要素または属性がある場合、要素を再利用して ARIA ロール、ステート、またはプロパティを追加してアクセシブルにするのではなく、そのネイティブ要素を使用することです。そのため、JavaScript と ARIA でチェックボックスの機能を再作成するのではなく、ネイティブ [HTML チェックボックス](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) フォームコントロールを使用することが推奨されます。

## 仕様書

{{Specifications}}

## 関連情報

- [`menuitemradio` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`checkbox` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)
