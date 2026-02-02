---
title: "HTMLElement : méthode focus()"
short-title: focus()
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

La méthode **`focus()`** de l'interface {{DOMxRef("HTMLElement")}} place la sélection sur l'élément défini, s'il peut recevoir la sélection (<i lang="en">focus</i> en anglais).
L'élément sélectionné est celui qui recevra par défaut les évènements clavier et similaires.

Par défaut, le navigateur fait défiler l'élément dans la zone d'affichage (<i lang="en">viewport</i> en anglais) après lui avoir donné la sélection, et peut aussi fournir une indication visuelle de l'élément sélectionné (généralement en affichant un «&nbsp;anneau de sélection&nbsp;» autour de l'élément).
Des options de paramètres sont disponibles pour désactiver le défilement par défaut et forcer l'indication visuelle sur les éléments.

## Syntaxe

```js-nolint
focus()
focus(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet optionnel qui fournit les options permettant de contrôler les aspects du focus. Cet objet peut contenir les propriétés suivantes&nbsp;:
    - `preventScroll` {{Optional_Inline}}
      - : Un booléen qui indique si le navigateur devrait défiler jusqu'à ce que l'élément qui a reçu le focus soit visible. S'il vaut `false` (la valeur par défaut), le navigateur défilera jusqu'à ce que l'élément soit visible après lui avoir donné le focus. Si `preventScroll` vaut `true`, aucun défilement n'aura lieu.
    - `focusVisible` {{Optional_Inline}} {{Experimental_Inline}}
      - : Un booléen qui doit être défini à `true` pour forcer, ou à `false` pour empêcher l'indication visuelle que l'élément est sélectionné.
        Si la propriété n'est pas définie, le navigateur fournira une indication visuelle s'il détermine que cela améliore l'accessibilité pour les utilisateur·ice·s.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Placer la sélection sur un champ texte

Cet exemple utilise un bouton pour placer la sélection sur un champ texte.

#### HTML

```html
<input id="monChampTexte" value="Champ texte." />
<button id="boutonDeSelection">
  Cliquez ici pour placer la sélection sur le champ texte&nbsp;!
</button>
```

#### JavaScript

```js
document.getElementById("boutonDeSelection").addEventListener("click", () => {
  document.getElementById("monChampTexte").focus();
});
```

#### Résultat

Cliquez sur le bouton pour placer la sélection sur le champ texte.

{{EmbedLiveSample('Placer la sélection sur un champ texte')}}

### Placer la sélection sur un bouton

Cet exemple montre comment placer la sélection sur un élément bouton.

#### HTML

On définit d'abord trois boutons.
Les boutons du milieu et de droite placent la sélection sur le bouton le plus à gauche.
Le bouton le plus à droite définit aussi la propriété `focusVisible`.

```html
<button id="monBouton">Bouton</button>
<button id="boutonSelection">
  Cliquez pour placer la sélection sur «&nbsp;Bouton&nbsp;»
</button>
<button id="boutonSelectionIndicationVisible">
  Cliquez pour placer la sélection et focusVisible sur «&nbsp;Bouton&nbsp;»
</button>
```

#### JavaScript

Le code ci-dessous configure les gestionnaires d'évènements de clic pour les boutons du milieu et de droite.

```js
document.getElementById("boutonSelection").addEventListener("click", () => {
  document.getElementById("monBouton").focus();
});

document
  .getElementById("boutonSelectionIndicationVisible")
  .addEventListener("click", () => {
    document.getElementById("monBouton").focus({ focusVisible: true });
  });
```

#### Résultat

Sélectionnez le bouton du milieu ou celui de droite pour placer la sélection sur le bouton le plus à gauche.

Les navigateurs n'affichent généralement pas d'indication visuelle de la sélection sur les éléments bouton lorsque la sélection est placée par programmation, donc l'effet du bouton du milieu peut ne pas être visible.
Cependant, si l'option `focusVisible` est prise en charge par votre navigateur, vous devriez voir la sélection changer sur le bouton le plus à gauche lorsque le bouton de droite est sélectionné.

{{EmbedLiveSample('Placer la sélection sur un bouton')}}

### Sélection avec et sans défilement

Cet exemple montre l'effet du placement de la sélection avec l'option [`preventScroll`](#preventscroll) définie à `true` et à `false` (valeur par défaut).

#### HTML

Le code HTML définit deux boutons qui seront utilisés pour placer la sélection sur un troisième bouton hors écran.

```html
<button id="focus_scroll">
  Cliquez pour placer la sélection sur le bouton hors écran
</button>
<button id="focus_no_scroll">
  Cliquez pour placer la sélection sur le bouton hors écran sans défilement
</button>

<div id="container">
  <button id="monBouton">Bouton</button>
</div>
```

```css hidden
#monBouton {
  margin-top: 500px; /* Décale le bouton hors écran */
}
```

#### JavaScript

Ce code ajoute un gestionnaire d'évènement de clic sur les deux premiers boutons pour placer la sélection sur le dernier bouton.
Notez que le premier gestionnaire ne précise pas l'option `preventScroll`, donc le défilement vers l'élément sélectionné sera activé.

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("monBouton").focus(); // défaut : {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("monBouton").focus({ preventScroll: true });
});
```

#### Résultat

Cliquez sur le premier bouton pour placer la sélection et faire défiler jusqu'au bouton hors écran.
En cliquant sur le second bouton, la sélection est placée mais le défilement est désactivé.

{{EmbedLiveSample('Sélection avec et sans défilement')}}

## Spécifications

{{Specifications}}

## Notes

- Si `HTMLElement.focus()` est appelé depuis un gestionnaire d'évènement pour `mousedown`, il faut appeler `event.preventDefault()` pour empêcher la sélection de quitter l'élément
  `HTMLElement`.
- Le comportement du focus par rapport aux fonctionnalités HTML comme [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) ou {{Glossary("shadow tree", "le DOM d'ombre")}}, qui était auparavant trop peu défini, a été mis à jour en octobre 2019.
  Voir [le blog WHATWG <sup>(angl.)</sup>](https://blog.whatwg.org/focusing-on-focus) pour plus d'informations.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLElement.blur")}} qui permet de retirer la sélection d'un élément.
- La propriété en lecture seule {{DOMxRef("document.activeElement")}} qui permet de savoir quel élément a actuellement la sélection.
