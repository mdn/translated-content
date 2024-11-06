---
title: "URLSearchParams: keys() メソッド"
short-title: keys()
slug: Web/API/URLSearchParams/keys
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

**`keys()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドで、このオブジェクトに含まれるすべてのキーを反復処理できる{{jsxref("Iteration_protocols",'イテレーター')}}を返します。 キーは文字列です。

## 構文

```js-nolint
keys()
```

### 引数

なし。

### 返値

{{jsxref("Iteration_protocols","イテレーター")}}を返します。

## 例

```js
// テスト用の URLSearchParams オブジェクトの作成
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// キーの表示
for (const key of searchParams.keys()) {
  console.log(key);
}
```

結果は次のとおりです。

```plain
key1
key2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("URL")}} インターフェイス
