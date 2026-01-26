---
title: "ARIA : rôle combobox"
short-title: combobox
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: d86426e69aaed1dbf19f09d92d78d1d320737733
---

Le rôle `combobox` identifie un élément comme étant soit un `input`, soit un `button` qui contrôle un autre élément, tel qu'un `listbox` ou une `grid`, qui peut apparaître dynamiquement pour aider l'utilisateur·ice à définir la valeur. Un combobox peut être soit modifiable (permettant la saisie de texte), soit uniquement sélectionnable (permettant uniquement la sélection dans le popup).

## Description

Un `combobox` est un widget composite qui combine un champ de saisie nommé avec un popup fournissant des valeurs possibles pour ce champ de saisie. Le but de ce widget est d'améliorer l'expérience utilisateur en aidant l'utilisateur·ice à sélectionner une valeur sans avoir à taper la valeur complète et, en fonction de la prise en charge des valeurs, d'empêcher l'utilisateur·ice d'entrer des valeurs non valides ou non prises en charge.

Le rôle `combobox` peut être défini sur un élément `input` pour les combobox modifiables, ou sur un élément `button` pour les combobox uniquement sélectionnables. Cet élément contrôle un autre élément, tel qu'un `listbox` ou une `grid`, qui peut apparaître dynamiquement pour aider l'utilisateur·ice à définir une valeur.

L'élément avec le rôle `combobox` peut être soit un champ de texte à une seule ligne modifiable (utilisant un élément {{HTMLElement('input')}}), similaire à un avec un {{HTMLElement('datalist')}}), soit un élément uniquement sélectionnable (utilisant un élément `button`) qui n'affiche que la valeur actuelle sans permettre la saisie de texte directe.

Un combobox WAI-ARIA nécessite uniquement un attribut&nbsp;: [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Cependant, plusieurs autres attributs sont généralement nécessaires en fonction de l'implémentation&nbsp;: [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant), et [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete).

En général, l'état initial d'un combobox est réduit, avec `aria-expanded="false"` défini. Dans l'état réduit, seul l'élément combobox et, éventuellement, un bouton frère pour invoquer le popup, sont visibles. L'[`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), avec la valeur définie sur `false`, est requise lorsqu'elle est réduite, car elle indique aux technologies d'assistance que le widget est extensible.

Le combobox est dans l'état étendu lorsque l'élément combobox affichant sa valeur actuelle et son élément popup associé sont visibles. Lorsqu'il est étendu, `aria-expanded="true"` doit être défini.

L'élément popup associé à un `combobox` peut être soit un [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), soit un [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), soit un [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), soit un [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role).

Les combobox ont une valeur implicite de [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) de `listbox`, donc l'inclusion de cet attribut est facultative si le popup est un `listbox`. Si l'élément popup du combobox est un `tree`, un `grid` ou un `dialog` (tout autre chose qu'un `listbox`), l'attribut `aria-haspopup` est requis. La valeur de `aria-haspopup` doit être soit le rôle `tree`, `grid`, `dialog` ou `listbox`. Notez que pour cette propriété, `true` signifie `menu`, donc assurez-vous que la valeur correspond au rôle du popup, et non à une valeur booléenne.

Lorsque le popup d'un combobox est affiché, assurez-vous que l'attribut [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) sur l'élément combobox est défini sur l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de l'élément popup `listbox`, `tree`, `grid` ou `dialog`. C'est ainsi que la relation entre l'élément avec le rôle `combobox` et le popup qu'il contrôle est indiquée. (Remarque&nbsp;: Dans les anciennes spécifications ARIA, cela était `aria-owns` plutôt que `aria-controls`, vous pouvez donc voir `aria-owns` dans d'anciennes implémentations de combobox. Le `aria-owns` dans le code doit être mis à jour vers `aria-controls` !)

Si l'interface utilisateur du combobox inclut un contrôle visible, tel qu'une icône, qui permet de contrôler la visibilité du popup via des événements de pointeur et de toucher, ce contrôle doit être un {{HTMLElement('button')}}, {{HTMLElement('input')}} de type `button`, ou un élément de rôle [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) avec un [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) de `-1`. Cela permettra au bouton d'être focalisable mais pas inclus dans la séquence de tabulation du clavier. Il ne doit pas être un descendant de l'élément avec le rôle `combobox`.

Pour être accessible au clavier, le support du clavier pour déplacer le focus entre l'élément `combobox` et les éléments contenus dans le popup `listbox`, `tree`, `grid` ou `dialog`, doit être programmé. Une convention courante est que la touche <kbd>Flèche vers le bas</kbd> déplace le focus de l'input vers le premier descendant focalisable de l'élément popup.

La propriété [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) peut être utilisée pour identifier l'élément actuellement actif du popup du combobox, par exemple une `option` dans un popup `listbox`, pour les implémentations où le focus DOM reste sur le combobox. Si le focus DOM ne reste pas sur le combobox lorsque son popup est invoqué, mais que le focus DOM se déplace plutôt dans le popup, comme un dialogue, alors `aria-activedescendant` peut ne pas être nécessaire.

Si le combobox est implémenté comme un élément {{HTMLElement('input')}} modifiable, la valeur du combobox est la valeur de l'input. Pour les combobox uniquement sélectionnables implémentés avec un élément `button`, la valeur provient de l'option sélectionnée dans le popup.

L'attribut [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) n'est applicable que pour les combobox modifiables qui prennent en charge la saisie de texte. Pour ces combobox, définissez l'attribut sur une valeur qui correspond au comportement fourni&nbsp;: `inline`, `list`, ou `both`. L'attribut indique que la saisie de texte déclenchera l'affichage d'une ou plusieurs prédictions de la valeur prévue par l'utilisateur·ice et spécifie comment ces prédictions seront présentées. Pour les combobox uniquement sélectionnables utilisant un élément `button`, `aria-autocomplete` ne doit pas être utilisé car aucune saisie de texte n'est possible.

Chaque `combobox` doit avoir un nom accessible, qui peut être fourni de l'une des trois manières suivantes&nbsp;:

1. Pour un élément {{HTMLElement('input')}}, utilisez un {{HTMLElement('label')}} associé.
2. Si un label visible existe dans l'interface utilisateur, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) faisant référence à l'`id` de l'élément label.
3. Si aucun label visible n'est présent, utilisez [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

> [!NOTE]
> Utilisez uniquement l'une de ces méthodes ; ne les combinez pas.

### Rôles, états et propriétés WAI-ARIA associés

- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Requis. Identifie si le combobox est ouvert (`true`) ou fermé (`false`).
- [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Implicite. Si omis, par défaut `listbox`. Prend également en charge `tree`, `grid` ou `dialog`. Identifie le combobox comme ayant un popout et indique le type.

### Interactions au clavier

- <kbd>Flèche vers le bas</kbd>
  - : Ouvre le popup s'il est fermé et déplace le focus vers l'option suivante, ou vers la première option si aucune n'a été sélectionnée.

- <kbd>Alt</kbd> + <kbd>Flèche vers le bas</kbd> (Optionnel)
  - : Si le popup est disponible mais non affiché, affiche le popup sans déplacer le focus.

- <kbd>Flèche vers le haut</kbd>
  - : Ouvre le popup s'il est fermé et déplace le focus vers l'option précédente, ou vers la dernière option si aucune n'a été sélectionnée.

- <kbd>Alt</kbd> + <kbd>Flèche vers le haut</kbd> (Optionnel)
  - : Si le popup a le focus, renvoie le focus au combobox, sinon il ferme le popup.

- <kbd>Échap</kbd>
  - : Ferme le popup s'il est ouvert. Si le popup est déjà fermé, efface la valeur du combobox pour les combobox éditables.

#### Interactions au clavier pour les combobox éditables

- <kbd>Entrée</kbd>
  - : Si une suggestion de saisie semi-automatique est sélectionnée dans le popup, accepte la suggestion en mettant à jour la valeur du combobox et en plaçant le curseur d'entrée à la fin.
    Peut également déclencher une action par défaut (par exemple, dans une application de messagerie, ajouter la valeur acceptée à une liste de destinataires).

- <kbd>Tab</kbd>
  - : Accepte la valeur actuelle et déplace le focus vers l'élément focusable suivant.

#### Interactions au clavier pour les combobox à sélection uniquement

- <kbd>Entrée</kbd> ou <kbd>Espace</kbd>
  - : Lorsque le popup est fermé, ouvre le popup. Lorsque le popup est ouvert et qu'une option est sélectionnée, accepte l'option sélectionnée comme valeur du combobox et ferme le popup.

- <kbd>Tab</kbd>
  - : Accepte la sélection actuelle et déplace le focus vers l'élément focusable suivant.

- <kbd>Début</kbd> ou <kbd>Fin</kbd>
  - : Lorsque le popup est ouvert, déplace le focus vers la première ou la dernière option respectivement.

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

- L'élément HTML {{HTMLElement('label')}}
- L'élément HTML {{HTMLElement('select')}}
- L'élément HTML {{HTMLElement('option')}}
- L'élément HTML {{HTMLElement('input')}}
- [ARIA&nbsp;: rôle `listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [ARIA&nbsp;: rôle `option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA&nbsp;: rôle `list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA&nbsp;: rôle `listitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [Meilleures pratiques ARIA - Liste déroulante <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- Un exemple de [Module de liste déroulante accessible <sup>(angl.)</sup>](https://dequelabs.github.io/combobo/demo/) par Deque
