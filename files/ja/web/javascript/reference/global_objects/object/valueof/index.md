---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---

{{JSRef}}

**`valueOf()`** メソッドは、指定されたオブジェクトのプリミティブな値を返します。

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## 構文

```
object.valueOf()
```

### 返値

指定されたオブジェクトのプリミティブ値を返します。

> **メモ:** [(単項) プラス符号](/ja/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus)を `valueOf` の省略形として使用することができる場合があります。例えば、 `+new Number()` などです。[単項プラスの使用](#Using_unary_plus)も参照してください。

## 解説

JavaScript は `valueOf` メソッドを、オブジェクトをプリミティブな値に変換するときに呼び出します。あなたが自分で `valueOf` メソッドを実行する必要はほとんどなく、プリミティブな値が期待される場面にオブジェクトが出くわしたとき JavaScript が自動的に実行します。

既定で、 `valueOf` メソッドは `Object` の子孫にあたるあらゆるオブジェクトに継承されています。全ての組み込みコアオブジェクトは適切な値を返すためにこのメソッドを上書きしています。もしオブジェクトがプリミティブな値を持たない場合、 `valueOf` はオブジェクト自身を返します。

あなたのコードで組み込みオブジェクトをプリミティブな値にするために `valueOf` を呼ぶことができます。また、カスタムオブジェクトを作成した時に `Object.prototype.valueOf()` を上書きしてデフォルトの `Object` のメソッドの代わりにカスタムメソッドを呼び出すようにすることができます。

### カスタムオブジェクトでの valueOf の上書き

既定の `valueOf` メソッドに代わって呼び出される関数を作ることができます。その関数は引数を取ってはなりません。

`MyNumberType` というオブジェクト型があって、それに `valueOf` メソッドを作りたいとしましょう。以下のコードはユーザー定義関数をオブジェクトの `valueOf` メソッドに代入しています。

```js
MyNumberType.prototype.valueOf = function () {
  return customPrimitiveValue;
};
```

上のコードにより、 `MyNumberType` 型のオブジェクトがプリミティブな値で表されるべき文脈では常に、 JavaScript は自動的に上のコードで定義された関数を呼び出します。

オブジェクトの `valueOf` メソッドはたいてい JavaScript によって実行されますが、あなた自身も以下のように実行できます。

```js
myNumberType.valueOf();
```

> **メモ:** 文字列型の文脈にあるオブジェクトは {{jsxref("Object.toString", "toString()")}} メソッドを通じて変換されますが、これは {{jsxref("String")}} オブジェクトが `valueOf` を使って文字列型に変換されるのとは違います。すべてのオブジェクトは、 "`[object type]`" としか出力されないかもしれませんが、文字列変換できます。しかし多くのオブジェクトは数値や真偽値や関数には変換できません。

## 例

### カスタム型での valueOf の使用

```js
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

var myObj = new MyNumberType(4);
myObj + 3; // 7
```

### 単項プラスの使用

```js
+"5"; // 5 (文字列から数値へ)
+""; // 0 (文字列から数値へ)
+"1 + 2"; // NaN (評価不能)
+new Date(); // (new Date()).getTime() と同じ
+"foo"; // NaN (文字列から数値へ)
+{}; // NaN
+[]; // 0 (toString() は空の文字列リストを返す)
+[1]; // 1
+[1,2]; // NaN
+new Set([1]); // NaN
+BigInt(1); // Uncaught TypeError: Cannot convert a BigInt value to a number
+undefined; // NaN
+null; // 0
+true; // 1
+false; // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.valueOf")}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
