---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`tabindex`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、開発者が HTML要素をフォーカス可能にし、（ふつうは名前の由来である <kbd>Tab</kbd> キーによる）順番にフォーカスすることを許可または防止し、順番にフォーカスするための相対順序を決定することができるようにします。

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

値としては整数値を受け付け、値によって次のような様々な結果になります。

  > **メモ:** HTML 要素がレンダリングされ、その `tabindex` 属性が有効な整数値である場合、その要素は JavaScript で（[`focus()`](/ja/docs/Web/API/HTMLElement/focus) メソッドを呼び出すことで）フォーカスしたり、マウスクリックで視覚的にフォーカスしたりすることができます。特定の `tabindex` 値は、その要素が `tabbable` （キーボードによる連続したナビゲーション、通常は <kbd>Tab</kbd> キーで到達可能）であるかどうかを制御します。

- _負の数_ （正確な値は重要ではありませんが、ふつうは `tabindex="-1"`）は、その要素がキーボードの順次ナビゲーションでは到達できないことを意味します。

  > **メモ:** tabindex="-1"` は、<kbd>Tab</kbd> キーで直接ナビゲートされるべきではないが、キーボードフォーカスを設定する必要のある要素に有益な場合があります。例としては、表示されたときにフォーカスされるべき画面外のモーダルウィンドウや、誤ったフォームを送信したときに直ちにフォーカスされるべきフォーム送信エラーメッセージなどが挙げられます。

- `tabindex="0"` は、要素がキーボードの順次ナビゲーションで、`tabindex` が正の値の要素の後にフォーカスを持つことが可能であることを意味します。これらの要素のフォーカスナビゲーション順は、文書のソース内の順序で定義されます。
- 正の数は、要素がキーボードの順次ナビゲーションでフォーカスを持つことが可能であり、その順序は数値で定義されることを表します。つまり、 `tabindex="4"` は `tabindex="5"` よりも前にフォーカスが来ますが、 `tabindex="3"` よりも後だということです。複数の要素に同じ正の数の `tabindex` が指定された場合は、文書のソース内の互いの位置に従った順序になります。 `tabindex` の最大値は 32767 です。
- もし `tabindex` 属性が値なしで記述された場合、その要素をフォーカス可能にするかどうかは、ユーザーエージェントが決定します。

  > **警告:** `tabindex` の値として、`0` と `-1` のみを使用することをお勧めします。`tabindex` の値を `0` より大きくしたり、フォーカス可能な HTML 要素の順序を変更できる CSS プロパティ（[フレックスアイテムの並べ替え](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)）を使用したりしないようにしましょう。これは、キーボードによるナビゲーションや支援技術を使用している人にとって、ページのコンテンツを操作することが難しくなります。代わりに、論理的な順序で要素を記述してください。

フォーカス可能な HTML 要素の中には、[ユーザーエージェント](/ja/docs/Glossary/User_agent)によって、`tabindex` に `0` の既定値が与えられるものがあります。これらの要素は `href` 属性を持つ {{HTMLElement("a")}} または {{HTMLElement("area")}}、{{HTMLElement("button")}}、{{HTMLElement("frame")}} {{deprecated_inline}}、{{HTMLElement("iframe")}}、{{HTMLElement("input")}}、{{HTMLElement("object")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}}、SVG の {{SVGElement("a")}} 要素、あるいは {{HTMLElement("details")}} 要素の概要を提供する {{HTMLElement("summary")}} 要素があります。開発者は既定の動作を変更しない限り、これらの要素に `tabindex` 属性を追加しないでください（例えば、負の値を記載すると、フォーカスされたナビゲーション順序から要素が削除されます）。

> **警告:** tabindex 属性は {{HTMLElement("dialog")}} 要素に使用してはいけません。

## アクセシビリティの考慮事項

キーボード入力で対話的にフォーカスを設定できるようにするために、 [対話型コンテンツ](/ja/docs/Web/HTML/Content_categories#対話型コンテンツ)ではないものに `tabindex` 属性を組み合わせて使用することは避けてください。例えば、 {{HTMLElement("button")}} 要素を使用する代わりに {{HTMLElement("div")}} 要素を使用してボタンを記述する場合などです。

対話的要素でないものを使用して対話的コンポーネントを記述すると、[アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#アクセシビリティの_api_群)に掲載されません。これは、支援技術によって移動や操作を行うことを阻害します。このようなコンテンツは、代わりに（{{HTMLElement("a")}}、{{HTMLElement("button")}}、{{HTMLElement("details")}}、{{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} などの）対話型要素を使用して意味的に記述するべきです。これらの要素には、 [ARIA](/ja/docs/Web/Accessibility/ARIA) によって管理しなければならないアクセシビリティにステータスを伝える、組み込みのロールと状態があります。

- [Using the tabindex attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
- {{domxref("HTMLElement.tabIndex")}} は、この属性を反映します。
- `tabindex` に関するアクセシビリティの問題について、 Adrian Roselli による [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) を参照。
