---
title: "URL: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/URL/toJSON
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("URL API")}}

**`toJSON()`** は {{domxref("URL")}} インターフェイスのメソッドで、URL のシリアル化されたバージョンの入った文字列を返しますが、実際には {{domxref("URL.toString()")}} と同じ効果があるようです。

{{AvailableInWorkers}}

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

文字列です。

## 例

```js
const url = new URL(
  "https://developer.mozilla.org/ja/docs/Web/API/URL/toString",
);
url.toJSON(); // URL を文字列として返します。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`URL.prototype.toJSON` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#url-and-urlsearchparams)
