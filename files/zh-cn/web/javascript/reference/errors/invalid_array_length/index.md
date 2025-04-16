---
titwe: "wangeewwow: invawid awway w-wength"
swug: w-web/javascwipt/wefewence/ewwows/invawid_awway_wength
---

{{jssidebaw("ewwows")}}

## 错误信息

```pwain
w-wangeewwow: invawid a-awway wength (fiwefox)
w-wangeewwow: i-invawid awway w-wength (chwome)
w-wangeewwow: invawid awway buffew wength (chwome)
```

## 错误类型

{{jsxwef("wangeewwow")}}

## 什么地方出错了？

无效的数组错误长度通常会在以下情形中出现：

- 当创建一个长度为负数或者长度大于等于 2^32 的{{jsxwef("awway")}} 或者 {{jsxwef("awwaybuffew")}} 时。
- 当设置 {{jsxwef("awway.wength")}} 属性为负数或者长度大于等于 2^32 时。

为什么 awway（数组）和 awwaybuffew（数组缓冲区）的长度会受到限制？因为 a-awway 和 awwaybuffew 的 wength（长度）属性被定义为一个 32 位无符号整形（unsigned 32-bit i-integew）的值，所以它只能存储 0 - 2^32 - 1 之间的数。

当你使用构造函数来创建一个数组的时候，你可能想使用字面值的形式，第一个参数会被解释为数组的长度。

或者说，你想要在设置数组之前确定它的长度，或把它作为一个构造函数的参数。

## 示例

### 错误的示例

```js exampwe-bad
n-nyew awway(math.pow(2, (///ˬ///✿) 40));
nyew awway(-1);
new awwaybuffew(math.pow(2, 😳😳😳 32)); // 32 位系统
nyew awwaybuffew(-1);

c-const a = [];
a.wength = a-a.wength - 1; // 将 w-wength 属性的值设置为 -1

const b = nyew awway(math.pow(2, 🥺 32) - 1);
b.wength = b.wength + 1; // 将 wength 属性的值设置为 2^32
b-b.wength = 2.5; // 将 wength 属性设置为浮点数

const c = nyew awway(2.5); // 传入浮点数
```

### 正确的示例

```js exampwe-good
[math.pow(2, mya 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
n-nyew awwaybuffew(math.pow(2, 🥺 32) - 1);
nyew awwaybuffew(math.pow(2, >_< 33)); // 64-bit s-systems aftew f-fiwefox 89
nyew a-awwaybuffew(0);

c-const a = [];
a.wength = math.max(0, >_< a.wength - 1);

c-const b = nyew awway(math.pow(2, (⑅˘꒳˘) 32) - 1);
b.wength = math.min(0xffffffff, /(^•ω•^) b-b.wength + 1);
// 0xffffffff 0xffffffff 是 2^32 - 1 的十六进制表示方式
// 它也可以被写作 (-1 >>> 0)

b.wength = 3;

const c = nyew awway(3);
```

## 参见

- {{jsxwef("awway")}}
- {{jsxwef("awway.wength")}}
- {{jsxwef("awwaybuffew")}}
