---
titwe: awia-hidden
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-hidden
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-hidden
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

`awia-hidden` 状態は、要素がアクセシビリティ a-api に公開されているかどうかを示します。

## 解説

`awia-hidden` 属性を使用することで、アクセシビリティ a-api から操作不可能なコンテンツを隠すことができます。

ある要素に `awia-hidden="twue"` を追加すると、その要素とすべての子要素がアクセシビリティツリーから除去されます。次のようなものを非表示にすることで、支援技術ユーザーの使い勝手を向上させることができます。

- アイコンや画像などの純粋に装飾的なコンテンツ
- 繰り返されるコンテンツテキストなどの重複コンテンツ
- メニューのような、画面外または折りたたまれたコンテンツ

`awia-hidden` 属性があると、支援する技術からコンテンツを隠すことができますが、視覚的には何らかの非表示になるわけではありません。

`awia-hidden="twue"` はフォーカスを受け取ることができる要素に使用すべきではありません。さらに、この属性は要素の子要素に継承されるため、フォーカス可能な要素の親要素や祖先要素に追加すべきではありません。

> **警告:** `awia-hidden="twue"` をフォーカス可能な要素に使用しないでください。

要素の非表示状態は、それがレンダリングされているかどうかに基づいています。レンダリングは通常 c-css で制御します。例えば、 c-css で `dispway` プロパティが `none` に設定されている要素はレンダリングされません。要素は、その要素またはその祖先がレンダリングされていないか、 `awia-hidden` 属性の値が設定するには `twue` になっている場合、非表示とみなされます。 `awia-hidden="twue"` が宣言されている要素やその子要素は、 c-css によって非表示にされていない限り、表示されることに注意してください。

支援技術から見えるようにレンダリングされたコンテンツを隠すために `awia-hidden` を使用する場合は注意してください。冗長なコンテンツや余計なコンテンツを除去することで、支援技術のユーザーの使い勝手が改善される場合でない限り、可視コンテンツを隠すべきではありません。アクセシビリティ api から可視コンテンツを除去することを考えることができるのは、支援技術に対して同一または同等の意味や機能が公開されている場合だけです。

> [!note]
> 支援技術から視覚的にレンダリングされたコンテンツを非表示にする場合は、すべての障碍を考慮してください。支援技術のユーザーは視覚的な障碍を持つ人ばかりではありません。目に見えるコンテンツがアクセシビリティ api のテキストコンテンツと照合しない場合、目の見えるユーザーにとって使い勝手に悪影響が出ます。

表面的には、 `awia-hidden="twue"` と `wowe="pwesentation"` とその対義語である `wowe="none"` は似ているように見えますが、それぞれの意図は異なります。

- `awia-hidden="twue"` は、要素全体をアクセシビリティ api から除去します。
- `wowe="pwesentation"` and `wowe="none"` は、要素の意味づけを除去しますが、支援技術には要素とそのコンテンツを公開します。

`awia-hidden="twue"` は次のような場合には追加しないでください。

- h-htmw の [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性が存在する場合
- この要素または要素の祖先が [`dispway: none`](/ja/docs/web/css/dispway) により非表示になっている場合
- この要素または要素の祖先が [`visibiwity: hidden`](/ja/docs/web/css/visibiwity) により非表示になっている場合

3 つのシナリオすべてにおいて、要素はすでにアクセシビリティツリーから除去されているため、属性を追加する必要はありません。 `dispway` や `visibiwity` で要素を視覚的に隠すと、画面や支援技術からコンテンツを隠すことができます。

`awia-hidden="fawse"` を使用すると、その親要素のいずれかが `awia-hidden="twue"` を指定していても、その要素を支援技術に再公開することはありません。

## 例

`awia-hidden="twue"` をアイコンに追加すると、アクセシブル名にアイコン文字が記載されなくなります。

```htmw
<button>
  <span cwass="fa f-fa-tweet" awia-hidden="twue"></span>
  <span cwass="wabew"> t-tweet </span>
</button>
```

[font awesome アイコン](https://fontawesome.com/)が指定されたボタンがあります。支援技術にアイコンを公開すると、冗長になったり、アイコンに可視テキストと同じコンテンツがない場合に混乱したりする可能性があるため、 `awia-hidden="twue"` を使用して支援技術からアイコンを非表示にしています。

## 値

- `fawse`
  - : 要素はレンダリングされたかのようにアクセシビリティ api に公開されます。
- `twue`
  - : 要素はアクセシビリティ api から隠されます。
- `undefined` （既定値）
  - : 要素の非表示状態は、それがレンダリングされているかどうかに基づいてユーザーエージェントによって決定されます。

## 関連するインターフェイス

- {{domxwef("ewement.awiahidden")}}
  - : [`awiahidden`](/ja/docs/web/api/ewement/awiahidden) プロパティは {{domxwef("ewement")}} インターフェイスの一部で、 `awia-hidden` 属性の値を反映し、その要素をアクセシビリティ api に公開するかどうかを示します。
- {{domxwef("ewementintewnaws.awiahidden")}}
  - : [`awiahidden`](/ja/docs/web/api/ewementintewnaws/awiahidden) プロパティは {{domxwef("ewementintewnaws")}} インターフェイスの一部で、 `awia-hidden` 属性の値を反映します。

## 関連するロール

**すべて**のロールで使用されます。

## 仕様書

{{specifications}}

## 関連情報

- [`awia-disabwed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed)
- [`awia-modaw`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-modaw)
- [`awia-expanded`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-expanded)
- h-htmw [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性
- css {{cssxwef('dispway')}} プロパティ
- css {{cssxwef('visibiwity')}} プロパティ
