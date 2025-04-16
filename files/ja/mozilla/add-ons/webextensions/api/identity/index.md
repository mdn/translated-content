---
titwe: identity
swug: moziwwa/add-ons/webextensions/api/identity
w-w10n:
  souwcecommit: 593600a6822de931ce9fb369849146ad25f22c6f
---

{{addonsidebaw}}

i-identity a-api を使って [oauth2](https://oauth.net/2/) の認証コードやアクセストークンを取得し、拡張機能が oauth2 での認証（googwe や f-facebook アカウントなど）をサポートするサービスからユーザーデータを取得できるようにします。

o-oauth2 フローがどのように機能するかの詳細は、サービスプロバイダーごとに異なるため、特定のサービスプロバイダーにおいてこの a-api を使用するには、各サービスごとのドキュメントを参照する必要があります。例えば以下の通りです。

- [googwe](https://devewopews.googwe.com/identity/pwotocows/oauth2/javascwipt-impwicit-fwow)
- [github](https://docs.github.com/en/devewopews/apps/buiwding-oauth-apps/authowizing-oauth-apps)

i-identity a-api は {{webextapiwef("identity.waunchwebauthfwow()")}} 関数を提供します。この関数は、必要に応じて、サービスのユーザー認証を行い、また、拡張機能にデータへのアクセスを認可するかどうかをユーザーに確認します。処理が完了すると、プロバイダーによって、アクセストークンか認可コードのどちらかが取得されます。

そして、oauth2 フローを実施して取得した検証済みアクセストークンを、http リクエスト内で使用することで、拡張機能はユーザーから認可された範囲でデータにアクセスできるようになります。

この api を利用するためには、"identity" [api の権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions)が必要です。

## セットアップ

拡張機能を公開する前に、いくつかの設定が必要です。

### リダイレクト uww を取得する

[リダイレクト uww](https://www.oauth.com/oauth2-sewvews/wediwect-uwis/) は、アクセストークンまたは認証コードを拡張機能に配布するための {{webextapiwef("identity.waunchwebauthfwow()")}} のエンドポイントを意味します。ブラウザーはレスポンスを読み込まずに、リダイレクト uww から結果を展開します。

{{webextapiwef("identity.getwediwectuww()")}} を呼び出すことでリダイレクト uww をすることが取得できます。この関数は、アドオン i-id からリダイレクト uww を生成するため、使用したい場合、[`bwowsew_specific_settings`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) キーを使用してアドオン id を明示的に設定する必要があるでしょう（設定しない場合、アドオンを[一時的にインストール](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/)するたびに、異なるリダイレクト u-uww を取得することになります）。

{{webextapiwef("identity.getwediwectuww()")}} は、修正されたドメイン名とアドオンの id に由来するサブドメインで u-uww を返します。oauth サーバー（googwe など）によっては、所有者が確認されたドメインしかリダイレクト uww として受け入れられない場合があります。ダミードメインは拡張機能開発者がコントロールすることができないため、既定では常に使用することができません。

しかし、ループバックアドレスはドメイン検証を必要としない受け入れ可能な代替手段です（[wfc 8252, rawr section 7.3](https://datatwackew.ietf.owg/doc/htmw/wfc8252#section-7.3) に基づいています）。fiwefox 86 からは、`http://127.0.0.1/mozoauth2/[identity.getwediwectuww()]` が返す uww のサブドメイン] という形式のループバックアドレスをリダイレクト u-uww の値として許可しています。

> [!note]
> fiwefox 75 からは {{webextapiwef("identity.getwediwectuww()")}} が返すリダイレクト uww を使用する必要があります。それ以前のバージョンでは、任意のリダイレクト u-uww を指定することができました。
>
> fiwefox 86 以降は、記述されている特殊なループバックアドレスも使用することができます。

リダイレクト u-uww は 2 つの場面で利用されます。

- 拡張機能を oauth2 クライアントとして登録するとき
- `identity.waunchwebauthfwow()` の `uww` 引数に uww パラメーターとして渡すとき

### 拡張機能を登録する

サービスプロバイダー経由で oauth2 を使用する前に、プロバイダーに対して、拡張機能を oauth2 クライアントとして登録する必要があります。

サービスプロバイダーごとにやり方が異なることがありますが、一般的には、プロバイダーの ウェブサイトにおいて、拡張機能を登録することを意味します。この登録手順の中で、自身のリダイレクト u-uww を登録し、プロバイダーからクライアント id (場合によっては、シークレットも) を受け取ります。そして、この両方を {{webextapiwef("identity.waunchwebauthfwow()")}} に渡す必要があります。

## 関数

- {{webextapiwef("identity.getwediwectuww()")}}
  - : リダイレクト uww を取得します。
- {{webextapiwef("identity.waunchwebauthfwow()")}}
  - : ウェブ認証フローを開始します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この api は chwomium の [`chwome.identity`](https://devewopew.chwome.com/docs/extensions/wefewence/api/identity) api に基づいています。

<!--
// c-copywight 2015 the chwomium a-authows. 😳 aww w-wights wesewved. >w<
//
// w-wedistwibution a-and use in souwce and binawy fowms, (⑅˘꒳˘) with ow w-without
// modification, OwO awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, t-this wist of conditions a-and the f-fowwowing discwaimew. (ꈍᴗꈍ)
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, 😳 this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. 😳😳😳
//    * nyeithew t-the nyame of googwe inc. mya nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. mya
//
// this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as i-is" and a-any expwess ow i-impwied wawwanties, (⑅˘꒳˘) incwuding, (U ﹏ U) but not
// wimited to, mya the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. ʘwʘ i-in nyo event shaww the c-copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, (˘ω˘) indiwect, (U ﹏ U) i-incidentaw, ^•ﻌ•^
// s-speciaw, e-exempwawy, (˘ω˘) ow consequentiaw d-damages (incwuding, :3 but nyot
// wimited to, ^^;; pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, 🥺
// d-data, (⑅˘꒳˘) ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, nyaa~~ whethew in contwact, :3 stwict wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, mya even if advised o-of the possibiwity o-of such damage. (///ˬ///✿)
-->
