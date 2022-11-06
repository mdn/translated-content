---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
---

{{JSRef}}

**`handler.defineProperty()`** は {{jsxref("Object.defineProperty()")}} に対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}

## 構文

```
const p = new Proxy(target, {
  defineProperty: function(target, property, descriptor) {
  }
});
```

### 引数

次の引数が `defineProperty()` メソッドに渡されます。 `this` はハンドラにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `property`
  - : 説明を受け取るプロパティの名前または {{jsxref("Symbol")}} です。
- `descriptor`
  - : 定義や変更されるプロパティに対するディスクリプターです。

### 返値

`defineProperty()` メソッドはプロパティが正しく定義されたかどうかを表す {{jsxref("Boolean")}} を返す必要があります。

## 解説

**`handler.defineProperty()`** メソッドは {{jsxref("Object.defineProperty()")}} に対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- ターゲットオブジェクトが拡張不可の場合、プロパティは追加できません。
- ターゲットオブジェクトの設定不可の独自のプロパティとして存在しない場合、プロパティは設定不可とみなされ、追加や変更ができません。
- ターゲットオブジェクトの対応する設定可能なプロパティが存在する場合、プロパティは設定不可にすることができません。
- 対応するターゲットオブジェクトのプロパティが存在する場合、`Object.defineProperty(target, prop, descriptor)` は例外をスローしません。
- strict モードでは、`defineProperty` ハンドラから `false` が返ってきた場合、{{jsxref("TypeError")}} 例外をスローします。

## 例

### defineProperty のトラップ

次のコードは {{jsxref("Object.defineProperty()")}} をトラップします。

```js
const p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log('called: ' + prop);
    return true;
  }
});

const desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, 'a', desc); // "called: a"
```

{{jsxref("Object.defineProperty()")}} または {{jsxref("Reflect.defineProperty()")}} を呼び出した時、 `defineProperty()` トラップに渡されるディスクリプターには制約があります。下記のプロパティのみが使用可能で、標準ではないプロパティは無視されます。

- `enumerable`
- `configurable`
- `writable`
- `value`
- `get`
- `set`

```js
const p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(p, 'name', {
  value: 'proxy',
  type: 'custom'
});  // { value: 'proxy' }
```

## 仕様書

| 仕様書                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc', '[[DefineOwnProperty]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.defineProperty")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}
