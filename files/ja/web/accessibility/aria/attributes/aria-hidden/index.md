---
title: aria-hidden
slug: Web/Accessibility/ARIA/Attributes/aria-hidden
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`aria-hidden` 状態は、要素がアクセシビリティ API に公開されているかどうかを示します。

## 解説

`aria-hidden` 属性を使用することで、アクセシビリティ API から操作不可能なコンテンツを隠すことができます。

ある要素に `aria-hidden="true"` を追加すると、その要素とすべての子要素がアクセシビリティツリーから除去されます。次のようなものを非表示にすることで、支援技術ユーザーの使い勝手を向上させることができます。

- アイコンや画像などの純粋に装飾的なコンテンツ
- 繰り返されるコンテンツテキストなどの重複コンテンツ
- メニューのような、画面外または折りたたまれたコンテンツ

`aria-hidden` 属性があると、支援する技術からコンテンツを隠すことができますが、視覚的には何らかの非表示になるわけではありません。

`aria-hidden="true"` はフォーカスを受け取ることができる要素に使用すべきではありません。さらに、この属性は要素の子要素に継承されるため、フォーカス可能な要素の親要素や祖先要素に追加すべきではありません。

> **警告:** `aria-hidden="true"` をフォーカス可能な要素に使用しないでください。

要素の非表示状態は、それがレンダリングされているかどうかに基づいています。レンダリングは通常 CSS で制御します。例えば、 CSS で `display` プロパティが `none` に設定されている要素はレンダリングされません。要素は、その要素またはその祖先がレンダリングされていないか、 `aria-hidden` 属性の値が設定するには `true` になっている場合、非表示とみなされます。 `aria-hidden="true"` が宣言されている要素やその子要素は、 CSS によって非表示にされていない限り、表示されることに注意してください。

支援技術から見えるようにレンダリングされたコンテンツを隠すために `aria-hidden` を使用する場合は注意してください。冗長なコンテンツや余計なコンテンツを除去することで、支援技術のユーザーの使い勝手が改善される場合でない限り、可視コンテンツを隠すべきではありません。アクセシビリティ API から可視コンテンツを除去することを考えることができるのは、支援技術に対して同一または同等の意味や機能が公開されている場合だけです。

> [!NOTE]
> 支援技術から視覚的にレンダリングされたコンテンツを非表示にする場合は、すべての障碍を考慮してください。支援技術のユーザーは視覚的な障碍を持つ人ばかりではありません。目に見えるコンテンツがアクセシビリティ API のテキストコンテンツと照合しない場合、目の見えるユーザーにとって使い勝手に悪影響が出ます。

表面的には、 `aria-hidden="true"` と `role="presentation"` とその対義語である `role="none"` は似ているように見えますが、それぞれの意図は異なります。

- `aria-hidden="true"` は、要素全体をアクセシビリティ API から除去します。
- `role="presentation"` and `role="none"` は、要素の意味づけを除去しますが、支援技術には要素とそのコンテンツを公開します。

`aria-hidden="true"` は次のような場合には追加しないでください。

- HTML の [`hidden`](/ja/docs/Web/HTML/Global_attributes/hidden) 属性が存在する場合
- この要素または要素の祖先が [`display: none`](/ja/docs/Web/CSS/display) により非表示になっている場合
- この要素または要素の祖先が [`visibility: hidden`](/ja/docs/Web/CSS/visibility) により非表示になっている場合

3 つのシナリオすべてにおいて、要素はすでにアクセシビリティツリーから除去されているため、属性を追加する必要はありません。 `display` や `visibility` で要素を視覚的に隠すと、画面や支援技術からコンテンツを隠すことができます。

`aria-hidden="false"` を使用すると、その親要素のいずれかが `aria-hidden="true"` を指定していても、その要素を支援技術に再公開することはありません。

## 例

`aria-hidden="true"` をアイコンに追加すると、アクセシブル名にアイコン文字が記載されなくなります。

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

[Font Awesome アイコン](https://fontawesome.com/)が指定されたボタンがあります。支援技術にアイコンを公開すると、冗長になったり、アイコンに可視テキストと同じコンテンツがない場合に混乱したりする可能性があるため、 `aria-hidden="true"` を使用して支援技術からアイコンを非表示にしています。

## 値

- `false`
  - : 要素はレンダリングされたかのようにアクセシビリティ API に公開されます。
- `true`
  - : 要素はアクセシビリティ API から隠されます。
- `undefined` （既定値）
  - : 要素の非表示状態は、それがレンダリングされているかどうかに基づいてユーザーエージェントによって決定されます。

## 関連するインターフェイス

- {{domxref("Element.ariaHidden")}}
  - : [`ariaHidden`](/ja/docs/Web/API/Element/ariaHidden) プロパティは {{domxref("Element")}} インターフェイスの一部で、 `aria-hidden` 属性の値を反映し、その要素をアクセシビリティ API に公開するかどうかを示します。
- {{domxref("ElementInternals.ariaHidden")}}
  - : [`ariaHidden`](/ja/docs/Web/API/ElementInternals/ariaHidden) プロパティは {{domxref("ElementInternals")}} インターフェイスの一部で、 `aria-hidden` 属性の値を反映します。

## 関連するロール

**すべて**のロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-modal`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- HTML [`hidden`](/ja/docs/Web/HTML/Global_attributes/hidden) 属性
- CSS {{CSSXref('display')}} プロパティ
- CSS {{CSSXref('visibility')}} プロパティ
