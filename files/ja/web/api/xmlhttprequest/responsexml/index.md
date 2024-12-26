---
title: "XMLHttpRequest: responseXML プロパティ"
short-title: responseXML
slug: Web/API/XMLHttpRequest/responseXML
l10n:
  sourceCommit: fe468a9966c87cac081d3986b3332d0a51c4e2ee
---

{{APIRef("XMLHttpRequest API")}}

**`XMLHttpRequest.responseXML`** は読み取り専用のプロパティで、リクエストによって受け取った HTML または XML を含む {{domxref("Document")}}、またはリクエストが成功しなかった場合、まだ送信されていない場合、データが XML または HTML として解釈できない場合は `null` を返します。

> **メモ:** `responseXML` という名前はこのプロパティの歴史の遺物です。これは HTML および XML の両方で動作します。

ふつう、レスポンスは "`text/xml`" として解釈されます。 {{domxref("XMLHttpRequest.responseType", "responseType")}} が "`document`" に設定され、リクエストが非同期に行われた場合、レスポンスは代わりに "`text/html`" として解釈されます。他の型のデータでは、 [`data:` の URL](/ja/docs/Web/URI/Schemes/data) の場合と同様、 `responseXML` は `null` になります。

サーバーが {{HTTPHeader("Content-Type")}} を "`text/xml`" とも "`application/xml`" とも指定しなかった場合、 {{domxref("XMLHttpRequest.overrideMimeType()")}} を使用して強制的に XML として解釈させることができます。

このプロパティはワーカーでは使用できません。

### 値

{{domxref("XMLHttpRequest")}} を用いて受け取った XML または HTML を解釈した {{domxref("Document")}}、またはデータを受け取っていなかったり、データが XML/HTML でな買ったりした場合は `null`

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("XMLHttpRequest.responseType", "responseType")}} が "`document`" でも空文字列でもない。

## 例

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server");

// responseType を指定する場合は、空文字列または "document" でなければならない
xhr.responseType = "document";

// レスポンスを XML として解釈するよう強制する
xhr.overrideMimeType("text/xml");

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    console.log(xhr.response, xhr.responseXML);
  }
};

xhr.send();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequest.response")}}
- {{domxref("XMLHttpRequest.responseType")}}
- [XML の解釈とシリアライズ](/ja/docs/Web/XML/Parsing_and_serializing_XML)
- XML を解釈して DOM ツリーに格納: {{domxref("DOMParser")}}
- DOM ツリーを XML にシリアライズ: {{domxref("XMLSerializer")}} (特に {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} メソッド)
