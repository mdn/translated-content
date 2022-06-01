---
title: XMLHttpRequest.status
slug: Web/API/XMLHttpRequest/status
tags:
  - API
  - エラー
  - プロパティ
  - リファレンス
  - XMLHttpRequest
  - XMLHttpRequest ステータス
  - 結果
  - status
browser-compat: api.XMLHttpRequest.status
translation_of: Web/API/XMLHttpRequest/status
---
{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.status`** プロパティは読み取り専用で、 `XMLHttpRequest` のレスポンスにおける数値の HTTP [ステータスコード](/ja/docs/Web/HTTP/Status)を返します。

リクエストが完了する前は、 `status` の値は 0 になります。 `XMLHttpRequest` がエラーになった場合も、ブラウザーはステータスとして 0 を返します。

## 例

```js
var xhr = new XMLHttpRequest();
console.log('UNSENT: ', xhr.status);

xhr.open('GET', '/server');
console.log('OPENED: ', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING: ', xhr.status);
};

xhr.onload = function () {
  console.log('DONE: ', xhr.status);
};

xhr.send();

/**
 * 出力結果は以下の通り。
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP レスポンスコード](/ja/docs/Web/HTTP/Response_codes)の一覧
- [HTTP](/ja/docs/Web/HTTP)
