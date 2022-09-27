---
title: Headers.delete()
slug: Web/API/Headers/delete
---

{{APIRef("Fetch")}}

{{domxref("Headers")}} インターフェイスの **`delete()`** メソッドは、現在の `Headers` オブジェクトからヘッダーを削除します。

このメソッドは、次の理由で {{jsxref("TypeError")}} をスローします。

- name パラメーターの値は、HTTP ヘッダーの名前ではありません。
- {{Glossary("Guard")}} の値は `immutable` です。

セキュリティ上の理由から、一部のヘッダーはユーザーエージェントのみがコントローラーにすることができます。 これらのヘッダーには {{Glossary("Forbidden_header_name", "禁止ヘッダー名", 1)}} および {{Glossary("Forbidden_response_header_name", "禁止レスンポンスヘッダー名", 1)}} が含まれます。

## 構文

```
myHeaders.delete(name);
```

### 引数

- `name`
  - : `Headers` オブジェクトから削除する HTTP ヘッダーの名前。

### 戻り値

Void.

## Example

空の `Headers` オブジェクトの作成は簡単です。

```js
var myHeaders = new Headers(); // Currently empty
```

{{domxref("Headers.append")}} を使用して、これにヘッダーを追加できます。

```js
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // Returns 'image/jpeg'
```

その後、再度削除できます。

```js
myHeaders.delete('Content-Type');
myHeaders.get('Content-Type'); // Returns null, as it has been deleted
```

## 仕様書

| 仕様書                                                                   | Status                   | Comment |
| ------------------------------------------------------------------------ | ------------------------ | ------- |
| {{SpecName('Fetch','#dom-headers-delete','delete()')}} | {{Spec2('Fetch')}} |         |

## ブラウザーの互換性

{{Compat("api.Headers.delete")}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
