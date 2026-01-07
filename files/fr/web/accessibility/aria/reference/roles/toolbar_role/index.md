---
title: "ARIA : rôle toolbar"
short-title: toolbar
slug: Web/Accessibility/ARIA/Reference/Roles/toolbar_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `toolbar` définit l'élément conteneur comme un ensemble de boutons ou de contrôles fréquemment utilisés, regroupés sous une forme visuelle compacte.

## Description

Une barre d'outils est un ensemble de contrôles fréquemment utilisés, comme des boutons ou des cases à cocher, regroupés sous une forme visuelle compacte. Le rôle `toolbar` permet d'indiquer la présence et la fonction de ce regroupement aux utilisateur·ice·s de lecteurs d'écran et peut réduire le nombre d'arrêts de tabulation pour les utilisateur·ice·s au clavier. Utilisez le rôle `toolbar` uniquement pour regrouper trois contrôles ou plus.

La barre d'outils regroupe généralement un sous-ensemble de fonctions présentes dans une barre de menu (`menubar`) afin de faciliter l'utilisation. Si vous avez plusieurs barres d'outils dans une barre de menu, chaque barre d'outils doit avoir une étiquette&nbsp;: utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

Lors de la création d'une barre d'outils, il faut gérer la sélection et les interactions clavier à l'intérieur de la barre, en tenant compte du fait que les mêmes interactions clavier peuvent être utilisées à la fois dans la barre d'outils et dans les contrôles natifs inclus. Les touches <kbd>Flèche vers la gauche</kbd> et <kbd>Flèche vers la droite</kbd> servent à naviguer entre les contrôles d'une barre d'outils horizontale. Les touches <kbd>Flèche vers le haut</kbd> et <kbd>Flèche vers le bas</kbd> sont utilisées si la barre d'outils est verticale — dans ce cas, ajoutez aussi `aria-orientation="vertical"` — ou, dans une barre horizontale, peuvent être réservées à l'opération de contrôles comme les boutons de sélection qui nécessitent les flèches verticales.

Évitez d'inclure des contrôles dont l'utilisation nécessite les touches fléchées utilisées pour la navigation dans la barre d'outils. Si cela est nécessaire, placez ce contrôle en dernier dans la barre. Par exemple, dans une barre d'outils horizontale, une zone de saisie peut être placée en dernier.

Si certains éléments interactifs de la barre d'outils sont temporairement désactivés, il peut être utile de les laisser sélectionnables afin que les utilisateur·ice·s de lecteurs d'écran soient informé·e·s de leur présence.

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Les éléments avec le rôle toolbar ont une valeur implicite `aria-orientation` à horizontal.

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Si la barre d'outils possède une étiquette visible, référencez-la par son id avec l'attribut `aria-labelledby`. Sinon, fournissez une `aria-label`. S'il y a plusieurs barres d'outils dans un menu, l'attribution d'un nom est obligatoire.

### Interactions au clavier

Gérez la sélection pour que la séquence de tabulation inclue un seul arrêt pour la barre d'outils, et que les touches fléchées déplacent la sélection entre les contrôles de la barre.

- <kbd>Tab</kbd> et <kbd>Maj + Tab</kbd>
  - : Déplacent la sélection dans et hors de la barre d'outils. Quand la sélection entre dans la barre&nbsp;:
    - Si c'est la première fois, la sélection se place sur le premier contrôle non désactivé.
    - Si la barre d'outils a déjà eu la sélection, celle-ci peut se placer sur le dernier contrôle sélectionné. Sinon, elle se place sur le premier contrôle non désactivé.

- <kbd>Début</kbd> (optionnel)
  - : Déplace la sélection vers le premier élément.

- <kbd>Fin</kbd> (optionnel)
  - : Déplace la sélection vers le dernier élément.

#### Barre d'outils horizontale

Les éléments avec le rôle toolbar ont une valeur implicite `aria-orientation` à horizontal. Si la barre d'outils est bien horizontale, les interactions clavier suivantes doivent être mises en œuvre&nbsp;:

- <kbd>Flèche vers la gauche</kbd> (pour une barre horizontale, valeur par défaut)
  - : Déplace la sélection vers le contrôle précédent. Optionnellement, le déplacement peut boucler du premier élément vers le dernier.

- <kbd>Flèche vers la droite</kbd> (pour une barre horizontale, valeur par défaut)
  - : Déplace la sélection vers le contrôle suivant. Optionnellement, le déplacement peut boucler du dernier élément vers le premier.

Dans les barres d'outils à plusieurs rangées de contrôles, autorisez les flèches gauche et droite à boucler d'une rangée à l'autre, en laissant la possibilité de réserver les flèches verticales à l'opération de contrôles, comme la navigation entre boutons radio ou l'incrémentation/décrémentation d'un sélecteur numérique.

#### Barre d'outils verticale

Si la barre d'outils est verticale, assurez-vous que `aria-orientation="vertical"` est défini, et mettez en œuvre les interactions clavier suivantes&nbsp;:

- <kbd>Flèche vers le bas</kbd>
  - : Déplace la sélection vers le contrôle suivant. Optionnellement, le déplacement peut boucler du dernier élément vers le premier.

- <kbd>Flèche vers le haut</kbd>
  - : Déplace la sélection vers le contrôle précédent. Optionnellement, le déplacement peut boucler du premier élément vers le dernier.

### Fonctionnalités JavaScript requises

Gérez la sélection pour que la séquence de tabulation inclue un seul arrêt pour la barre d'outils, et que les touches fléchées déplacent la sélection entre les contrôles. Lorsqu'on tabule dans la barre d'outils, la sélection revient sur le contrôle qui avait la sélection précédemment.

L'élément toolbar lui-même ne reçoit pas la sélection, mais il faut gérer la sélection lors des déplacements dans, hors et à l'intérieur de la barre. Au chargement, le premier élément de la séquence de tabulation dans la barre d'outils a `tabindex="0"` et tous les autres éléments sélectionnables ont `tabindex="-1"`. Selon l'interaction clavier, l'élément recevant la sélection passe à `tabindex="0"` et celui qui la perd repasse à `tabindex="-1"`. Placez la sélection avec `element.focus()` sur l'élément ayant `tabindex="0"`. On appelle cela le «&nbsp;tabindex itinérant&nbsp;». Un avantage de cette gestion est que le navigateur fait défiler l'élément sélectionné dans la vue.

Si la conception prévoit qu'un élément précis soit sélectionné la prochaine fois que l'utilisateur·ice entre dans la barre d'outils avec <kbd>Tab</kbd> ou <kbd>Maj + Tab</kbd>, vérifiez que cet élément cible a bien `tabindex="0"` lorsque la barre d'outils perd la sélection.

Quand la barre d'outils contient la sélection, fournissez des indices visuels. Lorsqu'un élément de la barre a la sélection, un indice visuel doit être présent à la fois sur la barre d'outils (pour indiquer la navigation directionnelle avec les flèches) et sur le contrôle sélectionné. Les pseudo-classes CSS `:focus` et `:focus-within` peuvent cibler ces deux éléments.

## Exemples

[Exemple de barre d'outils dans le guide des pratiques d'auteur ARIA <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)

## Problèmes d'accessibilité

Évitez d'inclure des contrôles dont l'utilisation nécessite les touches fléchées utilisées pour la navigation dans la barre d'outils (flèches droite et gauche, ou haut et bas pour les barres verticales). Si cela est nécessaire, placez ce contrôle en dernier dans la barre. Par exemple, dans une barre d'outils horizontale, une zone de saisie peut être placée en dernier.

Si certains éléments interactifs de la barre d'outils sont désactivés, il peut être utile de les laisser sélectionnables afin que les utilisateur·ice·s de lecteurs d'écran soient informé·e·s de leur présence.

## Spécifications

{{Specifications}}

## Voir aussi

- [La pseudo-classe CSS `:focus`](/fr/docs/Web/CSS/Reference/Selectors/:focus)
- [La pseudo-classe CSS `:focus-within`](/fr/docs/Web/CSS/Reference/Selectors/:focus-within)
