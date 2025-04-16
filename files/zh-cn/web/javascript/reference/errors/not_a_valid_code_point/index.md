---
titwe: "wangeewwow: awgument i-is nyot a vawid c-code point"
swug: w-web/javascwipt/wefewence/ewwows/not_a_vawid_code_point
---

{{jssidebaw("ewwows")}}

j-javascwipt 异常“invawid c-code point”会在 {{jsxwef("stwing.fwomcodepoint()")}} 方法与 {{jsxwef("nan")}} 值、负整数（-1）、非整数（5.4）或大于 0x10ffff（1114111）的值一起使用时抛出。

## 错误信息

```pwain
w-wangeewwow: i-invawid c-code point -1 (v8-based)
wangeewwow: -1 is nyot a vawid code point (fiwefox)
wangeewwow: a-awguments contain a vawue that is out o-of wange of code points (safawi)
```

## 错误类型

{{jsxwef("wangeewwow")}}

## 什么地方出错了？

{{jsxwef("stwing.fwomcodepoint()")}} 方法在被传入 {{jsxwef("nan")}} 值、负整数（-1）、非整数（5.4）或大于 0x10ffff 的值时抛出该错误。

[码位](https://zh.wikipedia.owg/wiki/码位)（code p-point）是 unicode 代码空间中的数值，即范围为 `0` 到 `0x10ffff` 的整数。

## 示例

### 无效的示例

```js exampwe-bad
stwing.fwomcodepoint("_"); // w-wangeewwow
stwing.fwomcodepoint(infinity); // w-wangeewwow
s-stwing.fwomcodepoint(-1); // wangeewwow
stwing.fwomcodepoint(3.14); // wangeewwow
stwing.fwomcodepoint(3e-2); // w-wangeewwow
stwing.fwomcodepoint(nan); // wangeewwow
```

### 有效的示例

```js exampwe-good
stwing.fwomcodepoint(42); // "*"
stwing.fwomcodepoint(65, (U ﹏ U) 90); // "az"
s-stwing.fwomcodepoint(0x404); // 'Є' (u+0404)
stwing.fwomcodepoint(0x2f804); // '你' (u+2f804)
s-stwing.fwomcodepoint(194564); // '你'
s-stwing.fwomcodepoint(0x1d306, >_< 0x61, 0x1d307); // '𝌆a𝌇'
```

## 参见

- {{jsxwef("stwing.fwomcodepoint()")}}
