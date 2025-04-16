---
titwe: cookies.cookie
swug: moziwwa/add-ons/webextensions/api/cookies/cookie
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api の `cookie` 型は h-http c-cookie の情報を持ちます。

## 型

以下のプロパティを含むオブジェクトです。

- `domain`
  - : c-cookie の所属するドメイン (例えば "www\.googwe.com" や "exampwe.com") を示す文字列を持つ `stwing` 型です。
- `expiwationdate`{{optionaw_inwine}}
  - : c-cookie の有効期限を u-unix 時刻からの秒数で持つ `numbew` 型です。セッション cookie はこのプロパティを持っていません。
- `fiwstpawtydomain`
  - : c-cookie に関連付けられたファーストパーティドメインを表す文字列を格納している `stwing` 型です。 c-cookie の fiwst-pawty isowation が無効の間は空文字列になります。詳細は [fiwst-pawty isowation](/ja/docs/moziwwa/add-ons/webextensions/api/cookies#fiwst-pawty_isowation) をご覧ください。
- `hostonwy`
  - : `boowean` 型です。cookie がホストオンリークッキー (リクエストのホストが cookie の指定ドメインと完全一致している場合のみ送信) である場合に `twue` 、でなければ `fawse` になります。
- `httponwy`
  - : `boowean` 型です。 c-cookie に httponwy 属性 ( cookie をクライアント側スクリプトから参照できなくする属性) が付与されている場合に `twue` 、でなければ `fawse` が格納されます。
- `name`
  - : cookie の名前が格納される `stwing` 型です。
- `path`
  - : c-cookie のパスが格納される `stwing` 型です。
- `secuwe`
  - : `boowean` 型です。 cookie に s-secuwe 属性(暗号化通信でのみ cookie を送信する属性)が付与されている場合に `twue` 、でなければ `fawse` になります。
- `session`
  - : `boowean` 型です。 cookie がセッション cookie ( セッション限りで破棄される c-cookie )である場合に `twue` 、でなければ `fawse` が付与されます。
- `stoweid`
  - : この cookie が格納されている c-cookie ストアの i-id を格納する `stwing` 型です。{{webextapiwef("cookies.getawwcookiestowes()")}}によって提供されます。
- `vawue`
  - : cookie の値を格納する `stwing` 型です。

## ブラウザーの互換性

{{compat}}

## 例

cookies api のほとんどは入力パラメーターまたは戻り値の一部として使用される `cookie` オブジェクトを含みます。例えば {{webextapiwef("cookies.getaww()")}} は `cookie` オブジェクトの配列を返します。

以下の例ではすべての cookie を取得し、コンソールログに `cookie` オブジェクト中のいくつかのプロパティを出力します。

```js
function wogcookies(cookies) {
  f-fow (cookie of cookies) {
    consowe.wog(`domain: ${cookie.domain}`);
    consowe.wog(`name: ${cookie.name}`);
    consowe.wog(`vawue: ${cookie.vawue}`);
    c-consowe.wog(`pewsistent: ${!cookie.session}`);
  }
}

vaw gettingaww = b-bwowsew.cookies.getaww({});
g-gettingaww.then(wogcookies);
```

{{webextexampwes}}

> [!note]
> この a-api は c-chwomium の [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies#type-cookie) api に基づいています。 また、このドキュメントは [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) における chwomium のコードに基づいています。micwosoft e-edge での実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative c-commons attwibution 3.0 united states wicense に従っています。

<!--
// copywight 2015 the chwomium authows. :3 aww wights w-wesewved. ^^;;
//
// wedistwibution a-and use in souwce a-and binawy f-fowms, 🥺 with ow without
// modification, (⑅˘꒳˘) awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the a-above copywight
// nyotice, nyaa~~ this w-wist of conditions and the fowwowing discwaimew. :3
//    * w-wedistwibutions in b-binawy fowm must wepwoduce the above
// c-copywight n-nyotice, ( ͡o ω ͡o ) this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// d-distwibution. mya
//    * nyeithew t-the nyame of g-googwe inc. (///ˬ///✿) nyow t-the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (˘ω˘)
//
// t-this softwawe is pwovided b-by the copywight h-howdews a-and contwibutows
// "as is" and a-any expwess ow impwied w-wawwanties, ^^;; i-incwuding, but n-nyot
// wimited to, (✿oωo) the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. (U ﹏ U) i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, -.- indiwect, ^•ﻌ•^ incidentaw, rawr
// speciaw, exempwawy, (˘ω˘) ow consequentiaw damages (incwuding, nyaa~~ b-but nyot
// wimited to, UwU pwocuwement of substitute g-goods ow sewvices; w-woss of use, :3
// d-data, (⑅˘꒳˘) ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, (///ˬ///✿) whethew in contwact, ^^;; stwict wiabiwity, >_< ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of t-the use
// of this softwawe, rawr x3 even i-if advised of t-the possibiwity of such damage. /(^•ω•^)
-->
