---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.deleteProperty()`** メソッドは、オブジェクトの `[[Get]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Operators/delete", "delete")}} などの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-deleteproperty.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  deleteProperty(target, property) {
  }
});
```

### 引数

次の引数が `deleteProperty` メソッドに渡されます。
`this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクト
- `property`
  - : 削除するプロパティの名前または {{jsxref("Symbol")}}

### 返値

`deleteProperty()` メソッドはプロパティが正しく削除されたかどうか示す[論理値](/ja/docs/Web/JavaScript/Data_structures#論理型)を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子: `delete proxy[foo]` や `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

他にも、`[[Delete]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxref("TypeError")}} を発生します。

- ターゲットオブジェクトの非設定独自プロパティとして存在する場合、プロパティは削除されません。

## 例

### プロパティ値の取得のトラップ

次のコードは {{jsxref("Operators/delete", "delete")}} 操作をトラップします。

```js
const p = new Proxy(
  {},
  {
    deleteProperty(target, prop) {
      if (!(prop in target)) {
        console.log(`property not found: ${prop}`);
        return false;
      }
      delete target[prop];
      console.log(`property removed: ${prop}`);
      return true;
    },
  },
);

p.a = 10;
console.log("a" in p); // true

const result1 = delete p.a; // "property removed: a"
console.log(result1); // true
console.log("a" in p); // false

const result2 = delete p.a; // "property not found: a"
console.log(result2); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/delete", "delete")}} operator
- {{jsxref("Reflect.deleteProperty()")}}
