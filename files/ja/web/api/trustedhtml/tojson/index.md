---
title: "TrustedHTML: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/TrustedHTML/toJSON
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`toJSON()`** は {{domxref("TrustedHTML")}} インターフェイスのメソッドで、格納されているデータの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

文字列で、格納されているデータの JSON 表現が入ります。

## 例

定数 `escaped` は、信頼型ポリシー escapeHTMLPolicy によって作成されたオブジェクトです。 `toString()` メソッドは、文書に安全に挿入できる文字列を返します。

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped.toJSON());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
