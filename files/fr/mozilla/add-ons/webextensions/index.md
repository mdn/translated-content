---
title: WebExtensions
slug: Mozilla/Add-ons/WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions
sidebar: addonsidebar
---


Les extensions, ou modules complémentaires, peuvent étendre et modifier les fonctionnalités d'un navigateur. Les extensions pour Firefox sont construites avec l'API WebExtensions qui fonctionnent pour les différents navigateurs.

La technologie d'extensions Firefox est, en grande partie, compatible avec l'[API d'extension](https://developer.chrome.com/extensions) prise en charge par les navigateurs Chromium tels que Google Chrome, Microsoft Edge et Opera. Dans la plupart des cas, les extensions écrites dans ces navigateurs fonctionnent sur Firefox avec [seulement quelques modifications](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/).

## Ressources principales

- Guides
  - : Que vous débutiez ou soyez à la recherche de conseils plus avancés, apprenez comment fonctionnent les extensions et comment utiliser l'API WebExtensions grâce à notre large variété de [tutoriels et guides](/fr/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions).
- Références
  - : Obtenez des détails complets sur les méthodes, les propriétés, les types et les événements des [API WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) et des informations détaillées sur les [clés du manifeste](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Flux de travail pour Firefox
  - : Découvrez comment créer et publier des extensions pour Firefox : plongez dans le fonctionnement des outils de développement, de la publication, de la distribution, et du portage avec [l'atelier des extensions Firefox](https://extensionworkshop.com/).

> [!NOTE]
> Si vous avez des idées, des questions ou si vous avez besoin d'aide, vous pouvez nous contacter sur [le forum communautaire](https://discourse.mozilla.org/c/add-ons) ou sur [le salon Add-ons](https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org?via=mozilla.org&via=matrix.org&via=humanoids.be) sur [Matrix](https://wiki.mozilla.org/Matrix).

## Premiers pas

Découvrez [ce que peuvent faire les extensions Firefox](/fr/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions) avant [de construire votre première extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension). Découvrez [la structure d'une extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) et obtenez un aperçu [du processus de développement et de publication d'extension pour Firefox](/fr/docs/Mozilla/Add-ons/WebExtensions/Firefox_workflow_overview). Explorez un peu plus en profondeur leur fonctionnement avec un large éventail d'[exemples d'extensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Examples) que vous pouvez exécuter directement sur Firefox.

## Concepts

Obtenez des informations détaillées sur les concepts fondamentaux des extensions.

- [Vue d'ensemble de l'API JavaScript](/fr/docs/Mozilla/Add-ons/WebExtensions/API)
- [Scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Scripts en arrière-plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)
- [Motifs de correspondance](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [Manipulation des fichiers](/fr/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Internationalisation](/fr/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Politiques de sécurité du contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Messages natifs](/fr/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Manifestes natifs](/fr/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)
- [Actions utilisateurs](/fr/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Différences entre les implémentations d'API](/fr/docs/Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations)
- [Incompatibilités avec Chrome](/fr/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)

## Interface utilisateur

Découvrez tous les composants que vous pouvez utiliser pour [l'interface utilisateur](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) de vos extensions, avec des exemples contenant des astuces et leur code.


## Tutoriels

Une série de tutoriels pour vous aider à démarrer dans des aspects spécifiques du développement d'extensions.

- [Interception des requêtes HTTP](/fr/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Modifier une page web](/fr/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Insérer en toute sécurité du contenu externe dans une page](/fr/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)
- [Partage d'objets avec des scripts de page](/fr/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Ajout d'un bouton à la barre d'outils](/fr/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Implémenter une page de paramètres](/fr/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Manipulation des onglets avec l'API Tabs](/fr/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Travailler avec l'API Bookmarks](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Travailler avec l'API Cookies](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Gestion des identités contextuelles](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [Interagir avec le presse-papier](/fr/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Extension des outils de développement](/fr/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Construction d'une extension multi-navigateur](/fr/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)

## Construction et distribution pour Firefox

Lorsque vous êtes prête ou prêt à créer votre extension Firefox ou à porter une extension Chrome vers Firefox, dirigez-vous vers l'[atelier des extensions Firefox](https://extensionworkshop.com/). Vous y trouverez des détails sur :

- Le circuit pour les extensions Firefox, comme [l'installation temporaire d'extensions pendant le développement](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [le débogage](https://extensionworkshop.com/documentation/develop/debugging/), [la demande des permissions pertinentes](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/), et plus encore.
- L'outil de développement [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).
- [Le portage d'une extension de Chrome à Firefox](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/), [les différences entre les extensions de bureau et celles pour Android](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/), et plus encore.
- [Une vue d'ensemble de la publication, de la distribution](https://extensionworkshop.com/documentation/publish/) et de [la promotion de votre extension](https://extensionworkshop.com/documentation/publish/promoting-your-extension/), les [bonnes pratiques en matière de cycle de vie des extensions](https://extensionworkshop.com/documentation/manage/), et plus encore.

## Référence

### Les API JavaScript

Obtenez des détails complets sur les méthodes, les propriétés, les types et les événements pour l'ensemble [des API JavaScript relatives aux extensions](/fr/docs/Mozilla/Add-ons/WebExtensions/API). Vous trouverez également des informations détaillées sur la compatibilité de chaque API avec les principaux navigateurs. La plupart des pages de référence comprennent également des exemples d'implémentation et des liens vers des exemples d'extensions qui utilisent l'API.

### Les clés du manifeste

Obtenez tous les détails sur [les clés du manifeste d'une extension](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json), y compris toutes leurs propriétés et paramètres.
