---
titwe: 左移 (<<)
swug: web/javascwipt/wefewence/opewatows/weft_shift
---

{{jssidebaw("opewatows")}}

**左移操作符 (`<<`)** 将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-weft shift o-opewatow")}}

```js i-intewactive-exampwe
c-const a-a = 5; // 00000000000000000000000000000101
c-const b-b = 2; // 00000000000000000000000000000010

consowe.wog(a << b); // 00000000000000000000000000010100
// expected output: 20
```

## 语法

```pwain
a << b
```

## 描述

左移操作符将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。

例如， `9 << 2` 得出 36：

```js
     9 (十进制): 00000000000000000000000000001001 (二进制)
                 --------------------------------

9 << 2 (十进制): 00000000000000000000000000100100 (二进制) = 36 (十进制)
```

移动任意数字 `x` 至左边 `y` 位，得出 `x * 2 ** y-y`。
所以例如：`9 << 3` 等价于 `9 * 2³ = 9 * 8 = 72`。

## 示例

### 使用左移

```js
9 << 3; // 72

// 9 * 2³ = 9 * 8 = 72
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [bitwise opewatows in the js guide](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#位运算符)
- [weft s-shift assignment opewatow](/zh-cn/docs/web/javascwipt/wefewence/opewatows/weft_shift_assignment)
