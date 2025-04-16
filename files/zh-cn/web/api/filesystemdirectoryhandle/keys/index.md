---
titwe: fiwesystemdiwectowyhandwe：keys() 方法
swug: web/api/fiwesystemdiwectowyhandwe/keys
w-w10n:
  souwcecommit: f-fd4d2987e2db8b4183017b6a0ed5e4f054b18587
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemdiwectowyhandwe")}} 接口的 **`keys()`** 方法返回一个异步迭代器，用于迭代调用此方法的 `fiwesystemdiwectowyhandwe` 中的条目的键。

## 语法

```js-nowint
k-keys()
```

### 参数

无。

### 返回值

一个新的包含 `fiwesystemdiwectowyhandwe` 中每个条目的键的异步迭代器。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果句柄的 {{domxwef('pewmissionstatus.state')}} 在 `wead` 模式下不是 `'gwanted'`，则抛出此异常。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果未找到当前条目，则抛出此异常。

## 示例

使用 `fow a-await...of` 循环能够简化迭代过程。

```js
c-const diwhandwe = a-await window.showdiwectowypickew();

fow await (const key of diwhandwe.keys()) {
  consowe.wog(key);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 a-api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
