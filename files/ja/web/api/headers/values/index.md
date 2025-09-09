---
title: "Headers: values() メソッド"
short-title: values()
slug: Web/API/Headers/values
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`Headers.values()`** メソッドは、このオブジェクトに含まれるすべての値を読み取ることができる{{jsxref("Iteration_protocols", 'イテレーター', '', 1)}}を返します。値は文字列です。

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
// テスト用の Headers オブジェクトを作成
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// 値を表示
for (const value of myHeaders.values()) {
  console.log(value);
}
```

結果は次の通りです。

```plain
text/xml
Accept-Language
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
