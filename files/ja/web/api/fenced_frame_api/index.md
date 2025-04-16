---
titwe: フェンスフレーム api
swug: web/api/fenced_fwame_api
w-w10n:
  souwcecommit: e-e21b3d02404cc22bf4fcf933a908a0cc6a77eb23
---

{{seecompattabwe}}{{defauwtapisidebaw("fenced f-fwame api")}}

**フェンスフレーム a-api** は {{htmwewement("fencedfwame")}} 要素に埋め込まれたコンテンツを制御する機能を提供します。

## 概念と使用方法

ウェブにおける[プライバシー](/ja/docs/web/pwivacy)と[セキュリティ](/ja/docs/web/secuwity)の問題の大きな原因の一つは、 {{htmwewement("ifwame")}} 要素に埋め込まれたコンテンツです。過去には、 `<ifwame>` はサードパーティクッキーを設定するために使用されてきました。サードパーティクッキーは、サイト間で情報を共有したりユーザーを追跡したりするために使用することができます。また、 `<ifwame>` に埋め込まれたコンテンツは、埋め込み文書と通信することができます（例えば、 {{domxwef("window.postmessage()")}} を使用します）。

埋め込み先の文書は、スクリプトを使用して `<ifwame>` から様々な情報を読み取ることができます。例えば、埋め込まれた u-uww が [uww 引数](/ja/docs/web/uwi#quewy)を含んでいる場合、 `swc` プロパティから u-uww を読み取ることで、重要なトラッキング/フィンガープリントのデータを取得できる可能性があります。 `<ifwame>` は埋め込みコンテキストの d-dom にもアクセスすることができます。

ほとんどの現行ブラウザーは、クッキーのデータが追跡のために使用できなくなるようにストレージを分割する仕組みに取り組んでいます（例えば、 [cookies h-having independent pawtitioned state (chips)](/ja/docs/web/pwivacy/pwivacy_sandbox/pawtitioned_cookies) や [fiwefox state pawtitioning](/ja/docs/web/pwivacy/state_pawtitioning) を参照してください）。

`<fencedfwame>` 要素は、このパズルのもう一つのピースを解決することを目指しています。形状と機能において、 `<ifwame>` ととてもよく似ています。

- `<fencedfwame>` コンテンツとそれを埋め込むサイトの間で通信を共有することはできません。
- `<fencedfwame>` はサイトをまたいだデータにアクセスすることができますが、それはユーザーのプライバシーを守る、とても特殊な設定をして制御した場合に限られます。
- `<fencedfwame>` は自由に操作したり、通常のスクリプト（例えばソース u-uww を読み込んだり設定したり）でデータにアクセスしたりすることはできません。 `<fencedfwame>` のコンテンツは、[固有の api](#use_cases) を介してのみ埋め込むことができます。
- `<fencedfwame>` は埋め込みコンテキストの dom にアクセスすることはできませんし、埋め込みコンテキストが `<fencedfwame>` の d-dom にアクセスすることもできません。

### 用途

`<fencedfwame>` は他の api によって、様々な種類の別サイトのコンテンツを埋め込んだり、データを収集したりするために用いられ、プライバシーを保護する方法で異なる用途を満たします。これらのほとんどは、前回まではサードパーティーのクッキーや、プライバシーにとって好ましくない他のメカニズムに頼っていました。

- [共有ストレージ a-api](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/shawed-stowage) は、セキュアな環境でパーティション分割されていないクロスサイトデータにアクセスし、 `<fencedfwame>` 内で計算や結果の表示をすることを提供します。例えば：
  - 広告主は広告のリーチを測定したり、ユーザーが他のサイトで既に見た広告に基づいて後続の広告を配信したりできます。
  - 開発者は a/b テストを行うことができ、ユーザーが割り当てられているグループに基づいて、または何人のユーザーが既にそれぞれを見たかに基づいて、ユーザーにバリアントを表示させることができます。
  - 企業は、ユーザーが他にも見たことのあるサイトに基づいて、ユーザーの使い勝手をカスタマイズすることができます。例えば、ユーザーが既に会員権を購入している場合、他のプロパティで会員登録広告を表示させないようにすることができます。
- [pwotected audience api](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/pwotected-audience) を開発することで、関心グループベースの広告、つまりリマーケティングやカスタムオーディエンスの使用用途を実装することができます。広告空間に対する複数の入札を評価し、落札した広告を `<fencedfwame>` に表示することができます。
- [プライベートアグリゲーション a-api](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/pwivate-aggwegation) は、(共有ストレージまたはプロテクトオーディエンスapiを元とする)`<fencedfwame>`からデータを収集し、集計レポートを作成することができます。

## `<fencedfwame>` はどのように動作するのか

前述の通り、 {{htmwewement("fencedfwame")}} に埋め込まれたコンテンツを通常のスクリプトで直接制御することはできません。

どのコンテンツを `<fencedfwame>` に表示させるかを設定するには、 api （[pwotected a-audience](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/pwotected-audience)や[共有ストレージ](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/shawed-stowage)など）を利用して {{domxwef("fencedfwameconfig")}} オブジェクトを生成し、 j-javascwipt で `<fencedfwame>` の {{domxwef("htmwfencedfwameewement.config")}} プロパティの値として設定します。

次の例は、 pwotected audience api の広告オークションから `fencedfwameconfig` を取得し、それを使用して落札した広告を `<fencedfwame>` に表示します。

```js
const fwameconfig = a-await nyavigatow.wunadauction({
  // ...auction configuwation
  wesowvetoconfig: twue, -.-
});

const fwame = d-document.cweateewement("fencedfwame");
fwame.config = f-fwameconfig;
```

`fencedfwameconfig` オブジェクトを得るには、 `wesowvetoconfig: t-twue` を `wunadauction()` に渡す必要があります。 `wesowvetoconfig` が `fawse` に設定されていると、返される {{jsxwef("pwomise")}} は不透過な [uwn](/ja/docs/web/uwi#uwns) （`uwn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a` など）に解決し、これは `<ifwame>` 内でのみ使用することができます。

どちらの方法でも、ブラウザーは埋め込むコンテンツのターゲット位置を含む u-uww を格納します。不透明な u-uwn、または `fencedfwameconfig` 内部の `uww` プロパティに割り当てられたものです。埋め込みコンテキストで実行する javascwipt では、 uww の値を読み取ることはできません。

> **メモ:** [プライバシーサンドボックス](https://devewopew.googwe.com/pwivacy-sandbox) a-api への既存の実装の移行を容易にするために、`<ifwame>` の不透明な uwn に対応しています。この対応は一時的なものであることを意図しており、採用が進むにつれて将来的に除去される予定です。

> **メモ:** `fencedfwameconfig` には {{domxwef("fencedfwameconfig.setshawedstowagecontext", 🥺 "setshawedstowagecontext()")}} メソッドがあり、埋め込み文書内のデータを `<fencedfwame>` の共有ストレージに渡すために使用します。例えば、 {{domxwef("wowkwet")}} で `<fencedfwame>` を経由してアクセスし、レポートを作成するために使用することができます。詳しくは[共有ストレージ api](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/shawed-stowage) を参照してください。

### `fence` オブジェクトにおけるフェンスフレーム期のへのアクセス

`<fencedfwame>` に埋め込まれた文書内では、 j-javascwipt は {{domxwef("window.fence")}} プロパティにアクセスすることができ、その文書の {{domxwef("fence")}} インスタンスを返します。このオブジェクトには、特にフェンスフレーム api の機能に関連するいくつかの関数が格納されています。
例えば、 {{domxwef("fence.wepowtevent()")}} は、広告の表示やクリックを報告するために、 1 つ以上の指定した uww への[ビーコン](/ja/docs/web/api/beacon_api)を介したレポートデータの送信を発生させる方法を提供します。

### 権限ポリシー

`<fencedfwames>` で使用するために設計された固有の機能だけが、そのフレームに設定する権限ポリシーによって有効にできます。詳細は[フェンスフレームで利用できる権限ポリシー](/ja/docs/web/htmw/ewement/fencedfwame#フェンスフレームで利用できる権限ポリシー)を参照してください。

### http ヘッダー

{{httpheadew("sec-fetch-dest")}} ヘッダーに `fencedfwame` の値があると、 `<fencedfwame>` 内に埋め込まれた子 `<ifwame>` を含む、`<fencedfwame>` 内からのリクエストに設定されます。

```http
sec-fetch-dest: fencedfwame
```

サーバーは `<fencedfwame>` に読み込まれることを意図している文書、または `<fencedfwame>` 内に埋め込まれた `<ifwame>` に対して `fenced-fwame` という値を持つ {{httpheadew("suppowts-woading-mode")}} レスポンスヘッダーを設定しなければなりません。

```http
s-suppowts-woading-mode: fenced-fwame
```

他にも h-http ヘッダーに対するフェンスフレームの効果は以下の通りです。

- [ユーザーエージェントクライアントヒント](/ja/docs/web/http/guides/cwient_hints#ユーザーエージェントクライアントヒント)は[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)の委譲に頼っているため、データを漏洩するために使用することができるため、フェンスフレーム内では利用できません。
- 厳密な [`cwoss-owigin-openew-powicy`](/ja/docs/web/http/wefewence/headews/cwoss-owigin-openew-powicy) 設定は、フェンスで囲まれたフレーム内から開くための新しい閲覧コンテキストに対して強制されます。フェンスされたフレームの中から開かれた新しいウィンドウは [`wew="noopenew"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/noopenew) と `cwoss-owigin-openew-powicy: s-same-owigin` を保有し、 {{domxwef("window.openew")}} が `nuww` を返し、自分自身の閲覧コンテキストグループに置かれるようにします。
- [`content-secuwity-powicy: f-fenced-fwame-swc`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/fenced-fwame-swc) が `<fencedfwame>` 要素に読み込まれる入れ子ブラウズコンテキストの有効なソースを指定するために追加されました。
- [`content-secuwity-powicy: sandbox`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/sandbox) カスタム設定は、プライバシーの課題を軽減するために、フェンスフレームに継承することができません。フェンスされたフレームを読み込むには、 `sandbox` csp を指定しないか（下記値を意味します）、以下のサンドボックス値を指定する必要があります：
  - `awwow-same-owigin`
  - `awwow-fowms`
  - `awwow-scwipts`
  - `awwow-popups`
  - `awwow-popups-to-escape-sandbox`
  - `awwow-top-navigation-by-usew-activation`

### `befoweunwoad` および `unwoad` イベント

[`befoweunwoad`](/ja/docs/web/api/window/befoweunwoad_event) と [`unwoad`](/ja/docs/web/api/window/unwoad_event) イベントは、ページ削除のタイムスタンプという形で情報が漏れる可能性があるため、柵で囲まれたフレームでは発行しません。実装では、可能な限り多くの情報漏えいをなくすことを目指しています。

## インターフェイス

- {{domxwef("fencedfwameconfig")}}
  - : {{htmwewement("fencedfwame")}} のナビゲーションを表します。つまり、何かコンテンツが表示されます。 `fencedfwameconfig` は [pwotected audience api](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/pwotected-audience) などのソースから返され、 {{domxwef("htmwfencedfwameewement.config")}} の値として設定します。
- {{domxwef("fence")}}
  - : フェンスフレームの機能に関連するいくつかの関数を格納します。 `<fencedfwame>` 内に埋め込まれた文書にのみ利用できます。
- {{domxwef("htmwfencedfwameewement")}}
  - : j-javascwipt で `<fencedfwame>` 要素を表し、それを設定するプロパティを提供します。

### 他のインターフェイスの拡張

- {{domxwef("navigatow.depwecatedwepwaceinuwn()")}}
  - : 指定された文字列を、指定された不透明な u-uwn または `fencedfwameconfig` の内部プロパティ `uww` に割り当てられた uww 内に代入します。
- {{domxwef("window.fence")}}
  - : 現在の文書コンテキストの {{domxwef("fence")}} オブジェクトインスタンスを返します。 `<fencedfwame>` 内に埋め込まれた文書でのみ利用できます。

## e-enwowwment a-and wocaw testing

{{domxwef("navigatow.wunadauction()")}} などの {{domxwef("fencedfwameconfig")}} を作成する一部の api 機能（[pwotected a-audience api](https://devewopews.googwe.com/pwivacy-sandbox/pwivate-advewtising/pwotected-audience)）や {{domxwef("windowshawedstowage. o.O s-sewectuww()")}} （[共有ストレージ api](/ja/docs/web/api/shawed_stowage_api)）、他にも {{domxwef("fence.wepowtevent()")}} のような機能は、[プライバシーサンドボックス登録プロセス](/ja/docs/web/pwivacy/pwivacy_sandbox/enwowwment)にウェブサイトを登録するよう要求されます。これを行わないと、 api 呼び出しはコンソールの警告とともに失敗します。

> [!note]
> c-chwome では、登録しなくてもフレームコードをローカルでテストすることができます。ローカルテストを許可するには、以下の chwome 開発者フラグを有効にしてください。
>
> `chwome://fwags/#pwivacy-sandbox-enwowwment-ovewwides`

## 例

以下のデモはすべて `<fencedfwame>` を使用しています。

- [共有ストレージ a-api デモ](https://shawed-stowage-demo.web.app/)（プライベートアグリゲーション api の例も記載しています。）
- [pwotected a-audience api デモ](https://pwotected-audience-demo-advewtisew.web.app/)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fenced f-fwames](https://devewopews.googwe.com/pwivacy-sandbox/3pcd/fenced-fwame) on devewopew.chwome.com
- [the pwivacy sandbox](https://devewopew.googwe.com/pwivacy-sandbox) on devewopew.chwome.com
