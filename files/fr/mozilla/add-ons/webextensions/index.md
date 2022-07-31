---
title: WebExtensions
slug: Mozilla/Add-ons/WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions
---
{{AddonSidebar}}

Les extensions, ou modules complémentaires, peuvent étendre et modifier les fonctionnalités d'un navigateur. Les extensions pour Firefox sont construites avec l'API WebExtensions qui fonctionnent pour les différents navigateurs.

La technologie d'extensions Firefox est, en grande partie, compatible avec l'[API d'extension](https://developer.chrome.com/extensions) prise en charge par les navigateurs Chromium tels que Google Chrome, Microsoft Edge et Opera. Dans la plupart des cas, les extensions écrites dans ces navigateurs fonctionnent sur Firefox avec [seulement quelques modifications](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/).

## Ressources principales

- Guides
  - : Que vous débutiez ou soyez à la recherche de conseils plus avancés, apprenez comment fonctionnent les extensions et comment utiliser l'API WebExtensions grâce à notre large variété de [tutoriels et guides](/fr/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions).
- Références
  - : Obtenez des détails complets sur les méthodes, les propriétés, les types et les événements des [API WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) et des informations détaillées sur les [clés du manifeste](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Flux de travail pour Firefox
  - : Découvrez comment créer et publier des extensions pour Firefox : plongez dans le fonctionnement des outils de développement, de la publication, de la distribution, et du portage avec [l'atelier des extensions Firefox](https://extensionworkshop.com/).

> **Note :** Si vous avez des idées, des questions ou si vous avez besoin d'aide, vous pouvez nous contacter sur [le forum communautaire](https://discourse.mozilla.org/c/add-ons) ou sur [le salon Add-ons](https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org?via=mozilla.org&via=matrix.org&via=humanoids.be) sur [Matrix](https://wiki.mozilla.org/Matrix).

## Premiers pas

Découvrez [ce que peuvent faire les extensions Firefox](/fr/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions) avant [de construire votre première extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension). Découvrez [la structure d'une extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) et obtenez un aperçu [du processus de développement et de publication d'extension pour Firefox](/fr/docs/Mozilla/Add-ons/WebExtensions/Firefox_workflow_overview). Explorez un peu plus en profondeur leur fonctionnement avec un large éventail d'[exemples d'extensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Examples) que vous pouvez exécuter directement sur Firefox.

## Concepts

Obtenez des informations détaillées sur les concepts fondamentaux des extensions [à l'aide d'une vue d'ensemble de l'API JavaScript](/fr/docs/Mozilla/Add-ons/WebExtensions/API), en passant par les [scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)[,](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) les [motifs de correspondance](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), [la manipulation des fichiers](/fr/docs/Mozilla/Add-ons/WebExtensions/Working_with_files), [l'internationalisation](/fr/docs/Mozilla/Add-ons/WebExtensions/Internationalization), et [les politiques de sécurité du contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy), jusqu'à des sujets plus avancés tels que les [messages natifs](/fr/docs/Mozilla/Add-ons/WebExtensions/Native_messaging), [l'utilisation des API pour les outils de développement](/fr/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools), et [des manifestes natifs](/fr/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

## Interface utilisateur

Découvrez tous les composants que vous pouvez utiliser pour [l'interface utilisateur](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) de vos extensions, avec des exemples contenant des astuces et leur code.

## Tutoriels

Vous trouverez une série de tutoriels pour vous aider à commencer et qui abordent des notions que vous utiliserez régulièrement, tels que [la manipulation des onglets avec l'API Tabs](/fr/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API), [l'ajout d'un bouton à la barre d'outils](/fr/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar) ainsi que des sujets plus avancés tels que [l'interception des requêtes HTTP](/fr/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests) et [la gestion des identités contextuelles](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

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

Obtenez tous les détails sur [les clés du manifeste d'une extension](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json), y compris toutes leurs propriétés et paramètres. Vous y trouverez également des informations détaillées sur la [compatibilité](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) de chaque clé pour les principaux navigateurs.
