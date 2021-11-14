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
<p>{{LearnSidebar}}</p>

<p>Jusqu'ici, nous avons vu et utilisé beaucoup de texte dans ce cours mais le web serait vraiment ennuyeux s'il n'utilisait que du texte.  Voyons ensemble la manière de le rendre plus vivant avec plus de contenu intéressant ! Ce module explore l'utilisation d'HTML pour inclure du contenu multimedia dans vos pages web. Cela comprend les différentes manières d'ajouter des images, d'intégrer de la video, de l'audio et même des pages web entières. </p>

<h2 id="Prérequis">Prérequis</h2>

<p>Pour commencer ce module dans de bonnes conditions, vous devriez posséder les connaissances de base du HTML comme il est recommandé dans l'article : <a href="/fr/Apprendre/HTML/Introduction_%C3%A0_HTML">introduction au HTML</a>. Nous vous recommandons de passer du temps sur cette introduction en premier lieu (ou un article équivalent d'initiation au HTML) puis de repasser ici pour continuer.</p>

<div class="note">
<p><strong>Note :</strong> Si vous travaillez sur une tablette, ordinateur ou autre périphérique où vous n'auriez pas la capacité de créer vos propres fichiers, sachez que vous pouvez tester (la plupart) de vos lignes de code sur des programmes en ligne comme <a href="https://jsbin.com/">JSBin</a> ou <a href="https://thimble.mozilla.org/">Thimble</a>.</p>
</div>

<h2 id="Guides">Guides</h2>

<p>Ce module contient les articles suivants, qui vous guideront à travers les fondamentaux de l'intégration multimedia sur une page web.</p>

<dl>
 <dt><strong><a href="/fr/docs/Apprendre/HTML/Multimedia_and_embedding/Images_in_HTML">Images en HTML</a></strong></dt>
 <dd>Il existe d'autres types de multimedia à prendre en compte mais il est logique de commencer par cet élément si humble qu'est  l'élément {{htmlelement("img")}}. Il est utilisé pour integrér une simple image dans une page web. Au long de cet article, nous verrons son utilisation en détails, des rudiments à l'annotation par légendes en utilisant {{HTMLElement("figure")}}, et de quelle manière il est liè  aux images d'arrière-plan de CSS.</dd>
 <dt><strong><a href="/fr/docs/Apprendre/HTML/Multimedia_and_embedding/Contenu_audio_et_video">Vidéo et contenu audio</a></strong></dt>
 <dd>Ensuite, nous étudierons la façon d'utiliser les éléments HTML5 {{HTMLElement("video")}} et {{HTMLElement("audio")}}, pour intégrer les videos et pistes audio dans nos pages. Toujours à partir des rudiments, puis comment fournir un accés aux différents formats des différents navigateurs,  enrichir avec des légendes et des sous-titres, et comment proposer des solutions pour les navigateurs plus anciens.</dd>
 <dt><a href="/fr/docs/Apprendre/HTML/Multimedia_and_embedding/Other_embedding_technologies">De &lt;object&gt; à &lt;iframe&gt; — autres techniques d'intégration</a></dt>
 <dd>À ce stade, nous aimerions faire un pas de côté, en examinant quelques éléments qui vous permettent d'intégrer une grande variété de types de contenu dans vos pages web : les éléments {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} et {{HTMLElement("object")}}. <code>&lt;iframe&gt;</code> est fait pour intégrer d'autres pages web, les deux autres vous autorisent à faire de même pour les PDFs, SVG, et même Flash — une technologie en voie de disparition, mais que vous pouvez encore voir de façon semi-régulière.</dd>
 <dt><a href="/fr/docs/Apprendre/HTML/Comment/Ajouter_des_images_vectorielles_à_une_page_web">Ajouter des images vectorielles sur le Web </a></dt>
 <dd>Les images vectorielles peuvent être très utiles dans certaines situations. Contrairement aux formats classiques comme le PNG/JPG, elles ne se déforment pas lorsqu'on les agrandit et peuvent rester lisses lorsqu'on les met à l'échelle. Cet article vous présente ce que sont les images vectorielles et comment inclure le populaire format {{glossary("SVG")}} dans les pages web.</dd>
 <dt><a href="/fr/docs/Apprendre/HTML/Comment/Ajouter_des_images_adaptatives_à_une_page_web">Images adaptatives</a></dt>
 <dd>
 <p>Dans cet article, nous allons découvrir le concept d'images adaptatives — des images qui fonctionnent bien sur des appareils dont les tailles d'écran, les résolutions et autres caractéristiques sont très différentes — et examiner les outils fournis par HTML pour aider à les mettre en œuvre. Cela permet d'améliorer les performances des différents appareils. Les images adaptatives ne sont qu'une partie du <a href="/fr/docs/Apprendre/CSS/CSS_layout/Responsive_Design">responsive design</a>, un futur sujet CSS que vous pourrez apprendre.</p>
 </dd>
</dl>

<h2 id="Évaluations">Évaluations</h2>

<p>Les évaluations qui suivent sont là pour tester votre compréhension des bases du HTML traitées dans les guides ci-dessus.</p>

<dl>
 <dt><a href="/fr/docs/Apprendre/HTML/Multimedia_and_embedding/Mozilla_splash_page">Évaluation : page d'accueil Mozilla</a></dt>
 <dd>Cette évaluation concernera vos connaissances de quelques unes des techniques traitées dans les articles de ce module, vous amenant à ajouter des images et vidéos à une page de garde « funky » développant les atouts de Mozilla !</dd>
</dl>

<h2 id="À_voir_aussi">À voir aussi</h2>

<dl>
 <dt><a href="/fr/docs/Apprendre/HTML/Comment/Ajouter_carte_zones_cliquables_sur_image">Intégrer une carte interactive en haut d'une image</a></dt>
 <dd>Une représentation cartographique fournit un mécanisme qui lie différents secteurs d'une image à différents endroits. Pensez à une carte qui fournirait des informations plus approfondies sur chaque pays sur lequel vous cliquez. Cette technique peut parfois être d'une grande utilité.</dd>
 <dt><a href="https://teach.mozilla.org/activities/web-lit-basics-two/">Web Principes fondamentaux 2</a></dt>
 <dd>
 <p>Un excellent cours de Mozilla qui explore et teste les compétences développées dans le module :  <em>Multimedia et intégration</em>. Approfondissez les fondamentaux de la composition de pages web, concevez des outils pour l'accessibilité, le partage de ressources, découvrez l'utilisation de supports en ligne et la mutualisation du travail (ce qui signifie que votre travail est librement disponible et partagé avec d'autres). </p>
 </dd>
</dl>
