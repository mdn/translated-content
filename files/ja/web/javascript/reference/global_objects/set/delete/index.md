---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - プロトタイプ
  - リファレンス
  - set
browser-compat: javascript.builtins.Set.delete
translation_of: Web/JavaScript/Reference/Global_Objects/Set/delete
---
{{JSRef}}

**`delete()`** メソッドは、指定された値が設定されていれば、 `Set` オブジェクトから取り除きます。

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## 構文

```js
delete(value)
```

### 引数

- `value`
  - : `Set` から取り除く要素の値です。

### 返値

`true` ならば `value` が既に `Set` に存在していたことを表します。そうでなければ `false` を返します。

## 例

### delete() メソッドの使用

```js
const mySet = new Set();
mySet.add('foo');

mySet.delete('bar'); // 削除するべき要素が見つからなければ false を返す
mySet.delete('foo'); // 正常に要素を削除出来れば true を返す

mySet.has('foo');    // 存在しない要素を確認すると false を返す
```

Object を Set から削除する方法を以下で確認してみましょう。

```js
const setObj = new Set(); // 新しいセットを作成

setObj.add({x: 10, y: 20}); // セットにオブジェクトを追加

setObj.add({x: 20, y: 30}); // セットにオブジェクトを追加

// `x > 10` のポイントを削除
setObj.forEach(function(point){
  if (point.x > 10){
    setObj.delete(point)
  }
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
