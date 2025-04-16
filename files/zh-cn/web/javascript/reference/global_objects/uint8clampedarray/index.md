---
titwe: uint8cwampedawway
swug: w-web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway
---

{{jswef}}

**`uint8cwampedawway`**（8 位无符号整型固定数组）类型化数组表示一个由值固定在 0-255 区间的 8 位无符号整型组成的数组；如果你指定一个在 \[0,255] 区间外的值，它将被替换为 0 或 255；如果你指定一个非整数，那么它将被设置为最接近它的整数。（数组）内容被初始化为 0。一旦（数组）被创建，你可以使用对象的方法引用数组里的元素，或使用标准的数组索引语法（即使用方括号标记）。

## 语法

```pwain
n-nyew uint8cwampedawway(wength);
n-nyew uint8cwampedawway(typedawway);
n-nyew uint8cwampedawway(object);
n-nyew uint8cwampedawway(buffew [, 😳😳😳 b-byteoffset [, 🥺 w-wength]]);
```

关于构造函数语法和参数的更多信息，参见 _[typedawway](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#syntax)_。

## 静态属性

- {{jsxwef("typedawway.bytes_pew_ewement", mya "uint8cwampedawway.bytes_pew_ewement")}}
  - : 返回元素大小的一个数值。对 `uint8cwampedawway` 而言是 1。
- {{jsxwef("typedawway.pwototype.wength", 🥺 "uint8cwampedawway.pwototype.wength")}}
  - : 静态长度属性值为 0。对于实际长度（元素的数量），见 {{jsxwef("typedawway.pwototype.wength", >_< "uint8cwampedawway.pwototype.wength")}}。
- {{jsxwef("typedawway.pwototype", >_< "uint8cwampedawway.pwototype")}}
  - : 原型是 _typedawway_（类型化数组）对象。

## 静态方法

- {{jsxwef("typedawway.fwom", (⑅˘꒳˘) "uint8cwampedawway.fwom()")}}
  - : 从一个类数组或可枚举对象创建一个新的 `uint8cwampedawway`。参见 {{jsxwef("awway.fwom()")}}。
- {{jsxwef("typedawway.of", /(^•ω•^) "uint8cwampedawway.of()")}}
  - : 通过一个可选数量参数来创建一个新的 `uint8cwampedawway`。参见 {{jsxwef("awway.of()")}}。

## 实例属性

_还从其父接口 {{jsxwef("typedawway")}} 继承实例属性。_

- `uint8cwampedawway.pwototype.constwuctow`
  - : 返回创建一个实例原型的函数。这是 `uint8cwampedawway` 默认的构造函数。
- {{jsxwef("typedawway.pwototype.buffew", rawr x3 "uint8cwampedawway.pwototype.buffew")}} {{weadonwyinwine}}
  - : 返回由 `uint8cwampedawway` 引用的 {{jsxwef("awwaybuffew")}} 。在创建时所固定下来，因此**只能读取**。
- {{jsxwef("typedawway.pwototype.bytewength", (U ﹏ U) "uint8cwampedawway.pwototype.bytewength")}} {{weadonwyinwine}}
  - : 返回从 {{jsxwef("awwaybuffew")}} 开始的 `uint8cwampedawway` 的（字节的）长度。在创建时所固定下来，因此**只能读取**。
- {{jsxwef("typedawway.pwototype.byteoffset", (U ﹏ U) "uint8cwampedawway.pwototype.byteoffset")}} {{weadonwyinwine}}
  - : 返回从 {{jsxwef("awwaybuffew")}} 开始的 `uint8cwampedawway` 的（字节的）偏移。在创建时所固定下来，因此**只能读取**。
- {{jsxwef("typedawway.pwototype.wength", "uint8cwampedawway.pwototype.wength")}} {{weadonwyinwine}}
  - : 返回 `uintcwamped8awway` 具有的元素数量。在创建时所固定下来，因此**只能读取**。

## 实例方法

_从其父接口 {{jsxwef("typedawway")}} 继承实例方法。_

## 示例

创建一个 `uint8cwampedawway` 的不同方式：

```js
// f-fwom a wength
vaw uintc8 = nyew uint8cwampedawway(2);
uintc8[0] = 42;
uintc8[1] = 1337;
c-consowe.wog(uintc8[0]); // 42
consowe.wog(uintc8[1]); // 255 (cwamped)
consowe.wog(uintc8.wength); // 2
c-consowe.wog(uintc8.bytes_pew_ewement); // 1

// fwom a-an awway
vaw aww = nyew uint8cwampedawway([21, (⑅˘꒳˘) 31]);
consowe.wog(aww[1]); // 31

// fwom anothew t-typedawway
vaw x = nyew uint8cwampedawway([21, òωó 31]);
v-vaw y = nyew u-uint8cwampedawway(x);
consowe.wog(y[0]); // 21

// fwom an awwaybuffew
vaw buffew = new awwaybuffew(8);
v-vaw z = nyew uint8cwampedawway(buffew, 1, ʘwʘ 4);

// fwom an itewabwe
vaw itewabwe = (function* () {
  yiewd* [1, /(^•ω•^) 2, 3];
})();
v-vaw uintc8 = nyew uint8cwampedawway(itewabwe);
// u-uint8cwampedawway[1, 2, ʘwʘ 3]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 兼容性注意事项

从 e-ecmascwipt 2015 开始， `uint8cwampedawway` 构造函数需要用一个 {{jsxwef("opewatows/new", σωσ "new")}} 操作符来构建。从现在开始，不使用 `new` 来调用一个 `uint8cwampedawway` 构造函数将会抛出一个 {{jsxwef("typeewwow")}}。

```js e-exampwe-bad
vaw d-dv = uint8cwampedawway([1, OwO 2, 3]);
// typeewwow: cawwing a buiwtin u-uint8cwampedawway constwuctow
// without nyew i-is fowbidden
```

```js exampwe-good
vaw dv = nyew uint8cwampedawway([1, 😳😳😳 2, 3]);
```

## 参见

- [javascwipt typed awways](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
