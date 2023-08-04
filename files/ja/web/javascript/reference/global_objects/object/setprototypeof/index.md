---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
---

{{JSRef}}

**`Object.setPrototypeOf()`** メソッドは、指定されたオブジェクトのプロトタイプ (つまり、内部の `[[Prototype]]` プロパティ) を、別のオブジェクトまたは {{jsxref("null")}} に設定します。

> **警告:** オブジェクトの `[[Prototype]]` を変更すると、 [最近の JavaScript エンジンがプロパティへのアクセスを最適化する方法](https://mathiasbynens.be/notes/prototypes)の特質上、すべてのブラウザーや JavaScript エンジンで、操作がとても低速になります。さらに、プロトタイプを変更することの性能への影響は細かく広範囲にわたり、 `Object.setPrototypeOf(...)` 文に費やされる時間だけではなく、 `[[Prototype]]` が変更されたすべてのオブジェクトへのアクセスを持つ**_すべて_**のコードに影響する可能性があります。
>
> この機能は言語の一部であるため、その機能の実装による負荷は (理念上は) エンジンの開発者によります。エンジンの開発者がこの問題に対処するまでの間、性能が気になる場合は、オブジェクトの `[[Prototype]]` を変更することは避けるべきです。代わりに、 {{jsxref("Object.create()")}} を使用して必要な `[[Prototype]]` をもつオブジェクトを生成してください。

## 構文

```
Object.setPrototypeOf(obj, prototype)
```

### 引数

- `obj`
  - : プロトタイプを設定するオブジェクト。
- `prototype`
  - : オブジェクトの新しいプロトタイプ (オブジェクトまたは {{jsxref("null")}})。

### 返値

指定されたオブジェクト。

## 解説

`[[Prototype]]` が変更されるオブジェクトが {{jsxref("Object.isExtensible()")}} に応じて拡張不可の場合、 {{jsxref("Global_Objects/TypeError", "TypeError")}} 例外を投げます。`prototype` 引数がオブジェクトまたは {{jsxref("null")}} ではない場合(つまり、数値、文字列、boolean、 {{jsxref("undefined")}} のいずれか)、何もしません。さもなければ、このメソッドは `obj` の `[[Prototype]]` を新しい値に変更します。

`Object.setPrototypeOf()` は、 ECMAScript 2015 仕様書にあります。一般的には、オブジェクトのプロトタイプを設定するための適切な方法と考えられています。もっと物議を醸す [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) プロパティがあります。

## プロトタイプチェーンの追加

`Object.getPrototypeOf()` と [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) の組み合わせによってプロトタイプチェーン全体を新しいプロトタイプオブジェクトに追加できます。

```js
/**
 *** Object.appendChain(@object, @prototype)
 *
 * Appends the first non-native prototype of a chain to a new prototype.
 * Returns @object (if it was a primitive value it will transformed into an object).
 *
 *** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
 *** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
 *
 * Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
 * new Function(["@arg"(s)], "@function_body") to that chain.
 * Returns the function.
 *
 **/

Object.appendChain = function (oChain, oProto) {
  if (arguments.length < 2) {
    throw new TypeError("Object.appendChain - 引数が足りません");
  }
  if (typeof oProto !== "object" && typeof oProto !== "string") {
    throw new TypeError(
      "Object.appendChain の第二引数は object か string でなければなりません",
    );
  }

  var oNewProto = oProto,
    oReturn =
      (o2nd =
      oLast =
        oChain instanceof this ? oChain : new oChain.constructor(oChain));

  for (
    var o1st = this.getPrototypeOf(o2nd);
    o1st !== Object.prototype && o1st !== Function.prototype;
    o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
};
```

### 使い方

#### 最初の例: チェーンをプロトタイプに追加する

```js
function Mammal() {
  this.isMammal = "yes";
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies("Felis");

console.log(oCat.isMammal); // 'yes'

function Animal() {
  this.breathing = "yes";
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // 'yes'
```

#### 二番目の例: そのコンストラクタのインスタンスにプリミティブ値を変換し、プロトタイプにそのチェーンを追加する

```js
function MySymbol() {
  this.isSymbol = "yes";
}

var nPrime = 17;

console.log(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new MySymbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'
```

#### 三番目の例: チェーンを Function.prototype オブジェクトに追加し、新しい関数をそのチェーンに追加する

```js
function Person(sName) {
  this.identity = sName;
}

var george = Object.appendChain(
  new Person("George"),
  'console.log("Hello guys!!");',
);

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'
```

## 例

### Object.setPrototypeOf の使用

```js
var dict = Object.setPrototypeOf({}, null);
```

## ポリフィル

`Object.setPrototypeOf` が利用できない場合、より古い [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) プロパティを使って、簡単に定義することができます。

```js
if (!Object.setPrototypeOf) {
  // Chrome および FireFox で動作しますが、 IE では動作しません
  Object.prototype.setPrototypeOf = function (obj, proto) {
    if (obj.__proto__) {
      obj.__proto__ = proto;
      return obj;
    } else {
      // Object.create(null) のプロトタイプを返したい場合
      var Fn = function () {
        for (var key in obj) {
          Object.defineProperty(this, key, {
            value: obj[key],
          });
        }
      };
      Fn.prototype = proto;
      return new Fn();
    }
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.setPrototypeOf")}}

## 関連情報

- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
