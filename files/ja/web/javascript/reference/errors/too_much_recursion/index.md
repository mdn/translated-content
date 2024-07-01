---
title: "InternalError: too much recursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
---

{{jsSidebar("Errors")}}

JavaScript の例外である "too much recursion" または "Maximum call stack size exceeded" は、関数の呼び出しが多すぎる場合や、関数に基礎ケースがない場合に発生します。

## メッセージ

```js
Error: Out of stack space (Edge)
InternalError: too much recursion (Firefox)
RangeError: Maximum call stack size exceeded (Chrome)
```

## エラーの種類

{{jsxref("InternalError")}}。

## エラーの原因

自分自身を呼び出す関数は*再帰関数*と呼ばれます。ある条件を満たすと、関数は自分自身を呼び出すのをやめます。これは*基礎ケース*と呼ばれます。

いくつかの点で、再帰はループに似ています。両方とも、同じコードを複数回実行し、 (無限ループまたは無限再帰を避けるために) 条件を必要とします。関数の再帰呼び出しが深すぎる場合、または関数が基礎ケースを欠いている場合、 JavaScript はこのエラーを発生します。

## 例

終了条件に従って、この再帰関数は 10 回実行されます。

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" は終了条件
    return;
  }
  // 何かを実行
  loop(x + 1); // 再帰呼び出し
}
loop(0);
```

この条件に、非常に大きい値を設定すると動作しません。

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // 何かを実行
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

この再帰関数は基礎ケースを欠いています。脱出条件がないため、この関数は自分自身を無限に呼び出し続けます。

```js example-bad
function loop(x) {
  // The base case is missing

  loop(x + 1); // 再帰呼び出し
}

loop(0);

// InternalError: too much recursion
```

### Class error: too much recursion

```js example-bad
class Person {
  constructor() {}
  set name(name) {
    this.name = name; // 再帰呼び出し
  }
}

const tony = new Person();
tony.name = "Tonisha"; // InternalError: too much recursion
```

値がプロパティ name に代入されるとき (this.name = name;) JavaScript はプロパティを設定する必要があります。これが発生すると、セッター関数が呼び出されます。

```js example-bad
set name(name){
  this.name = name; // 再帰呼び出し
}
```

> **メモ:** この例では、セッターが呼び出されたとき、同じことを再度行うように指示されます。*つまり、処理しているのと同じプロパティに設定します。*これにより、関数は何度も何度も自分自身を呼び出し、無限に再帰が行われます。

この問題は同じ変数がゲッターに使用される場合にも発生します。

```js example-bad
get name(){
  return this.name; // 再帰呼び出し
}
```

この問題を防ぐには、セッター関数の内部で代入しようとしているプロパティが、もともとセッターを起動したものと異なっていることを確認してください。同じことがゲッターにも言えます。

```js
class Person {
  constructor() {}
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
const tony = new Person();
tony.name = "Tonisha";
console.log(tony);
```

## 関連情報

- {{Glossary("Recursion", "再帰")}}
- [再帰関数](/ja/docs/Web/JavaScript/Guide/Functions#recursion)
