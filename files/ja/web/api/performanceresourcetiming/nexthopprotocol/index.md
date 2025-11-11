---
title: PerformanceResourceTiming.nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`nextHopProtocol`** は読み取り専用プロパティで、リソースを取得するために使用されるネットワークプロトコルを表す [ALPN プロトコル ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids) で識別される文字列です。

プロキシーが使用されている場合、トンネル接続が確立されていると、このプロパティはトンネリングプロトコルの ALPN プロトコル ID を返します。それ以外の場合、このプロパティはプロキシーへの最初のホップの ALPN プロトコル ID を返します。

## 値

`nextHopProtocol` プロパティは、以下の値を取ります。

- リソースを取得するために使用されるネットワークプロトコルを表す [ALPN プロトコル ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids) で識別される文字列。よくある値は次の通りです。
  - `"http/0.9"`
  - `"http/1.0"`
  - `"http/1.1"`
  - `"h2"`
  - `"h2c"`
  - `"h3"`
- リソースがオリジン間リクエストで、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} ヘッダーが使用されていない場合は空文字列。

## 例

### HTTP/2 も HTTP/3 も使用していないリソースを記録

`nextHopProtocol` プロパティを使用すると、HTTP/2 や HTTP/3 プロトコルを使用しないリソースを確認することができます。

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const protocol = entry.nextHopProtocol;
    if (protocol && !(protocol === "h2" || protocol === "h3")) {
      console.log(`${entry.name} uses ${protocol}.`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const protocol = entry.nextHopProtocol;
  if (protocol && !(protocol === "h2" || protocol === "h3")) {
    console.log(`${entry.name} uses ${protocol}.`);
  }
});
```

### オリジン間のネットワークプロトコル情報

`nextHopProtocol` プロパティの値が空文字列である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Timing-Allow-Origin")}}
- {{Glossary("HTTP 2", "HTTP/2")}}
- {{Glossary("HTTP 3", "HTTP/3")}}
