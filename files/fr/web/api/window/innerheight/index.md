---
title: "Window : propriété innerHeight"
short-title: innerHeight
slug: Web/API/Window/innerHeight
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

La propriété en lecture seule **`innerHeight`** de l'interface {{DOMxRef("Window")}} retourne la hauteur intérieure de la fenêtre en pixels, y compris la hauteur de la barre de défilement horizontale, si elle est présente.

La valeur de `innerHeight` est prise à partir de la hauteur de la {{Glossary("layout viewport", "disposition de la zone d'affichage")}} de la fenêtre. La largeur peut être obtenue en utilisant la propriété {{DOMxRef("Window.innerWidth", "innerWidth")}}.

## Valeur

Une valeur entière indiquant la hauteur de la zone d'affichage de la fenêtre en pixels. La propriété est en lecture seule et n'a pas de valeur par défaut.

Pour modifier la hauteur de la fenêtre, appelez l'une de ses méthodes de redimensionnement, telles que {{DOMxRef("Window.resizeTo", "resizeTo()")}} ou {{DOMxRef("Window.resizeBy", "resizeBy()")}}.

## Notes d'utilisation

Pour obtenir la hauteur de la fenêtre moins sa barre de défilement horizontale et ses bordures, utilisez plutôt la propriété {{DOMxRef("Element.clientHeight", "clientHeight")}} de l'élément racine {{HTMLElement("html")}}.

Les deux propriétés `innerHeight` et `innerWidth` sont disponibles sur n'importe quelle fenêtre ou tout objet qui se comporte comme une fenêtre, tel qu'un onglet ou un cadre.

## Exemples

### Sur une collection de cadres

```js
console.log(window.innerHeight); // ou

console.log(self.innerHeight);
// retournera la hauteur de la partie visible du cadre dans frameset

console.log(parent.innerHeight);
// retournera la hauteur de la partie visible du frameset le plus proche

console.log(top.innerHeight);
// retournera la hauteur de la partie visible du frameset le plus éloigné
```

Pour modifier les dimensions d'une fenêtre, voir {{DOMxRef("window.resizeBy()")}} et
{{DOMxRef("window.resizeTo()")}}.

Pour récupérer la hauteur extérieure d'une fenêtre, c'est-à-dire la hauteur de la fenêtre du navigateur dans sa totalité, voir
{{DOMxRef("window.outerHeight")}}.

### Exemple graphique

L'illustration suivante montre la différence entre `outerHeight` et `innerHeight`.

![Illustration de la différence entre innerHeight et outerHeight](firefoxinnervsouterheight2.png)

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

- La propriété {{DOMxRef("Window.innerWidth")}}
- La propriété {{DOMxRef("Window.outerHeight")}}
- La propriété {{DOMxRef("Window.outerWidth")}}
