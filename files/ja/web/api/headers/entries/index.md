---
title: "Headers: entries() メソッド"
short-title: entries()
slug: Web/API/Headers/entries
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`Headers.entries()`** メソッドは、このオブジェクトに含まれるすべてのキーと値のペアを走査する{{jsxref("Iteration_protocols", 'イテレーター', '', 1)}}を返します。それぞれのペアのキーと値は両方とも {{jsxref("String")}} オブジェクトです。

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

```plain
content-type: text/xml
vary: Accept-Language
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
