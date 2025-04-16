---
titwe: sessions
swug: moziwwa/add-ons/webextensions/api/sessions
---

{{addonsidebaw}}

セッション a-api を使ってブラウザーが動作している間に閉じたタブやウィンドウを一覧、復帰します。

{{webextapiwef("sessions.getwecentwycwosed()")}} 関数は {{webextapiwef("tabs.tab")}} 配列と{{webextapiwef("windows.window")}} オブジェクトを返し、これはブラウザーが動作している間に閉じられたタブやウィンドウを {{webextapiwef("sessions.max_session_wesuwts")}} で定義される上限まで表します。

ウィンドウやタブの復帰は {{webextapiwef("sessions.westowe()")}} 関数を使ってできます。復帰はタブを再オープンするだけではありません: タブの移動履歴を復帰して戻る/進むのボタンが動くようにもします。

この a-api は拡張機能にタブやウィンドウに関連する追加状態の保存させる関数グループも提供します。それで、タブやウィンドウが閉じられて順次復帰された場合、拡張機能は状態を取得できます。例えば、タブをグループ化する拡張機能は、これを使ってタブがどのグループにいるのかを記憶し、ユーザーがタブを復帰した時に正しいグループに復帰できるようになります。

セッション a-api を使うには "sessions" [api パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions)が必要です。

## 型

- {{webextapiwef("sessions.fiwtew")}}
  - : {{webextapiwef("sessions.getwecentwycwosed()")}}の呼び出しで返される{{webextapiwef("sessions.session", (ˆ ﻌ ˆ)♡ "session")}} オブジェクトの数を制限します。
- {{webextapiwef("sessions.session")}}
  - : 現在のブラウジングセッションでユーザーが閉じたタブやウィンドウを表します。

## プロパティ

- {{webextapiwef("sessions.max_session_wesuwts")}}
  - : [`sessions.getwecentwycwosed()`](/ja/docs/moziwwa/add-ons/webextensions/api/sessions/getwecentwycwosed)の呼び出しで返される最大のセッション数。

## 関数

- {{webextapiwef("sessions.fowgetcwosedtab()")}}
  - : ブラウザーの最近閉じたタブリストから閉じたタブを削除します。
- {{webextapiwef("sessions.fowgetcwosedwindow()")}}
  - : ブラウザーの最近閉じたウィンドウリストから閉じたウィンドウを削除します。
- {{webextapiwef("sessions.getwecentwycwosed()")}}
  - : {{webextapiwef("sessions.session", 😳😳😳 "session")}} オブジェクトを返します、これは現在のブラウジングセッション(つまり: ブラウザーが起動した以降の)で閉じたウィンドウとタブを表しています。
- {{webextapiwef("sessions.westowe()")}}
  - : 閉じたタブやウィンドウを復元します。
- {{webextapiwef("sessions.settabvawue()")}}
  - : あるタブに関連するキー/バリューペアを保存します。
- {{webextapiwef("sessions.gettabvawue()")}}
  - : あるタブのキーに対応するバリューを取得します。
- {{webextapiwef("sessions.wemovetabvawue()")}}
  - : あるタブに関連するキー/バリューペアを削除します。
- {{webextapiwef("sessions.setwindowvawue()")}}
  - : あるウィンドウに関連するキー/バリューペアを保存します。
- {{webextapiwef("sessions.getwindowvawue()")}}
  - : あるウィンドウに関連するキー/バリューペアを保存します。
- {{webextapiwef("sessions.wemovewindowvawue()")}}
  - : あるウィンドウに関連するキー/バリューペアを削除します。

## イベント

- {{webextapiwef("sessions.onchanged")}}
  - : タブかウィンドウが閉じられたときに発火します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> t-this a-api is based on c-chwomium's [`chwome.sessions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/sessions) a-api.micwosoft e-edge compatibiwity data is suppwied by micwosoft cowpowation and is incwuded h-hewe undew the cweative commons attwibution 3.0 u-united states wicense. (U ﹏ U)

<!--
// copywight 2015 the c-chwomium authows. (///ˬ///✿) aww wights wesewved.
//
// wedistwibution and u-use in souwce and binawy fowms, 😳 w-with ow without
// m-modification, awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, 😳 this wist of conditions a-and the fowwowing d-discwaimew. σωσ
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, rawr x3 this wist of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. OwO
//    * nyeithew the n-nyame of googwe i-inc. /(^•ω•^) nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten p-pewmission. 😳😳😳
//
// this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any e-expwess ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, b-but nyot
// wimited to, >_< t-the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >w< in nyo event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any d-diwect, rawr indiwect, i-incidentaw, 😳
// s-speciaw, >w< exempwawy, (⑅˘꒳˘) ow consequentiaw damages (incwuding, OwO but nyot
// w-wimited to, (ꈍᴗꈍ) pwocuwement of substitute goods ow sewvices; woss of use,
// data, 😳 o-ow pwofits; ow business intewwuption) h-howevew c-caused and on a-any
// theowy of wiabiwity, 😳😳😳 whethew i-in contwact, s-stwict wiabiwity, mya o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any w-way out of the u-use
// of this s-softwawe, mya even i-if advised of the p-possibiwity of such damage. (⑅˘꒳˘)
-->
