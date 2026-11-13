---
title: "Window : méthode scroll()"
short-title: scroll()
slug: Web/API/Window/scroll
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

La méthode **`scroll()`** de l'interface {{DOMxRef("Window")}} fait défiler la fenêtre jusqu'à un endroit particulier du document.

## Syntaxe

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Paramètres

- `xCoord`
  - : Le nombre de pixels sur l'axe horizontal du document que vous souhaitez avoir affiché dans le coin supérieur gauche.
- `yCoord`
  - : Le nombre de pixels sur l'axe vertical du document que vous souhaitez avoir affiché dans le coin supérieur gauche.
- `options`
  - : Un objet contenant les propriétés suivantes&nbsp;:
    - `top` {{Optional_Inline}}
      - : Définit le nombre de pixels sur l'axe vertical le long desquels faire défiler la fenêtre ou l'élément.
    - `left` {{Optional_Inline}}
      - : Définit le nombre de pixels sur l'axe horizontal le long desquels faire défiler la fenêtre ou l'élément.
    - `behavior` {{Optional_Inline}}
      - : Détermine si le défilement est instantané ou s'il s'anime en douceur. Cette option est une chaîne de caractères qui doit prendre l'une des valeurs suivantes&nbsp;:
        - `smooth`: Le défilement s'anime en douceur.
        - `instant`: Le défilement se produit instantanément en un seul saut.
        - `auto`: Le comportement de défilement est déterminé par la valeur calculée de la propriété CSS {{CSSxRef("scroll-behavior")}} sur l'élément.

        Si elle est omise, la valeur par défaut de `behavior` est `auto`.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se complète avec un objet contenant la propriété suivante&nbsp;:

- `interrupted`
  - : Une valeur booléenne indiquant si l'opération de défilement a été interrompue (`true`) ou non (`false`). Une telle interruption se produit généralement lorsqu'un défilement programmatique est en cours et qu'un autre défilement programmatique est initié sur la fenêtre avant que le premier ne se termine.

## Exemples

### Utilisation simple

```js
// Place au 100e pixel vertical en haut de la fenêtre
window.scroll(0, 100);
```

Avec `options`&nbsp;:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Répondre à la fin du défilement

Notre [démonstration des méthodes de la fenêtre <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) montre comment la valeur de retour de promesse de `scroll()` peut être utilisée pour répondre à la fin d'une opération de défilement. Cette technique est surtout utile dans les cas où le défilement se produit en douceur au fil du temps (obtenu en définissant l'option [`behavior`](#behavior) sur `smooth`, ou en définissant la propriété {{CSSxRef("scroll-behavior")}} de l'élément défilant sur `smooth`).

#### HTML

Notre HTML comprend plusieurs paragraphes de contenu et un élément HTML {{HTMLElement("div")}} de barre d'outils contenant des éléments HTML {{HTMLElement("button")}} qui déclenchent diverses opérations de défilement sur la fenêtre.

```html
<div>
  <button class="scroll">scroll() de 1000</button>
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

Nous créons également deux sélecteurs de classe&nbsp;; lorsqu'une classe `fade-out` ou `fade-in` est appliquée à un élément, une {{CSSxRef("animation")}} est appliquée afin qu'il disparaisse ou apparaisse en douceur, respectivement. Nous définissons également des blocs {{CSSxRef("@keyframes")}} pour définir les changements de {{CSSxRef("opacity")}} requis pour ces animations.

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

Nous commençons par récupérer les références au `<button>` qui exécute l'opération `scroll()` et au `<div>` de la barre d'outils&nbsp;:

```js
const btnDefilement = document.querySelector(".scroll");
const barreOutils = document.querySelector("div");
```

Ensuite, nous définissons une fonction appelée `estInterrompu()`, conçue pour s'exécuter en réponse à la fin d'une opération de défilement, qui prend une valeur booléenne `interrompu` en paramètre. Elle enregistre un message dans la console pour indiquer que le défilement est terminé et préciser si l'opération a été interrompue (`interrompu` est `true`) ou non. De plus, si `interrompu` est `true`, elle appelle un `alert()` pour indiquer clairement l'interruption.

```js
function estInterrompu(interrompu) {
  console.log(
    `Le défilement est terminé ;${interrompu ? " " : " pas "}interrompu`,
  );
  if (interrompu) {
    alert("Le défilement a été interrompu !");
  }
}
```

Lorsque le bouton est cliqué, nous appliquons immédiatement la classe `fade-out` à la barre d'outils, ce qui la fait disparaître en douceur. Nous exécutons ensuite `scroll(0, 1000)` sur la fenêtre pour faire défiler son contenu de 1000 pixels vers le bas, en attendant la résolution de sa promesse tout en stockant le `resultat` dans une constante. Lorsque la promesse est résolue, nous appelons `estInterrompu()` pour indiquer que l'opération de défilement est terminée et si elle a été interrompue. Enfin, nous appliquons la classe `fade-in` à la barre d'outils, ce qui la fait réapparaître en douceur.

```js
btnDefilement.addEventListener("click", async () => {
  barreOutils.className = "fade-out";
  const resultat = await window.scroll(0, 1000);
  estInterrompu(resultat.interrompu);
  barreOutils.className = "fade-in";
});
```

Le code non pertinent pour `scroll()` n'est pas affiché, pour plus de concision.

#### Résultat

Cliquez sur les boutons pour voir le comportement du défilement. Remarquez comment la barre d'outils disparaît en douceur lorsqu'un bouton est pressé, et réapparaît une fois que le défilement en douceur est terminé. Essayez également de presser un bouton puis rapidement un autre bouton avant que la première opération de défilement ne soit terminée. Remarquez comment, dans ces cas, le défilement est signalé comme interrompu.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Vous pouvez également [charger la démonstration dans un onglet séparé <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) et consulter le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Aparté sur la détection des fonctionnalités

Si vous exécutez cet exemple dans un navigateur qui ne prend pas en charge les opérations de défilement retournant une promesse, les opérations de défilement sont toujours fluides, mais la barre d'outils ne disparaît pas en douceur puis ne réapparaît pas une fois l'opération terminée. La détection des fonctionnalités est gérée par une fonction appelée `supportsScrollPromises()`, qui exécute une opération de défilement et teste si sa valeur de retour est une promesse&nbsp;:

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

- La méthode {{domxref("Window.scrollTo()")}}
- La méthode {{domxref("Window.scrollBy()")}}
- La méthode {{domxref("Element.scroll()")}}
- La méthode {{domxref("Window.scrollByLines()")}} {{non-standard_inline}}
- La méthode {{domxref("Window.scrollByPages()")}} {{non-standard_inline}}
