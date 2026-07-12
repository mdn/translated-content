---
title: "ARIA : rôle combobox"
short-title: combobox
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: d86426e69aaed1dbf19f09d92d78d1d320737733
---

Le rôle `combobox` identifie un élément comme étant soit un `input`, soit un `button` qui contrôle un autre élément, tel qu'un `listbox` ou une `grid`, qui peut apparaître dynamiquement pour aider l'utilisateur·ice à définir la valeur. Une boîte combinée (<i lang="en">combobox</i> en anglais) peut être soit modifiable (permettant la saisie de texte), soit uniquement sélectionnable (permettant uniquement la sélection dans la fenêtre intrusive (<i lang="en">popup</i> en anglais)).

## Description

Un `combobox` est un composant composite qui combine un champ de saisie nommé avec une fenêtre intrusive (<i lang="en">popup</i> en anglais) fournissant des valeurs possibles pour ce champ de saisie. Le but de ce composant est d'améliorer l'expérience utilisateur en aidant l'utilisateur·ice à sélectionner une valeur sans avoir à taper la valeur complète et, en fonction de la prise en charge des valeurs, d'empêcher l'utilisateur·ice d'entrer des valeurs non valides ou non prises en charge.

Le rôle `combobox` peut être défini sur un élément `input` pour les boîtes combinées (<i lang="en">combobox</i> en anglais) modifiables, ou sur un élément `button` pour les boîtes combinées uniquement sélectionnables. Cet élément contrôle un autre élément, tel qu'un `listbox` ou une `grid`, qui peut apparaître dynamiquement pour aider l'utilisateur·ice à définir une valeur.

L'élément avec le rôle `combobox` peut être soit un champ de texte à une seule ligne modifiable (utilisant un élément {{HTMLElement("input")}}, similaire à un champ de texte avec un {{HTMLElement("datalist")}}), soit un élément uniquement sélectionnable (utilisant un élément `button`) qui n'affiche que la valeur actuelle sans permettre la saisie de texte directe.

Une boîte combinée WAI-ARIA nécessite uniquement un attribut&nbsp;: [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Cependant, plusieurs autres attributs sont généralement nécessaires en fonction de l'implémentation&nbsp;: [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant), et [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete).

En général, l'état initial d'une boîte combinée est réduit, avec `aria-expanded="false"` défini. Dans l'état réduit, seul l'élément de boîte combinée et, éventuellement, un bouton voisin pour invoquer la fenêtre intrusive, sont visibles. [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), avec la valeur définie sur `false`, est requise lorsqu'elle est réduite, car elle indique aux technologies d'assistance que le composant est extensible.

La boîte combinée est dans l'état étendu lorsque l'élément de boîte combinée affichant sa valeur actuelle et son élément de fenêtre intrusive associé sont visibles. Lorsqu'il est étendu, `aria-expanded="true"` doit être défini.

L'élément de fenêtre intrusive associé à un `combobox` peut être soit une [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), soit un [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), soit une [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), soit un [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role).

Les boîtes combinées ont une valeur implicite de [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) de `listbox`, donc l'inclusion de cet attribut est facultative si la fenêtre intrusive est un `listbox`. Si l'élément de fenêtre intrusive de la boîte combinée est un `tree`, un `grid` ou un `dialog` (tout autre chose qu'un `listbox`), l'attribut `aria-haspopup` est requis. La valeur de `aria-haspopup` doit être soit le rôle `tree`, `grid`, `dialog` ou `listbox`. Notez que pour cette propriété, `true` signifie `menu`, donc assurez-vous que la valeur correspond au rôle de la fenêtre intrusive, et non à une valeur booléenne.

Lorsque la fenêtre intrusive d'une boîte combinée est affichée, assurez-vous que l'attribut [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) sur l'élément de boîte combinée est défini sur un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de l'élément de fenêtre intrusive `listbox`, `tree`, `grid` ou `dialog`. C'est ainsi que la relation entre l'élément avec le rôle `combobox` et la fenêtre intrusive qu'il contrôle est indiquée. (Remarque&nbsp;: Dans les anciennes spécifications ARIA, cela était `aria-owns` plutôt que `aria-controls`, vous pouvez donc voir `aria-owns` dans d'anciennes implémentations de la boîte combinée. Le `aria-owns` dans le code doit être mis à jour vers `aria-controls`&nbsp;!)

Si l'interface utilisateur de la boîte combinée inclut un contrôle visible, tel qu'une icône, qui permet de contrôler la visibilité de la fenêtre intrusive avec des évènements de pointeur et de toucher, ce contrôle doit être un {{HTMLElement("button")}}, {{HTMLElement("input")}} de type `button`, ou un élément de rôle [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) avec un [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) de `-1`. Cela permet au bouton d'être sélectionnable, mais pas incluse dans la séquence de tabulation du clavier. Il ne doit pas être un descendant de l'élément avec le rôle `combobox`.

Pour être accessible au clavier, le support du clavier pour déplacer la sélection entre l'élément `combobox` et les éléments contenus dans la fenêtre intrusive `listbox`, `tree`, `grid` ou `dialog`, doit être programmé. Une convention courante est que la touche <kbd>Flèche vers le bas</kbd> déplace la sélection de cu champ de saisie vers le premier descendant sélectionnable de l'élément de fenêtre intrusive.

La propriété [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) peut être utilisée pour identifier l'élément actuellement actif de la fenêtre intrusive de la boîte combinée, par exemple une `option` dans une fenêtre intrusive `listbox`, pour les implémentations où la sélection DOM reste sur la boîte combinée. Si la sélection DOM ne reste pas sur la boîte combinée lorsque sa fenêtre intrusive est invoquée, mais que la sélection DOM se déplace plutôt dans la fenêtre intrusive, comme un dialogue, alors `aria-activedescendant` peut ne pas être nécessaire.

Si la boîte combinée est implémentée comme un élément {{HTMLElement("input")}} modifiable, la valeur de la boîte combinée est la valeur de l'input. Pour les boîtes combinées uniquement sélectionnables implémentées avec un élément `button`, la valeur provient de l'option sélectionnée dans la fenêtre intrusive.

L'attribut [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) n'est applicable que pour les boîtes combinées modifiables qui prennent en charge la saisie de texte. Pour ces boîtes combinées, définissez l'attribut sur une valeur qui correspond au comportement fourni&nbsp;: `inline`, `list`, ou `both`. L'attribut indique que la saisie de texte déclenche l'affichage d'une ou plusieurs prédictions de la valeur prévue par l'utilisateur·ice et définit comment ces prédictions sont présentées. Pour les boîtes combinées uniquement sélectionnables utilisant un élément `button`, `aria-autocomplete` ne doit pas être utilisé, car aucune saisie de texte n'est possible.

Chaque `combobox` doit avoir un nom accessible, qui peut être fourni de l'une des trois manières suivantes&nbsp;:

1. Pour un élément {{HTMLElement("input")}}, utilisez un {{HTMLElement("label")}} associé.
2. Si une étiquette visible existe dans l'interface utilisateur, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) faisant référence à un `id` de l'élément d'étiquette.
3. Si aucune étiquette visible n'est présent, utilisez [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

> [!NOTE]
> Utilisez uniquement l'une de ces méthodes&nbsp;; ne les combinez pas.

### Rôles, états et propriétés WAI-ARIA associés

- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Requis. Identifie si la boîte combinée est ouverte (`true`) ou fermée (`false`).
- [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Implicite. Si omis, par défaut `listbox`. Prend également en charge `tree`, `grid` ou `dialog`. Identifie la boîte combinée comme ayant une fenêtre intrusive et indique le type.

### Interactions au clavier

- <kbd>Flèche vers le bas</kbd>
  - : Ouvre la fenêtre intrusive s'il est fermé et déplace la sélection vers l'option suivante, ou vers la première option si aucune n'a été sélectionnée.

- <kbd>Alt</kbd> + <kbd>Flèche vers le bas</kbd> (Optionnel)
  - : Si la fenêtre intrusive est disponible mais non affichée, affiche la fenêtre intrusive sans déplacer la sélection.

- <kbd>Flèche vers le haut</kbd>
  - : Ouvre la fenêtre intrusive s'il est fermé et déplace la sélection vers l'option précédente, ou vers la dernière option si aucune n'a été sélectionnée.

- <kbd>Alt</kbd> + <kbd>Flèche vers le haut</kbd> (Optionnel)
  - : Si la fenêtre intrusive a la sélection, retourne la sélection à la boîte combinée, sinon il ferme la fenêtre intrusive.

- <kbd>Échap</kbd>
  - : Ferme la fenêtre intrusive s'il est ouverte. Si la fenêtre intrusive est déjà fermée, efface la valeur de la boîte combinée pour les boîtes combinées éditables.

#### Interactions au clavier pour les boîtes combinées éditables

- <kbd>Entrée</kbd>
  - : Si une suggestion de saisie semi-automatique est sélectionnée dans la fenêtre intrusive, accepte la suggestion en mettant à jour la valeur de la boîte combinée et en plaçant le curseur d'entrée à la fin.
    Peut également déclencher une action par défaut (par exemple, dans une application de messagerie, ajouter la valeur acceptée à une liste de destinataires).

- <kbd>Tab</kbd>
  - : Accepte la valeur actuelle et déplace la sélection vers l'élément focusable suivant.

#### Interactions au clavier pour les boîtes combinées à sélection uniquement

- <kbd>Entrée</kbd> ou <kbd>Espace</kbd>
  - : Lorsque la fenêtre intrusive est fermée, ouvre la fenêtre intrusive. Lorsque la fenêtre intrusive est ouverte et qu'une option est sélectionnée, accepte l'option sélectionnée comme valeur de la boîte combinée et ferme la fenêtre intrusive.

- <kbd>Tab</kbd>
  - : Accepte la sélection actuelle et déplace la sélection vers l'élément focusable suivant.

- <kbd>Début</kbd> ou <kbd>Fin</kbd>
  - : Lorsque la fenêtre intrusive est ouverte, déplace la sélection vers la première ou la dernière option respectivement.

## Exemples

```html
<label for="jokes">Choisissez le type de blagues que vous aimez</label>
<div class="combo-wrap">
  <input
    type="text"
    id="jokes"
    role="combobox"
    aria-controls="joketypes"
    aria-autocomplete="list"
    aria-expanded="false"
    data-active-option="item1"
    aria-activedescendant="" />
  <span aria-hidden="true" data-trigger="multiselect"></span>
  <ul id="joketypes" role="listbox" aria-label="Blagues">
    <li class="active" role="option" id="item1">Jeux de mots</li>
    <li class="option" role="option" id="item2">Devinettes</li>
    <li class="option" role="option" id="item3">Visuelles</li>
    <li class="option" role="option" id="item4">Toc-toc</li>
    <li class="option" role="option" id="item5">Répliques</li>
  </ul>
</div>
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement("label")}}
- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("option")}}
- L'élément HTML {{HTMLElement("input")}}
- [ARIA&nbsp;: rôle `listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [ARIA&nbsp;: rôle `option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA&nbsp;: rôle `list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA&nbsp;: rôle `listitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [Meilleures pratiques ARIA - Liste déroulante <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- Un exemple de [Module de liste déroulante accessible <sup>(angl.)</sup>](https://dequelabs.github.io/combobo/demo/) par Deque
