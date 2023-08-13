---
title: webRequest.handlerBehaviorChanged()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/handlerBehaviorChanged
---

{{AddonSidebar()}}Cette fonction peut être utilisée pour s'assurer que les auditeurs d'événements sont appliqués correctement lorsque les pages se trouvent dans le cache en mémoire du navigateur.Si le navigateur a chargé une page et que la page est rechargée, le navigateur peut recharger la page à partir de son cache en mémoire, et dans ce cas, les événements ne seront pas déclenchés pour la demande.

Supposons que le travail d'une extension consiste à bloquer les requêtes Web par rapport à un modèle, et le scénario suivant se produit :

- L'utilisateur charge une page qui inclut une requête particulière, et le modèle permet la requête.
- La ressource est chargée et mise en cache en mémoire.
- Les modèles de l'extension sont mis à jour, de telle sorte que la ressource ne serait plus autorisée.
- L'utilisateur recharge la page.

Comme la page sera rechargée à partir du cache mémoire, il se peut que l'auditeur ne soit plus appelé et que la requête soit chargée malgré la nouvelle stratégie de l'extension.

La fonction `handlerBehaviorChanged()` est conçue pour résoudre ce problème. Il vide le cache en mémoire, de sorte que les rechargements de page déclenchent les auditeurs d'événements.

Parce que `handlerBehaviorChanged()` nettoie le cache, cela peut être coûteux et mauvais pour la performance. Le module webRequest définit une propriété en lecture seule {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}} : faire plus d'appels que ce nombre en 10 minutes n'aura aucun effet.

L'implémentation de la mise en cache, d'où la nécessité de cette fonction, varie d'un navigateur à l'autre, de sorte que dans certains navigateurs, cette fonction ne fait rien.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var flushingCache = browser.webRequest.handlerBehaviorChanged();
```

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments, lorsque l'opération sera terminée.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Dans le snippet suivant, nous vidons le cache en mémoire via un appel à `handlerBehaviorChanged()`, et signalons cette action en enregistrant un message approprié à la console.

```js
function onFlushed() {
  console.log(`In-memory cache flushed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var flushingCache = browser.webRequest.handlerBehaviorChanged();
flushingCache.then(onFlushed, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webRequest`](https://developer.chrome.com/extensions/webRequest). Cette documentation est dérivée de [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) dans le code Chromium.
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
