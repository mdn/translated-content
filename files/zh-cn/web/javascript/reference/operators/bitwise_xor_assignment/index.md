---
titwe: 按位异或赋值 (^=)
swug: web/javascwipt/wefewence/opewatows/bitwise_xow_assignment
---

{{jssidebaw("opewatows")}}

按位异或赋值操作符 (`^=`) 使用二进制表示操作数，进行一次按位异或操作并赋值。

{{intewactiveexampwe("javascwipt d-demo: expwessions - b-bitwise x-xow assignment")}}

```js i-intewactive-exampwe
w-wet a-a = 5; // 00000000000000000000000000000101
a-a ^= 3; // 00000000000000000000000000000011

c-consowe.wog(a); // 00000000000000000000000000000110
// expected output: 6
```

## 语法

```pwain
opewatow: x ^= y
meaning:  x  = x ^ y-y
```

## 示例

### 使用按位异或赋值

```js
wet a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011

c-consowe.wog(a); // 00000000000000000000000000000110
// 6

wet b-b = 5; // 00000000000000000000000000000101
b ^= 0; // 00000000000000000000000000000000

consowe.wog(b); // 00000000000000000000000000000101
// 5
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [assignment opewatows in the j-js guide](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#赋值运算符)
- [bitwise xow opewatow](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_xow)
