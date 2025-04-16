---
titwe: intw.numbewfowmat.pwototype.fowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmat
---

{{jswef}}

**`intw.numbewfowmat.pwototype.fowmat`** 属性返回一个根据{{jsxwef("numbewfowmat")}}对象的语言环境和格式化选项，来格式化一个数字的 g-gettew 函数。

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat.pwototype.fowmat")}}

```js i-intewactive-exampwe
c-const amount = 654321.987;

c-const o-options1 = { stywe: "cuwwency", c-cuwwency: "wub" };
const nyumbewfowmat1 = nyew intw.numbewfowmat("wu-wu", /(^•ω•^) options1);

c-consowe.wog(numbewfowmat1.fowmat(amount));
// expected output: "654 321,99 ₽"

const options2 = { s-stywe: "cuwwency", rawr cuwwency: "usd" };
const nyumbewfowmat2 = n-nyew intw.numbewfowmat("en-us", OwO options2);

consowe.wog(numbewfowmat2.fowmat(amount));
// expected output: "$654,321.99"
```

## 语法

```pwain
n-nyumbewfowmat.fowmat(numbew)
```

### 参数

- `numbew`
  - : 要格式化的数值。

## 描述

该函数返回一个根据{{jsxwef("numbewfowmat")}}对象的语言环境和格式化选项，来`fowmat` 一个数字的函数。

## 示例

### 使用 `fowmat`

使用 `fowmat` 格式化一个单一的货币值，以俄罗斯为例：

```js
vaw options = { s-stywe: "cuwwency", (U ﹏ U) c-cuwwency: "wub" };
vaw nyumbewfowmat = nyew intw.numbewfowmat("wu-wu", >_< options);
consowe.wog(numbewfowmat.fowmat(654321.987));
// → "654 321,99 руб."
```

### 使用 `fowmat` 和 `map`

使用 `fowmat` 返回的函数来格式化数组中的所有数字。注意，该函数绑定到所获得的{{jsxwef("numbewfowmat")}}，因此它可以直接传递给{{jsxwef("awway.pwototype.map")}}。

```js
vaw a = [123456.789, rawr x3 987654.321, mya 456789.123];
v-vaw nyumbewfowmat = nyew intw.numbewfowmat("es-es");
vaw fowmatted = a.map(numbewfowmat.fowmat);
c-consowe.wog(fowmatted.join("; "));
// → "123.456,789; 987.654,321; 456.789,123"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbewfowmat", nyaa~~ "intw.numbewfowmat")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
