---
title: "ARIA: menubar ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/menubar_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

`menubar` は通常は表示されたままで、水平に表示される `menu` の表示です。

## 説明

メニューは、アクションや機能のセットなど、ユーザーに選択肢のリストを提供するウィジェットです。menubar タイプのメニューは通常、永続的に表示される水平のコマンドバーとして表示されます。メニューバーは、多くのデスクトップアプリケーションウィンドウの上部によく見られる、プルダウンメニューを含むメニューバーなど、ネイティブのオペレーティングシステムのメニューバーのように動作します。

`menubar` ロールは、多くのデスクトップアプリケーションのウィンドウ上部近くに見られるものと似たメニューバーを作成するために使用されます。視覚的に永続的で、通常は水平な、ユーザーに一貫したコマンドセットへの素早いアクセスを提供するメニュー項目のバーです。

`menubar` には、[`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)、[`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)、[`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) の 3 種類のメニュー項目が含まれます。これらのメニュー項目は、オプションで 1 つ以上の [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) コンテナーにネストできます。グループまたは項目は、オプションで [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) 要素で区切ることができます。すべてのメニュー項目は、無効化されていてもフォーカスを受け取ることができる必要がありますが、`group` と `separator` 要素はフォーカス可能ではありません。

ネイティブのメニューバーの例は、デスクトップブラウザーでこれを読んでいる場合、画面の上部に存在する可能性があるバーです。ウェブベースのメニューバーの例は、Google ドキュメントでドキュメント名の下に通常表示される「ファイル 編集 表示 挿入 表示形式」などと読める水平メニューバーです。

メニューバーのインタラクションは、デスクトップのグラフィカルユーザーインターフェイスにおける典型的なメニューバーのインタラクションと似ている必要があります。Google ドキュメントでは、これらのメニュー項目のそれぞれがポップアップサブメニューを持つ `menuitem` であるため、それぞれが `aria-haspopup` 属性を `true` に設定しています。`menubar` 要素にはありません。

メニューバーとすべてのメニュー項目はフォーカス可能で、[tabindex](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性が設定されています。メニューバーがタブ移動によってフォーカスを受け取ると、キーボードフォーカスは最初の menuitem に配置されます。メニュー内の各項目は `tabindex` を `-1` に設定していますが、最初の項目は `tabindex` を `0` に設定しています。

メニューバーがショートカットキーなどのコンテキストアクションの結果としてフォーカスを受け取った場合、<kbd>Escape</kbd> または <kbd>Enter</kbd> が呼び出し元のコンテキストにフォーカスを戻すことがあります。とはいえ、ユーザーエージェント、オペレーティングシステム、または支援技術のショートカットに干渉するショートカットキーを作成しないようにしてください。

どんなに深くネストされていても、すべてのメニュー項目は、無効化されていてもフォーカスを受け取ることができます。

`menubar` に表示されるラベルがある場合は、ラベル要素を参照する値に設定された [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を含めてください。それ以外の場合は、説明的な [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を含めることでメニューバーにアクセシブル名を提供してください。

`menubar` 内の `menuitem` 要素には、メニュー項目の子サブメニューを含めることができます。サブメニューは何層にも深くネストできます。一般的に、外側の `menubar` は水平で、すべてのサブメニューは垂直です。そうではなくてメニューバーが垂直の場合は、`menubar` 要素に [`aria-orientation="vertical"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) を含めてください。それ以外の場合、デフォルト値が水平であるため、この属性は必要ありません。

### 関連する WAI-ARIA ロール、ステート、プロパティ

- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ロール
  - : メニュー項目のセットを識別します
- [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) ロール
  - : `menubar` に含まれる選択肢のセット内のオプション。サブメニューを持つ場合があります。
- [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) ロール
  - : 同じロールを持つ要素のセット内のチェック可能なメニュー項目で、一度にチェックできるのは 1 つだけです。
- [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) ロール
  - : 可能な値が `true`、`false`、または `mixed` のチェック可能な状態を持つメニュー項目。
- [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : メニューバーが垂直の場合は、`menubar` 要素に `aria-orientation="vertical"` を含めてください。デフォルトの向きは `horizontal` です。

### キーボードインタラクション

フォーカスが `menubar` 内にある場合、それは常にメニューバー内のメニュー項目上にあります。フォーカスがメニューバー内のトップレベルの `menuitem` 上にある場合、次のキーボードインタラクションをサポートする必要があります：

- <kbd>↓</kbd>
  - : 現在フォーカスされている `menuitem` にサブメニューがある場合、サブメニューを開き、サブメニューの最初の項目にフォーカスを配置します。
- <kbd>↑</kbd>
  - : （オプション）現在フォーカスされている `menuitem` にサブメニューがある場合、サブメニューを開き、サブメニューの*最後の*項目にフォーカスを配置します。
- <kbd>→</kbd>
  - : 次の項目にフォーカスを移動し、オプションで最後から最初に折り返します。
- <kbd>←</kbd>
  - : 前の項目にフォーカスを移動し、オプションで最初から最後に折り返します。
- <kbd>Home</kbd>
  - : 矢印キーによる折り返しがサポートされていない場合、`menubar` の最初の項目にフォーカスを移動します。
- <kbd>End</kbd>
  - : 矢印キーによる折り返しがサポートされていない場合、`menubar` の最後の項目にフォーカスを移動します。
- <kbd>Tab</kbd>
  - : タブシーケンスの次の要素にフォーカスを移動します。それによってメニューバーを出る場合、メニューバー内のすべてのサブメニューが閉じられます。
- <kbd>shift + Tab</kbd>
  - : タブシーケンスの前の要素にフォーカスを移動します。それによってメニューバーを出る場合、メニューバー内のすべてのサブメニューが閉じられます。

menubar 内の menuitem にフォーカスがある場合のキーボードインタラクションの詳細については、[`menuitem` キーボードインタラクション](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role#keyboard_interactions)、[`menuitemradio` キーボードインタラクション](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role#keyboard_interactions)、および [`menuitemcheckbox` キーボードインタラクション](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role#keyboard_interactions) を参照してください。

注意：上記のインタラクションは、`menubar` が水平であることを前提としています。`menubar` が垂直の場合は、`aria-orientation="vertical"` を含め、次のキーボードキーを適宜変更してください：

- <kbd>↓</kbd>
  - : 上記で説明した <kbd>→</kbd> のように動作します。
- <kbd>↑</kbd>
  - : 上記で説明した <kbd>←</kbd> のように動作します
- <kbd>→</kbd>
  - : 上記で説明した <kbd>↓</kbd> のように動作します。
- <kbd>←</kbd>
  - : 上記で説明した <kbd>↑</kbd> のように動作します

## 例

- [W3C WAI-ARIA practices: navigation `menubar` example](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/)
- [W3C WAI-ARIA practices: editor `menubar` example](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-editor/)

## 仕様書

{{Specifications}}

## 関連情報

- [`toolbar` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
