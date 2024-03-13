---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
---

{{JSRef}}

**Proxy** 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

## 术语

- {{jsxref("Global_Objects/Proxy/handler", "<dfn>handler</dfn>")}}
  - : 包含捕捉器（trap）的占位符对象，可译为处理器对象。
- _traps_
  - : 提供属性访问的方法。这类似于操作系统中捕获器的概念。
- _target_
  - : 被 Proxy 代理虚拟化的对象。它常被作为代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）。

## 语法

```plain
const p = new Proxy(target, handler)
```

### 参数

- `target`
  - : 要使用 `Proxy` 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
- `handler`
  - : 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 `p` 的行为。

## 方法

- {{jsxref("Proxy.revocable()")}}
  - : 创建一个可撤销的`Proxy`对象。

## handler 对象的方法

`handler` 对象是一个容纳一批特定属性的占位符对象。它包含有 `Proxy` 的各个捕获器（trap）。

所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

- {{JSxRef("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : {{JSxRef("Object.getPrototypeOf")}} 方法的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : {{JSxRef("Object.setPrototypeOf")}} 方法的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/isExtensible", "handler.isExtensible()")}}
  - : {{JSxRef("Object.isExtensible")}} 方法的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
  - : {{JSxRef("Object.preventExtensions")}} 方法的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : {{JSxRef("Object.getOwnPropertyDescriptor")}} 方法的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}
  - : {{JSxRef("Object.defineProperty")}} 方法的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/has", "handler.has()")}}
  - : {{JSxRef("Operators/in", "in")}} 操作符的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/get", "handler.get()")}}
  - : 属性读取操作的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/set", "handler.set()")}}
  - : 属性设置操作的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
  - : {{JSxRef("Operators/delete", "delete")}} 操作符的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}
  - : {{JSxRef("Object.getOwnPropertyNames")}} 方法和 {{JSxRef("Object.getOwnPropertySymbols")}} 方法的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/apply", "handler.apply()")}}
  - : 函数调用操作的捕捉器。
- {{JSxRef("Global_Objects/Proxy/handler/construct", "handler.construct()")}}
  - : {{JSxRef("Operators/new", "new")}} 操作符的捕捉器。

一些不标准的捕捉器已经被[废弃并且移除](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#Proxy)了。

## 示例

### 基础示例

在以下简单的例子中，当对象中不存在属性名时，默认返回值为 `37`。下面的代码以此展示了 {{jsxref("Global_Objects/Proxy/handler/get", "get")}} handler 的使用场景。

```js
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37
```

### 无操作转发代理

在以下例子中，我们使用了一个原生 JavaScript 对象，代理会将所有应用到它的操作转发到这个对象上。

```js
let target = {};
let p = new Proxy(target, {});

p.a = 37; // 操作转发到目标

console.log(target.a); // 37. 操作已经被正确地转发
```

### 验证

通过代理，你可以轻松地验证向一个对象的传值。下面的代码借此展示了 {{jsxref("Global_Objects/Proxy/handler/set", "set")}} handler 的作用。

```js
let validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }

    // The default behavior to store the value
    obj[prop] = value;

    // 表示成功
    return true;
  },
};

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age);
// 100

person.age = "young";
// 抛出异常：Uncaught TypeError: The age is not an integer

person.age = 300;
// 抛出异常：Uncaught RangeError: The age seems invalid
```

### 扩展构造函数

方法代理可以轻松地通过一个新构造函数来扩展一个已有的构造函数。这个例子使用了[`construct`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct)和[`apply`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply)。

```js
function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,
    "constructor",
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function (target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function (target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    },
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function (name) {
  this.name = name;
};

var Boy = extend(Person, function (name, age) {
  this.age = age;
});

Boy.prototype.sex = "M";

var Peter = new Boy("Peter", 13);
console.log(Peter.sex); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13
```

### 操作 DOM 节点

有时，我们可能需要互换两个不同的元素的属性或类名。下面的代码以此为目标，展示了 {{jsxref("Global_Objects/Proxy/handler/set", "set")}} handler 的使用场景。

```js
let view = new Proxy(
  {
    selected: null,
  },
  {
    set: function (obj, prop, newval) {
      let oldval = obj[prop];

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // 默认行为是存储被传入 setter 函数的属性值
      obj[prop] = newval;

      // 表示操作成功
      return true;
    },
  },
);

let i1 = (view.selected = document.getElementById("item-1"));
console.log(i1.getAttribute("aria-selected")); // 'true'

let i2 = (view.selected = document.getElementById("item-2"));
console.log(i1.getAttribute("aria-selected")); // 'false'
console.log(i2.getAttribute("aria-selected")); // 'true'
```

### 值修正及附加属性

以下`products`代理会计算传值并根据需要转换为数组。这个代理对象同时支持一个叫做 `latestBrowser`的附加属性，这个属性可以同时作为 getter 和 setter。

```js
let products = new Proxy(
  {
    browsers: ["Internet Explorer", "Netscape"],
  },
  {
    get: function (obj, prop) {
      // 附加一个属性
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // 默认行为是返回属性值
      return obj[prop];
    },
    set: function (obj, prop, value) {
      // 附加属性
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return;
      }

      // 如果不是数组，则进行转换
      if (typeof value === "string") {
        value = [value];
      }

      // 默认行为是保存属性值
      obj[prop] = value;

      // 表示成功
      return true;
    },
  },
);

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = "Firefox"; // 如果不小心传入了一个字符串
console.log(products.browsers); // ['Firefox'] <- 也没问题，得到的依旧是一个数组

products.latestBrowser = "Chrome";
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'
```

### 通过属性查找数组中的特定对象

以下代理为数组扩展了一些实用工具。如你所见，通过 Proxy，我们可以灵活地“定义”属性，而不需要使用 {{jsxref("Object.defineProperties")}} 方法。以下例子可以用于通过单元格来查找表格中的一行。在这种情况下，target 是 [`table.rows`](/zh-CN/docs/DOM/table.rows)。

```js
let products = new Proxy(
  [
    { name: "Firefox", type: "browser" },
    { name: "SeaMonkey", type: "browser" },
    { name: "Thunderbird", type: "mailer" },
  ],
  {
    get: function (obj, prop) {
      // 默认行为是返回属性值，prop ?通常是一个整数
      if (prop in obj) {
        return obj[prop];
      }

      // 获取 products 的 number; 它是 products.length 的别名
      if (prop === "number") {
        return obj.length;
      }

      let result,
        types = {};

      for (let product of obj) {
        if (product.name === prop) {
          result = product;
        }
        if (types[product.type]) {
          types[product.type].push(product);
        } else {
          types[product.type] = [product];
        }
      }

      // 通过 name 获取 product
      if (result) {
        return result;
      }

      // 通过 type 获取 products
      if (prop in types) {
        return types[prop];
      }

      // 获取 product type
      if (prop === "types") {
        return Object.keys(types);
      }

      return undefined;
    },
  },
);

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products["Firefox"]); // { name: 'Firefox', type: 'browser' }
console.log(products["Chrome"]); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```

### 一个完整的 `traps` 列表示例

出于教学目的，这里为了创建一个完整的 traps 列表示例，我们将尝试代理化一个非原生对象，这特别适用于这类操作：由 [发布在 document.cookie 页面上的“小型框架”](/zh-CN/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support)创建的`docCookies`全局对象。

```js
/*
  var docCookies = ... get the "docCookies" object here:
  https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  get: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) {
      return false;
    }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (sKey in oTarget) {
      return false;
    }
    return oTarget.removeItem(sKey);
  },
  enumerate: function (oTarget, sKey) {
    return oTarget.keys();
  },
  ownKeys: function (oTarget, sKey) {
    return oTarget.keys();
  },
  has: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  defineProperty: function (oTarget, sKey, oDesc) {
    if (oDesc && "value" in oDesc) {
      oTarget.setItem(sKey, oDesc.value);
    }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue
      ? {
          value: vValue,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
});

/* Cookies 测试 */

alert((docCookies.my_cookie1 = "First value"));
alert(docCookies.getItem("my_cookie1"));

docCookies.setItem("my_cookie1", "Changed value");
alert(docCookies.my_cookie1);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- ["Proxies are awesome" Brendan Eich presentation at JSConf](http://jsconf.eu/2010/speaker/be_proxy_objects.html) ([slides](http://www.slideshare.net/BrendanEich/metaprog-5303821))
- [ECMAScript Harmony Proxy proposal page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) and [ECMAScript Harmony proxy semantics page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
- [Tutorial on proxies](http://soft.vub.ac.be/~tvcutsem/proxies/)
- [SpiderMonkey specific Old Proxy API](/zh-CN/docs/JavaScript/Old_Proxy_API)
- {{jsxref("Object.watch()")}} is a non-standard feature but has been supported in Gecko for a long time.

## 版权声明

一些内容（如文本、例子）是复制自或修改自[ECMAScript wiki](http://wiki.ecmascript.org/doku.php)（版权声明 [CC 2.0 BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/2.0/)）。
