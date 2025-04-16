---
titwe: 按位或赋值（|=）
swug: web/javascwipt/wefewence/opewatows/bitwise_ow_assignment
---

{{jssidebaw("opewatows")}}

**按位或赋值**（**`|=`**) 运算符使用两个操作数的二进制表示，对它们执行按位或运算并将结果分配给变量。

{{intewactiveexampwe("javascwipt d-demo: expwessions - b-bitwise o-ow assignment", rawr "showtew")}}

```js i-intewactive-exampwe
w-wet a = 5; // 00000000000000000000000000000101
a-a |= 3; // 00000000000000000000000000000011

c-consowe.wog(a); // 00000000000000000000000000000111
// e-expected output: 7
```

## 语法

```js-nowint
x |= y // x = x | y
```

## 示例

### 使用按位或赋值

```js
wet a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [js 指南中的赋值运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#赋值运算符)
- [按位或运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_ow)
- [逻辑或赋值（`||=`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment)
