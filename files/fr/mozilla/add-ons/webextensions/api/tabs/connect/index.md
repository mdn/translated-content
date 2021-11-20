---
title: tabs.connect()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/connect
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - connect
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/connect
---
{{AddonSidebar()}}

Appelez cette fonction pour configurer une connexion entre les scripts d'arrière-plan de l'extension (ou d'autres scripts privilégiés, tels que les scripts d'arrière-plan de l'extrension (ou d'autres scripts privilégiés, tels que les scripts de pages d'options) et les [scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) appartenant à cette extension et s'exécutant dans l'onglet spécifié. Cette fonction renvoie un objet {{WebExtAPIRef("runtime.Port")}}.

Lorsque cela est appelée, l'événement {{WebExtAPIRef('runtime.onConnect')}} est déclenché dans tout script de contenu appartenant à cette extension qui s'exécute dans l'onglet spécifié. L'écouteur d'événement recevra un autre objet  {{WebExtAPIRef("runtime.Port")}}. Les deux parties peuvent ensuite utiliser les objets `Port` pour échanger des messages.

Pour plus de détails, voir [connection-based messaging](/fr/Add-ons/WebExtensions/Content_scripts#Connection-based_messaging).

## Syntax

```js
browser.tabs.connect(
  tabId,      // integer
  connectInfo // optional object
)
```

### Parameters

- `tabId`
  - : `integer`. ID of the tab whose content scripts we want to connect to.
- `connectInfo`{{optional_inline}}

  - : `object`.

    - `name`{{optional_inline}}
      - : `string`. Will be passed into {{WebExtAPIRef("runtime.onConnect")}} event listeners in content scripts belonging to this extension and running in the specified tab.
    - `frameId`{{optional_inline}}
      - : `integer`. Open a port to a specific frame identified by `frameId` instead of all frames in the tab.

### Return value

{{WebExtAPIRef('runtime.Port')}}. A port that can be used to communicate with the content scripts running in the specified tab.

## Examples

In this example a background script listens for a click on a [browser action](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Browser_actions_2), then connects to the currently active tab, then sends a message using the `Port` that's returned from `connect()`:

```js
function connectToTab(tabs) {
  if (tabs.length > 0) {
    var examplePort = browser.tabs.connect(
      tabs[0].id,
      {name: "tabs-connect-example"}
    );
    examplePort.postMessage({greeting: "Hi from background script"});
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function() {
  var gettingActive = browser.tabs.query({
    currentWindow: true, active: true
  });
  gettingActive.then(connectToTab, onError);
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.connect")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

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
