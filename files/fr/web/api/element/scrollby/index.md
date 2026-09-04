---
title: "Element : méthode scrollBy()"
short-title: scrollBy()
slug: Web/API/Element/scrollBy
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("CSSOM view API")}}

La méthode **`scrollBy()`** de l'interface {{DOMxRef("Element")}} fait défiler un élément du montant défini.

## Syntaxe

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### Paramètres

- `xCoord`
  - : La valeur en pixels horizontale de la distance que vous souhaitez faire défiler.
- `yCoord`
  - : La valeur en pixels verticale de la distance que vous souhaitez faire défiler.
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

Une promesse ({{JSxRef("Promise")}}) qui se résout avec un objet contenant la propriété suivante&nbsp;:

- `interrupted`
  - : Une valeur booléenne indiquant si l'opération de défilement a été interrompue (`true`) ou non (`false`). Une telle interruption se produit généralement lorsqu'un défilement programmé est en cours et qu'un autre défilement programmé est initié sur le même élément avant que le premier ne se termine.

## Exemples

### Utilisation simple

```js
// défiler un élément
element.scrollBy(300, 300);
```

Utilisation de `options`&nbsp;:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Réagir à la fin du défilement

Notre [démonstration des méthodes d'élément <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) montre comment la valeur de retour de promesse de `scrollBy()` peut être utilisée pour réagir à la fin d'une opération de défilement. Cette technique est surtout utile dans les cas où le défilement se produit en douceur au fil du temps (obtenu en définissant l'option [`behavior`](#behavior) sur `smooth`, ou en définissant la propriété CSS {{CSSxRef("scroll-behavior")}} de l'élément défilant sur `smooth`).

#### HTML

Notre HTML inclut un élément HTML {{HTMLElement("section")}} contenant plusieurs paragraphes de contenu et un élément HTML {{HTMLElement("div")}} barre d'outils contenant des éléments HTML {{HTMLElement("button")}} qui déclenchent diverses opérations de défilement sur le `<section>`.

```html
<div>
  <button class="defilement">scroll() jusqu'à 1000</button>
  <button class="defilement-vers">scrollTo() en haut</button>
  <button class="defilement-par">scrollBy() de 200</button>
  <button class="defilement-dans-zone-visible">
    Faire défiler le dernier &lt;p&gt; dans la zone visible
  </button>
</div>

<section>…</section>
```

#### CSS

Nous donnons à l'élément `<section>` une hauteur ({{CSSxRef("height")}}) fixe et une valeur {{CSSxRef("overflow-y")}} de `scroll` afin qu'il défile verticalement, et définissons sa propriété CSS {{CSSxRef("scroll-behavior")}} sur `smooth` afin que toutes les opérations de défilement soient animées en douceur au fil du temps plutôt qu'instantanément.

```css
section {
  border: 1px solid black;
  padding: 20px;
  margin-top: 60px;
  height: 500px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
```

Nous créons également deux sélecteurs de classe&nbsp;; lorsque la classe `fade-out` ou `fade-in` est appliquée à un élément, une {{CSSxRef("animation")}} est appliquée afin qu'il disparaisse ou apparaisse en douceur, respectivement. Nous définissons également des blocs {{CSSxRef("@keyframes")}} pour définir les changements d'opacité ({{CSSxRef("opacity")}}) requis pour ces animations.

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

Nous commençons par récupérer les références au `<button>` qui exécute l'opération `scrollBy()`, à la barre d'outils `<div>` et à la `<section>` défilante&nbsp;:

```js
const btnDefilementPar = document.querySelector(".defilement-par");
const barreOutils = document.querySelector("div");
const section = document.querySelector("section");
```

Ensuite, nous définissons une fonction appelée `estInterrompu()`, conçue pour s'exécuter en réponse à la fin d'une opération de défilement, qui prend une valeur booléenne `interrompu` en paramètre. Elle affiche un message dans la console pour indiquer que le défilement est terminé et si l'opération a été interrompue (`interrompu` est `true`) ou non. De plus, si `interrompu` est `true`, elle appelle un `alert()` pour indiquer clairement l'interruption.

```js
function estInterrompu(interrompu) {
  console.log(`Défilement terminé ;${interrompu ? " " : " non "}interrompu`);
  if (interrompu) {
    alert("Défilement interrompu !");
  }
}
```

Lorsque le bouton est cliqué, nous appliquons immédiatement la classe `fade-out` à la barre d'outils, ce qui la fait disparaître en douceur. Nous exécutons ensuite `scrollBy(0, 200)` sur le `<section>` pour faire défiler son contenu de 200 pixels vers le bas, en attendant la résolution de sa promesse et en stockant le `resultat` dans une constante. Lorsque la promesse est résolue, nous appelons `estInterrompu()` pour indiquer que l'opération de défilement est terminée et si elle a été interrompue. Enfin, nous appliquons la classe `fade-in` à la barre d'outils, ce qui la fait réapparaître en douceur.

```js
btnDefilementPar.addEventListener("click", async () => {
  barreOutils.className = "fade-out";
  const resultat = await section.scrollBy(0, 200);
  estInterrompu(resultat.interrupted);
  barreOutils.className = "fade-in";
});
```

Le code non pertinent à `scrollBy()` n'est pas montré, pour des raisons de concision.

#### Résultat

Cliquez sur les boutons pour voir le comportement de défilement. Remarquez comment la barre d'outils disparaît en douceur lorsqu'un bouton est pressé, et réapparaît une fois le défilement en douceur terminé. Essayez également d'appuyer sur un bouton puis rapidement sur un autre bouton avant que la première opération de défilement ne soit terminée. Remarquez comment, dans ces cas, le défilement est signalé comme interrompu.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Vous pouvez également [charger la démo dans un onglet séparé <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) et consulter le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Aparté sur la détection des fonctionnalités

Si vous exécutez cet exemple dans un navigateur qui ne prend pas en charge les opérations de défilement retournant une promesse, les opérations de défilement sont toujours fluides, mais la barre d'outils ne disparaît pas en douceur puis ne réapparaît pas une fois l'opération terminée. La détection des fonctionnalités est gérée par une fonction appelée `supportsScrollPromises()`, qui exécute une opération de défilement et teste si sa valeur de retour est une promesse&nbsp;:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Consultez le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) pour voir comment la détection des fonctionnalités est utilisée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
