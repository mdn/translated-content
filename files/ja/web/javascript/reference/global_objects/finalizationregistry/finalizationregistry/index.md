---
title: FinalizationRegistry() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
---

{{JSRef}}

**`FinalizationRegistry`** コンストラクターは、指定されたコールバックを使用する {{jsxref("FinalizationRegistry")}} オブジェクトを生成します。

## 構文

```
new FinalizationRegistry([callback]);
```

### 引数

- `callback` {{optional_inline}}
  - : レジストリが使用するコールバック関数です。指定された場合、関数である必要があります。

## 例

### 新しいレジストリの生成

コールバックを渡してレジストリを生成します。

```js
const registry = new FinalizationRegistry((heldValue) => {
  // ....
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.FinalizationRegistry.FinalizationRegistry")}}

## 関連情報

- {{jsxref("FinalizationRegistry")}}
