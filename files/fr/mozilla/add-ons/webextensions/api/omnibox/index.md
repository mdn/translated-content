---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - omnibox
translation_of: Mozilla/Add-ons/WebExtensions/API/omnibox
---
<div>{{AddonSidebar}}</div>

<p>Permet aux extensions d'implémenter un comportement personnalisé lorsque l'utilisateur tape dans la barre d'adresse du navigateur.</p>

<p>Lorsque l'utilisateur se concentre sur la barre d'adresse du navigateur et commence à taper, le navigateur affiche une liste déroulante contenant des pages suggérées, en fonction de ce qu'ils ont tapé. Cela permet à l'utilisateur d'accéder rapidement, par exemple, aux pages de son historique ou de ses favoris.</p>

<p>L'API omnibox fournit à l'extension un moyen de personnaliser les suggestions affichées dans la liste déroulante, lorsque l'utilisateur saisit un mot clé défini par l'extension. Cela fonctionne comme suit:...</p>

<ol>
 <li>Tout d'abord, l'extension doit inclure une clé "<a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox">omnibox</a>" dans le fichier <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> qui définit un mot-clé.</li>
 <li>Lorsque l'utilisateur met la barre d'adresse en surbrillance et tape le mot-clé, suivi d'un espace, l'extension recevra un événement  {{WebExtAPIRef("omnibox.onInputStarted")}}.</li>
 <li>Facultativement, l'extension peut appeler  {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} pour définir la première suggestion qui sera affichée dans la liste déroulante de la barre d'adresse.</li>
 <li>Comme l'utilisateur continue à taper des caractères après cela, l'extension recevra {{WebExtAPIRef("omnibox.onInputChanged")}} événements. L'écouteur d'événement recevra la valeur actuelle que l'utilisateur a saisie et pourra remplir la liste déroulante de la barre d'adresse avec des suggestions. Si l'extension définit une suggestion par défaut en utilisant {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}, elle apparaît en premier dans la liste déroulante.</li>
 <li>Si l'utilisateur accepte une suggestion, l'extension recevra un événement  {{WebExtAPIRef("omnibox.onInputEntered")}}. L'écouteur d'événement recevra la suggestion acceptée.</li>
 <li>Si l'utilisateur supprime la liste déroulante, l'extension recevra un événement {{WebExtAPIRef("omnibox.onInputCancelled")}}.</li>
</ol>

<h2 id="Types">Types</h2>

<dl>
 <dt>{{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}</dt>
 <dd>Décrit la méthode recommandée pour gérer la suggestion sélectionnée: ouvrir dans l'onglet actuel, ouvrir dans un nouvel onglet de premier plan ou ouvrir dans un nouvel onglet d'arrière-plan.</dd>
 <dt>{{WebExtAPIRef("omnibox.SuggestResult")}}</dt>
 <dd>Objet représentant une suggestion à ajouter à la liste déroulante de la barre.</dd>
</dl>

<h2 id="Fonctions">Fonctions</h2>

<dl>
 <dt>{{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}</dt>
 <dd>Définit la première suggestion qui apparaît dans la liste déroulante lorsque l'utilisateur entre le mot clé pour votre extension, suivi d'un espace.</dd>
</dl>

<h2 id="Evénements">Evénements</h2>

<dl>
 <dt>{{WebExtAPIRef("omnibox.onInputStarted")}}</dt>
 <dd>Lancé lorsque l'utilisateur met la barre d'adresse en surbrillance et tape le mot clé omnibox de votre extension, suivi d'un espace.</dd>
 <dt>{{WebExtAPIRef("omnibox.onInputChanged")}}</dt>
 <dd>Déclenché chaque fois que l'utilisateur change d'entrée, après avoir focalisé la barre d'adresse et tapé le mot clé omnibox de votre extension, suivi d'un espace.</dd>
 <dt>{{WebExtAPIRef("omnibox.onInputEntered")}}</dt>
 <dd>Lancé lorsque l'utilisateur accepte l'une des suggestions de votre extension.</dd>
 <dt>{{WebExtAPIRef("omnibox.onInputCancelled")}}</dt>
 <dd>Lancé lorsque l'utilisateur supprime la liste déroulante de la barre d'adresse, après avoir défini la barre d'adresse et tapé le mot clé omnibox de votre extension.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.omnibox")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/omnibox"><code>chrome.omnibox</code></a>.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>
