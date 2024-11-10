---
title: windows
slug: Mozilla/Add-ons/WebExtensions/API/windows
---

{{AddonSidebar}}

Взаимодействие с окнами браузера. Вы можете использовать этот API, чтобы получить информацию об открытых окнах, а также открывать, изменять и закрывать окна. Вы также можете обрабатывать события открытия, закрытия окна, и активировать события.

## Types

- {{WebExtAPIRef("windows.WindowType")}}
  - : Тип окна браузера.
- {{WebExtAPIRef("windows.WindowState")}}
  - : Состояние окна браузера.
- {{WebExtAPIRef("windows.Window")}}
  - : Информация об окне браузера.
- {{WebExtAPIRef("windows.CreateType")}}
  - : Specifies the type of browser window to create.

## Properties

- {{WebExtAPIRef("windows.WINDOW_ID_NONE")}}
  - : The `windowId` value that represents the absence of a browser window.
- {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}
  - : The `windowId` value that represents the current window.

## Functions

- {{WebExtAPIRef("windows.get()")}}
  - : Gets details about a window, given its ID.
- {{WebExtAPIRef("windows.getCurrent()")}}
  - : Gets the current window.
- {{WebExtAPIRef("windows.getLastFocused()")}}
  - : Gets the window that was most recently focused — typically the window 'on top'.
- {{WebExtAPIRef("windows.getAll()")}}
  - : Gets all windows.
- {{WebExtAPIRef("windows.create()")}}
  - : Creates a new window.
- {{WebExtAPIRef("windows.update()")}}
  - : Updates the properties of a window. Use this to move, resize, and (un)focus a window, etc.
- {{WebExtAPIRef("windows.remove()")}}
  - : Closes a window, and all its tabs.

## Events

- {{WebExtAPIRef("windows.onCreated")}}
  - : Fired when a window is created.
- {{WebExtAPIRef("windows.onRemoved")}}
  - : Fired when a window is closed.
- {{WebExtAPIRef("windows.onFocusChanged")}}
  - : Fired when the currently focused window changes.

## Совместимость с браузерами

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Этот API основан на Chromium API [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows). Эта документация основана на [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) из кода Chromium.
>
> Информация о совместимости Microsoft Edge предоставлена корпорацией Microsoft и включена здесь под лицензией Creative Commons Attribution 3.0 United States License.

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
