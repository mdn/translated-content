---
title: "Request: formData() メソッド"
short-title: formData()
slug: Web/API/Request/formData
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`formData()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、 {{domxref("FormData")}} オブジェクトで解決するプロミスとして返します。

## 構文

```js-nolint
formData()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} であり、 {{domxref("FormData")}} オブジェクトで解決します。

### 例外

- {{jsxref("TypeError")}}
  - : 以下のいずれかの理由で発生します。
    - リクエストの本文が[変更中またはロック済み](/ja/docs/Web/API/Fetch_API/Using_Fetch#ロックされ妨害されたストリーム)である。
    - 本文のコンテンツをデコードする際にエラーが発生した（例えば、{{httpheader("Content-Encoding")}} ヘッダーが正しくないなど）。
    - 本文の {{glossary("MIME")}} タイプを、リクエストに含まれる {{httpheader("Content-Type")}} ヘッダーから特定できないか、あるいはそのタイプが `application/x-www-form-urlencoded` または `multipart/form-data` ではない。
    - 本文が `FormData` オブジェクトとして構文解析できない。

## 例

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: formData,
});

request.formData().then((data) => {
  // リクエストで送信されたフォームデータに対して何らかの処理を行う
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.formData()")}}
