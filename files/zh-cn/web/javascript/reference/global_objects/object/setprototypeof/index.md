---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
tags:
  - Array
  - Class
  - ECMAScript6
  - ES6
  - JavaScript
  - Object.setPrototypeOf()
  - Typescript
  - setPrototypeOf()
  - 对象
  - 方法
translation_of: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
---
{{JSRef}}**Object.setPrototypeOf()** 方法设置一个指定的对象的原型 ( 即，内部 \[\[Prototype]] 属性）到另一个对象或 {{jsxref("null")}}。

> **警告：**由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 `[[Prototype]]` 在**_各个_**浏览器和 JavaScript 引擎上都是一个很慢的操作。其在更改继承的性能上的影响是微妙而又广泛的，这不仅仅限于 `obj.__proto__ = ...` 语句上的时间花费，而且可能会延伸到**_任何_**代码，那些可以访问**_任何_** `[[Prototype]]` 已被更改的对象的代码。如果你关心性能，你应该避免设置一个对象的 `[[Prototype]]`。相反，你应该使用 {{jsxref("Object.create()")}} 来创建带有你想要的 `[[Prototype]]` 的新对象。

## 语法

```plain
Object.setPrototypeOf(obj, prototype)
```

### 参数

- obj
  - : 要设置其原型的对象。
- prototype
  - : 该对象的新原型 (一个对象 或 {{jsxref("null")}}).

## 描述

如果对象的 \[\[Prototype]] 被修改成不可扩展 (通过 {{jsxref("Object.isExtensible()")}}查看)，就会抛出 {{jsxref("TypeError")}} 异常。如果 `prototype` 参数不是一个对象或者 {{jsxref("null")}} (例如，数字，字符串，boolean，或者 {{jsxref("undefined")}})，则什么都不做。否则，该方法将 `obj` 的 `[[Prototype]]` 修改为新的值。

`Object.setPrototypeOf()` 是 ECMAScript 6 最新草案中的方法，相对于 {{jsxref("Object.prototype.__proto__")}}，它被认为是修改对象原型更合适的方法

## 示例

```plain
var dict = Object.setPrototypeOf({}, null);
```

## Polyfill

我们必须借助非标准的

使用较旧的 {{jsxref("Object.prototype.__proto__")}} 属性，我们可以很容易地定义 Object.setPrototypeOf 如果它不可用：

```plain
if (!Object.setPrototypeOf) {
    // 仅适用于 Chrome 和 FireFox，在 IE 中不工作：
     Object.prototype.setPrototypeOf = function(obj, proto) {
         if(obj.__proto__) {
             obj.__proto__ = proto;
             return obj;
         } else {
             // 如果你想返回 prototype of Object.create(null):
             var Fn = function() {
                 for (var key in obj) {
                     Object.defineProperty(this, key, {
                         value: obj[key],
                     });
                 }
             };
             Fn.prototype = proto;
             return new Fn();
         }
     }
}
```

## 附加原型链

通过 `Object.getPrototypeOf()` 和 {{jsxref("Object.proto", "Object.prototype.__proto__")}} 的组合允许将一个原型链完整的附加到一个新的原型对象上：

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

Object.appendChain = function(oChain, oProto) {
  if (arguments.length < 2) {
    throw new TypeError('Object.appendChain - Not enough arguments');
  }
  if (typeof oProto === 'number' || typeof oProto === 'boolean') {
    throw new TypeError('second argument to Object.appendChain must be an object or a string');
  }

  var oNewProto = oProto,
      oReturn,
      o2nd,
      oLast;

  oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

  for (var o1st = this.getPrototypeOf(o2nd);
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
}
```

## 使用

例子一：向一个原型附加一个链

```js
function Mammal() {
  this.isMammal = 'yes';
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies('Felis');

console.log(oCat.isMammal);
// 'yes'

function Animal() {
  this.breathing = 'yes';
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing);
// 'yes'
```

例子二：将一个基本类型转化为对应的对象类型并添加到原型链上

```js
function Symbol() {
  this.isSymbol = 'yes';
}

var nPrime = 17;

console.log(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new Symbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'
```

例子三：给函数类型的对象添加一个链，并添加一个新的方法到那个链上

```js
function Person(sName) {
  this.identity = sName;
}

var george = Object.appendChain(new Person('George'), 'console.log("Hello guys!!");');

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.prototype.__proto__")}}
