---
title: Headers.append()
slug: Web/API/Headers/append
---

{{APIRef("Fetch")}}{{ SeeCompatTable() }}

{{domxref("Headers")}} インターフェースの **`append()`** メソッドは、`Headers` オブジェクト内の既存のヘッダに新しい値を追加します。または、既存のヘッダがない場合には、ヘッダを追加します。

{{domxref("Headers.set")}} と `append()` の違いは、特定のヘッダが既に存在して、複数の値を受け入れる場合、{{domxref("Headers.set")}} は既存の値を新しい値で上書きますが、`append()` は値の最後に新しい値を追加します。

セキュリティ上の理由から、いくつかのヘッダはユーザーエージェントでのみ制御できます。それらのヘッダは、{{Glossary("Forbidden_header_name", "forbidden header names", 1)}} と {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}} を含みます。

## 構文

```js
myHeaders.append(name,value);
```

### パラメータ

- _name_
  - : `Headers` オブジェクトに追加する HTTP ヘッダ名。
- _value_
  - : HTTP ヘッダに追加する値。

### 戻り値

Void。

## 例

空の `Headers` オブジェクトの生成はシンプルです：

```js
var myHeaders = new Headers(); // 現在は空
```

`append()` を使用してヘッダを追加できます：

```
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // 'image/jpeg' を返します。
```

特定のヘッダが既に存在する場合、`append()` はその値を指定した値に変更します。特定のヘッダが既に存在して複数の値を受け入れる場合、`append()` は値の末尾に新しい値を追加します：

```js
myHeaders.append('Accept-Encoding', 'deflate');
myHeaders.append('Accept-Encoding', 'gzip');
myHeaders.getAll('Accept-Encoding'); // [ "deflate", "gzip" ] を返します。
```

古い値を新しい値で上書きするには、{{domxref("Headers.set")}} を使います。

## 仕様

| 仕様                                                                     | ステータス               | コメント |
| ------------------------------------------------------------------------ | ------------------------ | -------- |
| {{SpecName('Fetch','#dom-headers-append','append()')}} | {{Spec2('Fetch')}} |          |

## ブラウザ実装状況

{{Compat("api.Headers.append")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
