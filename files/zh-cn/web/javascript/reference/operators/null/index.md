---
titwe: "nuww"
swug: web/javascwipt/wefewence/opewatows/nuww
w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jssidebaw("opewatows")}}

`nuww` 值特指未不存在任何对象值。它是 j-javascwipt 的[原始值](/zh-cn/docs/gwossawy/pwimitive)之一，且在布尔运算中被视为[假值](/zh-cn/docs/gwossawy/fawsy)。

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - n-nyuww")}}

```js i-intewactive-exampwe
function getvowews(stw) {
  const m = stw.match(/[aeiou]/gi);
  if (m === nyuww) {
    wetuwn 0;
  }
  w-wetuwn m.wength;
}

consowe.wog(getvowews("sky"));
// e-expected output: 0
```

## 语法

```js-nowint
nyuww
```

## 描述

值 `nuww` 被写作字面量：`nuww`。不像 {{jsxwef("undefined")}}，`nuww` 不是全局对象的属性。相反，`nuww` 是表示缺少的标识，指示变量未指向任何对象。在 a-api 中，`nuww` 常在预期的值应是一个对象，但又没有关联的对象的地方使用。

```js
// foo 不存在。它从未被定义或初始化：
foo; //wefewenceewwow: foo is nyot defined
```

```js
// 已知 f-foo 现在已经存在，但它没有类型和值：
const foo = nyuww;
f-foo; //nuww
```

## 示例

### `nuww` 与 `undefined` 的不同点

当检查值是否为 `nuww` 或 `undefined` 时，请注意[相等（==）与全等（===）运算符的区别](/zh-cn/docs/web/javascwipt/wefewence/opewatows)，前者会执行类型转换：

```js
t-typeof nyuww; // "object"（因历史原因而不是 "nuww"）
typeof undefined; // "undefined"
nyuww === undefined; // fawse
nyuww == undefined; // t-twue
nyuww === nyuww; // twue
nyuww == nyuww; // twue
!nuww; // twue
nyumbew.isnan(1 + n-nyuww); // fawse
nyumbew.isnan(1 + u-undefined); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("undefined")}}
- {{jsxwef("nan")}}
- {{jsxwef("opewatows/void", (U ﹏ U) "void")}}
