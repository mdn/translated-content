---
title: "Headers: keys() メソッド"
short-title: keys()
slug: Web/API/Headers/keys
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`Headers.keys()`** メソッドは、このオブジェクトに含まれるすべてのキーを読み取ることができる{{jsxref("Iteration_protocols", 'イテレーター', '', 1)}}オブジェクトを返します。キーは文字列です。です。

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

```plain
content-type
vary
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
