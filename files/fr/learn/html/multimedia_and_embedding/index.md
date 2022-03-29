---
title: Multimédia et Intégration
slug: Learn/HTML/Multimedia_and_embedding
tags:
  - Apprentissage
  - Audio
  - Codage
  - Débutant
  - Evaluation
  - Flash
  - Guide
  - HTML
  - Image Vectorielle
  - Images
  - Interactivité
  - SVG
  - Video
  - iframes
  - imagemaps
translation_of: Learn/HTML/Multimedia_and_embedding
original_slug: Apprendre/HTML/Multimedia_and_embedding
---
{{LearnSidebar}}

Jusqu'ici, nous avons vu et utilisé beaucoup de texte dans ce cours mais le web serait vraiment ennuyeux s'il n'utilisait que du texte.  Voyons ensemble la manière de le rendre plus vivant avec plus de contenu intéressant&nbsp;! Ce module explore l'utilisation d'HTML pour inclure du contenu multimedia dans vos pages web. Cela comprend les différentes manières d'ajouter des images, d'intégrer de la video, de l'audio et même des pages web entières.

## Prérequis

Pour commencer ce module dans de bonnes conditions, vous devriez posséder les connaissances de base du HTML comme il est recommandé dans l'article : [introduction au HTML](/fr/Apprendre/HTML/Introduction_%C3%A0_HTML). Nous vous recommandons de passer du temps sur cette introduction en premier lieu (ou un article équivalent d'initiation au HTML) puis de repasser ici pour continuer.

> **Note :** Si vous travaillez sur une tablette, ordinateur ou autre périphérique où vous n'auriez pas la capacité de créer vos propres fichiers, sachez que vous pouvez tester (la plupart) de vos lignes de code sur des programmes en ligne comme [JSBin](https://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/).

## Guides

Ce module contient les articles suivants, qui vous guideront à travers les fondamentaux de l'intégration multimedia sur une page web.

- **[Images en HTML](/fr/docs/Apprendre/HTML/Multimedia_and_embedding/Images_in_HTML)**
  - : Il existe d'autres types de multimedia à prendre en compte mais il est logique de commencer par cet élément si humble qu'est l'élément {{htmlelement("img")}}. Il est utilisé pour integrér une simple image dans une page web. Au long de cet article, nous verrons son utilisation en détails, des rudiments à l'annotation par légendes en utilisant {{HTMLElement("figure")}}, et de quelle manière il est liè aux images d'arrière-plan de CSS.
- **[Vidéo et contenu audio](/fr/docs/Apprendre/HTML/Multimedia_and_embedding/Contenu_audio_et_video)**
  - : Ensuite, nous étudierons la façon d'utiliser les éléments HTML5 {{HTMLElement("video")}} et {{HTMLElement("audio")}}, pour intégrer les videos et pistes audio dans nos pages. Toujours à partir des rudiments, puis comment fournir un accés aux différents formats des différents navigateurs, enrichir avec des légendes et des sous-titres, et comment proposer des solutions pour les navigateurs plus anciens.
- [De \<object> à \<iframe> — autres techniques d'intégration](/fr/docs/Apprendre/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : À ce stade, nous aimerions faire un pas de côté, en examinant quelques éléments qui vous permettent d'intégrer une grande variété de types de contenu dans vos pages web : les éléments {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} et {{HTMLElement("object")}}. `<iframe>` est fait pour intégrer d'autres pages web, les deux autres vous autorisent à faire de même pour les PDFs, SVG, et même Flash — une technologie en voie de disparition, mais que vous pouvez encore voir de façon semi-régulière.
- [Ajouter des images vectorielles sur le Web](/fr/docs/Apprendre/HTML/Comment/Ajouter_des_images_vectorielles_à_une_page_web)
  - : Les images vectorielles peuvent être très utiles dans certaines situations. Contrairement aux formats classiques comme le PNG/JPG, elles ne se déforment pas lorsqu'on les agrandit et peuvent rester lisses lorsqu'on les met à l'échelle. Cet article vous présente ce que sont les images vectorielles et comment inclure le populaire format {{glossary("SVG")}} dans les pages web.
- [Images adaptatives](/fr/docs/Apprendre/HTML/Comment/Ajouter_des_images_adaptatives_à_une_page_web)
  - : Dans cet article, nous allons découvrir le concept d'images adaptatives — des images qui fonctionnent bien sur des appareils dont les tailles d'écran, les résolutions et autres caractéristiques sont très différentes — et examiner les outils fournis par HTML pour aider à les mettre en œuvre. Cela permet d'améliorer les performances des différents appareils. Les images adaptatives ne sont qu'une partie du [responsive design](/fr/docs/Apprendre/CSS/CSS_layout/Responsive_Design), un futur sujet CSS que vous pourrez apprendre.

## Évaluations

Les évaluations qui suivent sont là pour tester votre compréhension des bases du HTML traitées dans les guides ci-dessus.

- [Évaluation : page d'accueil Mozilla](/fr/docs/Apprendre/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : Cette évaluation concernera vos connaissances de quelques unes des techniques traitées dans les articles de ce module, vous amenant à ajouter des images et vidéos à une page de garde «&nbsp;funky&nbsp;» développant les atouts de Mozilla&nbsp;!

## À voir aussi

- [Intégrer une carte interactive en haut d'une image](/fr/docs/Apprendre/HTML/Comment/Ajouter_carte_zones_cliquables_sur_image)
  - : Une représentation cartographique fournit un mécanisme qui lie différents secteurs d'une image à différents endroits. Pensez à une carte qui fournirait des informations plus approfondies sur chaque pays sur lequel vous cliquez. Cette technique peut parfois être d'une grande utilité.
- [Web Principes fondamentaux 2](https://teach.mozilla.org/activities/web-lit-basics-two/)
  - : Un excellent cours de Mozilla qui explore et teste les compétences développées dans le module : *Multimedia et intégration*. Approfondissez les fondamentaux de la composition de pages web, concevez des outils pour l'accessibilité, le partage de ressources, découvrez l'utilisation de supports en ligne et la mutualisation du travail (ce qui signifie que votre travail est librement disponible et partagé avec d'autres).
