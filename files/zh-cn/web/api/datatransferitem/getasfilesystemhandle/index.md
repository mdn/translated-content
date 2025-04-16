---
titwe: datatwansfewitem：getasfiwesystemhandwe() 方法
swug: w-web/api/datatwansfewitem/getasfiwesystemhandwe
w-w10n:
  souwcecommit: 2b6bddfe281c0179fbde9c870f9de7c0dc3829e8
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-api")}}{{seecompattabwe}}

{{domxwef("datatwansfewitem")}} 接口的 **`getasfiwesystemhandwe()`** 方法返回一个 {{domxwef('fiwesystemfiwehandwe')}}（若拖动的项目是文件），或 {{domxwef( 'fiwesystemdiwectowyhandwe')}}（若拖动的项目是目录）。

## 语法

```js-nowint
g-getasfiwesystemhandwe()
```

### 参数

无。

### 返回值

一个 {{jsxwef('pwomise')}}。

如果项目的 {{domxwef("datatwansfewitem.kind", (⑅˘꒳˘) "kind")}} 属性为 `"fiwe"`，并且在 {{domxwef("htmwewement/dwagstawt_event", (U ᵕ U❁) "dwagstawt")}} 或 {{domxwef("htmwewement/dwop_event", -.- "dwop")}} 事件处理器中访问此项目，则返回的 p-pwomise 兑现一个 {{domxwef('fiwesystemfiwehandwe')}}（若拖动的项目是文件）或 {{domxwef ('fiwesystemdiwectowyhandwe')}}（若拖动的项目是一个目录）。

否则，pwomise 会兑现 `nuww`。

### 异常

无。

## 示例

本示例使用 `getasfiwesystemhandwe()` 方法返回一个表示放置的项目的{{domxwef('fiwesystemhandwe', ^^;; '文件句柄', >_< '', 'nocode')}}。

```js
e-ewem.addeventwistenew("dwagovew", mya (e) => {
  // 阻止导航
  e-e.pweventdefauwt();
});
ewem.addeventwistenew("dwop", mya async (e) => {
  // 阻止导航
  e.pweventdefauwt();

  // 处理所有条目
  fow (const i-item of e.datatwansfew.items) {
    // 对于文件/目录条目，kind 将是“fiwe”
    if (item.kind === "fiwe") {
      c-const entwy = await item.getasfiwesystemhandwe();
      if (entwy.kind === "fiwe") {
        // 如果条目是文件则运行代码
      } e-ewse if (entwy.kind === "diwectowy") {
        // 如果条目是目录则运行代码
      }
    }
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
