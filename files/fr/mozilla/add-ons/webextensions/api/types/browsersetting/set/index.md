---
title: set()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set
tags:
  - API
  - Add-ons
  - BrowserSetting
  - Extensions
  - Privacy
  - Reference
  - WebExtensions
  - set
translation_of: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set
---
{{AddonSidebar()}}

Utilisez `BrowserSetting.set()` pour modifier le paramètre du navigateur vers une nouvelle valeur.

Certaines règles peuvent être restreintes lorsque les extensions sont capables de modifier les paramètres :

- Certains paramètres sont verrouillés, de sorte qu'ils ne peuvent pas être modifiés par les extensions
- Si plusieurs extensions tentent de modifier le même paramètre, les extensions reçoivent un ordre de priorité en fonction de leur installation. Plus récemment, les extensions installées ont priorité sur l'extension installée récemment.

Cela signifie que si l'extension X essaie de modifier un paramètre :

1.  Si le réglage est verrouillé, le réglage n'est pas modifié. Cependant, le changement de X est rappelé, et il est stocké dans une file d'attente, commandé par la priorité de X par rapport à toutes les autres extensions qui ont essayé de modifier le paramètre. Si le réglage devient déverrouillé plus tard, la première extension de la file d'attente permet de modifier le réglage.
2.  Sinon, si aucune autre extension n'a déjà changé le paramètre, X réussit à modifier le réglage, puis on dit "contrôler" le réglage.
3.  Sinon, si une extension de priorité inférieure Y a déjà changé le paramètre, X réussit à modifier le réglage et maintenant le réglage.  However, Y's change is remembered, and is stored in a queue in precedence order. Cependant, le changement de Y est rappelé et est stocké dans une file d'attente dans l'ordre de priorité. Si X efface ensuite sa valeur, ou si X est désactivé ou désinstallé, la première extension de la file d'attente permet de modifier sa valeur.
4.  Sinon, si une extension de priorité supérieure Z a déjà changé le paramètre, X ne réussit pas à modifier le paramètre, mais sa modification est mise en file d'attente. Si Z efface ensuite sa valeur, ou si Z est désactivé ou désinstallé, la première extension de la file d'attente permet de modifier sa valeur.

Une extension peut déterminer lequel de ces scénarios s'applique en examinant la propriété "`levelOfControl`" renvoyée d'un appel à [`BrowserSetting.get()`](/fr/Add-ons/WebExtensions/API/privacy/BrowserSetting/get).

la méthode [`BrowserSetting.set()`](/fr/Add-ons/WebExtensions/API/privacy/BrowserSetting/set) renvoie une promesse qui résout un booléen : Si une tentative de modification d'un paramètre aboutit à la modification du paramètre (scenarios 2 et 3 ci-dessus) le booléen est  `true`: sinon il est `false`.

## Syntaxe

```js
var setting = setting.set(
  details     // object
)
```

### Paramètres

- `details`

  - : Un objet qui doit contenir la propriété suivante :

    - `value`
      - : `any`. La valeur à laquelle vous souhaitez modifier le paramètre. Son type dépend du réglage particulier.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un `booléen`: `true` si le paramètre a été modifié, `false` sinon (par exemple, parce que l'extension n'a pas contrôlé le paramètre).

## Compatibilité du navigateur

Voir {{WebExtAPIRef("types.BrowserSetting")}}.

## Exemple

Modifiez le paramètre `hyperlinkAuditingEnabled` (ceci nécessite la permission "privacy") :

```js
function onSet(result) {
  if (result) {
    console.log("Value was updated");
  } else {
    console.log("Value was not updated");
  }
}

browser.browserAction.onClicked.addListener(() => {

    var setting = browser.privacy.websites.hyperlinkAuditingEnabled.set({
      value: false
    });
    setting.then(onSet);

});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.types`](https://developer.chrome.com/extensions/types).
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
