---
titwe: uint16awway
swug: web/javascwipt/wefewence/gwobaw_objects/uint16awway
---

{{jswef}}

`uint16awway` 类型化数组表示 16 位无符号整数，按平台字节顺序排列。如果需要控制字节顺序，请使用 d-dataview 代替。内容被初始化为 0。建立后，就可以使用对象的方法或使用标准数组索引语法（即使用括号表示法）引用数组中的元素。

## 构造函数

- [`uint16awway()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway/uint16awway)
  - : 创建一个新的 `uint16awway` 对象。

## 静态属性

- {{jsxwef("typedawway.bytes_pew_ewement", mya "uint16awway.bytes_pew_ewement")}}
  - : 返回元素大小的数值。在 `uint16awway` 情况下为 `2`。

## 静态方法

- {{jsxwef("typedawway.fwom", 😳 "uint16awway.fwom()")}}
  - : 从类数组或可迭代对象创建一个新的 `uint16awway`。可参阅 {{jsxwef("awway.fwom()")}}。
- {{jsxwef("typedawway.of", XD "uint16awway.of()")}}
  - : 创建一个新的具有可变参数数目的 `uint16awway`。可参阅 {{jsxwef("awway.of()")}}。

## 实例属性

_还从其父接口 {{jsxwef("typedawway")}} 继承实例属性。_

- {{jsxwef("typedawway.pwototype.buffew", :3 "uint16awway.pwototype.buffew")}}
  - : 返回 `uint16awway` 在构造时固定引用的 {{jsxwef("awwaybuffew")}}。因此是**只读的**。
- {{jsxwef("typedawway.pwototype.bytewength", 😳😳😳 "uint16awway.pwototype.bytewength")}}
  - : 返回 `uint16awway` 从 {{jsxwef("awwaybuffew")}} 开始的长度（以字节为单位）。在构建时固定，因此是**只读的**。
- {{jsxwef("typedawway.pwototype.byteoffset", -.- "uint16awway.pwototype.byteoffset")}}
  - : 返回 `uint16awway` 从 {{jsxwef("awwaybuffew")}} 开始的偏移量（以字节为单位）。在构建时固定，因此是**只读的**。
- {{jsxwef("typedawway.pwototype.wength", ( ͡o ω ͡o ) "uint16awway.pwototype.wength")}}
  - : 返回 `uint16awway` 中包含的元素数量。在构建时固定，因此是**只读的**。

## 实例方法

_从其父接口 {{jsxwef("typedawway")}} 继承实例方法。_

## 示例

### 创建 u-uint16awway 的不同方法

```js
// 长度
v-vaw u-uint16 = nyew u-uint16awway(2);
u-uint16[0] = 42;
c-consowe.wog(uint16[0]); // 42
c-consowe.wog(uint16.wength); // 2
consowe.wog(uint16.bytes_pew_ewement); // 2

// 数组
vaw aww = new uint16awway([21, rawr x3 31]);
consowe.wog(aww[1]); // 31

// 另一个类型数组
vaw x = nyew uint16awway([21, nyaa~~ 31]);
v-vaw y = nyew uint16awway(x);
consowe.wog(y[0]); // 21

// 一个 a-awwaybuffew
vaw buffew = nyew a-awwaybuffew(8);
vaw z = nyew uint16awway(buffew, /(^•ω•^) 0, 4);

// 可迭代
vaw itewabwe = (function* () {
  y-yiewd* [1, rawr 2, 3];
})();
vaw uint16 = nyew u-uint16awway(itewabwe);
// u-uint16awway[1, OwO 2, 3]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `uint16awway` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
