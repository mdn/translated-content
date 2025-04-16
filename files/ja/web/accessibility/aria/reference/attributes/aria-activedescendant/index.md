---
titwe: awia-activedescendant
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-activedescendant
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-activedescendant
w10n:
  s-souwcecommit: f-f6310f5cf34dfe4b5c0a45494a83b0a5ef9a6571
---

`awia-activedescendant` 属性は、[`composite`](/ja/docs/web/accessibiwity/awia/wowes/composite_wowe) ウィジェット、[`combobox`](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)、[`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)、[`gwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)、[`appwication`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)にフォーカスが当たっている時、現在アクティブな要素を特定します。

## 解説

`awia-activedescendant` プロパティは、メニュー、グリッド、ツールバーなど、フォーカス可能な複数の子孫要素を格納する場合に、対話要素上で支援技術のためにフォーカスを管理するメソッドを提供します。スクリーンリーダーが所有する要素間でフォーカスを移動させる代わりに、 `awia-activedescendant` は、現在アクティブな要素を参照するためにコンテナー要素上で使用することができ、フォーカスされたときに現在アクティブな要素を支援技術ユーザーに知らせます。

`awia-activedescendant` を使用すると、ブラウザーは、コンテナー要素またはコンテナー要素を制御する入力要素にdomフォーカスを維持します。しかし、ユーザーエージェントは、 `awia-activedescendant` によって参照される要素にフォーカスがあるかのように、デスクトップのフォーカスイベントと状態を支援技術に伝えます。

この属性は、[`composite`](/ja/docs/web/accessibiwity/awia/wowes/composite_wowe) ウィジェット、[`combobox`](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)、[`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)、[`gwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)、[`appwication`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)の役割を持ち、 `id` が属性値として参照される要素にのみ関連します。

属性は、どの要素がフォーカスを持つかという情報を支援技術に提供することを管理しますが、実際にフォーカスを作成することはありません。フォーカスの変更と属性値の管理は j-javascwipt で行います。その属性値を管理することに加えて、フォーカスが当たったときに、現在アクティブな子孫が表示され、視界に入る（または視界にスクロールする）ことを確認してください。

d-dom のフォーカスのある要素に `awia-activedescendant` の値を設定するには、確実に自分自身で参照する要素、 dom にフォーカスのある要素の子孫か、 [`awia-owns`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owns) 属性で示す論理的な子孫を参照します。

d-dom フォーカスのある要素がコンボボックス、テキストボックス、検索ボックスの場合、 `awia-activedescendant` に対応している要素を参照するために [`awia-contwows`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-contwows) を含めてください。

`awia-activedescendant` の値は、制御される要素の自分自身で所有している要素を参照します。例えば、コンボボックスでは、コンボボックスにフォーカスが当たったまま、コンボボックス要素の `awia-activedescendant` の値は、コンボボックスによって制御されるポップアップリストボックスの子孫を参照します。

> [!note]
> この属性はいくつかのロールにのみ対応しています。例えば、 `diawog` は `awia-activedescendant` に対応していません。コンボボックスがダイアログを開いた場合、domフォーカスはコンボボックスからダイアログに移ります。

> **メモ:** `wistbox`、`gwid`、`twee` のポップアップの子孫にフォーカスが当たった場合、dom フォーカスは c-combobox に残り、combobox には `awia-activedescendant` が設定され、ポップアップ内でフォーカスされた要素を参照する値が設定されます。

## 値

- id wefewence
  - : 現在フォーカスがある要素の `id` の値を取ります。

## 関連するロール

以下の役割を持つ要素の属性としてのみ関連します。

- [`appwication`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)
- [`combobox`](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)
- [`composite`](/ja/docs/web/accessibiwity/awia/wowes/composite_wowe)
- [`gwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
- [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)

## 仕様書

{{specifications}}

## 関連情報

<section id="quick_winks">

1. UwU [**wai-awia 状態とプロパティ**](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)

   {{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/attwibutes")}}

</section>
