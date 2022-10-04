---
title: Headers.get()
slug: Web/API/Headers/get
---

{{APIRef("Fetch")}}

{{domxref("Headers")}} インターフェイスの **`get()`** メソッドは、指定された名前の `Headers` オブジェクト内のヘッダーのすべての値の ByteString を返します。要求されたヘッダーが `Headers` オブジェクトに存在しない場合、`null` を返します。

セキュリティ上の理由から、一部のヘッダーはユーザーエージェントによってのみ制御できます。これらのヘッダーには、{{Glossary("Forbidden_header_name", "禁止ヘッダー名", 1)}} および {{Glossary("Forbidden_response_header_name", "禁止レスンポンスヘッダー名", 1)}} が含まれます。

## 構文

```
myHeaders.get(name);
```

### 引数

- `name`
  - : `Headers` オブジェクトから値を取得する HTTP ヘッダーの名前。指定された名前が HTTP ヘッダーの名前でない場合、このメソッドは {{jsxref("TypeError")}} を返します。名前は大文字と小文字を区別しません。

### 戻り値

取得したヘッダーの値を表す {{domxref("ByteString")}} シーケンス。このヘッダーが設定されていない場合は `null` を返します。

## 例

空の `Headers` オブジェクトの作成は簡単です。

```js
var myHeaders = new Headers(); // 現在空です
myHeaders.get('Not-Set'); // null を返します
```

{{domxref("Headers.append")}} を使用してヘッダーを追加し、`get()` を使用してヘッダーを取得できます。

```js
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // "image/jpeg" を返します
```

ヘッダーに複数の値が関連付けられている場合、ByteString には、`Headers` オブジェクトに追加された順序ですべての値が含まれます。

```js
myHeaders.append('Accept-Encoding', 'deflate');
myHeaders.append('Accept-Encoding', 'gzip');
myHeaders.get('Accept-Encoding'); // "deflate,gzip" を返します
```

> **メモ:** {{domxref("Headers.getAll")}} にはこの機能があり、{{domxref("Headers.get")}} は `Headers` オブジェクトに追加された最初の値のみを返します。最新の仕様では `getAll()` が削除され、すべての値を返すように `get()` が更新されました。

## 仕様書

| 仕様書                                                           | Status                   | Comment |
| ---------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('Fetch','#dom-headers-get','get()')}} | {{Spec2('Fetch')}} |         |

## ブラウザーの互換性

{{Compat("api.Headers.get")}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
