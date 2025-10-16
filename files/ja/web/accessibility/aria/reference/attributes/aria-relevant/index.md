---
title: aria-relevant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-relevant
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

ARIA ライブリージョンで使用されるグローバルな `aria-relevant` 属性は、ライブリージョン内の [アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree) が変更されたときにユーザーエージェントがトリガーする通知を示します。

## 解説

[ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) は、ユーザーの注意が他の場所にある場合に更新されるウェブページの領域です。更新がユーザーのキーボードフォーカスの範囲外にある場合、スクリーンリーダーなどの支援技術はライブリージョン領域を使用してユーザーに更新を報告します。

ライブリージョンの例には、ニュースマーキー、株式相場表示機、チャットウィンドウ、スコアボードなどがあります。これらは、ユーザーの操作なしで更新されます。一部の更新は、ユーザーが知っておくべき重要なものです。関連性があるものもあれば、そうではないものもあります。`aria-relevant` は、[`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) リージョンにどのような種類の変更が発生したか、およびどの変更が関連性があり、通知する必要があるかを説明するために使用されます。

値は `additions`、`removals`、および `text` を含む変更タイプのスペース区切りのリストであり、省略形である `all` は 3 つ全てを意味します。

`aria-relevant` が定義されていない場合、値は値が定義されている最も近い祖先から継承されます。継承された値は追加されるわけではありません。子孫要素に与えられた値は、祖先要素から継承された値を完全に上書きします。ライブリージョンに `aria-relevant` 属性が設定されておらず、祖先に属性が設定されていない場合、デフォルトで `additions text` になります。つまり、要素ノードがライブリージョン内のアクセシビリティツリーに追加されることと、テキストコンテンツまたは代替テキストがライブリージョンのアクセシビリティツリー内の子孫に追加されることを意味します。これは、一般にテキストの変更とノードの追加は関連しますが、ノードの削除は関連しないためです。

サポートされている値ではありませんが、`none` のような値が最も妥当な場合は、ライブリージョンにしないでください。

`removals` と `all` の値は、控えめに使用する必要があります。例えばワールドカップでゴールが決まった場合、新しいスコア（追加）は重要ですが、古い値（削除）は重要ではありません。支援技術にコンテンツの削除を通知する必要があるのは、選手が試合から外された場合など、コンテンツの削除が重要な変更を表す場合のみです。

## 値

- `additions`
  - : 要素ノードが、ライブリージョン内のアクセシビリティツリーに追加されます。
- `all`
  - : `additions removals text` の省略形。
- `removals`
  - : ライブリージョン内のテキストコンテンツ、代替テキスト、または要素ノードが、アクセシビリティツリーから削除されます。
- `text`
  - : テキストコンテンツまたは代替テキストが、ライブリージョンのアクセシビリティツリーの任意の子孫に追加されます。

## 関連インターフェイス

- {{domxref("Element.ariaRelevant")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaRelevant`](/ja/docs/Web/API/Element/ariaRelevant) プロパティは、`aria-relevant` 属性の値を反映します。
- {{domxref("ElementInternals.ariaRelevant")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaRelevant`](/ja/docs/Web/API/ElementInternals/ariaRelevant) プロパティは、`aria-relevant` 属性の値を反映します。

## 関連付けられたロール

**すべて**のロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)
