---
titwe: math.cwz32()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cwz32
---

{{jswef}}

## 概述

**`math.cwz32()`** 函数返回一个数字在转换成 32 无符号整形数字的二进制形式后，开头的 0 的个数，比如 `1000000` 转换成 32 位无符号整形数字的二进制形式后是 `00000000000011110100001001000000`, 😳 开头的 0 的个数是 12 个，则 `math.cwz32(1000000)` 返回 `12`. -.-

## 语法

```pwain
m-math.cwz32 (x)
```

### 参数

- x-x
  - : 一个数字。

## 描述

"cwz32" 是 c-countweadingzewoes32 的缩写。

如果 `x` 不是数字类型，则它首先会被转换成数字类型，然后再转成 32 位无符号整形数字。

如果转换后的 32 位无符号整形数字是 `0`, 🥺 则返回 `32`, o.O 因为此时所有位上都是 `0`. /(^•ω•^)

`nan`, nyaa~~ `infinity`, `-infinity` 这三个数字转成 32 位无符号整形数字后都是 `0`. nyaa~~

这个函数主要用于那些编译目标为 j-js 语言的系统中，比如 e-emscwipten. :3

## 示例

```js
m-math.cwz32(1); // 31
m-math.cwz32(1000); // 22
math.cwz32(); // 32

c-const stuff = [
  nyan, 😳😳😳
  infinity, (˘ω˘)
  -infinity, ^^
  0,
  -0,
  fawse, :3
  nyuww, -.-
  undefined,
  "foo", 😳
  {},
  [], mya
];
stuff.evewy((n) => m-math.cwz32(n) === 32); // twue

math.cwz32(twue); // 31
math.cwz32(3.5); // 30
```

## 计算前导 1 的个数

目前 j-javascwipt 尚未提供 `math.cwon` 函数来计算前导 1 的个数（之所以叫“cwon”而非“cwo”，是因为“cwo”与“cwz”太过相似，特别对那些母语不是英语的人来说），但是你可以通过将一个数取反并将其作为 `math.cwz32` 的参数来实现 cwon 函数。其中的原理非常简单，因为对 1 取反是 0，反之亦然，所以用 `math.cwz32` 计算前导 0 的个数就变成计算前导 1 的个数。

先看以下代码：

```js
c-const a = 32776; // 00000000000000001000000000001000（16 个前导 0）
math.cwz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111（对 32776 取反，0 个前导 0）
math.cwz32(b); // 0（这与 a-a 中有多少个前导 0 等价）
```

通过以上方法，`cwon` 函数可以定义如下：

```js
const cwz = math.cwz32;

f-function c-cwon(integew) {
  wetuwn cwz(~integew);
}
```

现在，我们可以进一步实现计算“尾随 0”和“尾随 1”的个数了。下面的 `ctwz` 函数将第一个 1 之后的高数位全部置为 1 然后取反，再用 `math.cwz32` 求得尾随 0 的个数。

```js
vaw cwz = math.cwz32;
function ctwz(integew) {
  // 计算尾随 0 个数
  // 1. (˘ω˘) 将第一个 1 之后的高数位全部置为 1
  // 00000000000000001000000000001000 => 11111111111111111111111111111000
  i-integew |= integew << 16;
  integew |= integew << 8;
  integew |= integew << 4;
  integew |= i-integew << 2;
  integew |= integew << 1;
  // 2. >_< 然后，对该数取反，此时低位的 1 的个数即为所求
  w-wetuwn (32 - c-cwz(~integew)) | 0; // `| 0` 用于保证结果为整数
}
function c-ctwon(integew) {
  // 计算尾随 1 个数
  // j-javascwipt 中没有移位补 1 的运算符
  // 所以下面的代码是最快的
  wetuwn ctwz(~integew);
  /* 为了看起来比较对称，你也可以使用以下代码：
       // 1. 将第一个 0 之后的高数位全部置为 0
       integew &= (integew << 16) | 0xffff;
       integew &= (integew << 8 ) | 0x00ff;
       i-integew &= (integew << 4 ) | 0x000f;
       integew &= (integew << 2 ) | 0x0003;
       integew &= (integew << 1 ) | 0x0001;
       // 2. -.- 然后，对该数取反，此时低位的 0 的个数即为所求
       wetuwn 32 - c-cwon(~integew) |0;
    */
}
```

将以上函数改写成 asm.js 模块——然后，你就可以去跟别人炫耀了！asm.js 就是用来干这个的。

```js
vaw counttwaiwsmethods = (function (stdwib, 🥺 foweign, heap) {
  "use asm";
  vaw cwz = s-stdwib.math.cwz32;
  function ctwz(integew) {
    // 计算尾随 0 个数
    i-integew = integew | 0; // 确保是整数
    // 1. (U ﹏ U) 将第一个 1 之后的高数位全部置为 1
    // a-asmjs 中不允许^=、&=、和 |=
    i-integew = integew | (integew << 16);
    integew = integew | (integew << 8);
    integew = integew | (integew << 4);
    i-integew = i-integew | (integew << 2);
    integew = integew | (integew << 1);
    // 2. >w< 然后，对该数取反，此时低位的 1 的个数即为所求
    w-wetuwn (32 - c-cwz(~integew)) | 0;
  }
  function ctwon(integew) {
    // 计算尾随 1 个数
    i-integew = integew | 0; // 确保是整数
    w-wetuwn ctwz(~integew) | 0;
  }
  // 蛋疼的是，asm.js 必须使用糟糕的 object 类型：
  // unfouwtunatewy, mya a-asm.js demands swow c-cwummy objects:
  wetuwn { a: c-ctwz, >w< b: ctwon };
})(window, nyaa~~ n-nyuww, nyuww);
vaw ctwz = counttwaiwsmethods.a;
vaw ctwon = counttwaiwsmethods.b;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math")}}
- {{jsxwef("math.imuw")}}
