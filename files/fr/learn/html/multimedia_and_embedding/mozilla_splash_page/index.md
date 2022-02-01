---
title: 'Évaluation : page d''accueil Mozilla'
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
translation_of: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
original_slug: Apprendre/HTML/Multimedia_and_embedding/Mozilla_splash_page
---
{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Dans cette partie, nous testerons vos connaissances des quelques techniques abordées dans les articles de ce module, en vous demandant d'ajouter des images et des vidéos à une super page d'accueil entièrement dédiée à Mozilla !

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Avant de vous attaquer à cette étude, vous devriez avoir déjà travaillé
        sur les paragraphes précédents composant le module
        <a href="/fr/Apprendre/HTML/Multimedia_and_embedding"
          >Multimedia et Intégration</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Tester vos connaissances sur l'intégration d'images et vidéos dans des
        pages web ainsi que des techniques d'images adaptatives (images
        "responsive").
      </td>
    </tr>
  </tbody>
</table>

## Point de départ

Pour démarrer cette étude, vous devez aller chercher toutes les images et l'HTML disponibles dans le répertoire [mdn-splash-page-start](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/) sur github. Mettez le contenu du fichier [index.html](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/index.html) dans un fichier appelé `index.html` sur votre disque dur local, dans un nouveau répertoire. Puis copiez [pattern.png](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) dans le même dossier (clic droit sur l'image pour le menu des options).

Allez dans le répertoire [originals](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/mdn-splash-page-start/originals) chercher les différentes images et faites la même chose; vous aurez peut-être à les enregistrer dans un nouveau dossier pour l'instant, au cas où vous auriez besoin d'en manipuler certaines en utilisant un éditeur graphique avant de pouvoir les utiliser.

> **Note :** le fichier HTML en exemple contient un bon nombre de CSS, pour styliser la page. Vous n'avez pas besoin de modifier le CSS, juste l'HTML dans l'élément {{htmlelement("body")}} — tant que vous insérez les bonnes balises, le style sera cohérent.

## Énoncé du projet

Dans cette étude, nous vous présentons une page d'accueil Mozilla quasiment finie, qui a pour but de définir, en des termes agréables et intéressants, les objectifs de Mozilla et de fournir des liens vers des ressources supplémentaires. Malheureusement, aucune image ni vidéo n'a été ajoutée pour l'instant — c'est votre boulot ! Vous devez ajouter des choses qui donnent du sens à la page et la rendent belle. Les sous-sections suivantes détaillent ce que vous aurez besoin de faire :

### Préparer les images

Avec votre éditeur d'images favori, créez des versions de 400 et 120 px de large de :

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Donnez-leur des noms similaires comme :  `firefoxlogo400.png` et `firefoxlogo120.png`.

Continuons avec `mdn.svg`, ces images seront vos icônes pour lier aux ressources externes, contenues dans l'espace`further-info`. Vous ferez aussi un lien vers le logo firefox dans l'en-tête du site. Réservez toutes ces copies dans le même dossier que l'`index.html`.

Puis, créez une version paysage de 1200px de large de `red-panda.jpg`, et une version portrait de 600px de large qui montre le panda en gros plan. Encore une fois, nommez-les de manière similaire pour les identifier facilement. Réservez toutes ces copies dans le même dossier que l'`index.html`.

> **Note :** Vous devriez optimiser vos images JPG et PNG pour les rendre le plus petit possible tout en restant de bonne qualité. [tinypng.com](https://tinypng.com/) est une bonne aide pour faire ça aisément.

### Ajouter un logo à l'en-tête

A l'intèrieur de l'élément {{htmlelement("header")}} , ajoutez un élément {{htmlelement("img")}} qui intégrera une petite version du logo firefox dans l'en-tête.

### Ajouter une vidéo dans le contenu principal de l'article

Dans l'élément {{htmlelement("article")}}  (juste en-dessous de la balise d'ouverture), intégrez la vidéo YouTube trouvée ici : <https://www.youtube.com/watch?v=ojcNcvb1olg>, en utilisant les outils YouTube appropriés pour générer le code. La vidéo devra faire 400px de large.

### Ajouter des images adaptatives aux liens vers les ressources externes

Dans l'élément {{htmlelement("div")}} de la catégorie `further-info` vous trouverez quatre autres éléments {{htmlelement("a")}} — chacun d'eux liant vers une page intéressante traitant de Mozilla. Pour compléter cette section, vous devrez insérer un élément {{htmlelement("img")}} dans ceux contenant les attributs {{htmlattrxref("src", "img")}}, {{htmlattrxref("alt", "img")}}, {{htmlattrxref("srcset", "img")}} et {{htmlattrxref("sizes", "img")}} adéquats.

Dans tous les cas (sauf un — lequel serait naturellement adaptatif ?) nous voulons que le navigateur desserve la version 120px de large quand la largeur du cadre est de 480px ou moins, ou la version 400px de large dans les autres cas.

Assurez-vous de faire correspondre les bonnes images avec les liens corrects !

> **Note :** Pour tester correctement les exemples `srcset`/`sizes`, vous devez charger votre site sur un serveur (utiliser [Github pages](/fr/docs/Learn/Common_questions/Using_Github_pages) est une solution simple et gratuite), ensuite vous pouvez tester si tout se déroule correctement en utilisant des outils de développeur, comme expliqué dans [Responsive images: useful developer tools](/fr/Learn/HTML/Multimedia_and_embedding/Responsive_images#Useful_developer_tools).

### Un panda rouge créatif

Dans l'élément {{htmlelement("div")}} de la catégorie r`ed-panda`, nous voulons insérer un élément {{htmlelement("picture")}} qui affiche le petit portrait du panda si le cadre est de 600px de large, ou moins, et le paysage dans les autres cas.

## Exemple

La capture d'écran suivante montre à quoi devrait ressembler la page d'accueil aprés avoir été correctement balisée, avec un affichage large et un étroit.

![A wide shot of our example splash page](wide-shot.png)

![A narrow shot of our example splash page](narrow-shot.png)

## Évaluation

Si vous suivez cette étude en faisant partie d'un programme de cours organisé, vous devriez pouvoir montrer votre travail à votre professeur/mentor pour une correction. Si vous apprenez seul, alors vous pourrez obtenir des informations et des corrections en demandant sur le  [fil de discussion concernant cet exercice](https://discourse.mozilla.org/t/mozilla-splash-page-assignment/24679), ou sur le canal IRC [#mdn](irc://irc.mozilla.org/mdn) sur [Mozilla IRC](https://wiki.mozilla.org/IRC). Essayez de faire l'exercice d'abord — On ne gagne rien en trichant !

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}



## Dans ce module :

- [Les images en HTML](/fr/Apprendre/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Contenu audio et video](/fr/Apprendre/HTML/Multimedia_and_embedding/Contenu_audio_et_video)
- [Des objets aux "iframes" - autres techniques d'intégration](/fr/Apprendre/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Ajouter des images vectorielles à une page web](/fr/Apprendre/HTML/Comment/Ajouter_des_images_vectorielles_%C3%A0_une_page_web)
- [Images adaptatives](/fr/Apprendre/HTML/Comment/Ajouter_des_images_adaptatives_%C3%A0_une_page_web)
- [Évaluation : page d'accueil Mozilla](/fr/Apprendre/HTML/Multimedia_and_embedding/Mozilla_splash_page)
