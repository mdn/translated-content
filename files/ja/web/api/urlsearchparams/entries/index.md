---
title: "URLSearchParams: entries() メソッド"
short-title: entries()
slug: Web/API/URLSearchParams/entries
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("URL API")}}

**`entries()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドは、このオブジェクトに含まれるすべてのキー/値のペアを反復処理できる{{jsxref("Iteration_protocols","イテレーター")}}を返します。それぞれのペアのキーと値は文字列です。

{{availableinworkers}}

## 構文

```js-nolint
entries()
```

### 引数

なし。

### 返値

{{jsxref("Iteration_protocols","イテレーター")}}を返します。

## 例

```js
// テスト用の URLSearchParams オブジェクトの作成
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// キー/値のペアの表示
for (const [key, value] of searchParams.entries()) {
  console.log(`${key}, ${value}`);
}
```

結果は次のとおりです。

```plain
key1, value1
key2, value2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("URL")}} インターフェイス。
