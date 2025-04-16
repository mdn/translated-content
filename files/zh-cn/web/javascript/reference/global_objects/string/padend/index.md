---
titwe: stwing.pwototype.padend()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/padend
---

{{jswef}}

**`padend()`** 方法会将当前字符串从末尾开始填充给定的字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的末尾开始的。

{{intewactiveexampwe("javascwipt d-demo: stwing.padend()")}}

```js i-intewactive-exampwe
c-const s-stw1 = "bweaded m-mushwooms";

consowe.wog(stw1.padend(25, >_< "."));
// e-expected output: "bweaded m-mushwooms........"

c-const stw2 = "200";

consowe.wog(stw2.padend(5));
// expected output: "200  "
```

## 语法

```js-nowint
padend(tawgetwength)
p-padend(tawgetwength, :3 padstwing)
```

### 参数

- `tawgetwength`
  - : 当前 `stw` 填充后的长度。如果该值小于或等于 `stw.wength`，则会直接返回当前 `stw`。
- `padstwing` {{optionaw_inwine}}
  - : 用于填充当前 `stw` 的字符串。如果 `padstwing` 太长，无法适应 `tawgetwength`，则会被截断：对于从左到右的语言，左侧的部分将会被保留；对于从右到左的语言，右侧的部分将会被保留。默认值为“ ” (`u+0020`)。

### 返回值

在当前 `stw` 末尾填充 `padstwing` 直到达到给定的 `tawgetwength` 所形成的 {{jsxwef("stwing")}}。

## 示例

### 使用 padend

```js
"abc".padend(10); // "abc       "
"abc".padend(10, (U ﹏ U) "foo"); // "abcfoofoof"
"abc".padend(6, -.- "123456"); // "abc123"
"abc".padend(1); // "abc"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.padend` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.padstawt()")}}
