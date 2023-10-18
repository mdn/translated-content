---
title: WeakSet() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
---

{{JSRef}}

**`WeakSet`** コンストラクターで、 `WeakSet` オブジェクトを生成し、これに弱い参照で*オブジェクト*をコレクションで保持することができます。

## 構文

```
new WeakSet([iterable]);
```

### 引数

- _iterable_
  - : [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Statements/for...of)が渡された場合、すべての要素が新しい `WeakSet` に追加されます。 null は undefined として扱われます。

## 例

### WeakSet オブジェクトの使用

```js
var ws = new WeakSet();
var foo = {};
var bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // foo を set から削除
ws.has(foo); // false, foo は削除済み
ws.has(bar); // true, bar は残っている
```

`foo !== bar` であることに注意してください。これらは似たオブジェクトですが、_**まったく同じオブジェクト**ではありません_。したがって、両方のオブジェクトが set に追加されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.WeakSet.WeakSet")}}

## 関連情報

- {{jsxref("WeakSet")}}
