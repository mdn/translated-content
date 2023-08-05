---
title: Que faire ensuite ?
slug: Mozilla/Add-ons/WebExtensions/What_next
---

{{AddonSidebar}}

Vous serez maintenant prêt à commencer à transformer votre idée pour une extension de navigateur dans la réalité. Avant de commencer ce périple, ça vaut la peine d'être au courant de quelques choses qui vous aides à en faire une.

Vous pouvez trouver plus d'informations sur de nombreux sujets abordés sur cette page sur [l'atelier d'extension](https://extensionworkshop.com), un site web dédié à vous aider à écrire, tester, publier et distribuer des extensions pour Firefox.

## Votre environnement de développement

Vous n'avez pas besoin d'outils spéciaux de développement ou de création d'environnement pour créer des extensions de navigateur : il est tout à fait possible de créer de superbes extensions de navigateur avec un simple éditeur de texte. Cependant, vous avez peut-être développé pour le Web et avez un ensemble d'outils et un environnement que vous souhaitez réutiliser. Si vous le faites, vous devez être conscient de certaines choses.

Si vous utilisez des outils de minimisation ou d'obscurcissement pour fournir votre code final, vous devez fournir votre code source au [processus de révision AMO](#The_review_process). De plus, les outils que vous utilisez — minification, obscurcissement et construction — doivent être open source (ou offrir une utilisation gratuite illimitée) et être disponible pour fonctionner sur l'ordinateur de l'utilisateur (Windows, Mac, ou Linux). Malheureusement, nos réviseurs ne peuvent pas travailler avec des outils commerciaux ou basés sur le Web.

[En savoir plus sur les outils de développement sur l'atelier d'extensions](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Bibliothèques tierces

Les bibliothèques tierces sont un excellent moyen d'ajouter rapidement des fonctionnalités ou fonctionnalités complexes aux extensions de votre navigateur. Lorsque vous soumettez une extension au [processus de révision AMO](#The_review_processv), le processus considère également les bibliothèques tierces utilisées. Pour rationaliser la révision, assurez-vous de toujours télécharger des bibliothèques tierces à partir de leur site Web officiel ou référentiel, et si la bibliothèque est minifiée, fournissez un lien vers le code source. Veuillez noter que les bibliothèques tierces ne peuvent être modifiées d'aucune façon.

[En savoir plus sur la soumission du code source sur l'atelier d'extensions](https://extensionworkshop.com/documentation/publish/source-code-submission/)

## L'accord de distribution des modules complémentaires de Firefox

Les extensions de navigateur doivent être signées pour être installées dans les réalisations ou versions bêta de Firefox. La signature a lieu dans addons.mozilla.org (AMO) et est soumise aux termes et conditions du contrat de distribution de Firefox Add-on. L'objectif de l'accord est de garantir que les utilisateurs de Firefox aient accès à des modules complémentaires de qualité et bien supportés qui améliorent l'expérience de Firefox.

[Lire l'accord sur l'atelier d'extensions](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[En savoir plus sur la signature de l'atelier extensions](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## Le processus d'examen

Lorsqu'une extension de navigateur est soumise à la signature, elle fait l'objet d'un examen automatisé. Il peut également faire l'objet d'un examen manuel lorsque l'examen automatisé détermine qu'un examen manuel est nécessaire. L'extension de votre navigateur ne sera pas signée tant qu'elle ne sera pas approuvée automatiquement et que sa signature sera révoquée si elle échoue à l'examen manuel. Le processus de révision suit un ensemble de directives strictes, il est donc facile de vérifier et d'éviter tout problème de révision probable.

[Consultez la politique de révision et les lignes directrices sur l'atelier d'extensions](https://extensionworkshop.com/documentation/publish/add-on-policies/)

## AMO a présenté des extensions de navigateur

Si vous choisissez de lister l'extension de votre navigateur sur AMO, votre extension pourrait figurer sur le site Web d'AMO, dans le gestionnaire de modules complémentaires du navigateur Firefox ou ailleurs sur un site Web de Mozilla. Nous avons compilé une liste de directives sur la manière dont les extensions sont sélectionnées pour être mises en avant. En suivant ces directives, vous donnez à votre extension les meilleures chances d'être sélectionnée.

[En savoir plus sur la façon de faire figurer vos modules complémentaires dans l'atelier d'extension](https://extensionworkshop.com/documentation/publish/recommended-extensions/)

## Continuez votre expérience d'apprentissage

Maintenant, vous savez ce qui nous attend, il est temps de plonger dans plus de détails sur le développement de l'extension du navigateur. Dans les sections suivantes, vous découvrirez :

- En savoir plus sur les concepts fondamentaux des extensions de navigateur, en commençant par les détails sur l'[utilisation des APIs Javascript](/fr/Add-ons/WebExtensions/API).
- Un guide des [composants de l'interface utilisateur](/fr/Add-ons/WebExtensions/user_interface) disponibles pour les extensions de votre navigateur.
- Une collection de guides pratiques sur la réalisation des tâches clés dans vos extensions ou l'utilisation des API JavaScript.
- Un guide de référence complet sur les [APIs JavaScript](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Un guide de référence complet sur les [clés du manifeste](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Vous voudrez également vous rendre à l'Atelier des extensions où vous trouverez tout ce que vous devez savoir sur la création d'extensions pour Firefox, notamment :

- [Un aperçu des fonctionnalités des extensions dans Firefox](https://extensionworkshop.com/#about)
- [Les détails des outils et des processus de développement et de tests](https://extensionworkshop.com/documentation/develop/)
- [Comment publier votre extensions sur addons.mozilla.org ou la distribuer vous-même](https://extensionworkshop.com/documentation/publish/)
- [Comment gérer votre extension publiée](https://extensionworkshop.com/documentation/manage/)
- [Un guide entreprise pour le développement et l'utilisation des extensions](https://extensionworkshop.com/documentation/enterprise/)
- [Comment développer des thèmes pour Firefox](https://extensionworkshop.com/documentation/themes/)
- [Des détails sur les communautés de développeurs de Firefox](https://extensionworkshop.com/community/)
