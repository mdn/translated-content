---
title: "InstallEvent: addRoutes() メソッド"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Service Workers API")}}

**`addRoutes()`** は {{domxref("InstallEvent")}} インターフェイスのメソッドで、1 つ以上の静的ルートを指定します。これらは、サービスワーカーの起動前であっても使用される、指定されたリソースを取得するためのルールを定義します。これにより、例えば、常にネットワークやブラウザーの {{domxref("Cache")}} からリソースを取得したい場合などに、サービスワーカーをバイパスすることができるので、不要なサービスワーカーの処理サイクルによるパフォーマンス上のオーバーヘッドを避けることができます。

## 更新

```js-nolint
addRoutes(routerRules)
```

### 引数

- `routerRules`
  - : 特定のリソースをどのように取得すべきかというルールを表す、単一のオブジェクト、または 1 つ以上のオブジェクトからなる配列です。各 `routerRules` オブジェクトには、以下のプロパティが含まれています。
    - `condition`
      - : このルールに一致すべきリソースを指定する、1 つ以上の条件を定義するオブジェクト。以下のプロパティを含めることができます。複数のプロパティが使用される場合、リソースは指定されたすべての条件を満たして初めて、このルールに一致することになります。
        - `not` {{optional_inline}}
          - : ルールに一致するために、明示的に**満たなければならない**条件を定義する `condition` オブジェクト。`not` 条件内で定義された条件は、それ以外にも存在する条件と相互に排他的です。
        - `or` {{optional_inline}}
          - : `condition` オブジェクトの配列です。この定義された条件のうち、少なくとも1つが満たされる必要があります。`or` 条件内で定義された条件は、他の条件と相互に排他的です。
        - `requestMethod` {{optional_inline}}
          - : ルールに一致するためにリクエストが送信されるべき [HTTP メソッド](/ja/docs/Web/HTTP/Reference/Methods)を表す文字列。例えば `"get"`, `"put"`, `"head"` などです。
        - `requestMode` {{optional_inline}}
          - : ルールに一致するためにリクエストが持つべき[モード](/ja/docs/Web/API/Request/mode)を表す文字列。例えば、`"same-origin"`, `"no-cors"`, `"cors"` などです。
        - `requestDestination` {{optional_inline}}
          - : リクエストの[出力先](/ja/docs/Web/API/Request/destination)を表す文字列。つまり、ルールに一致させるために、どのコンテンツタイプをリクエストすべきかを示すものです。例えば、`"audio"`, `"document"`, `"script"`, `"worker"` などがあります。
        - `runningStatus` {{optional_inline}}
          - : ルールに一致するリクエストに対して、サービスワーカーに必要な実行状態を表す列挙値です。値は `"running"` または `"not-running"` のどちらかになります。
        - `urlPattern` {{optional_inline}}
          - : ルールに一致する URL を表す {{domxref("URLPattern")}} インスタンス、または `URLPattern()` コンストラクターの [`input`](/ja/docs/Web/API/URLPattern/URLPattern#input) パターン。正規表現のキャプチャグループは使用できないため、{{domxref("URLPattern.hasRegExpGroups")}} は `false` でなければなりません。

    - `source`
      - : 一致するリソースが読み込まれるソースを指定する列挙値またはオブジェクト。取りうる列挙値は次のとおりです。
        - `"cache"`
          - : リソースはブラウザーのキャッシュ ({{domxref("Cache")}}) から読み込まれます。
        - `"fetch-event"`
          - : リソースは、サービスワーカーの {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} イベントハンドラーを介して読み込まれます。これを `"runningStatus"` 条件と組み合わせることで、サービスワーカーが実行中の場合はそこからリソースを読み込み、実行されていない場合はネットワーク上の静的ルートに代替させることができます。
        - `"network"`
          - : リソースはネットワークから読み込まれます。
        - `"race-network-and-fetch-handler"`
          - : ネットワークからのリソース読み込みと、サービスワーカーの {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} イベントハンドラーによる処理が同時に実行されます。どちらが先に完了した方が使用されます。

        `source` の値には、`cacheName` という単一のプロパティを含むオブジェクトを設定することもできます。このプロパティの値は、ブラウザーの {{domxref("Cache")}} の名前を表す文字列です。一致するリソースは、その名前のキャッシュが存在する場合、そのキャッシュから読み込まれます。

### 返値

{{jsxref("Promise")}} であり、`undefined` で履行されます。

### 例外

- `TypeError` {{domxref("DOMException")}}
  - : `routerRules` 内のルールオブジェクトのうち、1 つ以上が不正な状態である場合、または関連付けられたサービスワーカーに {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} イベントハンドラーを持たないにもかかわらず、`source` の値が `"fetch-event"` である場合に発生します。また、`or` を別の条件タイプと組み合わせようとした場合にも発生します。

## 例

### サービスワーカーが実行されていない場合は、リクエストをネットワークに転送する

次の例では、サービスワーカーが現在実行されていない場合、`/articles` で始まる URL はネットワークにルーティングされます。

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      urlPattern: "/articles/*",
      runningStatus: "not-running",
    },
    source: "network",
  });
});
```

### POST リクエストをネットワークにルーティングする

次の例では、フォームへの [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) リクエストが、サービスワーカーを経由せずに直接ネットワークに送信されます。

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      urlPattern: "/form/*",
      requestMethod: "post",
    },
    source: "network",
  });
});
```

### 特定の画像タイプのリクエストを、名前付きキャッシュに転送する

次の例では、ブラウザーの {{domxref("Cache")}} のうち、`"pictures"` という名前が付いたものを使用して、拡張子が `.png` または `.jpg` のファイルを取得します。

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      or: [{ urlPattern: "*.png" }, { urlPattern: "*.jpg" }],
    },
    source: {
      cacheName: "pictures",
    },
  });
});
```

> [!NOTE]
> キャッシュが存在しない場合、ブラウザーはデフォルトでネットワークを使用するため、ネットワークが利用できる場合、リクエストされたリソースを取得することができます。

`or` を別の条件と組み合わせることはできません。そうすると `TypeError` が発生します。例えば、拡張子が `.png` または `.jpg` のファイルを、かつ `requestMethod` が `get` の場合にのみ一致させたい場合は、2 つの条件を別個に指定する必要があります。

```js
addEventListener("install", (event) => {
  event.addRoutes(
    {
      condition: {
        urlPattern: "*.png",
        requestMethod: "get",
      },
      source: {
        cacheName: "pictures",
      },
    },
    {
      condition: {
        urlPattern: "*.jpg",
        requestMethod: "get",
      },
      source: {
        cacheName: "pictures",
      },
    },
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("InstallEvent")}}
- [`install` イベント](/ja/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [Use the Service Worker Static Routing API to bypass the service worker for specific paths](https://developer.chrome.com/blog/service-worker-static-routing) - `developer.chrome.com` (2024)
