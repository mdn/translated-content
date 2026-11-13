---
title: "Element : méthode animate()"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Web Animations")}}

La méthode **`animate()`** de l'interface {{DOMxRef("Element")}} est un raccourci permettant de créer un nouvel objet {{DOMxRef("Animation")}}, de l'appliquer à un élément puis de la jouer. Elle retourne l'instance {{DOMxRef("Animation")}} alors créée.

> [!NOTE]
> Les éléments peuvent avoir plusieurs animations qui leur sont appliquées. Vous pouvez obtenir une liste des animations qui affectent un élément en appelant {{DOMxRef("Element.getAnimations()")}}.

## Syntaxe

```js-nolint
animate(keyframes, options)
```

### Paramètres

- `keyframes`
  - : Soit un tableau d'objets image-clé, **ou** un objet image-clé dont les
    propriétés sont des tableaux de valeurs à parcourir. Voir [les formats d'image-clés](/fr/docs/Web/API/Web_Animations_API/Keyframe_Formats) pour plus de détails.
- `options`
  - : Soit un **entier représentant la durée de l'animation** (en
    millisecondes), **ou** un objet contenant une ou plusieurs propriétés de synchronisation décrites dans le [paramètre options de `KeyframeEffect()`](/fr/docs/Web/API/KeyframeEffect/KeyframeEffect#paramètres) et/ou les options suivantes&nbsp;:
    - `id` {{Optional_Inline}}
      - : Une propriété unique à `animate()`&nbsp;: Une chaîne de caractères permettant de référencer l'animation.
    - `rangeEnd` {{Optional_Inline}}
      - : Définit la fin de la plage d'attachement d'une animation le long de sa chronologie, c'est-à-dire où, le long de la chronologie, une animation se termine. L'équivalent JavaScript de la propriété CSS {{CSSxRef("animation-range-end")}}. `rangeEnd` peut prendre plusieurs types de valeurs différents, comme suit&nbsp;:
        - Une chaîne de caractères qui peut être `normal` (signifiant qu'aucun changement n'est apporté à la plage d'attachement de l'animation), un type {{CSSxRef("&lt;length-percentage&gt;")}} CSS représentant un décalage, un type `<timeline-range-name>`, ou type un `<timeline-range-name>` suivi d'un type `<length-percentage>`. Par exemple&nbsp;: `"normal"`, `"entry"` ou `"cover 100%"`.

          Voir {{CSSxRef("animation-range")}} pour une description détaillée des valeurs disponibles. Consultez également le [Visualiseur des plages de la chronologie <sup>(angl.)</sup>](https://scroll-driven-animations.style/tools/view-timeline/ranges/), qui montre exactement ce que signifient les différentes valeurs dans un format visuel facile à comprendre.

        - Un objet contenant les propriétés `rangeName` (une chaîne de caractères) et `offset` (une propriété {{DOMxRef("CSSNumericValue")}}) représentant respectivement un type `<timeline-range-name>` et un type `<length-percentage>`, comme décrit au point précédent. Par exemple&nbsp;: `{ rangeName: "entry", offset: CSS.percent("100") }`.
        - Un objet {{DOMxRef("CSSNumericValue")}} représentant un décalage, par exemple&nbsp;: `CSS.percent("100")`.

    - `rangeStart` {{Optional_Inline}}
      - : Définit le début de la plage d'attachement d'une animation le long de sa chronologie, c'est-à-dire l'endroit sur la chronologie où l'animation va commencer. Équivalent JavaScript de la propriété CSS {{CSSxRef("animation-range-start")}}. `rangeStart` peut prendre les mêmes types de valeurs que `rangeEnd`.
    - `timeline` {{Optional_Inline}}
      - : Une propriété propre à `animate()`&nbsp;: L'objet {{DOMxRef("AnimationTimeline")}} à associer à l'animation. La valeur par défaut de {{DOMxRef("Document.timeline")}}. L'équivalent JavaScript de la propriété CSS {{CSSxRef("animation-timeline")}}.

### Valeur de retour

Retourne un objet {{DOMxRef("Animation")}}.

## Exemples

### Rotation et mise à l'échelle

Dans cet exemple, nous utilisons la méthode `animate()` pour faire pivoter et mettre à l'échelle un élément.

#### HTML

```html
<div class="journal">Journal qui tourne<br />donne le vertige</div>
```

#### CSS

```css
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.journal {
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  background-color: white;
  cursor: pointer;
}
```

#### JavaScript

```js
const rotationJournal = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const tempsJournal = {
  duration: 2000,
  iterations: 1,
};

const journal = document.querySelector(".journal");

journal.addEventListener("click", () => {
  journal.animate(rotationJournal, tempsJournal);
});
```

#### Résultat

{{EmbedLiveSample("Rotation et mise à l'échelle")}}

### Démonstration « Descendre dans le Terrier du lapin »

Dans la démonstration [Descendre dans le Terrier du lapin (avec l'API Web Animation)](/fr/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#transposer_en_javascript), nous utilisons la méthode pratique `animate()` pour créer et lancer immédiatement une animation sur l'élément `#tunnel`, afin de le faire défiler vers le haut, à l'infini.
Notez le tableau d'objets transmis en tant qu'images clés, ainsi que le bloc d'options de synchronisation.

```js
document.getElementById("tunnel").animate(
  [
    // images-clés
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // options de synchronisation
    duration: 1000,
    iterations: Infinity,
  },
);
```

### Images clés implicites de départ/arrivée

Le navigateur peut déduire l'état de départ ou d'arrivée d'une animation en utilisant l'état actuel. Par défaut, si une seule image clé est fournie, elle est considérée comme l'état final, et l'état de départ est déduit du style calculé actuel de l'élément. Cependant, vous pouvez définir le décalage (`offset`) pour indiquer où l'image clé fournie doit être placée dans la chronologie de l'animation.

```html hidden
<div>
  <img
    id="logo"
    src="/shared-assets/images/examples/firefox-logo.svg"
    alt="Logo de Firefox" />
</div>
<button id="execution">Animer - utiliser le début actuel</button>
<button id="execution2">Animer - utiliser la fin actuelle</button>
<button id="execution3">Animer - utiliser les deux fins actuelles</button>
```

```css hidden
div {
  width: 100%;
}

#logo {
  width: 200px;
  height: 200px;
}
```

```js
const logo = document.getElementById("logo");
document.getElementById("execution").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)" }, 1000);
});
document.getElementById("execution2").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)", offset: 0 }, 1000);
});
document.getElementById("execution3").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)", offset: 0.5 }, 1000);
});
```

Nous avons défini une seule image dans la chronologie, et il suffit de renseigner les états de début et/ou de fin pour créer une animation complète.

{{EmbedLiveSample("Images clés implicites de départ/arrivée", "", 300)}}

### `timeline`, `rangeStart` et `rangeEnd`

Exemple d'utilisation des propriétés `timeline`, `rangeStart` et `rangeEnd`&nbsp;:

```js
const img = document.querySelector("img");

const timeline = new ViewTimeline({
  subject: img,
  axis: "block",
});

img.animate(
  {
    opacity: [0, 1],
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    fill: "both",
    duration: 1,
    timeline,
    rangeStart: "cover 0%",
    rangeEnd: "cover 100%",
  },
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Animation")}}
- La méthode {{DOMxRef("Element.getAnimations()")}}
- Les propriétés CSS {{CSSxRef("animation-range-end")}}, {{CSSxRef("animation-range-start")}}, {{CSSxRef("animation-timeline")}}
- [Les animations dirigées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- [L'API Web Animations](/fr/docs/Web/API/Web_Animations_API)
