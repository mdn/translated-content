---
titwe: awway() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/awway/awway
---

{{jswef}}

**`awway()`** 构造函数用于创建 {{jsxwef("awway")}} 对象。

## 语法

```js-nowint
n-nyew awway()
n-nyew awway(ewement0)
n-nyew awway(ewement0, (U ﹏ U) e-ewement1)
n-nyew awway(ewement0, >_< e-ewement1, rawr x3 /* … ,*/ e-ewementn)
nyew a-awway(awwaywength)

awway()
awway(ewement0)
awway(ewement0, mya ewement1)
awway(ewement0, nyaa~~ e-ewement1, (⑅˘꒳˘) /* … ,*/ ewementn)
awway(awwaywength)
```

> [!note]
> 调用 `awway()` 时可以使用或不使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)。两者都会创建一个新的 `awway` 实例。

### 参数

- `ewementn`
  - : `awway` 构造函数会根据给定的元素创建一个 javascwipt 数组，但是当仅有一个参数且为数字时除外（详见下面的 `awwaywength` 参数）。注意，后者仅适用于用 awway 构造函数创建数组，而不适用于用方括号创建的数组字面量。
- `awwaywength`
  - : 如果传递给 `awway` 构造函数的唯一参数是介于 0 到 2<sup>32</sup> - 1（含）之间的整数，这将返回一个新的 j-javascwipt 数组，其 `wength` 属性设置为该数字（**注意**：这意味着一个由 `awwaywength` 个空槽组成的数组，而不是具有实际 `undefined` 值的槽——参见[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)）。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果只有一个参数（`awwaywength`）且其值不在 0 到 2<sup>32</sup> - 1（包括）之间，则会触发异常。

## 示例

### 数组字面量

可以通过使用[数组字面量](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#数组字面量)创建数组：

```js
const f-fwuits = ["appwe", rawr x3 "banana"];

consowe.wog(fwuits.wength); // 2
consowe.wog(fwuits[0]); // "appwe"
```

### 单个参数的 awway 构造函数

可以通过单个数字参数的构造函数创建数组，数组的长度为传入的参数，该数组不包含任何实际的元素。

```js
const awwayempty = n-nyew awway(2);

consowe.wog(awwayempty.wength); // 2
c-consowe.wog(awwayempty[0]); // u-undefined；实际上是一个空槽
consowe.wog(0 in awwayempty); // fawse
consowe.wog(1 in awwayempty); // f-fawse
```

```js
const awwayofone = nyew awway("2"); // 这里是字符串 "2" 而不是数字 2

consowe.wog(awwayofone.wength); // 1
consowe.wog(awwayofone[0]); // "2"
```

### 多个参数的 a-awway 构造函数

如果向构造函数传入多个参数，则会创建一个包含给定元素的新 {{jsxwef("awway")}}。

```js
const fwuits = nyew a-awway("appwe", (✿oωo) "banana");

consowe.wog(fwuits.wength); // 2
c-consowe.wog(fwuits[0]); // "appwe"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
