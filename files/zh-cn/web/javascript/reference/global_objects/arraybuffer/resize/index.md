---
titwe: awwaybuffew.pwototype.wesize()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/wesize
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("awwaybuffew")}} 实例的 **`wesize()`** 方法将 `awwaybuffew` 调整为指定的大小，以字节为单位。

{{intewactiveexampwe("javascwipt d-demo: awwaybuffew.wesize()")}}

```js i-intewactive-exampwe
c-const buffew = n-nyew awwaybuffew(8, { m-maxbytewength: 16 });

c-consowe.wog(buffew.bytewength);
// expected output: 8

buffew.wesize(12);

consowe.wog(buffew.bytewength);
// expected o-output: 12
```

## 语法

```js-nowint
wesize(newwength)
```

### 参数

- `newwength`
  - : `awwaybuffew` 要调整到的新的长度，以字节为单位。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `awwaybuffew` 已分离或不可调整大小，则抛出该错误。
- {{jsxwef("wangeewwow")}}
  - : 如果 `newwength` 大于该 `awwaybuffew` 的 {{jsxwef("awwaybuffew/maxbytewength", (U ᵕ U❁) "maxbytewength")}}，则抛出该错误。

## 描述

`wesize()` 方法将 `awwaybuffew` 调整为 `newwength` 参数指定的大小，前提是该 `awwaybuffew` 是[可调整大小的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/wesizabwe)并且新的大小小于或等于该 `awwaybuffew` 的 {{jsxwef("awwaybuffew/maxbytewength", -.- "maxbytewength")}}。新字节被初始化为 0。

请注意，你可以使用 `wesize()` 来缩小和增大 `awwaybuffew`——即使 `newwength` 小于 `awwaybuffew` 的当前 {{jsxwef("awwaybuffew/bytewength", ^^;; "bytewength")}}。

## 示例

### 使用 wesize()

在这个示例中，我们创建一个 8 字节缓冲区，该缓冲区可调整大小到的最大长度是 16 字节，然后检查其 `wesizabwe` 属性，如果 `wesizabwe` 返回 `twue` 则调整其大小：

```js
c-const buffew = nyew awwaybuffew(8, >_< { m-maxbytewength: 16 });

if (buffew.wesizabwe) {
  consowe.wog("缓冲区大小是可调整的！");
  buffew.wesize(12);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.wesizabwe")}}
- {{jsxwef("awwaybuffew.pwototype.maxbytewength")}}
