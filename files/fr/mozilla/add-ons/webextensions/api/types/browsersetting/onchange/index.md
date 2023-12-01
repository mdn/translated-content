---
title: onChange
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange
---

{{AddonSidebar()}}

L'événement `BrowserSetting.onChanged` est déclenché lorsque le paramètre est modifié.

## Syntaxe

```js
BrowserSetting.onChanged.addListener(listener);
BrowserSetting.onChanged.removeListener(listener);
BrowserSetting.onChanged.hasListener(listener);
```

Les événement ont trois fonctions :

- `addListener(listener)`
  - : Ajout un auditeur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'auditeur à supprimer.
- `hasListener(listener)`
  - : Vérifier si l'auditeur est enregistré pour cet événement. Renvoie `true` si elle écoute, `false` sinon.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Une fonction de rappel qui sera appelée lorsque cet événement se produira. La fonction passera les arguments suivants :

    - `details`

      - : Un `object` contenant des détails sur le changement survenu. Ses propriété sont les suivantes :

        - `value`
          - : La nouvelle valeur du paramètre. Le type de cette propriété est déterminé par le paramètre particulier.
        - `levelOfControl`
          - : `string`. Cela représente la façon dont le paramètre est actuellement controlé. Vous pouvez l'utiliser pour vérifier si vous pouvez modifier le réglage. Voir [`BrowserSetting.set()`](/fr/Add-ons/WebExtensions/API/privacy/BrowserSetting/set) pour plus détails. Sa valeur peut-être l'une des suivantes :<table class="standard-table">
              <tbody>
                <tr>
                  <td><code>"not_controllable"</code></td>
                  <td>Les extensions ne sont pas autorisées à modifier ce paramètre.</td>
                </tr>
                <tr>
                  <td><code>"controlled_by_other_extensions"</code></td>
                  <td>
                    Une autre extensions qui a été installée après celle-ci a modifié ce
                    paramètre.
                  </td>
                </tr>
                <tr>
                  <td><code>"controllable_by_this_extension"</code></td>
                  <td>Cette extensions est autorisée à modifier le paramètre.</td>
                </tr>
                <tr>
                  <td><code>controlled_by_this_extension"</code></td>
                  <td>Cette extensions a déjà modifié le paramètre.</td>
                </tr>
              </tbody>
            </table>

## Compatibilité des navigateurs

{{Compat}}

## Exemples

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.types`](https://developer.chrome.com/extensions/types).
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
