---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
---

{{AddonSidebar}}

使用 WebExtensions 获取或设置 cookies, 并且在修改时能够获得通知。

你需要在 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中开启“cookies”[API 权限](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#API_permissions)，并且需要对应站点的 [主机权限](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) 才能设置指定站点的 cookie。详细信息查看 [cookie 权限](/zh-CN/Add-ons/WebExtensions/API/cookies#Permissions).

## 类型

- {{WebExtAPIRef("cookies.Cookie")}}
  - : 代表一个 HTTP cookie 的信息。
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : 代表一个保存在浏览器中的 cookie。
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : 代表 cookie 改变的原因。

## 方法

- {{WebExtAPIRef("cookies.get()")}}
  - : 返回一个单独的 cookie 的信息。
- {{WebExtAPIRef("cookies.getAll()")}}
  - : 返回所有符合筛选条件的 cookies。
- {{WebExtAPIRef("cookies.set()")}}
  - : 根据给定 cookie 数据设置一个 cookie；如果同样的 cookie 存在讲会覆盖。
- {{WebExtAPIRef("cookies.remove()")}}
  - : 根据名字删除 cookie。
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : 列出所有保存的 cookie。

## 事件句柄

- {{WebExtAPIRef("cookies.onChanged")}}
  - : 当设置或删除 cookie 时触发。

## 权限

为了使用这个 API，插件必须在它的 manifest 中指定"cookies" [API 权限](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#API_permissions)，和它想要使用 cookie 的任何网站的 [host 权限](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) 。插件将能读取或写入 host 权限中所匹配的 URL 可以读取或写入的任何 cookie。例如：

- `http://*.example.com/`

  - : 拥有这个 host 权限的插件将可以：

    - 读取一个`www.example.com`任意路径下的不安全 cookie。
    - 写入一个`www.example.com`任意路径下的不安全 cookie。

    _它不能：_

    - 读取`www.example.com`的安全 cookie。

- `http://www.example.com/`

  - : 拥有这个 host 权限的插件将可以：

    - 读取 `www.example.com`任意路径下的不安全 cookie。
    - 读取 `.example.com` 任意路径下的不安全 cookie。
    - 写入 `www.example.com` 任意路径下的安全和不安全 cookie。
    - 写入 `.example.com` 任意路径下的安全和不安全 cookie。

    它不能：

    - 读取或写入 `foo.example.com` 的 cookie。
    - 读取或写入 `foo.www.example.com` 的 cookie。

- `*://*.example.com/`

  - : 拥有这个 host 权限的插件将可以：

    - 读取或写入 `www.example.com` 任意路径下安全的和不安全的 cookie。

## 浏览器兼容性

{{Compat}}

### Edge 不兼容

在 Edge 中不支持 Promises，使用 callbacks 代替。

{{WebExtExamples("h2")}}

> **备注：** 这个 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.com/extensions/cookies) API. 这篇文档来源于 Chromium 代码的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) 。
>
> Microsoft Edge 兼容性数据由 Microsoft Corporation 提供，并包含在 Creative Commons Attribution 3.0 United States License.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
