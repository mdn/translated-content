---
title: "URLSearchParams: values() メソッド"
short-title: values()
slug: Web/API/URLSearchParams/values
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("URL API")}}

**`values()`** は {{domxref("URLsearchParams")}} インターフェイスのメソッドで、このオブジェクトに含まれるすべての値を反復処理できる{{jsxref("Iteration_protocols",'イテレーター')}}を返します。 値は文字列です。

{{availableinworkers}}

## 構文

```js-nolint
values()
```

### 引数

なし。

### 返値

{{jsxref("Iteration_protocols","イテレーター")}}を返します。

## 例

次の例では、`URLSearchParams` コンストラクターに URL 検索文字列を渡し、`values()` が返すイテレーターを使って値をコンソールに表示します。

```js
const searchParams = new URLSearchParams("key1=value1&key2=value2");

for (const value of searchParams.values()) {
  console.log(value);
}
```

結果は次のとおりです。

```plain
value1
value2
```

この例も上記とほぼ同じですが、先にイテレーターを配列にキャストしています。

```js
const searchParams = new URLSearchParams("key1=value1&key2=value2");

console.log(Array.from(searchParams.values()));
```

結果は次の通りです。

```plain
['value1', 'value2']
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("URL")}} インターフェイス
