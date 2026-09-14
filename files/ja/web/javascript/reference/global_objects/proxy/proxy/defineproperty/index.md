---
title: handler.defineProperty()
short-title: defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.defineProperty()`** は、オブジェクトの `[[DefineOwnProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Object.defineProperty()")}} などの操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.defineProperty()", "taller")}}

```js interactive-example
const handler = {
  defineProperty(target, key, descriptor) {
    invariant(key, "define");
    return true;
  },
};

function invariant(key, action) {
  if (key[0] === "_") {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

const monster = {};
const proxy = new Proxy(monster, handler);

console.log((proxy._secret = "easily scared"));
// 予想される結果: Error: Invalid attempt to define private "_secret" property
```

## 構文

```js-nolint
new Proxy(target, {
  defineProperty(target, property, descriptor) {
  }
})
```

### 引数

次の引数が `defineProperty()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `property`
  - : 説明を受け取るプロパティの名前または {{jsxref("Symbol")}} です。
- `descriptor`
  - : 定義や変更されるプロパティに対するディスクリプターです。

### 返値

`defineProperty()` メソッドはプロパティが正しく定義されたかどうかを表す[論理値](/ja/docs/Web/JavaScript/Guide/Data_structures#論理型)を返す必要があります。それ以外の値は[論理値に強制変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#論理型への変換)。

多くの操作（{{jsxref("Object.defineProperty()")}} および {{jsxref("Object.defineProperties()")}} を含む）は、`[[DefineOwnProperty]]` 内部メソッドが `false` を返す場合、{{jsxref("TypeError")}} が発生します。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

他にも、`[[DefineOwnProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの `[[DefineOwnProperty]]` 内部メソッドは、ハンドラーの定義が以下の不変条件のいずれかに違反する場合、{{jsxref("TypeError")}} が発生します。

- プロパティを追加することはできません。対象オブジェクトが拡張可能でない場合です。つまり、 {{jsxref("Reflect.isExtensible()")}} が `target` 上のプロパティに対して `false` を返し、 {{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `target` 上のプロパティに対して `undefined` を返す場合、トラップは偽値を返す必要があります。
- プロパティは、ターゲットオブジェクトに対応する構成不可な自身のプロパティが存在しない限り、構成不可にできません。つまり、{{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `target` 上のプロパティに対して `undefined` または `configurable: true` を返す場合、かつ `descriptor.configurable` が `false` である場合、トラップは偽値を返す必要があります。
- 構成不可プロパティは、ターゲットオブジェクトに該当する構成不可かつ非書き込み可能の固有プロパティが存在する場合を除き、非書き込み可能ではありません。つまり、 {{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `target` 上のプロパティに対して `configurable: false, writable: true` を返し、 `descriptor.writable` が `false` である場合、トラップは偽値を返す必要があります。
- プロパティが対象オブジェクトに対応するプロパティを保有する場合、対象オブジェクトのプロパティの記述子は `descriptor` と互換性がある必要があります。つまり、 `target` を通常のオブジェクトと仮定し、 `Object.defineProperty(target, property, descriptor)` がエラーを発生すると仮定した場合、トラップは偽値を返す必要があります。 `Object.defineProperty()` の参照には詳細な情報が含まれていますが、簡単に言うと、ターゲットプロパティが構成不可の場合、以下の条件が満たされる必要があります。
  - `configurable`、`enumerable`、`get`、`set` は変更できません
  - プロパティはデータとアクセサーの間で切り替えることができません
  - `writable` 属性は `true` から `false` に変更できます
  - `value` 属性は `writable` が `true` の場合にのみ変更できます

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
