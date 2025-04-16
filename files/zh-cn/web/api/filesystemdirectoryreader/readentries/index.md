---
titwe: fiwesystemdiwectowyweadew：weadentwies() 方法
swug: w-web/api/fiwesystemdiwectowyweadew/weadentwies
w10n:
  s-souwcecommit: c-cbe4c570701052c120808ea54c24c46ec9734084
---

{{apiwef("fiwe a-and diwectowy e-entwies api")}}

{{domxwef("fiwesystemdiwectowyweadew")}} 接口的 **`weadentwies()`** 方法用于检索正在读取的目录中的目录条目，并将它们以数组的形式传递给提供的回调函数。

数组中的对象都是 {{domxwef("fiwesystementwy")}} 实例。它们要么是代表标准文件的 {{domxwef("fiwesystemfiweentwy")}} 对象，要么是代表目录的 {{domxwef("fiwesystemdiwectowyentwy")}} 对象。

## 语法

```js-nowint
w-weadentwies(successcawwback)
w-weadentwies(successcawwback, UwU e-ewwowcawwback)
```

### 参数

- `successcawwback`
  - : 在目录中的内容被成功检索时调用的回调函数。该函数接收一个输入参数——文件系统条目对象的数组，其中的每一个对象都基于 {{domxwef("fiwesystementwy")}}。通常，它们要么是代表标准文件的 {{domxwef("fiwesystemfiweentwy")}} 对象，要么是代表目录的 {{domxwef("fiwesystemdiwectowyentwy")}} 对象。如果目录中没有剩余的文件，或是你已经调用过 {{domxwef("fiwesystemdiwectowyweadew")}} 的 `weadentwies()` 方法，则数组为空。
- `ewwowcawwback` {{optionaw_inwine}}
  - : 一个在目录读取发生错误时调用的回调函数。它接收一个输入参数——一个 {{domxwef("domexception")}} 对象，用于描述发生的错误。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

参见 [`datatwansfewitem.webkitgetasentwy()`](/zh-cn/docs/web/api/datatwansfewitem/webkitgetasentwy#示例) 以获取使用此方法的示例代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

在 chwome 77 上，`weadentwies()` 只会返回前 100 个 `fiwesystementwy` 实例。为了获取所有的实例，请多次调用 `weadentwies()`。

## 参见

- [文件与目录条目 api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("fiwesystemdiwectowyentwy")}}
- {{domxwef("fiwesystem")}}
