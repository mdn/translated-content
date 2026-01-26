---
title: "ARIA : rôle document"
short-title: document
slug: Web/Accessibility/ARIA/Reference/Roles/document_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `document` est destiné au contenu sélectionnable au sein des [widgets](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) ou [applications](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) composites complexes pour lesquels les technologies d'assistance peuvent revenir à un mode de lecture.

## Description

Le rôle `document` est destiné au conteneur principal contenant du contenu que les utilisateur·ice·s de technologies d'assistance peuvent vouloir parcourir en mode lecture. Il n'est utile que sur les sections sélectionnables au sein des [widgets](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) ou [applications](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) composites complexes, le rôle `document` informe les technologies d'assistance de revenir au mode de lecture&nbsp;: le rôle `document` indique aux technologies d'assistance disposant de modes de lecture ou de navigation d'utiliser le mode document pour lire le contenu contenu dans cet élément.

```html
<div role="dialog">
  …
  <div id="InfoText" role="document" tabindex="0">
    <p>Du contenu informatif va ici.</p>
  </div>
  …
  <button>Fermer</button>
</div>
```

Cet exemple montre un [dialog](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role), un rôle de widget composite complexe, avec quelques contrôles et une section contenant un texte informatif que l'utilisateur·ice de la technologie d'assistance peut lire en mode lecture lorsqu'il est sélectionné.

Par défaut, les pages Web sont traitées comme des documents&nbsp;; les technologies d'assistance (<abbr>TA</abbr>) entrent en mode de navigation ou de lecture lorsqu'elles accèdent à une nouvelle page Web. Ce mode peut être modifié par divers rôles, y compris les rôles de widget et d'application. Le rôle `document` ramène les <abbr>TA</abbr> en mode de navigation ou de lecture.

Généralement placé dans un rôle d'application ou un autre rôle de widget interactif, le rôle `document` est utilisé pour indiquer une section d'un widget composite complexe que l'utilisateur·ice de la technologie d'assistance doit lire en utilisant son mode de navigation ou de lecture virtuelle, si disponible.

Parce que les <abbr>TA</abbr> avec un mode de lecture par défaut à ce mode pour tous les éléments sauf ceux avec un rôle de widget ou d'application défini, le rôle de document n'est utile que pour les éléments sélectionnables au sein d'un widget ou d'une application qui doivent être lus comme du texte enrichi statique. Ajouter `role="document"` et `tabindex="0"` à l'élément contenant le texte dans un widget permet à l'utilisateur·ice de lecteur d'écran d'appuyer sur la touche Tab pour placer la sélection sur l'élément document et lire le texte avec le curseur de lecture du lecteur d'écran.

Les technologies d'assistance doivent revenir au mode document, en interceptant éventuellement les contrôles réaffectés au contexte dynamique du parent, réactivant les événements d'entrée standard, tels que les événements de clavier flèche haut ou bas, pour contrôler le curseur de lecture.

En contraste avec le rôle [`article`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role), le rôle `document` n'a aucune relation avec d'autres éléments ayant un rôle de document, il a simplement une relation avec le widget composite contenant. Un article peut avoir des articles associés.

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Inclure avec une valeur `true` ou `false` si l'élément document est pliable, pour indiquer si le document est actuellement développé ou réduit. D'autres valeurs incluent la valeur par défaut `undefined` qui signifie que le document n'est pas pliable.

- tabindex="0"
  - : Utilisé pour le rendre sélectionnable afin que l'utilisateur·ice de la technologie d'assistance puisse y accéder par tabulation et commencer à lire immédiatement.

### Interactions au clavier

L'élément doit être rendu sélectionnable en définissant l'attribut / paire de valeurs `tabindex="0"` sur celui-ci. De cette façon, l'utilisateur·ice peut y accéder par tabulation, le mode de lecture est invoqué automatiquement et le contenu peut être lu immédiatement.

### Fonctionnalités JavaScript requises

Aucune, sauf si cela est requis par des attributs. Par exemple, si le `document` est pliable, alors l'état et la valeur de `aria-expanded` doivent être maintenus.

## Exemples

Un exemple est Gmail et la vue de conversation unique. GMail est une application Web. Lorsqu'il est dans GMail, la plupart des interactions de l'agent utilisateur sont usurpées par l'application. Cependant, lorsque la sélection du clavier est placé sur le titre de départ d'une conversation unique contenant le sujet de la conversation, l'utilisateur·ice de lecteur d'écran peut utiliser les commandes de mode de lecture pour lire les messages, les développer ou les réduire, et les manipuler. Une fois la sélection revenue à la liste des messages, soit en activant le bouton Retour, soit en appuyant sur une combinaison de touches associée, le mode d'interaction directe de l'application est à nouveau invoqué, et l'utilisateur·ice peut se déplacer vers une autre conversation de la liste avec les touches <kbd>flèche</kbd>.

## Bonnes pratiques

Assurez-vous toujours qu'un élément avec le rôle de document est sélectionnable, en définissant l'attribut `tabindex` avec une valeur de 0. Cela l'inclura également dans l'ordre de tabulation.

### Avantages supplémentaires

Le rôle de document est un moyen simple de contrôler indirectement le comportement des technologies d'assistance en déclarant sans ambiguïté qu'il s'agit de contenu que l'utilisateur·ice doit lire avec des commandes standard de lecteur d'écran.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `widget`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role)
- [ARIA&nbsp;: rôle `application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
