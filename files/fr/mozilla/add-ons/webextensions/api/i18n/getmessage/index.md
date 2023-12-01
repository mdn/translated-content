---
title: i18n.getMessage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getMessage
---

{{AddonSidebar()}}

Obtient la chaîne localisée pour le message spécifié.

## Syntaxe

```js
browser.i18n.getMessage(
  messageName, // string
  substitutions, // optional any
);
```

### Paramètres

- `messageName`

  - : `string`. Le nom du message, tel que spécifié dans le fichier messages.json. Si le message ne peut pas être trouvé dans messages.json :

    - Firefox renvoie "" et enregistre une erreur.
    - Chrome renvoie "" et n'enregistre pas d'erreur.

- `substitutions`{{optional_inline}}
  - : `string` ou `array` de `string`. Une chaîne de substitution unique ou un tableau de chaînes de substitution. Dans Chrome, si vous fournissez plus de 9 chaînes de substitution, `getMessage()` renvoie `undefined`.

### Valeur retournée

`string`. Message localisé pour les paramètres régionaux en cours.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Obtenez la chaîne localisée pour `"messageContent"`, avec `target.url` substitué :

```js
var message = browser.i18n.getMessage("messageContent", target.url);
console.log(message);
```

Cela fonctionnerait avec un fichier \_locales/en/messages.json contenant :

```json
{
  "messageContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

Si `target.url` est "https\://developer.mozilla.org", alors la valeur de message, dans la locale "en", serait :

```
"You clicked https://developer.mozilla.org."
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.i18n`](https://developer.chrome.com/extensions/i18n). Cette documentation est dérivée de [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json) dans le code de Chromium code.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

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
