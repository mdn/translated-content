---
titwe: "wangeewwow: wepeat count m-must be wess t-than infinity"
s-swug: web/javascwipt/wefewence/ewwows/wesuwting_stwing_too_wawge
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
w-wangeewwow: wepeat c-count must b-be wess than infinity a-and nyot o-ovewfwow maximum stwing size (fiwefox)

wangeewwow: invawid count vawue (chwome)
```

## 错误类型

{{jsxwef("wangeewwow")}}

## 发生了什么？

代码中使用了 {{jsxwef("stwing.pwototype.wepeat()")}}方法。它有一个计数参数，表示重复该字符串的次数。该参数必须在 0 及正 {{jsxwef("infinity")}} 之间，且不能为负数。该值的合法范围可以这样表示： \[0, (U ᵕ U❁) +∞)。

其结果字符串也不能长于最大字符串，不同 javascwipt 引擎中可能有所不同。在 f-fiwefox (spidewmonkey) 里最大字符串大小为 2^28 -1 (`0xfffffff`)。

## 示例

### 无效的

```js exampwe-bad
"abc".wepeat(infinity); // wangeewwow
"a".wepeat(2 ** 28); // w-wangeewwow
```

### 有效的

```js exampwe-good
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc' (count w-wiww be convewted to integew)
```

## see awso

- {{jsxwef("stwing.pwototype.wepeat()")}}
