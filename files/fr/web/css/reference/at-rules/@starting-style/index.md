---
title: Règle CSS `@starting-style`
short-title: "@starting-style"
slug: Web/CSS/Reference/At-rules/@starting-style
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@starting-style`** est utilisée pour définir les valeurs de départ des propriétés appliquées à un élément, à partir desquelles vous souhaitez effectuer une transition lors de la première mise à jour de style de l'élément, c'est-à-dire lorsqu'un élément est affiché pour la première fois sur une page déjà chargée.

## Syntaxe

La règle `@starting-style` peut être utilisée de deux façons&nbsp;:

1. Comme bloc autonome, auquel cas elle contient un ou plusieurs ensembles de règles définissant les déclarations de style de départ et sélectionnant les éléments auxquels elles s'appliquent&nbsp;:

   ```css
   @starting-style {
     /* règles */
   }
   ```

2. Imbriquée dans un ensemble de règles existant, auquel cas elle contient une ou plusieurs déclarations définissant les valeurs de départ des propriétés pour les éléments déjà sélectionnés par cet ensemble de règles&nbsp;:

   ```css
   selector {
     /* règles existantes */
     /* ... */

     @starting-style {
       /* déclarations */
     }
   }
   ```

## Description

Pour éviter un comportement inattendu, les [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions) ne sont pas déclenchées par défaut lors de la première mise à jour de style d'un élément, ou lorsque son type {{CSSxRef("display")}} passe de `none` à une autre valeur. Pour activer les transitions sur le premier style, il faut utiliser des règles `starting-style`. Elles fournissent des styles de départ pour les éléments qui n'ont pas d'état précédent, en définissant les valeurs de propriété à partir desquelles effectuer la transition.

`@starting-style` est particulièrement utile pour créer des transitions d'entrée et de sortie pour les éléments affichés dans la {{Glossary("top layer", "couche supérieure")}} (comme les [fenêtres contextuelles](/fr/docs/Web/API/Popover_API) et les boîtes de dialogue bloquantes {{HTMLElement("dialog")}}), les éléments qui changent vers ou depuis `display: none`, et les éléments ajoutés ou retirés du DOM pour la première fois.

> [!NOTE]
> `@starting-style` ne concerne que les transitions CSS. Lorsque vous utilisez des [animations CSS](/fr/docs/Web/CSS/Guides/Animations) pour réaliser de tels effets, `@starting-style` n'est pas nécessaire. Voir [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) pour un exemple.

Il existe deux façons d'utiliser `@starting-style`&nbsp;: comme règle autonome ou imbriquée dans un ensemble de règles.

Prenons le cas où vous souhaitez animer une [fenêtre contextuelle](/fr/docs/Web/API/Popover_API) lorsqu'elle est affichée (c'est-à-dire lorsqu'elle est ajoutée à la top layer). La «&nbsp;règle originale&nbsp;» qui définit les styles de la fenêtre contextuelle ouverte peut ressembler à ceci (voir [l'exemple de fenêtre contextuelle](#animer_une_fenêtre_contextuelle) ci-dessous)&nbsp;:

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Pour définir les valeurs de départ des propriétés de la fenêtre contextuelle à animer avec la première méthode, vous incluez un bloc autonome `@starting-style` dans votre CSS&nbsp;:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> La règle `@starting-style` et la «&nbsp;règle originale&nbsp;» ont la même [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity). Pour garantir l'application des styles de départ, placez la règle `@starting-style` _après_ la «&nbsp;règle originale&nbsp;». Si vous la placez avant, les styles originaux écrasent les styles de départ.

Pour définir le style de départ de la fenêtre contextuelle avec la méthode imbriquée, vous pouvez imbriquer le bloc `@starting-style` dans la «&nbsp;règle originale&nbsp;»&nbsp;:

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);

  @starting-style {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

### Quand les styles de départ sont-ils utilisés ?

Il est important de comprendre qu'un élément va effectuer une transition à partir de ses styles `@starting-style` lorsqu'il est rendu pour la première fois dans le DOM, ou lorsqu'il passe de {{CSSxRef("display", "display: none")}} à une valeur visible. Lorsqu'il repasse de son état visible initial, il n'utilise plus les styles `@starting-style`, car il est désormais visible dans le DOM. Il effectue alors une transition vers les styles définis pour l'état par défaut de l'élément.

En pratique, il y a trois états de style à gérer dans ces situations&nbsp;: l'état de départ (`@starting-style`), l'état transitionné, et l'état par défaut. Il est possible que les transitions «&nbsp;vers&nbsp;» et «&nbsp;depuis&nbsp;» soient différentes dans ces cas. Vous pouvez voir une démonstration dans notre [Exemple de quand les styles de départ sont utilisés](#démonstration_de_lutilisation_des_styles_de_départ) ci-dessous.

## Syntaxe formelle

{{CSSSyntaxRaw(`@starting-style = @starting-style { <rule-list> }`)}}

## Exemples

### Utilisation basique de @starting-style

Faites passer la {{CSSxRef("background-color")}} d'un élément de transparent à vert lors de son rendu initial&nbsp;:

```css
#target {
  transition: background-color 1.5s;
  background-color: green;
}

@starting-style {
  #target {
    background-color: transparent;
  }
}
```

Faites passer la {{CSSxRef("opacity")}} d'un élément lorsqu'il change sa valeur {{CSSxRef("display")}} vers ou depuis `none`&nbsp;:

```css
#target {
  transition-property: opacity, display;
  transition-duration: 0.5s;
  display: block;
  opacity: 1;
  @starting-style {
    opacity: 0;
  }
}

#target.hidden {
  display: none;
  opacity: 0;
}
```

### Démonstration de l'utilisation des styles de départ

Dans cet exemple, un bouton est pressé pour créer un élément {{HTMLElement("div")}}, lui donner la classe `showing`, et l'ajouter au DOM.

La classe `showing` reçoit un style de départ `@starting-style` de `background-color: red` et un style de transition vers `background-color: blue`. Le bloc de règles par défaut du `div` contient `background-color: yellow`, et c'est aussi là que la propriété `transition` est définie.

Lorsque le `<div>` est ajouté au DOM pour la première fois, le fond passe de rouge à bleu. Après un délai, la classe `showing` est retirée du `<div>` avec JavaScript. À ce moment-là, la transition se fait de bleu vers jaune, et non vers rouge. Cela prouve que les styles de départ ne sont utilisés que lors du premier rendu de l'élément dans le DOM. Une fois affiché, l'élément revient au style par défaut qui lui est appliqué.

Après un autre délai, le `<div>` est retiré du DOM, réinitialisant l'état initial de l'exemple pour pouvoir le relancer.

#### HTML

```html
<button>Afficher <code>&lt;div&gt;</code></button>
```

#### CSS

```css hidden
div {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  margin-top: 10px;
}

div::after {
  content: "classe : " attr(class);
  position: relative;
  top: 3px;
  left: 3px;
}
```

```css
div {
  background-color: yellow;
  transition: background-color 3s;
}

div.afficher {
  background-color: skyblue;
}

@starting-style {
  div.afficher {
    background-color: red;
  }
}
```

#### JavaScript

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.disabled = true;
  const divElem = document.createElement("div");
  divElem.classList.add("afficher");
  document.body.append(divElem);

  setTimeout(() => {
    divElem.classList.remove("afficher");

    setTimeout(() => {
      divElem.remove();
      btn.disabled = false;
    }, 3000);
  }, 3000);
});
```

#### Résultat

Le code s'affiche ainsi&nbsp;:

{{ EmbedLiveSample("Démonstration de l'utilisation des styles de départ", "100%", 150) }}

### Animation d'une fenêtre contextuelle

Dans cet exemple, une [fenêtre contextuelle](/fr/docs/Web/API/Popover_API) est animée à l'aide des [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions). Des animations d'entrée et de sortie basiques sont fournies avec la propriété {{CSSxRef("transition")}}.

#### HTML

Le HTML contient un élément {{HTMLElement("div")}} déclaré comme fenêtre contextuelle grâce à l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) et un élément {{HTMLElement("button")}} servant de contrôle d'affichage de la fenêtre contextuelle avec son attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget).

```html
<button popovertarget="mypopover">Afficher la fenêtre contextuelle</button>
<div popover="auto" id="mypopover">
  Je suis une fenêtre contextuelle&nbsp;! Je dois être animée.
</div>
```

#### CSS

Dans cet exemple, on souhaite animer deux propriétés, {{CSSxRef("opacity")}} et {{CSSxRef("transform")}} (notamment une transformation d'échelle horizontale), pour faire apparaître/disparaître la fenêtre contextuelle et la faire grandir/rétrécir horizontalement.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* État final de l'animation de sortie */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Équivalent à
  transition: all 0.7s allow-discrete; */
}

/* À inclure après la règle [popover]:popover-open */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Transition pour le backdrop du popover */
[popover]::backdrop {
  background-color: transparent;
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Équivalent à
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* L'imbrication (&) n'est pas supportée pour les pseudo-éléments,
il faut donc définir un bloc autonome starting-style. */
@starting-style {
  [popover]:popover-open::backdrop {
    background-color: transparent;
  }
}
```

Pour cela, on définit un état de départ pour ces propriétés sur l'état caché par défaut de l'élément de fenêtre contextuelle (sélectionné par `[popover]`), et un état final sur l'état ouvert de la fenêtre contextuelle (sélectionné par la pseudo-classe {{CSSxRef(":popover-open")}}).

On définit ensuite la propriété {{CSSxRef("transition")}} pour animer entre les deux états. Un état de départ pour l'animation est inclus dans une règle @starting-style pour activer l'animation d'entrée.

Comme l'élément animé est promu dans la {{Glossary("top layer", "couche supérieure")}}, lorsqu'il est affiché et retiré de la couche supérieure et lorsqu'il est caché (avec {{CSSxRef("display", "display: none")}}), quelques étapes supplémentaires sont nécessaires pour garantir que l'animation fonctionne dans les deux sens&nbsp;:

- `display` est ajouté à la liste des propriétés animées pour garantir que l'élément animé reste visible (défini sur `display: block` ou une autre valeur visible) pendant toute l'animation d'entrée et de sortie. Sans cela, l'animation de sortie n'est pas visible&nbsp;: la fenêtre contextuelle disparaît simplement. Notez que la valeur {{CSSxRef("transition-behavior", "transition-behavior: allow-discrete")}} est aussi définie dans le raccourci pour activer l'animation.
- {{CSSxRef("overlay")}} est ajouté à la liste des propriétés animées pour garantir que le retrait de l'élément de la couche supérieure soit différé jusqu'à la fin de l'animation. Cela n'a pas un grand impact pour ce type d'animation, mais dans des cas plus complexes, ne pas le faire peut entraîner le retrait trop rapide de l'élément, rendant l'animation peu fluide ou inefficace. Là encore, `transition-behavior: allow-discrete` est requis pour que l'animation ait lieu.

> [!NOTE]
> Une transition est aussi appliquée au {{CSSxRef("::backdrop")}} qui apparaît derrière la fenêtre contextuelle à l'ouverture, pour une animation d'assombrissement agréable. `[popover]:popover-open::backdrop` est utilisé pour cibler le backdrop lorsque la fenêtre contextuelle est ouverte.

#### Résultat

Le code s'affiche ainsi&nbsp;:

{{ EmbedLiveSample("animation_dun_popover", "100%", "200") }}

> [!NOTE]
> Comme les fenêtres contextuelles passent de `display: none` à `display: block` à chaque affichage, la fenêtre contextuelle effectue une transition de ses styles `@starting-style` vers ses styles `[popover]:popover-open` à chaque animation d'entrée. Lorsqu'il se ferme, il passe de l'état `[popover]:popover-open` à l'état `[popover]` par défaut.

> [!NOTE]
> Vous pouvez trouver un exemple montrant la transition d'un élément {{HTMLElement("dialog")}} et de son backdrop lors de l'affichage et de la fermeture sur la page de référence `<dialog>` — voir [Transition des éléments dialog](/fr/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Transition d'éléments lors de l'ajout et du retrait dans le DOM

Cet exemple contient un bouton qui, lorsqu'il est pressé, ajoute de nouveaux éléments à un conteneur {{HTMLElement("section")}}. Chaque élément contient à son tour un bouton imbriqué qui, lorsqu'il est pressé, retire l'élément. Cet exemple montre comment utiliser les transitions pour animer les éléments lors de leur ajout ou retrait du DOM.

#### HTML

```html
<button>Créer une nouvelle colonne</button>
<section></section>
```

#### JavaScript

Le JavaScript permet l'ajout et le retrait des éléments&nbsp;:

```js
const btn = document.querySelector("button");
const sectionElem = document.querySelector("section");

btn.addEventListener("click", createColumn);

function randomBackground() {
  function randomNum() {
    return Math.floor(Math.random() * 255);
  }
  const baseColor = `${randomNum()} ${randomNum()} ${randomNum()}`;

  return `linear-gradient(to right, rgb(${baseColor} / 0), rgb(${baseColor} / 0.5))`;
}

function createColumn() {
  const divElem = document.createElement("div");
  divElem.style.background = randomBackground();

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";
  closeBtn.setAttribute("aria-label", "fermer");
  divElem.append(closeBtn);
  sectionElem.append(divElem);

  closeBtn.addEventListener("click", () => {
    divElem.classList.add("fade-out");

    setTimeout(() => {
      divElem.remove();
    }, 1000);
  });
}
```

Lorsque le bouton «&nbsp;Créer une nouvelle colonne&nbsp;» est cliqué, la fonction `createColumn()` est appelée. Elle crée un élément {{HTMLElement("div")}} avec une couleur de fond générée aléatoirement et un bouton {{HTMLElement("button")}} pour fermer le `<div>`. Le bouton est ajouté au `<div>`, puis le `<div>` au conteneur `<section>`.

On ajoute ensuite un écouteur d'évènement au bouton de fermeture avec {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}. Cliquer sur le bouton fait deux choses&nbsp;:

- Ajoute la classe `fade-out` au `<div>`. L'ajout de la classe déclenche l'animation de sortie définie sur cette classe.
- Retire le `<div>` après un délai de 1000&nbsp;ms. La fonction {{DOMxRef("Window.setTimeout", "setTimeout()")}} retarde le retrait du `<div>` du DOM (avec {{DOMxRef("Element.remove()")}}) jusqu'à la fin de l'animation.

#### CSS

On inclut une propriété {{CSSxRef("transition")}} qui anime la {{CSSxRef("opacity")}} et la {{CSSxRef("scale")}} de chaque colonne lors de leur ajout et retrait&nbsp;:

```css hidden
html * {
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 10px;
}

body > button {
  margin: 10px 10px 0 10px;
}

section {
  display: flex;
  flex: 1;
  gap: 10px;
  margin: 10px;
}
```

```css
div {
  flex: 1;
  border: 1px solid gray;
  position: relative;
  opacity: 1;
  scale: 1 1;

  transition:
    opacity 0.7s,
    scale 0.7s,
    display 0.7s allow-discrete,
    all 0.7s allow-discrete;
  /* Équivalent à
  transition: all 0.7s allow-discrete; */
}

/* À inclure après la règle `div` */
@starting-style {
  div {
    opacity: 0;
    scale: 1 0;
  }
}

.fade-out {
  opacity: 0;
  display: none;
  scale: 1 0;
}

div > button {
  font-size: 1.6rem;
  background: none;
  border: 0;
  text-shadow: 2px 1px 1px white;
  border-radius: 15px;
  position: absolute;
  top: 1px;
  right: 1px;
  cursor: pointer;
}
```

Pour animer la {{CSSxRef("opacity")}} et la {{CSSxRef("scale")}} de chaque `<div>` lors de son ajout au DOM puis inverser l'animation lors de son retrait, on&nbsp;:

- Définit l'état final des propriétés à animer dans la règle `div { ... }`.
- Définit l'état de départ à partir duquel effectuer la transition dans un bloc `@starting-style`.
- Définit l'animation de sortie dans la règle `.fade-out` — c'est la classe que le JavaScript assigne aux éléments `<div>` lorsque leur bouton de fermeture est pressé. En plus de définir les états finaux de `opacity` et `scale`, on définit aussi [`display: none`](/fr/docs/Web/CSS/Reference/Properties/display) sur les `<div>` — on souhaite qu'ils deviennent immédiatement indisponibles une fois retirés de l'interface.
- Définit la liste {{CSSxRef("transition")}} dans la règle `div { ... }` pour animer `opacity`, `scale` et `display`. Notez que pour `display`, la valeur {{CSSxRef("transition-behavior", "transition-behavior: allow-discrete")}} est aussi définie dans le raccourci pour que l'animation ait lieu.

#### Résultat

Le résultat final ressemble à ceci&nbsp;:

{{ EmbedLiveSample("transition_déléments_lors_de_lajout_et_du_retrait_dans_le_dom", "100%", "400") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module des [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)
- La propriété {{CSSxRef("overlay")}}
- La propriété {{CSSxRef("transition-behavior")}}
- L'interface API {{DOMxRef("CSSStartingStyleRule")}}
- [Quatre nouvelles fonctionnalités CSS pour des animations d'entrée et de sortie fluides <sup>(angl.)</sup>](https://developer.chrome.com/blog/entry-exit-animations/) sur developer.chrome.com (2023)
