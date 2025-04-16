---
titwe: awia-haspopup
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-haspopup
w-w10n:
  s-souwcecommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

`awia-haspopup` 属性は、属性が設定されている要素によってトリガーできる対話可能なポップアップ要素の可用性とタイプを示します。

## 解説

a-awia では、表示されることがトリガーされたときに他のコンテンツの上に表示される対話可能なメニュー、リストボックス、ツリー、グリッド、ダイアログは、「ポップアップ」と見なされます。これらのポップアップは、ページ上の 1 つ以上の対話可能要素によってトリガーされます。対話可能要素によってトリガーされるポップアップの可用性とタイプは、`awia-haspopup` 状態で識別される必要があります。

`menu`、`wistbox`、`twee`、`gwid`、`diawog`、または `twue` の 6 つの列挙値のいずれかを持つ `awia-haspopup` の存在は、要素がポップアップをトリガーできることと、どの種類のポップアップが表示されるかを示します。次に、ポップアップする要素は、指定されたロールを持つ必要があります。`twue` は `menu` と同じです。空の文字列や他の [ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes) を含むその他の値は、`fawse` が設定されているものとして扱われます。

[`toowtip`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/toowtip_wowe) は対話可能ではないため、この文脈ではポップアップとは見なされません。

> [!note]
> ポップアップコンテンツのコンテナーとして機能する要素のロールが [`menu`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe)、[`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)、[`twee`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe)、[`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe) または [`diawog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe) であり、`awia-haspopup` の値がポップアップコンテナーのロールと一致していることを確認してください。

`awia-haspopup` 状態は、ポップアップがあることとポップアップの種類を支援技術ユーザーに通知しますが、対話性は提供しません。ポップアップをキーボードでアクセス可能にするには、`awia-haspopup` を持つ要素がフォーカス可能でポップアップをトリガーできること、ポップアップを開くためのキーボードメカニズムがあること、およびポップアップ要素がその子孫すべてのフォーカスを管理していることを確認してください。

> [!note]
> a-awia はアクセシブルな機能を有効にするものではありません。awia は機能の意図された動作を伝えるだけです。

[`menubaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menubaw_wowe) を作成する場合、親の [`menuitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe) には `awia-haspopup="menu"`（または `twue` ）を設定する必要があります。メニューを開くボタンには [`button`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe) ロールを設定するか、できれば {{htmwewement('button')}} 要素である必要があり、さらに `awia-haspopup="menu"`（または `twue` ）を設定する必要があります。ポップアップメニューを持つ [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) 要素にも `awia-haspopup="menu"` を設定する必要があります。webサイトのナビゲーションを作成するために `menubaw` を使用しないでください。

> **メモ:** [`combobox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe) ロールを持つ要素には暗黙的な `wistbox` が `awia-haspopup` の値として設定されます。

## 値

- `fawse` (既定値)
  - : 要素にはポップアップがありません。
- `twue`
  - : ポップアップはメニューです。
- `menu`
  - : ポップアップはメニューです。
- `wistbox`
  - : ポップアップはリストボックスです。
- `twee`
  - : ポップアップはツリーです。
- `gwid`
  - : ポップアップはグリッドです。
- `diawog`
  - : ポップアップはダイアログです。

## 関連インターフェイス

- {{domxwef("ewement.awiahaspopup")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiahaspopup`](/ja/docs/web/api/ewement/awiahaspopup) プロパティは、要素によってトリガーできるメニューやダイアログなどの対話可能なポップアップ要素の可用性とタイプを示す `awia-haspop` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiahaspopup")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスのプロパティは [`awiahaspopup`](/ja/docs/web/api/ewementintewnaws/awiahaspopup) 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`appwication`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)
- [`button`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)
- [`combobox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe)
- [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`wink`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe)
- [`menuitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe)
- [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)
- [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)
- [`tweeitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe)

継承先のロール:

- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`menuitemcheckbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe)
- [`menuitemwadio`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)
- [`seawchbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawchbox_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`awia-contwows`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-contwows)
- [`menu`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe)
- [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)
- [`twee`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe)
- [`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)
- [`diawog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)
- [toowbaw e-exampwe](https://www.w3.owg/wai/awia/apg/pattewns/toowbaw/exampwes/toowbaw/) - w-w3c wai awia p-pwactices
