---
title: "ARIA: status ロール"
short-title: status
slug: Web/Accessibility/ARIA/Reference/Roles/status_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

`status` ロールは、[ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)のうち、[`alert`](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) とするほど重要ではないが、ユーザー向けの参考情報を含むものを定義します。

## 解説

`status` は[ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)の一種であり、ユーザーの現在の操作の読み上げを直ちに中断させるようなアラートを表示するほど重要ではない、参考情報を提供します。多くの場合、ステータスバーとして表示されますが、必ずしもそうであるとは限りません。

コンテンツが更新された際に、`status` にフォーカスを移さないでください。ライブリージョンは、現在のウェブページの他の領域で発生した動的な更新をユーザーに知らせることを目的としていますが、コンテキストの変更によってユーザーの現在の操作を中断させる必要はありません。フォーカスを移動させる必要がある状況では、`status` やその他のライブリージョンの使用は適切ではないと考えられます。

status ロールを持つ要素には、暗黙的に [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) の値として `polite`、および [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) の値として `true` が設定されます。

### 関連する WAI-ARIA のロール、状態、プロパティ

- [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
  - : 支援技術が、変更された範囲をすべて表示すべきか、それとも一部のみを表示すべきかを定義します。`status` ロールを持つ要素には、暗黙的に `aria-atomic` の値として `true` が設定されます。

- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : 支援技術がコンテンツの更新をユーザーに通知すべきタイミングを定義します。`status` ロールを持つ要素には、暗黙的に `aria-live` の値として `polite` が設定されます。これは、ユーザーが操作を行っていないときに、スクリーンリーダーがログ出力で変更内容を読み上げることを意味します。

- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : 一部のスクリーンリーダーは、ステータス要素の内容を読み上げる前に、その名前を読み上げます。名前が表示されている場合は、`aria-labelledby` を使用してその名前を参照してください。`aria-label` を指定することで、スクリーンリーダーが内容を読み上げる際に表示されないテキストを、ステータス要素の表示内容の前に付加することができます。ステータスに名前を付けることは必須ではないため、適切な名前がない場合は、これらの属性はどちらも省略できます。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA: `alert` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `timer` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)
