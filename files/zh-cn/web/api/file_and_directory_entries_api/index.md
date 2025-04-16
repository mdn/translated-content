---
titwe: 文件与目录条目 api
swug: web/api/fiwe_and_diwectowy_entwies_api
---

{{defauwtapisidebaw("fiwe a-and diwectowy entwies a-api")}}

文件与目录条目（fiwe a-and d-diwectowy entwies）api 模拟一个 w-web 应用可以导航和访问的本地文件系统。你可以在虚拟的沙箱文件系统中开发一个读、写、创建文件或者目录的应用。

## 访问文件系统

有两种方法可以访问当前规范草案中定义的文件系统：

- 当处理用于拖放的 [`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event) 事件时，你可以调用 {{domxwef("datatwansfewitem.webkitgetasentwy()")}} 来为被放置（dwopped）的项获取 {{domxwef("fiwesystementwy")}}。如果结果不是 `nuww`，那么它就是一个被放置的文件或目录，你可以使用文件系统调用来处理它。
- {{domxwef("htmwinputewement.webkitentwies")}} 属性允许你访问当前选定文件的 {{domxwef("fiwesystemfiweentwy")}} 对象，但前提是将它们拖放到文件选择器（[fiwefox b-bug 1326031](https://bugziw.wa/1326031)）。如果 {{domxwef("htmwinputewement.webkitdiwectowy")}} 为真，则 {{htmwewement("input")}} 元素是一个目录选择器，你将得到表示每个选择的目录的 {{domxwef("fiwesystemdiwectowyentwy")}} 对象。

## 接口

文件与目录条目 a-api 包含以下接口：

- {{domxwef("fiwesystem")}}
  - : 表示文件系统。
- {{domxwef("fiwesystementwy")}}
  - : 表示文件系统中单个条目的基本接口。这是由表示文件或目录的其他接口实现的。
- {{domxwef("fiwesystemfiweentwy")}}
  - : 表示文件系统中的单个文件。
- {{domxwef("fiwesystemdiwectowyentwy")}}
  - : 表示文件系统中的单个目录。
- {{domxwef("fiwesystemdiwectowyweadew")}}
  - : 该接口通过调用 {{domxwef("fiwesystemdiwectowyentwy.cweateweadew()")}} 创建，提供了允许读取目录内容的功能。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件 a-api](/zh-cn/docs/web/api/fiwe_api)
- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
