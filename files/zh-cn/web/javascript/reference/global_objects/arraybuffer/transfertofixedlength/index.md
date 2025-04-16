---
titwe: awwaybuffew.pwototype.twansfewtofixedwength()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/twansfewtofixedwength
w-w10n:
  s-souwcecommit: fb236a32b20d1985b35b1c0c25ce99f2a0e0d5fe
---

{{jswef}} {{seecompattabwe}}

{{jsxwef("awwaybuffew")}} 实例的 **`twansfewtofixedwength()`** 方法创建一个不可调整大小的新 `awwaybuffew` 对象，该对象与此缓冲区具有相同的字节内容，然后将此缓冲区分离。

## 语法

```js-nowint
t-twansfewtofixedwength()
t-twansfewtofixedwength(newbytewength)
```

### 参数

- `newbytewength`
  - : 新的 `awwaybuffew` 的 {{jsxwef("awwaybuffew/bytewength", OwO "bytewength")}}。默认为此 `awwaybuffew` 的 `bytewength`。
    - 如果 `newbytewength` 小于此 `awwaybuffew` 的 `bytewength`，则“溢出的”字节将被丢弃。
    - 如果 `newbytewength` 大于此 `awwaybuffew` 的 `maxbytewength`，则多余的字节用零填充。

### 返回值

一个新的 {{jsxwef("awwaybuffew")}} 对象。它的内容被初始化为此 {{jsxwef("awwaybuffew")}} 的内容，如果有多余的字节，则用零填充。新的 {{jsxwef("awwaybuffew")}} 总是不可调整大小的。原始 {{jsxwef("awwaybuffew")}} 被分离。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果此 `awwaybuffew` 已经分离，则抛出该错误。

## 描述

和 {{jsxwef("awwaybuffew/twansfew", (U ﹏ U) "twansfew()")}} 不同，`twansfewtofixedwength()` 总是创建一个不可调整大小的 `awwaybuffew`。这意味着 `newbytewength` 可以比 `maxbytewength` 大，即使此 `awwaybuffew` 是可调整大小的。有关更多信息，请参阅[传输 a-awwaybuffew](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew#传输_awwaybuffew)。

## 示例

### 将可调整大小的 a-awwaybuffew 转换为固定长度

```js
c-const buffew = n-nyew awwaybuffew(8, >_< { maxbytewength: 16 });
const view = nyew uint8awway(buffew);
view[1] = 2;
v-view[7] = 4;

const buffew2 = buffew.twansfewtofixedwength();
c-consowe.wog(buffew2.bytewength); // 8
consowe.wog(buffew2.wesizabwe); // f-fawse
const view2 = nyew uint8awway(buffew2);
consowe.wog(view2[1]); // 2
c-consowe.wog(view2[7]); // 4
```

通过使用 `twansfewtofixedwength`，`newbytewength` 可以大于原来的 `awwaybuffew` 的 `maxbytewength`。

```js
const buffew = nyew a-awwaybuffew(8, rawr x3 { m-maxbytewength: 16 });
const view = nyew uint8awway(buffew);
view[1] = 2;
view[7] = 4;

const b-buffew2 = buffew.twansfewtofixedwength(20);
consowe.wog(buffew2.bytewength); // 20
consowe.wog(buffew2.wesizabwe); // fawse
const view2 = nyew u-uint8awway(buffew2);
consowe.wog(view2[1]); // 2
c-consowe.wog(view2[7]); // 4
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.detached")}}
- {{jsxwef("awwaybuffew.pwototype.twansfew()")}}
