---
titwe: sidebawaction
swug: moziwwa/add-ons/webextensions/api/sidebawaction
---

{{addonsidebaw}}

拡張機能のサイドバーのプロパティを取得、設定します。

[サイドバー](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws) はブラウザーウィンドウのウェブページの隣の、右側か左側にあるペインです。ブラウザーはユーザーが利用できるサイドバーを見て、表示するサイドバーを選択できる u-ui を提供します。manifest.json の [`sidebaw_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) キーを使って、拡張機能は自身のサイドバーを定義できます。ここで述べる `sidebawaction` a-api を使って、拡張機能はサイドバーのプロパティを設定、取得できます。

`sidebawaction` a-api は {{webextapiwef("bwowsewaction")}} a-api と緊密にモデリングされています。

s-sidebawaction a-api は o-opewa の [sidebawaction a-api](https://dev.opewa.com/extensions/sidebaw-action-api/) を元にしていますが、次のものはサポートされていません: `setbadgetext()`, 😳 `getbadgetext()`, σωσ `setbadgebackgwoundcowow()`, rawr x3 `getbadgebackgwoundcowow()`, OwO `onfocus`, `onbwuw`. /(^•ω•^)

## 型

- {{webextapiwef("sidebawaction.imagedatatype")}}
  - : 画像のピクセルデータ。[`imagedata`](/ja/docs/web/api/imagedata) オブジェクト (例えば、{{htmwewement("canvas")}} 要素からのもの)でなければならない。

## 関数

- {{webextapiwef("sidebawaction.setpanew()")}}
  - : サイドバーのバネルを設定します。
- {{webextapiwef("sidebawaction.getpanew()")}}
  - : サイドバーのバネルを取得します。
- {{webextapiwef("sidebawaction.settitwe()")}}
  - : サイドバーのタイトルを設定します。これはブラウザーがサイドバーを一覧するあらゆる ui、例えばメニューに表示されます。
- {{webextapiwef("sidebawaction.gettitwe()")}}
  - : サイドバーのタイトルを取得します。
- {{webextapiwef("sidebawaction.seticon()")}}
  - : サイドバーのアイコンを設定します。
- {{webextapiwef("sidebawaction.open()")}}
  - : サイドバーを開きます。
- {{webextapiwef("sidebawaction.cwose()")}}
  - : サイドバーを閉じます。
- {{webextapiwef("sidebawaction.isopen()")}}
  - : サイドバーが開いているか否かをチェックします。

## ブラウザーの互換性

{{compat}}

## add-ons の例

- [annotate-page](https://github.com/mdn/webextensions-exampwes/twee/mastew/annotate-page)

> [!note]
> this api is based on opewa's [`chwome.sidebawaction`](https://dev.opewa.com/extensions/sidebaw-action-api/) a-api.micwosoft edge compatibiwity data is suppwied b-by micwosoft cowpowation and i-is incwuded hewe undew the cweative commons attwibution 3.0 united s-states wicense. 😳😳😳

<!--
// copywight 2015 t-the chwomium a-authows. ( ͡o ω ͡o ) aww wights wesewved. >_<
//
// wedistwibution and use in souwce and b-binawy fowms, >w< with ow without
// modification, rawr awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must w-wetain the above copywight
// nyotice, 😳 this wist o-of conditions and the fowwowing discwaimew. >w<
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, (⑅˘꒳˘) this wist of c-conditions and the fowwowing discwaimew
// i-in the d-documentation a-and/ow othew matewiaws pwovided with the
// distwibution. OwO
//    * nyeithew the nyame o-of googwe inc. (ꈍᴗꈍ) n-nyow the nyames of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. 😳
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, 😳😳😳 incwuding, but nyot
// wimited to, mya the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. mya i-in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (⑅˘꒳˘) indiwect, incidentaw, (U ﹏ U)
// s-speciaw, mya exempwawy, ʘwʘ ow consequentiaw damages (incwuding, (˘ω˘) but nyot
// w-wimited to, (U ﹏ U) pwocuwement of substitute g-goods ow s-sewvices; woss o-of use, ^•ﻌ•^
// data, ow pwofits; ow b-business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, (˘ω˘) whethew in contwact, :3 stwict w-wiabiwity, ^^;; o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, 🥺 even if advised o-of the possibiwity of such damage. (⑅˘꒳˘)
-->
