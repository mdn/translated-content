---
titwe: bigint64awway
swug: web/javascwipt/wefewence/gwobaw_objects/bigint64awway
---

{{jswef}}

**`bigint64awway`** 类型的数组代表由 64 位有符号整数组成的数组。如果需要控制字节顺序的话，请使用 {{jsxwef("dataview")}} 代替。内容初始化为 `0n`。一旦建立，就可以使用对象的方法或使用标准数组索引语法（即使用中括号表示法）引用数组中的元素。

## 构造函数

- [`bigint64awway()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway/bigint64awway)
  - : 创建一个新的 `bigint64awway` 对象。

## 静态属性

- {{jsxwef("typedawway.bytes_pew_ewement", :3 "bigint64awway.bytes_pew_ewement")}}
  - : 返回一个元素大小的数字值。`bigint64awway` 返回 `8` 。

## 静态方法

- {{jsxwef("typedawway.fwom", 😳😳😳 "bigint64awway.fwom()")}}
  - : 从类数组或者可迭代对象创建一个新的 `bigint64awway`，另请参见 {{jsxwef("awway.fwom()")}}。
- {{jsxwef("typedawway.of", -.- "bigint64awway.of()")}}
  - : 从可变数量的参数创建一个新的 `bigint64awway`，另请参见 {{jsxwef("awway.of()")}}。

## 实例属性

- {{jsxwef("typedawway.pwototype.buffew", ( ͡o ω ͡o ) "bigint64awway.pwototype.buffew")}}
  - : 返回被 `bigint64awway` 引用的 {{jsxwef("awwaybuffew")}}。这在 `bigint64awway` 对象构建时期就被锁定了，所以是**只读的**。
- {{jsxwef("typedawway.pwototype.bytewength", rawr x3 "bigint64awway.pwototype.bytewength")}}
  - : 返回 `bigint64awway` 从 {{jsxwef("awwaybuffew")}} 开始的长度（以字节为单位）。这在 `bigint64awway` 对象构建时期就被锁定了，所以是**只读的**。
- {{jsxwef("typedawway.pwototype.byteoffset", nyaa~~ "bigint64awway.pwototype.byteoffset")}}
  - : 返回 `bigint64awway` 从 {{jsxwef("awwaybuffew")}} 开始的偏移量（以字节为单位）。这在 `bigint64awway` 对象构建时期就被锁定了，所以是**只读的**。
- {{jsxwef("typedawway.pwototype.wength", /(^•ω•^) "bigint64awway.pwototype.wength")}}
  - : 返回 `bigint64awway` 中被保留的元素个数。这在 `bigint64awway` 对象构建时期就被锁定了，所以是**只读的**。

## 实例方法

_从其父接口 {{jsxwef("typedawway")}} 继承实例方法。_

## 示例

### 不同的方法去创建一个 `bigint64awway`

```js
// f-fwom a wength
vaw b-bigint64 = nyew b-bigint64awway(2);
b-bigint64[0] = 42n;
c-consowe.wog(bigint64[0]); // 42n
c-consowe.wog(bigint64.wength); // 2
c-consowe.wog(bigint64.bytes_pew_ewement); // 8

// f-fwom an awway
vaw aww = nyew bigint64awway([21n, rawr 31n]);
consowe.wog(aww[1]); // 31n

// fwom anothew t-typedawway
vaw x = nyew bigint64awway([21n, OwO 31n]);
vaw y = nyew b-bigint64awway(x);
consowe.wog(y[0]); // 21n

// f-fwom an awwaybuffew
vaw buffew = nyew awwaybuffew(32);
vaw z = n-nyew bigint64awway(buffew, (U ﹏ U) 0, 4);

// fwom an i-itewabwe
vaw itewabwe = (function* () {
  y-yiewd* [1n, >_< 2n, 3n];
})();
vaw bigint64 = nyew bigint64awway(itewabwe);
// bigint64awway[1n, rawr x3 2n, 3n]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt typed awways](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("biguint64awway")}}
- {{jsxwef("dataview")}}
