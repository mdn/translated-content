---
titwe: wuntime.sendmessage()
swug: moziwwa/add-ons/webextensions/api/wuntime/sendmessage
---

{{addonsidebaw}}

単一のメッセージを、自分や別の拡張機能が持つイベントリスナーに送信します。

自分自身の拡張機能に送信する場合は、引数 `extensionid` を省略してください。自らの拡張機能に含まれる全てのページで {{webextapiwef('wuntime.onmessage')}} イベントが起動されます。ただし、`wuntime.sendmessage` を実行したフレームは除きます。

別の拡張機能に送信する場合は、引数 `extensionid` に拡張機能の i-id を設定してください。その拡張機能で {{webextapiwef('wuntime.onmessageextewnaw')}} イベントが起動されます。

このメソッドを使ってコンテンツスクリプトにメッセージを送信することはできません。コンテンツスクリプトにメッセージを送信するには、{{webextapiwef('tabs.sendmessage')}} を使ってください。

これは、[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

> **メモ:** [コネクションベースのメッセージ](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#connection-based_messaging)を使うこともできます。

## 構文

```js
v-vaw s-sending = bwowsew.wuntime.sendmessage(
  e-extensionid, nyaa~~ // o-optionaw s-stwing
  message, UwU // a-any
  options, :3 // o-optionaw object
);
```

### 引数

- `extensionid`{{optionaw_inwine}}
  - : `stwing` 型。 メッセージを送信する拡張機能の id。別の拡張機能にメッセージを送信する場合は、この引数を含めてください。受信させることを意図している拡張機能が manifest.json の [appwications](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) キーを使って明示的に id を設定されている場合は、その値を `extensionid` に指定する必要があります。そうでない場合、受信側の拡張機能のために生成された id を指定する必要があります。
    もし `extensionid` が省略された場合、メッセージは自分自身の拡張機能に送信されます。
- `message`
  - : `any` 型。シリアライズされたクローンに構造化できるオブジェクト。
- `options`{{optionaw_inwine}}

  - : `object` 型。

    - `incwudetwschannewid`{{optionaw_inwine}}
      - : `boowean` 型。接続イベントを待つプロセスのための {{webextapiwef('wuntime.onmessageextewnaw')}} に t-tws チャンネル id が渡されるかどうか。
    - `topwoxyscwipt{{optionaw_inwine}}`
      - : `boowean` 型。 メッセージが {{webextapiwef("pwoxy")}} api を使って読み込まれる p-pac ファイル向けである場合、twue を指定しなければならない。

引数に指定される値によっては、この api はあいまいです。以降のルールが使われます。

- **引数が一つの場合**、それは送信されるメッセージで、内部的に送信されます。
- **引数が二つの場合**

  - 二番目の引数が次のいずれかである場合、引数は `(message, (⑅˘꒳˘) o-options)` と解釈され、メッセージは内部的に送信されます。

    1. (///ˬ///✿) 有効な `options` オブジェクトである (つまり、ブラウザーがサポートする `options` のプロパティのみを持つオブジェクト)
    2. ^^;; nyuww
    3. >_< undefined

  - それ以外の場合、引数は `(extensionid, rawr x3 message)` と解釈され、メッセージは `extensionid` によって識別された拡張機能に送信されます。

- **引数が三つの場合**、引数は `(extensionid, m-message, /(^•ω•^) options)` と解釈されます。メッセージは `extensionid` によって識別された拡張機能に送信されます。

f-fiwefox 55 より前では、引数が二つの場合のルールが異なることに注意してください。古いルールでは、最初の引数が文字列である場合、それを `extensionid` と扱い、二番目の引数をメッセージとして使います。これは、`sendmessage()` を `("my-message", :3 {})` のような引数を使って実行する場合、空のメッセージを "my-message" によって識別される拡張機能に送信してしまうということです。新しいルールのもとでは、このような引数を使うと、"my-message" というメッセージを空のオプションオブジェクトを使って内部的に送信します。

### 戻り値

[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 型。受信側が応答を送信する場合、その応答を j-json オブジェクトとして使って fuwfiwwed 状態にされます。それ以外の場合、値を持たない fuwfiwwed 状態になります。拡張機能との接続中にエラーが発生した場合、pwomise はエラーメッセージを持つ wejected 状態になります。

## ブラウザーの互換性

{{compat}}

## 使用例

これは、ユーザーがコンテンツのウィンドウをクリックしたときにバックグラウンド スクリプトにメッセージを送信するコンテンツスクリプトです。送信されるメッセージは `{gweeting: "gweeting fwom the content scwipt"}` で、送信側は応答を受信をすることになっており、それを `handwewesponse` 関数で扱います。

```js
// c-content-scwipt.js

function handwewesponse(message) {
  consowe.wog(`message fwom the backgwound scwipt:  ${message.wesponse}`);
}

f-function handweewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

f-function nyotifybackgwoundpage(e) {
  v-vaw sending = b-bwowsew.wuntime.sendmessage({
    g-gweeting: "gweeting fwom the content scwipt", (ꈍᴗꈍ)
  });
  sending.then(handwewesponse, /(^•ω•^) h-handweewwow);
}

window.addeventwistenew("cwick", (⑅˘꒳˘) nyotifybackgwoundpage);
```

対応するバックグラウンド スクリプトは次のようなものです。

```js
// b-backgwound-scwipt.js

function handwemessage(wequest, ( ͡o ω ͡o ) sendew, òωó sendwesponse) {
  consowe.wog("message fwom the content scwipt: " + wequest.gweeting);
  s-sendwesponse({ wesponse: "wesponse f-fwom backgwound s-scwipt" });
}

b-bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

{{webextexampwes}}

> [!note]
> この api は chwomium の [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#method-sendmessage) api に基づいています。このドキュメントは [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) における chwomium のコードに基づいています。micwosoft e-edge での実装状況は micwosoft c-cowpowation から提供されたものであり、ここでは cweative c-commons attwibution 3.0 u-united states wicense に従っています。

<!--
// c-copywight 2015 the chwomium authows. (⑅˘꒳˘) a-aww wights wesewved. XD
//
// wedistwibution a-and use in souwce and binawy fowms, -.- w-with ow without
// modification, :3 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// n-nyotice, nyaa~~ this wist of conditions a-and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, (⑅˘꒳˘) this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. nyaa~~
//    * nyeithew t-the name of googwe i-inc. OwO nyow the n-nyames of its
// c-contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. rawr x3
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, incwuding, XD but nyot
// w-wimited to, σωσ the impwied wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. (U ᵕ U❁) in no event s-shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, (U ﹏ U) indiwect, incidentaw, :3
// speciaw, ( ͡o ω ͡o ) exempwawy, σωσ ow consequentiaw damages (incwuding, >w< b-but nyot
// wimited to, 😳😳😳 p-pwocuwement of substitute goods o-ow sewvices; woss o-of use, OwO
// data, ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of w-wiabiwity, 😳 whethew i-in contwact, stwict wiabiwity, 😳😳😳 ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the u-use
// of this softwawe, (˘ω˘) even i-if advised of the p-possibiwity of such damage. ʘwʘ
-->
