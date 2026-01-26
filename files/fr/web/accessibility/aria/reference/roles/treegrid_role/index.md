---
title: "ARIA : rôle treegrid"
short-title: treegrid
slug: Web/Accessibility/ARIA/Reference/Roles/treegrid_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `treegrid` identifie un élément comme étant une grille dont les lignes peuvent être développées ou réduites, de la même manière qu'une «&nbsp;arborescence&nbsp;» (<i lang="en">tree</i> en anglais).

## Description

Une «&nbsp;grille arborescente&nbsp;» (<i lang="en">`treegrid`</i> en anglais) est une grille de données hiérarchique, ou un tableau, composé d'informations tabulaires éditables ou interactives. Un `treegrid` combine les rôles [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) et [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Comme une «&nbsp;grille&nbsp;» (<i lang="en">grid</i>), le `treegrid` est constitué de lignes, de colonnes et de cellules. Comme une «&nbsp;arborescence&nbsp;», les nœuds parents sont extensibles et réductibles.

Le widget `treegrid` contient un ou plusieurs éléments [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), éventuellement regroupés par des éléments [`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role). Chaque ligne contient une ou plusieurs cellules. Chaque cellule est soit un descendant DOM, soit possédée par un élément ligne, et possède le rôle [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) ou [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role). Le rôle `gridcell` est utilisé pour toutes les cellules qui ne contiennent pas d'informations d'en-tête de colonne ou de ligne.

Une ligne pouvant être développée ou réduite pour afficher ou masquer un ensemble de lignes enfants est appelée **ligne parente**. Chaque ligne parente possède l'état [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) défini soit sur l'élément ligne, soit sur une cellule contenue dans la ligne.

L'état `aria-expanded` est défini à `true` lorsque les lignes enfants sont affichées, et à `false` lorsqu'elles sont masquées. Les éléments qui ne contrôlent pas l'affichage des lignes enfants ne doivent pas avoir l'attribut `aria-expanded`, car sa présence indique aux technologies d'assistance que l'élément est un parent.

Lorsque votre interface de grille nécessite des lignes supportant `aria-expanded` ou si votre grille doit prendre en charge [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) ou [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), utilisez `treegrid` et non `grid`.

Chaque `row` ou `gridcell` d'une ligne doit pouvoir recevoir la sélection clavier, et la gestion de la sélection pour tous ces descendants doit être assurée. L'exception concerne les cellules d'en-tête de colonne, qui ne sont pas obligatoirement sélectionnables si elles ne proposent pas de fonctionnalités comme le tri ou le filtrage. Chaque ligne et cellule doit soit contenir un élément sélectionnable, soit être sélectionnable elle-même, que le contenu soit éditable ou interactif.

### Grilles arborescentes à sélection unique ou multiple

Si le `treegrid` permet à l'utilisateur·ice de choisir un seul élément pour une action, il s'agit d'une **grille arborescente à sélection unique**. Dans ce cas, l'élément ayant la sélection possède également l'état sélectionné via [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Si la grille arborescente permet la sélection de plusieurs lignes ou cellules, il s'agit d'une **grille arborescente à sélection multiple**. Dans ce cas, l'état sélectionné est indépendant de la sélection clavier. La conception visuelle et les technologies d'assistance doivent distinguer les éléments sélectionnés de l'élément ayant la sélection.

Pour les grilles arborescentes à sélection multiple, incluez [`aria-multiselectable="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) sur l'élément ayant le rôle `treegrid`. Toutes les lignes ou cellules sélectionnées ont [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) défini à true. Les lignes et cellules sélectionnables mais non sélectionnées ont `aria-selected` à `false`. N'ajoutez pas l'attribut `aria-selected` sur les lignes et cellules non sélectionnables, car sa présence indique aux technologies d'assistance que la ligne ou la cellule est sélectionnable.

### Lignes orphelines

Si une ligne ou un groupe de lignes enfant n'est pas imbriqué dans le `treegrid` dans le DOM, l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns), référant tous les identifiants des enfants non descendants, doit être défini sur l'élément `treegrid`. Si des lignes ou cellules sont incluses via `aria-owns`, elles seront présentées aux technologies d'assistance après les descendants DOM de l'élément `treegrid`, sauf si les descendants DOM sont aussi inclus dans l'attribut `aria-owns`.

### Grilles arborescentes avec contenu chargé dynamiquement

Si certaines lignes ou colonnes ne sont pas dans le DOM et sont chargées dynamiquement lors du défilement, les attributs [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) et [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) sont utilisés. Les propriétés `aria-colcount` et `aria-rowcount` sont définies sur le `treegrid`, avec pour valeurs le nombre total de colonnes et de lignes de la grille entièrement chargée. Les index de chaque ligne et colonne sont définis sur les cellules individuelles, et non sur l'élément `treegrid`.

### Nom accessible, description et sélection d'une grille arborescente

L'élément ayant le rôle `treegrid` doit posséder un nom accessible. Si un libellé approprié est visible dans le contenu, fournissez le nom via [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Autrement dit, si un élément de l'interface sert de libellé à la grille arborescente, incluez `aria-labelledby` comme attribut sur l'élément ayant le rôle `treegrid`, et définissez la valeur de l'attribut sur l'identifiant du ou des éléments de libellé. Si aucun libellé visible n'est présent, utilisez [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) à la place, mais jamais les deux.

Si le contenu inclut une légende ou une description pour le `treegrid`, ajoutez [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) sur l'élément `treegrid`, avec pour valeur l'identifiant de l'élément contenant la description.

Si le conteneur `treegrid` reçoit la sélection, la valeur de sa propriété [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) doit référencer l'identifiant du `row`, `columnheader`, `rowheader` ou `gridcell` sélectionné, sauf si un tabindex itinérant est utilisé pour gérer la sélection entre ces rôles, auquel cas `aria-activedescendant` ne doit pas être utilisé.

Si le `treegrid` est désactivé, rendez cet état visible, appliquez-le par programmation et ajoutez l'attribut [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) sur le `treegrid` pour informer les technologies d'assistance de son état désactivé.

### Tri dans une grille arborescente

Si la grille arborescente propose des fonctions de tri, l'attribut [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) est ajouté sur les cellules d'en-tête concernées, et non sur la grille elle-même.

### Menus associés à une grille arborescente

Si le `treegrid` possède un [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) qui s'ouvre lors d'un clic droit, ajoutez [`aria-haspopup="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) sur l'élément `treegrid`. Cela informe les technologies d'assistance qu'un menu contextuel est associé. La possibilité pour les utilisateur·ice·s clavier et souris d'ouvrir et de placer la sélection dans le menu doit être gérée en JavaScript.

### Grilles arborescentes en lecture seule

Par défaut, les grilles arborescentes sont considérées comme éditables. Si une grille arborescente n'est pas éditable, utilisez l'attribut [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) pour informer les technologies d'assistance qu'elle est en lecture seule. La valeur de l'attribut, lorsqu'elle est définie sur l'élément ayant le rôle `treegrid`, se propage à tous les éléments `columnheader`, `rowheader` et `gridcell`. Cette valeur globale peut être remplacée pour des cellules individuelles en ajoutant `aria-readonly` sur les descendants concernés.

Comme tous les attributs ARIA, ajouter `aria-readonly` informe uniquement les technologies d'assistance du caractère éditable ou non du contenu, mais n'active ni ne désactive l'interactivité. Cela doit être géré via l'attribut HTML [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) ou en JavaScript.

## Propriétés, états et rôles WAI-ARIA associés

- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Ligne de cellules dans une structure tabulaire, éventuellement dans un `rowgroup`. Contient une ou plusieurs lignes de cellules, d'en-têtes de colonne ou de ligne.
- [`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Groupe de [lignes](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) dans une structure tabulaire.
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Destiné à reproduire le fonctionnement de l'élément HTML {{HTMLElement('td')}}. Se trouve dans les rôles `grid` et `treegrid` et doit être un enfant direct d'une ligne.
- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Cellule d'une ligne contenant des informations d'en-tête de colonne, similaire à l'élément natif {{HTMLElement('th')}} avec portée colonne.
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Cellule contenant des informations d'en-tête de ligne dans une structure tabulaire.
- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Pour les éléments extensibles, la valeur est `true` ou `false`. Indique aussi que l'élément est extensible, donc ne doit pas être présent si l'élément ne peut pas être développé.
- [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Identifie une relation contextuelle entre un parent et ses enfants lorsque la hiérarchie DOM ne peut pas être utilisée pour représenter la relation.
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Utilisez cet attribut pour nommer le `treegrid`. Il s'agit généralement de l'identifiant de l'élément servant de titre à la grille arborescente.
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Une chaîne de caractères lisible par un·e humain·e qui identifie le `treegrid`. S'il existe un libellé visible, utilisez plutôt `aria-labelledby`.

## Interactions au clavier

La gestion de la sélection parmi les lignes et cellules de la grille au clavier doit être implémentée pour garantir l'accessibilité. Déplacer la sélection dans la grille peut placer la sélection sur la première cellule ou la première ligne. Selon la configuration, la sélection peut se déplacer vers la cellule ou la ligne adjacente, certaines grilles n'autorisant pas la sélection sur les lignes.

Les interactions clavier suivantes doivent être prises en charge lorsqu'un élément de la grille reçoit la sélection, par exemple après avoir déplacé la sélection dans la grille avec <kbd>Tab</kbd>&nbsp;:

- <kbd>Entrée</kbd>
  - : Si seule la sélection cellule est activée et que la sélection est sur la première cellule avec la propriété `aria-expanded`, ouvre ou ferme les lignes enfants. Sinon, effectue l'action par défaut de la cellule.
- <kbd>Tab</kbd>
  - : Si la ligne contenant la sélection possède des éléments sélectionnables comme un {{HTMLElement('input')}}, {{HTMLElement('button')}} ou {{HTMLElement('a')}}, déplace la sélection vers l'élément suivant de la ligne. Si la sélection est sur le dernier élément sélectionnable de la ligne, la sélection sort du widget treegrid vers l'élément sélectionnable suivant.
- <kbd>Flèche vers la droite</kbd>
  - : Si la sélection est sur une ligne réduite, développe la ligne. Si la sélection est sur une ligne développée ou une ligne sans enfants, déplace la sélection vers la première cellule de la ligne. Si la sélection est sur la cellule la plus à droite, la sélection ne bouge pas. Sinon, déplace la sélection d'une cellule vers la droite.
- <kbd>Flèche vers la gauche</kbd>
  - : Si la sélection est sur une ligne développée, réduit la ligne. Si la sélection est sur une ligne réduite ou une ligne sans enfants, la sélection ne bouge pas. Si la sélection est sur la première cellule d'une ligne et que la sélection ligne est prise en charge, déplace la sélection sur la ligne. Sinon, la sélection ne bouge pas. Si la sélection est sur une autre cellule, déplace la sélection d'une cellule vers la gauche.
- <kbd>Flèche vers le bas</kbd>
  - : Si la sélection est sur une ligne, déplace la sélection d'une ligne vers le bas. Si la sélection est sur la dernière ligne, la sélection ne bouge pas. Si la sélection est sur une cellule, déplace la sélection d'une cellule vers le bas. Si la sélection est sur la cellule la plus basse de la colonne, la sélection ne bouge pas.
- <kbd>Flèche vers le haut</kbd>
  - : Si la sélection est sur une ligne, déplace la sélection d'une ligne vers le haut. Si la sélection est sur la première ligne, la sélection ne bouge pas. Si la sélection est sur une cellule, déplace la sélection d'une cellule vers le haut. Si la sélection est sur la cellule la plus haute de la colonne, la sélection ne bouge pas.
- <kbd>Page suivante</kbd>
  - : Si la sélection est sur une ligne ou une cellule, déplace la sélection d'un nombre prédéfini de lignes ou cellules vers le bas. Généralement, cela correspond à la hauteur de la grille, en faisant défiler pour que la dernière ligne visible devienne l'une des premières visibles. Si la sélection est sur la dernière ligne, la sélection ne bouge pas.
- <kbd>Page précédente</kbd>
  - : Si la sélection est sur une ligne ou une cellule, déplace la sélection d'un nombre prédéfini de lignes vers le haut. Généralement, cela correspond à la hauteur de la grille, en faisant défiler pour que la première ligne visible devienne l'une des dernières visibles. Si la sélection est sur la première ligne, la sélection ne bouge pas.
- <kbd>Début</kbd> <kbd>Ctrl + Début</kbd>
  - : Si la sélection est sur une ligne, déplace la sélection sur la première ligne. Si la sélection est déjà sur la première ligne, la sélection ne bouge pas. Si la sélection est sur une cellule, déplace la sélection sur la première cellule de la ligne. Si la sélection est déjà sur la première cellule, la sélection ne bouge pas.
- <kbd>Fin</kbd> <kbd>Ctrl + Fin</kbd>
  - : Si la sélection est sur une ligne, déplace la sélection sur la dernière ligne. Si la sélection est déjà sur la dernière ligne, la sélection ne bouge pas. Si la sélection est sur une cellule, déplace la sélection sur la dernière cellule de la ligne. Si la sélection est déjà sur la dernière cellule, la sélection ne bouge pas. Si toutes les lignes ne sont pas présentes dans le DOM, cela permet de placer la sélection sur la dernière ligne présente ou disponible.

Si la grille arborescente prend en charge la sélection de cellules, lignes ou colonnes, les touches suivantes sont couramment utilisées&nbsp;:

- <kbd>Ctrl + Espace</kbd>
  - : Si la sélection est sur une ligne, sélectionne toutes les cellules. Si la sélection est sur une cellule, sélectionne la colonne correspondante.
- <kbd>Maj + Espace</kbd>
  - : Si la sélection est sur une ligne, sélectionne la ligne. Si la sélection est sur une cellule, sélectionne la ligne correspondante. Si la grille inclut une colonne de cases à cocher pour sélectionner les lignes, cette touche peut aussi servir de raccourci pour cocher la case lorsque la sélection n'est pas sur la case.
- <kbd>Ctrl + A</kbd>
  - : Sélectionne toutes les cellules.
- <kbd>Maj + Flèche vers la droite</kbd>
  - : Si la sélection est sur une cellule, étend la sélection d'une cellule vers la droite.
- <kbd>Maj + Flèche vers la gauche</kbd>
  - : Si la sélection est sur une cellule, étend la sélection d'une cellule vers la gauche.
- <kbd>Maj + Flèche vers le bas</kbd>
  - : Si la sélection est sur une ligne, étend la sélection à toutes les cellules de la ligne suivante. Si la sélection est sur une cellule, étend la sélection d'une cellule vers le bas.
- <kbd>Maj + Flèche vers le haut</kbd>
  - : Si la sélection est sur une ligne, étend la sélection à toutes les cellules de la ligne précédente. Si la sélection est sur une cellule, étend la sélection d'une cellule vers le haut.

Si les fonctions de navigation peuvent ajouter dynamiquement des lignes ou colonnes au DOM, les événements clavier qui déplacent la sélection au début ou à la fin de la grille, comme <kbd>Ctrl + Fin</kbd>, peuvent déplacer la sélection sur la dernière ligne du DOM plutôt que sur la dernière ligne disponible dans les données.

Lorsque les touches de navigation, comme les flèches, déplacent la sélection de cellule en cellule, elles ne sont pas disponibles pour, par exemple, manipuler un «&nbsp;menu déroulant&nbsp;» (<i lang="en">combobox</i>) ou déplacer le curseur d'édition dans une cellule. Si cette fonctionnalité est nécessaire, voir [Édition et navigation dans une cellule <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#gridNav_inside).

## Problèmes d'accessibilité

Il est essentiel que toutes les cellules puissent recevoir ou contenir la sélection clavier, car les lecteurs d'écran sont généralement en mode application (et non en mode document) lors de l'interaction avec la grille. En mode application, l'utilisateur·ice du lecteur d'écran n'entend que les éléments sélectionnables et le contenu qui les étiquette. Si un contenu ne peut pas recevoir la sélection, il risque d'être ignoré par les utilisateur·ice·s de lecteurs d'écran.

## Spécifications

{{Specifications}}
