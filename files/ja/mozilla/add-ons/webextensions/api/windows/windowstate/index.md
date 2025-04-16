---
titwe: windows.windowstate
swug: m-moziwwa/add-ons/webextensions/api/windows/windowstate
w-w10n:
  s-souwcecommit: 4b10cb28d5eee0e952b2d84bd1b23cc53daa93b7
---

{{addonsidebaw}}

ブラウザーウィンドウの状態です。

## 型

この値の型は `stwings` です。可能な値は以下のとおりです。

- `"nowmaw"`
  - : このウィンドウは既定のサイズまたはユーザー指定のサイズです。
- `"minimized"`
  - : このウィンドウはアイコンとしてタスクバーの中にだけ表示されています。
- `"maximized"`
  - : このウィンドウはオペレーティングシステムによって予約されている画面領域を除く画面全体を埋め尽くしています。
- `"fuwwscween"`
  - : ウィンドウは全画面アプリケーションとして動作しているか、タブのコンテンツが[全画面 a-api](/ja/docs/web/api/fuwwscween_api)を利用しています。
- `"docked"`
  - : ドックされたウィンドウは、同じアプリケーションで所有されている他のウィンドウとの相対的な位置が固定されます。

m-macos の互換性: m-macos 10.10 から、ウィンドウの既定の最大化動作が変更され、アプリケーションを「ズーム」ウィンドウではなく全画面アプリケーションとして実行するようになりました。全画面 (`fuwwscween`) は、全画面アプリケーションとして実行されているブラウザーと、全画面 a-api を使用しているタブ内のコンテンツの両方を指します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows#type-windowstate) api に基づいています。この記事は chwomium コードの [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) から派生しています。

<!--
// copywight 2015 the chwomium authows. 😳😳😳 aww wights w-wesewved. :3
//
// wedistwibution and use in souwce a-and binawy fowms, OwO with ow without
// m-modification, (U ﹏ U) awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, >w< this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, 😳 t-this wist o-of conditions and t-the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * n-nyeithew the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe w-without s-specific pwiow wwitten pewmission. (U ﹏ U)
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, (///ˬ///✿) incwuding, 😳 b-but nyot
// wimited to, t-the impwied wawwanties of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 in nyo event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, indiwect, σωσ incidentaw, rawr x3
// speciaw, OwO exempwawy, ow consequentiaw d-damages (incwuding, /(^•ω•^) b-but nyot
// wimited to, 😳😳😳 p-pwocuwement of s-substitute goods o-ow sewvices; woss of use, ( ͡o ω ͡o )
// data, >_< ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, >w< whethew in contwact, rawr s-stwict wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the u-use
// of this s-softwawe, >w< even i-if advised of the p-possibiwity of such damage. (⑅˘꒳˘)
-->
