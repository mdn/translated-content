---
title: "Window : propriété innerWidth"
short-title: innerWidth
slug: Web/API/Window/innerWidth
l10n:
  sourceCommit: 277e1432bea11473d0c638cd720130c44b26b3f4
---

{{APIRef}}

La propriété en lecture seule **`innerWidth`** de l'interface {{DOMxRef("Window")}} retourne la largeur intérieure de la fenêtre en pixels, c'est-à-dire la largeur de la {{Glossary("layout viewport", "disposition de la zone d'affichage")}} de la fenêtre. Cela inclut la largeur de la barre de défilement verticale, si elle est présente.

De même, la hauteur intérieure de la fenêtre (c'est-à-dire la hauteur de la disposition de la zone d'affichage) peut être obtenue en utilisant la propriété {{DOMxRef("Window.innerHeight", "innerHeight")}}. Cette mesure prend également en compte la hauteur de la barre de défilement horizontale, si elle est visible.

## Valeur

Une valeur entière indiquant la largeur de la zone d'affichage de la fenêtre en pixels. La propriété est en lecture seule et n'a pas de valeur par défaut.

Pour modifier la largeur de la fenêtre, utilisez l'une des méthodes de redimensionnement de {{DOMxRef("Window")}}, telles que {{DOMxRef("Window.resizeBy", "resizeBy()")}} ou {{DOMxRef("Window.resizeTo", "resizeTo()")}}.

## Notes d'utilisation

Si vous avez besoin d'obtenir la largeur de la fenêtre moins la barre de défilement et les bordures, utilisez plutôt la propriété {{DOMxRef("Element.clientWidth", "clientWidth")}} de l'élément racine {{HTMLElement("html")}}.

La propriété `innerWidth` est disponible sur n'importe quelle fenêtre ou tout objet qui se comporte comme une fenêtre, tel qu'un cadre ou un onglet.

## Exemples

```js
// Cela affichera la largeur de la zone d'affichage
console.log(window.innerWidth);

// Cela affichera la largeur de la zone d'affichage du cadre dans un frameset
console.log(self.innerWidth);

// Cela affichera la largeur de la zone d'affichage du frameset le plus proche
console.log(parent.innerWidth);

// Cela affichera la largeur de la zone d'affichage du frameset le plus éloigné
console.log(top.innerWidth);
```

## Démonstration

### HTML

```html
<p>
  Redimensionnez la fenêtre du navigateur pour déclencher l'événement
  <code>resize</code>.
</p>
<p>Hauteur de la fenêtre&nbsp;: <span id="height"></span></p>
<p>Largeur de la fenêtre&nbsp;: <span id="width"></span></p>
```

### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);
```

### Résultat

{{EmbedLiveSample("Démonstration")}}

Vous pouvez également {{LiveSampleLink("Démonstration", "voir les résultats du code de démonstration dans une page séparée")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Window.outerWidth")}}
- La propriété {{DOMxRef("Window.innerHeight")}}
- La propriété {{DOMxRef("Window.outerHeight")}}
