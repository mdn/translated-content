---
title: "XMLHttpRequest: overrideMimeType() メソッド"
short-title: overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

{{domxref("XMLHttpRequest")}} の **`overrideMimeType()`** メソッドは、リクエストで転送されるデータを解釈するときに、 サーバーが提供されたもの以外の MIME タイプを代わりに使用するように指定します。

これは例えば、サーバーがの報告に関わらず、ストリームを `"text/xml"` として扱い、解釈するよう強制するために使われるかもしれません。このメソッドは {{domxref("XMLHttpRequest.send", "send()")}} を呼ぶ前に呼び出す必要があります。

## 構文

```js-nolint
overrideMimeType(mimeType)
```

### 引数

- `mimeType`
  - : 文字列で、サーバーが指定した MIME タイプの代わりに使用する MIME タイプを指定します。サーバーがタイプを指定しなかった場合、 `XMLHttpRequest` は `"text/xml"` と仮定されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、 MIME タイプとして `"text/plain"` を指定し、受信するデータに対してサーバーが指定するタイプを上書きしています。

> [!NOTE]
> サーバーが [`Content-Type`](/ja/docs/Web/HTTP/Headers/Content-Type) ヘッダを提供ていない場合、 {{domxref("XMLHttpRequest")}} は MIME タイプが `"text/xml"` であると見なします。もし、内容が妥当な XML でなければ、"XML Parsing Error: not well-formed" というエラーが発生します。これを避けるには、 `overrideMimeType()` を呼び出して別のタイプを指定してください。

```js
// 受信したデータをプレーンテキストとして解釈

req = new XMLHttpRequest();
req.overrideMimeType("text/plain");
req.addEventListener("load", callback, false);
req.open("get", url);
req.send();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- {{domxref("XMLHttpRequest.responseType")}}
