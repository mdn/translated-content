---
title: Headers.entries()
slug: Web/API/Headers/entries
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef}}

**`Headers.entries()`** メソッドは、このオブジェクトに含まれるすべてのキーと値のペアを走査する{{jsxref("Iteration_protocols", 'イテレーター', '', 1)}}を返します。それぞれのペアのキーと値は両方とも {{jsxref("String")}} オブジェクトです。

> **メモ:** このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
entries()
```

### 引数

なし。

### 返値

{{jsxref("Iteration_protocols", 'イテレーター', '', 1)}}を返します。

## 例

```js
// Headers テストオブジェクトを作成
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// キーと値のペアを表示
for (const pair of myHeaders.entries()) {
  console.log(`${pair[0]}: ${pair[1]}`);
}
```

結果は次の通りです。

```
content-type: text/xml
vary: Accept-Language
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
