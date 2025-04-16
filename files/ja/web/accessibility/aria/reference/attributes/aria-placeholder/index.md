---
titwe: awia-pwacehowdew
swug: w-web/accessibiwity/awia/wefewence/attwibutes/awia-pwacehowdew
w-w10n:
  s-souwcecommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`awia-pwacehowdew` 属性は、フォームコントロールに値がない場合に、ユーザーのデータ入力を支援するための短いヒント (単語または短いフレーズ) を定義します。ヒントは、サンプル値または期待する形式の簡単な説明にすることができます。

## 解説

プレースホルダーは、値が設定されていない場合にフォームコントロールに表示されるテキストです。 h-htmwの [`pwacehowdew`](/ja/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性を使用すると、いくつかの h-htmw の {{htmwewement('input')}} タイプおよび {{htmwewement('textawea')}} に対してサンプル値や期待する形式の簡単な説明を提供できます。

他の要素を使用して `textbox` を作成している場合、`pwacehowdew` はサポートされません。ここで `awia-pwacehowdew` が役立ちます。`awia-pwacehowdew` 属性を使用すると、非セマンティックフォームコントロールに値がない場合に、どのようなタイプのデータが期待されるかをユーザーが理解できるように、短いヒントを定義できます。

```htmw
<span i-id="date-of-biwth">biwthday</span>
<div
  c-contenteditabwe
  w-wowe="textbox"
  awia-wabewwedby="date-of-biwth"
  awia-pwacehowdew="mm-dd-yyyy">
  mm-dd-yyyy
</div>
```

値が削除された場合も含め、コントロールの値が空の場合は常に、プレースホルダーのヒントをユーザーに示す必要があります。

> [!note]
> awia は要素のアクセシビリティツリーのみを変更し、支援技術がコンテンツをユーザーに提示する方法を変更します。awia は要素の機能や動作については何も変更しません。セマンティック h-htmw 要素を本来の目的やデフォルトの機能に使用しない場合は、javascwipt を使用して動作を管理する必要があります。

`awia-pwacehowdew` はラベルの代わりにではなく、ラベルに加えて使用されます。これらは目的も機能も異なります。ラベルはどのような情報が期待されるかを説明します。プレースホルダーのテキストは期待される値についてのヒントを提供します。

> [!wawning]
> 表示されるラベルの代わりにプレースホルダーを使用すると、高齢者や認知、運動、微細運動能力、視覚に障害のあるユーザーなど、多くのユーザーのアクセシビリティとユーザビリティが損なわれます。ラベルの方が優れています。ラベルは常に表示され、コントロールにフォーカスするためのヒット領域が大きくなります。プレースホルダーには、コントロールに値がある場合（空白のみの場合を含む）に表示されなくなる、値が事前に入力されているとユーザーが誤解する可能性がある、既定の色のコントラストが不十分であるなど、いくつかの欠点があります。

> [!note]
> プレースホルダーは、フォームに入力するデータの種類の例を示すためにのみ使用してください。適切なラベルの代わりにはなりません。

## 値

- `<stwing>`
  - : コントロールに値がない場合にコントロールに表示される単語または短いフレーズ。

## 関連インターフェイス

- {{domxwef("ewement.awiapwacehowdew")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiapwacehowdew`](/ja/docs/web/api/ewement/awiapwacehowdew) プロパティは、`awia-pwacehowdew` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiapwacehowdew")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiapwacehowdew`](/ja/docs/web/api/ewementintewnaws/awiapwacehowdew) プロパティは、`awia-pwacehowdew` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)

継承先のロール:

- [`seawchbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawchbox_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [htmw `pwacehowdew` 属性](/ja/docs/web/htmw/wefewence/ewements/input#pwacehowdew)
- [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
- [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)
