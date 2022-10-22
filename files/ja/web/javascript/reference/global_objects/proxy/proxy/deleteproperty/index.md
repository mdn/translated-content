---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
---

{{JSRef}}

**`handler.deleteProperty()`** メソッドは、 {{jsxref("Operators/delete", "delete")}} 演算子のトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-deleteproperty.html", "taller")}}

## 構文

```
const p = new Proxy(target, {
  deleteProperty: function(target, property) {
  }
});
```

### 引数

次の引数が `deleteProperty` メソッドに渡されます。 `this` はハンドラにバインドされます。

- `target`
  - : ターゲットオブジェクト
- `property`
  - : 削除するプロパティの名前

### 返値

`deleteProperty` メソッドはプロパティが正しく削除されたかどうか示す {{jsxref("Boolean")}} 値を返さなければなりません。

## 解説

**`handler.deleteProperty()`** メソッドは{{jsxref("Operators/delete", "delete")}}操作に対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- プロパティの削除: `delete proxy[foo]` と `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- ターゲットオブジェクトの非設定独自プロパティとして存在する場合、プロパティは削除されません。

## 例

### プロパティ値の取得のトラップ

次のコードは {{jsxref("Operators/delete", "delete")}} 操作をトラップします。

```js
const p = new Proxy({}, {
  deleteProperty: function(target, prop) {
    if (prop in target){
      delete target[prop]
      console.log('property removed: ' + prop)
      return true
    }
    else {
      console.log('property not found: ' + prop)
      return false
    }
  }
})

let result

p.a = 10
console.log('a' in p)  // true

result = delete p.a    // "property removed: a"
console.log(result)    // true
console.log('a' in p)  // false

result = delete p.a    // "property not found: a"
console.log(result)    // false
```

## 仕様書

| 仕様書                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-delete-p', '[[Delete]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.deleteProperty")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Operators/delete", "delete")}} operator
- {{jsxref("Reflect.deleteProperty()")}}
