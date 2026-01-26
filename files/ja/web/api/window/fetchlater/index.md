---
title: "Window: fetchLater() メソッド"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

**`fetchLater()`** は {{domxref("Window")}} インターフェイスのメソッドで、遅延取得を作成します。

`fetchLater()` リクエストは、ページが離脱された時点（ページが破棄されるか [bfcache](/ja/docs/Glossary/bfcache) に入る時点）、または指定された `activateAfter` タイムアウト経過後のいずれか早い方で行われます。

`fetchLater()` メソッドは、リクエストが送信済みかどうかを示す単一の `activated` 値を含む {{domxref("FetchLaterResult")}} オブジェクトを返します。このメソッドは、実際の取得が行われた時点での結果（文書が破棄された後に送信されることが多い）を返さず、取得のレスポンス全体（本文やヘッダーを含む）は無視されることに注意してください。

{{domxref("ReadableStream")}} を本文とするリクエストは遅延できません。

`fetchLater()` メソッドの制御は、取得されるリソースのディレクティブではなく、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)の `connect-src` ディレクティブによって行われます

## 構文

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### 引数

`fetchLater()`メソッドは、{{domxref("Window.fetch", "fetch()")}} と全く同じ引数を受け取りますが、 1 つ追加で `activateAfter` オプションがあります。

- `resource`
  - : 取得したいリソースを定義します。{{domxref("Window.fetch", "fetch()")}} と同じで、以下のどちらかが使用できます。
    - 文字列または{{Glossary("stringifier", "文字列化")}}できるその他のオブジェクト（{{domxref("URL")}} オブジェクトを含む）。取得したいリソースの直接の URL を含む文字列です。この URL は、ウィンドウコンテキストでは文書内の {{domxref("Node.baseURI", "baseURI")}} となります。
    - {{domxref("Request")}} オブジェクト。

- `options` {{optional_inline}}
  - : リクエストに適用する独自の設定を含む {{domxref("DeferredRequestInit")}} オブジェクトです。結果を送信する前に遅延させる時間を定義する `activateAfter` タイムアウト値を含みます。

### 例外

`fetchLater()` では、[`fetch()` と同じ例外](/ja/docs/Web/API/Window/fetch#例外)に加え、以下の追加の例外が発生する可能性があります。

- {{domxref("QuotaExceededError")}}
  - : この機能の使用は、利用可能な割り当てを超えたためブロックされました。詳細については、[`fetchLater()` の割り当て](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas) を参照してください。`fetchLater()` を呼び出す側は、特にサードパーティの JavaScript を埋め込んでいる場合、ほぼすべてのケースで防御的プログラミングを行い、`QuotaExceededError` エラーを捕捉する必要があります。

- `RangeError` {{domxref("DOMException")}}
  - : `activateAfter` に負の値が指定された場合に発生します。

- `TypeError` {{domxref("DOMException")}}
  - : `fetch()` での理由に加え、この例外は {{domxref("ReadableStream")}} リクエスト（遅延処理不可）や信頼できない URL（例: `http://`）の使用時にも発生します。

### 返値

{{domxref("FetchLaterResult")}} リクエストが送信済みであるかどうかを示す `activated` 論理プロパティを含みます。

> [!NOTE]
> フェッチリクエストが送信されると、そのレスポンス（本文とヘッダーを含む）は利用可能にならず、無視されます。

## 例

[`fetchLater()` の割り当て量](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas) の記事では、割り当て量がどのように適用されるかの例が示されています。

### ページから離脱または閉じられるまで`GET`リクエストを遅延させる

```js
fetchLater("/send_beacon");
```

### `POST` リクエストを約 1 分間遅延させる

この例では、{{domxref("Request")}} を作成し、`activateAfter` 値を指定してリクエスト送信を 60,000 ミリ秒（1 分）遅延させます。

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 分
});
```

> [!NOTE]
> 実際の送信時刻は不明です。ブラウザーは、遅延フェッチのバッチ処理の最適化などを行うため、待機時間が長くなったり短くなったりする可能性があるためです。

### `POST` リクエストを約 1 分間遅延させる（try/catch を使用）

上記の例と同じですが、ベストプラクティスとしてはこれを try/catch で囲むことです。

```js
try {
  fetchLater("/send_beacon", {
    method: "POST",
    body: getBeaconData(),
    activateAfter: 60000, // 1 分
  });
} catch (e) {
  if (e instanceof QuotaExceededError) {
    // 割り当てエラーを処理
  } else {
    // その他のエラーを処理
  }
}
```

### `POST` リクエストを約 1 分間遅延させ、送信されたかどうかを確認する関数を作成する

```js
const result = fetchLater("https://report.example.com", {
  method: "POST",
  body: JSON.stringify(myReport),
  activateAfter: 60000 /* 1 分 */,
});

function checkIfFetched() {
  return result.activated;
}
```

### 待機中のリクエストを更新する

この例では、 {{domxref("AbortController")}} を使用してリクエストを取り消し、再作成します。

```js
let beaconResult = null;
let beaconAbort = null;

function updateBeacon(data) {
  const pending = !beaconResult || !beaconResult.activated;
  if (pending && beaconAbort) {
    beaconAbort.abort();
  }

  createBeacon(data);
}

function createBeacon(data) {
  if (beaconResult && !beaconResult.activated) {
    // 前回のビーコンがまだ待機中の場合は、重複したビーコンの作成を避けることができる
    return;
  }

  beaconAbort = new AbortController();
  beaconResult = fetchLater({
    url: data,
    signal: beaconAbort.signal,
  });
}
```

### 不正な例

次の`fetchLater()`呼び出しのいずれも例外が発生します。

```js
// 信頼性のある可能性のある URL のみが使用できる
fetchLater("http://untrusted.example.com");

// 遅延リクエストの長さは把握されている必要がある
fetchLater("https://origin.example.com", { body: someDynamicStream });

// 遅延取得はアクティブなウィンドウでのみ動作する
const detachedWindow = iframe.contentWindow;
iframe.remove();
detachedWindow.fetchLater("https://origin.example.com");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`fetchLater()` API](/ja/docs/Web/API/fetchLater_API)
- [`fetchLater()` の割り当て](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas)
- {{domxref("FetchLaterResult")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
