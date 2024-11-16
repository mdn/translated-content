---
title: 文件系统 API 的基本概念
slug: Web/API/File_and_Directory_Entries_API/Introduction
---

{{DefaultAPISidebar("File and Directory Entries API")}}

本文是对[Basic_Concepts_About_the_Filesystem_API](/zh-CN/docs/DOM/File_APIs/Filesystem/Basic_Concepts_About_the_Filesystem_API)一文的译文。

文件系统 API（File System API）模拟网络应用程序可以导航到的本地文件系统。你可以开发应用在一个沙盒的虚拟文件系统中读、写、创建以及索引文件。

该文件系统 API 与其他相关的 API 交互。它基于文件写入 API（File Writer API），而后者又基于文件 API（File API）。每一个 API 都具有不同的功能。这些 API 对于网络应用而言是一个巨大的进化飞跃，使得它们能够缓存和处理大量级的数据。

## 关于这篇文档

这篇介绍讨论了文件系统 API 中的基本概念和术语。它将给出一个大致的蓝图并引导你理解其中的 [关键概念](#concepts). 它也描述了一些[限制](#restrictions)，如果你忽略了它们将额能产生安全错误。关于该 API 中使用的更多术语，查看[定义](#definitions)部分。

关于文件系统 API 的引用文献部分，查看[引用](/zh-CN/DOM/File_API/File_System_API/FileSystem) 的登陆页及其子页。

该规范仍然在定义中并可能会变更。

## 概要

文件系统 API 包括[异步](/zh-CN/DOM/File_API/File_System_API#Asynchronous_APIs)和[同步](/zh-CN/DOM/File_API/File_System_API#Synchronous_APIs)两种接口。异步 API 可以应用于当你不想操作锁定 UI 的情况。另一方面，同步 API 允许简单的程序模型，但它必须和[WebWorkers 一起使用](/En/Using_web_workers).

### 该 API 的用途

文件系统 API 的重要性体现在以下方面：

- 它允许应用拥有涉及二进制大对象（blob）的线下和存储的特性。
- 它能通过在后台预取资源并本地缓存从而优化应用的表现。
- 它使你网络应用的用户能够直接编辑本地文件目录中的二进制文件。
- 它提供了一种你的用户已经熟悉的存储 API，正如他们所习惯的文件系统。

关于你用该 api 能够创建的特性示例，查看 [使用示例](/#samples) 部分。

### 文件系统 API 和其他存储 API

文件系统 API 是一些其他存储 API，例如 [IndexedDB](/zh-CN/IndexedDB/Basic_Concepts_Behind_IndexedDB), WebSQL(已于 2010 年 9 月 18 日起弃用)，以及 AppCache 等的替代品。该 API 对于那些处理 blob 的应用而言是一种更好的选择，因为：

- 文件系统 API 提供客户端存储以应对不在数据库中存储的应用场景。如果你需要大型可变的数据块，比数据库而言它就是一种更有效率的存储解决方案。
- 尽 管 Firefox 支持 IndexedDB 的 blob 存储，但是目前 Chrome 并非如此（Chrome 仍然在对 IndexedDB 的 blob 存储做实现支 持开发中）。如果你的应用面向 Chrome 并且你需要存储 blobs, 那么文件系统 API 和 App Cache 将是你唯一的选择。然而，AppCache 存储并不是本地可变的，并且不支持细粒度的客户端管理。
- 在 Chrome 中，你可以使用文件系统 API 和配额管理 API [Quota Management API](http://code.google.com/chrome/whitepapers/storage.html), 后者允许你请求更多的存储以及管理你的存储配额。

### 示例使用场景

下面是关于你可以如何使用文件系统 API 的几个示例：

- 有上传器的应用

  - 当你选择一个文件或目录进行上传时，你可以赋值文件到一个本地沙盒并一次上传一个块。
  - 应用可以在一次中断后重新上传，中断可能包括浏览器被关闭或崩溃，连接中断，或电脑被关闭。

- 视频游戏或其他使用大量媒体资源的应用

  - 应用下载一个或多个大压缩包并在本地将他们解压到一个文件目录中。
  - 应用能在后台预取资源，从而让用户能够进入下一项工作或游戏等级，而不需要等待下载。

- 音频或照片编辑器使用线下访问或本地缓存（有助于表现和速度）

  - 应用可以分段写入文件（例如只覆盖 ID3/EXIF 标签而不是整个文件）。

- 线下视频浏览

  - 应用可以下载大文件（>1GB）用于以后浏览。
  - 应用可以访问只下载了部分的文件（因此你可以查看你的 DVD 的第一章，即使应用仍在下载剩余部分，或者当你需要取赶火车而没有完成下载时）。

- 线下网络邮件客户端

  - 客户端下载附件并在本地存储它们。
  - 客户端缓存附件用于稍后的上传。

## 主要概念

在开始使用文件系统 API 之前，你需要理解几个概念：

- [文件系统 API 是一个文件系统的虚拟表现形式](#virtual)
- [文件系统 API 可以使用不同的存储类型](#storage)
- [浏览器限定存储的配额](#quota)
- [文件系统 API 拥有异步和同步两种版本](#versions)
- [当使用异步 API 时，务必使用错误回调](#errorcallbacks)
- [文件系统 API 与其他 API 交互](#interfaces)
- [文件系统 API 区分大小写](#case)

### 文件系统 API 是一个文件系统的虚拟表现形式

该 API 不会使你能够访问本地文件系统，该沙盒也并不是文件系统的一部分。相反，它是一个虚拟的文件系统，对于网络应用而言它就像是一个成熟的文件系统。它不需要在浏览器之外与本地文件系统产生任何关系。

这 就意味着，一个网络应用和一个桌面应用不能在同时共享同一个文件。该 API 不能使你的网络应用脱离浏览器接触到文件，而桌面应用可以。然而，你可以从一个 网络应用中导出一个文件到桌面应用。例如，你可以使用文件 API，创建 blob, 重定向一个 iframe 指向该 blob, 并调用下载管理器。

### 文件系统 API 可以使用不同的存储类型

一个应用可能需要临时或固定的存储。临时存储相对容易获得，因为浏览器已经提供了；但它是受到限制并可能在空间耗尽时被浏览器删除。另一方面，固定存储可以为你提供更大的空间并只能被用户删除，但它需要用户获得你的许可。

使用临时存储进行缓存，而用固定存储来保存那些你希望你的应用保存的类似用户产生的或独特的数据。

### 浏览器限定存储的配额

为了防止一个网络应用占用整个磁盘，浏览器可能会给每一个应用限定配额并分配存储。

存储空间如何分配以及你可以如何管理存储是浏览器的特性，因此你需要查阅浏览器各自的文档。例如，Google Chrome 在规范中允许超过 5MB 的临时存储并支持配额管理 API. 了解更多关于 Chrome 的实现，查看[管理 HTML5 线下存储](http://code.google.com/chrome/whitepapers/storage.html).

### 文件系统 API 拥有异步和同步两种版本

文件系统 API 拥有异步和同步两种版本。两种版本的 API 提供相同的功能和特性。事实上，它们基本相同，除了几个不同点以外。

- **WebWorkers.** 异步的 API 可以在文档或[WebWorkers](/En/Using_web_workers) 上下文中使用，而同步 API 只能用于 WebWorkers.
- **Callbacks**. 异步 API 不会将数据作为返回值；作为替代，你需要传递一个回调函数。你在操作中发送请求，并在回调时得到通知。相反，同步 API 不使用回调函数，因为 API 方法返回值。
- **异步和同步 API 的全局方法**. 异步 API 拥有这些全局方法：`requestFileSystem()` 和 `resolveLocalFileSystemURL()`. 这些方法同时是 window 对象和 worker 全局作用域的成员。另一方面，同步 API 使用如下方法：`requestFileSystemSync()` 和 `resolveLocalFileSystemSyncURL()`. 这些同步方法只是 worker 全局作用域的成员，而非 window 对象的。

对于一些任务而言同步 API 可能更简单一些。它直接的，顺序编程的模块可以让代码更易于阅读。其缺点在于它必须与 Web Worker 交互，而后者有一些限制。

### 当使用异步 API 时，务必使用错误回调

当使用异步 API 时，务必总是使用错误回调。虽然对于相关的方法而言错误回调是可选参数，但是明智的做法是把它们当成必选的。至少，通过处理错误得到的错误信息，你可以知道发生了什么。

### 文件系统 API 与其他 API 交互

文件系统 API 被设计用于在网络平台上与其他 API 以及元素交互。例如，你可能使用到如下内容之一：

- XMLHttpRequest（例如传递 file 和 blob 对象的 send() 方法）
- Drag & Drop API
- Web Workers (对于同步版的文件系统 API)
- `input` 元素 (用于从该元素编程得到文件列表)

### 文件系统 API 区分大小写

文件系统 API 区分大小写并保留大小写。

## 限制

出于安全的原因，浏览器对于文件的访问施加了一些限制。如果你忽略它们，将会产生安全错误。

- [文件系统 API 坚持同源策略](#origin)
- [文件系统 API 不允许创建或重命名可执行文件](#execute)
- [文件系统是沙盒的](#sandbox)
- [不能通过 file://来运行你的应用](#file)

### 文件系统 API 坚持同源策略

一个源是脚本执行的文档的 URL 的域，应用层协议和端口。每一个源拥有它自己关联的一组文件系统

文件系统上作出的安全限定阻止应用访问不同源的数据。这保护了私有数据以防被访问或删除。例如，当一个应用或页面在<http://www.example.com/app/>上时，它能访问位于<http://www.example.com/dir/>上的文件，因为它们拥有相同的源，它不能得到位于<http://www.example.com:8080/dir/> （不同端口）或<https://www.example.com/dir/> （不同协议）上的文件。

### 文件系统 API 不允许创建或重命名可执行文件

为防止恶意的应用运行可执行文件，你不能在文件系统 API 的沙盒中创建可执行文件。

### 文件系统是沙盒的

因为文件系统是沙盒的，一个网络应用不能访问另一个应用的文件。你也不能读写用户硬盘中任意文件夹中的文件。

### 不能通过 file://来运行你的应用

你不能在本地通过 file://来运行你的应用。如果你那么做了，浏览器将抛出错误，或者你的应用会静默地失败。这一限制也同样针对许多其他的文件 API，包括 BlobBuilder 和 FileReader。

出于测试的目的，你可以在 Chrome 中通过在启动时添加 `--allow-file-access-from-files` 参数来绕开这一限制，这一参数仅用于这个目的。

## 定义

这一部分定义和解释了文件系统 API 中使用的术语。

- blob
  - : 代表二进制大对象。一个 blob 是存储在单一对象中的一组二进制数据。这是在网络应用中引用二进制数据的通用方法。一个 blob 可以是一个图片或音频文件。
- Blob
  - : Blob（以大写 B 开头的）是一个不可变的数据结构，这意味着一个 blob 引用的二进制数据不能被直接修改。这使得当 Blobs 传入到异步 API 时它们的行为将是可预见的。
- persistent storage | 固定存储
  - : 固定存储是一种在浏览器中长期存在的存储，除非用户永久删除它或应用删除它。
- temporary storage | 临时存储
  - : 临时存储是任何网络应用都拥有的。它是自动而不需要请求的，但浏览器可以没有任何警告地删除这些存储。

## 其他

规范：<http://dev.w3.org/2009/dap/file-system/pub/FileSystem/>

引用：[File System API Reference](/zh-CN/DOM/File_API/File_System_API)

## 参见

- [Exploring the FileSystem APIs](http://www.html5rocks.com/en/tutorials/file/filesystem/)
- [The Synchronous FileSystem API for Workers](http://www.html5rocks.com/en/tutorials/file/filesystem-sync/)
