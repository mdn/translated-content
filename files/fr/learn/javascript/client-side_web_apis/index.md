---
title: API web utilisées côté client
slug: Learn/JavaScript/Client-side_web_APIs
---

{{LearnSidebar}}

Lorsque vous écrivez du JavaScript côté client pour des sites Web ou des applications, vous n'irez pas très loin avant d'utiliser des API - des interfaces pour manipuler différents aspects du navigateur et du système d'exploitation sur lesquels le site opère, ou même des données provenant d'autres sites web ou services. Dans ce module, nous allons explorer ce que sont les API, et comment utiliser certaines API les plus courantes que vous rencontrerez souvent dans votre travail de développement.

## Prérequis

Pour tirer le meilleur parti de ce module, vous devriez avoir parcouru les précédents modules JavaScript de la série ([Premiers pas](/fr/docs/Learn/JavaScript/First_steps), [Building blocks](/fr/docs/Learn/JavaScript/Building_blocks) et [objets JavaScript](/fr/docs/Learn/JavaScript/Objects)). Ces modules impliquent tout de même un bon nombre d'utilisations simples de l'API, car il est difficile d'écrire des exemples JavaScript côté client faisant quelque chose d'utile sans eux! Ici, nous passons à un niveau supérieur, en supposant que vous connaissiez le langage JavaScript de base et explorant les APIs Web courantes de manière un peu plus détaillée.

Une connaissance basique de [HTML](/fr/docs/Learn/HTML) et [CSS](/fr/docs/Learn/CSS) serait aussi utile.

> **Note :** Si vous travaillez sur un ordinateur/tablette/autre périphérique où vous n'avez pas la possibilité de créer vos propres fichiers, vous pouvez essayer (la plupart) des exemples de code dans un programme de code en ligne tel que [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/).

## Guides

- [Introduction aux API du Web](/fr/Apprendre/JavaScript/Client-side_web_APIs/Introduction)
  - : Tout d'abord, nous survolerons du concept d'API — qu'est-ce que c'est, comment ça fonctionne, comment les utiliser dans votre code, et comment sont-elles structurées. Nous verrons également quelles sont les principales API et leur utilisation.
- [Manipuler des documents](/fr/Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : Quand on écrit des pages web et des applications, une des choses les plus courantes que l'on veut faire est de manipuler la structure du document d'une manière ou d'une autre. On le fait généralement en utilisant le Document Object Model (DOM), un ensemble d'APIs qui permettent de contrôler le HTML et le style — et qui utilisent massivement l'objet {{domxref("Document")}}. Dans cet article, nous allons voir comment utiliser le DOM en détail, ainsi que quelques APIs intéressantes qui peuvent modifier votre environnement.
- [Récupérer des données du serveur](/fr/Apprendre/JavaScript/Client-side_web_APIs/Fetching_data)
  - : Une autre tâche courante dans les sites et applications web modernes est de récupérer des données à partir du serveur pour mettre à jour des sections de la page web sans la recharger entièrement. Ce qui pourrait paraître comme un petit détail, a en vérité eu un impact énorme sur les performances et le comportement des sites. Dans cet article, nous allons expliquer le concept et les technologies qui rendent cela possible, tels que {{domxref("XMLHttpRequest")}} et l'[API Fetch](/fr/docs/Web/API/Fetch_API).
- [APIs tierces](/fr/Apprendre/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : Les APIs que nous avons vu jusqu'à présent sont intégrées dans le navigateur, mais ce n'est pas le cas de toutes. De nombreux gros sites web tels que Google Maps, Twitter, Facebook, PayPal, etc, fournissent des APIs permettant aux développeurs d'utiliser leurs données (par exemple pour afficher un flux twitter sur un blog) ou service (par exemple afficher une carte Google Maps sur un site, ou utiliser Facebook pour permettre aux utilisateurs de se connecter). Cet article compare les APIs du navigateur aux APIs tierces et montre quelques utilisations typiques de ces dernières.
- [Dessiner des éléments graphiques](/fr/Apprendre/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : Le navigateur contient des outils de programmation graphique très puissants, du langage [SVG](/fr/docs/Web/SVG) (Scalable Vector Graphics), aux APIs pour dessiner sur les éléments HTML {{htmlelement("canvas")}}, (voir [API Canvas](/fr/docs/Web/HTML/Canvas) et [WebGL](/fr/docs/Web/API/WebGL_API)). Cet article fournit une introduction à canvas et introduit d'autres ressources pour vous permettre d'en apprendre plus.
- [APIs vidéo et audio](/fr/Apprendre/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML5 fournit des éléments pour intégrer du multimédia dans les documents — {{htmlelement("video")}} et {{htmlelement("audio")}} — et qui viennent avec leurs propres APIs pour contrôler la lecture, se déplacer dans le flux, etc*.* Cet article montre comment réaliser les tâches les plus communes, comme créer des contrôles de lectures personnalisés.
- [Stockage côté client](/fr/Apprendre/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Les navigateurs web modernes permettent aux sites web de stocker des données sur l'ordinateur de l'utilisateur — avec sa permission — puis de les récupérer au besoin. Cela permet d'enregistrer des données pour du stockage long-terme, de sauvegarder des documents ou sites hors-ligne, de conserver des préférences spécifiques à l'utilisateur, et plus encore. Cet article explique les fondamentaux pour y parvenir.
