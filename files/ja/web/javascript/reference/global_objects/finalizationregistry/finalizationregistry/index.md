---
title: FinalizationRegistry() コンストラクター
short-title: FinalizationRegistry()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`FinalizationRegistry`** コンストラクターは、指定されたコールバックを使用する {{jsxref("FinalizationRegistry")}} オブジェクトを生成します。

## 構文

```js-nolint
new FinalizationRegistry(callbackFn)
```

> [!NOTE]
> `FinalizationRegistry()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) でのみ構築することができます。`new` 無しで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

- `callback`
  - : 登録されたターゲット値がガベージコレクションの対象となるたびに呼び出される関数です。この関数の返値は無視されます。この関数は、以下の引数とともに呼び出されます。
    - `heldValue`
      - : `target` オブジェクトが登録された際に、{{jsxref("FinalizationRegistry/register", "register()")}} メソッドの第二引数として渡される値。

## 例

### 新しいレジストリーの生成

コールバックを渡してレジストリーを生成します。

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("FinalizationRegistry")}}
