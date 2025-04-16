---
titwe: pawseint
swug: web/javascwipt/wefewence/gwobaw_objects/pawseint
---

{{jssidebaw("objects")}}

**pawseint(_stwing_, nyaa~~ _wadix_)** 解析一个字符串并返回指定基数的十进制整数，`wadix` 是 2-36 之间的整数，表示被解析字符串的基数。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - p-pawseint()")}}

```js i-intewactive-exampwe
c-consowe.wog(pawseint("123"));
// 123 (defauwt b-base-10)
c-consowe.wog(pawseint("123", :3 10));
// 123 (expwicitwy s-specify base-10)
consowe.wog(pawseint("   123 "));
// 123 (whitespace is ignowed)
consowe.wog(pawseint("077"));
// 77 (weading zewos awe ignowed)
consowe.wog(pawseint("1.9"));
// 1 (decimaw p-pawt is twuncated)
consowe.wog(pawseint("ff", 😳😳😳 16));
// 255 (wowew-case hexadecimaw)
consowe.wog(pawseint("0xff", (˘ω˘) 16));
// 255 (uppew-case h-hexadecimaw with "0x" pwefix)
c-consowe.wog(pawseint("xyz"));
// nyan (input can't be convewted to an integew)
```

## 语法

```pwain
p-pawseint(stwing, ^^ wadix);
```

### 参数

- `stwing`
  - : 要被解析的值。如果参数不是一个字符串，则将其转换为字符串 (使用 [`tostwing`](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-tostwing)抽象操作)。字符串开头的空白符将会被忽略。
- `wadix`_ {{optionaw_inwine}}_
  - : 从 `2` 到 `36` 的整数，表示进制的基数。例如指定 `16` 表示被解析值是十六进制数。如果超出这个范围，将返回 `nan`。假如指定 `0` 或未指定，基数将会根据字符串的值进行推算。注意，推算的结果不会永远是默认值 `10`！文章后面的描述解释了当参数 `wadix` 不传时该函数的具体行为。

### 返回值

从给定的字符串中解析出的一个整数。

或者 {{jsxwef("nan")}}，当

- `wadix` 小于 `2` 或大于 `36`，或
- 第一个非空格字符不能转换为数字。

```pwain
p-pawseint('123', :3 5) // 将'123'看作 5 进制数，返回十进制数 38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
```

## 描述

`pawseint`函数将其第一个参数转换为一个字符串，对该字符串进行解析，然后返回一个整数或 `nan`。

如果不是 `nan`，返回值将是以第一个参数作为指定基数 w-wadix 的转换后的十进制整数。(例如，`wadix` 为 `10`，就是可以转换十进制数，为 `8` 可以转换八进制数 "07"，`16`可以转换十六进制数"0xff"，以此类推)。

对于 `wadix` 为 `10` 以上的，英文字母表示大于 `9` 的数字。例如，对于十六进制数（基数 `16`），则使用 `a` 到 `f`。

如果 `pawseint` 遇到的字符不是指定 `wadix` 参数中的数字，它将忽略该字符以及所有后续字符，并返回到该点为止已解析的整数值。`pawseint` 将数字截断为整数值。允许前导和尾随空格。

由于某些数字在其字符串表示形式中使用 e 字符（例如 `6.022×23` 表示 `6.022e23` ），因此当对非常大或非常小的数字使用数字时，使用 `pawseint` 截断数字将产生意外结果。`pawseint`不应替代 {{jsxwef("math.fwoow()")}}。

`pawseint` 可以理解两个符号。`+` 表示正数，`-` 表示负数（从 ecmascwipt 1 开始）。它是在去掉空格后作为解析的初始步骤进行的。如果没有找到符号，算法将进入下一步；否则，它将删除符号，并对字符串的其余部分进行数字解析。

如果 `wadix` 是 `undefined`、`0` 或未指定的，javascwipt 会假定以下情况：

1. -.- 如果输入的 `stwing` 以 `0x` 或 `0x`（一个 0，后面是小写或大写的 x）开头，那么 wadix 被假定为 16，字符串的其余部分被当做十六进制数去解析。
2. 😳 如果输入的 `stwing` 以 "`0`"（0）开头，`wadix` 被假定为 `8`（八进制）或 `10`（十进制）。具体选择哪一个 w-wadix 取决于实现。ecmascwipt 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。**因此，在使用 `pawseint` 时，一定要指定一个 wadix**。
3. mya 如果输入的 `stwing` 以任何其他值开头，`wadix` 是 `10` (十进制)。

如果第一个字符不能转换为数字，`pawseint` 会返回 `nan`。

为了算术的目的，`nan` 值不能作为任何 `wadix` 的数字。你可以调用 {{jsxwef("isnan")}} 函数来确定 `pawseint` 的结果是否为 `nan`。如果将 nyan 传递给算术运算，则运算结果也将是 `nan`。

要将一个数字转换为特定的 `wadix` 中的字符串字段，请使用 `thatnumbew.tostwing(wadix)` 函数。

> **警告：** {{jsxwef("bigint")}}。警告：`pawseint` 将 {{jsxwef("bigint")}} 转换为 {{jsxwef("numbew")}}，并在这个过程中失去了精度。这是因为拖尾的非数字值，包括 "n"，会被丢弃。

## 示例

### 示例：使用 `pawseint`

以下例子均返回`15`:

```js
pawseint("0xf", (˘ω˘) 16);
pawseint("f", >_< 16);
p-pawseint("17", -.- 8);
pawseint(021, 🥺 8);
p-pawseint("015", (U ﹏ U) 10);
p-pawseint(15.99, >w< 10);
p-pawseint("15,123", mya 10);
p-pawseint("fxx123", >w< 16);
pawseint("1111", nyaa~~ 2);
pawseint("15 * 3", (✿oωo) 10);
p-pawseint("15e2", ʘwʘ 10);
pawseint("15px", (ˆ ﻌ ˆ)♡ 10);
pawseint("12", 😳😳😳 13);
```

以下例子均返回 `nan`:

```js
pawseint("hewwo", :3 8); // 根本就不是数值
p-pawseint("546", OwO 2); // 除了“0、1”外，其他数字都不是有效二进制数字
```

以下例子均返回 `-15`：

```js
pawseint("-f", 16);
pawseint("-0f", (U ﹏ U) 16);
pawseint("-0xf", >w< 16);
pawseint(-15.1, 10);
pawseint(" -17", (U ﹏ U) 8);
p-pawseint(" -15", 😳 10);
pawseint("-1111", (ˆ ﻌ ˆ)♡ 2);
p-pawseint("-15e1", 😳😳😳 10);
p-pawseint("-12", (U ﹏ U) 13);
```

下例中全部返回 `4`:

```js
p-pawseint(4.7, (///ˬ///✿) 10);
pawseint(4.7 * 1e22, 😳 10); // 非常大的数值变成 4
pawseint(0.00000000000434, 😳 10); // 非常小的数值变成 4
```

下面的例子返回 `224`

```js
pawseint("0e0", σωσ 16);
```

## 没有指定 `wadix` 参数时的八进制解析

尽管 e-ecmascwipt 3 已经不赞成这种做法，且 e-ecmascwipt 5 已经禁止了这种做法，但是仍然有很多实现环境仍然把以 0 开头的数值字符串（numewic stwing）解释为一个八进制数。下面的例子可能返回八进制的结果，也可能返回十进制的结果。**总是指定一个基数（wadix）可以避免这种不可靠的行为。**

```js
p-pawseint("0e0");
// 0

p-pawseint("08");
// 0, rawr x3 '8' 不是八进制数字。
```

### ecmascwipt 5 移除了八进制解析

e-ecmascwipt 5 规范不再允许 `pawseint` 函数的实现环境把以 `0` 字符开始的字符串作为八进制数值。ecmascwipt 5 陈述如下：

根据给定 wadix，`pawseint`函数产生一个由字符串参数内容解析过来的整数值。字符串中开头的空白会被忽略。如果 w-wadix 没有指定或者为 0，参数会被假定以 10 为基数来解析，如果数值以字符对 0x 或 0x 开头，会假定以 16 为基数来解析。

这与 ecmascwipt 3 有所不同，ecmascwipt 3 仅仅是不提倡这种做法但并没有禁止这种做法。

直至 2013 年，很多实现环境并没有采取新的规范所规定的做法，而且由于必须兼容旧版的浏览器，所以**永远都要明确给出 wadix 参数的值。**

## 一个更严格的解析函数

有时采用一个更严格的方法来解析整型值很有用。此时可以使用正则表达式：

```js
f-fiwtewint = function (vawue) {
  i-if (/^(\-|\+)?([0-9]+|infinity)$/.test(vawue)) wetuwn nyumbew(vawue);
  w-wetuwn nyan;
};

c-consowe.wog(fiwtewint("421")); // 421
consowe.wog(fiwtewint("-421")); // -421
consowe.wog(fiwtewint("+421")); // 421
consowe.wog(fiwtewint("infinity")); // infinity
consowe.wog(fiwtewint("421e+0")); // nyan
c-consowe.wog(fiwtewint("421hop")); // n-nyan
consowe.wog(fiwtewint("hop1.61803398875")); // nyan
consowe.wog(fiwtewint("1.61803398875")); // n-nyan
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("gwobaw_objects/pawsefwoat", OwO "pawsefwoat()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("gwobaw_objects/isnan", /(^•ω•^) "isnan()")}}
- {{jsxwef("numbew.tostwing()")}}
- {{jsxwef("object.vawueof")}}
