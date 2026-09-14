---
title: Extensions de navigateur
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Les extensions, ou modules complémentaires, peuvent modifier et améliorer les fonctionnalités d'un navigateur. Les extensions pour Firefox s'appuient sur la technologie inter-navigateurs de l'API WebExtensions.

Dans une large mesure, la technologie des extensions dans Firefox est compatible avec [l'API d'extension <sup>(angl.)</sup>](https://developer.chrome.com/docs/extensions/reference/) prise en charge par les navigateurs fondés sur Chromium (comme Google Chrome, Microsoft Edge, Opera et Vivaldi). Dans la plupart des cas, les extensions écrites pour les navigateurs fondés sur Chromium s'exécutent dans Firefox avec [quelques modifications seulement <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/).

## Ressources principales

- Guides
  - : Que vous débutiez ou que vous cherchiez des conseils plus avancés, apprenez comment fonctionnent les extensions et comment utiliser l'API WebExtensions grâce à notre vaste sélection de [tutoriels et guides](/fr/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions).
- Références
  - : Obtenez des informations complètes sur les méthodes, les propriétés, les types et les évènements des [API WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs), ainsi que tous les détails sur les [clés du manifeste](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Processus de Firefox
  - : Découvrez comment créer et publier des extensions pour Firefox&nbsp;: obtenez des informations sur les outils de développement, la publication et la distribution, ainsi que sur le portage dans [un atelier des extensions <sup>(angl.)</sup>](https://extensionworkshop.com/).

> [!NOTE]
> Si vous avez des idées ou des questions, ou si vous avez besoin d'aide, vous pouvez nous joindre sur le [forum de la communauté <sup>(angl.)</sup>](https://discourse.mozilla.org/c/add-ons/35) ou dans le [salon des modules complémentaires <sup>(angl.)</sup>](https://matrix.to/#/#addons:mozilla.org) sur [Matrix <sup>(angl.)</sup>](https://wiki.mozilla.org/Matrix).

## Commencer

Découvrez [ce que les extensions peuvent faire](/fr/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions) avant de concevoir [votre première extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) et [votre deuxième extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension). Découvrez [l'anatomie d'une extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) et obtenez une vue d'ensemble du [processus de développement et de publication des extensions, selon les pratiques de Firefox <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/). Approfondissez vos connaissances avec une sélection complète des [extensions d'exemple](/fr/docs/Mozilla/Add-ons/WebExtensions/Examples) que vous pouvez exécuter directement dans Firefox. Poursuivez votre apprentissage en [découvrant une liste de ressources](/fr/docs/Mozilla/Add-ons/WebExtensions/What_next) à consulter.

## Concepts

Obtenez des informations détaillées sur les concepts qui servent de base aux extensions.

- [Présentation de l'API JavaScript](/fr/docs/Mozilla/Add-ons/WebExtensions/API)
- [Scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Scripts d'arrière-plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)
- [Motifs de correspondance](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [Travailler avec des fichiers](/fr/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Internationalisation](/fr/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Politique de sécurité du contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Messagerie native](/fr/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Manifestes natifs](/fr/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)
- [Actions utilisateur](/fr/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Différences entre les implémentations d'API](/fr/docs/Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations)
- [Incompatibilités avec Chrome](/fr/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)

## Interface utilisateur

Découvrez tous les composants de [l'interface utilisateur](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface) que vous pouvez utiliser dans vos extensions, avec des exemples de code et des conseils.

## Comment faire

Une série de tutoriels pour vous lancer dans certains aspects du développement des extensions.

- [Intercepter des requêtes HTTP](/fr/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Modifier une page web](/fr/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Insérer du contenu externe dans une page en toute sécurité](/fr/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)
- [Partager des objets avec des scripts de page](/fr/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Ajouter un bouton à la barre d'outils](/fr/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Implémenter une page de paramètres](/fr/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Travailler avec l'API des onglets](/fr/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Travailler avec l'API Bookmarks](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Travailler avec l'API Cookies](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Travailler avec les identités contextuelles](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [Interagir avec le presse-papiers](/fr/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Étendre les outils de développement](/fr/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Concevoir une extension inter-navigateurs](/fr/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)

## Processus de Firefox

Lorsque vous êtes prêt·e à créer votre extension pour Firefox ou à porter votre extension Chrome, consultez [un atelier des extensions <sup>(angl.)</sup>](https://extensionworkshop.com/). Vous y trouvez des informations sur&nbsp;:

- Le processus de Firefox, notamment [installer temporairement des extensions pendant le développement <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [déboguer <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/debugging/), [demander les bonnes permissions <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/), et plus encore.
- [L'outil de développement web-ext <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).
- [Porter une extension Google Chrome <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/), [les différences entre ordinateur et Android <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/), et plus encore.
- [Présentation de la publication et de la distribution <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/publish/), [promouvoir votre extension <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/publish/promoting-your-extension/), les [bonnes pratiques du cycle de vie des extensions <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/manage/), et plus encore.

## Référence

### Les API JavaScript

Obtenez des informations complètes sur les méthodes, les propriétés, les types et les évènements de toutes les [API JavaScript](/fr/docs/Mozilla/Add-ons/WebExtensions/API). Vous trouvez également des informations détaillées sur la compatibilité de chaque API avec les principaux navigateurs. La plupart des pages de référence contiennent aussi des exemples de code et des liens vers les exemples d'extensions qui utilisent l'API.

### Clés du manifeste

Obtenez tous les détails sur les [clés du manifeste](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json), y compris toutes leurs propriétés et leurs paramètres.
