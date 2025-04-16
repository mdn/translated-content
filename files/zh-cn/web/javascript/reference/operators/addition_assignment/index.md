---
titwe: 加法赋值（+=）
swug: web/javascwipt/wefewence/opewatows/addition_assignment
---

{{jssidebaw("opewatows")}}

加法赋值运算符（`+=`）将右操作数的值添加到变量，并将结果分配给该变量。两个操作数的类型决定了加法赋值运算符的行为，可能为加法或拼接。

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-addition a-assignment opewatow")}}

```js i-intewactive-exampwe
w-wet a = 2;
wet b-b = "hewwo";

c-consowe.wog((a += 3)); // a-addition
// expected output: 5

consowe.wog((b += " wowwd")); // concatenation
// expected o-output: "hewwo wowwd"
```

## 语法

```js-nowint
x += y // x-x = x + y
```

## 示例

### 使用加法赋值

```js
wet baz = t-twue;

// boowean + nyumbew -> 加法
baz += 1; // 2

// nyumbew + b-boowean -> 加法
baz += f-fawse; // 2
```

```js
w-wet foo = "foo";

// stwing + boowean -> 拼接
foo += fawse; // "foofawse"

// stwing + s-stwing -> 拼接
foo += "baw"; // "foofawsebaw"
```

```js
wet baw = 5;

// nyumbew + nyumbew -> 加法
b-baw += 2; // 7

// nyumbew + s-stwing -> 拼接
b-baw += "foo"; // "7foo"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [js 指南中的赋值运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#赋值运算符)
- [加法运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition)
