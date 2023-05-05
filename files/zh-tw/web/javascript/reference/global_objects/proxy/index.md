---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
---

{{JSRef}}

**Proxy** 物件被使用於定義基本操作的自定行為（例如：尋找屬性、賦值、列舉、函式調用等等）。

## 術語

- [handler](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)
  - : Placeholder object which contains traps.
- traps
  - : The methods that provide property access. This is analogous to the concept of traps in operating systems.
- target
  - : Object which the proxy virtualizes. It is often used as storage backend for the proxy. Invariants (semantics that remain unchanged) regarding object non-extensibility or non-configurable properties are verified against the target.

## 語法

```plain
var p = new Proxy(target, handler);
```

### 參數

- `target`
  - : A target object (can be any sort of object, including a native array, a function or even another proxy) to wrap with `Proxy`.
- `handler`
  - : An object whose properties are functions which define the behavior of the proxy when an operation is performed on it.

## 方法

- {{jsxref("Proxy.revocable()")}}
  - : Creates a revocable `Proxy` object.

## 範例

### Basic example

In this simple example the number `37` gets returned as the default value when the property name is not in the object. It is using the [`get`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get) handler.

```js
var handler = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
```

### No-op forwarding proxy

In this example, we are using a native JavaScript object to which our proxy will forward all operations that are applied to it.

```js
var target = {};
var p = new Proxy(target, {});

p.a = 37; // operation forwarded to the target

console.log(target.a); // 37. The operation has been properly forwarded
```

### Validation

With a `Proxy`, you can easily validate the passed value for an object. This example uses the [`set`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) handler.

```js
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;

    // Indicate success
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young'; // Throws an exception
person.age = 300; // Throws an exception
```

### Extending constructor

A function proxy could easily extend a constructor with a new constructor. This example uses the [`construct`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct) and [`apply`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply) handlers.

```js
function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype, 'constructor'
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, 'constructor', descriptor);
  return proxy;
}

var Person = function(name) {
  this.name = name;
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.sex = 'M';

var Peter = new Boy('Peter', 13);
console.log(Peter.sex);  // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age);  // 13
```

### Manipulating DOM nodes

Sometimes you want to toggle the attribute or class name of two different elements. Here's how using the [`set`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) handler.

```js
let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // The default behavior to store the value
    obj[prop] = newval;

    // Indicate success
    return true;
  }
});

let i1 = view.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // 'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // 'false'
console.log(i2.getAttribute('aria-selected')); // 'true'
```

### Value correction and an extra property

The `products` proxy object evaluates the passed value and convert it to an array if needed. The object also supports an extra property called `latestBrowser` both as a getter and a setter.

```js
let products = new Proxy({
  browsers: ['Internet Explorer', 'Netscape']
},
{
  get: function(obj, prop) {
    // An extra property
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1];
    }

    // The default behavior to return the value
    return obj[prop];
  },
  set: function(obj, prop, value) {
    // An extra property
    if (prop === 'latestBrowser') {
      obj.browsers.push(value);
      return true;
    }

    // Convert the value if it is not an array
    if (typeof value === 'string') {
      value = [value];
    }

    // The default behavior to store the value
    obj[prop] = value;

    // Indicate success
    return true;
  }
});

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = 'Firefox'; // pass a string (by mistake)
console.log(products.browsers); // ['Firefox'] <- no problem, the value is an array

products.latestBrowser = 'Chrome';
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'
```

### Finding an array item object by its property

This proxy extends an array with some utility features. As you see, you can flexibly "define" properties without using [`Object.defineProperties`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties). This example can be adapted to find a table row by its cell. In that case, the target will be [`table.rows`](/zh-TW/docs/DOM/table.rows).

```js
let products = new Proxy([
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' }
],
{
  get: function(obj, prop) {
    // The default behavior to return the value; prop is usually an integer
    if (prop in obj) {
      return obj[prop];
    }

    // Get the number of products; an alias of products.length
    if (prop === 'number') {
      return obj.length;
    }

    let result, types = {};

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

    // Get a product by name
    if (result) {
      return result;
    }

    // Get products by type
    if (prop in types) {
      return types[prop];
    }

    // Get product types
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```

### A complete `traps` list example

Now in order to create a complete sample `traps` list, for didactic purposes, we will try to proxify a _non native_ object that is particularly suited to this type of operation: the `docCookies` global object created by [the "little framework" published on the `document.cookie` page](/zh-TW/docs/Web/API/Document/cookie/Simple_document.cookie_framework).

```js
/*
  var docCookies = ... get the "docCookies" object here:
  https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  get: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
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
    if (oDesc && 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      value: vValue,
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
  },
});

/* Cookies test */

console.log(docCookies.my_cookie1 = 'First value');
console.log(docCookies.getItem('my_cookie1'));

docCookies.setItem('my_cookie1', 'Changed value');
console.log(docCookies.my_cookie1);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Gecko specific notes

- At present, `Object.getPrototypeOf(proxy)` unconditionally returns `Object.getPrototypeOf(target)`, because the ES2015 getPrototypeOf trap is not yet implemented ([Firefox bug 795904](https://bugzil.la/795904), [Firefox bug 888969](https://bugzil.la/888969)).
- `Array.isArray(proxy)` unconditionally returns `Array.isArray(target)` ([Firefox bug 1096753](https://bugzil.la/1096753), [Firefox bug 1111785](https://bugzil.la/1111785)).
- `Object.prototype.toString.call(proxy)` unconditionally returns `Object.prototype.toString.call(target)`, because ES2015 Symbol.toStringTag is not yet implemented ([Firefox bug 1114580](https://bugzil.la/1114580)).

## 參見

- ["Proxies are awesome" Brendan Eich presentation at JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) ([slides](http://www.slideshare.net/BrendanEich/metaprog-5303821))
- [ECMAScript Harmony Proxy proposal page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) and [ECMAScript Harmony proxy semantics page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
- [Tutorial on proxies](http://soft.vub.ac.be/~tvcutsem/proxies/)
- [SpiderMonkey specific Old Proxy API](/zh-TW/docs/JavaScript/Old_Proxy_API)
- {{jsxref("Object.watch()")}} is a non-standard feature but has been supported in Gecko for a long time.

## Licensing note

Some content (text, examples) in this page has been copied or adapted from the [ECMAScript wiki](http://wiki.ecmascript.org/doku.php) which content is licensed [CC 2.0 BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/2.0/).
