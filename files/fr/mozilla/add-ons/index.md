---
title: Modules
slug: Mozilla/Add-ons
tags:
  - Add-ons
  - Extensions
  - Landing
  - Modules
  - Mozilla
translation_of: Mozilla/Add-ons
---
{{AddonSidebar}}

Les modules complémentaires (_add-ons_) permettent aux développeurs d'ajouter et de modifier les fonctionnalités de Firefox. Les modules sont écrits à l'aide de technologies web standard : JavaScript, HTML, et CSS - et d'API JavaScript spécifiques à ces modules. Un module complémentaire peut, par exemple, être utilisé pour :

- Modifier l'apparence ou le contenu de certains sites web
- Modifier l'interface utilisateur de Firefox
- Ajouter de nouvelles fonctionnalités à Firefox

Il y a plusieurs types de modules complémentaires _(add-ons)_, mais le plus courant est l'extension.

## Développer des modules complémentaires

Par le passé, il a existé différents outils et formats pour développer des modules complémentaires pour Firefox. Cependant,depuis Novembre 2017, les [WebExtensions](/fr/Add-ons/WebExtensions) sont devenues le format standard. Les autres outils (le SDK Add-On par exemple) sont maintenant dépréciés.

[En savoir plus à propos des WebExtensions](/fr/Add-ons/WebExtensions)

Si vous développez un nouveau module complémentaire, nous vous recommandons d'utiliser WebExtension.

Les extensions qui respectent le format WebExtensions de Firefox sont conçues pour pouvoir être utilisées sur différents navigateurs. Les extensions WebExtensions écrites pour Firefox fonctionneront pour la plupart dans Chrome, Edge et Opera, nécessitant peu, si ce n'est aucun changements. Elles sont également compatibles avec le mode multi-processus de Firefox.

[Voici la liste des API actuellement prises en charge par Firefox et les autres navigateurs](/fr/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Nous continuons à concevoir et à implémenter de nouvelles API afin de répondre aux besoins des développeurs.

La plupart des API utilisées pour WebExtension sont également disponibles pour Firefox pour Android.

### L'atelier des extensions Firefox _(Extension Workshop)_

L'[atelier des extensions firefox _(Extension Workshop)_](https://extensionworkshop.com/) est utile pour aider à développer une extension pour Firefox en offrant à l'utilisateur une façon simple et efficace de personnaliser sa navigatrion sur internet. On peut notamment y trouver :

- [Une vue d'ensemble des fonctionnalités des extensions Firefox](https://extensionworkshop.com/#about)
- [Les outils et les procédés pour développer et tester son application](https://extensionworkshop.com/documentation/develop/)
- [Comment publier son extensions sur addons.mozilla.org et la distribuer](https://extensionworkshop.com/documentation/publish/)
- [Comment gérer son extension, une fois celle-ci publiée](https://extensionworkshop.com/documentation/manage/)
- [Guide pour développer et utiliser une extension pour les entreprises](https://extensionworkshop.com/documentation/enterprise/)
- [Comment développer un thème pour Firefox](https://extensionworkshop.com/documentation/themes/)
- [La communauté de Firefox (Firefox Community)](https://extensionworkshop.com/community/)

### Les extensions pour Firefox pour Android

En 2020, Mozilla sortira une nouvelle expérience Firefox pour Android. Le nouveau Firefox ultra-performant pour Android a été entièrement repensé avec [GeckoView](https://mozilla.github.io/geckoview/), le nouveau moteur de rendu pour mobiles de Mozilla. Nous travaillons actuellement à la création d'un support pour WebExtensions sur GeckoView.

### Migrer un module existant

Si vous maintenez un module complémentaire historique utilisant XUL ou le SDK Add-on, nous vous recommandons de le porter vers une extension WebExtensions. [Voici quelques ressources MDN à propos du portage d'extension](/fr/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on).

Nous avons rassemblé [un ensemble de ressources](https://wiki.mozilla.org/Add-ons/developer/communication) sur un page wiki afin d'aider les développeurs pendant cette phase de transition. Pour commencer, vous pouvez utiliser l'outil [Lookup](https://compatibility-lookup.services.mozilla.com/) afin de détecter si votre module complémentaire est impacté.

## Publier des modules

[addons.mozilla.org](https://addons.mozilla.org), aussi appelé AMO, est le site officiel de Mozilla sur lequel sont publiés les modules complémentaires et que les utilisateurs peuvent parcourir pour découvrir de nouveaux modules. Publier un module complémentaire sur AMO permet d'entretenir la communauté d'utilisateurs et de créateurs de modules. C'est également une ressource essentielle pour qu'un module puisse être découvert.

Il n'est pas nécessaire que votre module soit publié sur AMO. En revanche, votre module doit être signé par Mozilla afin que les utilisateurs puissent l'installer.

[Dans cet article](/fr/Add-ons/Distribution), vous trouverez différentes informations relatives au processus de publication de son module.

## Les autres types de modules

Généralement, lorsqu'on évoque les modules complémentaires, on parle des extensions. Ceci étant dit, il existe d'autres types de modules qui permettent aux utilisateurs de personnaliser Firefox. Ces modules peuvent être :

- [Des thèmes légers](/fr/Add-ons/Thèmes/Fond) : un outil simple qui permet de personnaliser Firefox de façon limitée
- [Les modules mobiles](/fr/docs/Extensions/Mobile) : des modules complémentaires destinés à Firefox pour Android. Attention, certaines des API utilisées pour ces modules sont dépréciées (ou le seront dans un avenir proche). Par la suite, Firefox pour Android prendra pleinement en charge le format WebExtension
- [Des plugins pour les moteurs de recherche](/fr/Add-ons/Creating_OpenSearch_plugins_for_Firefox) qui permettent d'ajouter de nouveaux moteurs de recherche à la barre de recherche du navigateur
- [Des dictionnaires utilisateur](/fr/docs/Mozilla/Creating_a_spell_check_dictionary_add-on) qui permettent d'utiliser la vérification orthographique dans différentes langues
- [Des packs de langues](https://support.mozilla.org/kb/use-firefox-interface-other-languages-language-pack) qui permettent de traduire l'interface de Firefox dans plus de langues.

## Nous contacter

Vous pouvez utiliser les liens qui suivent pour demander de l'aide, être tenu-e informé-e des actualités concernant les modules complémentaires et nous fournir vos retours.

### Forum

[Le forum Discourse dédié aux modules complémentaires](https://discourse.mozilla-community.org/c/add-ons) est un lieu où discuter du développement de modules complémentaires et où demander de l'aide.

### Liste de diffusion

La liste de diffusion **dev-addons** (anglophone) est utilisée afin de discuter du développement des modules complémentaires et de leur environnement. Les thèmes abordés incluent le format WebExtensions et AMO (<https://addons.mozilla.org>) :

- [Informations sur la liste dev-addons](https://mail.mozilla.org/pipermail/dev-addons/)
- [Archives de la liste dev-addons](https://mail.mozilla.org/pipermail/dev-addons/)

### IRC

Si vous utilisez IRC, vous pouvez utiliser ces canaux (anglophones) :

- [#addons](irc://irc.mozilla.org/addons) (discussions sur l'écosystème des modules complémentaires)
- [#extdev](irc://irc.mozilla.org/extdev) (discussions sur le développement des modules complémentaires)
- [#webextensions](irc://irc.mozilla.org/webextensions) (discussion sur les modules de type WebExtensions)
