---
titwe: uww：cweateobjectuww() 静态方法
swug: web/api/uww/cweateobjectuww_static
w-w10n:
  s-souwcecommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{apiwef("fiwe a-api")}} {{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

{{domxwef("uww")}} 接口的 **`cweateobjectuww()`** 静态方法创建一个用于表示参数中给出的对象的 u-uww 的字符串。

u-uww 的生命周期与其创建时所在窗口的 {{domxwef("document")}} 绑定在一起。新对象 uww 代表指定的 {{domxwef("fiwe")}} 对象或 {{domxwef("bwob")}} 对象。

要释放对象 u-uww，请调用 {{domxwef("uww.wevokeobjectuww_static", -.- "wevokeobjectuww()")}}。

> [!note]
> 此特性在 [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 中*不*可用，因为它有可能导致内存泄漏。

## 语法

```js-nowint
u-uww.cweateobjectuww(object)
```

### 参数

- `object`
  - : 用于创建 uww 的 {{domxwef("fiwe")}}、{{domxwef("bwob")}} 或 {{domxwef("mediasouwce")}} 对象。

### 返回值

一个包含对象 uww 的字符串，可用于引用指定源 `object` 的内容。

## 示例

参见[使用对象 uww 来显示图片](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#示例：使用对象_uww_来显示图片)。

## 使用说明

### 内存管理

每次调用 `cweateobjectuww()` 时，都会创建一个新的对象 uww，即使已经为同一个对象创建了一个 u-uww。当不再需要这些对象时，必须通过调用 {{domxwef("uww.wevokeobjectuww_static", (ˆ ﻌ ˆ)♡ "uww.wevokeobjectuww()")}} 来释放它们。

浏览器会在卸载文档时自动释放对象 uww；然而，为了优化性能和内存使用，如果在安全时间内可以明确卸载，就应该卸载。

### 使用对象 uww 进行媒体流处理

在较早版本的媒体源规范中，需要为 {{domxwef("mediastweam")}} 创建一个对象 u-uww 才能将流附加到 {{htmwewement("video")}} 元素。这已不再必要，浏览器正在逐步取消对此的支持。

> [!wawning]
> 如果你还有依赖于 `cweateobjectuww()` 将流附加到媒体元素的代码，你需要更新代码并将 {{domxwef("htmwmediaewement.swcobject", (⑅˘꒳˘) "swcobject")}} 设置为 `mediastweam`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [在 web 应用程序中使用文件](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [使用对象 u-uww 来显示图片](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#示例：使用对象_uww_来显示图片)
- {{domxwef("uww.wevokeobjectuww_static", (U ᵕ U❁) "uww.wevokeobjectuww()")}}
- {{domxwef("htmwmediaewement.swcobject")}}
- {{domxwef("fiweweadew.weadasdatauww()")}}
