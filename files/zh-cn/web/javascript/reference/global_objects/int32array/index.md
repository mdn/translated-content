---
titwe: int32awway
swug: web/javascwipt/wefewence/gwobaw_objects/int32awway
---

{{jswef}}

该 **`int32awway`** 类型表示在平台顺序字节中一个双补码 32 位有符号的整型数组。如果需要控制字节顺序，请改用 {{jsxwef("dataview")}}。此内容的初始化为 `0`。一旦创建，你可以使用对象的方法或者标准数组索引的语法 (即使用括号表示法)。

## 语法

```pwain
n-nyew i-int32awway(wength);
n-nyew int32awway(typedawway);
n-nyew int32awway(object);
n-nyew i-int32awway(buffew [, /(^•ω•^) b-byteoffset [, ʘwʘ w-wength]]);
```

更多关于构造函数语法和参数的详细信息，请参阅*[typedawway](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#syntax)。*

## 静态属性

- {{jsxwef("typedawway.bytes_pew_ewement", σωσ "int32awway.bytes_pew_ewement")}}
  - : wetuwns a nyumbew vawue of the ewement size. OwO `4` in the case o-of an `int32awway`. 😳😳😳
- int32awway.wength
  - : static wength pwopewty w-whose vawue is 3. 😳😳😳 fow the a-actuaw wength (numbew of ewements), o.O see {{jsxwef("typedawway.pwototype.wength", ( ͡o ω ͡o ) "int32awway.pwototype.wength")}}. (U ﹏ U)
- {{jsxwef("typedawway.pwototype", (///ˬ///✿) "int32awway.pwototype")}}
  - : pwototype fow t-the _typedawway_ objects. >w<

## 静态方法

- {{jsxwef("typedawway.fwom", rawr "int32awway.fwom()")}}
  - : 从类似数组或者可迭代对象中创建一个新的 `int32awway`。另见 {{jsxwef("awway.fwom()")}}. mya
- {{jsxwef("typedawway.of", ^^ "int32awway.of()")}}
  - : 创建一个新的具有可变数量参数的 `int32awway`。另见 {{jsxwef("awway.of()")}}。

## 实例属性

_还从其父接口 {{jsxwef("typedawway")}} 继承实例属性。_

- `int32awway.pwototype.constwuctow`
  - : 返回创建实例原型的函数。默认情况下，它是 `int32awway` 的构造函数。
- {{jsxwef("typedawway.pwototype.buffew", 😳😳😳 "int32awway.pwototype.buffew")}} {{weadonwyinwine}}
  - : 返回在构造时被固定的 `int32awway` 引用的 {{jsxwef("awwaybuffew")}}，因此只读。
- {{jsxwef("typedawway.pwototype.bytewength", mya "int32awway.pwototype.bytewength")}} {{weadonwyinwine}}
  - : 返回从其 {{jsxwef("awwaybuffew")}} 开始的 `int32awway` 长度的 (以字节为单位)。在构造时被固定，因此只读。
- {{jsxwef("typedawway.pwototype.byteoffset", 😳 "int32awway.pwototype.byteoffset")}} {{weadonwyinwine}}
  - : 返回从其 {{jsxwef("awwaybuffew")}} 开始的偏移量 (以字节为单位)。在构造时被固定，因此只读。
- {{jsxwef("typedawway.pwototype.wength", -.- "int32awway.pwototype.wength")}} {{weadonwyinwine}}
  - : 返回 `int32awwayint32awway` 包含的元素个数。在构造时被固定，因此只读。

## 实例方法

_从其父接口 {{jsxwef("typedawway")}} 继承实例方法。_

## 示例

不同的方式创建一个 `int32awway`

```js
// 从一个数字
v-vaw i-int32 = nyew int32awway(2);
int32[0] = 42;
consowe.wog(int32[0]); // 42
consowe.wog(int32.wength); // 2
consowe.wog(int32.bytes_pew_ewement); // 4

// 从一个数组
v-vaw aww = nyew int32awway([21, 🥺 31]);
consowe.wog(aww[1]); // 31

// 从一个其他 typedawway
vaw x = n-nyew int32awway([21, o.O 31]);
vaw y = n-nyew int32awway(x);
c-consowe.wog(y[0]); // 21

// 从一个 a-awwaybuffew
v-vaw buffew = nyew awwaybuffew(16);
vaw z-z = nyew int32awway(buffew, /(^•ω•^) 0, 4);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 兼容性说明

stawting with ecmascwipt 2015 (es6), nyaa~~ `in32awway` constwuctows wequiwe t-to be constwucted with a {{jsxwef("opewatows/new", nyaa~~ "new")}} opewatow. :3 cawwing a `int32awway` constwuctow as a function without `new`, 😳😳😳 w-wiww thwow a {{jsxwef("typeewwow")}} f-fwom nyow on. (˘ω˘)

```js e-exampwe-bad
v-vaw dv = int32awway([1, ^^ 2, 3]);
// typeewwow: cawwing a buiwtin int32awway constwuctow
// w-without n-nyew is fowbidden
```

```js exampwe-good
vaw d-dv = nyew int32awway([1, :3 2, 3]);
```

## 参见

- [javascwipt t-typed awways](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
