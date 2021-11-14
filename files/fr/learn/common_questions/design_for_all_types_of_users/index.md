---
title: Concevoir un site pour tous les types d'utilisateurs
slug: Learn/Common_questions/Design_for_all_types_of_users
tags:
  - Accessibility
  - Beginner
  - Design
  - Mobile
  - NeedsActiveLearning
translation_of: Learn/Common_questions/Design_for_all_types_of_users
original_slug: Apprendre/Concevoir_site_tous_types_utilisateurs
---
{{IncludeSubnav("/fr/Apprendre")}}

Cet article aborde les concepts de bases pour vous aider à construire des sites web accessibles à tous.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Avoir lu
        <a href="/fr/Learn/What_is_accessibility"
          >Qu'est-ce que l'accessibilité ?</a
        >
        (l'accessibilité n'est pas approfondie en détails ici) et s'être
        familiarisé-e avec
        <a href="/fr/Apprendre/Concevoir_page_web">l'anatomie d'une page web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Être en mesure de concevoir un site pour tous, quelles que soient les
        contraintes techniques ou celles de handicap. Cet article liste les
        points les plus importants et facile à mettre en œuvre pour atteindre un
        tel objectif.
      </td>
    </tr>
  </tbody>
</table>

Lors de la construction d'un site, il faut entre autres garder à l'esprit qu'un site doit être accessible à tous, quelles que soient les contraintes de handicap, les contraintes techniques, la culture, le lieu depuis lequel le site est consulté, etc.

## Pédagogie active

_Il n'y a, pour le moment, pas de matériau pour la pédagogie active. [Cependant, vous pouvez contribuer](/fr/docs/MDN/D%C3%A9buter_sur_MDN)._

## Aller plus loin

### Le contraste des couleurs

Afin que le texte soit lisible, il faut utiliser une couleur de texte qui contraste suffisamment avec la couleur utilisée en arrière plan. Ce contraste est important pour que les personnes atteintes d'une déficience visuelle puissent lire le texte, il en va de même pour les personnes qui visitent le site et le lisent sur un écran de téléphone dans une rue au soleil.

Le {{Glossary("W3C")}} définit ce qui peut être une bonne association de couleur grâce à un algorithme qui calcule le ratio de luminosité entre l'arrière plan et le premier plan. Ce calcul peut être un peu compliqué mais est utile pour indiquer la qualité du contraste.

Pour contrôler le contraste, vous pouvez télécharger et installer [l'analyseur de contraste](http://www.paciellogroup.com/resources/contrastanalyser/) du Groupe Paciello.

> **Note :** Sinon, vous pouvez également trouver différents vérificateurs de contrastes disponibles en ligne, par exemple celui de WebAIM : [Color Contrast Checker](http://webaim.org/resources/contrastchecker/). Il est préférable d'utiliser un vérificateur qui fonctionne en local sur votre ordinateur car généralement, ceux-ci ont également une pipette qui permet de prélever la valeur d'une couleur sur tout l'écran.

Par exemple, testons les couleurs de cette page et voyons ce que cela donne avec l'outil d'analyse de contraste :

![Colour contrast on this page: excellent!](colour-contrast.png)

Le ratio de contraste pour la luminosité entre le texte est l'arrière plan est de 8.30:1, ce qui est mieux que le minimum recommandé par le standard (4.5:1). Avec cette valeur, de nombreuses personnes devraient être en mesure de lire le texte..

### Taille de police (ou taille de fonte)

La taille de la police utilisée dans un site web peut être définie en unités absolues ou en unités relatives.

#### Les unités absolues

Les unités absolues ne sont pas calculées proportionnellement entre elles mais font plutôt référence à une valeur « dure », la plupart du temps, elles sont exprimées en pixels (`px`). Par exemple, si, dans votre fichier CSS, vous déclarez la règle suivante :

    body { font-size:16px; }

… vous indiquez au navigateur que, quoi qu'il arrive, la taille de la police doit être 16 pixels. Les navigateurs récents interprèteront cette règle de la façon suivante : « utiliser une police sur 16 pixels quand l'utilisateur a un niveau de zoom de 100% ».

Cependant, pendant plusieurs années, Internet Explorer (jusqu'à Internet Explorer 8) affichait dans tous les cas 16 pixels. Le zoom n'avait aucun effet.

#### Les unités relatives

Également appelées _unités proportionnelles,_ les unités relatives sont calculées relativement à l'élément parent. Les unités relatives sont plus pratiques en termes d'accessibilité car elles permettent de respecter plus simplement les paramètres choisis par l'utilisateur.

Les unités relatives sont exprimées en `em`, `%` et `rem`:

- Les tailles exprimées en pourcentages : `%`
  - : Cette unité permet d'indiquer au navigateur que la taille de police d'un élément doit représenter N% de la taille de police de l'élément précédent. Si aucun élément parent n'est trouvé, c'est la taille de police par défaut du navigateur qui est utilisée comme base de calcul (généralement, cette dernière est équivalente à 16 pixels).
- Les tailles exprimées en em : `em`
  - : Cette unité est calculée de la même façon que les pourcentages sauf qu'ici, il s'agit d'un ratio par rapport à 1 et non d'un ratio par rapport à 100. L'unité est appelée « em » car elle correspond à la largeur d'un « M » majuscule (un « M » tient approximativement dans un carré dont on dira que la largeur vaut 1 em).
- Les tailles exprimées en rem : `rem`
  - : Cette unité est proportionnelle à la taille de police de l'élément racine et est exprimée en ratio par rapport à 1, comme avec `em`.

Imaginons que la taille de police de base soit 16px et qu'on ait un titre principal (`h1`) dont la taille soit équivalente à 32px et qu'au sein de ce `<h1>` on ait un élément `span` avec une classe `subheading`, celui-ci devant également être affiché avec la taille par défaut (généralement 16px).

Voici le code HTML qu'on utilisera :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Tests sur les tailles de police</title>
</head>
<body>

    <h1>Voici notre titre principal
        <span class="subheading">Et voici notre sous-titre</span>
    </h1>

</body>
</html>
```

Un fichier CSS utilisant des unités exprimées en pourcentages pourrait être :

```css
body { font-size:100%; }
/* 100% de la taille de base du navigateur, en
général, le texte sera affiché sur 16 pixels */

h1 { font-size:200%; }
/* Deux fois la taille du corps de la page,
soit 32 pixels */

span.subheading { font-size:50%; }
/* La moitié du h1,soit 16 pixels, ce qui revient
à la taille de base originelle */
```

Voici le fichier CSS équivalent, avec des valeurs exprimées en ems :

```css
body { font-size:1em; }
/* 1em = 100% de la taille de base du navigateur
dans la plupart des cas ça correspondra à 16 pixels */

h1 { font-size:2em; }
/* deux fois la taille du coros, soit 32 pixels */

span.subheading { font-size:0.5em; }
/* la moitié de la taille de h1, 16 pixels
ce qui revient à taille originelle */
```

Comme vous pouvez l'observer, cela devient rapidement complexe lorsqu'il faut se souvenir de la taille du parent du parent et du parent du parent du parent, etc.

C'est là qu'interviennent les `rem`. Cette unité est relative à la taille de l'élément racine de la page et non au parent de l'élément. Le fichier CSS correspond peut ainsi être réécrit de cette façon :

```css
body { font-size:1em; }
/* 1em = 100% de la taille de base du navigateur,
soit 16 pixels dans la plupart des cas */

h1 { font-size:2rem; }
/* deux fois la taille du corps soit 32 pixels */

span.subheading { font-size:1rem; }
/* la taille originale */
```

C'est plus facile de cette façon, n'est-ce pas ? Cela fonctionne, à partir d'[Internet Explorer 9 et dans n'importe quel autre navigateur récent](http://caniuse.com/#search=rem), n'hésitez pas à l'utiliser.

> **Note :** Vous remarquerez qu'Opera Mini ne supporte pas les tailles de police exprimées en rem, il utilisera sa propre taille de police.

#### Pourquoi aurais-je besoin d'utiliser des unités proportionnelles ?

Pour plusieurs raisons et notamment parce que vous ne connaissez pas le moment où le navigateur refusera de suivre le zoom pour une police exprimée en pixels. Si vous analysez les statistiques de visites, vous verrez que certaines personnes utilisent toujours d'anciens navigateurs, les unités relatives sont plus simples à gérer pour ceux-ci.

Il est généralement conseillé de :

- Décrire les tailles de police en unité `rem`, cela ne posera aucun problème à la plupart des navigateurs ;
- Laisser les anciens navigateurs afficher les polices avec leurs moteurs internes. Les moteurs des navigateurs ignorent les propriétés ou valeurs CSS qu'ils ne reconnaissent pas et/ou qu'ils ne peuvent pas gérer. Votre site web est donc toujours utilisable, même s'il ne respecte pas nécessairement le design que vous souhaitiez. De toute façon et inexorablement, les anciens navigateurs seront de moins en moins utilisés.

> **Note :** Votre utilisation de ces unités pourra varier. S'il est nécessaire pour vous de gérer les anciens navigateurs, vous aurez besoin d'utiliser des `em`s, quitte à faire un peu de mathématique en chemin.

### Largeur de ligne

Il y a depuis toujours sur le Web un débat sur la longueur que doit occuper une ligne. Mais cela n'est pas apparu avec le Web. Déjà avec les journaux, les imprimeurs avaient réalisé que si les lignes étaient trop longues, les lecteurs avaient du mal à suivre chaque ligne du début à la fin. Une solution fut trouvée à ce problème : organiser le texte en colonnes.

Bien entendu, ce problème n'a pas disparu avec le Web. Les yeux d'un lecteur sont comme une navette qui va d'une ligne à une autre. Pour simplifier ce trajet, il est préconisé que les lignes s'étendent entre 60 et 70 caractères.

Pour obtenir cet effet, il est possible de définir une taille spécifique pour le conteneur du texte. Voila ce que ça donne en HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Tests sur les tailles de police</title>
</head>
<body>

<div class="container">
    <h1>Le titre principal
        <span class="subheading">Et le sous-titre</span>
    </h1>

    <p>[Un grand texte qui s'étire sur plusieurs lignes]</p>
</div>

</body>
</html>
```

Ici, nous avons un `div` avec une classe `container`. Il est possible de mettre en forme le `div` en réglant sa largeur avec la propriété `width` ou en réglant sa largeur maximale afin qu'il ne soit jamais trop grand, grâce à sa propriété `max-width`. Si vous souhaitez avoir un site adaptatif ou élastique et que vous ne connaissez pas la largeur par défaut du navigateur, vous pouvez utiliser la propriété `max-width` pour avoir au maximum 70 caractères par ligne :

```css
div.container { max-width:70em; }
```

### Fournir un contenu alternative pour les images, les sons et les vidéos

Il arrive fréquemment que les pages web ne contiennent pas seulement du texte.

#### Les images

Les images d'une page web peuvent être décoratives ou informatives mais il n'est pas garanti que vos utilisateurs puissent les voir. Par exemple :

- Vos lecteurs souffrant d'une déficience visuelle utiliseront un logiciel lecteur d'écran qui ne pourra restituer que du texte.
- Vos lecteurs peuvent naviguer depuis un intranet très strict qui bloque les images provenant d'un {{Glossary("CDN")}}.
- Vos lecteurs peuvent avoir désactivé l'affichage des images pour économiser de la bande passante, ceci est notamment valable pour les appareils mobiles (voir ci-après).

<!---->

- Les images décoratives
  - : Ces images servent uniquement à décorer et ne contiennent pas d'informations utiles à la compréhension de la page. Elles pourraient généralement être remplacées par une image d'arrière-plan. Assurez-vous de fournir un texte alternatif vide grâce à l'attribut `alt` : `<img src="deco.gif" alt="">` afin qu'elles n'encombrent pas le texte.
- Les images informatives
  - : Celles-ci apportent des informations nécessaires à la compréhension de la page, d'où leur nom. Elle peuvent, par exemple, montrer un graphique, décrire le geste d'une personne, etc. Il faut au minimum fournir un attribut `alt` par rapport au contenu de l'image.

Si l'image peut être décrite succintement, vous pouvez fournir un attribut `alt` qui sera suffisant. En revanche, si l'image ne peut pas être décrite rapidement, il est préférable de fournir un contenu équivalent sous un autre format sur la page (par exemple, si l'image est un graphique en camembert, on pourra fournir le tableau des données numériques) ou sinon, on pourra recourir à un attribut `longdesc`. La valeur de cet attribut est un URL qui pointe vers une ressource dont le seul but est de décrire en détails le contenu de l'image.

> **Note :** L'utilisation voire l'existence de `longdesc` ont toujours été débatues. Veuillez vous référer à la page du W3C' [Image Description Extension (longdesc)](http://www.w3.org/TR/html-longdesc/) pour une explication complète et des exemples détaillés.

#### Audio/Vidéo

Il est également nécessaire de fournir des alternatives à du contenu multimédia.

- Sous-titrage
  - : Les sous-titres sont utiles à toutes les personnes utilisant votre site qui ne peuvent pas entendre la piste audio. Certaines personnes pourraient avoir des difficultés auditives, d'autres pourraient avoir des écouteurs qui ne fonctionnent pas, d'autres encore pourraient être dans un environnement bruyant.
- Transcription
  - : Les sous-titres ne fonctionnent que lorsqu'on regarde la vidéo. Certaines personnes n'ont pas le temps ou les codecs nécessaires pour regarder la vidéo. De plus, les moteurs de recherches utilisent principalement le texte pour indexer le contenu d'un site web. Pour toutes ces raisons, il est préférable de fournir une transcription du fichier audio/vidéo.

### Compression des images

Certains utilisateurs pourraient avoir choisi d'afficher les images mais pourraient disposer d'une connexion instable ou limité (c'est le cas notamment dans les pays en développement et sur les appareils mobiles). Si vous souhaitez que votre site web soit le plus fonctionnel possible, il est nécessaire de compresser les images. Voici quelques outils pour vous aider à cette tâche (logiciels ou services en ligne) :

- **Logiciels à installer :** [ImageOptim](https://imageoptim.com/) (Mac), [OptiPNG](http://optipng.sourceforge.net/) (toutes les plates-formes, [PNGcrush](http://pmt.sourceforge.net/pngcrush/) (DOS, Unix/Linux)
- **Outils en lignes :** [smushit!](http://smush.it/) de Yahoo!,   [Online Image Optimizer](http://tools.dynamicdrive.com/imageoptimizer/) de Dynamic Drive (qui peut convertir d'un format à un autre si cela est plus efficace en termes de bande passante)

## Prochaines étapes

Cet article ne décrit que les bases d'un design accessible et universel. Si vous souhaitez aller plus loin dan ce domaine, vous pouvez poursuivre avec [les bases de l'ergonomie ou UX (_User Experience_ en anglais)](/fr/docs/Learn/Basics_of_UX_Design).
