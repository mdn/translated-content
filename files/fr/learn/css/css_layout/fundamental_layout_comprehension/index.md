---
title: Compréhension fondamentale de la mise en page
slug: Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension
---

{{LearnSidebar}}

Si vous avez travaillé sur ce module, vous aurez déjà couvert les bases de ce que vous devez savoir pour faire la mise en forme CSS aujourd'hui, et pour travailler avec les anciennes CSS également. Cette tâche testera certaines de vos connaissances en développant une mise en page simple en utilisant diverses techniques.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row"><strong>Conditions préalables</strong>:</th>
      <td>
        Avant de tenter cette évaluation, vous devriez déjà avoir passé en revue
        tous les articles de ce module.
      </td>
    </tr>
    <tr>
      <th scope="row"><strong>Objectif</strong>:</th>
      <td>
        Pour tester la compréhension des compétences de base en aménagement
        couvertes dans ce module.
      </td>
    </tr>
  </tbody>
</table>

## Dossier de projet

Vous avez reçu du HTML brut, du CSS de base et des images - vous devez maintenant créer une mise en page pour la conception, qui devrait ressembler à l'image ci-dessous.

![](layout-task-complete.png)

### Configuration de base

Vous pouvez télécharger le code HTML, CSS et un ensemble de six images [ici](https://github.com/mdn/learning-area/tree/master/css/css-layout/fundamental-layout-comprehension) .

Enregistrez le document HTML et la feuille de style dans un répertoire de votre ordinateur, puis ajoutez les images dans un dossier nommé `images`. Ouvrir le `index.html` fichier dans un navigateur devrait vous donner une page avec un style de base mais pas de mise en page, ce qui devrait ressembler à l'image ci-dessous.

Ce point de départ contient tout le contenu de votre mise en page, tel qu'il est affiché par le navigateur dans un flux normal.

![](layout-task-start.png)

### Votre section de tâches

Vous devez maintenant implémenter votre mise en page. Les tâches que vous devez accomplir sont:

1. Pour afficher les éléments de navigation dans une ligne, avec un espace égal entre les éléments.
2. La barre de navigation doit défiler avec le contenu, puis rester bloquée en haut de la fenêtre d'affichage quand elle l'atteint.
3. L'image qui se trouve à l'intérieur de l'article doit être entourée de texte.
4. Les éléments [`<article>`](/fr/docs/Web/HTML/Element/article)et [`<aside>`](/fr/docs/Web/HTML/Element/aside)doivent s'afficher sous la forme d'une disposition à deux colonnes. La taille des colonnes doit être flexible de sorte que, si la fenêtre du navigateur est réduite, les colonnes deviennent plus étroites.
5. Les photographies doivent s'afficher sous forme de grille à deux colonnes avec un intervalle de 1 pixel entre les images.

Vous n'aurez pas besoin de modifier le code HTML pour obtenir cette présentation. Les techniques à utiliser sont les suivantes:

- Positionnement
- Flotte
- Flexbox
- CSS Grid Layout

Vous pouvez réaliser certaines de ces tâches de plusieurs manières et il n'existe souvent pas de bonne ou de mauvaise façon de faire les choses. Essayez différentes approches et voyez laquelle fonctionne le mieux. Prenez des notes pendant que vous expérimentez et vous pourrez toujours discuter de votre approche dans le fil de discussion de cet exercice ou dans le [canal](irc://irc.mozilla.org/mdn) IRC [#mdn](irc://irc.mozilla.org/mdn) .

## Evaluation

Si vous suivez cette évaluation dans le cadre d'un cours organisé, vous devriez pouvoir donner votre travail à votre enseignant / mentor pour qu'il la corrige. Si vous vous auto-apprenez, vous pouvez obtenir le guide de notation assez facilement en vous renseignant sur le [fil de discussion relatif à cet exercice](https://discourse.mozilla.org/t/fundamental-layout-comprehension-assessment/29982) ou sur le [canal](irc://irc.mozilla.org/mdn) IRC [#mdn](irc://irc.mozilla.org/mdn) sur [Mozilla IRC](https://wiki.mozilla.org/IRC) . Essayez d'abord l'exercice - il n'ya aucun avantage à tricher!
