---
title: Qu'est-ce que les WebExtensions ?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
tags:
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---
{{AddonSidebar}}

Une extension ajoute des fonctionnalités et des fonctions à un navigateur. Elle est créée en utilisant des technologies Web familière: HTML, CSS et JavaScript. Elle peut bénéficier des mêmes API Web que ce d'une page web où JavaScript est utilisée. Cependant, une extension a également accès à son propre ensemble d'API JavaScript. Cela signifie que vous pouvez faire beaucoup plus dans une extension que ce que vous pouvez faire dans une page Web. Voici quelques exemples de fonctionnalités d'extension possibles :

**Améliorer ou compléter un site web** : Utiliser une extension pour ajouter de nouvelles fonctionnalités ou informations supplémentaires dans votre navigateur sur votre site Web. Permettre aux utilisateurs de collecter de l'information sur les pages qu'ils visitent pour améliorer le service que vous offrez.

![](amazon_add_on.png)

Exemples: [Amazon Assistant for Firefox](https://addons.mozilla.org/en-US/firefox/addon/amazon-browser-bar/), [OneNote Web Clipper](https://addons.mozilla.org/en-US/firefox/addon/onenote-clipper/), and [Grammarly for Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/)

**Laissez les utilisateurs montrer leur personnalité** : Les extensions navigateur peuvent manipuler le contenu des pages web, par exemple en permettant aux utilisateurs d'ajouter leur logo ou leur image préférée en arrière-plan à chaque page qu'ils visitent.  Les extensions peuvent également permettre aux utilisateurs de mettre à jour l'apparence de l'interface utilisatrice Firefox, de la même manière que les [add-ons de thème](/fr/Add-ons/Themes/Theme_concepts).

![](myweb_new_tab_add_on.png)

Exemples: [MyWeb New Tab](https://addons.mozilla.org/en-US/firefox/addon/myweb-new-tab/), [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), et [VivaldiFox](https://addons.mozilla.org/en-US/firefox/addon/vivaldifox/)

**Ajouter ou supprimer du contenu de pages web** : vous pouvez aider les utilisateurs à bloquer les publicités intrusives sur les pages Web, à accéder à un guide de voyage chaque fois qu'un pays ou une ville est mentionné sur une page Web ou à reformater le contenu de la page. Avec la possibilité d'accéder et de mettre à jour le code HTML et CSS d'une page, vous pouvez aider les utilisateurs à voir le web comme ils le souhaitent.

![](ublock_origin_add_on.png)

Exemples : [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Reader](https://addons.mozilla.org/en-US/firefox/addon/reader/), et [Toolbox for Google Play Store™](https://addons.mozilla.org/en-US/firefox/addon/toolbox-google-play-store/)

**Ajout d'outils et de nouvelles fonctionnalités de navigation**: Ajout de nouvelles fonctionnalités à un babillard ou générez des images de code QR à partir d'URLs, de liens hypertexte ou texte de page. Grâce aux options d'interface utilisatrice flexibles et à la puissance des [APIs WebExtensions](/fr/Add-ons/WebExtensions), vous pouvez facilement ajouter de nouvelles fonctionnalités à un navigateur. Vous pouvez aussi améliorer presque toutes les fonctionnalités d'un site web ou comment celles-ci sont utilisées même si ce n'est pas votre site Web.

![](qr_code_image_generator_add_on.png)

Exemples: [QR Code Image Generator](https://addons.mozilla.org/en-US/firefox/addon/qr-code-image-generator/), [Swimlanes for Trello](https://addons.mozilla.org/en-US/firefox/addon/swimlanes-for-trello/), et [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/)

**Jeux** : Offrir des jeux-vidéo traditionnels, avec des fonctionnalités de jeu hors ligne ou explorer de nouvelles possibilités de jeu. (Par exemple, en intégrant le jeu dans la navigation quotidienne.)

![](asteroids_in_popup_add_on_.png)

Exemples: [Asteroids in Popup](https://addons.mozilla.org/en-US/firefox/addon/asteroids-in-popup/), [Solitaire Card Game New Tab](https://addons.mozilla.org/en-US/firefox/addon/solitaire-card-game-new-tab/), et [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

**Ajouter des outils de développement** : Il se peut que vous fournissez des outils de développement pour le Web dans le cadre de votre business. Il se pourrait que vous ayez développer des techniques efficaces de développement Web que vous désirez partager. Quelque soit votre situation, vous pouvez améliorer les outils de développement intégrés de Firefox en ajoutant un nouvel onglet à la barre d'outils du développeur.

![](axe_developer_tools_add_on.png)

Exemples: [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/), et [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Les Extensions pour Firefox sont construites à l'aide d'[APIs WebExtensions](/fr/Add-ons/WebExtensions), un système multi-navigateur pour développer des extensions. De manière générale, L'API est compatible avec l' [API d'extension](https://developer.chrome.com/extensions) de Google Chrome et Opera. Les extensions écrites pour ces navigateurs fonctionneraient dans la plupart des cas dans Firefox ou Microsoft Edge avec seulement quelques [changements](/fr/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension). L'API est également entièrement compatible avec [Firefox multi-processus](/fr/Firefox/Multiprocess_Firefox).

Si vous avez des idées ou des questions, ou si vous avez besoin d'aide pour [migrer un module complémentaire hérité vers les API WebExtensions](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/), vous pouvez nous contacter via la  [la mailing-liste dev-addons](https://mail.mozilla.org/listinfo/dev-addons) ou dans le [room des add-ons ](https://chat.mozilla.org/#/room/#addons:mozilla.org)sur [Matrix](https://wiki.mozilla.org/Matrix).

##  Pour aller plus loin?

- Parcourez le développement d'une extension simple dans [votre première extension](/fr/Add-ons/WebExtensions/Your_first_WebExtension).
- En savoir plus sur la structure d'une extensions en consultant [Architecture d'une extension](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
- Essayez quelques exemples d'extensions dans les [extensions exemples](/fr/Add-ons/WebExtensions/Examples).
