---
title: "Element : propriété scrollWidth"
short-title: scrollWidth
slug: Web/API/Element/scrollWidth
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

**`Element.scrollWidth`** est une propriété en lecture seule correspondant à la mesure de la largeur du contenu d'un élément, incluant le contenu qui n'est pas visible à l'écran en raison d'un dépassement.

La valeur `scrollWidth` est égale à la largeur minimale dont l'élément a besoin pour s'adapter à tout le contenu de la fenêtre sans utiliser de barre de défilement horizontale. La largeur est mesurée de la même manière que {{DOMxRef("Element.clientWidth", "clientWidth")}}&nbsp;: elle inclut le remplissage (<i lang="en">padding</i>) de l'élément, mais pas sa bordure, sa marge ou sa barre de défilement verticale (si présente). Elle peut également inclure la largeur des pseudo-éléments CSS tels que {{CSSxRef("::before")}} ou {{CSSxRef("::after")}}. Pour un élément donné, si son contenu peut s'adapter sans avoir besoin d'une barre de défilement horizontale, `scrollWidth` est égale à {{DOMxRef("Element.clientWidth", "clientWidth")}}.

## Valeur

Un nombre.

## Exemples

### Détecter le débordement du contenu

Dans cet exemple, nous utilisons la propriété `scrollWidth` pour vérifier si le contenu d'un élément déborde de ses limites. Nous avons deux éléments `div`, le premier avec une largeur de `100px`, et le second sans largeur fixe. Leur contenu est exactement le même, et nous affichons un message indiquant si chacun déborde de son conteneur.

#### HTML

```html
<div id="div1">TotoTruc-TotoTruc-TotoTruc-TotoTruc</div>
<button id="button1">Vérifier le débordement</button>
<pre id="journal1"></pre>
<div id="div2">TotoTruc-TotoTruc-TotoTruc-TotoTruc</div>
<button id="button2">Vérifier le débordement</button>
<pre id="journal2"></pre>
```

#### CSS

```css
div {
  padding: 0.15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button {
  margin: 0.15em 0 0.5em 0;
}

pre {
  margin: 0.5em 0;
}

#div1 {
  width: 100px;
}

#journal1 {
  margin-bottom: 2em;
}
```

#### JavaScript

```js
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const journal1 = document.getElementById("journal1");
const journal2 = document.getElementById("journal2");

// Vérifie si le scrollWidth est plus grand que le clientWidth ou non
function deborde(element) {
  return element.scrollWidth > element.clientWidth;
}

function verifierDebordement(element, log) {
  if (deborde(element)) {
    log.innerText = `Le contenu déborde, scrollWidth est de ${element.scrollWidth}px`;
  } else {
    log.innerText = `Pas de débordement, scrollWidth est de ${element.scrollWidth}px`;
  }
}

button1.addEventListener("click", () => {
  verifierDebordement(div1, journal1);
});

button2.addEventListener("click", () => {
  verifierDebordement(div2, journal2);
});
```

#### Résultat

Cliquez sur les boutons pour vérifier si le contenu déborde des conteneurs.

{{EmbedLiveSample("Détecter le débordement du contenu", "100%", 190)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer la taille des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("HTMLElement.offsetWidth")}}
- La propriété {{DOMxRef("Element.clientWidth")}}
- La propriété {{DOMxRef("Element.scrollHeight")}}
- La propriété {{DOMxRef("Element.scrollLeft")}}
- La propriété {{DOMxRef("Element.scrollTop")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
- La méthode {{DOMxRef("Element.scrollTo()")}}
