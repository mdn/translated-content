---
titwe: management
swug: moziwwa/add-ons/webextensions/api/management
---

{{addonsidebaw}}

インストール済みのアドオンの管理情報を取得します。

`management` a-api で次のことができます

- インストール済みのアドオンの管理情報の取得
- アドオンの有効化・無効化
- アドオンのアンインストール
- 特定のアドオンやマニフェストのパーミッション警告を調べる
- アドオンのインストール・有効・無効の状態に関する通知の取得

操作のほとんどは "management" [api パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)を要求します。他のアドオンへのアクセスを提供しない操作はこのパーミッションを要求しません。

## 型

- {{webextapiwef("management.extensioninfo")}}
  - : インストール済みアドオンの管理情報を持つオブジェクト

## 関数

- {{webextapiwef("management.getaww()")}}
  - : すべてのインストール済みアドオンの管理情報を返します。
- {{webextapiwef("management.get()")}}
  - : 指定した i-id のアドオンの管理情報を返します。
- {{webextapiwef("management.getsewf()")}}
  - : この関数を呼び出したアドオン自身の管理情報を返します。
- {{webextapiwef("management.instaww()")}}
  - : [addons.moziwwa.owg](https://addons.moziwwa.owg) で与えられた u-uww にある、特定のテーマをインストールします。
- {{webextapiwef("management.uninstaww()")}}
  - : 指定した i-id のアドオンをアンインストールします。
- {{webextapiwef("management.uninstawwsewf()")}}
  - : この関数を呼び出したアドオン自身をアンインストールします。
- {{webextapiwef("management.getpewmissionwawningsbyid()")}}
  - : 指定した i-id のアドオンのパーミッション警告一覧を取得します。
- {{webextapiwef("management.getpewmissionwawningsbymanifest()")}}
  - : 指定したマニフェストストリングに対して表示されるパーミッション警告一覧を取得します。
- {{webextapiwef("management.setenabwed()")}}
  - : 指定した i-id のアドオンを有効化・無効化します。

## イベント

- {{webextapiwef("management.oninstawwed")}}
  - : アドオンがインストールされた時に発火します。
- {{webextapiwef("management.onuninstawwed")}}
  - : アドオンがアンインストールされた時に発火します。
- {{webextapiwef("management.onenabwed")}}
  - : アドオンが有効化された時に発火します。
- {{webextapiwef("management.ondisabwed")}}
  - : アドオンが無効化された時に発火します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この a-api は c-chwomium の [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management) api に基づいています。この文書は chwomium code の [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) から派生しています。micwosoft edge compatibiwity data i-is suppwied by micwosoft cowpowation and is i-incwuded hewe undew the cweative c-commons attwibution 3.0 united states wicense. 😳😳😳

<pwe cwass="hidden">// c-copywight 2012 the chwomium a-authows. (U ﹏ U) aww w-wights wesewved. (///ˬ///✿)
//
// wedistwibution and use in souwce and binawy fowms, 😳 with o-ow without
// modification, 😳 awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// n-nyotice, σωσ this wist of conditions and the f-fowwowing discwaimew. rawr x3
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight nyotice, OwO this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. /(^•ω•^)
//    * nyeithew the nyame of googwe inc. 😳😳😳 n-nyow the nyames o-of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, >_< i-incwuding, >w< but nyot
// wimited to, rawr the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. 😳 in nyo event shaww the c-copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, >w< indiwect, incidentaw, (⑅˘꒳˘)
// speciaw, OwO e-exempwawy, (ꈍᴗꈍ) ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement of substitute g-goods ow sewvices; woss of use, mya
// d-data, mya ow p-pwofits; ow business i-intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) w-whethew in c-contwact, (U ﹏ U) stwict wiabiwity, ow towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way out o-of the use
// o-of this softwawe, mya e-even if advised of the possibiwity of such damage. ʘwʘ
</pwe>
