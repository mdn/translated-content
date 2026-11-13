---
title: "Window : méthode scrollBy()"
short-title: scrollBy()
slug: Web/API/Window/scrollBy
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

La méthode **`scrollBy()`** de l'interface {{DOMxRef("Window")}} fait défiler le document dans la fenêtre du nombre de pixels passé en paramètre.

## Syntaxe

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### Paramètres

- `xCoord`
  - : Le nombre de pixels horizontal que vous voulez faire défiler.
- `yCoord`
  - : Le nombre de pixels vertical que vous voulez faire défiler.
- `options`
  - : Un objet contenant les propriétés suivantes&nbsp;:
    - `top` {{Optional_Inline}}
      - : Définit le nombre de pixels le long de l'axe Y pour faire défiler la fenêtre ou l'élément.
    - `left` {{Optional_Inline}}
      - : Définit le nombre de pixels le long de l'axe X pour faire défiler la fenêtre ou l'élément.
    - `behavior` {{Optional_Inline}}
      - : Détermine si le défilement est instantané ou s'il s'anime en douceur. Cette option est une chaîne de caractères qui doit prendre l'une des valeurs suivantes&nbsp;:
        - `smooth`&nbsp;: Le défilement s'anime en douceur.
        - `instant`&nbsp;: Le défilement se produit instantanément en un seul saut.
        - `auto`&nbsp;: Le comportement de défilement est déterminé par la valeur calculée de la propriété CSS {{CSSxRef("scroll-behavior")}} sur l'élément.

        Si omis, `behavior` prend par défaut la valeur `auto`.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se complète avec un objet contenant la propriété suivante&nbsp;:

- `interrupted`
  - : Une valeur booléenne indiquant si l'opération de défilement a été interrompue (`true`) ou non (`false`). Une telle interruption se produit généralement lorsqu'un défilement programmatique est en cours et qu'un autre défilement programmatique est initié sur la fenêtre avant que le premier ne se termine.

## Exemples

### Utilisation simple

Pour faire défiler vers le bas d'une page&nbsp;:

```js
window.scrollBy(0, window.innerHeight);
```

Pour faire défiler vers le haut d'une page&nbsp;:

```js
window.scrollBy(0, -window.innerHeight);
```

Avec `options`&nbsp;:

```js
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Répondre à la fin du défilement

Notre [démonstration des méthodes de la fenêtre <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) montre comment la valeur de retour de promesse de `scrollBy()` peut être utilisée pour répondre à la fin d'une opération de défilement. Cette technique est surtout utile dans les cas où le défilement se produit en douceur au fil du temps (obtenu en définissant l'option [`behavior`](#behavior) sur `smooth`, ou en définissant la propriété {{CSSxRef("scroll-behavior")}} de l'élément défilant sur `smooth`).

#### HTML

Notre HTML comprend plusieurs paragraphes de contenu et une barre d'outils {{HTMLElement("div")}} contenant des éléments HTML {{HTMLElement("button")}} qui déclenchent diverses opérations de défilement sur la fenêtre.

```html
<div>
  <button class="scroll">scroll() à 1000</button>
  <button class="scroll-to">scrollTo() haut de page</button>
  <button class="scroll-by">scrollBy() de 200</button>
</div>

<p>…</p>

<p>…</p>

…
```

#### CSS

Nous donnons à l'élément {{CSSxRef(":root")}} une valeur de propriété {{CSSxRef("scroll-behavior")}} de `smooth` afin que toutes les opérations de défilement soient animées en douceur au fil du temps plutôt qu'immédiatement.

```css
:root {
  scroll-behavior: smooth;
}
```

Nous créons également deux sélecteurs de classe&nbsp;: lorsqu'une classe `fade-out` ou `fade-in` est appliquée à un élément, une {{CSSxRef("animation")}} est appliquée afin qu'il disparaisse ou apparaisse en douceur, respectivement. Nous définissons également des blocs {{CSSxRef("@keyframes")}} pour définir les changements de {{CSSxRef("opacity")}} requis pour ces animations.

```css
.fade-out {
  animation: fade-out 0.3s linear both;
}

.fade-in {
  animation: fade-in 0.3s linear both;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

Le reste du CSS n'est pas montré, pour plus de concision.

#### JavaScript

Nous commençons par récupérer des références au `<button>` qui exécute l'opération `scrollBy()` et à la barre d'outils `<div>`&nbsp;:

```js
const btnDefilementDe = document.querySelector(".scroll-by");
const barreOutils = document.querySelector("div");
```

Ensuite, nous définissons une fonction appelée `estInterrompu()`, conçue pour s'exécuter en réponse à la fin d'une opération de défilement, qui prend une valeur booléenne `interrompu` en paramètre. Elle enregistre un message dans la console pour indiquer que le défilement est terminé et préciser si l'opération a été interrompue (`interrompu` est `true`) ou non. De plus, si `interrompu` est `true`, elle appelle un `alert()` pour indiquer clairement l'interruption.

```js
function estInterrompu(interrompu) {
  console.log(`Défilement terminé ;${interrompu ? " " : " non "}interrompu`);
  if (interrompu) {
    alert("Défilement interrompu !");
  }
}
```

Lorsque le bouton est cliqué, nous appliquons immédiatement la classe `fade-out` à la barre d'outils, ce qui la fait disparaître progressivement. Nous exécutons ensuite `scrollBy(0, 200)` sur la fenêtre pour faire défiler son contenu vers le bas de 200 pixels, en attendant la résolution de sa promesse et en stockant le `resulat` dans une constante. Lorsque la promesse est résolue, nous appelons `estInterrompu()` pour indiquer que l'opération de défilement est terminée et si elle a été interrompue. Enfin, nous appliquons la classe `fade-in` à la barre d'outils, ce qui la fait réapparaître progressivement.

```js
btnDefilementDe.addEventListener("click", async () => {
  barreOutils.className = "fade-out";
  const resultat = await window.scrollBy(0, 200);
  estInterrompu(resultat.interrupted);
  barreOutils.className = "fade-in";
});
```

Le code non pertinent pour `scrollBy()` n'est pas affiché, pour plus de concision.

#### Résultat

Cliquez sur les boutons pour voir le comportement de défilement. Remarquez comment la barre d'outils disparaît progressivement lorsqu'un bouton est pressé, et réapparaît une fois le défilement fluide terminé. Essayez également de presser un bouton puis rapidement un autre bouton avant que la première opération de défilement ne soit terminée. Remarquez comment, dans ces cas, le défilement est signalé comme interrompu.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Vous pouvez également [charger la démonstration dans un onglet séparé <sup>(angl.)</sup>)](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) et consulter le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Aparté sur la détection des fonctionnalités

Si vous exécutez cet exemple dans un navigateur qui ne prend pas en charge les opérations de défilement retournant une promesse, les opérations de défilement sont toujours fluides, mais la barre d'outils ne disparaît pas progressivement puis ne réapparaît pas une fois l'opération terminée. La détection des fonctionnalités est gérée par une fonction appelée `supportsScrollPromises()`, qui exécute une opération de défilement et teste si sa valeur de retour est une promesse&nbsp;:

```js
function supportsScrollPromises() {
  const test = window.scroll(0, 0);
  return test instanceof Promise;
}
```

Consultez le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/blob/main/scroll-promises/window-methods/index.js) pour voir comment la détection des fonctionnalités est utilisée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Window.scroll()")}}
- La méthode {{DOMxRef("Window.scrollTo()")}}
- La méthode {{DOMxRef("Element.scrollBy()")}}
- La méthode {{DOMxRef("Window.scrollByLines()")}} {{Non-standard_Inline}}
- La méthode {{DOMxRef("Window.scrollByPages()")}} {{Non-standard_Inline}}
