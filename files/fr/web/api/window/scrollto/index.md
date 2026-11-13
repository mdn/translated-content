---
title: "Window : méthode scrollTo()"
short-title: scrollTo()
slug: Web/API/Window/scrollTo
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

La méthode **`scrollTo()`** de l'interface {{DOMxRef("Window")}} fait défiler le document jusqu'à un ensemble particulier de coordonnées.

## Syntaxe

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Paramètres

- `xCoord`
  - : La coordonnée horizontale du document vers laquelle vous voulez que le bord gauche de la fenêtre de visualisation défile.
- `yCoord`
  - : La coordonnée verticale du document vers laquelle vous voulez que le bord supérieur de la fenêtre de visualisation défile.
- `options`
  - : Un objet contenant les propriétés suivantes&nbsp;:
    - `top` {{Optional_Inline}}
      - : La coordonnée verticale du document vers laquelle vous voulez que le bord supérieur de la fenêtre de visualisation défile. C'est la même que le paramètre `yCoord`.
    - `left` {{Optional_Inline}}
      - : La coordonnée horizontale du document vers laquelle vous voulez que le bord gauche de la fenêtre de visualisation défile. C'est la même que le paramètre `xCoord`.
    - `behavior` {{Optional_Inline}}
      - : Détermine si le défilement est instantané ou s'il s'anime en douceur. Cette option est une chaîne de caractères qui doit prendre l'une des valeurs suivantes&nbsp;:
        - `smooth`&nbsp;: Le défilement s'anime en douceur.
        - `instant`&nbsp;: Le défilement se produit instantanément en un seul saut.
        - `auto`&nbsp;: Le comportement de défilement est déterminé par la valeur calculée de la propriété CSS {{CSSxRef("scroll-behavior")}} sur l'élément.

        Si omis, `behavior` prend par défaut la valeur `auto`.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se complète avec un objet contenant la propriété suivante&nbsp;:

- `interrupted`
  - : Une valeur booléenne indiquant si l'opération de défilement a été interrompue (`true`) ou non (`false`). Une telle interruption se produit généralement lorsqu'un défilement programmé est en cours et qu'un autre défilement programmé est initié sur la fenêtre avant que le premier ne se termine.

## Exemples

### Utilisation simple

```js
window.scrollTo(0, 1000);
```

Avec `options`&nbsp;:

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Répondre à la fin du défilement

Notre [démonstration des méthodes de la fenêtre <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods)) montre comment la valeur de retour de promesse de `scrollTo()` peut être utilisée pour répondre à la fin d'une opération de défilement. Cette technique est surtout utile dans les cas où le défilement se produit en douceur au fil du temps (obtenu en définissant l'option [`behavior`](#behavior) sur `smooth`, ou en définissant la propriété {{CSSxRef("scroll-behavior")}} de l'élément défilant sur `smooth`).

#### HTML

Notre HTML inclut plusieurs paragraphes de contenu et une barre d'outils {{HTMLElement("div")}} contenant des éléments HTML {{HTMLElement("button")}} qui déclenchent diverses opérations de défilement sur la fenêtre.

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

Le reste du CSS n'est pas montré, pour des raisons de concision.

#### JavaScript

Nous commençons par récupérer des références au `<button>` qui exécute l'opération `scrollTo()` et à la barre d'outils `<div>`&nbsp;:

```js
const btnDefilementA = document.querySelector(".scroll-to");
const barreOutils = document.querySelector("div");
```

Ensuite, nous définissons une fonction appelée `estInterrompu()`, conçue pour s'exécuter lorsqu'une opération de défilement se termine et qui prend une valeur booléenne `interrompu` en paramètre. Elle consigne un message dans la console pour indiquer que le défilement est terminé et préciser si l'opération a été interrompue (`interrompu` vaut `true`) ou non. En outre, si `interrompu` vaut `true`, elle appelle `alert()` pour signaler clairement l'interruption.

```js
function estInterrompu(interrompu) {
  console.log(
    `Le défilement est terminé ;${interrompu ? " " : " non "}interrompu`,
  );
  if (interrompu) {
    alert("Le défilement a été interrompu !");
  }
}
```

Lorsque le bouton est activé, nous appliquons immédiatement la classe `fade-out` à la barre d'outils, ce qui la fait disparaître en fondu. Nous exécutons ensuite `scrollTo(0, 0)` sur la fenêtre pour faire défiler son contenu jusqu'en haut, tout en attendant la résolution de sa promesse et en stockant le `resultat` dans une constante. Une fois la promesse résolue, nous appelons `estInterrompu()` pour indiquer que l'opération de défilement est terminée et préciser si elle a été interrompue. Enfin, nous appliquons la classe `fade-in` à la barre d'outils, ce qui la fait réapparaître en fondu.

```js
btnDefilementA.addEventListener("click", async () => {
  barreOutils.className = "fade-out";
  const resultat = await window.scrollTo(0, 0);
  estInterrompu(resultat.interrupted);
  barreOutils.className = "fade-in";
});
```

Le code qui n'est pas lié à `scrollTo()` n'est pas affiché, par souci de concision.

#### Résultat

Activez les boutons pour observer le comportement du défilement. Notez que la barre d'outils disparaît en fondu lorsqu'un bouton est activé, puis réapparaît une fois le défilement fluide terminé. Essayez aussi d'activer un bouton, puis d'en activer rapidement un autre avant la fin de la première opération de défilement. Notez que, dans ces cas, le défilement est signalé comme interrompu.

{{EmbedGHLiveSample("dom-examples/scroll-promises/window-methods/", "100%", 400)}}

Vous pouvez aussi [ouvrir la démonstration dans un onglet séparé <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/scroll-promises/window-methods/) et consulter le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/window-methods).

#### Aparté sur la détection des fonctionnalités

Si vous exécutez cet exemple dans un navigateur qui ne prend pas en charge les opérations de défilement qui retournent une promesse, les opérations de défilement restent fluides, mais la barre d'outils ne disparaît pas en fondu puis ne réapparaît pas en fondu une fois l'opération terminée. Une fonction appelée `supportsScrollPromises()` assure la détection des fonctionnalités, exécute une opération de défilement et vérifie si sa valeur de retour est une promesse&nbsp;:

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
- La méthode {{DOMxRef("Window.scrollBy()")}}
- La méthode {{DOMxRef("Element.scrollTo()")}}
- La méthode {{DOMxRef("Window.scrollByLines()")}} {{Non-standard_Inline}}
- La méthode {{DOMxRef("Window.scrollByPages()")}} {{Non-standard_Inline}}
