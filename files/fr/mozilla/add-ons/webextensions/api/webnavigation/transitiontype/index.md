---
title: webNavigation.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionType
---

{{AddonSidebar()}}

Cause de la navigation: par exemple, l'utilisateur a cliqué sur un lien, ou a tapé une adresse, ou a cliqué sur un signet.

Notez que beaucoup de valeurs ne sont actuellement pas supportées dans Firefox : voir la [table de compatibilité du navigateur](/fr/Add-ons/WebExtensions/API/WebNavigation/TransitionType#Browser_compatibility) pour plus de détails.

## Type

Les valeurs de ce type sont des chaînes. Les valeurs possibles sont :

- "link"
  - : L'utilisateur a cliqué sur un lien dans une autre page.
- "typed"
  - : L'utilisateur a tapé l'URL dans la barre d'adresse. Ceci est également utilisé si l'utilisateur a commencé à taper dans la barre d'adresse, puis sélectionné une URL parmi les suggestions qu'il a proposées. Voir aussi " generated".
- "auto_bookmark"
  - : L'utilisateur a cliqué sur un signet ou un élément dans l'historique du navigateur.
- "auto_subframe"
  - : Les iframes imbriqués qui sont automatiquement chargés par leur parent.
- "manual_subframe"
  - : Les iframes imbriqués chargés en tant qu'action utilisateur explicite. Le chargement d'une telle iframe générera une entrée dans la liste de navigation avant/arrière.
- "generated"
  - : L'utilisateur a commencé à taper dans la barre d'adresse, puis a cliqué sur une entrée suggérée qui ne contenait pas d'URL.
- "start_page"
  - : La page a été passée à la ligne de commande ou est la page de démarrage.
- "form_submit"
  - : L'utilisateur a soumis un formulaire. Notez que dans certaines situations, par exemple lorsqu'un formulaire utilise un script pour soumettre son contenu, l'envoi d'un formulaire n'entraîne pas ce type de transition.
- "reload"
  - : L'utilisateur a rechargé la page en utilisant le bouton Recharger ou en appuyant sur Entrée dans la barre d'adresse. Ceci est également utilisé pour la restauration de session et la réouverture des onglets fermés.
- "keyword"
  - : L'URL a été générée à l'aide d'une [rechercher par mot](https://support.mozilla.org/fr/kb/comment-rechercher-site-barre-adresse) configurée par l'utilisateur.
- "keyword_generated"
  - : Correspond à une visite générée pour un mot clé.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webNavigation`](https://developer.chrome.com/extensions/webNavigation). Cette documentation est dérivée de [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) dans le code de Chromium code.
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
