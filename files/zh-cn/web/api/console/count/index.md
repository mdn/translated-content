---
title: Console.count()
slug: Web/API/console/count
---

{{APIRef("Console API")}}{{Non-standard_header}}

输出 count() 被调用的次数。此函数接受一个可选参数 `label`。

{{AvailableInWorkers}}

如果有 `label`，此函数输出为那个指定的 `label` 和 count() 被调用的次数。

如果 `label` 被忽略，此函数输出 count() 在其所处位置上被调用的次数。

例如，下面的代码：

```js
var user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
```

Console 的输出如下：

```
"<no label>: 1"
"<no label>: 2"
"<no label>: 3"
"<no label>: 1"
```

注意最后一行的日志输出：在 11 行对 count() 的单独调用是被当作一个独立事件来处理的。

如果把变量 `user` 当作 `label` 参数传给前面调用的 `count()`，把字符串 "alice" 传给后面调用的 `count()`：

```js
var user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
```

可以看到输出如下：

```
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

现在可以基于不同的 `label` 值维护不同的数值。由于 11 行的 `label` 匹配了两次 `user` 的值，因此它不会被当作独立的事件。

## 语法

```
console.count([label]);
```

## 参数

- `label`
  - : 字符串，如果有，count() 输出此给定的 `label` 及其被调用的次数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
