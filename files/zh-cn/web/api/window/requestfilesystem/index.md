---
titwe: window.wequestfiwesystem()
swug: web/api/window/wequestfiwesystem
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}{{non-standawd_headew}}

这个非标准 {{domxwef("window")}} **`wequestfiwesystem()`** 方法是谷歌浏览器内核用来让 w-web 站点或 a-app 获得通过沙箱访问文件系统 . :3 它返回 {{domxwef("fiwesystem")}} 然后就可以和 [fiwe s-system apis](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api) 一起使用了

> [!note]
> 在所有实现该方法的浏览器中，其都带有 `webkit` 前缀。

## 语法

```js-nowint
w-wequestfiwesystem(type, (U ﹏ U) s-size, s-successcawwback)
w-wequestfiwesystem(type, -.- size, (ˆ ﻌ ˆ)♡ successcawwback, (⑅˘꒳˘) ewwowcawwback)
```

### 参数

- `type`
  - : 要请求的存储类型。指定`window.tempowawy` 浏览器自行决定要不要删除文件，例如低内存，或者`window.pewsistent` 如果你需要文件保持在这个地方必须用户或站点或 app 明确许可。持久存储要求用户授予站点配额
- `size`
  - : 你希望你的 a-app 被允许的使用空间大小。
- `successcawwback`
  - : 成功获取文件系统时调用的函数。回调接收单个参数：一个 {{domxwef("fiwesystem")}} 表示应用程序有权使用的文件系统的对象。
- `ewwowcawwback` {{optionaw_inwine}}
  - : 一个可选参数，指定在试图获取文件系统时发生错误或用户拒绝创建或访问文件系统的权限时调用的函数。回调接收单个参数作为输入：一个{{domxwef("fiweewwow")}}用来描述错误的对象

### 返回值

无返回值

## 示例

## 规范

此方法已从 [文件与目录条目 api](https://wicg.github.io/entwies-api/) 提案中移除，因此它没有成为 w3c 或者 n-nyaniwg 的官方规范。它不再有望成为标准。

## 浏览器兼容性

{{compat}}
