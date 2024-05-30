---
title: "Performance: measureUserAgentSpecificMemory() メソッド"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{APIRef("Performance API")}} {{SeeCompatTable}}

**`measureUserAgentSpecificMemory()`** メソッドは、すべての iframe とワーカーを含むウェブアプリケーションのメモリー使用量を推定するために使用します。

## 解説

ブラウザーはオブジェクトが作成されると自動的にメモリーを確保し、オブジェクトに到達できなくなるとメモリーを解放します（ガベージコレクション）。このガベージコレクション (GC) は、特定のメモリーがまだ必要かどうかを判断する一般的な問題が不可能であるため、近似的なものです（[JavaScript のメモリー管理](/ja/docs/Web/JavaScript/Memory_management)も参照）。ウェブ開発者は、オブジェクトがガベージコレクションされ、メモリーがリークせず、メモリー使用量が時間経過に伴って不必要に増加し、ウェブアプリケーションの動作が遅くなったり応答しなくなったりしないようにする必要があります。メモリーリークは通常、イベントリスナーの登録を解除し忘れたり、ワーカーを閉じなかったり、配列にオブジェクトを蓄積したりすることで発生します。

`measureUserAgentSpecificMemory()` API は、メモリー使用量データを集約して、メモリーリークを探すのに役立ちます。メモリーの回帰検出や A/B テスト機能のメモリーへの影響を評価するために使用することができます。このメソッドを単一のメソッドで呼び出すよりも、定期的に呼び出してセッションの再生時間中にメモリー使用量がどのように変化するかを追跡する方がよいでしょう。

この API が返す `byte` 値は実装に大きく依存するため、ブラウザー間や同じブラウザーの異なるバージョン間で比較することはできません。また、 `breakdown` と `attribution` 配列がどのように指定されたかはブラウザー次第です。このデータについてはハードコーディングしない方が良いでしょう。この API はむしろ、データを集計してサンプル間の違いを分析するために定期的に（ランダムな間隔で）呼び出されることを意味しています。

## 構文

```js-nolint
measureUserAgentSpecificMemory()
```

### 引数

None.

### 返値

以下のプロパティを格納するオブジェクトに解決する {{jsxref("Promise")}} です。

- `bytes`
  - : メモリーの総使用量を表す数値です。
- `breakdown`
  - : `bytes` の合計を分割し、属性と型情報を提供するオブジェクトの {{jsxref("Array")}} です。このオブジェクトは以下のプロパティを持ちます。
    - `bytes`
      - : この項目が記述するメモリーのサイズ。
    - `attribution`
      - : メモリーを使用する JavaScript 領域のコンテナー要素の {{jsxref("Array")}} です。このオブジェクトは以下のプロパティを持ちます。
        - `url`
          - : この属性が同一オリジンの JavaScript 領域に対応する場合、このプロパティはその領域の URL を保持します。そうでない場合は文字列 "cross-origin-url" となります。
        - `container`
          - : この JavaScript 領域を含む DOM 要素を記述するオブジェクト。このオブジェクトは以下のプロパティを持ちます。
            - `id`
              - : コンテナー要素の `id` 属性。
            - `src`
              - : コンテナー要素の `src` 属性。コンテナー要素が {{HTMLElement("object")}} 要素の場合、このフィールドには `data` 属性の値が格納されます。
        - `scope`
          - : 同一オリジンの JavaScript 領域の型を記述する文字列です。 `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"`, `"cross-origin-aggregated"` のいずれかです。
    - `types`
      - : メモリーに関連付けられた実装で定義するメモリー型の配列です。

返値の例はこのようになります。

```js
{
  bytes: 1500000,
  breakdown: [
    {
      bytes: 1000000,
      attribution: [
        {
          url: "https://example.com",
          scope: "Window",
        },
      ],
      types: ["DOM", "JS"],
    },
    {
      bytes: 0,
      attribution: [],
      types: [],
    },
    {
      bytes: 500000,
      attribution: [
        {
          url: "https://example.com/iframe.html"
          container: {
            id: "example-id",
            src: "redirect.html?target=iframe.html",
          },
          scope: "Window",
        }
      ],
      types: ["JS", "DOM"],
    },
  ],
}
```

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : オリジン間情報漏えいを防ぐセキュリティ要求が履行されていなければ発生します。

## セキュリティ要件

ウェブサイトが[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)にある必要があります。

サイトをオリジン間分離するためには、 2 つのヘッダーを設定する必要があります。

- [`Cross-Origin-Opener-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) で `same-origin` を値として指定したもの（攻撃からオリジンを保護）
- [`Cross-Origin-Embedder-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) で `require-corp` または `credentialless` を値として指定したもの（オリジンから被害者を保護）

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

オリジン間の分離が成功したかどうかを調べるには、ウィンドウとワーカーのコンテキストで利用可能な {{domxref("Window.crossOriginIsolated")}} プロパティまたは {{domxref("WorkerGlobalScope.crossOriginIsolated")}} プロパティをテストします。

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## 例

### メモリーの使用状況を監視

以下のコードは、[指数分布](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation)を使用して、 5 分に 1 回、ランダムな間隔で `measureUserAgentSpecificMemory()` メソッドを呼び出す方法を示しています。

```js
function runMemoryMeasurements() {
  const interval = -Math.log(Math.random()) * 5 * 60 * 1000;
  console.log(`Next measurement in ${Math.round(interval / 1000)} seconds.`);
  setTimeout(measureMemory, interval);
}

async function measureMemory() {
  const memorySample = await performance.measureUserAgentSpecificMemory();
  console.log(memorySample);
  runMemoryMeasurements();
}

if (crossOriginIsolated) {
  runMemoryMeasurements();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("setTimeout()")}}
- [Monitor your web page's total memory usage with measureUserAgentSpecificMemory() - web.dev](https://web.dev/articles/monitor-total-page-memory-usage)
