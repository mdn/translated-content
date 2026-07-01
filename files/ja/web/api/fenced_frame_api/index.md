---
title: フェンスフレーム API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

> [!WARNING]
> 現在、1 社のブラウザベンダーがこの機能に反対しています。
> 詳細については、下記の[標準化に関する見解](#standards_positions)の節を参照してください。

**フェンスフレーム API** は {{htmlelement("fencedframe")}} 要素に埋め込まれたコンテンツを制御する機能を提供します。

## 概念と使用方法

ウェブにおける[プライバシー](/ja/docs/Web/Privacy)と[セキュリティ](/ja/docs/Web/Security)の問題の大きな原因の一つは、 {{htmlelement("iframe")}} 要素に埋め込まれたコンテンツです。過去には、 `<iframe>` はサードパーティクッキーを設定するために使用されてきました。サードパーティクッキーは、サイト間で情報を共有したりユーザーを追跡したりするために使用することができます。また、 `<iframe>` に埋め込まれたコンテンツは、埋め込み文書と通信することができます（例えば、 {{domxref("Window.postMessage()")}} を使用します）。

埋め込み先の文書は、スクリプトを使用して `<iframe>` から様々な情報を読み取ることができます。例えば、埋め込まれた URL が [URL 引数](/ja/docs/Web/URI/Reference/Query)を含んでいる場合、 `src` プロパティから URL を読み取ることで、重要なトラッキング/フィンガープリントのデータを取得できる可能性があります。 `<iframe>` は埋め込みコンテキストの DOM にもアクセスすることができます。

ほとんどの現行ブラウザーは、クッキーのデータが追跡のために使用できなくなるようにストレージを分割する仕組みに取り組んでいます（例えば、[個別区画化された状態を持つクッキー (CHIPS)](/ja/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) や [Firefox State Partitioning](/ja/docs/Web/Privacy/Guides/State_Partitioning) を参照してください）。

`<fencedframe>` 要素は、このパズルのもう一つのピースを解決することを目指しています。形状と機能において、 `<iframe>` ととてもよく似ています。

- `<fencedframe>` コンテンツとそれを埋め込むサイトの間で通信を共有することはできません。
- `<fencedframe>` はサイトをまたいだデータにアクセスすることができますが、それはユーザーのプライバシーを守る、とても特殊な設定をして制御した場合に限られます。
- `<fencedframe>` は自由に操作したり、通常のスクリプト（例えばソース URL を読み込んだり設定したり）でデータにアクセスしたりすることはできません。 `<fencedframe>` のコンテンツは、[固有の API](#use_cases) を介してのみ埋め込むことができます。
- `<fencedframe>` は埋め込みコンテキストの DOM にアクセスすることはできませんし、埋め込みコンテキストが `<fencedframe>` の DOM にアクセスすることもできません。

フェンスフレームの通信モデルに関する情報については、[埋め込みフレームとの通信](/ja/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames)のガイドをご覧ください。

### 用途

`<fencedframe>` は他の API によって、様々な種類の別サイトのコンテンツを埋め込んだり、データを収集したりするために用いられ、プライバシーを保護する方法で異なる用途を満たします。これらのほとんどは、前回まではサードパーティーのクッキーや、プライバシーにとって好ましくない他のメカニズムに頼っていました。

- [共有ストレージ API](https://privacysandbox.google.com/private-advertising/shared-storage)<sup>(英語)</sup> は、セキュアな環境でパーティション分割されていないクロスサイトデータにアクセスし、 `<fencedframe>` 内で計算や結果の表示をすることを提供します。例えば：
  - 広告主は広告のリーチを測定したり、ユーザーが他のサイトで既に見た広告に基づいて後続の広告を配信したりできます。
  - 開発者は A/B テストを行うことができ、ユーザーが割り当てられているグループに基づいて、または何人のユーザーが既にそれぞれを見たかに基づいて、ユーザーにバリアントを表示させることができます。
  - 企業は、ユーザーが他にも見たことのあるサイトに基づいて、ユーザーの使い勝手をカスタマイズすることができます。例えば、ユーザーが既に会員権を購入している場合、他のプロパティで会員登録広告を表示させないようにすることができます。
- [保護オーディエンス API](https://privacysandbox.google.com/private-advertising/protected-audience)<sup>(英語)</sup> によって、開発者者が関心グループベースの広告、つまりリマーケティングやカスタムオーディエンスの使用用途を実装することができます。広告空間に対する複数の入札を評価し、落札した広告を `<fencedframe>` に表示することができます。
- [プライベートアグリゲーション API](https://privacysandbox.google.com/private-advertising/private-aggregation)<sup>(英語)</sup> は、（共有ストレージまたは保護オーディエンス API を元とする） `<fencedframe>`からデータを収集し、集計レポートを作成することができます。

## `<fencedframe>` はどのように動作するのか

前述の通り、 {{htmlelement("fencedframe")}} に埋め込まれたコンテンツを通常のスクリプトで直接制御することはできません。

どのコンテンツを `<fencedframe>` に表示させるかを設定するには、 API （[Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)や[共有ストレージ](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)など）を利用して {{domxref("FencedFrameConfig")}} オブジェクトを生成し、 JavaScript で `<fencedframe>` の {{domxref("HTMLFencedFrameElement.config")}} プロパティの値として設定します。

次の例は、 Protected Audience API の広告オークションから `FencedFrameConfig` を取得し、それを使用して落札した広告を `<fencedframe>` に表示します。

```js
const frameConfig = await navigator.runAdAuction({
  // … オークション構成
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`FencedFrameConfig` オブジェクトを得るには、`resolveToConfig: true` を `runAdAuction()` に渡す必要があります。 `resolveToConfig` が `false` に設定されていると、返される {{jsxref("Promise")}} は不透過な [URN](/ja/docs/Web/URI/Reference/Schemes/urn) （`urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a` など）に解決し、これを `<iframe>` 内でのみ使用することができます。

どちらの方法でも、ブラウザーは埋め込むコンテンツのターゲット位置を含む URL を格納します。不透明な URN、または `FencedFrameConfig` 内部の `url` プロパティに割り当てられたものです。埋め込みコンテキストで実行する JavaScript では、 URL の値を読み取ることはできません。

> [!NOTE]
> [プライバシーサンドボックス](https://privacysandbox.google.com/) API への既存の実装の移行を容易にするために、`<iframe>` の不透明な URN に対応しています。この対応は一時的なものであることを意図しており、採用が進むにつれて将来的に除去される予定です。

> [!NOTE]
> `FencedFrameConfig` には {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}} メソッドがあり、埋め込み文書内のデータを `<fencedframe>` の共有ストレージに渡すために使用します。例えば、 {{domxref("Worklet")}} で `<fencedframe>` を経由してアクセスし、レポートを作成するために使用することができます。詳しくは[共有ストレージ API](https://privacysandbox.google.com/private-advertising/shared-storage) を参照してください。

### `Fence` オブジェクトにおけるフェンスフレーム機能へのアクセス

`<fencedframe>` に埋め込まれた文書内では、 JavaScript は {{domxref("Window.fence")}} プロパティにアクセスすることができ、その文書の {{domxref("Fence")}} インスタンスを返します。このオブジェクトには、特にフェンスフレーム API の機能に関連するいくつかの関数が格納されています。
例えば、 {{domxref("Fence.reportEvent()")}} は、広告の表示やクリックを報告するために、 1 つ以上の指定した URL への[ビーコン](/ja/docs/Web/API/Beacon_API)を介したレポートデータの送信を発生させる方法を提供します。

### 権限ポリシー

`<fencedframes>` で使用するために設計された特定の機能だけが、そのフレームに設定する権限ポリシーによって有効にできます。詳細は[フェンスフレームで利用できる権限ポリシー](/ja/docs/Web/HTML/Reference/Elements/fencedframe#フェンスフレームで利用できる権限ポリシー)を参照してください。

### HTTP ヘッダー

{{httpheader("Sec-Fetch-Dest")}} ヘッダーに `fencedframe` の値があると、 `<fencedframe>` 内に埋め込まれた子 `<iframe>` を含む、`<fencedframe>` 内からのリクエストに設定されます。

```http
Sec-Fetch-Dest: fencedframe
```

サーバーは `<fencedframe>` に読み込まれることを意図している文書、または `<fencedframe>` 内に埋め込まれた `<iframe>` に対して `fenced-frame` という値を持つ {{httpheader("Supports-Loading-Mode")}} レスポンスヘッダーを設定しなければなりません。

```http
Supports-Loading-Mode: fenced-frame
```

他にも HTTP ヘッダーに対するフェンスフレームの効果は以下の通りです。

- [ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)は[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)の委譲に頼っているため、データを漏洩するために使用することができるため、フェンスフレーム内では利用できません。
- 厳密な [`Cross-Origin-Opener-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy) 設定は、フェンスで囲まれたフレーム内から開くための新しい閲覧コンテキストに対して強制されます。フェンスされたフレームの中から開かれた新しいウィンドウは [`rel="noopener"`](/ja/docs/Web/HTML/Reference/Attributes/rel/noopener) と `Cross-Origin-Opener-Policy: same-origin` を保有し、 {{domxref("Window.opener")}} が `null` を返し、自分自身の閲覧コンテキストグループに置かれるようにします。
- [`Content-Security-Policy: fenced-frame-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) が `<fencedframe>` 要素に読み込まれる入れ子ブラウズコンテキストの有効なソースを指定するために追加されました。
- [`Content-Security-Policy: sandbox`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) カスタム設定は、プライバシーの課題を軽減するために、フェンスフレームに継承することができません。フェンスされたフレームを読み込むには、 `sandbox` CSP を指定しないか（下記値を意味します）、以下のサンドボックス値を指定する必要があります：
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` および `unload` イベント

[`beforeunload`](/ja/docs/Web/API/Window/beforeunload_event) と [`unload`](/ja/docs/Web/API/Window/unload_event) イベントは、ページ削除のタイムスタンプという形で情報が漏れる可能性があるため、柵で囲まれたフレームでは発行しません。実装では、可能な限り多くの情報漏えいをなくすことを目指しています。

## インターフェイス

- {{domxref("FencedFrameConfig")}}
  - : {{htmlelement("fencedframe")}} のナビゲーションを表します。つまり、何かコンテンツが表示されます。 `FencedFrameConfig` は[保護オーディエンス API](https://privacysandbox.google.com/private-advertising/protected-audience)<sup>(英語)</sup> などのソースから返され、{{domxref("HTMLFencedFrameElement.config")}} の値として設定します。
- {{domxref("Fence")}}
  - : フェンスフレームの機能に関連するいくつかの関数を格納します。 `<fencedframe>` 内に埋め込まれた文書にのみ利用できます。
- {{domxref("HTMLFencedFrameElement")}}
  - : JavaScript で `<fencedframe>` 要素を表し、それを設定するプロパティを提供します。

### 他のインターフェイスの拡張

- {{domxref("Navigator.deprecatedReplaceInURN()")}}
  - : 指定された文字列を、指定された不透明な URN または `FencedFrameConfig` の内部プロパティ `url` に割り当てられた URL 内に代入します。
- {{domxref("Window.fence")}}
  - : 現在の文書コンテキストの {{domxref("Fence")}} オブジェクトインスタンスを返します。 `<fencedframe>` 内に埋め込まれた文書でのみ利用できます。

## 登録とローカルテスト

{{domxref("FencedFrameConfig")}} を作成する一部の API 機能、{{domxref("Navigator.runAdAuction()")}}（[保護オーディエンス API](https://privacysandbox.google.com/private-advertising/protected-audience)<sup>(英語)</sup>）や {{domxref("WindowSharedStorage.selectURL()")}} （[共有ストレージ API](/ja/docs/Web/API/Shared_Storage_API)）、{{domxref("Fence.reportEvent()")}} などの機能は、[プライバシーサンドボックス登録プロセス](/ja/docs/Web/Privacy/Guides/Privacy_sandbox#登録)にウェブサイトを登録するよう要求されます。これを行わないと、 API 呼び出しはコンソールの警告とともに失敗します。

> [!NOTE]
> Chrome では、登録しなくてもフレームコードをローカルでテストすることができます。ローカルテストを許可するには、以下の Chrome 開発者フラグを有効にしてください。
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## 例

以下のデモはすべて `<fencedframe>` を使用しています。

- [共有ストレージ API デモ](https://shared-storage-demo.web.app/)（プライベートアグリゲーション API の例も記載しています。）
- [保護オーディエンス API デモ](https://protected-audience-demo-advertiser.web.app/)

## 仕様書

{{Specifications}}

### 標準化に関する見解

1 社のブラウザーベンダーが、この仕様に[反対](/ja/docs/Glossary/Web_standards#opposing_standards)しています。
現在確認されている各ベンダーの立場は以下の通りです。

- Mozilla (Firefox): [Negative](https://github.com/mozilla/standards-positions/issues/781)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) - privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) - privacysandbox.google.com
