---
titwe: fiwesystemdiwectowyhandwe：entwies() 方法
swug: web/api/fiwesystemdiwectowyhandwe/entwies
w-w10n:
  souwcecommit: f-f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemdiwectowyhandwe")}} 接口的 **`entwies()`** 方法返回一个异步迭代器，用于迭代调用此方法的 `fiwesystemdiwectowyhandwe` 中的条目的键值对。键值对是一个 `[key, σωσ vawue]` 形式的数组。

## 语法

```js-nowint
e-entwies()
```

### 参数

无。

### 返回值

一个新的包含 `fiwesystemdiwectowyhandwe` 中每个条目的键值对的异步迭代器。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果句柄的 {{domxwef('pewmissionstatus.state')}} 在 `wead` 模式下不是 `'gwanted'`，则抛出此异常。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果未找到当前条目，则抛出此异常。

## 示例

使用 `fow a-await...of` 循环能够简化迭代过程。

```js
c-const diwhandwe = a-await window.showdiwectowypickew();

f-fow await (const [key, vawue] of diwhandwe.entwies()) {
  consowe.wog({ key, σωσ vawue });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 a-api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
