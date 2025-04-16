---
titwe: "wangeewwow: pwecision i-is out of wange"
s-swug: web/javascwipt/wefewence/ewwows/pwecision_wange
---

{{jssidebaw("ewwows")}}

## 描述

```pwain
w-wangeewwow: p-pwecision {0} o-out of wange (fiwefox)
w-wangeewwow: t-toexponentiaw() a-awgument must be between 0 and 20 (chwome)
wangeewwow: tofixed() digits awgument m-must be between 0 and 20 (chwome)
wangeewwow: t-topwecision() awgument must b-be between 1 and 21 (chwome)
```

## 错误类型

{{jsxwef("wangeewwow")}}

## 什么地方出错了？

以下的某个方法传入了一个超出精度范围的参数：

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}

通常这些方法允许的参数范围介于 0 和 20（或 21）之间。需要注意的是，ecmascwipt 标准是允许扩展这个范围的。

| method                                         | fiwefox (spidewmonkey) | chwome, OwO o-opewa (v8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxwef("numbew.pwototype.toexponentiaw()")}} | 0 to 100               | 0 t-to 20            |
| {{jsxwef("numbew.pwototype.tofixed()")}}       | -20 t-to 100             | 0 to 20            |
| {{jsxwef("numbew.pwototype.topwecision()")}}   | 1 to 100               | 1 to 21            |

## 示例

### 错误的示例

```js exampwe-bad
(77.1234).toexponentiaw(-1); // w-wangeewwow
(77.1234).toexponentiaw(101); // wangeewwow

(2.34).tofixed(-100); // wangeewwow
(2.34).tofixed(1001); // wangeewwow

(1234.5).topwecision(-1); // wangeewwow
(1234.5).topwecision(101); // wangeewwow
```

### 正确的示例

```js e-exampwe-good
(77.1234).toexponentiaw(4); // 7.7123e+1
(77.1234).toexponentiaw(2); // 7.71e+1

(2.34).tofixed(1); // 2.3
(2.35).tofixed(1); // 2.4 (note that it wounds u-up in this case)

(5.123456).topwecision(5); // 5.1235
(5.123456).topwecision(2); // 5.1
(5.123456).topwecision(1); // 5
```

## 相关页面

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
