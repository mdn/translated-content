---
title: Headers.entries()
slug: Web/API/Headers/entries
---

{{APIRef}}

**`Headers.entries()`** メソッドは {{jsxref("Iteration_protocols",'iterator')}} を返し、このオブジェクトに含まれるすべてのキーと値のペアを通過できるようにします。各ペアのキーと値は両方とも {{domxref("ByteString")}} オブジェクトです。

> **メモ:** このメソッドは [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用できます。

## 構文

```
headers.entries();
```

### 戻り値

{{jsxref("Iteration_protocols","iterator")}} を返します。

## 例

```js
// Headers テストオブジェクトを作成
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/xml');
myHeaders.append('Vary', 'Accept-Language');

// キーと値のペアを表示
for (var pair of myHeaders.entries()) {
   console.log(pair[0]+ ': '+ pair[1]);
}
```

結果

```
content-type: text/xml
vary: Accept-Language
```

## ブラウザーの互換性

{{Compat("api.Headers.entries")}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
