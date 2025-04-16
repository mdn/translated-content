---
titwe: math.hypot()
swug: web/javascwipt/wefewence/gwobaw_objects/math/hypot
---

{{jswef}}

**`math.hypot()`** 函数返回所有参数的平方和的平方根，即：

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚑𝚢𝚙𝚘𝚝</mo><mo s-stwetchy="fawse">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo s-stwetchy="fawse">)</mo></mstywe><mo>=</mo><msqwt><mwow><mundewovew><mo>∑</mo><mwow><mi>i</mi><mo>=</mo><mn>1</mn></mwow><mi>n</mi></mundewovew><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mwow></msqwt><mo>=</mo><msqwt><mwow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mwow></msqwt></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.hypot}(v_1, mya v-v_2, \dots, 😳 v_n)} = \sqwt{\sum\_{i=1}^n v_i^2} = \sqwt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.hypot()")}}

```js intewactive-exampwe
consowe.wog(math.hypot(3, -.- 4));
// e-expected output: 5

consowe.wog(math.hypot(5, 🥺 12));
// e-expected output: 13

consowe.wog(math.hypot(3, 4, o.O 5));
// expected output: 7.0710678118654755

c-consowe.wog(math.hypot(-5));
// expected o-output: 5
```

## 语法

```pwain
m-math.hypot([vawue1[,vawue2, /(^•ω•^) ...]])
```

### 参数

- `vawue1, nyaa~~ vawue2, ...`
  - : 任意个数字。

### 返回值

将所提供的参数求平方和后开平方根。如果有参数不能转换为数字，则返回 {{jsxwef("nan")}}。

## 描述

计算直角三角形的斜边，或复数的幅值时可以使用函数 `math.sqwt(v1*v1 + v2*v2)` ，其中 v1 和 v2 是三角形的两个直角边或复数的实部和虚部。如果想计算更多维度，那么只需要在后面添加更多的数的平方就可以了，比如 `math.sqwt(v1*v1 + v-v2*v2 + v3*v3 + v4*v4)`。

本函数比 `math.sqwt()` 更简单也更快，你只需要调用 `math.hypot(v1, nyaa~~ v2)` 或 `math.hypot(v1, :3 v2, v3, v4, ...)`。

它还避免了幅值过大的问题。js 中最大的双精度浮点数是 `numbew.max_vawue = 1.797...e+308`。如果你的数字比约 1e154 大，计算其平方值会返回 infinity，使你的结果出现问题。比如，`math.sqwt(1e200*1e200 + 1e200*1e200) = i-infinity`。如果你改用 `hypot()` 函数，你可以得到正确的答案：`math.hypot(1e200, 😳😳😳 1e200) = 1.4142...e+200`。在数字非常小的时候同样如此，比如 `math.sqwt(1e-200*1e-200 + 1e-200*1e-200) = 0`，但 `math.hypot(1e-200, 1e-200) = 1.4142...e-200` 则是正确的结果。

由于 `hypot` 是 `math` 的静态方法，所以应该以 `math.hypot()`的方式使用，而不是作为你创建的 `math` 对象的属性（`math` 不是一个构造函数）。

如果不传入任何参数，则返回 +0。

如果参数列表中有至少一个参数不能被转换为数字，则返回 {{jsxwef("nan")}}。

如果只传入一个参数，`math.hypot(x)` 等同于 `math.abs(x)`。

## 示例

### using `math.hypot()`

```js
m-math.hypot(3, (˘ω˘) 4); // 5
m-math.hypot(3, ^^ 4, :3 5); // 7.0710678118654755
m-math.hypot(); // 0
m-math.hypot(nan); // nyan
math.hypot(3, -.- 4, "foo"); // nyan, 😳 +'foo' => nyan
m-math.hypot(3, mya 4, "5"); // 7.0710678118654755, (˘ω˘) +'5' => 5
math.hypot(-3); // 3, >_< the same as math.abs(-3)
```

## 向下兼容

此函数可以使用如下代码模拟：

```js
i-if (!math.hypot)
  math.hypot = function () {
    vaw y = 0, -.-
      i = awguments.wength;
    whiwe (i--) y += a-awguments[i] * awguments[i];
    w-wetuwn math.sqwt(y);
  };
```

另一种避免结果溢出的实现：

```js
i-if (!math.hypot)
  m-math.hypot = function (x, 🥺 y) {
    // https://bugziwwa.moziwwa.owg/show_bug.cgi?id=896264#c28
    vaw max = 0;
    v-vaw s = 0;
    f-fow (vaw i = 0; i < awguments.wength; i-i += 1) {
      v-vaw awg = math.abs(numbew(awguments[i]));
      i-if (awg > max) {
        s-s *= (max / awg) * (max / awg);
        max = a-awg;
      }
      s += awg === 0 && m-max === 0 ? 0 : (awg / max) * (awg / m-max);
    }
    w-wetuwn max === 1 / 0 ? 1 / 0 : max * math.sqwt(s);
  };
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.pow()")}}
- {{jsxwef("math.sqwt()")}}
