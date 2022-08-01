---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - NeedsTranslation
  - Non-standard
  - Reference
  - TopicStub
  - WebExtensions
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs
---
{{AddonSidebar}}

Permet d'interagir avec le système d'onglets du navigateur.

Vous pouvez utiliser cette API pour obtenir une liste des onglets ouverts, filtrés par différents critères, ainsi que pour ouvrir, mettre à jour, déplacer, recharger et supprimer des onglets. Vous ne pouvez pas accéder directement au contenu hébergé par les onglets à l'aide de cette API, mais vous pouvez insérer du JavaScript et du CSS dans les onglets en utilisant les API {{WebExtAPIRef("tabs.executeScript()")}} ou {{WebExtAPIRef("tabs.insertCSS()")}}.

Vous pouvez utiliser la majeure partie de cette API sans autorisation spéciale. Toutefois&nbsp;:

- Pour accéder à `Tab.url`, `Tab.title` et `Tab.favIconUrl`, vous devez avoir la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"tabs"`.

  - Dans Firefox, cela signifie également que vous avez besoin de `"tabs"` pour {{WebExtAPIRef("tabs.query", "requête d'onglet")}} par URL.

- Pour utiliser {{WebExtAPIRef("tabs.executeScript()")}} ou {{WebExtAPIRef("tabs.insertCSS()")}}, vous devez avoir les [permission d'hôte](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) pour l'onglet.

Alternativement, vous pouvez obtenir ces autorisations temporairement, uniquement pour l'onglet actuellement actif et uniquement en réponse à une action explicite de l'utilisateur ou de l'utilisatrice, en demandant la [permission `"activeTab"`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

De nombreuses opérations d'onglet utilisent un identifiant (`id`) d'onglet. Les `id` d'onglets sont seulement garantis uniques à un onglet durant une session de navigation. Si le navigateur est redémarré, il pourra recycler, et recyclera, les id d'onglets. Pour associer des informations à un onglet à travers les redémarrages du navigateur, utilisez {{WebExtAPIRef("sessions.setTabValue()")}}.

## Types

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : Spécifie la raison pour laquelle un onglet a été rendu silencieux ou à nouveau sonore.
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : Cet objet contient un booléen indiquant si l'onglet est silencieux et la raison de la dernière modification de l'état.
- {{WebExtAPIRef("tabs.PageSettings")}}
  - : Permet de contrôler le rendu d'un onglet au format PDF par la méthode {{WebExtAPIRef("tabs.saveAsPDF()")}}.
- {{WebExtAPIRef("tabs.Tab")}}
  - : Ce type contient des informations sur un onglet.
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : Indique si l'onglet a fini de charger.
- {{WebExtAPIRef("tabs.WindowType")}}
  - : Le type de fenêtre qui héberge cet onglet.
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : Définit si les modifications de zoom sont traitées par le navigateur, par l'extension ou sont désactivées.
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : Définit si les modifications de zoom persisteront pour l'origine de la page ou ne prendront effet que dans cet onglet.
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : Définit les paramètres de zoom {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}}, et le facteur de zoom par défaut.

## Propriétés

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : Une valeur d'id spéciale donnée aux onglets qui ne sont pas des onglets de navigation (par exemple, les onglets dans les fenêtres _devtools_).

## Fonctions

- {{WebExtAPIRef("tabs.captureTab()")}}
  - : Crée un URI de données codant une image de la zone visible de l'onglet donné.
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : Crée un URI de données codant une image de la zone visible de l'onglet actuellement actif dans la fenêtre donnée.
- {{WebExtAPIRef("tabs.connect()")}}
  - : Définit une connexion pour échanger des messages entre les scripts d'arrière-plan de l'extension (ou d'autres scripts privilégiés, tels que les scripts de [popups](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) ou les scripts de page d'options) et les [scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) s'exécutant dans l'onglet spécifié.
- {{WebExtAPIRef("tabs.create()")}}
  - : Crée un nouvel onglet.
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : Détecte la langue principale du contenu dans un onglet.
- {{WebExtAPIRef("tabs.discard()")}}
  - : Évince un ou plusieurs onglets.
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : Duplique un onglet.
- {{WebExtAPIRef("tabs.executeScript()")}}
  - : Injecte du code JavaScript dans une page.
- {{WebExtAPIRef("tabs.get()")}}
  - : Obtient des détails sur l'onglet spécifié.
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : Obtient des détails sur tous les onglets de la fenêtre spécifiée.
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : Obtient des informations sur l'onglet dans lequel ce script s'exécute, en tant qu'objet {{WebExtAPIRef("tabs.Tab")}}.
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : Obtient l'onglet sélectionné dans la fenêtre spécifiée. **Deprecated: utilisez plutôt [`tabs.query({active: true})`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query).**
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : Obtient le facteur de zoom actuel de l'onglet spécifié.
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : Obtient les paramètres de zoom actuels pour l'onglet spécifié.
- {{WebExtAPIRef("tabs.goForward()")}}
  - : Passez à la page suivante, si vous en avez une.
- {{WebExtAPIRef("tabs.goBack()")}}
  - : Retour à la page précédente, si elle est disponible.
- {{WebExtAPIRef("tabs.hide()")}} {{experimental_inline}}
  - : Masque un ou plusieurs onglets.
- {{WebExtAPIRef("tabs.highlight()")}}
  - : Met en évidence un ou plusieurs onglets.
- {{WebExtAPIRef("tabs.insertCSS()")}}
  - : Injecte CSS dans une page.
- {{WebExtAPIRef("tabs.move()")}}
  - : Déplace un ou plusieurs onglets vers une nouvelle position dans la même fenêtre ou vers une autre fenêtre.
- {{WebExtApiRef("tabs.moveInSuccession()")}}
  - : Modifie la relation de succession pour un groupe d'onglets.
- {{WebExtAPIRef("tabs.print()")}}
  - : Imprime le contenu de l'onglet actif.
- {{WebExtAPIRef("tabs.printPreview()")}}
  - : Ouvre l'aperçu avant impression pour l'onglet actif.
- {{WebExtAPIRef("tabs.query()")}}
  - : Obtient tous les onglets ayant les propriétés spécifiées, ou tous les onglets si aucune propriété n'est spécifiée.
- {{WebExtAPIRef("tabs.reload()")}}
  - : Recharge un onglet, en contournant éventuellement le cache web local.
- {{WebExtAPIRef("tabs.remove()")}}
  - : Ferme un ou plusieurs onglets.
- {{WebExtAPIRef("tabs.removeCSS()")}}
  - : Supprime d'une page CSS qui a été précédemment injectée en appelant {{WebExtAPIRef("tabs.insertCSS()")}}.
- {{WebExtAPIRef("tabs.saveAsPDF()")}}
  - : Enregistre la page en cours au format PDF.
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : Envoie un message unique au(x) script(s) de contenu dans l'onglet spécifié.
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : Envoie une requête unique au(x) script(s) de contenu dans l'onglet spécifié. **Déprécié&nbsp;:** utilisez {{WebExtAPIRef("tabs.sendMessage()")}} à la place.
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : Effectue un zoom sur l'onglet spécifié.
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : Définit les paramètres de zoom pour l'onglet spécifié.
- {{WebExtAPIRef("tabs.show()")}} {{experimental_inline}}
  - : Affiche un ou plusieurs onglets qui ont été {{WebExtAPIRef("tabs.hide()", "masqués")}}.
- {{WebExtAPIRef("tabs.toggleReaderMode()")}}
  - : Bascule en mode lecture pour l'onglet spécifié.
- {{WebExtAPIRef("tabs.update()")}}
  - : Charge une nouvelle URL dans l'onglet, ou modifie d'autres propriétés de l'onglet.

## Évènements

- {{WebExtAPIRef("tabs.onActivated")}}
  - : Est émis lorsque l'onglet actif dans une fenêtre change. Notez que l'URL de l'onglet peut ne pas être définie au moment où cet évènement a été émis.
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : Est émis lorsque l'onglet sélectionné dans une fenêtre change. **Déprécié&nbsp;:** utilisez {{WebExtAPIRef("tabs.onActivated")}} à la place.
- {{WebExtAPIRef("tabs.onAttached")}}
  - : Est émis lorsqu'un onglet est attaché à une fenêtre, par exemple parce qu'il a été déplacé entre différentes fenêtres.
- {{WebExtAPIRef("tabs.onCreated")}}
  - : Est émis lorsqu'un onglet est créé. Notez que l'URL de l'onglet peut ne pas être définie au moment où cet évènement a été émis.
- {{WebExtAPIRef("tabs.onDetached")}}
  - : Est émis lorsqu'un onglet est détaché d'une fenêtre, par exemple parce qu'il a été déplacé entre différentes fenêtres.
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : Est émis lorsque les onglets en surbrillance ou sélectionnés dans une fenêtre changent. **Déprécié&nbsp;:** utilisez {{WebExtAPIRef("tabs.onHighlighted")}} à la place.
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : Est émis lorsque les onglets en surbrillance ou sélectionnés dans une fenêtre changent.
- {{WebExtAPIRef("tabs.onMoved")}}
  - : Est émis lorsqu'un onglet est déplacé dans une fenêtre.
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : Est émis lorsqu'un onglet est fermé.
- {{WebExtAPIRef("tabs.onReplaced")}}

  - : Est émis lorsqu'un onglet est remplacé par un autre onglet en raison d'un

    <i lang="en">prerendering</i>

    .

- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : Est émis lorsque l'onglet sélectionné dans une fenêtre change. **Déprécié&nbsp;:** utilisez {{WebExtAPIRef("tabs.onActivated")}} à la place.
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : Est émis lorsqu'un onglet est mis à jour.
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : Est émis lorsque le zoom dans un onglet est changé.

## Compatibilité des navigateurs

{{Compat("webextensions.api.tabs")}}

{{WebExtExamples("h2")}}

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
