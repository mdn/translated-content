---
title: "ARIA: menuitemradio ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`menuitemradio` は同じロールを持つ要素セット内のチェック可能なメニューアイテムで、一度に 1 つだけをチェックできます。

## 説明

menu と menubar 内のアイテムはメニューアイテムです。メニューアイテムには、[`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)、[`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)、`menuitemradio` の 3 つのタイプがあります。グループ内でチェックされるメニューアイテムの数を 1 つに制限するには、グループ内のすべての要素に `menuitemradio` ロールを使用します。

`menuitemradio` は同じロールを持つ要素セット内のチェック可能なメニューアイテムで、一度に 1 つだけをチェックできます。

これら 3 つのメニューアイテム要素は、[`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) または [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) ロールを持つ要素に含まれるか、それによって所有されることのみ可能で、オプションとして [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロールを持つグループ化された要素内にネストできます。`menu` または `menubar` にネストされるか、そうでなければ所有される（[`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) を参照）ことは、メニューアイテムが関連するウィジェットであることを識別します。

サブメニュー内のすべてのアイテムが同じラジオグループのメンバーである場合、`group` はメニュー要素によって定義されます。`group` 要素は必要ありません。

`menuitemradio` のロールを含むメニューアイテムは、[`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) を使用している場合は [`checked`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox#checked) 属性を使用すべきですが、そうでなければラジオボタンの状態を支援技術に公開するために [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) 属性を含める必要があります。

`radio` タイプの {{HTMLElement('input')}} の `checked` 属性と同様に、`menuitemradio` の `aria-checked` 属性は、メニューアイテムがチェックされているか（`true`）、チェックされていないか（`false`）を示します。`menuitemcheckbox` のような `mixed` 値はありません。

グループ内の `menuitemradio` は一度に 1 つだけチェックできます。グループ内の 1 つのアイテムがチェックされると、`aria-checked` 属性が `true` に設定される一方で、同じグループ内で以前にチェックされていた `menuitemradio` 要素があった場合、`aria-checked` 属性の値が `false` に切り替わることによってチェックが外されます。

グループ内の複数のアイテムをチェックしたい場合、またはアイテムのチェックとチェック解除を有効にしたい場合は、`menuitemcheckbox` の使用を検討してください。

`menu` または `menubar` が複数の `menuitemradio` 要素のグループを含んでいる場合、または `menu` が `menuitemradio` 要素のグループと他の無関係な `menuitem` 要素や `menuitemcheckbox` 要素を含んでいる場合は、関連する `menuitemradio` 要素の各セットを `group` 要素に含めるか、`menuitemradio` 要素のグループを他のメニューアイテムから `separator` 要素（または {{HTMLElement('fieldset')}} グループ化や主題区切り {{HTMLElement('hr')}} セパレーターなど同等のロールを持つ HTML 要素）で区切ってください。

アクセシブル名が必要です。理想的には、`<input type="radio">` を使用している場合は関連付けられた {{htmlelement('label')}} 要素、または表示されている子孫コンテンツからアクセシブル名が取得されるべきです。ラベルや子孫コンテンツが不十分で、できれば [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用して非子孫コンテンツを参照するか、[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用する場合、これら 2 つの ARIA プロパティは他の子孫コンテンツを支援技術から隠すことを認識してください。

セット内のすべての要素が DOM に存在しない場合、[`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) と [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) プロパティを含めてください。`menuitemradio` で `aria-setsize` と `aria-posinset` を指定する場合、セパレーターを除く、メニュー内のアイテムの総数に対する値を設定してください。

`menuitemradio` 要素は記述コンテンツを含むことができますが、子孫としてインタラクティブコンテンツを持つことはできず、`tabindex` 属性が指定された子孫も持てません。

### すべての子孫はプレゼンテーショナル

プラットフォームアクセシビリティ API で表現される際に、テキストのみを含むことができるユーザーインターフェイスコンポーネントのタイプがいくつかあります。アクセシビリティ API には、`menuitemradio` に含まれるセマンティック要素を表現する方法がありません。この制限に対処するために、ブラウザーは、セマンティックな子をサポートしないロールであるため、任意の `menuitemradio` 要素のすべての子孫要素に自動的に [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) ロールを適用します。

例えば、見出しを含む次の `menuitemradio` 要素を考えてみてください。

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></div>
```

`menuitemradio` の子孫はプレゼンテーショナルであるため、次のコードは同等です：

```html
<div role="menuitemradio">
  <h6 role="presentation">Name of my radio button</h6>
</div>
```

支援技術ユーザーの観点からは、前のコードスニペットが [アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree) 内で次のものと同等であるため、見出しは存在しません：

```html
<div role="menuitemradio">Name of my radio button</div>
```

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) ロール
  - : ユーザーが呼び出すことができる一般的なアクションや機能のリストを提供するウィジェット。
- [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) ロール
  - : 頻繁に使用されるコマンドの一貫したセットが表示され続け、通常水平に表示される `menu` に似ています。
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロール
  - : `menu` または `menubar` 内の `menuitemradio` 要素を含む `menuitem` 要素のグループのコンテナー。
- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)（必須）
  - : `true` または `false` に設定され、menuitemradio の現在の「チェック済み」状態を示します

### キーボードインタラクション

`menu` が開くか、`menubar` がフォーカスを受け取ると、キーボードフォーカスは最初のアイテムに置かれます。両方とも `menuitemradio` 要素を含むすべてのアイテムがフォーカス可能です。

`menuitemradio` が `menubar` のサブメニューまたはメニューボタンで開かれたメニュー内にある場合、以下のキーボードインタラクションをプログラムする必要があります。

- <kbd>Enter</kbd>
  - : チェックされていない場合、フォーカスされた `menuitemradio` をチェックし、同じグループ内の他のチェックされた `menuitemradio` 要素のチェックを外します。また、メニューを閉じます。
- <kbd>Space</kbd>
  - : チェックされていない場合、フォーカスされた `menuitemradio` をチェックし、メニューを閉じることなく、同じグループ内の他のチェックされた `menuitemradio` 要素のチェックを外します。
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
  - : ラジオボタンとそれに関連するラベルの両方でのマウスクリックを処理し、`aria-checked` 属性の値とラジオボタンの外観を変更してラジオボタンの状態を変更し、見えるユーザーにチェック済みまたは未チェックの状態が見えるようにします
- `onKeyDown`
  - : ユーザーが <kbd>Space</kbd> キーを押してラジオボタンの状態を変更する場合を処理し、`aria-checked` 属性の値とラジオボタンの外観を変更して、見えるユーザーにチェック済みまたは未チェックの状態が見えるようにします。また、上記のキーボードナビゲーションセクションでリストされたすべてのキーを処理します。

## 例

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

[`tabindex="-1"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) により、`menuitemradio` がフォーカス可能になりますが、ページのタブシーケンスの一部にはなりません。`aria-checked="true"` を含めた場合、`menuitemradio` がチェック済みであることを示し、属性セレクター `[role='menuitemradio'][aria-checked='true']` を使用してチェック済み状態を視覚的にスタイリングします。代わりに、`aria-checked="false"` が存在すると、`menuitemradio` がチェック可能だが現在チェックされていないことが支援技術に示されます。アクセシブル名 "purple" はコンテンツから取得されます。

選択された状態の視覚的外観は、チェック済みラジオボタンです。これは [CSS 生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content) を使用して作成でき、CSS の [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors) を使用して `aria-checked` 値と同期し、[`background-color`](/ja/docs/Web/CSS/Reference/Properties/background-color) を変更することで、表示されてコンテンツと同じ色にできます。

```css
[role="menuitemradio"]::before {
  display: inline-block;
  content: "";
  width: 1em;
  height: 1em;
  padding: 0.1em;
  border: 2px solid #333;
  border-radius: 50%;
  box-sizing: border-box;
  background-clip: content-box;
  margin-inline-end: 2px;
}
[role="menuitemradio"][aria-checked="true"]::before {
  background-color: purple;
}
```

ラジオボタン効果を作成するために使用している [`background-clip`](/ja/docs/Web/CSS/Reference/Properties/background-clip) プロパティを上書きしてしまうため、[`background`](/ja/docs/Web/CSS/Reference/Properties/background) 一括指定プロパティは使用しないでください。

### 好ましい HTML

ARIA の第一のルールは、必要なセマンティクスと動作を持つネイティブ HTML 要素または属性がある場合、要素を再利用して ARIA ロール、ステート、またはプロパティを追加してアクセシブルにするのではなく、そのネイティブ要素を使用することです。そのため、JavaScript と ARIA でラジオボタンの機能を再作成するのではなく、ネイティブ [HTML ラジオボタン](/ja/docs/Web/HTML/Reference/Elements/input/radio) フォームコントロールを使用することが推奨されます。

## 仕様書

{{Specifications}}

## 関連情報

- [`radio` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio)
