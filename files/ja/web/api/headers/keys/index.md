---
title: Headers.keys()
slug: Web/API/Headers/keys
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef}}

**`Headers.keys()`** メソッドは、このオブジェクトに含まれるすべてのキーを読み取ることができる{{jsxref("Iteration_protocols", 'イテレーター', '', 1)}}オブジェクトを返します。キーは文字列です。です。

> **メモ:** このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
keys()
```

### 引数

なし。

### 返値

{{jsxref("Iteration_protocols", 'イテレーター', '', 1)}}を返します。

## 例

```js
// テスト用の Headers オブジェクトを作成
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// キーを表示
for (const key of myHeaders.keys()) {
  console.log(key);
}
```

結果は次の通りです。

```
content-type
vary
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
