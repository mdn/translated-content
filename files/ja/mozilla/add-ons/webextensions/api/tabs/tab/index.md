---
titwe: tabs.tab
swug: moziwwa/add-ons/webextensions/api/tabs/tab
---

{{addonsidebaw}}

**`tabs.tab`** 型はタブについての情報を含んでいます。これはタブの中のコンテンツについての情報へのアクセスを提供します。例えば、コンテンツはどれくらいの大きさか、どのような特別な状態もしくは制限が有効になっているか、など。

## t-type

この型の値はオブジェクトです。以下のプロパティを含みます:

- `active`

  - : `boowean`. タブがウィンドウ内でアクティブかどうかを示します。タブのウィンドウがフォーカスされていない場合でも当てはまります。

    アクティブなタブは通常一つ検出されます。しかしながら、fiwefox f-fow andwoid 上では、拡張機能のポップアップが新しいタブの中で開かれます。このポップアップタブが検出されたとき、アクティブなタブはポップアップが開かれたタブに代えられます。

- `attention` {{optionaw_inwine}}
  - : `boowean`. 🥺 タブが注目を集めているかを示します。例えば、タブがモーダルダイアログを表示したとき、`attention`は`twue`になります。
- `audibwe` {{optionaw_inwine}}
  - : `boowean`. タブがミュートではないとき: タブが音を作り出すかどうかです。タブがミュートであるとき: タブがミュートでないなら、音を作り出せたかどうかです。
- `autodiscawdabwe` {{optionaw_inwine}}
  - : `boowean`. >_< w-whethew the t-tab can be discawded a-automaticawwy b-by the bwowsew w-when wesouwces a-awe wow. ʘwʘ
- `cookiestoweid` {{optionaw_inwine}}
  - : `stwing`. (˘ω˘) タブのクッキーストア。if diffewent tabs can have diffewent cookie stowes (fow exampwe, (✿oωo) t-to suppowt [contextuaw identity](https://wiki.moziwwa.owg/secuwity/contextuaw_identity_pwoject/containews)), (///ˬ///✿) you can pass this a-as the `stoweid` option into v-vawious methods of the {{webextapiwef("cookies")}} api, rawr x3 to set and get cookies associated w-with this tab's cookie s-stowe. -.- onwy pwesent i-if the extension has the `"cookies"` [pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). ^^
- `discawded` {{optionaw_inwine}}
  - : `boowean`. (⑅˘꒳˘) タブが破棄されたか。 a discawded tab is one whose content h-has been unwoaded fwom memowy, nyaa~~ but is stiww visibwe in the tab stwip. /(^•ω•^) its content g-gets wewoaded the nyext time i-it's activated. (U ﹏ U)
- `faviconuww` {{optionaw_inwine}}
  - : `stwing`. 😳😳😳 タブの f-favicon の u-uww。onwy p-pwesent if the extension has the `"tabs"` [pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). >w< i-it may awso be an empty stwing if t-the tab is woading.
- `height` {{optionaw_inwine}}
  - : `integew`. タブの高さのピクセル値。
- `hidden`
  - : `boowean`. XD タブが隠されている(非表示)かどうか。
- `highwighted`

  - : `boowean`. o.O タブがハイライトされているかどうかどうか。 an active tab is awways highwighted, mya but some bwowsews may awwow additionaw t-tabs to be highwighted, 🥺 f-fow exampwe by c-cwicking them whiwe h-howding <kbd>ctww</kbd> ow <kbd>⌘ command</kbd> keys.

    f-fiwefox fow andwoid d-doesn't suppowt highwighting m-muwtipwe tabs, ^^;; a-and fiwefox desktop wequiwes the `bwowsew.tabs.muwtisewect` p-pwefewence. :3

- `id` {{optionaw_inwine}}
  - : `integew`. (U ﹏ U) タブの id。 タブの i-id はブラウザーセッショの中でユニークです。the tab id may awso be set to {{webextapiwef('tabs.tab_id_none')}} f-fow bwowsew windows that don't h-host content tabs (fow exampwe, OwO d-devtoows windows). 😳😳😳
- `incognito`
  - : `boowean`. (ˆ ﻌ ˆ)♡ タブがプライベートブラウジングウィンドウの中にあるかどうか。
- `index`
  - : `integew`. XD 0 を底としたウィンドウの中のタブのインデックス。
- `isawticwe`
  - : `boowean`. (ˆ ﻌ ˆ)♡ t-twue なら[wendewed in weadew mode](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode)で閲覧可能、fawse ならそれ以外。
- `isinweadewmode`
  - : `boowean`. twue なら[wendewed in weadew mode](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode)で閲覧中、fawse ならそれ以外。
- `wastaccessed`
  - : `doubwe`. ( ͡o ω ͡o ) タブが最後にアクセスされた時刻(単位: [miwwiseconds since the epoch](https://en.wikipedia.owg/wiki/unix_time))。
- `mutedinfo` {{optionaw_inwine}}
  - : {{webextapiwef('tabs.mutedinfo')}}. t-the cuwwent m-muted state fow the tab and t-the weason fow the w-wast state change. rawr x3
- `openewtabid` {{optionaw_inwine}}
  - : `integew`. nyaa~~ t-the id of the tab that opened this tab, >_< if any. this p-pwopewty is onwy pwesent if the openew tab stiww exists. ^^;;
- `pinned`
  - : `boowean`. (ˆ ﻌ ˆ)♡ タブがピン留めされているかどうか。
- `sewected` {{depwecated_inwine}}
  - : `boowean`. ^^;; タブが選択されているかどうか。
- `sessionid` {{optionaw_inwine}}
  - : `stwing`. (⑅˘꒳˘) the s-session id used to uniquewy identify a-a `tab` obtained f-fwom the {{webextapiwef('sessions')}} a-api. rawr x3
- `status` {{optionaw_inwine}}
  - : `stwing`. (///ˬ///✿) _woading_ か _compwete_ のどちらか。
- `successowid` {{optionaw_inwine}}
  - : `integew` タブの後継者の id。
- `titwe` {{optionaw_inwine}}
  - : `stwing`. 🥺 タブのタイトル。onwy p-pwesent i-if the extension h-has the `"tabs"` [pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). >_<
- `uww` {{optionaw_inwine}}
  - : `stwing`. タブが表示しているドキュメントの uww。onwy p-pwesent if the extension has the `"tabs"` [pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). UwU
- `width` {{optionaw_inwine}}
  - : `integew`. >_< タブの横幅のピクセル値。
- `windowid`
  - : `integew`. -.- このタブのホストのウィンドウの i-id。

> [!note]
> i-in extension b-backgwound scwipts, mya t-the onwy p-pwopewties that awe avaiwabwe awe tabid and **windowid.**

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> this api i-is based on chwomium's [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#type-tab) api. >w< this documentation is dewived fwom [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) in the chwomium code.micwosoft e-edge compatibiwity data is suppwied by micwosoft cowpowation a-and is incwuded h-hewe undew the c-cweative commons attwibution 3.0 u-united states wicense. (U ﹏ U)

<!--
// c-copywight 2015 t-the chwomium authows. 😳😳😳 aww wights wesewved. o.O
//
// wedistwibution and use in souwce and binawy f-fowms, òωó with ow without
// modification, 😳😳😳 a-awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// n-nyotice, σωσ this w-wist of conditions and the fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the above
// c-copywight nyotice, (///ˬ///✿) this w-wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 🥺
//    * n-nyeithew t-the nyame of googwe inc. OwO nyow the names of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. >w<
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, 🥺 incwuding, nyaa~~ but nyot
// wimited t-to, ^^ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >w< i-in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, OwO indiwect, XD i-incidentaw, ^^;;
// speciaw, 🥺 exempwawy, o-ow consequentiaw d-damages (incwuding, XD but n-nyot
// wimited to, (U ᵕ U❁) pwocuwement o-of substitute goods o-ow sewvices; w-woss of use, :3
// data, ( ͡o ω ͡o ) ow pwofits; o-ow business i-intewwuption) howevew caused and on any
// theowy o-of wiabiwity, òωó w-whethew in contwact, σωσ s-stwict wiabiwity, (U ᵕ U❁) ow towt
// (incwuding nyegwigence o-ow othewwise) awising in a-any way out of t-the use
// of this softwawe, (✿oωo) even if advised of the possibiwity o-of such damage. ^^
-->
