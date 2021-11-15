---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
tags:
  - API
  - Add-ons
  - ContextType
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - contextMenus
  - menus
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
---
{{AddonSidebar()}}

Les différents contextes dans lesquels un élément de menu peut apparaître.

## Type

Les valeurs de ce type sont des chaînes. L'élément est affiché lorsque le contexte donné s'applique. Les valeurs possibles sont :

- all
  - : La spécification de "tous" équivaut à la combinaison de tous les autres contextes, à l'exception de 'bookmark', 'tab' et 'tools_menu'.
- audio
  - : S'applique lorsque l'utilisateur clique sur le contexte d'un élément [audio](/fr/docs/Web/HTML/Element/audio).
- bookmark
  - : S'applique lorsque l'utilisateur clique en contexte sur un élément de signet dans la barre d'outils des signets, le menu des signets, la barre latérale des signets (\<kbd>Ctrl\</kbd> + \<kbd>B\</kbd>) et la fenêtre Bibliothèque (\<kbd>Ctrl\</kbd> + \<kbd>Shift\</kbd> + \<kbd>B\</kbd>). Ces deux derniers sont supportés à partir de Firefox 66. Nécessite la [permission d'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) dans le manifest.
- browser_action
  - : S'applique lorsque l'utilisateur clique en contexte sur l'action de votre navigateur. Le nombre maximal d'éléments pouvant être ajoutés au menu contextuel de l'action du navigateur de niveau supérieur est {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, mais vous pouvez ajouter n'importe quel nombre d'éléments aux sous-menus.
- editable
  - : S'applique lorsque l'utilisateur clique en contexte sur un élément modifiable, comme un [textarea](/fr/docs/Web/HTML/Element/textarea).
- frame
  - : S'applique lorsque l'utilisateur clique sur le contexte dans une [iframe](/fr/docs/Web/HTML/Element/iframe) imbriqué.
- image
  - : S'applique lorsque l'utilisateur clique sur le contexte d'une image.
- link
  - : S'applique lorsque l'utilisateur clique en contexte sur un lien.
- page
  - : S'applique lorsque l'utilisateur clique sur le contexte dans la page, mais aucun des autres contextes de page ne s'applique (par exemple, le clic ne se trouve pas sur une image ou une _iframe_ imbriqué ou un lien).
- page_action
  - : S'applique lorsque l'utilisateur clique en contexte sur l'action de votre page. Le nombre maximal d'éléments pouvant être ajoutés au menu contextuel de l'action de page de niveau supérieur est {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, mais vous pouvez ajouter n'importe quel nombre d'éléments aux sous-menus.
- password
  - : S'applique lorsque l'utilisateur clique en contexte sur un [élément d'entrée de mot de passe](/fr/docs/Web/HTML/Element/input/password).
- selection
  - : S'applique lorsqu'une partie de la page est sélectionnée.
- tab
  - : S'applique lorsque l'utilisateur clique en contexte sur un onglet (en particulier, il s'agit de l'onglet ou d'un autre élément de l'interface utilisateur permettant à l'utilisateur de passer d'un onglet de navigateur à un autre, et non à la page elle-même). Depuis Firefox 63, cliquer sur l'élément du menu d'un onglet accorde la permission [activeTab](/fr/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission) pour l'onglet cliqué, même si ce n'est pas l'onglet actuellement actif.
- tools_menu
  - : L'élément sera ajouté au menu des outils du navigateur. Notez que ceci n'est disponible que si vous accédez à `ContextType` via l'espace de nom des `menus`. Il n'est pas disponible si vous y accédez via l'espace de noms `contextMenus`.
- video
  - : S'applique lorsque l'utilisateur clique sur le contexte d'un élément [video](/fr/docs/Web/HTML/Element/video).

Notez que "launcher" n'est pas supporté.

## Compatibilité du navigateur

{{Compat("webextensions.api.menus.ContextType", 10)}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus) de chromium. Cette documentation est dérivée de [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) dans le code Chromium.

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
