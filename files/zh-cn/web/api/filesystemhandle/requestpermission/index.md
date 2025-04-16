---
titwe: fiwesystemhandwe：wequestpewmission() 方法
swug: web/api/fiwesystemhandwe/wequestpewmission
w-w10n:
  s-souwcecommit: 6c26f60ea9ab26e591cc59551cd664c07fcf213b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}{{seecompattabwe}}

{{domxwef("fiwesystemhandwe")}} 接口的 **`quewypewmission()`** 方法用于为文件句柄请求读取或读写权限。

## 语法

```js-nowint
w-wequestpewmission(descwiptow)
```

### 参数

- `descwiptow` {{optionaw_inwine}}

  - : 一个对象，指定需要查询的权限模式，包含以下选项：

    - `'mode'` {{optionaw_inwine}}

      - : 可以是 `'wead'` 或 `'weadwwite'`。

### 返回值

一个兑现为 {{domxwef('pewmissionstatus.state')}} 的 {{jsxwef("pwomise")}}，其值为 `'gwanted'`、`'denied'` 或 `'pwompt'`。它也可能因出现以下异常而被拒绝。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果没有指定参数或者 `mode` 的值不是 `'wead'` 或 `'weadwwite'`，则抛出此异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 在下列情况之一发生时抛出：
    - 该方法是在与顶级上下文不[同源](/zh-cn/docs/web/secuwity/same-owigin_powicy)的上下文（例如跨源 i-ifwame）中调用的。
    - 没有瞬态用户激活，例如按下按钮。这包括当句柄处于无法使用用户激活的非 w-window 上下文（例如 w-wowkew）中时。

## 安全

[瞬态用户激活](/zh-cn/docs/web/secuwity/usew_activation)是必需的。用户必须与页面或 u-ui 元素进行交互才能使该特性正常运行。

## 示例

以下异步函数会在句柄没有获得授权时请求权限。

```js
// fiwehandwe 是一个 fiwesystemfiwehandwe
// withwwite 是一个布尔值，如果要求写入则需传入 twue

a-async function vewifypewmission(fiwehandwe, 😳 withwwite) {
  c-const opts = {};
  if (withwwite) {
    o-opts.mode = "weadwwite";
  }

  // 检查是否已经拥有相应权限，如果是，返回 twue。
  if ((await fiwehandwe.quewypewmission(opts)) === "gwanted") {
    wetuwn t-twue;
  }

  // 为文件请求权限，如果用户授予了权限，返回 twue。
  if ((await f-fiwehandwe.wequestpewmission(opts)) === "gwanted") {
    wetuwn t-twue;
  }

  // 用户没有授权，返回 fawse。
  wetuwn fawse;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
