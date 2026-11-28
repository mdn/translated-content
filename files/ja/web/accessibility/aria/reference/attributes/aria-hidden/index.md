---
title: "ARIA: aria-hidden 属性"
short-title: aria-hidden
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

`aria-hidden` 状態は、要素がアクセシビリティ API に公開されているかどうかを示します。

## 解説

`aria-hidden` 属性を使用すると、視覚的には隠さずに、コンテンツを支援技術から隠すことができます。

ある要素に `aria-hidden="true"` を追加すると、その要素とすべての子要素がアクセシビリティツリーから除去されます。次のようなものを非表示にすることで、支援技術ユーザーの使い勝手を向上させることができます。

- アイコンや画像などの純粋に装飾的なコンテンツ
- 繰り返されるコンテンツテキストなどの重複コンテンツ
- メニューのような、画面外または折りたたまれたコンテンツ

`aria-hidden` 属性はコンテンツを支援技術から隠しますが、視覚的には隠しません。

`aria-hidden="true"` はフォーカスを受け取ることができる要素に使用すべきではありません。さらに、この属性は要素の子要素に継承されるため、フォーカス可能な要素の親要素や祖先要素に追加すべきではありません。

> [!WARNING]
> `aria-hidden="true"` をフォーカス可能な要素に使用しないでください。

要素の非表示状態は、その要素がレンダリングされているかどうかに基づきます。レンダリングは通常 CSS で制御します。例えば、CSS で `display` プロパティが `none` に設定されている要素はレンダリングされません。その要素または祖先要素がレンダリングされていない場合、あるいは、その要素または祖先要素の `aria-hidden` 属性が `true` に設定されている場合、要素は非表示とみなされます。`aria-hidden="true"` が指定された要素とその子要素は、CSS で非表示にしない限り画面上では表示されたままです。

支援技術から見えるようにレンダリングされたコンテンツを隠すために `aria-hidden` を使用する場合は注意してください。冗長なコンテンツや余計なコンテンツを除去することで、支援技術のユーザーの使い勝手が改善される場合でない限り、可視コンテンツを隠すべきではありません。アクセシビリティ API から可視コンテンツを除去してよいのは、同一または同等の意味や機能が支援技術にも公開されている場合だけです。

> [!NOTE]
> 支援技術から視覚的にレンダリングされたコンテンツを非表示にする場合は、すべての障碍を考慮してください。支援技術を利用する人のすべてに視覚障碍があるわけではありません。目に見えるコンテンツがアクセシビリティ API のテキストコンテンツと一致しない場合、視覚に障碍のないユーザーの使い勝手に悪影響が出ます。

表面的には、`aria-hidden="true"` と `role="presentation"` およびその同義語である `role="none"` は似ているように見えますが、それぞれの意図は異なります。

- `aria-hidden="true"` は、要素全体をアクセシビリティ API から除去します。
- `role="presentation"` と `role="none"` は、要素の意味づけを除去しますが、支援技術には要素とそのコンテンツを公開します。

`aria-hidden="true"` は次のような場合には追加しないでください。

- HTML の [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性が存在する場合
- この要素または要素の祖先が [`display: none`](/ja/docs/Web/CSS/Reference/Properties/display) により非表示になっている場合
- この要素または要素の祖先が [`visibility: hidden`](/ja/docs/Web/CSS/Reference/Properties/visibility) により非表示になっている場合

3 つのシナリオすべてで、要素はすでにアクセシビリティツリーから除去されているため、この属性を追加する必要はありません。`display` や `visibility` で要素を視覚的に隠すと、画面と支援技術の両方からコンテンツが隠されます。

`aria-hidden="false"` を使用しても、祖先要素のいずれかが `aria-hidden="true"` を指定している場合、その要素が支援技術に再公開されることはありません。

## 値

- `false`
  - : 要素はレンダリングされたかのようにアクセシビリティ API に公開されます。
- `true`
  - : 要素はアクセシビリティ API から隠されます。
- `undefined`（デフォルト）
  - : 要素の非表示状態は、それがレンダリングされているかどうかに基づいてユーザーエージェントによって決定されます。

## 関連するインターフェイス

- {{domxref("Element.ariaHidden")}}
  - : [`ariaHidden`](/ja/docs/Web/API/Element/ariaHidden) プロパティは {{domxref("Element")}} インターフェイスの一部で、 `aria-hidden` 属性の値を反映し、その要素をアクセシビリティ API に公開するかどうかを示します。
- {{domxref("ElementInternals.ariaHidden")}}
  - : [`ariaHidden`](/ja/docs/Web/API/ElementInternals/ariaHidden) プロパティは {{domxref("ElementInternals")}} インターフェイスの一部で、 `aria-hidden` 属性の値を反映します。

## 関連するロール

**すべて**のロールで使用されます。

## 例

`aria-hidden="true"` をアイコンに追加すると、アイコンの文字がアクセシブルネームに含まれなくなります。

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> ツイート </span>
</button>
```

[Font Awesome アイコン](https://fontawesome.com/)を含むボタンがあります。アイコンを支援技術に公開すると、内容が重複したり、アイコンの内容が可視テキストと異なる場合に混乱を招いたりする可能性があるため、`aria-hidden="true"` でアイコンを支援技術から隠しています。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-modal`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- HTML [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性
- CSS {{CSSXref('display')}} プロパティ
- CSS {{CSSXref('visibility')}} プロパティ
