---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}} {{deprecated_header}}

> **メモ:** `compile()` メソッドは互換性のためにのみ定義されています。`compile()` を使用すると、それまで不変であった正規表現のソースとフラグが変更可能なものとなり、ユーザーの期待を裏切る可能性があります。代わりに [`RegExp()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) コンストラクターを使用して新しい正規表現オブジェクトを構築してください。

**`compile()`** は {{jsxref("RegExp")}} インスタンスのメソッドで、 `RegExp` オブジェクトが既に作成された後、新しいソースとフラグで正規表現を再コンパイルするために使用します。

## 構文

```js-nolint
compile(pattern, flags)
```

### 引数

- `pattern`
  - : 正規表現のテキスト
- `flags`
  - : [フラグ値](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags)の組み合わせです。

## 例

### compile() の使用

次の例では、新しいパターンとフラグで正規表現を再コンパイルする方法を示します。

```js
const regexObj = new RegExp("foo", "gi");
regexObj.compile("new foo", "g");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp")}}
