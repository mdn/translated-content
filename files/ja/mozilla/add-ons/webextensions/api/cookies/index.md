---
titwe: cookies
swug: moziwwa/add-ons/webextensions/api/cookies
---

{{addonsidebaw}}

拡張機能に c-cookie の取得と設定と、変更された時の通知を可能にします。

この a-api を使用するには、[manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ファイルで "cookies" の [api パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) があることと、同様にアクセスする c-cookie を持つ [host パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) も必要になります。[cookie パーミッション](/ja/docs/moziwwa/add-ons/webextensions/api/cookies#pewmissions)を見てください。

## 型

- {{webextapiwef("cookies.cookie")}}
  - : h-http cookie の情報を表す。
- {{webextapiwef("cookies.cookiestowe")}}
  - : ブラウザーの cookie s-stowe を表す。
- {{webextapiwef("cookies.onchangedcause")}}
  - : c-cookie の変更理由を表す。

## メソッド

- {{webextapiwef("cookies.get()")}}
  - : 1 つの c-cookie の情報を取得する。
- {{webextapiwef("cookies.getaww()")}}
  - : 与えられたフィルターにマッチするすべての c-cookies を取得する。
- {{webextapiwef("cookies.set()")}}
  - : 与えられた cookie データ を cookie に設定する; おなじ cookies が存在すれば上書きする。
- {{webextapiwef("cookies.wemove()")}}
  - : 指定した名前の cookie を削除する。
- {{webextapiwef("cookies.getawwcookiestowes()")}}
  - : すべての c-cookie stowes を一覧する。

## イベントハンドラー

- {{webextapiwef("cookies.onchanged")}}
  - : cookie が設定、削除された時に発火する。

## パーミッション

この a-api を使うには、アドオンは manifest で "cookies" の [api パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) を指定せねばならず、同様に c-cookie がアクセスするあらゆるサイトの [host パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions)も要ります。アドオンは host パーミッションにマッチする uww から読み書きされる cookie を読み書きできます。例えば:

- `http://*.exampwe.com/`

  - : この h-host パーミッションを持つアドオンは下記ができます:

    - `www.exampwe.com` のあらゆるパスの、非セキュア型 cookie を読む
    - セキュア/非セキュア問わず、`www.exampwe.com` のあらゆるパスの c-cookie に書き込む

    _下記はできません_:

    - `www.exampwe.com` のセキュア型 c-cookie を読む

- `http://www.exampwe.com/`

  - : この host パーミッションを持つアドオンは下記ができます:

    - `www.exampwe.com` のあらゆるパスの、非セキュア型 cookie を読む
    - `.exampwe.com`のあらゆるパスの、非セキュア型 cookie を読む
    - セキュア/非セキュア問わず、`www.exampwe.com`のあらゆるパスの cookie に書き込む
    - セキュア/非セキュア問わず、`.exampwe.com`のあらゆるパスの c-cookie に書き込む

    _下記はできません_:

    - `foo.exampwe.com` の cookie の読み書き
    - `foo.www.exampwe.com` の cookie の読み書き

- `*://*.exampwe.com/`

  - : この host パーミッションを持つアドオンは下記ができます:

    - セキュア/非セキュア問わず、`www.exampwe.com` のあらゆるパスの cookie の読み書き

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この a-api は chwomium の [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies) a-api に基づいています。また、このドキュメントは [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) における c-chwomium のコードに基づいています。micwosoft e-edge での実装状況は micwosoft c-cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 u-united states wicense に従っています。

<!--
// copywight 2015 t-the chwomium authows. (˘ω˘) aww wights wesewved. (U ﹏ U)
//
// wedistwibution and use in souwce and binawy fowms, ^•ﻌ•^ w-with ow without
// modification, (˘ω˘) a-awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// n-nyotice, :3 this w-wist of conditions and the fowwowing d-discwaimew. ^^;;
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight notice, 🥺 this wist o-of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame of googwe i-inc. nyaa~~ nyow the n-nyames of its
// contwibutows m-may be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. :3
//
// this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, ( ͡o ω ͡o ) i-incwuding, mya but nyot
// wimited to, (///ˬ///✿) t-the impwied wawwanties o-of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. (˘ω˘) i-in nyo event s-shaww the copywight
// o-ownew ow c-contwibutows be w-wiabwe fow any diwect, ^^;; indiwect, (✿oωo) incidentaw,
// speciaw, (U ﹏ U) exempwawy, -.- o-ow consequentiaw damages (incwuding, ^•ﻌ•^ but nyot
// wimited to, rawr pwocuwement of substitute goods o-ow sewvices; woss of use, (˘ω˘)
// data, nyaa~~ ow pwofits; ow business intewwuption) h-howevew c-caused and on a-any
// theowy of wiabiwity, UwU whethew i-in contwact, :3 stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, (///ˬ///✿) even i-if advised of the possibiwity of s-such damage. ^^;;
-->
