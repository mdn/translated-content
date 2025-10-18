---
title: "ARIA : rôle listbox"
short-title: listbox
slug: Web/Accessibility/ARIA/Reference/Roles/listbox_role
original_slug: Web/Accessibility/ARIA/Roles/listbox_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `listbox` est utilisé pour les listes à partir desquelles un·e utilisateur·ice peut sélectionner un ou plusieurs éléments qui sont statiques et, contrairement aux éléments HTML {{HTMLElement('select')}}, peuvent contenir des images.

## Description

Le rôle `listbox` est utilisé pour identifier un élément qui crée une liste à partir de laquelle un·e utilisateur·ice peut sélectionner un ou plusieurs éléments statiques, similaire à l'élément HTML {{HTMLElement('select')}}. Contrairement à {{HTMLElement('select')}}, une boîtes de liste peut contenir des images. Les boîtes de liste contiennent des enfants dont le rôle est [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) ou des éléments dont le rôle est [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) qui contiennent à leur tour des enfants dont le rôle est `option`.

Il est fortement recommandé d'utiliser l'élément HTML `<select>`, ou un groupe de boutons radio si un seul élément peut être sélectionné, ou un groupe de cases à cocher si plusieurs éléments peuvent être sélectionnés, car il y a beaucoup d'interactivité au clavier à gérer pour le focus de tous les descendants, et les éléments HTML natifs fournissent cette fonctionnalité gratuitement.

Les éléments avec le rôle `listbox` ont une valeur implicite de [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) de `vertical`.

Lorsqu'une liste est sélectionnée, le premier élément de la liste sera sélectionné si rien d'autre ne l'est déjà. Les flèches haut/bas naviguent dans la liste, et en appuyant sur <kbd>Maj</kbd> + flèches haut/bas, la sélection sera déplacée et étendue. Taper une ou plusieurs lettres naviguera dans les éléments de la liste (la même lettre va à chaque élément commençant par cela, des lettres différentes vont au premier élément commençant par cette chaîne entière). Si l'élément actuel a un menu contextuel associé, <kbd>Maj</kbd> + <kbd>F10</kbd> lancera ce menu. Si les éléments de la liste sont sélectionnables, la barre d'espace peut être utilisée pour basculer les [cases à cocher](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role). Pour les éléments de liste sélectionnables, la barre d'espace bascule leur sélection, <kbd>Maj</kbd> + <kbd>Espace</kbd> peut être utilisé pour sélectionner des éléments contigus, <kbd>Ctrl</kbd> + flèche se déplace sans sélectionner, et <kbd>Ctrl</kbd> + <kbd>Espace</kbd> peut être utilisé pour sélectionner des éléments non contigus. Il est recommandé d'utiliser une case à cocher, un lien ou une autre méthode pour sélectionner tous les éléments, et <kbd>Ctrl</kbd> + <kbd>A</kbd> pourrait être utilisé comme touche de raccourci pour cela.

Lorsque le rôle `listbox` est ajouté à un élément, ou qu'un tel élément devient visible, les lecteurs d'écran annoncent l'étiquette et le rôle de la boîte de liste lorsqu'elle obtient la sélection. Si un élément ou une option est focalisé dans la liste, il est annoncé ensuite, suivi d'une indication de la position de l'élément dans la liste si le lecteur d'écran prend en charge cela. Au fur et à mesure que la sélection se déplace dans la liste, le lecteur d'écran annonce les éléments pertinents.

### Propriétés, états et rôles ARIA associés

#### Rôles associés

- rôle [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
  - : Un ou plusieurs éléments d'option imbriqués sont requis. Tous les éléments d'option sélectionnés ont [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) défini sur `true`. Tous les éléments d'option qui ne sont pas sélectionnés ont [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) défini sur `false`. Si un élément d'option n'est pas sélectionnable, omettez [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).
- rôle [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : Une section contenant des éléments `listitem`

#### États et propriétés

- [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Contient la chaîne de caractères `id` de l'élément actuellement actif au sein de la boîte de liste. Si c'est un élément d'option, alors ce serait l'`id` de l'option avec laquelle l'utilisateur·ice a interagi le plus récemment, peu importe si cette option a une valeur [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) de `true` ou non. Prend la valeur d'un seul `id`, même dans une boîte de liste multisélectionnable. Si l'`id` ne fait pas référence à un descendant DOM de la boîte de liste, alors cet `id` doit être inclus parmi les IDs dans l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns).
- [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Il s'agit d'une liste d'IDs d'éléments séparés par des espaces qui ne sont pas des éléments enfants DOM de la boîte de liste. Les IDs énumérés ici ne peuvent pas également être énumérés dans les attributs [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) d'autres éléments.

- [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Inclure et définir sur `true` si l'utilisateur·ice peut sélectionner plus d'une option. Si défini sur `true`, _chaque_ option sélectionnable doit avoir un attribut [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) inclus et défini sur `true` ou `false`. Les options qui ne sont _pas_ sélectionnables _ne doivent pas_ avoir l'attribut [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Si `false` ou omis, seule l'option actuellement sélectionnée, si une option est sélectionnée, a besoin de l'attribut [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), et il doit être défini sur `true`.

- [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Un attribut booléen qui indique qu'une option avec une valeur de chaîne non vide doit être sélectionnée.

- [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : L'utilisateur·ice ne peut pas changer les options sélectionnées ou désélectionnées, mais la boîte de liste est autrement utilisable.

- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Une valeur de chaîne de caractères lisible pour un·e humain·e qui identifie la boîte de liste. S'il y a une étiquette visible, alors [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) devrait être utilisé à la place pour se référer à cette étiquette.

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Identifie l'élément ou les éléments visibles dans une liste d'IDs d'éléments séparés par des espaces qui identifient la boîte de liste. S'il n'y a pas d'étiquette visible, alors [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) devrait être utilisé à la place pour inclure une étiquette. (Remarque&nbsp;: «&nbsp;_labelled_&nbsp;», avec deux L, est l'orthographe correcte basée sur les conventions de l'API d'accessibilité.)

- [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Une valeur de chaîne de caractères lisible pour un·e humain·e qui identifie plus clairement le rôle de la boîte de liste. Les lecteurs d'écran liront souvent cette valeur à l'utilisateur·ice après avoir lu l'étiquette (s'il y en a une), à la place de dire «&nbsp;boîte de liste&nbsp;».

### Interactions au clavier

- Quand une boîte de liste à sélection unique reçoit la sélection&nbsp;:
  - Si aucune des options n'est sélectionnée avant que la boîte de liste ne reçoive la sélection, la première option reçoit la sélection. En option, la première option peut également être automatiquement sélectionnée.
  - Si une option est sélectionnée avant que la boîte de liste ne reçoive la sélection, elle est placée sur l'option sélectionnée.

- Quand une boîte de liste à sélection multiple reçoit la sélection&nbsp;:
  - Si aucune des options n'est sélectionnée avant que la boîte de liste ne reçoive la sélection, elle est placée sur la première option et il n'y a pas de changement automatique de l'état de sélection.
  - Si une ou plusieurs options sont sélectionnées avant que la boîte de liste ne reçoive la sélection, elle est placée sur la première option de la liste qui est sélectionnée.

- <kbd>Flèche vers le bas</kbd>
  - : Déplace la sélection sur l'option suivante. En option, dans une boîte de liste à sélection unique, la sélection peut également se déplacer avec la sélection.

- <kbd>Flèche vers le haut</kbd>
  - : Déplace la sélection sur l'option précédente. En option, dans une boîte de liste à sélection unique, la sélection peut également se déplacer avec la sélection.

- <kbd>Début</kbd>
  - : (Optionnel)&nbsp;: Déplace la sélection sur la première option. En option, dans une boîte de liste à sélection unique, la sélection peut également se déplacer avec la sélection. Il est fortement recommandé de prendre en charge cette touche pour les listes de plus de cinq options.

- <kbd>Fin</kbd>
  - : (Optionnel)&nbsp;: Déplace la sélection sur la dernière option. En option, dans une boîte de liste à sélection unique, la sélection peut également se déplacer avec la sélection. Il est fortement recommandé de prendre en charge cette touche pour les listes de plus de cinq options.

- La saisie anticipée est recommandée pour toutes les boîtes de liste, en particulier celles avec plus de sept options&nbsp;:
  - Tapez un caractère&nbsp;: la sélection se déplace vers l'élément suivant dont le nom commence par le caractère tapé.
  - Tapez plusieurs caractères en succession rapide&nbsp;: la sélection se déplace vers l'élément suivant dont le nom commence par la chaîne de caractères tapée.

- **Sélection multiple**&nbsp;: Les auteurs peuvent mettre en œuvre l'un des deux modèles d'interaction pour prendre en charge la sélection multiple&nbsp;: un modèle recommandé qui ne nécessite pas que l'utilisateur·ice maintienne une touche de modification, telle que <kbd>Maj</kbd> ou <kbd>Ctrl</kbd>, lors de la navigation dans la liste ou un modèle alternatif qui nécessite que les touches de modification soient maintenues pendant la navigation afin d'éviter de perdre les états de sélection.
  - Modèle de sélection recommandé — le maintien des touches de modification n'est pas nécessaire&nbsp;:
    - <kbd>Espace</kbd>&nbsp;: change l'état de sélection de l'option mise au point.
    - <kbd>Maj + Flèche vers le bas</kbd> (Optionnel)&nbsp;: Déplace la sélection et bascule l'état sélectionné de l'option suivante.
    - <kbd>Maj + Flèche vers le haut</kbd> (Optionnel)&nbsp;: Déplace la sélection et bascule l'état sélectionné de l'option précédente.
    - <kbd>Maj + Espace</kbd> (Optionnel): Sélectionne les éléments contigus de l'élément le plus récemment sélectionné à l'élément mis au point.
    - <kbd>Ctrl + Maj + Début</kbd> (Optionnel)&nbsp;: Sélectionne l'option mise au point et toutes les options jusqu'à la première option. En option, déplace la sélection vers la première option.
    - <kbd>Ctrl + Maj + Fin</kbd> (Optionnel)&nbsp;: Sélectionne l'option mise au point et toutes les options jusqu'à la dernière option. En option, déplace la sélection vers la dernière option.
    - <kbd>Ctrl + A</kbd> (Optionnel)&nbsp;: Sélectionne toutes les options de la liste. En option, si toutes les options sont sélectionnées, cela peut également désélectionner toutes les options.

### Fonctionnalités JavaScript requises

#### Sélection d'une option dans une boîte de liste à sélection unique

Lorsque l'utilisateur·ice sélectionne une option, les éléments suivants doivent se produire&nbsp;:

1. Désélectionner l'option précédemment sélectionnée, en définissant l'attribut [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) sur `false`, ou en supprimant complètement l'attribut, changeant l'apparence de l'option nouvellement désélectionnée pour qu'elle apparaisse non sélectionnée.
2. Sélectionner la nouvelle option sélectionnée, en définissant `aria-selected="true"` sur l'option et en changeant l'apparence de la nouvelle option sélectionnée pour qu'elle apparaisse sélectionnée.
3. Mettre à jour la valeur de [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) sur la boîte de liste avec l'ID de la nouvelle option sélectionnée.
4. Gérer visuellement les états de flou, de focus et de sélection de l'option.

#### Changement de l'état d'une option dans une boîte de liste à sélection multiple

Lorsque l'utilisateur·ice clique sur une option, appuie sur <kbd>Espace</kbd> lorsqu'il·elle est focalisé·e sur une option, ou change autrement l'état d'une option, les éléments suivants doivent se produire&nbsp;:

1. Basculer l'état de [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) de l'option actuellement focalisée, en changeant l'état de `aria-selected` en true si c'était false ou false si c'était true.
2. Changer l'apparence de l'option pour refléter son état sélectionné.
3. Mettre à jour la valeur de [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) sur la boîte de liste avec l'ID de l'option avec laquelle l'utilisateur·ice vient d'interagir, même s'il·elle a basculé l'option pour qu'elle ne soit plus sélectionnée.

> [!NOTE]
> La première règle de l'utilisation d'ARIA est que si vous pouvez utiliser une fonctionnalité native avec la sémantique et le comportement dont vous avez besoin déjà intégrés, au lieu de réutiliser un élément et **d'ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible, alors faites-le. L'élément {{HTMLElement('select')}} avec des éléments {{HTMLElement('option')}} descendants gère toutes les interactions nécessaires de manière native.

## Exemples

### Exemple 1&nbsp;: une liste de sélection simple qui utilise l'attribut `aria-activedescendant`

Le code ci-dessous, utilisant [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant), montre comment le rôle de la boîte de liste est ajouté directement dans le code source HTML.

```html
<p id="listbox1label" role="label">Sélectionnez une couleur&nbsp;:</p>
<div
  role="listbox"
  tabindex="0"
  id="listbox1"
  aria-labelledby="listbox1label"
  aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">
    Vert
  </div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Rouge</div>
  <div role="option" id="listbox1-4">Bleu</div>
  <div role="option" id="listbox1-5">Violet</div>
  <div role="option" id="listbox1-6">Periwinkle (Mauve)</div>
</div>
```

```js
const listbox = document.getElementById("listbox1");
listbox.addEventListener("click", listItemClick);
listbox.addEventListener("keydown", listItemKeyEvent);
listbox.addEventListener("keypress", listItemKeyEvent);
```

Cela aurait pu être plus facilement géré avec les éléments HTML natifs {{HTMLElement('select')}} et {{HTMLElement('label')}}.

```html
<label for="listbox1">Sélectionnez une couleur&nbsp;:</label>
<select id="listbox1">
  <option selected>Vert</option>
  <option>Orange</option>
  <option>Rouge</option>
  <option>Bleu</option>
  <option>Violet</option>
  <option>Periwinkle (Mauve)</option>
</select>
```

### Autres exemples

- [Exemple de liste déroulante <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-scrollable/)&nbsp;: Liste déroulante à sélection unique qui défile pour révéler plus d'options, similaire à HTML {{HTMLElement('select')}} avec l'attribut `size` supérieur à un.
- [Exemple de liste déroulante avec options groupées <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/)&nbsp;: Liste déroulante à sélection unique avec options groupées, similaire à HTML {{HTMLElement('select')}} avec l'attribut `size` supérieur à `"1"` et options regroupées avec des éléments `optgroup`.
- [Exemple de listes déroulantes avec options réorganisables <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/)&nbsp;: Exemples de listes déroulantes à sélection unique et multiple avec des barres d'outils accompagnantes où les options peuvent être ajoutées, déplacées et supprimées.

## Bonnes pratiques

- Pour être accessible au clavier, les auteur·ice·s doivent [gérer le focus](https://w3c.github.io/aria/#managingfocus) de tous les descendants de ce rôle.
- Il est recommandé que les auteur·ice·s utilisent un style différent pour la sélection lorsque la liste n'est pas focalisée, par exemple, une sélection non active est souvent affichée avec une couleur de fond plus claire.
- Si la boîte de liste ne fait pas partie d'un autre widget, elle doit avoir la propriété [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) définie.
- Si une ou plusieurs entrées ne sont pas des enfants DOM de la boîte de liste, des propriétés `aria-*` supplémentaires devront être définies (voir [Bonnes pratiques ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)).
- S'il y a une raison valable d'[étendre](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) la boîte de liste, le rôle [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) peut être plus approprié.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('select')}}
- L'élément HTML {{HTMLElement('label')}}
- L'élément HTML {{HTMLElement('option')}}
- [ARIA&nbsp;: rôle `combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA&nbsp;: rôle `option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA&nbsp;: rôle `list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA&nbsp;: rôle `listitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [Bonnes pratiques ARIA - Liste déroulante <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
