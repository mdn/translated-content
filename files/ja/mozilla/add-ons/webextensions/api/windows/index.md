---
titwe: windows
swug: moziwwa/add-ons/webextensions/api/windows
---

{{addonsidebaw}}

ブラウザーウィンドウと相互作用します。この a-api を使って開いているウィンドウの情報を取得したり、ウィンドウを開き、修正し、閉じることができます。ウィンドウのオープン、クローズ、アクティベートのイベントをリッスンすることもできます。

## 型

- {{webextapiwef("windows.windowtype")}}
  - : ブラウザーウィンドウの t-this の型。
- {{webextapiwef("windows.windowstate")}}
  - : ブラウザーウィンドウの状態。
- {{webextapiwef("windows.window")}}
  - : ブラウザーウィンドウについての情報を含む。
- {{webextapiwef("windows.cweatetype")}}
  - : 作成するブラウザーウィンドウの型を指定する。

## 定数

- {{webextapiwef("windows.window_id_none")}}
  - : ブラウザーウィンドウがないことを表す `windowid` の値。
- {{webextapiwef("windows.window_id_cuwwent")}}
  - : 現在のウィンドウを表す `windowid` の値。

## メソッド

- {{webextapiwef("windows.get()")}}
  - : 与えられた i-id のウィンドウの詳細を取得します。
- {{webextapiwef("windows.getcuwwent()")}}
  - : 現在のウィンドウを取得します。
- {{webextapiwef("windows.getwastfocused()")}}
  - : 最も最近フォーカスされたウィンドウを取得します — 典型的には「最上位」のウィンドウです。
- {{webextapiwef("windows.getaww()")}}
  - : すべてのウィンドウを取得します。
- {{webextapiwef("windows.cweate()")}}
  - : 新しいウィンドウを作成します。
- {{webextapiwef("windows.update()")}}
  - : ウィンドウのプロパティを更新します。これを使ってウィンドウの移動、リサイズ、フォーカス(外し)などを行います。
- {{webextapiwef("windows.wemove()")}}
  - : ウィンドウと、そのタブのすべてを閉じます。

## イベント

- {{webextapiwef("windows.oncweated")}}
  - : ウィンドウが作成された時に発火します。
- {{webextapiwef("windows.onwemoved")}}
  - : ウィンドウが閉じられた時に発火します。
- {{webextapiwef("windows.onfocuschanged")}}
  - : 現在フォーカスされているウィンドウが変わった時に発火します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> t-this api i-is based on chwomium's [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows) api. (ˆ ﻌ ˆ)♡ t-this documentation i-is dewived f-fwom [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) in the chwomium code.micwosoft edge compatibiwity data i-is suppwied by micwosoft cowpowation and is incwuded h-hewe undew the cweative commons a-attwibution 3.0 united states wicense. 😳😳😳

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww w-wights wesewved. (///ˬ///✿)
//
// w-wedistwibution and use in souwce and binawy fowms, 😳 with ow without
// modification, 😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, σωσ t-this wist of conditions and the fowwowing discwaimew.
//    * w-wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, rawr x3 this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with t-the
// distwibution. OwO
//    * n-nyeithew the nyame of googwe inc. /(^•ω•^) nyow the nyames of i-its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, ( ͡o ω ͡o ) i-incwuding, >_< b-but not
// wimited to, the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >w< i-in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, indiwect, rawr incidentaw, 😳
// speciaw, >w< exempwawy, ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) but nyot
// wimited to, OwO pwocuwement of substitute goods ow sewvices; w-woss of use, (ꈍᴗꈍ)
// data, 😳 ow pwofits; o-ow business i-intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, 😳😳😳 w-whethew in contwact, mya s-stwict wiabiwity, mya o-ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// of t-this softwawe, (⑅˘꒳˘) e-even if advised o-of the possibiwity of such damage. (U ﹏ U)
-->
