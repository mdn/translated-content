---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
---

{{JSRef}}

**Reflect** 是一個內建物件，提供了用於獲取可截取之 JavaScript 操作的方法。這些方法與 [proxy handlers](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler) 的方法相同。`Reflect` 不是一個函式物件，因此它是不可建構的。

## 描述

Unlike most global objects, `Reflect` is not a constructor. You can not use it with a [`new` operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/new) or invoke the `Reflect` object as a function. All properties and methods of `Reflect` are static (just like the {{jsxref("Math")}} object).

## 方法

The `Reflect` object provides the following static functions which have the same names as the [proxy handler methods](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler). Some of these methods are the same as corresponding methods on {{jsxref("Object")}}.

- {{jsxref("Reflect.apply()")}}
  - : Calls a target function with arguments as specified by the `args` parameter. See also {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()")}}
  - : The [`new` operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/new) as a function. Equivalent to calling `new target(...args)`.
- {{jsxref("Reflect.defineProperty()")}}
  - : Similar to {{jsxref("Object.defineProperty()")}}. Returns a {{jsxref("Boolean")}}.
- {{jsxref("Reflect.deleteProperty()")}}
  - : The [`delete` operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/delete) as a function. Equivalent to calling `delete target[name]`.
- {{jsxref("Reflect.get()")}}
  - : A function that returns the value of properties.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : Similar to {{jsxref("Object.getOwnPropertyDescriptor()")}}. Returns a property descriptor of the given property if it exists on the object, {{jsxref("undefined")}} otherwise.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : Same as {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()")}}
  - : The [`in` operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/in) as function. Returns a boolean indicating whether an own or inherited property exists.
- {{jsxref("Reflect.isExtensible()")}}
  - : Same as {{jsxref("Object.isExtensible()")}}.
- {{jsxref("Reflect.ownKeys()")}}
  - : Returns an array of the target object's own (not inherited) property keys.
- {{jsxref("Reflect.preventExtensions()")}}
  - : Similar to {{jsxref("Object.preventExtensions()")}}. Returns a {{jsxref("Boolean")}}.
- {{jsxref("Reflect.set()")}}
  - : A function that assigns values to properties. Returns a {{jsxref("Boolean")}} that is `true` if the update was successful.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : A function that sets the prototype of an object.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- The {{jsxref("Proxy")}} global object.
- The {{jsxref("Proxy.handler", "handler")}} object.
