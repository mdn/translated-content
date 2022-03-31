---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
tags:
  - API
  - Extensions
  - Non-standard
  - Reference
  - Sidebar
  - WebExtensions
  - sidebarAction
translation_of: Mozilla/Add-ons/WebExtensions/API/sidebarAction
---
{{AddonSidebar}}

Obtient et définit les propriétés de la barre latérale d'une extension.

Une [barre latérale](/fr/Add-ons/WebExtensions/Sidebars) est un volet qui s'affiche à gauche ou à droite de la fenêtre du navigateur, à côté de la page Web. Le navigateur fournit une interface utilisateur qui permet à l'utilisateur de voir les barres latérales actuellement disponibles et de sélectionner une barre latérale à afficher. En utilisant la clé [`sidebar_action`](/fr/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json, une extension peut définir sa propre barre latérale.
En utilisant l'API `sidebarAction` décrite ici, une extension peut obtenir et définir les propriétés de la barre latérale.

L'API `sidebarAction` est étroitement modélisée sur l'API  {{WebExtAPIRef("browserAction")}}.

L'API sidebarAction est basée sur l'[API sidebarAction](https://dev.opera.com/extensions/sidebar-action-api/) d'Opéra. Toutefois, notez que les éléments suivants ne sont pas encore pris en charge : `setBadgeText()`, `getBadgeText()`, `setBadgeBackgroundColor()`, `getBadgeBackgroundColor()`, `onFocus`, `onBlur`.

## Types

- {{WebExtAPIRef("sidebarAction.ImageDataType")}}
  - : Données de pixel pour une image. Doit être un objet [`ImageData`](/fr/docs/Web/API/ImageData) (par exemple, à partir d'un élément {{htmlelement("canvas")}}).

## Fonctions

- {{WebExtAPIRef("sidebarAction.close()")}}
  - : Ferme la barre latérale
- {{WebExtAPIRef("sidebarAction.getPanel()")}}
  - : Obtient le panneau de la barre latérale.
- {{WebExtAPIRef("sidebarAction.getTitle()")}}
  - : Obtient le titre de la barre latérale.
- {{WebExtAPIRef("sidebarAction.isOpen()")}}
  - : Vérifie si la barre latérale est ouverte ou non.
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : Ouvre la barre latérale.
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : Définit l'icône de la barre latérale.
- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : Définit le panneau de la barre latérale.
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : Définit le titre de la barre latérale. Ceci sera affiché dans n'importe quelle interface utilisateur fournie par le navigateur pour lister les barres latérales, comme un menu.
- {{WebExtAPIRef("sidebarAction.toggle()")}}
  - : Permet de basculer la visibilité de la barre latérale.

## Compatibilité du navigateur

{{Compat("webextensions.api.sidebarAction")}}

## Exemple extensions

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page)

> **Note :**
>
> Cette API est basée sur l'API Opera [`chrome.sidebarAction`](https://dev.opera.com/extensions/sidebar-action-api/).
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
