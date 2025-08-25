---
title: handler.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.set()`** メソッドは、オブジェクトの `[[Set]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップであり、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使用してプロパティの値を設定する操作に使われます。

{{InteractiveExample("JavaScript デモ: handler.set()", "taller")}}

```js interactive-example
const monster = { eyeCount: 4 };

const handler = {
  set(obj, prop, value) {
    if (prop === "eyeCount" && value % 2 !== 0) {
      console.log("Monsters must have an even number of eyes");
    } else {
      return Reflect.set(...arguments);
    }
  },
};

const proxy = new Proxy(monster, handler);

proxy.eyeCount = 1;
// 予想される結果: "Monsters must have an even number of eyes"

console.log(proxy.eyeCount);
// 予想される結果: 4

proxy.eyeCount = 2;
console.log(proxy.eyeCount);
// 予想される結果: 2
```

## 構文

```js-nolint
new Proxy(target, {
  set(target, property, value, receiver) {
  }
})
```

### 引数

次の引数は `set()` メソッドに渡されます。`this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `property`
  - : 文字列または {{jsxref("Symbol")}} で、プロパティ名を表します。
- `value`
  - : 設定するプロパティの新しい値です。
- `receiver`
  - : セッターの `this` 値。 {{jsxref("Reflect.set()")}} を参照。これは通常、プロキシー自体またはプロキシーから継承したオブジェクトです。

### 返値

`set()` メソッドは、代入が成功したかどうかを示す論理値 ({{jsxref("Boolean")}}) を返す必要があります。それ以外の値は[論理値に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#論理型への変換)。

多くの操作（[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) でのプロパティアクセサーの使用が含まれます）は、 `[[Set]]` 内部メソッドが `false` を返した場合、{{jsxref("TypeError")}} が発生します。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- プロパティへの代入: `proxy[foo] = bar` や `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

他にも、`[[Set]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの `[[Set]]` 内部メソッドにおいて、ハンドラーの定義が次のいずれかの不変条件に違反する場合、{{jsxref("TypeError")}} が発生します。

- プロパティの値が、対応する対象とするオブジェクトのプロパティの値と異なる値に変更できません。ただし、対応する対象とするオブジェクトのプロパティが、書き込み不可かつ構成不可の自分自身でデータプロパティである場合に限ります。つまり、{{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `target` のプロパティに対して `configurable: false, writable: false` を返す場合、かつ `value` が `target` のプロパティ記述子内の `value` 属性と異なる場合、トラップは偽値を返す必要があります。
- 対応する対象オブジェクトのプロパティが、設定不可の自己アクセサープロパティであり、そのセッターが未定義で設定されている場合、そのプロパティの値を設定できません。つまり、{{jsxref("Reflect.getOwnPropertyDescriptor()")}} が `target` のプロパティに対して `configurable: false, set: undefined` を返す場合、トラップは偽値を返す必要があります。

## 例

### プロパティ値の設定のトラップ

次のコードではプロパティの値の設定をトラップします。

```js
const p = new Proxy(
  {},
  {
    set(target, prop, value, receiver) {
      target[prop] = value;
      console.log(`property set: ${prop} = ${value}`);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "property set: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.set()")}}
