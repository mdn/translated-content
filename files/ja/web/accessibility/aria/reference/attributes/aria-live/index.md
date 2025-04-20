---
title: aria-live
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-live
original_slug: Web/Accessibility/ARIA/Attributes/aria-live
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

グローバルな `aria-live` 属性は、要素が更新されることを示し、ユーザーエージェント、支援技術、ユーザーがライブリージョンから期待できる更新の種類を記述します。

## 解説

コンテンツが最初に読み込まれた後に変更されると、支援技術 (AT) ユーザーはその変更を「見る」ことができない場合があります。変更の中には重要なものもあります。また、重要でないものもあります。 `aria-live` 属性は、ユーザーに更新情報を通知し、重要性と緊急性に基づいて、AT ユーザーにコンテンツの変更を即座に通知するか、積極的に通知するか、受動的な通知をするかを開発者が選ぶことができます。

画面の一部が更新された場合、それが目立つようにスタイル設定されていれば、ほとんどの目の見えるユーザーは一般的に更新に気づきます。一方、スクリーンリーダーは一度にページの一部分にしか注目せず、その部分が更新された場所とは限りません。`aria-live` 属性は、ユーザーが開始した操作ではなく、開発者が設定したイベントをトリガーとして、AT にそのような変更を通知する方法を提供します。

```html
<div id="announce" aria-live="polite"></div>
```

`aria-live` 属性は**空の**要素に設定します。ページが更新されると、`aria-live` 属性を持つ空の要素が更新され、ユーザーに更新があったことを知らせる簡単なアナウンスが流れるはずです。

```html
<div id="announce" aria-live="polite">
  <p>このメッセージがアナウンスされます。</p>
</div>
```

アクセシビリティ API が上記のライブリージョンへの変更を認識すると、属性の値に基づいてそのライブリージョンのコンテンツをアナウンスします。要素にはフォーカスが与えられ**ません**。

ライブリージョンのコンテンツをすべて読み込ませたい場合は、[`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) を使用してください。ユーザーに再読み込みが必要な更新の部分だけを定義するには、[`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) を使用してください。更新中にアナウンスを行わないようにするには、[`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) を使用してください。

### `aria-live` 値の選び方

一部の支援技術ユーザーはライブ更新を「見る」ことができないので、`aria-live` 属性を使用して、ユーザーがどのような更新情報を得るべきかを定義します。

- 直ちに知ることができるようにする
- 利用できる機会があれば情報を提供する
- 更新された領域に集中することを選べば、積極的に情報を知ることができるようにする

`aria-live` の値は、ユーザーエージェント、支援技術、ユーザーがライブ領域から期待できる更新の種類を記述し、重要度を表現するために使用することができます。

`aria-live` の属性が `polite` に設定されている場合、支援技術は更新をユーザーに通知しますが、通常、現在のタスクを中断せず、更新の優先度は低くなります。`assertive` に設定すると、支援する技術はすぐにユーザーに更新を通知しますが、以前の更新のスピーチキューをクリアする可能性があります。

スクリーンリーダーは、ページが読み込まれるとコンテンツをバッファーに入れます。このため、最初のアクセシビリティツリーが構築された後に追加されたコンテンツは、動的なウィジェットが読み込まれる前に AT ユーザーがコンテンツを読み始めるので、気づかないかもしれません。このような場合、`aria-live="polite"` を設定することで、ページが更新されたことをユーザーに知らせることができます。

完全に生成されるページも更新を行うことができます。例えば、リアルタイムのスポーツスコア、ニュースクローラー、株式市場のティッカーのようなコンテンツです。このような更新がページの主な機能でない限り、更新のたびにユーザーに通知する必要はありませんが、ウィジェットが更新されたことを通知したいでしょう。この場合、`aria-live="off"` を設定します。これらのシナリオでは、ユーザーがライブリージョンに集中していない限り、更新を通知する理由はありません。

ライブ更新の中には、重要で時間に敏感なものがあります。例えば、コンサートのチケットを販売しており、ユーザーが購入できる時間が限られている場合、アクティビティが小康状態になるまで待って、時間が迫っている（または既に経過している）ことを指示したくありません。可能な限り早く情報を伝える必要がある場合は、`aria-live="assertive"`を設定します。更新された情報が[`alert`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)である場合、`aria-live`属性は必要ありません。

この制限時間シナリオでは、アクセシビリティを確保するために、[ユーザーが利用できる時刻を延長したり、タイマーを完全にオフにする方法を提供する](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html)必要もあります。

### `aria-live` の使用

ライブリージョンは要素とそのすべての子孫を含みます。コンテンツの更新時に設定されていなかった場合、`aria-live` の値は有効な `aria-live` 属性の値が設定されている最も近い祖先から決まります。`off` に設定されている場合、または更新された要素と DOM ツリー内のすべての祖先ノードで属性が完全に除外されている場合、ユーザーには通知されません。しかし、ライブリージョンに移動した場合、ユーザーは更新を聞くことができます。

> [!WARNING]
> 中断はユーザーを混乱させたり、現在の課題を完了させなくさせる可能性があるため、`assertive` の値は緊急でない限り使用しないでください。

## 値

- `assertive`
  - : その領域への更新が最も優先度が高く、ユーザーにすぐに表示されるべきであることを示します。
- `off` （既定値）
  - : ユーザーがその領域にフォーカスしていない限り、その領域の更新をユーザーに表示**しない**ことを示します。
- `polite`
  - : 領域の更新は、現在の文を話し終わるときや、ユーザーが入力を中断したときなど、次の猶予のある機会に表示することを示します。

## 関連するインターフェイス

- {{domxref("Element.ariaLive")}}
  - : [`ariaLive`](/ja/docs/Web/API/Element/ariaLive) プロパティは、{{domxref("Element")}} インターフェイスの一部で、この `aria-live` 属性の値を反映します。
- {{domxref("ElementInternals.aria-live")}}
  - : [`ariaLive`](/ja/docs/Web/API/Element/ariaLive) プロパティは、{{domxref("ElementInternals")}} インターフェイスの一部で、この `aria-live` 属性の値を反映します。

## 関連するロール

**すべての**ロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`alert` role](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
