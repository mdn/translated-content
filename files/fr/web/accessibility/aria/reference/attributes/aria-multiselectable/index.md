---
title: "ARIA : attribut aria-multiselectable"
short-title: aria-multiselectable
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-multiselectable` indique que l'utilisateur·ice peut sélectionner plusieurs éléments parmi les descendants sélectionnables.

## Description

Le comportement par défaut des listes de sélection, comme {{HTMLElement('select')}}, est de permettre de choisir un seul élément ou une seule option. Par défaut ou par convention, lorsqu'un·e utilisateur·ice est face à une liste où il·elle doit sélectionner un élément, il·elle suppose qu'une seule sélection est possible, sauf indication contraire. L'attribut `aria-multiselectable` permet d'informer les utilisateur·ice·s de technologies d'assistance qu'il·elle·s peuvent sélectionner plusieurs éléments parmi les éléments sélectionnables. Les listes et les arbres sont des exemples de rôles pouvant permettre la sélection multiple.

> [!NOTE]
> Si vous autorisez la sélection multiple, informez l'utilisateur·ice que plusieurs valeurs sont possibles et donnez des instructions, par exemple&nbsp;: «&nbsp;Pour sélectionner plusieurs valeurs, maintenez la touche Ctrl enfoncée pendant la sélection.&nbsp;»

### Utilisation avec `aria-selected`

Lorsque l'utilisateur·ice sélectionne un ou plusieurs éléments, pensez à définir les descendants sélectionnés avec [`aria-selected="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), et les descendants sélectionnables non sélectionnés avec `aria-selected="false"`. Si un élément n'est pas sélectionnable, omettez l'attribut `aria-selected`&nbsp;: sa présence indique à l'utilisateur·ice que l'élément est sélectionnable.

Si un arbre, une grille, une liste d'onglets ou une boîte de liste permet la sélection de plusieurs nœuds, l'élément avec le rôle [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) ou [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) doit avoir `aria-multiselectable` à `true`. Sinon, la valeur par défaut `false` est utilisée ou l'attribut est défini à `false`.

## Exemple

```html
<p id="colorOptions">Choisissez les couleurs de votre drapeau.</p>
<ul
  tabindex="0"
  role="listbox"
  aria-labelledby="colorOptions"
  aria-multiselectable="true">
  <li id="red" role="option" aria-selected="false">Rouge</li>
  <li id="orange" role="option" aria-selected="false">Orange</li>
  <li id="yellow" role="option" aria-selected="false">Jaune</li>
  <li id="green" role="option" aria-selected="false">Vert</li>
  <li id="blue" role="option" aria-selected="false">Bleu</li>
  <li id="purple" role="option" aria-selected="false">Violet</li>
  <li id="magenta" role="option" aria-selected="false">Rose vif</li>
  <li id="lightpink" role="option" aria-selected="true">Rose clair</li>
  <li id="white" role="option" aria-selected="true">Blanc</li>
  <li id="lightblue" role="option" aria-selected="true">Bleu clair</li>
  <li id="black" role="option" aria-selected="false">Noir</li>
  <li id="brown" role="option" aria-selected="false">Marron</li>
</ul>
```

Cette boîte de liste permet la sélection multiple&nbsp;: l'élément avec le rôle `listbox` a `aria-multiselectable="true"`. Toutes les options sélectionnées ont `aria-selected` à `true`. Les options non sélectionnées mais sélectionnables ont `aria-selected` à `false`. Si des options étaient désactivées ou non sélectionnables, on aurait omis l'attribut `aria-selected`. Inclure l'attribut, même sans valeur ou explicitement à `false`, indique aux utilisateur·ice·s de technologies d'assistance que l'élément est sélectionnable.

La première règle d'utilisation d'ARIA est&nbsp;: «&nbsp;Si vous pouvez utiliser une fonctionnalité native qui possède déjà la sémantique et le comportement requis, au lieu de détourner un élément et d'ajouter un rôle, un état ou une propriété ARIA pour le rendre accessible, faites-le.&nbsp;» Au lieu de créer une liste non ordonnée nécessitant [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex), ARIA et JavaScript pour rendre le texte sélectionnable, on peut utiliser un multiselect natif&nbsp;: l'élément {{HTMLElement('select')}} possède l'attribut booléen [`multiple`](/fr/docs/Web/HTML/Reference/Elements/select#multiple). Si présent, l'utilisateur·ice peut sélectionner plusieurs options. Sinon, une seule option peut être sélectionnée.

```html
<label for="flagcolors"> Choisissez les couleurs de votre drapeau. </label>
<select multiple id="flagcolors">
  <option value="red">Rouge</option>
  <option value="orange">Orange</option>
  <option value="yellow">Jaune</option>
  <option value="green">Vert</option>
  <option value="blue">Bleu</option>
  <option value="purple">Violet</option>
  <option value="magenta">Rose vif</option>
  <option value="lightpink" selected>Rose clair</option>
  <option value="white" selected>Blanc</option>
  <option value="lightblue" selected>Bleu clair</option>
  <option value="black">Noir</option>
  <option value="brown">Marron</option>
</select>
```

Cette version HTML `<select>` est accessible et interactive, et ne nécessite ni ARIA ni JavaScript pour fonctionner.

Si la solution ci-dessus ne vous convient pas pour la mise en forme, vous pouvez aussi créer une liste d'options sélectionnables avec des cases à cocher HTML, ce qui est aussi sémantique, sélectionnable et personnalisable avec CSS&nbsp;:

```html
<fieldset>
  <legend>Choisissez les couleurs de votre drapeau.</legend>
  <ul>
    <li>
      <label><input type="checkbox" name="fc" value="red" />Rouge</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="orange" />Orange</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="yellow" />Jaune</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="green" />Vert</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="blue" />Bleu</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="purple" />Violet</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="magenta" />Rose vif</label>
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="lightpink" checked />Rose
        clair</label
      >
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="white" checked />Blanc</label
      >
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="lightblue" checked />Bleu
        clair</label
      >
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="black" />Noir</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="brown" />Marron</label>
    </li>
  </ul>
</fieldset>
```

Au lieu de `aria-selected="true"`, utilisez l'attribut [`checked`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox#checked). Le navigateur fait le reste.

## Valeurs

- `true`
  - : Plusieurs éléments du widget peuvent être sélectionnés simultanément.
- `false`
  - : Un seul élément peut être sélectionné.

## Interfaces associées

- {{DOMxRef("Element.ariaMultiSelectable")}}
  - : La propriété [`ariaMultiSelectable`](/fr/docs/Web/API/Element/ariaMultiSelectable), faisant partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-multiselectable`.
- {{DOMxRef("ElementInternals.ariaMultiSelectable")}}
  - : La propriété [`ariaMultiSelectable`](/fr/docs/Web/API/ElementInternals/ariaMultiSelectable), faisant partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-multiselectable`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Hérité par les rôles&nbsp;:

- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('select')}}
- L'élément HTML {{HTMLElement('option')}}
- L'élément HTML {{HTMLElement('input')}}
- L'attribut HTML [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple)
- L'attribut ARIA [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
