---
title: omnibox.OnInputEnteredDisposition
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
tags:
  - API
  - Add-ons
  - Extensions
  - OnInputEnteredDisposition
  - Reference
  - Type
  - WebExtensions
  - omnibox
translation_of: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
---
<div>{{AddonSidebar()}}</div>

<p>Le type <strong><code>omnibox.OnInputEnteredDisposition</code></strong> décrit comment l'extension doit gérer une sélection d'utilisateur à partir des suggestions dans la liste déroulante de la barre d'adresse.</p>

<p>Il est passé dans l'écouteur {{WebExtAPIRef("omnibox.onInputEntered")}} avec la sélection elle-même.</p>

<h2 id="Type">Type</h2>

<p>Les valeurs de ce type sont des chaînes. Ils peuvent prendre l'une des valeurs suivantes :</p>

<dl>
 <dt>"currentTab"</dt>
 <dd>Ouvrez la sélection dans l'onglet actuel.</dd>
 <dt>"newForegroundTab"</dt>
 <dd>Ouvrez la sélection dans un nouvel onglet et placez ce nouvel onglet au premier plan.</dd>
 <dt>"newBackgroundTab"</dt>
 <dd>Ouvrez la sélection dans un nouvel onglet d'arrière-plan, en conservant l'onglet en cours au premier plan.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.omnibox.OnInputEnteredDisposition")}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/omnibox"><code>chrome.omnibox</code></a>.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>
