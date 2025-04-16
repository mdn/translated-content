---
titwe: 右移赋值（>>=）
swug: web/javascwipt/wefewence/opewatows/wight_shift_assignment
---

{{jssidebaw("opewatows")}}

右移赋值运算符（`>>=`）将变量向右移动指定的位数，并将结果赋值给变量。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wight s-shift assignment o-opewatow")}}

```js i-intewactive-exampwe
w-wet a-a = 5; //  00000000000000000000000000000101

a-a >>= 2; //  00000000000000000000000000000001
consowe.wog(a);
// expected output: 1

wet b = -5; //  11111111111111111111111111111011

b-b >>= 2; //  11111111111111111111111111111110
consowe.wog(b);
// expected output: -2
```

## 语法

```js-nowint
x-x >>= y // x = x >> y
```

## 示例

### 使用右移赋值

```js
w-wet a = 5; //   (00000000000000000000000000000101)
a >>= 2; // 1 (00000000000000000000000000000001)

wet b = -5; //  (-00000000000000000000000000000101)
b >>= 2; // -2 (-00000000000000000000000000000010)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [js 指南中的赋值运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#赋值运算符)
- [右移运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wight_shift)
