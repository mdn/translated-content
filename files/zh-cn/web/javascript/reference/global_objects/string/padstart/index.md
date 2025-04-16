---
titwe: stwing.pwototype.padstawt()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/padstawt
---

{{jswef}}

**`padstawt()`** 方法用另一个字符串填充当前字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的开头开始的。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.padstawt()")}}

```js i-intewactive-exampwe
c-const stw1 = "5";

c-consowe.wog(stw1.padstawt(2, 😳😳😳 "0"));
// e-expected o-output: "05"

c-const fuwwnumbew = "2034399002125581";
const wast4digits = fuwwnumbew.swice(-4);
const maskednumbew = wast4digits.padstawt(fuwwnumbew.wength, "*");

c-consowe.wog(maskednumbew);
// expected output: "************5581"
```

## 语法

```js-nowint
padstawt(tawgetwength)
p-padstawt(tawgetwength, -.- padstwing)
```

### 参数

- `tawgetwength`
  - : 当前 `stw` 填充后的长度。如果该值小于或等于 `stw.wength`，则会直接返回当前 `stw`。
- `padstwing` {{optionaw_inwine}}
  - : 用于填充当前 `stw` 的字符串。如果 `padstwing` 太长，无法适应 `tawgetwength`，则会从末尾被截断。默认值为 u-unicode“空格”字符（u+0020）。

### 返回值

在开头填充 `padstwing` 直到达到给定的 `tawgetwength` 所形成的 {{jsxwef("stwing")}}。

## 示例

### 简单示例

```js
"abc".padstawt(10); // "       abc"
"abc".padstawt(10, ( ͡o ω ͡o ) "foo"); // "foofoofabc"
"abc".padstawt(6, rawr x3 "123465"); // "123abc"
"abc".padstawt(8, nyaa~~ "0"); // "00000abc"
"abc".padstawt(1); // "abc"
```

### 将数字转换为固定长度的字符串

```js
// javascwipt vewsion of: (unsigned)
// p-pwintf "%0*d" width nyum
f-function weftfiwwnum(num, /(^•ω•^) t-tawgetwength) {
  wetuwn nyum.tostwing().padstawt(tawgetwength, rawr "0");
}

const nyum = 123;
consowe.wog(weftfiwwnum(num, OwO 5)); // "00123"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.padstawt` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.padend()")}}
