---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
---

{{JSRef}}

**`Object.assign()`** 被用來複製一個或多個物件自身所有可數的屬性到另一個目標物件。回傳的值為該目標物件。

## 語法

```js-nolint
Object.assign(target, ...sources)
```

### 參數

- `target`
  - : 目標物件
- `sources`
  - : 來源物件

### 回傳值

合併目標物件及(多個)來源物件所得到的最終物件。

## 說明

如果在目標物件裡的屬性名稱(key)和來源物件的屬性名稱相同，將會被覆寫。若來源物件之間又有相同的屬性名稱，則後者會將前者覆寫。

`Object.assign()`只會從來源物件將自身可列舉的屬性複製到目標物件。此函式方法(method) 使用來源物件的`[[Get]]`事件和目標物件的`[[Set]]`事件，使它將會執行 getters 和 setters。因此，這邊的指派(_assigns_)屬性不只是複製或定義新屬性。若在合併包含 getters 的來源物件時，這個事件可能就不適合用來合併屬性。至於複製屬性的定義(包含其可列舉性)到各屬性，反倒是會用到 {{jsxref("Object.getOwnPropertyDescriptor()")}} 和 {{jsxref("Object.defineProperty()")}} 。

{{jsxref("String")}} 和 {{jsxref("Symbol")}} 類型的屬性都會被複製。

若發生錯誤，例如: 當一個屬性不可被寫入時，將會引發 {{jsxref("TypeError")}} 的錯誤，且目標物件剩餘的屬性將不會改變。

注意: `Object.assign()` 不會在來源物件屬性的值為{{jsxref("null")}} 或 {{jsxref("undefined")}} 的時候拋出錯誤。

## 範例

### 複製物件

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### 警告:非深層複製

深層複製(deep clone)需要使用其他的替代方案，因為 `Object.assign()` 僅複製屬性值。若來源物件的值參照到一個子物件，它只會複製該子物件的參照。

```js
function test() {
  let a = { b: { c: 4 }, d: { e: { f: 1 } } };
  let g = Object.assign({}, a); // 淺層
  let h = JSON.parse(JSON.stringify(a)); // 深層
  console.log(g.d); // { e: { f: 1 } }
  g.d.e = 32;
  console.log("g.d.e set to 32."); // g.d.e set to 32.
  console.log(g); // { b: { c: 4 }, d: { e: 32 } }
  console.log(a); // { b: { c: 4 }, d: { e: 32 } }
  console.log(h); // { b: { c: 4 }, d: { e: { f: 1 } } }
  h.d.e = 54;
  console.log("h.d.e set to 54."); // h.d.e set to 54.
  console.log(g); // { b: { c: 4 }, d: { e: 32 } }
  console.log(a); // { b: { c: 4 }, d: { e: 32 } }
  console.log(h); // { b: { c: 4 }, d: { e: 54 } }
}
test();
```

### 合併物件

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, 目標物件本身也被改變。
```

### 有相同屬性時合併物件

```js
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }，屬性c為o3.c的值，最後一個出現的屬性c。
```

所有的屬性會被後方相同屬性名稱的值覆寫。

### 複製 Symbol 型別的屬性

```js
var o1 = { a: 1 };
var o2 = { [Symbol("foo")]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]非不在
```

### 在屬性鏈中的不可列舉屬性不會被複製

```js
var obj = Object.create(
  { foo: 1 },
  {
    // foo 是 obj 的屬性鏈。
    bar: {
      value: 2, // bar 是不可列舉的屬性，因為enumerable預設為false。
    },
    baz: {
      value: 3,
      enumerable: true, // baz 是自身可列舉的屬性。
    },
  },
);

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### 原始型別會被包成物件

```js
var v1 = "abc";
var v2 = true;
var v3 = 10;
var v4 = Symbol("foo");

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// 原始型別會被打包，null和undefined則會被忽略。
// 注意: 只有打包成物件的字串是可列舉的，即可被複製的。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### 任何異常將會中斷正進行的複製程序

```js
var target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false,
}); // target.foo 是 read-only (唯讀)屬性

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" 是 read-only
// 在指派值給 target.foo 時，異常(Exception)會被拋出。

console.log(target.bar); // 2, 第一個來源物件複製成功。
console.log(target.foo2); // 3, 第二個來源物件的第一個屬性複製成功。
console.log(target.foo); // 1, 異常在這裡拋出。
console.log(target.foo3); // undefined, 複製程式已中斷，複製失敗。
console.log(target.baz); // undefined, 第三個來源物件也不會被複製。
```

### 複製的存取程序

```js
var obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

var copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }， copy.bar的值，是obj.bar的getter回傳的值。

// 這個函式用來複製完整的描述內容。
function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    // Object.assign 預設會複製可列舉的Symbols。
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## Polyfill

{{Glossary("Polyfill","polyfill")}} 不支援 Symbol 屬性，因為 ES5 沒有 Symbol 型別。

```js
if (typeof Object.assign != "function") {
  Object.assign = function (target, varArgs) {
    // .length of function is 2
    "use strict";
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError("Cannot convert undefined or null to object");
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- {{jsxref("Object.defineProperties()")}}
- [Enumerability and ownership of properties](/zh-TW/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
