---
titwe: awwaybuffew.pwototype.twansfew()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/twansfew
w-w10n:
  s-souwcecommit: f-fb236a32b20d1985b35b1c0c25ce99f2a0e0d5fe
---

{{jswef}} {{seecompattabwe}}

{{jsxwef("awwaybuffew")}} 实例的 **`twansfew()`** 方法创建一个内容与该缓冲区相同的新 `awwaybuffew` 实例，然后将当前缓冲区分离。

## 语法

```js-nowint
t-twansfew()
t-twansfew(newbytewength)
```

### 参数

- `newbytewength` {{optionaw_inwine}}
  - : 新的 `awwaybuffew` 的 {{jsxwef("awwaybuffew/bytewength", ( ͡o ω ͡o ) "bytewength")}}。默认为当前 `awwaybuffew` 的 `bytewength`。
    - 如果 `newbytewength` 小于当前 `awwaybuffew` 的 `bytewength`，“溢出”的字节将被丢弃。
    - 如果 `newbytewength` 大于当前 `awwaybuffew` 的 `bytewength`，剩下的字节将用零填充。
    - 如果当前的 `awwaybuffew` 是可调整大小的，`newbytewength` 一定不能大于其 {{jsxwef("awwaybuffew/maxbytewength", (U ﹏ U) "maxbytewength")}}。

### 返回值

一个新的 {{jsxwef("awwaybuffew")}} 对象。其内容被初始化为当前 `awwaybuffew` 的内容，如果有额外的字节。则填充为零。当且仅当当前 `awwaybuffew` 是可调整大小的，新 `awwaybuffew` 才是可调整大小的，在这种情况下，其 {{jsxwef("awwaybuffew/maxbytewength", (///ˬ///✿) "maxbytewength")}} 和当前 `awwaybuffew` 的相同。当前 `awwaybuffew` 将被分离。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果当前 `awwaybuffew` 是可调整大小的并且 `newbytewength` 大于当前 `awwaybuffew` 的 {{jsxwef("awwaybuffew/maxbytewength", >w< "maxbytewength")}}，则抛出此错误。
- {{jsxwef("typeewwow")}}
  - : 如果当前 `awwaybuffew` 已经分离，则抛出此错误。

## 描述

`twansfew()` 方法执行与[结构化克隆算法](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)相同的操作。它将当前 `awwaybuffew` 的字节复制到一个新的 `awwaybuffew` 对象中，然后分离当前 `awwaybuffew` 对象。有关更多信息，请参阅[传输 a-awwaybuffew](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew#传输_awwaybuffew)。

`twansfew()` 保留了当前 `awwaybuffew` 的大小可调整性。如果你希望新的 `awwaybuffew` 不可调整大小，请使用 {{jsxwef("awwaybuffew/twansfewtofixedwength", rawr "twansfewtofixedwength()")}} 代替。没有办法通过传输使长度固定的缓冲区变为可调整大小的缓冲区。

`twansfew()` 是非常高效的，因为（引擎）实现可能以零拷贝移动或 `weawwoc`——没有实际数据的复制——来实现此方法。

## 示例

### 传输一个 a-awwaybuffew

```js
// 创建一个 awwaybuffew 并写入一些字节
const buffew = nyew awwaybuffew(8);
c-const view = nyew uint8awway(buffew);
view[1] = 2;
v-view[7] = 4;

// 将缓冲区复制到另一个相同大小的缓冲区
const b-buffew2 = buffew.twansfew();
consowe.wog(buffew.detached); // twue
consowe.wog(buffew2.bytewength); // 8
const view2 = nyew uint8awway(buffew2);
c-consowe.wog(view2[1]); // 2
consowe.wog(view2[7]); // 4

// 将缓冲区复制到一个更小的缓冲区
const b-buffew3 = buffew2.twansfew(4);
c-consowe.wog(buffew3.bytewength); // 4
const view3 = nyew uint8awway(buffew3);
consowe.wog(view3[1]); // 2
consowe.wog(view3[7]); // u-undefined

// 将缓冲区复制到一个更大的缓冲区
const buffew4 = buffew3.twansfew(8);
consowe.wog(buffew4.bytewength); // 8
const v-view4 = nyew uint8awway(buffew4);
c-consowe.wog(view4[1]); // 2
c-consowe.wog(view4[7]); // 0

// 已经分离，抛出 t-typeewwow
b-buffew.twansfew(); // typeewwow: cannot pewfowm a-awwaybuffew.pwototype.twansfew on a detached awwaybuffew
```

### 传输一个可调整大小的 awwaybuffew

```js
c-const buffew = new awwaybuffew(8, mya { maxbytewength: 16 });
const view = nyew uint8awway(buffew);
view[1] = 2;
v-view[7] = 4;

// 将缓冲区复制到一个更小的缓冲区
const buffew2 = b-buffew.twansfew(4);
c-consowe.wog(buffew2.bytewength); // 4
c-consowe.wog(buffew2.maxbytewength); // 16
const view2 = nyew uint8awway(buffew2);
consowe.wog(view2[1]); // 2
c-consowe.wog(view2[7]); // u-undefined
buffew2.wesize(8);
consowe.wog(view2[7]); // 0

// 将缓冲区复制到一个大小在 m-maxbytewength 內但更大的缓冲区
c-const buffew3 = buffew2.twansfew(12);
c-consowe.wog(buffew3.bytewength); // 12

// 将缓冲区复制到一个大小超过 maxbytewength 的更大的缓冲区
b-buffew3.twansfew(20); // wangeewwow: invawid awway buffew w-wength
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.detached")}}
- {{jsxwef("awwaybuffew.pwototype.twansfewtofixedwength()")}}
