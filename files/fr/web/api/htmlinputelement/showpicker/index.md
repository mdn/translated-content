---
title: "HTMLInputElement : méthode showPicker()"
short-title: showPicker()
slug: Web/API/HTMLInputElement/showPicker
l10n:
  sourceCommit: cc66f2b97b465aef7a1781ee479ec8c42ee2fe7c
---

{{APIRef("HTML DOM")}}

La méthode **`showPicker()`** de l'interface {{DOMxRef("HTMLInputElement")}} affiche le sélecteur du navigateur pour un élément `input`.

C'est le même sélecteur qui s'affiche normalement lorsque l'élément a la sélection, mais il peut être déclenché depuis un bouton ou une autre interaction utilisateur·ice.

Les navigateurs implémentent couramment cette fonctionnalité pour les éléments d'entrée de formulaire des types suivants&nbsp;: `"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"` ou `"file"`.
Il peut aussi être prérempli avec des éléments provenant d'un élément HTML {{HTMLElement("datalist")}} ou de l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete).

De façon générale, cette méthode doit afficher, lorsque cela est possible, le sélecteur pour tout élément d'entrée de formulaire sur la plateforme qui propose un sélecteur.

## Syntaxe

```js-nolint
showPicker()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si l'élément n'est pas modifiable, c'est‑à‑dire si l'utilisateur·ice ne peut pas le modifier et/ou s'il ne peut pas être prérempli automatiquement.
- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si la méthode n'est pas déclenchée explicitement par une action utilisateur·ice, telle qu'un geste tactile ou un clic de souris (le sélecteur requiert {{Glossary("Transient activation", "une activation transitoire")}}).
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si appelée depuis un cadre intégré d'origine croisée, sauf pour les sélecteurs de fichiers et de couleurs (exemptés pour des raisons historiques).

## Sécurité

[Activation par l'utilisateur·ice](/fr/docs/Web/Security/Defenses/User_activation) est requise. L'utilisateur·ice doit interagir avec la page ou un élément d'interface pour que cette fonctionnalité fonctionne.

## Exemples

### Détection de fonctionnalité

Le code ci‑dessous montre comment vérifier si `showPicker()` est pris en charge&nbsp;:

```js
if ("showPicker" in HTMLInputElement.prototype) {
  // showPicker() est pris en charge.
}
```

### Sélecteurs normaux d'entrée

Cet exemple montre comment utiliser cette fonctionnalité pour les sélecteurs `color` et `file`.

> [!NOTE]
> Les sélecteurs pour `date`, `datetime-local`, `month`, `time` et `week` s'ouvrent de la même manière.
> Ils ne peuvent pas être affichés ici car les exemples en direct s'exécutent dans un cadre intégré d'origine croisée et provoqueraient une [`SecurityError`](#securityerror)

#### HTML

```html
<p>
  <input type="color" />
  <button id="color">Afficher le sélecteur de couleur</button>
</p>

<p>
  <input type="file" />
  <button id="file">Afficher le sélecteur de fichiers</button>
</p>
```

#### JavaScript

Le code récupère simplement l'élément précédent du bouton sélectionné et appelle `showPicker()` dessus.

```js
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const input = event.srcElement.previousElementSibling;
    try {
      input.showPicker();
    } catch (error) {
      console.log(error);
    }
  });
});
```

#### Résultat

Cliquez sur le bouton à côté de chaque type d'entrée pour afficher son sélecteur.

{{EmbedLiveSample("Sélecteurs normaux d'entrée", "100%", "140px")}}

### `showPicker()` pour un champ d'entrée associé à une `datalist`

`showPicker()` peut lancer le sélecteur pour une liste d'options définie dans une {{HTMLElement("datalist")}}.

Nous définissons d'abord une `<datalist>` en HTML contenant plusieurs navigateurs, un élément d'entrée de formulaire de type `text` qui l'utilise, et un bouton.

```html
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>

<input type="text" list="browsers" />
<button>Sélectionner un navigateur</button>
```

Le code ci‑dessous ajoute un écouteur d'évènements qui appelle `showPicker()` lorsque le bouton est cliqué.

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // Revenir à un autre mécanisme de sélection
  }
});
```

Comme pour les autres sélecteurs, nous ne pouvons pas montrer ce code en cours d'exécution comme exemple en direct, car il s'exécute dans un cadre d'origine croisée et provoquerait une [`SecurityError`](#securityerror).

### `showPicker()` pour l'autocomplétion

`showPicker()` peut afficher un sélecteur pour une entrée de formulaire ayant l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete).

Ici, nous définissons un élément d'entrée de formulaire qui utilise l'option d'autocomplétion de «&nbsp;name&nbsp;».

```html
<input autocomplete="name" />
<button>Afficher les options d'autocomplétion</button>
```

Le code ci‑dessous affiche le sélecteur pour l'entrée de formulaire lorsque le bouton est cliqué.

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // Revenir à un autre mécanisme de sélection
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- L'interface {{DOMxRef("HTMLInputElement")}}
- La méthode {{DOMxRef("HTMLSelectElement.showPicker()")}}
- L'élément HTML {{HTMLElement("datalist")}}
- L'attribut HTML [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete)
