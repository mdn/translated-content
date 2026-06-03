---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
---

**`Object.freeze()`** 顧名思義是用來「凍結」一個物件的：也就是防止物件新增屬性；防止物件既有的屬性被刪除；防止物件原本的屬性，還有屬性的可列舉性，可設定性，可寫性被改動；同時它也防止物件的原型被改變。此方法回傳一個凍結狀態的物件。

{{InteractiveExample("JavaScript Demo: Object.freeze()")}}

```js interactive-example
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
```

## 語法

```js-nolint
Object.freeze(obj)
```

### 參數

- `obj`
  - : 要被凍結的物件

### 回傳值

被凍結的物件

## 描述

一個被凍結的物件無法被新增或刪除屬性。任何想要改動的嘗試都會失敗，要不沈默地失敗，就是丟出一個 {{jsxref("TypeError")}} 例外（此例外最常出現在 {{jsxref("Strict_mode", "嚴格模式", "", 1)}}）

資料屬性無法被改變。訪問者方法——setter 也一樣不能改變資料屬性（雖然它會給你可以改變資料值的假象）。注意！ 如果資料屬性是物件的話，該物件的值是可以被改變的，除非它們也被凍結。一個陣列同樣可以被凍結（因為它也是一個物件），被凍結後它的元素內容就不能被改變，也不能新增或刪除元素。

## 範例

### 凍結物件

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// 新的屬性可以被新增，原本的屬性可以被改變或刪除
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// 回傳的物件跟原本傳入的物件是同一個，所以不需要記住回傳值
// 也可以凍結一個物件
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true

// 現在任何改動都會失敗
obj.foo = "quux"; // 什麼事也不會發生
// 屬性無法被新增
obj.quaxxor = "the friendly duck";

// 在嚴格模式中，如方才的嘗試都會丟出 TypeError
function fail() {
  "use strict";
  obj.foo = "sparky"; // 丟出 TypeError
  delete obj.foo; // 丟出 TypeError
  delete obj.quaxxor; // 回傳 true 因為屬性 'quaxxor' 從來沒有被新增
  obj.sparky = "arf"; // 丟出 TypeError
}

fail();

// 嘗試透過 Object.defineProperty 來改變屬性的值會丟出 TypeError
Object.defineProperty(obj, "ohai", { value: 17 });
Object.defineProperty(obj, "foo", { value: "eit" });

// 一樣不可能改變物件的原型，都會丟出 TypeError
Object.setPrototypeOf(obj, { x: 20 });
obj.__proto__ = { x: 20 };
```

### 凍結陣列

```js
let a = [0];
Object.freeze(a); // 現在這個陣列不能被改動

a[0] = 1; // 沈默地失敗
a.push(2); // 沈默地失敗

// 在嚴格模式底下會丟出 TypeError
function fail() {
  "use strict";
  a[0] = 1;
  a.push(2);
}

fail();
```

被凍結的物件是*不可變*（Immutable）的。然而，它並不等於*常數*（constant）。以下的範例顯示一個被凍結的物件並不是常數（凍結的動作是「淺」的——如果資料屬性也是物件，不會遞迴地做凍結的動作）。

```js
obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'
```

如果要成為一個常數物件，整個物件參考圖（包含直接指向或間接指向其他物件）必須都只能指向被凍結的不可變物件。一個物件被稱作不可變是因為它的整個物件狀態值（或是指向其他物件的參考）是固定的。注意，string、number 和 boolean 這些原始型別的值是永遠不變的，Function 和 Array 都屬於物件的一種。

要讓一個物件變成常數物件，就必須遞迴地凍結每個是物件型別的屬性 (稱作深凍結)。只有當你知道物件的參考圖不存在任何[_循環_](<https://zh.wikipedia.org/wiki/環_(圖論)>)的時候才能使用以上遞迴的方式來凍結物件，不然就可能會造成無窮迴圈。一個改善以下範例中 deepFreeze() 來解決無窮迴圈問題的方法是——創建一個接受一個路徑參數 (像是陣列) 的內部用函數，用來避免無窮遞迴地呼叫 deepFreeze()——當發現欲凍結的物件已經出現在之前凍結的物件行列中就不繼續遞迴下去。需要注意的是你可能會不小心凍結一個不應該被凍結的物件，像是 \[window]。

```js
// 用這個函數來進行對物件的深凍結
function deepFreeze(obj) {
  // 取得物件的所有屬性名稱
  var propNames = Object.getOwnPropertyNames(obj);

  // 在凍結物件本身之前先凍結物件的所有物件屬性
  propNames.forEach(function (name) {
    var prop = obj[name];

    // 凍結 prop 如果它是一個物件
    if (typeof prop == "object" && prop !== null) deepFreeze(prop);
  });

  // 凍結本身 (no-op 如果已經被凍結了)
  return Object.freeze(obj);
}

obj2 = {
  internal: {},
};

deepFreeze(obj2);
obj2.internal.a = "anotherValue";
obj2.internal.a; // undefined
```

## 備註

在 ES5 中，如果傳入此方法的參數不是一個物件（原始型別），{{jsxref("TypeError")}} 就會被丟出。而在 ES2015，一個非物件型態的參數會被當成是一個已經被凍結的物件，所以會被直接回傳，不會造成錯誤。

```js
> Object.freeze(1)
TypeError: 1 is not an object // ES5 code

> Object.freeze(1)
1                             // ES2015 code
```

### 與 `Object.seal()` 的差別

被 `Object.seal()` 密封的物件還是可以改變它原有屬性的值。而被 `Object.freeze()` 凍結的物件則無法改變它原有屬性的值因為他們是不可變的。

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
