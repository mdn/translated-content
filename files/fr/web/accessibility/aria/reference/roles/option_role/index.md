---
title: "ARIA : rôle option"
short-title: option
slug: Web/Accessibility/ARIA/Reference/Roles/option_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `option` est utilisé pour les éléments sélectionnables dans une `listbox`.

## Description

Le rôle `option` sert à identifier les choix qu'un·e utilisateur·ice peut sélectionner dans une [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role). Ces options sont similaires aux éléments {{HTMLElement('option')}} dans un élément {{HTMLElement('select')}}, mais elles peuvent contenir des images.

Toutes les options sélectionnables doivent avoir [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) correspondant à leur état&nbsp;: `true` si sélectionnée, `false` sinon. Si une option n'est pas sélectionnable, `aria-selected` peut être omis. Une option désactivée peut avoir [`aria-disabled="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) et `aria-selected="false"` pour indiquer à l'utilisateur·ice que l'option est présente mais désactivée.

Le rôle `option` sert à identifier les choix sélectionnables d'un `listbox`. Les options doivent avoir un nom accessible. En général, le nom accessible d'une option doit provenir du contenu descendant de l'élément.

Il est aussi possible de fournir explicitement un nom accessible en utilisant [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) sur l'élément ayant le rôle `option`. Si vous utilisez `aria-label` ou `aria-labelledby` et que l'option affiche aussi un label texte visible, veillez à respecter le [critère de succès WCAG 2.5.3 Label in Name <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html).

Il est fortement recommandé d'utiliser un élément {{HTMLElement('select')}} ou un élément {{HTMLElement('input')}} de type `checkbox` ou `radio` lorsque cela est possible. Ces éléments HTML natifs gèrent automatiquement l'interactivité clavier et la gestion du focus pour tous les descendants.

### Tous les descendants sont des éléments de présentation

Certaines interfaces utilisateur, lorsqu'elles sont représentées dans une API d'accessibilité de plateforme, ne peuvent contenir que du texte. Les API d'accessibilité ne permettent pas de représenter des éléments sémantiques contenus dans un `option`. Pour pallier cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants d'un élément `option`, car il s'agit d'un rôle qui ne prend pas en charge les enfants sémantiques.

Par exemple, considérez l'élément `option` suivant, qui contient un titre&nbsp;:

```html
<div role="option"><h3>Titre de mon option</h3></div>
```

Comme les descendants de `option` sont des éléments de présentation, le code suivant est équivalent&nbsp;:

```html
<div role="option"><h3 role="presentation">Titre de mon option</h3></div>
```

Du point de vue de l'utilisateur·ice de technologies d'assistance, le titre n'existe pas puisque les extraits de code précédents sont équivalents à ce qui suit dans [l'arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="option">Titre de mon option</div>
```

### Propriétés, états et rôles WAI-ARIA associés

#### Rôles associés

- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
  - : Un `option` _doit_ être contenu ou possédé par un `listbox`.

#### États et propriétés

- [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Sert à décrire l'état de sélection de l'option. Obligatoire.

- [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Sert à décrire l'état coché lorsque les options sont utilisées en sélection multiple. Accepte `true`, `false` et `mixed`. Optionnel.

- [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : Sert à décrire la position dans l'ensemble des options lorsque cela ne correspond pas au DOM, comme dans le cas du défilement virtuel où seules certaines options sont présentes à un instant donné. Optionnel.

- [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : Utilisé avec `aria-posinset` pour indiquer le nombre total d'options. Optionnel.

- [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Sert à indiquer que l'option est présente mais non modifiable. Optionnel.

- [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
  - : Sert à masquer l'option des outils d'accessibilité. À utiliser uniquement pour masquer du contenu non visible ou du contenu visible si cela améliore l'expérience des technologies d'assistance, comme du contenu redondant. Optionnel.

- [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
  - : Sert à indiquer que la valeur de l'option est considérée comme invalide par l'application. Optionnel.

- [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
  - : Sert à indiquer qu'un élément est en cours de modification, par exemple lors du chargement. Optionnel.

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Sert à indiquer quel élément étiquette l'option. Le contenu de l'option doit être utilisé à la place lorsque c'est pertinent. Optionnel.

- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Sert à étiqueter l'option. Si le label est présent dans le DOM, il faut utiliser `aria-labelledby` à la place. Optionnel.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('select')}}
- L'élément HTML {{HTMLElement('label')}}
- L'élément HTML {{HTMLElement('option')}}
- [ARIA&nbsp;: rôle `combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA&nbsp;: rôle `list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA&nbsp;: rôle `listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
