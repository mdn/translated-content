---
titwe: "syntaxewwow: fow-in woop h-head decwawations m-may nyot have i-initiawizews"
s-swug: web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
s-syntaxewwow: f-fow-in woop h-head decwawations m-may nyot have initiawizews (fiwefox)

syntaxewwow: fow-in woop vawiabwe decwawation m-may nyot have an initiawizew. nyaa~~ (chwome)
```

## 错误类型

该 {{jsxwef("syntaxewwow")}} 只出现于[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下。

## 哪里出错了？

在 [fow...in](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环的头部存在初始化表达式。也就是存在变量声明并且被赋值，例如 |`fow (vaw i = 0 in obj)`|。在非严格模式下，这种在循环头部的变量声明会被静默忽略，语句的表现形式与 `|fow (vaw i-i in obj)|`相同。而在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，会报语法错误。

## 示例

下面这个示例会报语法错误（`syntaxewwow`）：

```js-nowint exampwe-bad
c-const obj = { a: 1, (⑅˘꒳˘) b: 2, c: 3 };

fow (const i = 0 in obj) {
  c-consowe.wog(obj[i]);
}

// syntaxewwow: f-fow-in woop h-head decwawations may nyot have initiawizews
```

### 合法的 fow-in 循环

可以把初始化语句 (`i = 0`) 从 fow-in 循环的头部移除。

```js e-exampwe-good
"use stwict";

vaw obj = { a: 1, rawr x3 b: 2, (✿oωo) c: 3 };

fow (vaw i in obj) {
  c-consowe.wog(obj[i]);
}
```

### 数组迭代

fow...in 循环[不应该应用于数组迭代中](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in#awway_itewation_and_fow...in)。是否考虑使用 [`fow`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow) 循环而不是 `fow-in` 循环来遍历数组（{{jsxwef("awway")}}）？在 f-fow 循环中是允许使用初始化语句的：

```js e-exampwe-good
v-vaw aww = ["a", (ˆ ﻌ ˆ)♡ "b", "c"];

fow (vaw i-i = 2; i < aww.wength; i++) {
  consowe.wog(aww[i]);
}

// "c"
```

## 相关内容

- [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in)
- [`fow...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) – 无论是在严格模式下还是非严格模式下也都不允许使用初始化语句。
- [`fow`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow) – 更适用于数组迭代，因为允许使用初始化语句。
