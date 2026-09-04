---
title: 画面起動ロック API
slug: Web/API/Screen_Wake_Lock_API
l10n:
  sourceCommit: 50f826047f483a04d29c553da53aed365b138bee
---

{{DefaultAPISidebar("Screen Wake Lock API")}}{{securecontext_header}}

**画面起動ロック API** は、アプリケーションの実行を継続する必要がある場合に、端末が画面を暗くしたり、ロックしたりするのを防ぐ方法を提供します。

## 概念と使い方

ほとんどの端末は、ハードウェアの寿命を延ばすために、一定時間が経過すると画面をオフにすることが既定になっています。最近の端末は、バッテリーの消費電力を節約するためにこれを行っています。これは有益な機能ですが、アプリケーションによっては、使いやすくするために画面が起動したままの状態にする必要があるものもあります。

画面起動ロック API は、画面の消灯、輝度低下、およびロックを防止します。これにより、表示中（アクティブ）の文書がプラットフォームの画面起動ロックを取得するための、プラットフォームベースのシンプルなソリューションが可能になります。

画面を表示したままにする用途はたくさんあります。電子書籍の閲覧、地図ナビゲーション、レシピの確認、聴衆へのプレゼンテーション、 QR/バーコードのスキャン、（画面を表示し続けるためのよく使う）触覚入力ではなく音声やジェスチャーコントロールを使用するアプリケーションなどです。

{{DOMxRef("WakeLockSentinel")}} オブジェクトを取得するには、 {{domxref('WakeLock.request','navigator.wakeLock.request()')}} を呼び出します。これはプラットフォームが許可していれば解決する {{jsxref('Promise')}} ベースのメソッドです。リクエストが拒否される理由はいくつかあります。例えば、システム設定（省電力モードやバッテリー残量が少ない場合など）、文書がアクティブでない、または表示されていないなどです。
アプリケーションが後で解放を制御できるように、番人オブジェクトへの参照を保存しておくのが良いやり方です。

基礎となるシステムの起動ロックには、見張り (sentinel) が割り当てられます。これは、バッテリーの残量が少なくなったり、文書がアクティブでなくなったり、または表示されなくなったりした場合などに、システムによって解放されます。また、 {{domxref('WakeLockSentinel.release()')}} メソッドを使用して手動で解除することもできます。
`WakeLockSentinel` は、解放されるとそれ以上使用できなくなります。画面の起動ロックが再度、あるいは引き続き必要な場合は、アプリケーションが新たに起動ロックを要求する必要があります。

画面起動ロック API を使用して画面を表示したままにするのは、ユーザビリティを向上させる目的で行うべきです。インターフェイス上で画面ロックが有効になっているかどうかを表示したり、またはユーザーが望むならそれを無効にする方法を表示したりするのはいい考えです。

## インターフェイス

- {{domxref("WakeLock")}}
  - : アプリケーションが実行し続ける必要があるときに画面が暗くなるのを防いだり、ロックされたりするのを防止します。
- {{domxref("WakeLockSentinel")}}
  - : 基礎となるプラットフォームの起動ロックへのハンドルを提供し、参照されている場合は、手動で解放および再取得することができます。このオブジェクトのインスタンスを取得するには、 {{domxref('WakeLock.request')}} を呼び出してください。

### 他のインターフェイスへの拡張

- {{domxref("Navigator.wakeLock")}} {{ReadOnlyInline}}
  - : {{domxref("WakeLock")}} オブジェクトのインスタンスを返します。ここから他のすべての機能にアクセスできます。

- [`Permissions-Policy: screen-wake-lock`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock)
  - : この API へのアクセスは、[`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy) ディレクティブの `screen-wake-lock` によって制限されています。
    下記の[セキュリティの注意事項](#セキュリティの注意事項)を参照してください。

## 例

### 機能検出

このコードは、起動ロックに対応しているかどうかをチェックし、それに応じて UI を更新します。

```js
if ("wakeLock" in navigator) {
  isSupported = true;
  statusElem.textContent = "起動ロック API に対応しています。";
} else {
  wakeButton.disabled = true;
  statusElem.textContent = "このブラウザーは起動ロックに対応していません。";
}
```

### 起動ロックの要求

次の例は、 {{domxref('WakeLockSentinel')}} オブジェクトを要求する方法を示しています。{{domxref('WakeLock.request')}} メソッドは {{jsxref('Promise')}} ベースなので、非同期関数を作成し、 UI を更新して起動ロックが有効であることを反映させることができます。

```js
// 起動ロックの参照を作成
let wakeLock = null;

// 非同期関数を作成して起動ロックをリクエスト
try {
  wakeLock = await navigator.wakeLock.request("screen");
  statusElem.textContent = "起動ロックが有効です。";
} catch (err) {
  // 起動ロックのリクエストに失敗。ふつうはバッテリーなどのシステム関連
  statusElem.textContent = `${err.name}, ${err.message}`;
}
```

### 起動ロックの解放

以下の例は、以前取得した起動ロックを開放する方法を示しています。

```js
wakeLock.release().then(() => {
  wakeLock = null;
});
```

### 起動ロック解放の表示

この例では、何らかの方法で起動ロックが解放された場合（アクティブウィンドウやタブから移動した場合など）に UI を更新します。

```js
wakeLock.addEventListener("release", () => {
  // 起動ロックが解放
  statusElem.textContent = "起動ロックが解放されました";
});
```

### 起動ロックの再取得

以下のコードは、文書の可視性が変化し、起動ロックが解除された場合に、起動ロックを再取得するものです。

```js
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    wakeLock = await navigator.wakeLock.request("screen");
  }
});
```

### すべてをまとめる

[GitHub にある完全なコードはこちら](https://github.com/mdn/dom-examples/tree/main/screen-wake-lock-api)にあります。[デモ](https://mdn.github.io/dom-examples/screen-wake-lock-api/)では、ボタンで起動ロックの取得と解除を行い、 UI を更新しています。また、何らかの理由で起動ロックが自動的に解除された場合も UI が更新されます。チェックボックスがあり、これをオンにすると、文書の表示状態が変化して再び表示されるようになった場合に、起動ロックを自動的に再取得することができます。

## パフォーマンスの注意事項

- 常時画面を表示する必要があったアクティビティが終了した時点で、画面起動ロックを解除してください。例えば、 QR コードを使ってチケット情報を送信するチケット販売アプリでは、 QR コードを表示している間は（コードの読み取りを成功させるために）画面起動ロックを取得しても良いのですが、終わったら解除してください。プレゼンテーションアプリでは、プレゼンテーションがアクティブな間のみロックを保持し、プレゼンテーションの編集中はロックを保持しないようにしてください。
- アプリが長時間ダウンロードを行う場合は、バックグラウンドフェッチの使用を検討してください。
- アプリがリモートサーバーからデータを同期している場合は、バックグラウンド同期を使用することを検討してください。
- アクティブな文書のみがスクリーン起動ロックを取得でき、文書が非アクティブになると、以前に取得したロックは自動的に解放されます。したがって、文書がアクティブになったら、必要に応じてスクリーン起動ロックを再取得するようにしてください（[visibilitychange](/ja/docs/Web/API/Document/visibilitychange_event) イベントを待ち受けます）。

## セキュリティの注意事項

画面起動ロック API へのアクセスは、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)の {{HTTPHeader("Permissions-Policy/screen-wake-lock","screen-wake-lock")}} ディレクティブによって制御されています。

[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) を使用する場合、`screen-wake-lock` のデフォルトの許可リストは `self` です。
これにより、同一オリジンのネストされたフレームではロック解除の使用が許可されますが、サードパーティのコンテンツによるロックの使用は阻止されます。
サードパーティによる使用を有効にするには、サーバーがまず `Permissions-Policy` ヘッダーを設定し、特定のサードパーティのオリジンに権限を付与する必要があります。

```http
Permissions-Policy: screen-wake-lock=(self b.example.com)
```

その場合、そのオリジンからのリソースについては、フレームのコンテナ要素に `allow="screen-wake-lock"` 属性を追加する必要があります。

```html
<iframe src="https://b.example.com" allow="screen-wake-lock"></iframe>
```

また、ブラウザーは、ユーザー設定やプラットフォーム設定など、実装固有の理由により、特定の文書における画面ロックをブロックする場合があります。
ブラウザーは、起動ロックが有効な際にユーザーに通知するための目立たない仕組みを提供し、ユーザーがアプリケーションの画面ロックを解除できる機能を提供することが期待されています。

[権限 API](/ja/docs/Web/API/Permissions_API) の `screen-wake-lock` 権限を使用すると、画面ロック機能の使用権限が `granted`、`denied`、`prompt`（プロンプトに対するユーザーの承認が必要）のどれかであるかを検査できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Stay awake with the Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/) - developer.chrome.com
