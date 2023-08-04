---
title: 元编程
slug: Web/JavaScript/Guide/Meta_programming
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}

从 ECMAScript 2015 开始，JavaScript 获得了 {{jsxref("Proxy")}} 和 {{jsxref("Reflect")}} 对象的支持，允许你拦截并定义基本语言操作的自定义行为（例如，属性查找，赋值，枚举，函数调用等）。借助这两个对象，你可以在 JavaScript 元级别进行编程。

## 代理

在 ECMAScript 6 中引入的 {{jsxref("Proxy")}} 对象可以拦截某些操作并实现自定义行为。例如获取一个对象上的属性：

```js
let handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42;
  },
};

let p = new Proxy({}, handler);
p.a = 1;

console.log(p.a, p.b); // 1, 42
```

`Proxy` 对象定义了一个目标（这里是一个空对象）和一个实现了 `get` 陷阱的 handler 对象。这里，代理的对象在获取未定义的属性时不会返回 `undefined`，而是返回 42。

更多例子参见 {{jsxref("Proxy")}} 页面。

### 术语

在讨论代理的功能时会用到以下术语。

- {{jsxref("Global_Objects/Proxy/handler","handler")}}
  - : 包含陷阱的占位符对象。
- traps
  - : 提供属性访问的方法。这类似于操作系统中陷阱的概念。
- target
  - : 代理虚拟化的对象。它通常用作代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）。
- invariants
  - : 实现自定义操作时保持不变的语义称为不变量。如果你违反处理程序的不变量，则会抛出一个 {{jsxref("TypeError")}}。

## 句柄和陷阱

以下表格中总结了 `Proxy` 对象可用的陷阱。详细的解释和例子请看[参考页](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)。

<table class="standard-table">
  <thead>
    <tr>
      <th>Handler / trap</th>
      <th>Interceptions</th>
      <th>Invariants</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
      <td>
        <ul>
          <li>
            <code>getPrototypeOf</code>方法一定返回一个对象或<code>null</code>.
          </li>
          <li>
            如果 <code>target</code> 不可扩展，<code
              >Object.getPrototypeOf(proxy)</code
            >
            必须返回和 <code>Object.getPrototypeOf(target)</code>一样的值。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
      <td>
        如果 <code>target</code> 不可扩展，<code>prototype</code>
        参数必须与<code>Object.getPrototypeOf(target)</code>的值相同。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
      <td>
        <code>Object.isExtensible(proxy)</code>
        必须返回和<code>Object.isExtensible(target)</code>一样的值。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
      <td>
        如果<code>Object.isExtensible(proxy)</code> 值为
        <code>false，Object.preventExtensions(proxy)</code> 只返回<code
          >true。</code
        >
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        <ul>
          <li>
            <code>getOwnPropertyDescripton</code>
            只能返回对象或者<code>undefined</code>.
          </li>
          <li>
            A property cannot be reported as non-existent, if it exists as a
            non-configurable own property of the target object.
          </li>
          <li>
            A property cannot be reported as non-existent, if it exists as an
            own property of the target object and the target object is not
            extensible.
          </li>
          <li>
            A property cannot be reported as existent, if it does not exists as
            an own property of the target object and the target object is not
            extensible.
          </li>
          <li>
            A property cannot be reported as non-configurable, if it does not
            exists as an own property of the target object or if it exists as a
            configurable own property of the target object.
          </li>
          <li>
            The result of
            <code>Object.getOwnPropertyDescriptor(target)</code> can be applied
            to the target object using <code>Object.defineProperty</code> and
            will not throw an exception.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
      <td>
        <ul>
          <li>
            A property cannot be added, if the target object is not extensible.
          </li>
          <li>
            A property cannot be added as or modified to be non-configurable, if
            it does not exists as a non-configurable own property of the target
            object.
          </li>
          <li>
            A property may not be non-configurable, if a corresponding
            configurable property of the target object exists.
          </li>
          <li>
            If a property has a corresponding target object property then
            <code>Object.defineProperty(target, prop, descriptor)</code> will
            not throw an exception.
          </li>
          <li>
            In strict mode, a <code>false</code> return value from the
            <code>defineProperty</code> handler will throw a
            {{jsxref("TypeError")}} exception.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}
      </td>
      <td>
        Property query: <code>foo in proxy</code><br />Inherited property query:
        <code>foo in Object.create(proxy)</code
        ><br />{{jsxref("Reflect.has()")}}
      </td>
      <td>
        <ul>
          <li>
            A property cannot be reported as non-existent, if it exists as a
            non-configurable own property of the target object.
          </li>
          <li>
            A property cannot be reported as non-existent, if it exists as an
            own property of the target object and the target object is not
            extensible.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}
      </td>
      <td>
        <!-- markdownlint-disable MD011 -->
        Property access: <code>proxy[foo]</code>and <code>proxy.bar</code
        ><br />Inherited property access: <code>Object.create(proxy)[foo]</code
        ><br />{{jsxref("Reflect.get()")}}
      </td>
      <td>
        <ul>
          <li>
            The value reported for a property must be the same as the value of
            the corresponding target object property if the target object
            property is a non-writable, non-configurable data property.
          </li>
          <li>
            The value reported for a property must be undefined if the
            corresponding target object property is non-configurable accessor
            property that has undefined as its [[Get]] attribute.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}
      </td>
      <td>
        Property assignment: <code>proxy[foo] = bar</code> and
        <code>proxy.foo = bar</code><br />Inherited property assignment:
        <code>Object.create(proxy)[foo] = bar</code
        ><br />{{jsxref("Reflect.set()")}}
      </td>
      <td>
        <ul>
          <li>
            Cannot change the value of a property to be different from the value
            of the corresponding target object property if the corresponding
            target object property is a non-writable, non-configurable data
            property.
          </li>
          <li>
            Cannot set the value of a property if the corresponding target
            object property is a non-configurable accessor property that has
            <code>undefined</code> as its [[Set]] attribute.
          </li>
          <li>
            In strict mode, a <code>false</code> return value from the
            <code>set</code> handler will throw a
            {{jsxref("TypeError")}} exception.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        Property deletion: <code>delete proxy[foo]</code> and
        <code>delete proxy.foo</code
        ><br />{{jsxref("Reflect.deleteProperty()")}}
      </td>
      <td>
        A property cannot be deleted, if it exists as a non-configurable own
        property of the target object.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/enumerate", "handler.enumerate()")}}
      </td>
      <td>
        Property enumeration / for...in:
        <code>for (var name in proxy) {...}</code
        ><br />{{jsxref("Reflect.enumerate()")}}
      </td>
      <td>The <code>enumerate</code> method must return an object.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
      <td>
        <ul>
          <li>The result of <code>ownKeys</code> is a List.</li>
          <li>
            The Type of each result List element is either
            {{jsxref("String")}} or {{jsxref("Symbol")}}.
          </li>
          <li>
            The result List must contain the keys of all non-configurable own
            properties of the target object.
          </li>
          <li>
            If the target object is not extensible, then the result List must
            contain all the keys of the own properties of the target object and
            no other values.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} and
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
      <td>
        There are no invariants for the <code>handler.apply</code> method.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
      <td>结果一定是一个<code>Object</code>。</td>
    </tr>
  </tbody>
</table>

## 撤销 `Proxy`

{{jsxref("Proxy.revocable()")}} 方法被用来创建可撤销的 `Proxy` 对象。这意味着 proxy 可以通过 `revoke` 函数来撤销，并且关闭代理。此后，代理上的任意的操作都会导致{{jsxref("TypeError")}}。

```js
var revocable = Proxy.revocable(
  {},
  {
    get: function (target, name) {
      return "[[" + name + "]]";
    },
  },
);
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError is thrown
proxy.foo = 1; // TypeError again
delete proxy.foo; // still TypeError
typeof proxy; // "object", typeof doesn't trigger any trap
```

## 反射

{{jsxref("Reflect")}} 是一个内置对象，它提供了可拦截 JavaScript 操作的方法。该方法和{{jsxref("Global_Objects/Proxy/handler","代理句柄")}}类似，但 `Reflect` 方法并不是一个函数对象。

`Reflect` 有助于将默认操作从处理程序转发到目标。

以 {{jsxref("Reflect.has()")}} 为例，你可以将 [`in` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)作为函数：

```js
Reflect.has(Object, "assign"); // true
```

### 更好的 `apply` 函数

在 ES5 中，我们通常使用 {{jsxref("Function.prototype.apply()")}} 方法调用一个具有给定 `this` 值和 `arguments` 数组（或[类数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）的函数。

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

使用 {{jsxref("Reflect.apply")}}，这变得不那么冗长和容易理解：

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### 检查属性定义是否成功

使用 {{jsxref("Object.defineProperty")}}，如果成功返回一个对象，否则抛出一个 {{jsxref("TypeError")}}，你将使用 {{jsxref("Statements/try...catch","try...catch")}} 块来捕获定义属性时发生的任何错误。因为 {{jsxref("Reflect.defineProperty")}} 返回一个布尔值表示的成功状态，你可以在这里使用 {{jsxref("Statements/if...else","if...else")}} 块：

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

{{Previous("Web/JavaScript/Guide/Iterators_and_generators")}}
