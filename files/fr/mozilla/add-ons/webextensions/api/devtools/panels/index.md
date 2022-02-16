---
title: devtools.panels
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - devtools.panels
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.panels
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.panels
---
{{AddonSidebar}}

> **Note :** Bien que les API soient basées sur les [APIs de devtools de Chrome](https://developer.chrome.com/extensions/devtools), il existe encore de nombreuses fonctionnalités qui ne sont pas encore implémentées dans Firefox et ne sont donc pas documentées ici. Pour voir les fonctionnalités actuellement manquantes, regarder  [Limitations des APIs devtools](/fr/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs).

L'API devtools.panels permet à une extension devtools de définir son interface utilisateur à l'intérieur de la fenêtre devtools.

La fenêtre devtools héberge un certain nombre d'outils distincts - le débogueur JavaScript, le moniteur réseau, etc. Une rangée d'onglets sur le haut permet à l'utilisateur de basculer entre les différents outils. La fenêtre hébergeant l'interface utilisateur de chaque outil s'appelle un "panneau".

Avec l'API devtools.panels, vous pouvez créer de nouveaux panneaux dans la fenêtre des devtools.

Comme toutes les API de devtools, cette API est uniquement disponible pour le code exécuté dans le document défini dans la clé [devtools_page](/fr/Add-ons/WebExtensions/manifest.json/devtools_page) du manifest.json, ou dans d'autres documents de déploiement créés par une extension (tel que le document du panneau). Voir [Extension des outils de développement](/fr/Add-ons/WebExtensions/Extending_the_developer_tools) pour plus for d'informations.

## Types

- [`devtools.panels.ElementsPanel`](/fr/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel)
  - : Représente l'inspecteur HTML/CSS dans le devtools du navigateur
- [`devtools.panels.ExtensionPanel`](/fr/Add-ons/WebExtensions/API/devtools.panels/ExtensionPanel)
  - : Représente un panneau de déploiement créé par l'extension.
- [`devtools.panels.ExtensionSidebarPane`](/fr/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane)
  - : Représente un volet ajouté par une extension à l'inspecteur HTML/CC dans les devtools du navigateur.

## Propriétés

- [`devtools.panels.elements`](/fr/Add-ons/WebExtensions/API/devtools.panels/elements)
  - : Une référence à un objet [`ElementsPanel`](/fr/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel).
- [`devtools.panels.themeName`](/fr/Add-ons/WebExtensions/API/devtools.panels/themeName)
  - : Le nom du thème actuel des devtools.

## Fonctions

- [`devtools.panels.create()`](/fr/Add-ons/WebExtensions/API/devtools.panels/create)
  - : Créé un nouveau panneau de développement

## Evénements

- [`devtools.panels.onThemeChanged`](/fr/Add-ons/WebExtensions/API/devtools.panels/onThemeChanged)
  - : Mise en place lorsque le thème Devtools change.

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.panels", 2)}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels).
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
