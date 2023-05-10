---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.defineProperty()`** は、オブジェクトの `[[DefineOwnProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Object.defineProperty()")}} などの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  defineProperty(target, property, descriptor) {
  }
});
```

### 引数

次の引数が `defineProperty()` メソッドに渡されます。
`this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `property`
  - : 説明を受け取るプロパティの名前または {{jsxref("Symbol")}} です。
- `descriptor`
  - : 定義や変更されるプロパティに対するディスクリプターです。

### 返値

`defineProperty()` メソッドはプロパティが正しく定義されたかどうかを表す[論理値](/ja/docs/Web/JavaScript/Data_structures#論理型)を返す必要があります。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

他にも、`[[DefineOwnProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxref("TypeError")}} を発生します。

- ターゲットオブジェクトが拡張不可の場合、プロパティは追加できません。
- ターゲットオブジェクトの構成不可の独自のプロパティとして存在しない場合、プロパティは構成不可とみなされ、追加や変更ができません。
- ターゲットオブジェクトの対応する構成可能なプロパティが存在する場合、プロパティは構成不可にすることができません。
- 対応するターゲットオブジェクトのプロパティが存在する場合、`Object.defineProperty(target, prop, descriptor)` は例外をスローしません。
- strict モードでは、`defineProperty` ハンドラーから `false` が返ってきた場合、{{jsxref("TypeError")}} 例外をスローします。

## 例

### defineProperty のトラップ

次のコードは {{jsxref("Object.defineProperty()")}} をトラップします。

```js
const p = new Proxy(
  {},
  {
    defineProperty(target, prop, descriptor) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

const desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, "a", desc); // "called: a"
```

{{jsxref("Object.defineProperty()")}} または {{jsxref("Reflect.defineProperty()")}} を呼び出した時、 `defineProperty()` トラップに渡されるディスクリプターには制約があります。下記のプロパティのみが使用可能で、標準ではないプロパティは無視されます。

- `enumerable`
- `configurable`
- `writable`
- `value`
- `get`
- `set`

```js
const p = new Proxy(
  {},
  {
    defineProperty(target, prop, descriptor) {
      console.log(descriptor);
      return Reflect.defineProperty(target, prop, descriptor);
    },
  },
);

Object.defineProperty(p, "name", {
  value: "proxy",
  type: "custom",
}); // { value: 'proxy' }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}
