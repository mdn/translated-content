---
title: "ReferenceError: can't access lexical declaration`X' before initialization"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
---

{{jsSidebar("Errors")}}

## 消息提示

```plain
ReferenceError: assignment to undeclared variable "x" (Firefox)
```

## 错误类型

{{jsxref("ReferenceError")}}

## 哪里出错了？

词法变量在初始化之前被访问。该错误可以发生于任何语句块中，当使用 let 或 const 修饰的变量在初始化之前被访问的时候。

## 示例

### 非法情况

在这个例子中，变量 "foo" 在语句块中再次声明，导致未初始化。

```js example-bad
function test() {
  let foo = 33;
  if (true) {
    let foo = foo + 55; // ReferenceError: can't access lexical declaration `foo' before initialization
  }
}
test();
```

### 正确情况

在 if 语句块中修改变量 "foo" 的值，不应该在其中进行二次声明。

```js example-good
function test() {
  let foo = 33;
  if (true) {
    foo = foo + 55;
  }
}
test();
```

## 相关内容

- [let 的暂存死区及相关错误](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)
