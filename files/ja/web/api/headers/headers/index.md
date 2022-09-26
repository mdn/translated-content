---
title: Headers()
slug: Web/API/Headers/Headers
---

{{APIRef("Fetch")}}

**`Headers()`** コンストラクターは新しい {{domxref("Headers")}} オブジェクトを生成します。

## 文法

```
var myHeaders = new Headers(init);
```

### 引数

- `init` {{optional_inline}}
  - : `Headers` に前もって設定したい [HTTP headers](/ja/docs/Web/HTTP/Headers) を含むオブジェクト。これは {{domxref("ByteString")}} を持つ単純なオブジェクトリテラルか、既存の `Headers` オブジェクトのどちらかです。最後の例では、新しい `Headers` オブジェクトは既存の `Headers` オブジェクトからデータを継承します。

## 例

簡単に空の `Headers` オブジェクトを生成できます。

```js
var myHeaders = new Headers(); // Currently empty
```

{{domxref("Headers.append")}} を使用してヘッダーを追加できます。

```js
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // Returns 'image/jpeg'
```

または、`Headers` オブジェクトの生成時に必要なヘッダーを追加することもできます。次のスニペットでは、新しい {{domxref("Headers")}} を作成し、コンストラクターに init オブジェクトを引数として渡してヘッダーを追加しています。

```js
var httpHeaders = { 'Content-Type' : 'image/jpeg', 'Accept-Charset' : 'utf-8', 'X-My-Custom-Header' : 'Zeke are cool' };
var myHeaders = new Headers(httpHeaders);
```

最初の `Headers` を init オブジェクトとして渡して、別の `Headers` オブジェクトを生成できます。

```js
var secondHeadersObj = new Headers(myHeaders);
secondHeadersObj.get('Content-Type'); // Would return 'image/jpeg' — it inherits it from the first headers object
```

## 仕様書

| 仕様書                                                           | 状態                     | 備考 |
| ---------------------------------------------------------------- | ------------------------ | ---- |
| {{SpecName('Fetch','#dom-headers','Headers()')}} | {{Spec2('Fetch')}} |      |

## ブラウザの対応

{{Compat("api.Headers.headers")}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
