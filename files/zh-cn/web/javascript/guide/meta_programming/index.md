---
title: 元编程
slug: Web/JavaScript/Guide/Meta_programming
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}

{{jsxref("Proxy")}} 和 {{jsxref("Reflect")}} 对象允许你拦截并自定义基本语言操作（例如属性查找、赋值、枚举和函数调用等）。借助这两个对象，你可以在 JavaScript 进行元级别的编程。

## 代理

{{jsxref("Proxy")}} 对象可以拦截某些操作并实现自定义行为。

例如获取一个对象上的属性：

```js
let handler = {
  get(target, name) {
    return name in target ? target[name] : 42;
  },
};

let p = new Proxy({}, handler);
p.a = 1;

console.log(p.a, p.b); // 1, 42
```

`Proxy` 对象定义了一个 `target`（这里是一个空对象）和一个实现了 `get` *陷阱*的 `handler` 对象。这里，代理的对象在获取未定义的属性时不会返回 `undefined`，而是返回 `42`。

更多例子参见 {{jsxref("Proxy")}} 页面。

### 术语

在讨论代理的功能时会用到以下术语：

- {{jsxref("Proxy/Proxy", "handler")}}
  - : 包含陷阱的占位符对象（下译作“处理器”）。
- 陷阱
  - : 提供属性访问的方法（这类似于操作系统中*陷阱*的概念）。
- `target`
  - : 代理所虚拟化的对象（下译作“目标”）。它通常用作代理的存储后端。JavaScript 会验证与不可扩展性或不可配置属性相关的不变式。
- 不变式
  - : 实现自定义操作时保持不变的语义称为*不变式*。如果你破坏了处理器的不变式，则会引发 {{jsxref("TypeError")}} 异常。

## 处理器和陷阱

以下表格中总结了 `Proxy` 对象可用的陷阱。详细的解释和例子请看{{jsxref("Proxy/Proxy", "参考页", "", 1)}}。

<table class="standard-table">
  <thead>
    <tr>
      <th>处理器 / 陷阱</th>
      <th>拦截的操作</th>
      <th>不变式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
      <td>
        <ul>
          <li>
            <code>getPrototypeOf</code> 方法必须返回一个对象或 <code>null</code>。
          </li>
          <li>
            如果 <code><var>target</var></code> 不可扩展，<code
            >Object.getPrototypeOf(<var>proxy</var>)</code
            >
            必须返回和 <code>Object.getPrototypeOf(<var>target</var>)</code>
            一样的值。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
      <td>
        如果 <code><var>target</var></code> 不可扩展，参数 <code>prototype</code>
        必须与 <code>Object.getPrototypeOf(<var>target</var>)</code> 的值相同。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
      <td>
        <code>Object.isExtensible(<var>proxy</var>)</code> 必须返回和
        <code>Object.isExtensible(<var>target</var>)</code> 一样的值。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
      <td>
        如果 <code>Object.isExtensible(<var>proxy</var>)</code>
        值为 <code>false</code>，那么
        <code>Object.preventExtensions(<var>proxy</var>)</code> 只可能返回
        <code>true</code>。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        <ul>
          <li>
            <code>getOwnPropertyDescriptor</code> 必须返回对象或者
            <code>undefined</code>。
          </li>
          <li>
            如果存在一个对应于 <code><var>target</var></code>
            的属性是不可配置的自有属性，那么该属性不能被报告为不存在的。
          </li>
          <li>
            如果存在一个对应于 <code><var>target</var></code>
            的属性是自有属性，且该
            <code><var>target</var></code> 不可扩展，那么该属性不能被报告为不存在的。
          </li>
          <li>
            如果并不存在一个对应于 <code><var>target</var></code>
            的属性是自有属性，且该
            <code><var>target</var></code> 不可扩展，那么该属性不能被报告为存在的。
          </li>
          <li>
            如果并不存在一个对应于 <code><var>target</var></code>
            的属性是自有属性，或存在一个对应于 <code><var>target</var></code>
            的属性是可配置的自有属性，那么它不能被报告为不可配置的。
          </li>
          <li>
            <code>Object.getOwnPropertyDescriptor(<var>target</var>)</code>
            的结果可以通过 <code>Object.defineProperty</code> 应用到
            <code><var>target</var></code> 上，且不会抛出异常。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
      <td>
        <ul>
          <li>
            如果 <code><var>target</var></code> 不可扩展，那么就不能添加属性。
          </li>
          <li>
            如果并不存在一个对应于 <code><var>target</var></code>
            的属性是不可配置的自有属性，那么就不能添加（或修改）该属性为不可配置的。
          </li>
          <li>
            如果存在一个对应于 <code><var>target</var></code>
            的属性是可配置的，那么这个属性未必是不可配置的。
          </li>
          <li>
            如果存在一个对应于 <code><var>target</var></code> 的属性，那么
            <code
              >Object.defineProperty(<var>target</var>, <var>prop</var>,
              <var>descriptor</var>)</code
            >
            将不会抛出异常。
          </li>
          <li>
            在严格模式下，如果 <code>defineProperty</code> 处理器返回
            <code>false</code>，则会抛出 {{jsxref("TypeError")}} 异常。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/has", "handler.has()")}}
      </td>
      <td>
        <dl>
          <dt>属性查询</dt>
          <dd><code>foo in proxy</code></dd>
          <dt>继承属性查询</dt>
          <dd>
            <code>foo in Object.create(<var>proxy</var>)</code
            ><br />{{jsxref("Reflect.has()")}}
          </dd>
        </dl>
      </td>
      <td>
        <ul>
          <li>
            如果存在一个对应于 <code><var>target</var></code>
            的属性是不可配置的自有属性，那么该属性不能被报告为不存在的。
          </li>
          <li>
            如果存在一个对应于 <code><var>target</var></code>
            的属性是自有属性，且 <code><var>target</var></code>
            不可扩展，那么该属性不能被报告为不存在的。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/get", "handler.get()")}}
      </td>
      <td>
        <dl>
          <dt>属性访问</dt>
          <dd>
            <code><var>proxy</var>[foo]</code><br /><code
              ><var>proxy</var>.bar</code
            >
          </dd>
          <dt>继承属性访问</dt>
          <dd>
            <!-- markdownlint-disable MD011 -->
            <code>Object.create(<var>proxy</var>)[foo]</code
            ><br />{{jsxref("Reflect.get()")}}
          </dd>
        </dl>
      </td>
      <td>
        <ul>
          <li>
            如果对应于 <code><var>target</var></code>
            的属性是不可写且不可配置的数据属性，那么该属性值必须与其相同。
          </li>
          <li>
            如果对应于 <code><var>target</var></code>
            的属性是不可配置的访问器属性，且其 <code>[[Get]]</code>
            属性为 <code>undefined</code>，那么该属性值必须为
            <code>undefined</code>。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/set", "handler.set()")}}
      </td>
      <td>
        <dl>
          <dt>属性赋值</dt>
          <dd>
            <code><var>proxy</var>[foo] = bar</code><br /><code
              ><var>proxy</var>.foo = bar</code
            >
          </dd>
          <dt>继承属性赋值</dt>
          <dd>
            <code>Object.create(<var>proxy</var>)[foo] = bar</code
            ><br />{{jsxref("Reflect.set()")}}
          </dd>
            <!-- markdownlint-enable MD011 -->
        </dl>
      </td>
      <td>
        <ul>
          <li>
            如果对应于 <code><var>target</var></code>
            的属性是不可写且不可配置的数据属性，那么就不能修改该属性的值使其不同于
            <code><var>target</var></code> 上对应属性的值。
          </li>
          <li>
            如果对应于 <code><var>target</var></code>
            的属性是不可配置的访问器属性，且其 <code>[[Set]]</code>
            属性为 <code>undefined</code>，那么就不能设置该属性的值。
          </li>
          <li>
            在严格模式下，如果 <code>set</code> 处理器返回
            <code>false</code>，则会抛出 {{jsxref("TypeError")}} 异常。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        <dl>
          <dt>属性删除</dt>
          <dd>
            <code>delete <var>proxy</var>[foo]</code><br /><code
              >delete <var>proxy</var>.foo</code
            ><br />{{jsxref("Reflect.deleteProperty()")}}
          </dd>
        </dl>
      </td>
      <td>
        如果存在一个对应于 <code><var>target</var></code>
        的属性是不可配置的自有属性，那么该属性不能被删除。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
      <td>
        <ul>
          <li><code>ownKeys</code> 的返回值是一个数组。</li>
          <li>
            返回值中的每个元素类型为
            {{jsxref("String")}} 或 {{jsxref("Symbol")}}。
          </li>
          <li>
            返回值中必须包含 <code><var>target</var></code>
            的所有不可配置自有属性的键名。
          </li>
          <li>
            如果 <code><var>target</var></code> 不可扩展，那么返回值中必须有且仅有
            <code><var>target</var></code> 的所有自有属性的键名。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}}<br />{{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
      <td>
        不存在关于 <code><var>handler</var>.apply</code> 方法的不变式。
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
      <td>返回值必须是一个 <code>Object</code>。</td>
    </tr>
  </tbody>
</table>

## 可撤销的 `Proxy`

可以用 {{jsxref("Proxy.revocable()")}} 方法来创建可撤销的 `Proxy` 对象。这意味着可以通过 `revoke` 函数来撤销并关闭一个代理。

此后，对代理进行的任意的操作都会导致 {{jsxref("TypeError")}}。

```js
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked
proxy.foo = 1; // TypeError: Cannot perform 'set' on a proxy that has been revoked
delete proxy.foo; // TypeError: Cannot perform 'deleteProperty' on a proxy that has been revoked
console.log(typeof proxy); // "object", `typeof` 不会触发任何陷阱
```

## 反射

{{jsxref("Reflect")}} 是一个内置对象，它为可拦截的 JavaScript 操作提供了方法。这些方法与{{jsxref("Proxy/Proxy", "代理处理器所提供的方法", "", 1)}}类似。

`Reflect` 并不是一个函数对象。

`Reflect` 将默认操作从处理器转发到 `target`。

以 {{jsxref("Reflect.has()")}} 为例，你可以将 [`in` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)作为函数：

```js
Reflect.has(Object, "assign"); // true
```

### 更好的 `apply` 函数

在不借助 `Reflect` 的情况下，我们通常使用 {{jsxref("Function.prototype.apply()")}} 方法调用一个具有给定 `this` 值和 `arguments` 数组（或[类数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#使用类数组对象)）的函数。

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

借助 {{jsxref("Reflect.apply")}}，这些操作将变得更加简洁：

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

使用 {{jsxref("Object.defineProperty")}}，如果成功则返回一个对象，否则抛出一个 {{jsxref("TypeError")}}，你可使用 {{jsxref("Statements/try...catch", "try...catch")}} 块来捕获定义属性时发生的任何错误。因为 {{jsxref("Reflect.defineProperty")}} 返回一个布尔值表示的成功状态，你可以在这里使用 {{jsxref("Statements/if...else", "if...else")}} 块：

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}
