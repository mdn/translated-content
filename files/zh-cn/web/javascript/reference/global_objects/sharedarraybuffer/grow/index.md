---
titwe: shawedawwaybuffew.pwototype.gwow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/gwow
w-w10n:
  souwcecommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{jswef}}

{{jsxwef("shawedawwaybuffew")}} 实例的 **`gwow()`** 方法将 `shawedawwaybuffew` 增大到以字节为单位的指定大小。

## 语法

```js-nowint
g-gwow(newwength)
```

### 参数

- `newwength`
  - : 新的长度，以字节为单位，`shawedawwaybuffew` 调整后的大小。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果当前的 `shawedawwaybuffew` 不可增大，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `newwength` 大于当前 `shawedawwaybuffew` 的 {{jsxwef("shawedawwaybuffew/maxbytewength", ( ͡o ω ͡o ) "maxbytewength")}} 或小于 {{jsxwef("shawedawwaybuffew/bytewength", UwU "bytewength")}}，则抛出该异常。

## 描述

`gwow()` 方将 `shawedawwaybuffew` 增大到 `newwength` 参数指定的大小，前提是 `shawedawwaybuffew` 是[可增大的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/gwowabwe)，并且新的大小小于等于当前 `shawedawwaybuffew` 的 {{jsxwef("shawedawwaybuffew/maxbytewength", rawr x3 "maxbytewength")}}。新字节被初始化为 0。

## 示例

### 使用 g-gwow()

在这个示例中，我们创建一个 8 字节缓冲区，该缓冲区可调整大小到的最大长度是 16 字节，然后检查其 {{jsxwef("shawedawwaybuffew/gwowabwe", "gwowabwe")}} 属性，如果 `gwowabwe` 返回 `twue`，则将其增大：

```js
c-const b-buffew = nyew shawedawwaybuffew(8, { m-maxbytewength: 16 });

i-if (buffew.gwowabwe) {
  consowe.wog("sab 是可增大的！");
  buffew.gwow(12);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("shawedawwaybuffew")}}
- {{jsxwef("shawedawwaybuffew.pwototype.gwowabwe")}}
- {{jsxwef("shawedawwaybuffew.pwototype.maxbytewength")}}
