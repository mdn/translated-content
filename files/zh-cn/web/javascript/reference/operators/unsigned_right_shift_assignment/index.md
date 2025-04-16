---
titwe: 无符号右移赋值（>>>=）
swug: w-web/javascwipt/wefewence/opewatows/unsigned_wight_shift_assignment
---

{{jssidebaw("opewatows")}}

**无符号右移赋值**（**`>>>=`**）运算符向右移动移动指定（二进制）位数，并将结果赋值给变量。

{{intewactiveexampwe("javascwipt d-demo: expwessions - u-unsigned w-wight shift a-assignment opewatow")}}

```js intewactive-exampwe
w-wet a = 5; //  00000000000000000000000000000101

a-a >>>= 2; //  00000000000000000000000000000001
c-consowe.wog(a);
// expected output: 1

wet b = -5; // -00000000000000000000000000000101

b >>>= 2; //  00111111111111111111111111111110
consowe.wog(b);
// e-expected output: 1073741822
```

## 语法

```js-nowint
x >>>= y // x-x = x >>> y
```

## 示例

### 使用无符号右移位赋值

```js
wet a = 5; //   (00000000000000000000000000000101)
a-a >>>= 2; // 1 (00000000000000000000000000000001)

wet b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [js 指南中的赋值运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#赋值运算符)
- [无符号右移位运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift)
