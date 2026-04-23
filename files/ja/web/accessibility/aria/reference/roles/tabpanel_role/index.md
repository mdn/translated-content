---
title: "ARIA: tabpanel ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/tabpanel_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

ARIA `tabpanel` は、`tab` に関連付けられた階層化されたコンテンツのリソースのコンテナーです。

## 説明

`tabpanel` ロールは、要素が [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) ロールに関連付けられたリソースのコンテナーであることを示します。各 `tab` は [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) に含まれています。

`tabpanel` はタブインターフェイスの一部であり、視覚的なタブのグループによって複数の階層化されたビュー間を素早く切り替えることができる一般的なユーザー体験パターンです。各タブは `tab` ロールで定義され、これらのタブは `tablist` ロールを持つ要素内に含まれます。`tablist` は通常、コンテンツ領域の上側または横側に視覚的に配置され、関連する tabpanel を含んでいます。`tabpanel` は、タブインターフェイスの `tablist` 内の対応する `tab` に関連付けられた各コンテンツペインのコンテナーのロールです。

多くのタブインターフェイスでは、一度に単一の `tabpanel` のみが表示されます。ただし、一部のインターフェイスでは複数のタブパネルを同時に表示する必要がある場合があります。このような場合、`tablist` には [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) 属性が提供され、`tab` 要素は [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 属性を使用して、関連する `tabpanel` が表示されているかどうかを示します。タブの選択状態は、どのタブパネルが現在の「アクティブな」パネルであるかを示すために使用されます。例えば、これは複数選択可能な `tablist` 内のタブにフォーカスがある時に <kbd>Tab</kbd> キーを押した場合に、キーボードフォーカスがどのタブパネルに移動するかを示すことができます。

単一選択タブインターフェイスでは、現在選択されているタブに関連付けられた `tabpanel` のみが表示されます。選択されていないタブに関連付けられた他の全ての `tabpanel` 要素は、ユーザーから隠されている必要があります。そのため、タブの選択が変更されると、表示されるタブパネルも変更され、以前に表示されていたタブパネルは隠されるようになります。

複数選択タブインターフェイスでは、関連する `tab` 要素の展開状態に合わせて、複数の `tabpanel` 要素が表示される場合があります。

タブは個々のパネルへのアンカーリンクとして機能しません。アクティブ化されると、キーボードフォーカスは現在の `tab` 要素にとどまり、新しく表示された `tabpanel` に自動的に移動することはありません。タブインターフェイスが、関連するコンテンツセクションを指すページ内ハイパーリンクの基本マークアップパターンに基づいて段階的に拡張される場合があります。JavaScript を使用してこれらの要素をタブ付きインターフェイスに変更する場合、ハイパーリンクのデフォルト動作を防ぐ必要があります。理想的には、これは `href` 属性を削除または変更することで実現できます。これにより、要素のブラウザーコンテキストメニューからハイパーリンク固有のメニュー項目を削除するという追加の利点もあります。

キーボードフォーカスが `tablist` または `tablist` 内の `tab` にある場合、<kbd>Tab</kbd> キーは、フォーカスされているタブ（これは選択されているタブである場合もそうでない場合もあります）から、現在選択されているタブを表す `tabpanel` に移動するようにプログラムする必要があります。

`tablist` 内の各 `tab` は、対応する `tabpanel` のラベルとして機能できます。各 `tab` の `id` を、各 `tabpanel` の [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性の値として含めてください。

また、オプションで、`tabpanel` の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を `tab` の [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 属性の値として含めることで、各 `tabpanel` を関連する `tab` に関連付けることもできます。

タブ付きインターフェイスが初期化されると、1 つの `tabpanel` が表示され、関連する `tab` はアクティブであることを示すようにスタイルが設定され、そのプログラム的な状態を反映します。すべての非アクティブな `tabpanel` 要素は、すべてのユーザーから隠されている必要があります。これは最も一般的には CSS の `display: none` を使用して実現されます。

このロールの使用に関する詳細な情報については、 [ARIA `tab` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) の記事を参照してください。

`tabpanel` がページのキーボードフォーカス順序に含まれることなくフォーカスを受け取れるようにするために、 [`tabindex="-1"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) を含めてください。

キーボードユーザーがフォーカスの変更を認識し、現在フォーカスされているコンテンツを認識できるように、`tabpanel` がフォーカスを受け取った時のスタイルを定義してください。CSS の {{CSSXref(':focus')}} 疑似クラスを使用するのが最適です。

このタブパターンを使用してカルーセルを作成できます。スライドピッカーコントロールは `tablist` 内の `tabs` としてマークアップでき、スライドは `tabpanel` 要素で表現されます。

### 関連するロールと属性

- [`tab` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : 関連する `tabpanel` の表示を制御します
- [`tablist` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
  - : `tab` 要素のグループです。
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : アクセシブル名を提供します。パネルを制御する `tab` 要素を参照します
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : 複数選択可能な `tablist` が使用される場合、必要な `tab` 要素で使用する必要があります。

### キーボードインタラクション

[`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) ロール定義の [`tablist` キーボードインタラクション](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role#keyboard_interactions) を参照してください。

## 例

[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) ロール定義の [`tabpanel`、`tab`、`tablist` の例](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) を参照してください。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA `tab` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [ARIA `tablist` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [Example: Tabs with Automatic Activation](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Example: Tabs with Manual Activation](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) -W3C
