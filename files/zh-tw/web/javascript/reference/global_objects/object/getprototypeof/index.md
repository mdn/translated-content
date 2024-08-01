---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
---

{{JSRef}}

**`Object.getPrototypeOf()`** 回傳指定物件的原型，換句話說，就是取得該物件的 `[[Prototype]]` 屬性的值).

## 表達式

```plain
Object.getPrototypeOf(obj)
```

### 參數

- `obj`
  - : 欲取得原型的物件。

## 範例

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

## 備註

如果 `obj` 參數在 ES5 並不是物件時會拋出 {{jsxref("TypeError")}} 例外，同樣狀況在 ES6 時該參數將會被強制轉換成 {{jsxref("Object")}}。

```js
Object.getPrototypeOf("foo");
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf("foo");
// String.prototype                  (ES6 code)
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Opera 註

雖然舊版的 Opera 並不支援 `Object.getPrototypeOf()`，但是 Opera 從 Opera 10.50 支援非標準的 [`Object.prototype.__proto__`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) 屬性。

## 參見

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}} {{experimental_inline}}
- [`Object.prototype.__proto__`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- John Resig 的文章－－《[getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/)》
- {{jsxref("Reflect.getPrototypeOf()")}}
