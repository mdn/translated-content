---
title: "ARIA: tablist ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/tablist_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`tablist` ロールは、`tabs` のセットのコンテナーとして機能する要素を識別します。タブコンテンツは `tabpanel` 要素として参照されます。

## 説明

これを読んでいる時にタブ付きインターフェイスと対話している可能性があります！ブラウザーのタブは、ユーザーが単一のウィンドウで複数のウェブページを開くことができます。ブラウザーウィンドウの上部にあるタブリスト内のタブをクリックすると、ユーザーはメインコンテンツ領域（tabpanel）に関連するコンテンツを一度に一つのサイトを表示できます。これは「タブデザインパターン」と呼ばれます。

タブデザインパターンを実装する場合、[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)、`tablist`、[`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) ロールが使用されます。

タブは、タブパネルとして知られる層状のコンテンツセクションのセットで、一度に一つのコンテンツパネルを表示します。各タブパネルには関連する `tab` 要素があり、活性化されるとそのパネルが表示されます。タブ要素のリストは、現在表示されているパネルの一辺に沿って配置され、最も一般的には上端に配置され、 `tablist` 要素内にネストされます。

`tablist` 内の各 `tab` は一つの `tabpanel` のラベルとして機能し、活性化されてそのパネルを表示できます。 `tablist` は、含まれるタブ要素のセットを格納する要素です。

タブ付きインターフェイスが初期化されると、一つのタブパネルが表示され、関連するタブはアクティブであることを示すようにスタイル設定されます。ユーザーが他のタブ要素の一つを活性化すると、以前に表示されていたタブパネルは非表示になり、活性化されたタブに関連するタブパネルが見えるようになり、そのタブは「アクティブ」と見なされます。

単一選択可能なタブリストの場合、非アクティブなタブパネル要素は、ユーザーがそのタブパネルに関連するタブを選択するまでユーザーから隠すべきです。

複数選択可能なタブリストを作成する場合は、`tablist element` に [`aria-multiselectable="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) を含めてください。

`tablist` ではなく `tab` 要素が [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) 属性を持ちます。表示されている各タブパネルに関連するタブには `aria-selected="true"` を設定します。非表示のタブパネル要素に関連するタブは、`aria-selected` 属性を `false` に設定します。

タブリストに表示ラベルがある場合は、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) をラベル要素の `id` に設定します。そうでない場合は、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用してラベルを提供します。

キーボードアクセシブルにするには、このロールの子孫に対してフォーカスを管理する必要があります。

`tablist` ロールを持つ要素は、暗黙的な [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) 値として `horizontal` を持ちます。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) ロール
  - : 必須の所有要素。すべてのタブリストは一つ以上の `tab` 子を持つ必要があります。
- [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : `true` に設定されている場合、ユーザーが `tablist` の子孫から複数の `tab` を選択できることを示します。
- [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : タブリスト要素が垂直方向の場合は、 `aria-orientation="vertical"` を設定します。既定値は `horizontal` です。

### キーボード操作

タブリストの場合：

- <kbd>Tab</kbd>
  - : フォーカスがタブリストに移動すると、アクティブな `tab` 要素にフォーカスを置きます。<br/><br/>タブリストにフォーカスが含まれている場合、フォーカスをタブリスト外のページタブシーケンスの次の要素（タブパネル内の意味のあるコンテンツを含む最初の要素がフォーカス可能でない限りタブパネル）に移動します。

水平タブリスト内のタブ要素にフォーカスがある場合：

- <kbd>←</kbd>
  - : フォーカスを前のタブに移動します。フォーカスが最初のタブにある場合は、フォーカスを最後のタブに移動します。オプションで、新しくフォーカスされたタブを活性化します
- <kbd>→</kbd>
  - : フォーカスを次のタブに移動します。フォーカスが最後のタブ要素にある場合は、フォーカスを最初のタブに移動します。オプションで、新しくフォーカスされたタブを活性化します

垂直タブリスト内のタブ要素にフォーカスがある場合：

- <kbd>↑</kbd>
  - : フォーカスを前のタブに移動します。フォーカスが最初のタブにある場合は、フォーカスを最後のタブに移動します。オプションで、新しくフォーカスされたタブを活性化します
- <kbd>↓</kbd>
  - : フォーカスを次のタブに移動します。フォーカスが最後のタブ要素にある場合は、フォーカスを最初のタブに移動します。オプションで、新しくフォーカスされたタブを活性化します

タブリストが水平の場合、 <kbd>↓</kbd> や <kbd>↑</kbd> をリッスンしないため、これらのキーはタブリスト内にフォーカスがある場合でも通常のブラウザースクロール機能を提供できます。

水平または垂直方向のタブリスト内のタブにフォーカスがある場合：

- <kbd>Space</kbd> または <kbd>Enter</kbd>
  - : フォーカス時に自動的に活性化されなかった場合、タブを活性化します。
- <kbd>Home</kbd>（オプション）
  - : フォーカスを最初のタブに移動します。オプションで、新しくフォーカスされたタブを活性化します
- <kbd>End</kbd>（オプション）
  - : フォーカスを最後のタブに移動します。オプションで、新しくフォーカスされたタブを活性化します
- <kbd>Shift + F10</kbd>
  - : タブに関連するポップアップメニューがある場合、メニューを開きます。
- <kbd>Delete</kbd>（オプション）
  - : 削除が許可されている場合、現在のタブ要素とその関連するタブパネルを削除（閉じる）し、閉じられたタブに続くタブにフォーカスを設定し、オプションで新しくフォーカスされたタブを活性化します。閉じられたタブに続くタブがない場合（例：削除されたタブが左から右の水平タブリストの右端のタブだった場合）、削除されたタブの前のタブにフォーカスを設定し、オプションで活性化します。アプリケーションがすべてのタブの削除を許可し、ユーザーがタブリストの最後の残りタブを削除した場合、アプリケーションは論理的なワークフローを提供する別の要素にフォーカスを移動します。Delete の代替として、または Delete のサポートに加えて、削除機能はコンテキストメニューで利用できます。

## 例

[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) ロール定義の [`tabpanel`、`tab`、`tablist` の例](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) を参照してください。

## 仕様書

{{Specifications}}

## 関連情報

- [`tab` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
