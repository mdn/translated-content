---
title: Qu'est-ce que les WebExtensions ?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: 5d88855e1d963ca0b0c3c14aeaa6414f8386c64e
---

{{AddonSidebar}}

> **Note :** Si vous connaissez déjà les concepts de base pour les extensions de navigateur, vous pouvez passer cette section et voir directement [comment s'organisent les fichiers d'une extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Ensuite, utilisez [la documentation de référence](/fr/docs/Mozilla/Add-ons/WebExtensions#référence) pour commencer à construire votre extension. [L'atelier des extensions Firefox (en anglais)](https://extensionworkshop.com) vous permettra d'en savoir plus à propos des outils et méthodes de tests et de publication des extensions pour Firefox.

Une extension permet d'ajouter des fonctionnalités à un navigateur. Elles sont fabriquées à l'aide des technologies web usuelles&nbsp;: HTML, CSS, et JavaScript. Une extension peut utiliser les mêmes API JavaScript qu'une page web et dispose d'API JavaScript supplémentaires. Cela signifie qu'il est possible de faire plus avec une extension que ce qu'on peut faire avec une page web. Voici quelques exemples de ce qu'on peut construire.

## Améliorer ou compléter un site web

Une extension pourra être utilisée pour afficher des informations supplémentaires sur un site web et permettre aux personnes de collecter des informations sur les pages qu'elles visitent afin d'améliorer le service offert.

![](amazon_add_on.png)

Quelques exemples dans cette catégorie&nbsp;:

- [Assistant Amazon pour Firefox](https://addons.mozilla.org/fr/firefox/addon/amazon-browser-bar/),
- [OneNote Web Clipper](https://addons.mozilla.org/fr/firefox/addon/onenote-clipper/),
- [Grammarly pour Firefox](https://addons.mozilla.org/fr/firefox/addon/grammarly-1/).

## Permettre d'exprimer sa personnalité

Les extensions permettent de manipuler le contenu des pages web. On peut ainsi imaginer une extension qui permet aux utilisatrices et utilisateurs d'afficher leur logo et arrière-plan préférés sur chaque page visitée. Les extensions permettent également de modifier l'interface utilisateur du navigateur, pour le cas de Firefox, à [la façon des thèmes](https://extensionworkshop.com/documentation/themes/).

![](myweb_new_tab_add_on.png)

Quelques exemples dans cette catégorie&nbsp;:

- [MyWeb New Tab](https://chrome.google.com/webstore/detail/myweb-new-tab/cnbiadnhebmicjcbpgajglfemclnlagh),
- [Tabliss](https://addons.mozilla.org/fr/firefox/addon/tabliss/),
- [VivaldiFox](https://addons.mozilla.org/fr/firefox/addon/vivaldifox/).

## Ajouter ou retirer du contenu aux pages web

Une extension peut aider les personnes à bloquer les publicités indésirables sur les pages web, fournir un guide de voyage lorsqu'un pays ou une ville est mentionné sur une page, ou encore reformater la page afin de permettre une lecture cohérente. Grâce à leur accès en lecture et en écriture sur le HTML et le CSS d'une page, les extensions permettent de voir le Web comme on le veut.

![](ublock_origin_add_on.png)

Quelques exemples dans cette catégorie&nbsp;:

- [uBlock Origin](https://addons.mozilla.org/fr/firefox/addon/ublock-origin/),
- [Reader](https://addons.mozilla.org/fr/firefox/addon/reader/),
- [Toolbox for Google Play Store™](https://addons.mozilla.org/fr/firefox/addon/toolbox-google-play-store/).

## Ajouter des outils et de nouvelles fonctionnalités de navigation

Avec une extension, on peut ajouter de nouvelles fonctionnalités à un tableau de tâches, générer des codes QR à partir de liens ou de texte. Grâce aux différentes options d'interface et aux [API WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions), on peut facilement étendre les fonctionnalités du navigateur. Vous pouvez ainsi améliorer les fonctionnalités de n'importe quel site web, il n'est même pas nécessaire que ce soit le vôtre.

![](qr_code_image_generator_add_on.png)

Quelques exemples dans cette catégorie&nbsp;:

- [Swimlanes for Trello](https://addons.mozilla.org/fr/firefox/addon/swimlanes-for-trello/)
- [Tomato Clock](https://addons.mozilla.org/fr/firefox/addon/tomato-clock/).

## Créer des jeux

On pourra créer des jeux classiques avec des fonctionnalités hors-ligne, ou encore explorer de nouvelles possibilités comme l'ajout de composantes ludiques dans la navigation de tous les jours.

Quelques exemples dans cette catégorie&nbsp;:

- [Solitaire Card Game](https://addons.mozilla.org/fr/firefox/addon/solitaire-spider-freecell/),
- [2048 Prime](https://addons.mozilla.org/fr/firefox/addon/2048-prime/).

## Ajouter des outils de développement

Que vous soyez éditeur d'outils de développement web ou que vous ayez développé une technique ou une approche utile au développement web et que vous voulez partager, vous pouvez étendre les outils de développement natifs de Firefox en ajoutant un nouvel onglet à la barre d'outils des outils de développement.

![](axe_developer_tools_add_on.png)

Quelques exemples dans cette catégorie&nbsp;:

- [Web Developer](https://addons.mozilla.org/fr/firefox/addon/web-developer/),
- [Web React Developer Tools](https://addons.mozilla.org/fr/firefox/addon/react-devtools/),
- [aXe Developer Tools](https://addons.mozilla.org/fr/firefox/addon/axe-devtools/).

## Résumé

Les extensions sont construites à l'aide [de l'API WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions), qui fonctionnent sur les différents navigateurs. Dans une large mesure, cette API est compatible avec [l'API extension](https://developer.chrome.com/docs/extensions/reference/) prise en charge par Google Chrome et Opera. Dans la plupart des cas, les extensions développées pour ces navigateurs pourront fonctionner dans Firefox ou Microsoft Edge avec [quelques changements mineurs](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/).

Si vous avez des idées ou des questions, ou que vous avez besoin d'aide pour [migrer une extension historique afin qu'elle utilise l'API WebExtensions](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/), vous pouvez nous contacter [sur le forum Discourse Add-ons (en anglais)](https://discourse.mozilla.org/c/add-ons/35) ou dans [le salon Add-ons (en anglais)](https://chat.mozilla.org/#/room/#addons:mozilla.org) sur [Matrix](https://wiki.mozilla.org/Matrix).

## Voir aussi

- Développer une extension simple, étape par étape avec le guide [Votre première extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- En savoir plus sur la structure d'une extension avec l'article [Anatomie d'une extension](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- Tester quelques extensions de démonstration sur la page [Exemples d'extensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Examples)
