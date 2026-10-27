---
title: Anatomie d'une extension
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

Une extension est constituée d'un ensemble de fichiers regroupés en vue de leur distribution et de leur installation. Cet article décrit les fichiers pouvant se trouver dans une extension.

## manifest.json

Ce fichier est le seul qui doit obligatoirement figurer dans chaque extension. Il contient des métadonnées de base, telles que son nom, sa version et les autorisations requises.

Le manifeste peut également contenir des références à plusieurs autres types de fichiers&nbsp;:

- [Scripts d'arrière-plan](#scripts_darrière-plan)
  - : Les scripts qui répondent aux évènements du navigateur.
- Icônes
  - : Pour l'extension et tous les boutons qu'elle peut définir.
- [Barres latérales, fenêtres intrusives, et pages d'options](#barres_latérales_fenêtres_intrusives_et_pages_doptions)
  - : Les documents HTML qui fournissent du contenu pour divers composants de l'interface utilisateur.
- [Scripts de contenu](#scripts_de_contenu)
  - : JavaScript inclus avec votre extension, que votre extension injecte dans les pages Web.
- [Ressources accessibles depuis le Web](#ressources_accessibles_depuis_le_web)
  - : Contenu empaqueté rendu accessible aux pages Web et aux scripts de contenu.

![Les composants d'une extension. Le fichier manifest.json doit être présent dans toutes les extensions. Il fournit des pointeurs vers les pages d'arrière-plan, les scripts de contenu, les actions du navigateur, les actions de page, les pages d'options et les ressources accessibles depuis le Web. Les pages d'arrière-plan sont écrites en HTML et JavaScript. Les scripts de contenu sont écrits en JavaScript et CSS. L'utilisateur·ice clique sur une icône pour déclencher les actions du navigateur et les actions de page, qui peuvent afficher une fenêtre contextuelle composée de HTML, CSS et JavaScript. Les pages d'options sont composées de HTML, CSS et JavaScript.](webextension-anatomy.png)

Voir la page de référence [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json) pour tous les détails.

En plus de ceux énumérés dans le manifeste, une extension peut inclure des [pages d'extension](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) supplémentaires et des fichiers de prise en charge.

## Scripts d'arrière-plan

Les extensions doivent souvent répondre à des évènements qui se produisent dans le navigateur indépendamment de la durée de vie d'une page Web ou d'une fenêtre de navigateur particulière. C'est le rôle des scripts d'arrière-plan.

Les scripts d'arrière-plan peuvent être persistants ou non persistants.

- Les scripts d'arrière-plan persistants se chargent dès que l'extension est chargée et restent chargés jusqu'à ce que l'extension soit désactivée ou désinstallée. Seules les extensions Manifest V2 peuvent utiliser des scripts d'arrière-plan persistants.
- Les scripts d'arrière-plan non persistants se chargent lorsque c'est nécessaire pour répondre à un évènement et se déchargent lorsqu'ils deviennent inactifs. Les extensions Manifest V3 utilisent uniquement des scripts d'arrière-plan non persistants, et les extensions Manifest V2 peuvent opter pour ce comportement.

Vous pouvez utiliser n'importe laquelle des [API WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/API) dans le script, si vous avez demandé les [autorisations](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) nécessaires.

Consultez l'article sur les [scripts d'arrière-plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) pour en savoir plus.

## Barres latérales, fenêtres intrusives et pages d'options

Votre extension peut inclure divers composants d'interface utilisateur dont le contenu est défini à l'aide d'un document HTML&nbsp;:

- [Barre latérale](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : Un volet affiché à gauche de la fenêtre du navigateur, à côté de la page Web.
- [Fenêtre intrusive](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : Une boîte de dialogue affichée lorsque l'utilisateur·ice clique sur un [bouton de la barre d'outils](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ou un [bouton de la barre d'adresse](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [Options](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : Une page affichée lorsque l'utilisateur·ice accède aux préférences de votre extension dans le gestionnaire d'extensions natif du navigateur.

Pour chacun de ces composants, vous créez un fichier HTML et y faites référence en utilisant une propriété spécifique dans [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Le fichier HTML peut inclure des fichiers CSS et JavaScript, tout comme une page Web standard.

Tous ces composants sont des [pages d'extension](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Contrairement à une page Web normale, le JavaScript de votre extension peut utiliser les mêmes API WebExtensions privilégiées que votre script d'arrière-plan.

## Pages d'extension

Vous pouvez également inclure dans votre extension des documents HTML qui ne sont pas attachés à un composant d'interface utilisateur prédéfini. Contrairement aux documents que vous pouvez fournir pour les barres latérales, les fenêtres intrusives ou les pages d'options, ceux-ci n'ont pas d'entrée dans `manifest.json`. Cependant, ils ont également accès aux mêmes API WebExtensions privilégiées que votre script d'arrière-plan.

Vous chargez typiquement une page comme celle-ci en utilisant {{WebExtAPIRef("windows.create()")}} ou {{WebExtAPIRef("tabs.create()")}}.

Voir les [pages d'extension](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) pour en savoir plus.

## Scripts de contenu

Utilisez les scripts de contenu pour accéder et manipuler des pages Web. Les scripts de contenu sont chargés dans des pages Web et s'exécutent dans le contexte de cette page particulière.

Les scripts de contenu sont des scripts fournis par l'extension qui s'exécutent dans le contexte d'une page Web&nbsp;; cela diffère des scripts chargés par la page elle-même, y compris ceux fournis dans les éléments HTML {{HTMLElement("script")}} de la page.

Les scripts de contenu peuvent accéder et manipuler le DOM de la page, tout comme les autres scripts chargés par la page. Cependant, contrairement aux scripts de page normaux, les scripts de contenu peuvent&nbsp;:

- Utiliser un petit sous-ensemble des [API WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/API).
- [Échanger des messages avec leurs scripts d'arrière-plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communiquer_avec_les_scripts_darrière-plan), ce qu'un
  script de contenu peut utiliser pour demander au script d'arrière-plan de faire quelque chose en utilisant une API WebExtensions.

Les scripts de contenu ne peuvent pas accéder directement aux scripts de page normaux, mais peuvent échanger des messages avec eux en utilisant l'API standard [`window.postMessage()`](/fr/docs/Web/API/Window/postMessage).

Votre extension peut également injecter du CSS dans les pages Web en utilisant le mécanisme utilisé pour injecter des scripts de contenu.

Voir l'article sur les [scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) pour en savoir plus.

## Ressources accessibles depuis le web

Les ressources accessibles depuis le web sont des fichiers — tels que des images, HTML, CSS et JavaScript — que vous incluez dans l'extension et que vous souhaitez rendre accessibles aux scripts de contenu et aux scripts de page. Les ressources rendues accessibles depuis le web peuvent être référencées par les scripts de page et les scripts de contenu en utilisant un schéma d'URI spécifique.

Par exemple, si un script de contenu souhaite insérer des images sur des pages web, vous pouvez les inclure dans l'extension et les rendre accessibles depuis le web. Ensuite, le script de contenu peut créer et ajouter des balises [`img`](/fr/docs/Web/HTML/Reference/Elements/img) faisant référence aux images par l'attribut `src`.

Pour en savoir plus, consultez la documentation de la clé [`"web_accessible_resources"`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) du fichier `manifest.json`.
