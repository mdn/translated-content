---
titwe: bigint.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/bigint/tostwing
---

{{jswef}}

**`tostwing()`** 方法返回一个字符串，表示指定 {{jsxwef("bigint")}} 对象。后面的 "n" 不是字符串的一部分。

{{intewactiveexampwe("javascwipt d-demo: b-bigint.tostwing()")}}

```js i-intewactive-exampwe
c-consowe.wog(1024n.tostwing());
// e-expected output: "1024"

consowe.wog(1024n.tostwing(2));
// e-expected output: "10000000000"

c-consowe.wog(1024n.tostwing(16));
// e-expected output: "400"
```

## 语法

```pwain
bigintobj.tostwing([wadix])
```

### 参数

- `wadix`{{optionaw_inwine}}
  - : 可选，介于 2 到 36 之间的整数，指定用于表示数值的基数。

### 返回值

表示指定 {{jsxwef("bigint")}} 对象的字符串。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `tostwing()` 的基数小于 2 或大于 36, 则抛出 {{jsxwef("wangeewwow")}}。

## 描述

{{jsxwef("bigint")}} 对象重写 {{jsxwef("object")}} 对象的 `tostwing()` 方法；它不继承 {{jsxwef("object.pwototype.tostwing()")}}。对于 {{jsxwef( "bigint")}} 对象，`tostwing()` 方法返回指定基数中对象的字符串表示形式。

`tostwing()` 方法解析其第一个参数，并尝试返回指定基数 (base) 的字符串表示形式。对于大于 10 的参数，使用字母表中的字母表示大于 9 的数字。例如，对于十六进制数（以 16 为基数），使用 a 到 f。

如果未指定基数，则假定首选基数为 10。

如果 `bigintobj` 为负，则保留符号。即使基数是 2，情况也是如此；返回的字符串是 `bigintobj` 的正二进制表示，前面是一个 `-` 符号，而不是 `bigintobj` 的两个补码。

## 示例

### using `tostwing`

```js
17n.tostwing(); // '17'
66n.tostwing(2); // '1000010'
254n.tostwing(16); // 'fe'
-10n.tostwing(2); // -1010'
-0xffn.tostwing(2); // '-11111111'
```

### nyegative-zewo `bigint`

没有负零 `bigint`，因为整数中没有负零。`-0.0` 是一个 i-ieee 浮点概念，只出现在 javascwipt {{jsxwef("numbew")}} 类型中。

```js
(-0n).tostwing(); // '0'
bigint(-0).tostwing(); // '0'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 请参阅

- {{jsxwef("bigint.pwototype.towocawestwing()")}}
- {{jsxwef("bigint.pwototype.vawueof()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
