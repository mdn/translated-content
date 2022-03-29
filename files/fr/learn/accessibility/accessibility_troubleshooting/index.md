---
title: 'Évaluation: dépannage d''accessibilité'
slug: Learn/Accessibility/Accessibility_troubleshooting
tags:
  - Accessibilité
  - Apprendre
  - CSS
  - Débutant
  - HTML
  - JavaScript
translation_of: Learn/Accessibility/Accessibility_troubleshooting
original_slug: Apprendre/a11y/Accessibility_troubleshooting
---
{{LearnSidebar}}
{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}

Dans l’évaluation de ce module, nous vous présentons un site simple, qui présente un certain nombre de problèmes d’accessibilité que vous devez diagnostiquer et résoudre.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Conditions préalables:</th>
      <td>
        Connaissances informatiques de base, une compréhension de base de HTML,
        CSS et JavaScript, une compréhension de la  <a
          href="/fr/docs/Learn/Accessibility"
          >previous articles in the course</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Tester les connaissances de base sur les principes fondamentaux
        d'accessibilité.
      </td>
    </tr>
  </tbody>
</table>

## Point de départ

Pour lancer cette évaluation, vous devez aller chercher le  [ZIP containing the files that comprise the example](https://github.com/mdn/learning-area/blob/master/accessibility/assessment-start/assessment-files.zip?raw=true). Décompressez le contenu dans un nouveau répertoire quelque part sur votre ordinateur local

Le site d'évaluation terminé devrait ressembler à ceci:

![](assessment-site-finished.png)

Vous verrez quelques différences / problèmes avec l'affichage de l'état de départ de l'évaluation - ceci est principalement dû aux différences dans le balisage, ce qui cause des problèmes de style car le CSS n'est pas appliqué correctement. Ne vous inquiétez pas, vous allez résoudre ces problèmes dans les prochaines sections!

## Résumé du projet

Pour ce projet, vous êtes présenté avec un site naturel fictif affichant un article "factuel" sur les ours. Dans l'état actuel des choses, plusieurs problèmes d'accessibilité se posent. Votre tâche consiste à explorer le site existant et à le réparer au mieux de vos capacités, en répondant aux questions ci-dessous.

### Couleur

Le texte est difficile à lire en raison du schéma de couleurs actuel. Pouvez-vous tester le contraste de couleurs actuel (texte / arrière-plan), en rapporter les résultats, puis le corriger en modifiant les couleurs attribuées?

### Semantic HTML

1.  Le contenu n'est toujours pas très accessible - faites un rapport sur ce qui se passe lorsque vous essayez de naviguer à l'aide d'un lecteur d'écran.
2.  Pouvez-vous mettre à jour le texte de l'article pour faciliter la navigation des utilisateurs de lecteurs d'écran?
3.  La partie du menu de navigation du site ( `<div class="nav"></div>`) pourrait être rendue plus accessible en la plaçant dans un élément sémantique HTML5 approprié. Lequel devrait-il être mis à jour? Faites la mise à jour.

> **Note :** Vous devrez mettre à jour les sélecteurs de règles CSS qui attribuent aux balises le même style que les balises sémantiques. Une fois que vous avez ajouté des éléments de paragraphe, vous remarquerez que le style est meilleur.

### Les images

Les images sont actuellement inaccessibles aux utilisateurs de lecteur d'écran. Pouvez-vous réparer ceci?

### Le lecteur audio

1.  Le lecteur  `<audio>` n'est pas accessible aux malentendants (pouvez-vous ajouter une sorte d'alternative accessible pour ces utilisateurs)?
2.  Le lecteur  `<audio>` n'est pas accessible aux utilisateurs de navigateurs plus anciens qui ne prennent pas en charge l'audio HTML5. Comment pouvez-vous leur permettre d'accéder encore à l'audio?

### Les formulaires

1.  L'élément  `<input>` dans le formulaire de recherche en haut pourrait être associé à une étiquette, mais nous ne souhaitons pas ajouter une étiquette de texte visible qui risquerait de gâcher la conception et qui n'est pas vraiment utile aux utilisateurs voyants. Comment ajouter une étiquette uniquement accessible aux lecteurs d’écran? ?
2.  Les deux éléments  `<input>` du formulaire de commentaire ont des étiquettes de texte visibles, mais ils ne sont pas associés sans ambiguïté à leurs étiquettes. Comment y parvenir? Notez que vous devrez également mettre à jour certaines règles CSS.

### Le contrôle afficher / masquer les commentaires

Le bouton de commande afficher / masquer les commentaires n’est pas actuellement accessible au clavier. Pouvez-vous le rendre accessible au clavier, à la fois en termes de focalisation à l'aide de la touche de tabulation et d'activation à l'aide de la touche de retour?

### La table

Le tableau de données (data table ) n'est pas très accessible actuellement. Il est difficile pour les utilisateurs de lecteur d'écran d'associer des lignes et des colonnes de données. De plus, le tableau ne contient aucun type de résumé permettant de clarifier ce qu'il montre. Pouvez-vous ajouter des fonctionnalités à votre code HTML pour résoudre ce problème?

### Autres considérations?

Pouvez-vous énumérer deux autres idées d’amélioration qui rendraient le site Web plus accessible?

## Évaluation

Si vous suivez cette évaluation dans le cadre d'un cours organisé, vous devriez pouvoir donner votre travail à votre enseignant / mentor pour qu'il la corrige. Si vous vous auto-apprenez, vous pouvez obtenir le guide de notation assez facilement en le demandant sur la [discussion thread for this exercise](https://discourse.mozilla.org/t/accessibility-troubleshooting-assessment/24691),  ou sur le canal IRC [#mdn](irc://irc.mozilla.org/mdn)  sur [Mozilla IRC](https://wiki.mozilla.org/IRC). Essayez d'abord l'exercice - il n'y a rien à gagner à tricher!

{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}

## Dans ce module

- [What is accessibility?](/fr/docs/Learn/Accessibility/What_is_accessibility)
- [HTML: A good basis for accessibility](/fr/docs/Learn/Accessibility/HTML)
- [CSS and JavaScript accessibility best practices](/fr/docs/Learn/Accessibility/CSS_and_JavaScript)
- [WAI-ARIA basics](/fr/docs/Learn/Accessibility/WAI-ARIA_basics)
- [Accessible multimedia](/fr/docs/Learn/Accessibility/Multimedia)
- [Mobile accessibility](/fr/docs/Learn/Accessibility/Mobile)
- [Accessibility troubleshooting](/fr/docs/Learn/Accessibility/Accessibility_troubleshooting)
