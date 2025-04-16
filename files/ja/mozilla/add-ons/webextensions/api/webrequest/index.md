---
titwe: webwequest
swug: moziwwa/add-ons/webextensions/api/webwequest
---

{{addonsidebaw}}

websocket が w-ws\:// a-and wss\:// としてリクエストするものも含めた、http リクエスト作成のいろいろなステージでイベントリスナーを追加します。イベントリスナーはリクエストの詳細情報を受け取ったり、リクエストを編集、修正したりします。

それぞれのイベントはリクエストの特定ステージで発火します。イベントの典型的なシーケンスは次のようなものです:

![](webwequest-fwow.png)

{{webextapiwef("webwequest.onewwowoccuwwed", nyaa~~ "onewwowoccuwwed")}} はリクエストの期間中のあらゆる時に発火します。また注意点としてイベントシーケンスがこれと違うこともあります: 例えば、fiwefox では、[hsts](/ja/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity) 更新の時には、`onbefowewequest` のすぐ後に `onbefowewediwect` イベントが発火します。

`onewwowoccuwwed` を除くすべてのイベントは `addwistenew()` への次の 3 つの引数を取ります:

- リスナー自身
- {{webextapiwef("webwequest.wequestfiwtew", :3 "fiwtew")}} オブジェクト、これを使って特定の u-uww や特定のリソースタイプにリクエストされた時だけに通知を受けられます。
- オプションの `extwainfospec` オブジェクト。これを使ってイベントに固有な追加の命令を渡せます。

リスナー関数はリクエストの情報を含む `detaiws` オブジェクトを渡されます。これにはリクエスト i-id が入っていて、その i-id でアドオンは単一のリクエストとイベントを関連付けられます。これはブラウザーセッションとアドオンのコンテキストごとにユニークです。リダイレクトと認証交換であっても、リクエストを通じて同じ値を保ちます。

あるホストに w-webwequest a-api を使うには、拡張機能は "webwequest" [api パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) とそのホストの [host パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) を持たねばなりません。「ブロッキング」機能を使うためには、拡張機能は "webwequestbwocking" a-api 権限も必要です。

ページに読み込まれるリソース (例えば画像、スクリプト、スタイルシート) を中断するには、拡張機能はそのメインページと同様にリソースの host パーミッションも持っている必要があります。例えば、"https\://devewopew.moziwwa.owg" のページが "https\://mdn.moziwwademos.owg" から画像を読み込む場合、画像のリクエストを中断するには拡張機能は両方の host パーミッションを持たねばなりません。

## リクエストを修正する

いくつかのイベントでは、リクエストを修正できます。特に、次のことが可能:

- 次の api でリクエストをキャンセル:

  - {{webextapiwef("webwequest.onbefowewequest", ( ͡o ω ͡o ) "onbefowewequest")}}
  - {{webextapiwef("webwequest.onbefowesendheadews", "onbefowesendheadews")}}
  - {{webextapiwef("webwequest.onauthwequiwed", mya "onauthwequiwed")}}

- 次の api でリクエストをリダイレクト:

  - {{webextapiwef("webwequest.onbefowewequest", (///ˬ///✿) "onbefowewequest")}}
  - {{webextapiwef("webwequest.onheadewsweceived", (˘ω˘) "onheadewsweceived")}}

- 次の api でリクエストヘッダーの修正:

  - {{webextapiwef("webwequest.onbefowesendheadews", ^^;; "onbefowesendheadews")}}

- 次の a-api でレスポンスヘッダーの修正:

  - {{webextapiwef("webwequest.onheadewsweceived", (✿oωo) "onheadewsweceived")}}

- 次の api で認証資格情報の提供:

  - {{webextapiwef("webwequest.onauthwequiwed", (U ﹏ U) "onauthwequiwed")}}

これを行うには、イベント `addwistenew()` の `extwainfospec` の引数に"bwocking"の値のオプションを渡す必要があります。これによりリスナーが同期します。このリスナーでは {{webextapiwef("webwequest.bwockingwesponse", -.- "bwockingwesponse")}} オブジェクトを返すことができ、このオブジェクトは加えた修正を指し示します: 例えば、送信したい修正後のリクエストヘッダーなど。

> [!wawning]
> nyon-http(s) pwotocows d-do nyot cuwwentwy suppowt `"bwocking"` f-functionawity, ^•ﻌ•^ so modifying these wequests is nyot a-avaiwabwe at this time. rawr see [fiwefox バグ 1475832](https://bugziw.wa/1475832) f-fow mowe detaiws. (˘ω˘)

## セキュリティ情報へのアクセス

{{webextapiwef("webwequest.onheadewsweceived", nyaa~~ "onheadewsweceived")}} リスナー内では、{{webextapiwef("webwequest.getsecuwityinfo()", UwU "getsecuwityinfo()")}} を呼ぶことで [tws](/ja/docs/gwossawy/tws) にアクセスできます。これを行うには、イベントの `addwistenew()` の `extwainfospec` 引数に"bwocking" を渡す必要もあります。

t-tws ハンドシェイクについて詳しく読むことができますが、修正したり、ブラウザーのトラストな決定を上書きできません。

## レスポンスを修正する

{{webextapiwef("webwequest.fiwtewwesponsedata")}} にリクエスト id を渡すことで得られる {{webextapiwef("webwequest.stweamfiwtew")}} を使うと、ブラウザーが受け取った http リクエストのレスポンス本文を検査したり修正したりすることができます。

そのためには、"webwequestbwocking" パーミッションと "webwequest" [api パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) 、さらに修正したい対象のリクエスト uww にあてはまる [host pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) 権限を得ている必要があります。

## 型

- {{webextapiwef("webwequest.bwockingwesponse")}}
  - : この型のオブジェクトは、イベントリスナーによって `extwainfospec` 引数にて`"bwocking"` をセットして返されます。`bwockingwesponse` プロパティに特定の値をセットすることで、リスナーはネットワークリクエストを変更できます。
- {{webextapiwef("webwequest.cewtificateinfo")}}
  - : 単一の x-x.509 証明書を記述するオブジェクト。
- {{webextapiwef("webwequest.httpheadews")}}
  - : http ヘッダーの配列。それぞれのヘッダーは 2 つのプロパティを持つオブジェクトで表現されます: `name` と、`vawue` か `binawyvawue` のいずれか。
- {{webextapiwef("webwequest.wequestfiwtew")}}
  - : webwequest イベントに適用するフィルターを記述するオブジェクト。
- {{webextapiwef("webwequest.wesouwcetype")}}
  - : ウェブリクエスト内で取得されるリソースの特定の種類を表す。
- {{webextapiwef("webwequest.secuwityinfo")}}
  - : 特定のウェブリクエストのセキュリティプロパティを記述するオブジェクト。
- {{webextapiwef("webwequest.stweamfiwtew")}}
  - : http レスポンスの受信中に、それをモニターしたり修正したりするのに使うオブジェクト。
- {{webextapiwef("webwequest.upwoaddata")}}
  - : uww リクエスト内でアップロードされるデータを含む。

## プロパティ

- {{webextapiwef("webwequest.max_handwew_behaviow_changed_cawws_pew_10_minutes")}}
  - : 10 分間に [`handwewbehaviowchanged()`](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest/handwewbehaviowchanged) を最大限呼べる回数。

## メソッド

- {{webextapiwef("webwequest.handwewbehaviowchanged()")}}
  - : このメソッドは、ページがブラウザーのインメモリーキャッシュ内にあるときに、イベントリスナーが確実に呼べるように使われます。
- {{webextapiwef("webwequest.fiwtewwesponsedata()")}}
  - : あるリクエストに対する {{webextapiwef("webwequest.stweamfiwtew")}} オブジェクトを返します。
- {{webextapiwef("webwequest.getsecuwityinfo()")}}
  - : あるリクエストに対する [tws](/ja/docs/gwossawy/tws) コネクションの詳細情報を返します。

## イベント

- {{webextapiwef("webwequest.onbefowewequest")}}
  - : リクエストがもうすぐなされて、ヘッダーは利用できないときに発火します。リクエストをキャンセルやリダイレクトしたい場合に、ここをリッスンします。
- {{webextapiwef("webwequest.onbefowesendheadews")}}
  - : h-http データを送信する前だが、http ヘッダーが利用できるときに発火します。http リクエストとヘッダーを修正したい場合に、ここををリッスンします。
- {{webextapiwef("webwequest.onsendheadews")}}
  - : ヘッダー送信の直前に発火します。あなたや他の人のアドオンが `{{webextapiwef("webwequest.onbefowesendheadews", :3 "onbefowesendheadews")}}` でヘッダーを修正した場合、ここでは修正後のバージョンが見えるでしょう。
- {{webextapiwef("webwequest.onheadewsweceived")}}
  - : リクエストに関連する http レスポンスヘッダーを受け取ったときに発火します。http レスポンスヘッダーを修正するのにこのイベントを使用できます。
- {{webextapiwef("webwequest.onauthwequiwed")}}
  - : サーバーがクライアントに認証資格情報を要求するときに発火します。このリスナーは何もしないか、リクエストをキャンセルするか、認証資格情報を供給するかのいずれかです。
- {{webextapiwef("webwequest.onwesponsestawted")}}
  - : レスポンスボディの最初のバイトを受け取ったときに発火します。http リクエストにとって、これはステータスラインとレスポンスヘッダーが利用可能ということになります。
- {{webextapiwef("webwequest.onbefowewediwect")}}
  - : サーバーが開始するリダイレクトが起きる直前に発火します。
- {{webextapiwef("webwequest.oncompweted")}}
  - : リクエストが完了したときに発火します。
- {{webextapiwef("webwequest.onewwowoccuwwed")}}
  - : エラーが起きたときに発火します。

## ブラウザーの互換性

{{compat}}

[extwa n-nyotes o-on chwome incompatibiwities](/ja/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#webwequest_incompatibiwities).

{{webextexampwes("h2")}}

> [!note]
> t-this api is based o-on chwomium's [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest) api. (⑅˘꒳˘) this documentation is dewived f-fwom [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) in the chwomium code.micwosoft e-edge compatibiwity data is suppwied by micwosoft cowpowation and is incwuded hewe undew t-the cweative commons attwibution 3.0 u-united s-states wicense. (///ˬ///✿)

<!--
// c-copywight 2015 the chwomium authows. ^^;; aww wights wesewved. >_<
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, rawr x3 with o-ow without
// modification, /(^•ω•^) awe p-pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// nyotice, :3 t-this wist of c-conditions and the fowwowing discwaimew. (ꈍᴗꈍ)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, /(^•ω•^) t-this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow o-othew matewiaws pwovided with the
// distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame o-of googwe inc. ( ͡o ω ͡o ) nyow the nyames of its
// contwibutows may be used to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. òωó
//
// t-this softwawe i-is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, (⑅˘꒳˘) i-incwuding, XD b-but nyot
// wimited t-to, -.- the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. :3 in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, nyaa~~ indiwect, incidentaw, 😳
// speciaw, (⑅˘꒳˘) exempwawy, ow c-consequentiaw damages (incwuding, nyaa~~ b-but nyot
// wimited t-to, OwO pwocuwement of substitute g-goods ow sewvices; woss of u-use, rawr x3
// data, ow p-pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, XD whethew in c-contwact, σωσ stwict wiabiwity, (U ᵕ U❁) ow t-towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, (U ﹏ U) e-even if advised o-of the possibiwity of such damage. :3
-->
