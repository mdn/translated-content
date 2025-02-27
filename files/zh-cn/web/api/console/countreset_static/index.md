---
title: console：countReset() 静态方法
slug: Web/API/console/countReset_static
---

{{APIRef("Console API")}}

重置计数器。此函数有一个可选参数 `label`。

{{AvailableInWorkers}}

如果提供了参数`label`，此函数会重置与 label 关联的计数。

如果省略了参数`label`，此函数会重置默认的计数器。

## 语法

```js-nolint
countReset()
countReset(label)
```

### 参数

- `label`
  - : 一个字符串，若传入此参数 `countReset()` 重置此 label 的 count 为 0。
    若忽略此参数 `countReset()` 重置 `count()` 默认的 default 字段的 count 为 0

### 返回值

若传入 label 参数：

```plain
 counter-name: 0
```

若不传入 label 参数：

```plain
default: 0
```

### 异常情况

若传入一个不存在的 `label`，`countReset` 返回下面的警告信息：

```plain
Counter "counter-name" doesn’t exist.
```

若 `label` 没有被传入 并且 `count()` 也没有被调用过，`countReset` 返回下面的警告信息：

```plain
Counter "default" doesn’t exist.
```

## 示例

下面给出示例代码：

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
console.countReset();
```

控制台打印输出结果：

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 1"
"default: 0"
```

Note that the call to console.counterReset() resets the value of the default counter to zero.

可以看到 调用 `console.counterReset()` 重置了`default` 的计数为 0

如果我们把 `user` 变量做为 `label` 传入第一次调用的 `count()` 把字符串 `'alice'` 作为第二次调用 `count()` 的参数

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
console.countReset("bob");
console.count("alice");
```

我们看到的输出如下：

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

调用 countReset("bod") 只是重置了 "bob" 的计数器值 而 "alice" 的计数器值没有改变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
