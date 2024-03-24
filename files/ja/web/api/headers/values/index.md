---
title: Headers.values()
slug: Web/API/Headers/values
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef}}

**`Headers.values()`** メソッドは、このオブジェクトに含まれるすべての値を読み取ることができる{{jsxref("Iteration_protocols", 'イテレーター', '', 1)}}を返します。値は文字列です。

> **メモ:** このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

## 構文

```js-nolint
values()
```

### 引数

なし。

### 返値

{{jsxref("Iteration_protocols", 'イテレーター', '', 1)}}を返します。

## 例

```js
// Create a test Headers object
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Display the values
for (const value of myHeaders.values()) {
  console.log(value);
}
```

結果は次の通りです。

```
text/xml
Accept-Language
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
