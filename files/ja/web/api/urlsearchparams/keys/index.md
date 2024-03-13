---
title: "URLSearchParams: keys() メソッド"
short-title: keys()
slug: Web/API/URLSearchParams/keys
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("URL API")}}

**`keys()`** は {{domxref("URLSearchParams")}} インターフェイスのメソッドで、このオブジェクトに含まれるすべてのキーを反復処理できる{{jsxref("Iteration_protocols",'イテレーター')}}を返します。 キーは文字列です。

> **メモ:** このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

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

## 関連項目

- {{domxref("URL")}} インターフェイス
