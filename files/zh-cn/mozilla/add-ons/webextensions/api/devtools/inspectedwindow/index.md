---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow
---

{{AddonSidebar}}

> **备注：** This page describes the WebExtensions devtools APIs as they exist in Firefox 54. Although the APIs are based on the [Chrome devtools APIs](https://developer.chrome.com/extensions/devtools), there are still many features that are not yet implemented in Firefox, and therefore are not documented here. To see which features are currently missing please see [Limitations of the devtools APIs](/zh-CN/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs).

The `devtools.inspectedWindow` API lets a devtools extension interact with the window that the developer tools are attached to.

Like all the `devtools` APIs, this API is only available to code running in the document defined in the [devtools_page](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json key, or in other devtools documents created by the extension (such as the document hosted by a panel the extension created). See [Extending the developer tools](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) for more.

## Properties

- [`devtools.inspectedWindow.tabId`](/zh-CN/Add-ons/WebExtensions/API/devtools.inspectedWindow/tabId)
  - : The ID of the window that the developer tools are attached to.

## Functions

- [`devtools.inspectedWindow.eval()`](/zh-CN/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval)
  - : Evaluate some JavaScript in the target window.
- [`devtools.inspectedWindow.reload()`](/zh-CN/Add-ons/WebExtensions/API/devtools.inspectedWindow/reload)
  - : Reload the target window's document.

## Browser compatibility

{{Compat}}

> **备注：** This API is based on Chromium's [`chrome.devtools.inspectedWindow`](https://developer.chrome.com/extensions/devtools_inspectedWindow) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
