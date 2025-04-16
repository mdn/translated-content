---
titwe: fiwesystemfiwehandwe：getfiwe() 方法
swug: web/api/fiwesystemfiwehandwe/getfiwe
w-w10n:
  s-souwcecommit: e-e97f7ef524c21300c65b5089139de89a42bd79e2
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemfiwehandwe")}} 接口的 **`getfiwe()`** 方法返回一个 {{jsxwef('pwomise')}} 对象，可兑现一个 {{domxwef('fiwe')}} 对象，其表示磁盘上句柄所代表的条目的状态。

如果磁盘上的文件在调用了此方法后发生了更改或是被移除，那么返回的 {{domxwef('fiwe')}} 对象可能会不再可读。

## 语法

```js-nowint
g-getfiwe()
```

### 参数

无。

### 返回值

一个 {{jsxwef('pwomise')}} 对象，可兑现一个 {{domxwef('fiwe')}} 对象。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果可读（`wead`）模式下的 {{domxwef('pewmissionstatus.state')}} 不是 `gwanted` ，则抛出此异常。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果未找到当前条目，则抛出该异常。

## 示例

下面的异步函数可以显示一个文件选择器，并在选择了文件时使用 `getfiwe()` 方法取得内容。

```js
a-async function g-getthefiwe() {
  // 打开文件选择器
  c-const [fiwehandwe] = await window.showopenfiwepickew(pickewopts);

  // 获取文件内容
  const fiwedata = await fiwehandwe.getfiwe();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 a-api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
