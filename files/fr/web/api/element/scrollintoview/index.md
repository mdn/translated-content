---
title: "Element : méthode scrollIntoView()"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("DOM")}}

La méthode **`scrollIntoView()`** de l'interface {{DOMxRef("Element")}} fait défiler les conteneurs ancêtres de l'élément de sorte que l'élément sur lequel `scrollIntoView()` est appelé soit visible pour l'utilisateur·ice.

## Syntaxe

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(options)
```

### Paramètres

- `alignToTop` {{Optional_Inline}}
  - : Une valeur booléenne&nbsp;:
    - Si `true`, le haut de l'élément est aligné avec le haut de la zone visible de l'ancêtre défilable. Correspond à `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. C'est la valeur par défaut.
    - Si `false`, le bas de l'élément est aligné avec le bas de la zone visible de l'ancêtre défilable. Correspond à `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `options` {{Optional_Inline}}
  - : Un objet avec les propriétés suivantes&nbsp;:
    - `behavior` {{Optional_Inline}}
      - : Détermine si le défilement est instantané ou s'il s'anime en douceur. Cette option est une chaîne de caractères qui doit prendre l'une des valeurs suivantes&nbsp;:
        - `smooth`: Le défilement s'anime en douceur.
        - `instant`: Le défilement se produit instantanément en un seul saut.
        - `auto`: Le comportement de défilement est déterminé par la valeur calculée de la propriété CSS {{CSSxRef("scroll-behavior")}} sur l'élément.

        Si omis, `behavior` prend par défaut la valeur `auto`.

    - `block` {{Optional_Inline}}
      - : Définit l'alignement vertical de l'élément dans le conteneur ancêtre défilable. Sa valeur peut être l'une des suivantes&nbsp;:
        - `start`&nbsp;: Aligne le bord supérieur de l'élément avec le haut du conteneur défilable, faisant apparaître l'élément au début de la zone visible verticalement.
        - `center`&nbsp;: Aligne l'élément verticalement au centre du conteneur défilable, le positionnant au milieu de la zone visible.
        - `end`&nbsp;: Aligne le bord inférieur de l'élément avec le bas du conteneur défilable, plaçant l'élément à la fin de la zone visible verticalement.
        - `nearest`&nbsp;: Fait défiler l'élément jusqu'au bord le plus proche dans la direction verticale. Si l'élément est plus proche du bord supérieur du conteneur défilable, il s'aligne en haut&nbsp;; s'il est plus proche du bord inférieur, il s'aligne en bas. Cela minimise la distance de défilement.

        La valeur par défaut est `start`.

    - `container` {{Optional_Inline}}
      - : Définit le conteneur ancêtre défilable. Sa valeur peut être l'une des suivantes&nbsp;:
        - `all`&nbsp;: Tous les conteneurs défilables sont impactés (y compris la fenêtre d'affichage).
        - `nearest`&nbsp;: Seul le conteneur défilable le plus proche est impacté par le défilement.

        La valeur par défaut est `all`.

    - `inline` {{Optional_Inline}}
      - : Définit l'alignement horizontal de l'élément dans le conteneur ancêtre défilable. Sa valeur peut être l'une des suivantes&nbsp;:
        - `start`&nbsp;: Aligne le bord gauche de l'élément avec le bord gauche du conteneur défilable, faisant apparaître l'élément au début de la zone visible horizontalement.
        - `center`&nbsp;: Aligne l'élément horizontalement au centre du conteneur défilable, le positionnant au milieu de la zone visible.
        - `end`&nbsp;: Aligne le bord droit de l'élément avec le bord droit du conteneur défilable, plaçant l'élément à la fin de la zone visible horizontalement.
        - `nearest`&nbsp;: Fait défiler l'élément jusqu'au bord le plus proche dans la direction horizontale. Si l'élément est plus proche du bord gauche du conteneur défilable, il s'aligne à gauche&nbsp;; s'il est plus proche du bord droit, il s'aligne à droite. Cela minimise la distance de défilement.

        La valeur par défaut est `nearest`.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec un objet contenant la propriété suivante&nbsp;:

- `interrupted`
  - : Une valeur booléenne indiquant si l'opération de défilement a été interrompue (`true`) ou non (`false`). Une telle interruption se produit généralement lorsqu'un défilement programmatique est en cours et qu'un autre défilement programmatique est initié sur le même élément avant que le premier ne se termine.

## Exemples

### Utilisation simple

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

### Contrôler l'alignement haut/bas

Par défaut, l'élément est aligné sur le bord supérieur (ou inférieur) de l'ancêtre défilable. Pour définir un espacement personnalisé, utilisez {{CSSxRef("scroll-margin-top")}} ou {{CSSxRef("scroll-margin-bottom")}}. Cette possibilité est souvent utile lorsqu'un en-tête fixe est présent sur la page.

#### HTML

```html live-sample___scroll-with-padding
<body>
  <header class="barre-navigation">Barre de navigation</header>
  <main class="contenu">
    <button id="aller-en-bas">Aller en bas</button>
    <button id="aller-en-haut">Aller en haut</button>
  </main>
</body>
```

#### CSS

```css live-sample___scroll-with-padding
.barre-navigation {
  height: 50px;
  position: sticky;
  top: 0;
  border-bottom: 1.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenu {
  height: 2000px;
  position: relative;
}
#aller-en-bas {
  position: absolute;
  top: 10px;
  /* Sans cela, le bouton est aligné en haut de la page
  au lieu du bas de la barre de navigation lorsqu'on fait défiler */
  scroll-margin-top: 60px;
}
#aller-en-haut {
  position: absolute;
  bottom: 10px;
  scroll-margin-bottom: 0;
}
```

#### JavaScript

```js live-sample___scroll-with-padding
const allerEnHaut = document.getElementById("aller-en-haut");
const allerEnBas = document.getElementById("aller-en-bas");
allerEnBas.addEventListener("click", () => {
  allerEnHaut.scrollIntoView({ behavior: "instant", block: "end" });
});
allerEnHaut.addEventListener("click", () => {
  allerEnBas.scrollIntoView({ behavior: "instant", block: "start" });
});
```

#### Résultat

{{EmbedLiveSample("scroll-with-padding", 700, 300)}}

### Réagir à la fin du défilement

Notre [démonstration des méthodes d'élément <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) montre comment la valeur de retour de la promesse de `scrollIntoView()` peut servir à réagir à la fin d'une opération de défilement. Cette technique est surtout utile lorsque le défilement se déroule progressivement dans le temps (en définissant l'option [`behavior`](#behavior) sur `smooth`, ou en définissant la propriété CSS {{CSSxRef("scroll-behavior")}} de l'élément défilable sur `smooth`).

#### HTML

Notre HTML comprend un élément {{HTMLElement("section")}} contenant plusieurs paragraphes et une barre d'outils constituée d'un élément {{HTMLElement("div")}} contenant des éléments {{HTMLElement("button")}} qui déclenchent différentes opérations de défilement sur la `<section>`. Le dernier paragraphe possède un `id` égal à `fin`.

```html
<div>
  <button class="defilement">scroll() jusqu'à 1000</button>
  <button class="defilement-vers">scrollTo() en haut</button>
  <button class="defilement-par">scrollBy() de 200</button>
  <button class="defilement-dans-zone-visible">
    Faire défiler le dernier &lt;p&gt; dans la zone visible
  </button>
</div>

<section>
  ...

  <p id="fin">...</p>
</section>
```

#### CSS

Nous donnons à l'élément `<section>` une hauteur ({{CSSxRef("height")}}) fixe et une valeur `scroll` pour {{CSSxRef("overflow-y")}} afin qu'il défile verticalement, puis nous définissons sa propriété {{CSSxRef("scroll-behavior")}} sur `smooth` afin que les opérations de défilement s'animent progressivement dans le temps plutôt que de se produire instantanément.

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

Nous créons également deux sélecteurs de classe&nbsp;; lorsqu'une classe `fade-out` ou `fade-in` est appliquée à un élément, une {{CSSxRef("animation")}} est appliquée afin de le faire disparaître ou apparaître progressivement. Nous définissons aussi des blocs {{CSSxRef("@keyframes")}} pour définir les changements d'opacité ({{CSSxRef("opacity")}}) nécessaires à ces animations.

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

Le reste du CSS n'est pas affiché par souci de concision.

#### JavaScript

Nous commençons par récupérer des références vers le `<button>` qui exécute l'opération `scrollIntoView()`, vers le `<div>` de la barre d'outils et vers le paragraphe avec un `id` qui vaut `fin`&nbsp;:

```js
const boutonDefilementDansZone = document.querySelector(
  ".defilement-dans-zone-visible",
);
const barreOutils = document.querySelector("div");
const fin = document.querySelector("#fin");
```

Ensuite, nous définissons une fonction appelée `estInterrompu()`, conçue pour s'exécuter lorsqu'une opération de défilement se termine, qui prend une valeur booléenne `interrompu` comme paramètre. Elle consigne un message dans la console pour indiquer que le défilement est terminé et préciser si l'opération a été interrompue (`interrompu` vaut `true`) ou non. De plus, si `interrompu` vaut `true`, elle appelle `alert()` pour signaler clairement l'interruption.

```js
function estInterrompu(interrompu) {
  console.log(`Défilement terminé;${interrompu ? " " : " non "}interrompu`);
  if (interrompu) {
    alert("Défilement interrompu !");
  }
}
```

Lorsque le bouton est cliqué, nous appliquons immédiatement la classe `fade-out` à la barre d'outils, ce qui la fait disparaître progressivement. Nous exécutons ensuite `scrollIntoView()` sur le paragraphe final afin que la `<section>` défile jusqu'à ce que ce paragraphe soit visible, en attendant la résolution de sa promesse et en stockant le `resultat` dans une constante. Une fois la promesse résolue, nous appelons `estInterrompu()` pour indiquer que l'opération de défilement est terminée et préciser si elle a été interrompue. Enfin, nous appliquons la classe `fade-in` à la barre d'outils, ce qui la fait réapparaître progressivement.

```js
boutonDefilementDansZone.addEventListener("click", async () => {
  barreOutils.className = "fade-out";
  const resultat = await fin.scrollIntoView();
  estInterrompu(resultat.interrupted);
  barreOutils.className = "fade-in";
});
```

Le code qui n'est pas pertinent pour `scrollIntoView()` n'est pas affiché par souci de concision.

#### Résultat

Cliquez sur les boutons pour observer le comportement du défilement. Remarquez que la barre d'outils disparaît progressivement lorsqu'un bouton est activé, puis réapparaît une fois le défilement fluide terminé. Essayez également d'activer un bouton, puis d'en activer rapidement un autre avant la fin de la première opération de défilement. Remarquez que, dans ces cas, le défilement est signalé comme interrompu.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

Vous pouvez également [charger la démonstration dans un autre onglet <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) et consulter le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Aparté sur la détection de fonctionnalités

Si vous exécutez cet exemple dans un navigateur qui ne prend pas en charge les opérations de défilement qui retournent une promesse, les opérations de défilement restent fluides, mais la barre d'outils ne disparaît pas progressivement puis ne réapparaît pas une fois l'opération terminée. La détection de fonctionnalité est gérée par une fonction appelée `supportsScrollPromises()`, qui exécute une opération de défilement et vérifie si sa valeur de retour est une promesse&nbsp;:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Consultez le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) pour voir comment la détection de fonctionnalité est utilisée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.scrollIntoViewIfNeeded()")}} {{Non-standard_Inline}}
