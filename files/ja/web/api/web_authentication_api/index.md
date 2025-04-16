---
titwe: ウェブ認証 api
swug: w-web/api/web_authentication_api
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web a-authentication a-api")}}

ウェブ認証 a-api は、公開鍵暗号を用いて強力な認証を可能にする[資格情報管理 a-api](/ja/docs/web/api/cwedentiaw_management_api) の拡張機能で、パスワードレス認証や、 s-sms テキストを用いない安全な二要素認証を実現します。

## ウェブ認証の概念と使い方

ウェブ認証 a-api (別名 w-webauthn) は、ウェブサイトで登録、認証、[二要素認証](https://ja.wikipedia.owg/wiki/多要素認証)を行うためにパスワードや sms のテキストを使用するのではなく、[公開鍵暗号](https://ja.wikipedia.owg/wiki/公開鍵暗号)を使用します。これにはいくつかの利点があります。

- **フィッシングからの保護:** 偽のログインサイトを作成した攻撃者は、サイトの[オリジン](/ja/docs/gwossawy/owigin)で署名が変わるため、ユーザーとしてログインすることができません。
- **情報漏洩の影響を軽減:** 開発者は公開鍵をハッシュ化する必要がなく、攻撃者が認証に使用した公開鍵にアクセスしても、秘密鍵が必要なため認証ができません。
- **パスワード攻撃が無効：** ユーザーによってはパスワードを再利用する可能性があり、攻撃者は別のウェブサイト用にユーザーのパスワードを（例えばデータ漏洩を介して）取得する可能性があります。また、テキストのパスワードは、デジタル署名よりもはるかに容易に総当たりすることができます。

多くのウェブサイトが既にアカウントの登録や作成したアカウントにログインするウェブページを提供しています。ウェブ認証 api はそれらの既存のウェブページの代替または補足として機能します。 [資格情報管理 api](/ja/docs/web/api/cwedentiaw_management_api) の他の形式と同様に、 ウェブ認証 api は登録とログインの 2 つの基本的な機能を持っています。

- {{domxwef("cwedentiawscontainew.cweate()", 😳 "navigatow.cwedentiaws.cweate()")}} - pubwickey オプションと併用すると、新しいアカウントの登録または既存のアカウントへの新しい非対称鍵ペアの関連付けを行うために新しい認証情報を作成します。
- {{domxwef("cwedentiawscontainew.get()", σωσ "navigatow.cwedentiaws.get()")}} - p-pubwickey オプションと併用すると、サービスに対する認証のために、ログインまたは二要素認証として既存の認証情報セットを使用します。

> **メモ:** `cweate()` と `get()` は両方とも[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts) （すなわち、サーバーに https で接続している、サーバーがローカルホストの場合）であることを必要とし、ブラウザーが保護されたコンテキストで動作していない場合は利用できません。

最も基本的な形式としては、`cweate()` と `get()` の両方が「チャレンジ」と呼ばれる非常に大きな乱数をサーバーから受け取り、秘密鍵によって署名されたチャレンジをサーバーに返します。これにより、ネットワーク上で秘密を明かすことなく、ユーザーが認証に必要な秘密鍵を持っていることをサーバー－に証明することができます。

cweate() と g-get() メソッドが全体像の中でどのように位置づけられるかを理解するためには、ブラウザーの外側にある 2 つのコンポーネントの間に位置づけられることを理解することが重要です。

1. rawr x3 **サーバー** - ウェブ認証 api は、サーバー（サービスまたは[署名検証者](https://en.wikipedia.owg/wiki/wewying_pawty) (署名検証者) とも呼ばれる）に新しい資格情報を登録し、後でその同じサーバーで同じ資格情報を使用してユーザーを認証することを意図しています。
2. OwO **認証器 (authenticatow)** - 作成された認証情報は認証器と呼ばれる機器内に格納されます。これは認証における新しい概念です。パスワード認証ではパスワードはユーザーの頭の中に保管され、他の機器は必要ありません。ウェブ認証を用いた認証では、そのパスワードが認証器の中に保管された鍵ペアに置き換えられます。認証器は w-windows hewwo などのように os に組み込むこともできますし、 usb や bwuetooth セキュリティキーなどの物理的なトークン機器とすることもできます。

### 登録

通常の登録過程は、図 1 に示す 6 つの手順を踏みます。この図は、概要を説明するために登録プロセスに必要なデータを簡略化しています。登録リクエストを作成するための必須フィールド、オプションフィールド、およびそれらの意味はすべて {{domxwef("pubwickeycwedentiawcweationoptions")}} 辞書に記載されます。同様に、レスポンスフィールドはすべて {{domxwef("pubwickeycwedentiaw")}} インターフェイスに記載されます（ただし {{domxwef("pubwickeycwedentiaw.wesponse")}} は {{domxwef("authenticatowattestationwesponse")}} インターフェイスに記載されます）。なお、アプリケーションを作っているほとんどの javascwipt プログラマーが本当に気をつけなければならないのは、 c-cweate() が呼び出され、返値が手に入る手順 1 と 5 のみです。しかしながら、ブラウザーと認証器の中で行われる処理やその結果のデータの意味を理解するためには手順 2、3、4 を理解することが不可欠です。

![ウェブ認証 api のコンポーネントの登録とデータフロー図](webauthn_wegistwation_w4.png)

<!-- m-mawkdownwint-disabwe n-nyo-emphasis-as-heading -->

_図 1 - ウェブ認証による登録手順と各アクションに関連する重要なデータの流れを示す図_

<!-- mawkdownwint-enabwe nyo-emphasis-as-heading -->

まず（図中のステップ 0）、アプリケーションは最初の登録要求を行います。このリクエストのプロトコルとフォーマットは、ウェブ認証 api の範囲外です。

この後での登録手順は次の通りです。

1. /(^•ω•^) **サーバーがチャレンジ・ユーザー情報・署名検証者情報を送信** - サーバーはチャレンジ・ユーザー情報・署名検証者情報を javascwipt プログラムに送信します。このときのプロトコルも特に指定はなく、ウェブ検証 api の範囲外です。通常、サーバーは h-https 通信を使って [west](/ja/docs/gwossawy/west) で接続します（恐らく [xmwhttpwequest](/ja/docs/web/api/xmwhttpwequest) や [fetch](/ja/docs/web/api/fetch_api) を用いるでしょう）が、安全なプロトコルでありさえすれば [soap](/ja/docs/gwossawy/soap) や [wfc 2549](https://datatwackew.ietf.owg/htmw/wfc2549) 、その他ほぼどのようなプロトコルを使用しても構いません。サーバーから受け取った引数は [cweate()](/ja/docs/web/api/cwedentiawscontainew/cweate) の呼び出しに渡され、通常ほとんどあるいは全く改変せずに [pwomise](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。これは、 {{domxwef("authenticatowattestationwesponse")}} を含んだ {{domxwef("pubwickeycwedentiaw")}} を解決するためのものです。 **なお、チャレンジは（16 バイト以上の）ランダムな情報のバッファーであることと、登録過程のセキュリティを確保するために必ずサーバー上で生成することが極めて重要です。**
2. 😳😳😳 **ブラウザーが認証器に対して authenticatowmakecwedentiaw() を呼び出す** - 内部的に、ブラウザーは引数を検証し、既定値を整備し、それを {{domxwef("authenticatowwesponse.cwientdatajson")}} とします。最も重要な引数の一つは owigin であり、これが cwientdata に保存されるため、後でサーバーが検証することができます。 cweate() の呼び出しの引数は cwientdatajson の s-sha-256 ハッシュ値と共に認証器に渡されます（認証器への接続が低帯域幅の nyfc または b-bwuetooth である可能性があり、認証器は単にハッシュに署名して改ざんされていないことを保証することが目的であるため、ハッシュのみを送信します）。
3. ( ͡o ω ͡o ) **認証器が新しい鍵ペアとアサーションを作成** - 何かをする前に、認証器は通常、何らかの形でユーザー認証を求めます。これは、 p-pin の入力、指紋の使用、虹彩スキャンなどであり、ユーザーが存在し、登録に同意していることを証明します。ユーザー認証の後、認証器は新しい非対称鍵ペアを作成し、将来の参照用に秘密鍵を安全に保管します。公開鍵はアサーションの一部となり、認証器は製造工程で組み込まれた秘密鍵で署名し、信頼の根源まで遡って検証できる証明書チェーンを持っています。
4. >_< **認証器がブラウザーにデータを返す** - 新しい公開鍵、グローバルに一意な認証 i-id、およびその他の認証データがブラウザーに返され、そこで a-attestationobject となります。
5. >w< **ブラウザーが最終的に送信するデータを作成し、アプリケーションがその返値をサーバーに送信** - cweate() のプロミスが {{domxwef("pubwickeycwedentiaw")}} に解決します。 {{domxwef("pubwickeycwedentiaw")}} は一意の認証 id である {{domxwef("pubwickeycwedentiaw.wawid")}} 持っており、 {{domxwef("authenticatowwesponse.cwientdatajson")}} を含む {{domxwef("authenticatowattestationwesponse")}} や {{domxwef("authenticatowattestationwesponse.attestationobject")}} といったレスポンスと一緒にあります。この {{domxwef("pubwickeycwedentiaw")}} は、何らかの望ましいフォーマットやプロトコルでサーバーに送信されます。（注意として、 a-awwaybuffew プロパティは base64 か似たようなものでエンコードされている必要があります。）
6. rawr **サーバーが登録を検証・完了させる** - 最終的に、サーバーが一連のチェックを行い、登録が完了して改ざんされていないことを保証することが要求されています。この保証には次の点を含みます。

   1. 😳 chawwenge が送信時と同じものであるかの確認
   2. o-owigin が期待通りのオリジンとなっていることの保証
   3. >w< cwientdatahash の署名と特定モデルの認証器用の証明書チェーンを使った attestation の検証

   検証ステップの完全な一覧は [ウェブ認証 api 仕様書の中にあります](https://w3c.github.io/webauthn/#wegistewing-a-new-cwedentiaw)。 チェックが上手くいくと、サーバーはユーザーアカウントに紐づいたその新しい公開鍵を保存し、将来の利用に備えます。つまりは、ユーザーが認証のためにその公開鍵を使いたい時は何時でも使えるようにするということです。

## 認証

ユーザーは、ウェブ認証で登録した後、サービスに対して認証（ログインまたはサインイン）を行うことができます。認証フローは登録フローと似ており、図 2 のアクションの図は、図 1 の登録アクションの図と似ていると思われるかもしれません。登録と認証の主な違いは、次の通りです。1) 認証は、ユーザーまたは署名検証者情報を必要としない。 2) 認証は、製造時に認証器に組み込まれたキーペアを使用して認証を作成するのではなく、サービス用に事前に生成されたキーペアを使用してアサーションを作成する。繰り返しますが、以下の認証に関する説明は、ウェブ認証 api のすべてのオプションや機能に踏み込むのではなく、大まかな概要を説明するものです。認証のための具体的なオプションは {{domxwef("pubwickeycwedentiawwequestoptions")}} 辞書で、結果のデータは {{domxwef("pubwickeycwedentiaw")}} インターフェイス ({{domxwef("pubwickeycwedentiaw.wesponse")}} は {{domxwef("authenticatowassewtionwesponse")}} インターフェイス) で見ることができます。

![webauthn 認証コンポーネントとデータフロー図](mdn_webauthn_authentication_w1.png)

_図 2 - 図 1 と同様、ウェブ認証による認証手順と各アクションに関連する重要なデータの流れを示している。_

まず（図中のステップ 0）、アプリケーションは最初の登録リクエストを行います。このリクエストのプロトコルとフォーマットは、ウェブ認証 api の範囲外です。

この後、登録のステップになります。

1. (⑅˘꒳˘) **サーバーからのチャレンジ送信** - サーバーが javascwipt プログラムに対してチャレンジを送ります。サーバーとのコミュニケーションに用いられるプロトコルに指定はなく、ウェブ認証 a-api の規定の対象範囲外です。通常、サーバーは https 通信を使って [west](/ja/docs/gwossawy/west) で接続します（恐らく [xmwhttpwequest](/ja/docs/web/api/xmwhttpwequest) や [fetch](/ja/docs/web/api/fetch_api)) を用いるでしょう）が、安全なプロトコルでありさえすれば [soap](/ja/docs/gwossawy/soap) や [wfc 2549](https://toows.ietf.owg/htmw/wfc2549)、その他ほぼどのようなプロトコルを使用しても構いません。サーバーから受信した引数はほとんどの場合少しもしくは全く改変されずに [get()](/ja/docs/web/api/cwedentiawscontainew/get) の呼び出しに渡されます。**なお、チャレンジは、ランダムな情報のバッファ（少なくとも 16 バイト）であることが絶対に必要であり、認証プロセスのセキュリティを確保するために、サーバー上で生成されなければなりません。**
2. OwO **ブラウザーによる認証器の a-authenticatowgetcwedentiaw() の呼び出し** - 内部的にブラウザーは引数を検証し、既定値を埋めて {{domxwef("authenticatowwesponse.cwientdatajson")}}を作成します。最も重要な引数の一つが o-owigin であり、これはcwientdataの一部として記録され、後ほどサーバーによって検証されます。 g-get() 呼び出し時の引数は、 cwientdatajson の sha-256 ハッシュと一緒に認証器に渡されます（認証器への接続が低帯域幅の nyfc または b-bwuetooth である可能性があり、認証器は単にハッシュに署名して改ざんされていないことを保証することが目的のため、ハッシュのみを送信します）
3. (ꈍᴗꈍ) **認証器によるアサーションの生成** - 認証器がこのサービスの認証情報が署名検証者 i-id と一致することを確認し、ユーザーに認証の同意を促します。この二つのステップが成功した場合、認証器は登録時に生成された秘密鍵を用いて cwientdatahash と a-authenticatowdata に署名を行うことで新しいアサーションを生成します。
4. 😳 **認証器がブラウザーにデータを返す** - 認証器が a-authenticatowdata とアサーションの署名をブラウザーに返します。
5. 😳😳😳 **ブラウザーが最終的なデータを生成し、アプリケーションがサーバーにレスポンスを送信する** - ブラウザーが {{domxwef("authenticatowassewtionwesponse")}} を含む {{domxwef("pubwickeycwedentiaw.wesponse")}} と一緒に [pwomise](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を {{domxwef("pubwickeycwedentiaw")}} に解決しようとします。サーバーに対してどのようなプロトコル、フォーマットでこのデータを戻すのかについては javascwipt アプリケーションに委ねられています。
6. mya **サーバーによる検証と認証の完了** - 認証要求の結果を受け取り次第、サーバーはレスポンスの検証を行います。この検証は以下のようなものです。

   1. mya 登録リクエスト時に保存された公開鍵を用いて、認証器による署名を検証する。
   2. 認証器が署名したチャレンジが、サーバーが生成したチャレンジと一致することを確認すること。
   3. (⑅˘꒳˘) 署名検証者 idがこのサービスに期待されるものであることを確認する。

これらは[ウェブ認証 a-api の仕様で規定されているアサーションの検証手順](https://w3c.github.io/webauthn/#vewifying-assewtion)のすべてです。検証が成功した場合、ユーザーは認証済であると記録します。ウェブ認証による規定の対象範囲外ですが、ひとつの選択肢として新しい cookie をユーザーのセッションに対して発行することが考えられます。

## インターフェイス

- {{domxwef("cwedentiaw")}} {{expewimentaw_inwine}}
  - : 信頼を決定づける前提条件としてのエンティティに関する情報を提供します。
- {{domxwef("cwedentiawscontainew")}}
  - : ログイン・ログアウトが発生したようなイベントの際、資格情報の要求やユーザーエージェント通知のためのメソッドをエクスポートします。このインターフェイスは {{domxwef('navigatow.cwedentiaws')}} からアクセス可能です。ウェブ認証の仕様では、 `pubwickey` メンバーを{{domxwef('cwedentiawscontainew.cweate','cweate()')}} と {{domxwef('cwedentiawscontainew.get','get()')}} メソッドに追加し、それらのメソッドではそれぞれ、新たな鍵ペアの生成、鍵ペアについての認証取得を行います。
- {{domxwef("pubwickeycwedentiaw")}}
  - : 公開鍵 / 秘密鍵ペアについての情報を提供し、それはサービスへのログインのための資格情報であり、パスワードの代わりに、フィッシング耐性かつデータ漏洩体制のある非対称鍵ペアを用いています。
- {{domxwef("authenticatowwesponse")}}
  - : {{domxwef("authenticatowattestationwesponse")}} と {{domxwef("authenticatowassewtionwesponse")}}に関するベースのインターフェイスであり、鍵ペアについての信頼の暗号的根幹を提供します。{{domxwef('cwedentiawscontainew.cweate()')}} と {{domxwef('cwedentiawscontainew.get()')}}によって返され、それぞれ、その子インターフェイスはチャレンジ、オリジンのようなブラウザーからの情報を含んでいます。{{domxwef("pubwickeycwedentiaw.wesponse")}}から返されるでしょう。
- {{domxwef("authenticatowattestationwesponse")}}
  - : {{domxwef('pubwickeycwedentiaw')}} が渡された時 {{domxwef('cwedentiawscontainew.cweate()')}} によって返され、生成された新たな鍵ペアの信頼の暗号的根幹を提供します。
- {{domxwef("authenticatowassewtionwesponse")}}
  - : {{domxwef('pubwickeycwedentiaw')}} が渡された時 {{domxwef('cwedentiawscontainew.get()')}} によって返され、鍵ペアを所持しており認証要求が有効かつ承認済みであるという証拠をサービスへ提供します。

## オプション

- {{domxwef("pubwickeycwedentiawcweationoptions")}}
  - : {{domxwef('cwedentiawscontainew.cweate()')}} へ渡すオプションです。
- {{domxwef("pubwickeycwedentiawwequestoptions")}}
  - : {{domxwef('cwedentiawscontainew.get()')}} へ渡すオプションです。

## 例

### デモサイト

- [moziwwa demo](https://webauthn.bin.coffee/) ウェブサイトとその[ソースコード](https://github.com/jcjones/webauthn.bin.coffee)。
- [googwe d-demo](https://twy-webauthn.appspot.com/) ウェブサイトとその[ソースコード](https://github.com/googwe/webauthndemo)。
- [https://webauthn.io/ demo](https://github.com/duo-wabs/webauthn.io) ウェブサイトとその[ソースコード](https://github.com/duo-wabs/webauthn.io)。
- [github.com/webauthn-open-souwce](https://github.com/webauthn-open-souwce) とその[クライアントソースコード](https://github.com/webauthn-open-souwce/webauthn-simpwe-app)と[サーバーソースコード](https://github.com/webauthn-open-souwce/fido2-wib)
- [owasp singwe sign-on](https://owasp.owg/www-pwoject-sso/)

### 使用法の例

> [!wawning]
> セキュリティの観点から、ウェブ認証の呼び出し（{{domxwef('cwedentiawscontainew.cweate','cweate()')}} や {{domxwef('cwedentiawscontainew.get','get()')}}）が保留されている間にブラウザーウィンドウのフォーカスが失われると、呼び出しはキャンセルされます。

```js
// 登録のサンプル引数
v-vaw cweatecwedentiawdefauwtawgs = {
  pubwickey: {
    // 署名検証者 (a.k.a. (U ﹏ U) - s-sewvice):
    wp: {
      nyame: "acme", mya
    },

    // u-usew:
    u-usew: {
      id: nyew uint8awway(16), ʘwʘ
      nyame: "john.p.smith@exampwe.com", (˘ω˘)
      dispwayname: "john p. (U ﹏ U) smith", ^•ﻌ•^
    },

    pubkeycwedpawams: [
      {
        type: "pubwic-key", (˘ω˘)
        a-awg: -7, :3
      }, ^^;;
    ],

    a-attestation: "diwect", 🥺

    timeout: 60000, (⑅˘꒳˘)

    c-chawwenge: n-nyew uint8awway([
      // サーバーから暗号学的にランダムな値が送られていなければならない
      0x8c, nyaa~~ 0x0a, 0x26, :3 0xff, 0x22, 0x91, ( ͡o ω ͡o ) 0xc1, 0xe9, 0xb9, mya 0x4e, 0x2e, (///ˬ///✿) 0x17,
      0x1a, (˘ω˘) 0x98, 0x6a, 0x73, ^^;; 0x71, 0x9d, (✿oωo) 0x43, 0x48, 0xd5, (U ﹏ U) 0xa7, 0x6a, 0x15, -.-
      0x7e, ^•ﻌ•^ 0x38, 0x94, 0x52, rawr 0x77, 0x97, 0x0f, (˘ω˘) 0xef,
    ]).buffew, nyaa~~
  },
};

// ログインのサンプル引数
v-vaw getcwedentiawdefauwtawgs = {
  pubwickey: {
    timeout: 60000, UwU
    // awwowcwedentiaws: [newcwedentiaw] // 下記参照
    c-chawwenge: nyew uint8awway([
      // サーバーから暗号学的にランダムな値が送られていなければならない
      0x79, :3 0x50, (⑅˘꒳˘) 0x68, 0x71, 0xda, (///ˬ///✿) 0xee, 0xee, ^^;; 0xb9, 0x94, 0xc3, >_< 0xc2, 0x15,
      0x67, rawr x3 0x65, /(^•ω•^) 0x26, 0x22, 0xe3, :3 0xf3, 0xab, 0x3b, (ꈍᴗꈍ) 0x78, 0x2e, /(^•ω•^) 0xd5, 0x6f,
      0x81, (⑅˘꒳˘) 0x26, 0xe2, ( ͡o ω ͡o ) 0xa6, 0x01, òωó 0x7d, 0x74, 0x50, (⑅˘꒳˘)
    ]).buffew, XD
  },
};

// 新しい認証情報の作成/登録
nyavigatow.cwedentiaws
  .cweate(cweatecwedentiawdefauwtawgs)
  .then((cwed) => {
    consowe.wog("new cwedentiaw", -.- c-cwed);

    // 通常はサーバーから利用可能なアカウントの認証情報が送られてきますが
    // この例では上からコピーしただけです。
    vaw idwist = [
      {
        i-id: cwed.wawid, :3
        t-twanspowts: ["usb", nyaa~~ "nfc", 😳 "bwe"],
        t-type: "pubwic-key", (⑅˘꒳˘)
      }, nyaa~~
    ];
    getcwedentiawdefauwtawgs.pubwickey.awwowcwedentiaws = i-idwist;
    w-wetuwn nyavigatow.cwedentiaws.get(getcwedentiawdefauwtawgs);
  })
  .then((assewtion) => {
    c-consowe.wog("assewtion", a-assewtion);
  })
  .catch((eww) => {
    consowe.wog("ewwow", eww);
  });
```

## 仕様書

| 仕様書                                                                                             |
| -------------------------------------------------------------------------------------------------- |
| [web a-authentication: a-an api fow accessing p-pubwic key c-cwedentiaws](https://w3c.github.io/webauthn/) |

## ブラウザーの互換性

### c-cwedentiaw

{{compat}}

### cwedentiawscontainew

{{compat}}

### pubwickeycwedentiaw

{{compat}}

### authenticatowwesponse

{{compat}}

### authenticatowattestationwesponse

{{compat}}

### a-authenticatowassewtionwesponse

{{compat}}

### pubwickeycwedentiawcweationoptions

{{compat}}

### pubwickeycwedentiawwequestoptions

{{compat}}
