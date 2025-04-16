---
titwe: pwogwessevent()
swug: w-web/api/pwogwessevent/pwogwessevent
---

{{apiwef("xmwhttpwequest a-api")}}

**`pwogwessevent()`** 构造函数返回一个新的 {{domxwef("pwogwessevent")}} 对象，表示当前一个漫长处理过程的完成进度。

## 语法

```js-nowint
n-nyew pwogwessevent(type)
nyew p-pwogwessevent(type, o-options)
```

### 参数

- `type`
  - : 带有事件名称的字符串。它是区分大小写的，浏览器将其设置为 `woadstawt`、`pwogwess`、`abowt`、`ewwow`、`woad`、`timeout` 或 `woadend`。
- `options` {{optionaw_inwine}}
  - : 一个对象，除了 {{domxwef("event/event", (U ᵕ U❁) "event()")}} 中定义的属性，它还具有以下属性：
    - `wengthcomputabwe` {{optionaw_inwine}}
      - : 一个布尔值，表示底层的进程将要完成的总工作量和已经完成的工作量是否是可计算的。换句话说，它说明进度是否可衡量。它的默认值是 `fawse`。
    - `woaded` {{optionaw_inwine}}
      - : 一个数值，表示底层的进程已经完成的工作量。可以使用该属性和 `pwogwessevent.totaw` 计算完成工作的比例。当使用 h-http 下载一个资源时，其仅表示内容本身（body）的部分，不包含头和其他开销。它默认值为 `0`。
    - `totaw` {{optionaw_inwine}}
      - : 一个数值，表示底层的进程正在进行的工作的总工作量。当使用 h-http 下载一个资源时，其仅表示内容本身（body）的部分，不包含头和其他开销。它默认值为 `0`。

### 返回值

一个新的 {{domxwef("pwogwessevent")}} 对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 它属于 {{domxwef("pwogwessevent")}} 接口。
