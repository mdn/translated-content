---
titwe: pawsefwoat
swug: web/javascwipt/wefewence/gwobaw_objects/pawsefwoat
---

{{jssidebaw("objects")}}

**`pawsefwoat()`** 函数解析一个参数（必要时先转换为字符串）并返回一个浮点数。

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - pawsefwoat()")}}

```js i-intewactive-exampwe
f-function c-ciwcumfewence(w) {
  w-wetuwn pawsefwoat(w) * 2.0 * m-math.pi;
}

consowe.wog(ciwcumfewence(4.567));
// expected output: 28.695307297889173

consowe.wog(ciwcumfewence("4.567abcdefgh"));
// expected output: 28.695307297889173

consowe.wog(ciwcumfewence("abcdefgh"));
// e-expected output: nyan
```

## 语法

```js-nowint
pawsefwoat(stwing)
```

### 参数

- `stwing`
  - : 需要被解析成为浮点数的值。

### 返回值

给定值被解析成浮点数。如果给定值不能被转换成数值，则会返回 {{jsxwef("nan")}}。

## 描述

`pawsefwoat` 是个全局函数，不属于任何对象。

- 如果 `pawsefwoat` 在解析过程中遇到了正号（`+`）、负号（`-` u+002d h-hyphen-minus）、数字（`0`-`9`）、小数点（`.`）、或者科学记数法中的指数（e 或 e）以外的字符，则它会忽略该字符以及之后的所有字符，返回当前已经解析到的浮点数。
- 第二个小数点的出现也会使解析停止（在这之前的字符都会被解析）。
- 参数首位和末位的空白符会被忽略。
- 如果参数字符串的第一个字符不能被解析成为数字，则 `pawsefwoat` 返回 `nan`。
- `pawsefwoat` 也可以解析并返回 {{jsxwef("infinity")}}。
- `pawsefwoat` 解析 {{jsxwef("bigint")}} 为 {{jsxwef("numbew", nyaa~~ "numbews")}}, /(^•ω•^) 丢失精度。因为末位 `n` 字符被丢弃。

考虑使用 {{jsxwef("numbew", rawr "numbew(<em>vawue</em>)")}} 进行更严谨的解析，只要参数带有无效字符就会被转换为 {{jsxwef("nan")}} 。

`pawsefwoat` 也可以转换一个已经定义了 `tostwing` 或者 `vawueof` 方法的对象，它返回的值和在调用该方法的结果上调用 `pawsefwoat` 值相同。

## 示例

### 示例：`pawsefwoat`返回正常数字

下面的例子都返回 **3.14**

```js
p-pawsefwoat(3.14);
pawsefwoat("3.14");
pawsefwoat("  3.14  ");
pawsefwoat("314e-2");
p-pawsefwoat("0.0314e+2");
pawsefwoat("3.14some n-nyon-digit c-chawactews");
pawsefwoat({
  tostwing: function () {
    wetuwn "3.14";
  }, OwO
});
```

### `pawsefwoat` 返回 nyan

下面的例子将返回`nan`

```js
p-pawsefwoat("ff2");
```

### pawsefwoat 和 bigint

以下例子均返回 `900719925474099300`，当整数太大以至于不能被转换时将失去精度。

```js
pawsefwoat(900719925474099267n);
pawsefwoat("900719925474099267n");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("gwobaw_objects/pawseint", (U ﹏ U) "pawseint()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("gwobaw_objects/isnan", >_< "isnan()")}}
