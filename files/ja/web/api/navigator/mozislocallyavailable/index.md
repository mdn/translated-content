---
title: Navigator.mozIsLocallyAvailable()
slug: Web/API/Navigator/mozIsLocallyAvailable
tags:
  - API
  - メソッド
  - Navigator
  - Non-standard
  - 非推奨
browser-compat: api.Navigator.mozIsLocallyAvailable
translation_of: Web/API/Navigator/mozIsLocallyAvailable
---
{{APIRef("HTML DOM")}} {{non-standard_header}}{{deprecated_header}}

**`Navigator.mozIsLocallyAvailable()`** メソッドは、アドオンが指定されたリソースが両可能かどうかを判断できるようにします。

> **Note:** リクエストされた URI が同じオリジンでないと、セキュリティ例外が発生することがあります。

## 構文

```js
mozIsLocallyAvailable(uri, ifOffline)
```

### 引数

- `uri`
  - : 閲覧可能かどうかチェックするリソースの URI を表す文字列です。
- `ifOffline`
  - : オフラインリソースのキャッシュをチェックをするべきかどうかを指定します。オフラインリソースのキャッシュを考慮する場合は、`true` を指定します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
var available = navigator.mozIsLocallyAvailable("my-image-file.png", true);
if (available) {
  /* オフラインリソースが存在 */
} else {
  alert("必要なリソースは、ネットワークに接続するまで閲覧不可能です。");
}
```

## 仕様書

どの仕様書でも定義されていません。

## ブラウザーの互換性

{{Compat}}
