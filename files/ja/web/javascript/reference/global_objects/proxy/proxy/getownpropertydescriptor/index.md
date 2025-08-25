---
title: handler.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.getOwnPropertyDescriptor()`** は、オブジェクトの `[[GetOwnProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Object.getOwnPropertyDescriptor()")}} などの操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.getOwnPropertyDescriptor()", "taller")}}

```js interactive-example
const monster = {
  eyeCount: 4,
};

const handler = {
  getOwnPropertyDescriptor(target, prop) {
    console.log(`called: ${prop}`);
    // 予想される結果: "called: eyeCount"

    return { configurable: true, enumerable: true, value: 5 };
  },
};

const proxy = new Proxy(monster, handler);

console.log(Object.getOwnPropertyDescriptor(proxy, "eyeCount").value);
// 予想される結果: 5
```

## 構文

```js-nolint
new Proxy(target, {
  getOwnPropertyDescriptor(target, property) {
  }
})
```

### 引数

次の引数は `getOwnPropertyDescriptor()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `property`
  - : 文字列または {{jsxref("Symbol")}} で、プロパティ名を表します。

### 返値

`getOwnPropertyDescriptor()` メソッドは、プロパティ記述子を表しますオブジェクトまたは `undefined` を返す必要があります。欠落している属性は、 {{jsxref("Object.defineProperty()")}} と同じ方法で正規化されます。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

他にも、`[[GetOwnProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの `[[GetOwnProperty]]` 内部メソッドは、ハンドラー定義が次の不変条件のいずれかに違反する場合、 {{jsxref("TypeError")}} が発生します。

- 結果は、{{jsxref("Object")}} または `undefined` のいずれかである必要があります。
- プロパティが対象とするオブジェクトの構成不可な自分自身でプロパティとして存在する場合、そのプロパティを「存在しない」として報告することはできません。つまり、 {{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `target` のプロパティに対して `configurable: false` を返す場合、トラップは `undefined` を返してはなりません。
- プロパティは、拡張不可なターゲットオブジェクトの自分自身で拡張可能なプロパティとして存在する場合、存在しないとして報告できません。つまり、ターゲットオブジェクトに対して {{jsxref("Reflect.isExtensible()")}} が `false` を返す場合、トラップは `undefined` を返してはなりません。
- プロパティは、対象とするオブジェクトの自分自身で固有のプロパティとして存在せず、かつ対象とするオブジェクトが拡張可能でない場合、存在すると報告できません。つまり、対象とするオブジェクトに対して {{jsxref("Reflect.isExtensible()")}} が `false` を返し、対象とするオブジェクトの `target` にあるプロパティに対して {{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `undefined` を返す場合、トラップは `undefined` を返さなければなりません。
- プロパティは、対象とするオブジェクトの構成不可プロパティとして存在する場合を除き、構成不可として報告できません。つまり、 {{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `target` のプロパティに対して `undefined` または `configurable: true` を返す場合、トラップは `configurable: false` を返してはなりません。
- プロパティは、対象とするオブジェクトに構成不可かつ書き込み不可の自己プロパティとして存在する場合を除き、構成不可かつ書き込み不可の両方として報告できません。つまり、前回不変条件に加え、`target` のプロパティに対して {{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `configurable: false, writable: true` を返す場合、トラップは `configurable: false, writable: false` を返してはなりません。
- 対象とするオブジェクトに該当するプロパティが存在する場合、その対象とするオブジェクトのプロパティの記述子は `descriptor` と互換性がある必要があります。つまり、`target` を通常のオブジェクトと見なした場合、 {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, resultObject)")}} はエラーを発生させない必要があります。 `Object.defineProperty()` の参照するリファレンスには詳細な情報が含まれているが、要約すると、対象とするプロパティが構成不可である場合、次の条件が成立する必要があります。
  - `configurable`、`enumerable`、`get`、`set` は元の値と一致する必要があります。 `writable` は、前回の不変条件により元の値と一致する必要があります。
  - プロパティはデータまたはアクセサーのどちらかを変えることはできません。
  - 値属性は、`writable`が`true`の場合にのみ変更可能です。

## 例

### getOwnPropertyDescriptor のトラップ

次のコードでは {{jsxref("Object.getOwnPropertyDescriptor()")}} をトラップします。

```js
const p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor(target, prop) {
      console.log(`called: ${prop}`);
      return { configurable: true, enumerable: true, value: 10 };
    },
  },
);

console.log(Object.getOwnPropertyDescriptor(p, "a").value);
// "called: a"
// 10
```

次のコードでは不変条件に違反します。

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  getOwnPropertyDescriptor(target, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, "a"); // TypeError is thrown
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
