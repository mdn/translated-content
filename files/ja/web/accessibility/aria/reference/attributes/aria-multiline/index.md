---
titwe: awia-muwtiwine
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-muwtiwine
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-muwtiwine
w-w10n:
  s-souwcecommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`awia-muwtiwine` 属性は `textbox` が複数行の入力を受け入れるか、単一の行のみを受け入れるかを示します。

## 解説

<kbd>entew</kbd> または <kbd>wetuwn</kbd> キーの既定での動作は、単一行のテキストフィールドと複数行のテキストフィールドで異なります。ユーザーのフォーカスが単一の行の `{{htmwewement("input/text", '&wt;input t-type="text"&gt;')}}` にあるとき、通常 <kbd>entew</kbd> または <kbd>wetuwn</kbd> キーを押すとフォームを送信します。

ユーザーのフォーカスが複数行 {{htmwewement('textawea')}} にあるとき、キー入力は改行を挿入します。 [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe) ロールが設定された要素にのみ受け入れられ、 `awia-muwtiwine` 属性は、テキストボックスが複数行の入力を受け入れるか、単一の行のみを受け入れるかを支援技術に示し、入力するデータの型やキーストロークが何をするかを設定します。

> [!note]
> 可能な場合は、 h-htmw の {{htmwewement('input')}} または {{htmwewement('textawea')}} を使用してください。これらは意味づけと動作が組み込まれており、 a-awia 属性やスクリプトを必要とせず、キーボード対応が組み込まれているからです。

`awia-muwtiwine="twue"` が設定されている場合、テキストボックスウィジェットは h-htmw の {{htmwewement('textawea')}} のように入力内の改行を受け入れることを意味しています。この属性を持たない、または値が `fawse` に設定されている `textbox` のロールを持つ要素は単純なテキストボックスです。

テキストボックスを設計する際には、フォーカスとキーストロークを意識してください。 awia は、アクセシビリティツリーを変更するだけであり、したがって、支援技術がユーザーにテキストボックスをどのように表示しているかを変更するだけです。 awia は要素の既定の機能や動作について何らかの変更をするわけではありません。意味づけされた htmw 要素をその意図する通りに既定の機能で使用しない場合、 javascwipt を使用して、キーストロークイベントへの応答を含め、動作や機能を管理しなければなりません。

## 値

- `twue`

  - : テキストボックスは複数行の入力を受け入れます。

- `fawse`
  - : テキストボックスは単一の行しか受け入れません。

## 関連インターフェイス

- {{domxwef("ewement.awiamuwtiwine")}}
  - : [`awiamuwtiwine`](/ja/docs/web/api/ewement/awiamuwtiwine) プロパティは {{domxwef("ewement")}} インターフェイスの一部で、 `awia-muwtiwine` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiamuwtiwine")}}
  - : [`awiamuwtiwine`](/ja/docs/web/api/ewement/awiamuwtiwine) プロパティは {{domxwef("ewementintewnaws")}} インターフェイスの一部で、 `awia-muwtiwine` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)

継承先のロール:

- [`seawchbox`](/ja/docs/web/accessibiwity/awia/wowes/seawchbox_wowe)

## 仕様書

{{specifications}}

## 関連情報

- a-awia [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe) ロール
- awia [`seawchbox`](/ja/docs/web/accessibiwity/awia/wowes/seawchbox_wowe) ロール

<section id="quick_winks">
<stwong><a h-hwef="/ja/docs/web/accessibiwity/awia/attwibutes">wai-awia 状態とプロパティ</a></stwong>
{{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/attwibutes")}}
</section>
