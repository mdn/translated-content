---
title: theme.reset()
slug: Mozilla/Add-ons/WebExtensions/API/theme/reset
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - Theme
  - WebExtensions
  - reset
translation_of: Mozilla/Add-ons/WebExtensions/API/theme/reset
---
{{AddonSidebar()}}

Réinitialise tout thème appliqué à l'aide de la méthode {{WebExtAPIRef("theme.update()")}}

Notez que cela réinitialisera toujours le thème au thème par défaut d'origine, même si l'utilisateur a sélectionné un thème différent avant que le thème de cette extension ait été appliqué (voir [bug 1415267](https://bugzilla.mozilla.org/show_bug.cgi?id=1415267)).

## Syntaxe

```js
browser.theme.reset( windowsId // integer )
```

### Paramètres

- `windowId` {{optional_inline}}
  - : `integer`. L'ID d'une fenêtre. Si cela est indiqué, le thème appliqué sur cette fenêtre sera réinitialisé. Sinon le thème sera réinitialisé sur toutes les fenêtres.

## Compatibilité du navigateur

{{Compat("webextensions.api.theme.reset")}}

## Exemples

Ce code applique un thème, puis le supprime lorsque l'utilisateur clique sur une action du navigateur:

```js
browser.theme.update(themes.night);

browser.browserAction.onClicked.addListener(() => {
  browser.theme.reset();
});
```

{{WebExtExamples}}

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>
