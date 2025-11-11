---
title: console：count() 静态方法
slug: Web/API/console/count_static
---

{{APIRef("Console API")}}

**`console.count()`** 方法会记录调用 `count()` 的次数。

{{AvailableInWorkers}}

## 语法

```js-nolint
count()
count(label)
```

### 参数

- `label` {{Optional_Inline}}
  - : 一个字符串。如果给定，`count()` 会输出带有该标签的调用次数。如果未提供，调用 `count()` 的行为就像是带有“default”标签一样。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

例如，给定这样的代码：

```js
let user = "";

function greet() {
  console.count();
  return `hi ${user}`;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
```

控制台输出看起来像这样：

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
```

标签显示为 `default`，因为没有提供明确的标签。

如果我们将 `user` 变量作为第一次调用 `count()` 函数时的 `label` 参数传入，并将字符串”alice“作为第二次调用的参数：

```js
let user = "";

function greet() {
  console.count(user);
  return `hi ${user}`;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
```

我们会看到如下的输出：

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

我们现在仅根据 `label` 的值维护单独的计数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
