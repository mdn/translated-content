---
title: aria-atomic
slug: Web/Accessibility/ARIA/Attributes/aria-atomic
l10n:
  sourceCommit: f6d04a43eadf5ab26a3488942dfb318b58234eb5
---

ARIA ライブリージョンにおいて、グローバルな `aria-atomic` 属性は、[`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性で定義された変更通知に基づいて、スクリーンリーダーなどの支援技術が変更された領域をすべて表示するのか、一部だけを表示するのかを示します。

## 解説

ライブリージョンとは、ユーザーの操作の有無にかかわらず、ユーザーのフォーカスが他の場所にあるときに更新されるウェブページの部分のことです。ユーザーのフォーカスの外側で更新されるため、スクリーンリーダーなどの支援技術は、ユーザーに更新を報告するために更新を「見る」ことができません。 WAI-ARIA には、開発者がこれらのライブ領域を識別し、支援技術に処理方法を指示するためのプロパティとして、 [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-live)、[`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)、[`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-busy)、`aria-atomic` の 4 つがあります。

ライブリージョンのコンテンツが変更されると、 DOM は変更された要素からその祖先を走査し、 `aria-atomic` が設定された最初の要素を探します。これがユーザーに表示するコンテンツを決定します。

祖先が明示的に `aria-atomic` を設定していない場合、更新されたライブリージョンのコンテンツのノードのみが読み取られます。 `aria-atomic` を完全に除外することと、 ARIA ライブリージョンの祖先ノードを明示的に `aria-atomic="false"` で設定することの違いは、明示的に `aria-atomic="false"` を設定すると、スクリーンリーダーが祖先の連鎖を上がらなくなることです。どちらも更新されたノードだけが読み取られます。 `aria-atomic="true"` に設定すると、更新されたノードの `label` がある場合はそれを含めるために、変更されたリージョン全体が表示されます。

## 値

- `false` (既定値)
  - : 変更されたノードのみを表示します。
- `true`
  - : 作者が定義したラベルが存在する場合はそれを含め、変更されたリージョン全体を全体として表示します。

## 関連付けられたロール

**すべての**[ロール](/ja/docs/Web/Accessibility/ARIA/Roles)で使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- [Event.ariaAtomic](/ja/docs/Web/API/Element/ariaAtomic)

<section id="Quick_links">

1. [**WAI-ARIA 状態とプロパティ**](/ja/docs/Web/Accessibility/ARIA/Attributes)

   {{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Attributes")}}

</section>
