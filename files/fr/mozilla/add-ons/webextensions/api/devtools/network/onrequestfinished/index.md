---
title: devtools.network.onRequestFinished
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished
---

{{AddonSidebar()}}

Lancé lorsqu'une requête réseau est terminée et que ses détails sont disponibles pour l'extension.

La requête est donnée en tant qu'[objet d'entrée HAR](http://www.softwareishard.com/blog/har-12-spec/#entries), qui est également doté d'une méthode `getContent()` asynchrone qui récupère le contenu du corps de la réponse.

Notez que bien que votre extension puisse ajouter un écouteur à tout moment,elle commencera seulement à se déclencher après que l'utilisateur a activé le [moniteur réseau](/fr/docs/Outils/Moniteur_réseau) du navigateur au moins une fois.

## Syntaxe

```js
browser.devtools.network.onRequestFinished.addListener(listener);
browser.devtools.network.onRequestFinished.removeListener(listener);
browser.devtools.network.onRequestFinished.hasListener(listener);
```

Les événements ont trois fonctions

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true`s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `request`
      - : `object`. Un objet représentant la requête. Cet objet est un seul objet d'[entrée HAR](http://www.softwareishard.com/blog/har-12-spec/#entries). Il définit également une méthode `getContent()` asynchrone, qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui se résout avec le corps de la réponse.

## Compatibilité des navigateurs

{{Compat}}

## Examples

Ajoutez un écouteur qui consigne l'adresse IP du serveur et le corps de la réponse pour chaque requête réseau.

```js
function handleRequestFinished(request) {
  console.log("Server IP: ", request.serverIPAddress);
  request.getContent().then((content) => {
    console.log("Content: ", content);
  });
}

browser.devtools.network.onRequestFinished.addListener(handleRequestFinished);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API [`chrome.devtools`](https://developer.chrome.com/extensions/devtools) de Chromium.

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
