---
title: "ARIA : rôle radio"
short-title: radio
slug: Web/Accessibility/ARIA/Reference/Roles/radio_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `radio` fait partie d'un groupe de boutons radio sélectionnables, dans un `radiogroup`, où un seul bouton radio peut être sélectionné à la fois.

## Description

Un bouton radio est un champ de saisie sélectionnable qui, lorsqu'il est associé à d'autres boutons radio, ne permet qu'à un seul d'être sélectionné à la fois. Les boutons radio doivent être regroupés dans un [`radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) pour indiquer lesquels affectent la même valeur.

```html
<div role="radiogroup" aria-labelledby="legend25" id="radiogroup25">
  <p id="legend25">Ipsum et lorem&nbsp;?</p>
  <div>
    <span
      role="radio"
      aria-checked="false"
      tabindex="0"
      aria-labelledby="q25_radio1-label"
      data-value="True"></span>
    <label id="q25_radio1-label">Vrai</label>
  </div>
  <div>
    <span
      role="radio"
      aria-checked="false"
      tabindex="0"
      aria-labelledby="q25_radio2-label"
      data-value="False"></span>
    <label id="q25_radio2-label">Faux</label>
  </div>
  <div>
    <span
      role="radio"
      aria-checked="true"
      tabindex="0"
      aria-labelledby="q25_radio3-label"
      data-value="huh?"></span>
    <label id="q25_radio3-label">Quelle est la question&nbsp;?</label>
  </div>
</div>
```

L'attribut `role` ajoute uniquement une sémantique&nbsp;; toutes les fonctionnalités natives du [bouton radio HTML](/fr/docs/Web/HTML/Reference/Elements/input/radio) doivent être ajoutées avec JavaScript et l'attribut HTML [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex).

> [!NOTE]
> La première règle d'ARIA est&nbsp;: si un élément ou un attribut HTML natif possède la sémantique et le comportement dont vous avez besoin, utilisez-le au lieu de réutiliser un élément et d'ajouter ARIA. Utilisez plutôt l'élément natif [HTML `<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio) (avec un {{HTMLElement('label')}} associé), qui fournit nativement toutes les fonctionnalités requises&nbsp;:

```html
<fieldset>
  <legend>Ipsum et lorem&nbsp;?</legend>
  <div>
    <input type="radio" value="True" id="q25_radio1" name="q25" />
    <label for="q25_radio1">Vrai</label>
  </div>
  <div>
    <input type="radio" value="False" id="q25_radio2" name="q25" />
    <label for="q25_radio2">Faux</label>
  </div>
  <div>
    <input type="radio" value="huh?" id="q25_radio3" name="q25" checked />
    <label for="q25_radio3">Quelle est la question&nbsp;?</label>
  </div>
</fieldset>
```

Le contrôle natif de formulaire radio HTML ([`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio)) possède deux états («&nbsp;sélectionné&nbsp;» ou «&nbsp;non sélectionné&nbsp;»). De la même manière, un élément avec `role="radio"` peut exposer deux états via l'attribut [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)&nbsp;: `true` pour l'état sélectionné, et `false` pour l'état non sélectionné. La valeur `mixed` pour `aria-checked` n'est pas valide pour un bouton radio.

Si un bouton radio est sélectionné, l'élément radio a `aria-checked` défini sur `true`. S'il n'est pas sélectionné, il a `aria-checked` défini sur `false`.

Chaque bouton radio possède le rôle `radio`. Le rôle radio doit toujours être imbriqué avec d'autres radios associées dans un `radiogroup`. S'il n'est pas possible d'imbriquer le bouton radio dans un groupe, utilisez l'identifiant (`id`) du radio non groupé dans une liste de valeurs séparées par des espaces comme valeur de l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) sur l'élément `radiogroup` pour indiquer la relation entre le groupe et ses membres radio.

Chaque élément radio est labellisé par son contenu, possède un label visible référencé par `aria-labelledby`, ou un label spécifié avec `aria-label`. L'élément `radiogroup` contenant doit avoir un label visible référencé par `aria-labelledby` ou un label spécifié avec `aria-label`. Si des éléments fournissent des informations supplémentaires sur le groupe ou sur chaque bouton radio, ces éléments doivent être référencés par le groupe ou les radios via la propriété [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

Comme `radio` est un contrôle interactif, il doit être accessible au clavier et pouvoir recevoir la sélection. Si le rôle est appliqué à un élément non sélectionnable, utilisez l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour corriger cela. Le raccourci clavier attendu pour activer un radio est la touche <kbd>Espace</kbd>. Utilisez JavaScript pour basculer l'attribut `aria-checked` à `true` lorsqu'un radio devient sélectionné, en veillant à ce que tous les autres rôles radio du groupe soient définis sur `aria-checked="false"`.

Pour indiquer programmatiquement qu'un bouton radio doit être choisi dans un groupe, l'attribut [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) avec la valeur `true` doit être spécifié sur l'élément `radiogroup`. Il n'est pas attendu d'utiliser l'attribut `aria-required` sur les boutons radio individuels.

## Tous les descendants sont des éléments de présentation

Certaines interfaces utilisateur, lorsqu'elles sont représentées dans une API d'accessibilité de plateforme, ne peuvent contenir que du texte. Les API d'accessibilité ne permettent pas de représenter des éléments sémantiques contenus dans un `radio`. Pour pallier cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les descendants d'un élément `radio`, car il s'agit d'un rôle qui ne prend pas en charge les enfants sémantiques.

Par exemple, considérez l'élément `radio` suivant, qui contient un titre&nbsp;:

```html
<div role="radio"><h6>nom de mon élément radio</h6></div>
```

Comme les descendants de `radio` sont des éléments de présentation, le code suivant est équivalent&nbsp;:

```html
<div role="radio"><h6 role="presentation">nom de mon élément radio</h6></div>
```

Du point de vue de l'utilisateur·ice de technologie d'assistance, le titre n'existe pas, car les exemples précédents sont équivalents à ce qui suit dans [l'arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="radio">nom de mon radio</div>
```

## Propriétés, états et rôles WAI-ARIA associés

- le rôle [`radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
  - : Les boutons radio sont contenus ou possédés par un élément avec le rôle `radiogroup`. S'il n'est pas possible d'imbriquer les boutons radio dans un `radiogroup` dans le balisage, l'attribut `aria-owns` du groupe contient les identifiants (`id`) des boutons radio non imbriqués dans le groupe.

- [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : La valeur de `aria-checked` définit l'état d'un radio. Lorsqu'il est utilisé avec des éléments radio, l'attribut a deux valeurs possibles&nbsp;:
    - `true`
      - : Le radio est sélectionné.
    - `false`
      - : Le radio n'est pas sélectionné.

> [!NOTE]
> Utilisez l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) si le `role="radio"` est utilisé sur un élément qui n'accepte pas nativement la sélection au clavier (ex&nbsp;: un `<div>` ou un `<span>`).

## Interactions au clavier

- <kbd>Tab</kbd> + <kbd>Maj</kbd>
  - : Déplace la sélection dans et hors du groupe radio. Lorsque la sélection entre dans un groupe radio et qu'un bouton radio est déjà sélectionné, la sélection se place sur le bouton sélectionné. Si aucun bouton radio n'est sélectionné, la sélection se place sur le premier bouton du groupe.

- <kbd>Espace</kbd>
  - : Sélectionne le radio s'il n'est pas déjà sélectionné. Désélectionne le bouton radio précédemment sélectionné dans le groupe.

- <kbd>Flèche vers la droite</kbd> et <kbd>Flèche vers le bas</kbd>
  - : Déplace la sélection vers et sélectionne le bouton radio suivant du groupe, désélectionnant le bouton radio précédemment sélectionné. Si la sélection est sur le dernier bouton radio, elle se déplace vers le premier bouton du groupe.

- <kbd>Flèche vers la gauche</kbd> et <kbd>Flèche vers le haut</kbd>
  - : Déplace la sélection vers et sélectionne le bouton radio précédent du groupe, désélectionnant le bouton radio précédemment sélectionné. Si la sélection est sur le premier bouton radio, elle se déplace vers le dernier bouton du groupe.

### Boutons radio dans une barre d'outils

Comme les flèches sont utilisées pour naviguer entre les éléments d'une barre d'outils et que la touche <kbd>Tab</kbd> déplace la sélection dans et hors de la barre d'outils, lorsqu'un groupe radio est imbriqué dans une barre d'outils, l'interaction clavier du groupe radio est légèrement différente de celle d'un groupe radio qui n'est pas dans une barre d'outils. Voir les [interactions au clavier de radiogroup](#interactions_au_clavier) pour plus d'informations.

## JavaScript requis

- `onClick`
  - : Gère les clics de souris sur le radio et le label associé pour changer l'état du radio en modifiant la valeur de l'attribut `aria-checked` et l'apparence du radio afin qu'il apparaisse comme sélectionné ou non sélectionné pour l'utilisateur·ice voyant·e.
- `onKeyPress`
  - : Gère le cas où l'utilisateur·ice appuie sur la touche <kbd>Espace</kbd> pour changer l'état du radio en modifiant la valeur de l'attribut `aria-checked` et l'apparence du radio afin qu'il apparaisse comme sélectionné ou non sélectionné pour l'utilisateur·ice voyant·e.

## Exemples

L'exemple suivant utilise ARIA pour modifier des éléments génériques afin qu'ils soient exposés comme des boutons radio. CSS et JavaScript sont utilisés pour modifier visuellement et programmatiquement l'état sélectionné ou non sélectionné de l'élément.

### HTML

```html
<div role="radiogroup" aria-labelledby="legend" id="radiogroup">
  <p id="legend">
    Faut-il utiliser le rôle <code>radio</code> ou
    <code>&lt;input type="radio"></code>&nbsp;?
  </p>
  <div>
    <span
      role="radio"
      aria-checked="true"
      tabindex="0"
      aria-labelledby="ariaLabel"
      data-value="True"></span>
    <label id="ariaLabel">Rôle ARIA</label>
  </div>
  <div>
    <span
      role="radio"
      aria-checked="false"
      tabindex="0"
      aria-labelledby="htmllabel"
      data-value="False"></span>
    <label id="htmllabel">HTML <code>&lt;input type="radio"></code></label>
  </div>
</div>
```

### CSS

```css
[role="radio"] {
  padding: 5px;
}

[role="radio"][aria-checked="true"]::before {
  content: "(x)";
  font-family: monospace;
}

[role="radio"][aria-checked="false"]::before {
  content: "( )";
  font-family: monospace;
}
```

### JavaScript

Beaucoup de JavaScript est nécessaire pour créer des boutons radio à partir d'éléments HTML non sémantiques.

```js
// Initialiser tous les éléments avec le rôle radio

const radioGroups = document.querySelectorAll('[role="radiogroup"]');

for (const radioGroup of radioGroups) {
  const radios = radioGroup.querySelectorAll("[role=radio]");
  for (const radio of radios) {
    radio.addEventListener("keydown", handleKeydown);
    radio.addEventListener("click", handleClick);
  }
}

// Gérer les événements de souris et de tactile
function handleClick(event) {
  setChecked(this);
  event.stopPropagation();
  event.preventDefault();
}

// Gérer les appuis sur les touches
function handleKeydown(event) {
  switch (event.code) {
    case "Space":
    case "Enter":
      currentChecked();
      break;

    case "ArrowUp":
    case "ArrowLeft":
      previousRadioChecked();
      break;

    case "ArrowDown":
    case "ArrowRight":
      nextItemChecked();
      break;

    default:
      break;
  }
  event.stopPropagation();
  event.preventDefault();
}

// Lorsqu'un radio est sélectionné, lui donner la sélection, le définir comme sélectionné
// et s'assurer que tous les autres radios du groupe ne sont pas sélectionnés

function setChecked() {
  // Désélectionner tous les radios du groupe
  // Parcourir tous les radios du groupe
  // eachRadio.tabIndex = -1;
  // eachRadio.setAttribute('aria-checked', 'false');
  // Définir le radio sélectionné comme sélectionné
  // thisRadio.setAttribute('aria-checked', 'true');
  // thisRadio.tabIndex = 0;
  // thisRadio.focus();
  // Définir la valeur du groupe sur la valeur du radio actuellement sélectionné
}
```

<!-- {{EmbedLiveSample("Exemples", 230, 250)}} -->

Aucun JavaScript (ni même CSS) n'est nécessaire si on utilise l'élément HTML sémantique avec le même nom pour chaque bouton radio dans un groupe&nbsp;:

```html
<fieldset>
  <legend>
    Faut-il utiliser le rôle <code>radio</code> ou
    <code>&lt;input type="radio"></code>&nbsp;?
  </legend>
  <div>
    <input type="radio" name="bestPractices" id="ariaLabel" value="True" />
    <label for="ariaLabel">Rôle ARIA</label>
  </div>
  <div>
    <input type="radio" name="bestPractices" id="htmllabel" value="False" />
    <label for="htmllabel">HTML <code>&lt;input type="radio"></code></label>
  </div>
</fieldset>
```

## Bonnes pratiques

La première règle d'ARIA est&nbsp;: si un élément ou un attribut HTML natif possède la sémantique et le comportement dont vous avez besoin, utilisez-le au lieu de réutiliser un élément et d'ajouter un rôle, un état ou une propriété ARIA pour le rendre accessible. Il est donc recommandé d'utiliser les contrôles natifs [bouton radio HTML](/fr/docs/Web/HTML/Reference/Elements/input/radio) plutôt que de recréer la fonctionnalité d'un radio avec JavaScript et ARIA.

## Voir aussi

- L'élément HTML [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio) de bouton radio
- L'attribut HTML [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)
- [ARIA&nbsp;: rôle `radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [ARIA&nbsp;: rôle `checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [ARIA&nbsp;: rôle `menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA&nbsp;: rôle `menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA&nbsp;: rôle `option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
