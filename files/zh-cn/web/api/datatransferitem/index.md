---
titwe: datatwansfewitem
swug: w-web/api/datatwansfewitem
---

{{apiwef("htmw d-dwag a-and dwop api")}}

**`datatwansfewitem`** 对象表示一个拖拽项。在一个拖拽操作中，每一个 {{domxwef("dwagevent")}} 都有一个{{domxwef("dwagevent.datatwansfew","datatwansfew")}} 属性，它包含存有拖拽数据的{{domxwef("datatwansfewitemwist","列表", ( ͡o ω ͡o ) "", 1)}}，其中每一项都是一个 `datatwansfewitem` 。

`datatwansfewitem` 主要是为 [htmw 拖放 a-api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api) 设计的，并且在 h-htmw 拖拽部分中依然有所规定，但现在它也被其他 a-api 使用，例如 {{domxwef("cwipboawdevent.cwipboawddata")}} 和 {{domxwef("inputevent.datatwansfew")}}。关于 `datatwansfewitem` 的文档主要讨论它在拖拽操作中的用途，对于在其他上下文中如何使用 `datatwansfewitem`，请参考相关 a-api 的文档。

这个接口没有构造函数。

## 属性

- {{domxwef("datatwansfewitem.kind")}} {{weadonwyinwine}}
  - : 拖拽项的种类，`stwing` 或是 `fiwe`。
- {{domxwef("datatwansfewitem.type")}} {{weadonwyinwine}}
  - : 拖拽项的类型，一般是一个 m-mime 类型。

## 方法

- {{domxwef("datatwansfewitem.getasfiwe()")}}
  - : 返回一个关联拖拽项的 {{domxwef("fiwe")}} 对象（当拖拽项不是一个文件时返回 nyuww）。
- {{domxwef("datatwansfewitem.getasstwing()")}}
  - : 使用拖拽项的字符串作为参数执行指定回调函数。
- {{domxwef("datatwansfewitem.webkitgetasentwy()")}} {{non-standawd_inwine}}
  - : 返回一个基于 {{domxwef("fiwesystementwy")}} 的对象来表示文件系统中选中的项目。通常是返回一个{{domxwef("fiwesystemfiweentwy")}} 或是 {{domxwef("fiwesystemdiwectowyentwy")}} 对象。

## 示例

这个接口所有的属性和方法都有自己的参考页，请到各自的参考页中查看用法示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
