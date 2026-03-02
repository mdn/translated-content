---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

**`Proxy`** 对象允许你为另一个对象创建代理，该代理能够拦截并重新定义该对象的基本操作。

## 描述

`Proxy` 对象允许你创建一个可替代原始对象的对象，但该对象可能重定义获取、设置和定义属性等基础 `Object` 操作。代理对象常用于记录属性访问、验证、格式化或清理输入等场景。

创建 `Proxy` 需提供两个参数：

- `target`：需要代理的原始对象
- `handler`：定义哪些操作将被拦截以及如何重定义拦截操作的对象

例如，此段代码为 `target` 对象创建了代理：

```js
const target = {
  message1: "大家",
  message2: "好",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

由于 handler 是空的，此代理的行为如同直接对源对象进行操作：

```js
console.log(proxy1.message1); // 大家
console.log(proxy1.message2); // 好
```

要自定义代理，我们在 handler 对象中定义函数：

```js
const target = {
  message1: "大家",
  message2: "好",
};

const handler2 = {
  get(target, prop, receiver) {
    return "你好世界";
  },
};

const proxy2 = new Proxy(target, handler2);
```

这里我们提供了一个 {{jsxref("Proxy/Proxy/get", "get()")}} 处理器的实现，它会拦截对目标对象属性访问的尝试。

处理器函数有时被称为*陷阱*，大概是因为它们会捕获对目标对象的调用。上文 `handler2` 中的陷阱重新定义了所有属性访问器：

```js
console.log(proxy2.message1); // 你好世界
console.log(proxy2.message2); // 你好世界
```

代理常与 {{jsxref("Reflect")}} 对象配合使用，该对象提供了一些与 `Proxy` 陷阱同名的方法。`Reflect` 方法通过调用对应的[对象内部方法](#对象内部方法)来实现反射语义。例如，若不希望重定义对象行为，可调用 `Reflect.get`：

```js
const target = {
  message1: "大家",
  message2: "好",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "你好世界";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // 大家
console.log(proxy3.message2); // 你好世界
```

`Reflect` 方法仍通过对象内部方法与对象交互——若在代理上调用该方法，它不会“解除代理化”。若在代理陷阱中使用 `Reflect` 方法，且该方法调用再次被陷阱拦截，则可能引发无限递归。

## 术语

以下术语用于描述代理的功能特性。

- [handler](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#处理器函数)
  - : 作为 `Proxy` 构造函数的第二个参数传递的对象。它包含定义代理行为的陷阱。
- 陷阱（trap）
  - : 定义对应[对象内部方法](#对象内部方法)行为的函数（类似于操作系统中的*陷阱*概念。）
- 目标（target）
  - : 代理虚拟化的对象。它通常作为代理的存储后端使用。关于对象不可扩展性或不可配置属性的不变性（保持不变的语义）将针对目标对象进行验证。
- {{Glossary("invariant", "不变量")}}
  - : 在实现自定义操作时保持不变的语义。如果陷阱实现违反了处理器的不变性，将抛出 {{jsxref("TypeError")}} 异常。

### 对象内部方法

[对象](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#对象)是属性的集合。然而，该语言并未提供任何机制来*直接*操作对象中存储的数据——相反，对象定义了一些内部方法来规定其交互方式。例如，当你读取 `obj.x` 时，你可能会期望发生以下情况：

- `x` 属性会沿着[原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)上行搜索，直至找到该属性。
- 若 `x` 是数据属性，则返回属性描述符的 `value` 属性。
- 若 `x` 是访问器属性，则调用获取器，并返回获取器的返回值。

这种过程在语言中并无特殊之处——仅仅是因为普通对象默认具有一个名为 `[[Get]]` 的内部方法，该方法即以这种行为方式定义。`obj.x` 属性访问语法只是调用了对象的 `[[Get]]` 方法，而对象会通过自身内部方法的实现来决定返回什么内容。

另一个例子是，[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)与普通对象不同，因为它们具有一个神奇的 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length) 属性——当修改该属性时，系统会自动为数组分配空槽位或移除元素。同样地，向数组添加元素会自动改变 `length` 属性。这是因为数组拥有 `[[DefineOwnProperty]]` 内部方法，该方法在写入整数索引时会更新 `length`，在写入 `length` 值时则更新数组内容。这类内部方法实现与普通对象不同的特殊对象被称为*特殊对象*。`Proxy` 使开发者能够全权定义自定义的特殊对象。

所有对象均具有以下内部方法：

| 内部方法                | 对应的陷阱                                                                       |
| ----------------------- | -------------------------------------------------------------------------------- |
| `[[GetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}                     |
| `[[SetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}                     |
| `[[IsExtensible]]`      | {{jsxref("Proxy/Proxy/isExtensible", "isExtensible()")}}                         |
| `[[PreventExtensions]]` | {{jsxref("Proxy/Proxy/preventExtensions", "preventExtensions()")}}               |
| `[[GetOwnProperty]]`    | {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "getOwnPropertyDescriptor()")}} |
| `[[DefineOwnProperty]]` | {{jsxref("Proxy/Proxy/defineProperty", "defineProperty()")}}                     |
| `[[HasProperty]]`       | {{jsxref("Proxy/Proxy/has", "has()")}}                                           |
| `[[Get]]`               | {{jsxref("Proxy/Proxy/get", "get()")}}                                           |
| `[[Set]]`               | {{jsxref("Proxy/Proxy/set", "set()")}}                                           |
| `[[Delete]]`            | {{jsxref("Proxy/Proxy/deleteProperty", "deleteProperty()")}}                     |
| `[[OwnPropertyKeys]]`   | {{jsxref("Proxy/Proxy/ownKeys", "ownKeys()")}}                                   |

函数对象还具有以下内部方法：

| 内部方法        | 对应的陷阱                                         |
| --------------- | -------------------------------------------------- |
| `[[Call]]`      | {{jsxref("Proxy/Proxy/apply", "apply()")}}         |
| `[[Construct]]` | {{jsxref("Proxy/Proxy/construct", "construct()")}} |

需要认识到，与对象的所有交互最终都归结为调用这些内部方法之一，且所有方法均可通过代理进行定制。这意味着语言本身几乎不保证任何行为（除某些关键不变量外）——一切皆由对象自身定义。当执行 [`delete obj.x`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 时，无法保证后续执行 [`"x" in obj`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 会返回 `false`——这取决于对象对 `[[Delete]]` 和 `[[HasProperty]]` 方法的具体实现。`delete obj.x` 操作可能向控制台输出日志、修改全局状态，甚至可能定义新属性而非删除原有属性，尽管在编写代码时应避免此类语义行为。

所有内部方法均由语言本身调用，无法在 JavaScript 代码中直接访问。{{jsxref("Reflect")}} 命名空间提供的方法除执行输入规范化/验证外，主要功能就是调用这些内部方法。在每个陷阱的页面中，我们列出了触发该陷阱的典型场景，但这些内部方法在大量场景中被调用。例如数组方法通过这些内部方法读写数组，因此诸如 [`push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 之类的方法也会触发 `get()` 和 `set()` 陷阱。

大多数内部方法的功能都很直观。唯一可能令人混淆的是 `[[Set]]` 和 `[[DefineOwnProperty]]`。对于普通对象，前者会调用 setter；后者则不会（且当不存在属性或属性为数据属性时，`[[Set]] `会内部调用`[[DefineOwnProperty]]`。）虽然你可能知道 `obj.x = 1` 语法使用 `[[Set]]`，而 {{jsxref("Object.defineProperty()")}} 使用 `[[DefineOwnProperty]]`，但其他内置方法和语法采用何种语义并不直观。例如，[类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields) 使用 `[[DefineOwnProperty]]` 语义，因此当派生类声明字段时，父类中定义的 setter 不会被调用。

## 构造函数

- {{jsxref("Proxy/Proxy", "Proxy()")}}
  - : 创建一个新的 `Proxy` 对象。

> [!NOTE]
> 不存在 `Proxy.prototype` 属性，故 `Proxy` 的实例没有特殊的属性或方法。

## 静态方法

- {{jsxref("Proxy.revocable()")}}
  - : 创建一个可撤销的 `Proxy` 对象。

## 示例

### 基本示例

在以下简单的例子中，当对象中不存在属性名时，默认返回值为 `37`。下面的代码以此展示了 {{jsxref("Proxy/Proxy/get", "get()")}} 处理器的使用场景。

```js
const handler = {
  get(obj, prop) {
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

请注意，虽然这种“无操作”对普通 JavaScript 对象有效，但对原生对象（如 DOM 元素、`Map` 对象或任何具有内部槽的对象）无效。更多信息请参阅[不转发私有字段](#不转发私有字段)。

### 不转发私有字段

代理仍是具有不同身份的另一个对象——它是在被封装对象与外部之间运作的*代理*。因此，代理无法直接访问原始对象的[私有元素](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)。

```js
class Secret {
  #secret;
  constructor(secret) {
    this.#secret = secret;
  }
  get secret() {
    return this.#secret.replace(/\d+/, "[已删除]");
  }
}

const secret = new Secret("123456");
console.log(secret.secret); // [已删除]
// 看起来像是无操作转发...
const proxy = new Proxy(secret, {});
console.log(proxy.secret); // TypeError: Cannot read private member #secret from an object whose class did not declare it
```

这是因为当代理的 `get` 陷阱被调用时，`this` 值是 `proxy` 而非原始的 `secret`，因此无法访问 `#secret`。要解决此问题，请将原始的 `secret` 作为 `this` 使用：

```js
const proxy = new Proxy(secret, {
  get(target, prop, receiver) {
    // 默认情况下，它看起来像 Reflect.get(target, prop, receiver)，
    // 其中 `this` 的值不同
    return target[prop];
  },
});
console.log(proxy.secret);
```

对于方法而言，这意味着你还需要将方法的 `this` 值重定向回原始对象：

```js
class Secret {
  #x = 1;
  x() {
    return this.#x;
  }
}

const secret = new Secret();
const proxy = new Proxy(secret, {
  get(target, prop, receiver) {
    const value = target[prop];
    if (value instanceof Function) {
      return function (...args) {
        return value.apply(this === receiver ? target : this, args);
      };
    }
    return value;
  },
});
console.log(proxy.x());
```

某些原生 JavaScript 对象具有名为[_内部槽_](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-internal-methods-and-internal-slots)的属性，这些属性无法从 JavaScript 代码访问。例如，`Map` 对象拥有名为 `[[MapData]]` 的内部槽，用于存储映射的键值对。因此无法简单地为映射创建转发代理：

```js
const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy
```

你必须使用上文所述的“`this` 恢复”代理来解决这个问题。

### 验证

通过 `Proxy`，你可以轻松地验证向一个对象的传值。下面的代码借此展示了 {{jsxref("Proxy/Proxy/set", "set()")}} 处理器的作用。

```js
const validator = {
  set(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("年龄不是整数");
      }
      if (value > 200) {
        throw new RangeError("年龄不合法");
      }
    }

    // 默认行为是存储该值
    obj[prop] = value;

    // 表示验证通过
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // 抛出异常
person.age = 300; // 抛出异常
```

### 操作 DOM 节点

在此示例中，我们使用 `Proxy` 来切换两个不同元素的属性：当为一个元素设置该属性时，另一个元素的属性会被取消设置。

我们创建一个名为 `view` 的对象，该对象作为具有 `selected` 属性的对象的代理。代理处理器定义了 {{jsxref("Proxy/Proxy/set", "set()")}} 处理器。

当我们将 HTML 元素赋值给 `view.selected` 时，该元素的 `'aria-selected'` 属性会被设置为 `true`。若随后将另一个元素赋值给 `view.selected`，则该元素的 `'aria-selected'` 属性会被设置为 `true`，而先前元素的 `'aria-selected'` 属性会自动设置为 `false`。

```js
const view = new Proxy(
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

      // 默认行为是存储该值
      obj[prop] = newval;

      // 表示操作成功
      return true;
    },
  },
);

const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");

// 选择 item1:
view.selected = item1;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: true

// 选择 item2 将取消选择 item1:
view.selected = item2;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: false

console.log(`item2: ${item2.getAttribute("aria-selected")}`);
// item2: true
```

### 值修正及附加属性

以下 `products` 代理会计算传值并根据需要转换为数组。这个代理对象同时支持一个叫做 `latestBrowser` 的附加属性，这个属性可以同时作为 getter 和 setter。

```js
const products = new Proxy(
  {
    browsers: ["Firefox", "Chrome"],
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

      // 表示操作成功
      return true;
    },
  },
);

console.log(products.browsers);
//  ['Firefox', 'Chrome']

products.browsers = "Safari";
// 如果不小心传入了一个字符串

console.log(products.browsers);
// ['Safari'] <- 也没问题，得到的依旧是一个数组

products.latestBrowser = "Edge";

console.log(products.browsers);
//  ['Safari', 'Edge']

console.log(products.latestBrowser);
//  'Edge'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Proxy 太棒了](https://youtu.be/sClk6aB_CPk)——Brendan Eich 在 JSConf 大会（2014 年）的演讲
