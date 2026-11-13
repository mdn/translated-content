---
title: "Element : méthode insertAdjacentElement()"
short-title: insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

La méthode **`insertAdjacentElement()`** de l'interface {{DOMxRef("Element")}} insère un nœud d'élément donné à une position donnée par rapport à l'élément sur lequel elle est invoquée.

## Syntaxe

```js-nolint
insertAdjacentElement(position, element)
```

### Paramètres

- `position`
  - : Une chaîne de caractères représentant la position par rapport à `targetElement`&nbsp;; cela doit correspondre (sans tenir compte de la casse) à l'une des chaînes de caractères suivantes&nbsp;:
    - `'beforebegin'`&nbsp;: Avant l'élément du `targetElement` même.
    - `'afterbegin'`&nbsp;: À l'intérieur de l'élément du `targetElement`, avant son premier enfant.
    - `'beforeend'`&nbsp;: À l'intérieur de l'élément du `targetElement`, après son dernier enfant.
    - `'afterend'`&nbsp;: Après l'élément du `targetElement` même.

- `element`
  - : L'élément à insérer dans l'arbre.

### Valeur retournée

L'élément inséré ou `null` si l'insertion a échouée.

### Exceptions

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levée si la `position` définie n'est pas une valeur reconnue.
- {{JSxRef("TypeError")}}
  - : Levée si un `element` défini n'est pas un élément valide.

### Visualisation des noms de position

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  toto
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> [!NOTE]
> Les positions `beforebegin` et `afterend` ne fonctionnent que si le nœud est dans l'arbre et possède un élément parent.

## Exemples

### Insérer avant et après

Dans cet exemple, nous avons une rangée de cases carrées. L'utilisateur·ice peut sélectionner une case en cliquant dessus&nbsp;: cela donne à la case une bordure différente, pour montrer qu'elle est sélectionnée.

Si une case est sélectionnée et que l'utilisateur·ice appuie sur les boutons «&nbsp;Insérer avant&nbsp;» ou «&nbsp;Insérer après&nbsp;», alors le code crée une nouvelle case, lui donne une couleur aléatoire et l'insère avant ou après la case sélectionnée.

#### HTML

```html
<p>
  Cliquez sur une case colorée pour la sélectionner, puis utilisez les deux
  premiers boutons ci-dessous pour insérer des éléments avant et après votre
  sélection.
</p>

<section>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</section>

<button class="avant">Insérer avant</button>
<button class="apres">Insérer après</button>
<button class="reinitialiser">Réinitialiser la démo</button>
```

#### CSS

```css
div {
  width: 50px;
  height: 50px;
  margin: 3px;
  border: 3px solid black;
  display: inline-block;
  background-color: red;
}

.selectionne {
  border-color: aqua;
}
```

#### JavaScript

```js
let elemSelectionne;

// Fonction pour sélectionner un nouvel élément
function selectionnerElement(nouvelleSelection) {
  if (elemSelectionne !== nouvelleSelection) {
    if (elemSelectionne) {
      elemSelectionne.classList.remove("selectionne");
    }
    elemSelectionne = nouvelleSelection;
    nouvelleSelection.classList.add("selectionne");
  }
}

// Ajouter des gestionnaires de clic qui sélectionnent l'élément cliqué
const initElems = Array.from(document.querySelectorAll("section div"));
for (const initElem of initElems) {
  initElem.addEventListener("click", (e) => selectionnerElement(e.target));
}

// Ajouter des gestionnaires de clic aux boutons "avant" et "apres"
// pour insérer un nouvel élément avant/après l'élément sélectionné
const btnAvant = document.querySelector(".avant");
const btnApres = document.querySelector(".apres");
btnAvant.addEventListener("click", () => insererNouvelElement("beforebegin"));
btnApres.addEventListener("click", () => insererNouvelElement("afterend"));

function insererNouvelElement(position) {
  function aleatoire(max) {
    return Math.floor(Math.random() * max);
  }

  if (!elemSelectionne) {
    return;
  }

  const nouvelElement = document.createElement("div");
  const couleurAleatoire = `rgb(${aleatoire(255)} ${aleatoire(255)} ${aleatoire(255)})`;
  nouvelElement.style.backgroundColor = couleurAleatoire;
  nouvelElement.addEventListener("click", (e) => selectionnerElement(e.target));

  elemSelectionne.insertAdjacentElement(position, nouvelElement);
}

// Réinitialiser l'exemple
const btnReinitialiser = document.querySelector(".reinitialiser");
btnReinitialiser.addEventListener("click", () => window.location.reload(true));
```

#### Résultat

{{EmbedLiveSample("Insérer avant et après", "", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.insertAdjacentHTML()")}}
- La méthode {{DOMxRef("Element.insertAdjacentText()")}}
- La méthode {{DOMxRef("Node.insertBefore()")}} (similaire à `beforebegin`, avec des arguments différents)
- La méthode {{DOMxRef("Node.appendChild()")}} (même effet que `beforeend`)
