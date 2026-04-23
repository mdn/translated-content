---
title: WeakRef() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
l10n:
  sourceCommit: 7da0dabee277f9c295178ae132c16c8fed5d747a
---

{{JSRef}}

**`WeakRef()`** コンストラクターは、 {{jsxref("WeakRef")}} オブジェクトを生成します。

## 構文

```js-nolint
new WeakRef(target)
```

> [!NOTE]
> `WeakRef()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) との組み合わせでのみ構築されます。 `new` 無しで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `target`
  - : WeakRef の参照先となるターゲット値（リファレントとも呼ばれます）。オブジェクトまたは[未登録のシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー)でなければなりません。

### 返値

指定されたターゲット地を参照する `WeakRef` オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトまたは[未登録のシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー)ではない場合に発生します。

## 例

### 新しい WeakRef オブジェクトの生成

完全な例は中心となる [`WeakRef`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#例) ページを参照してください。

```js
class Counter {
  constructor(element) {
    // DOM 要素への弱い参照を覚える
    this.ref = new WeakRef(element);
    this.start();
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakRef")}}
