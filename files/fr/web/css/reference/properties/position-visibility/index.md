---
title: position-visibility
slug: Web/CSS/Reference/Properties/position-visibility
l10n:
  sourceCommit: 295f308ff9562fb5dff29f78268320a8ba759c8f
---

La propriété [CSS](/fr/docs/Web/CSS) **`position-visibility`** permet de masquer conditionnellement un élément positionné par ancre en fonction, par exemple, de son débordement par rapport à son élément contenant ou à la fenêtre d'affichage.

## Syntaxe

```css
/* Valeurs uniques */
position-visibility: always;
position-visibility: anchors-valid;
position-visibility: anchors-visible;
position-visibility: no-overflow;

/* Valeurs globales */
position-visibility: inherit;
position-visibility: initial;
position-visibility: revert;
position-visibility: revert-layer;
position-visibility: unset;
```

### Valeurs

- `always`
  - : L'élément positionné est toujours affiché.
- `anchors-valid`
  - : Si la valeur de la propriété {{CSSxRef("position-anchor")}} de l'élément positionné ne pointe pas vers un élément d'ancrage valide, l'élément positionné sera fortement masqué.
- `anchors-visible`
  - : Si l'ancre est complètement masquée, soit en débordant de son élément contenant (ou de la fenêtre d'affichage), soit en étant recouverte par d'autres éléments, l'élément positionné sera fortement masqué.
- `no-overflow`
  - : Si l'élément positionné commence à déborder de son élément contenant ou de la fenêtre d'affichage, il sera fortement masqué.

## Description

Dans certaines situations, vous pouvez ne pas vouloir afficher un élément positionné par ancre. Par exemple, si son ancre associée a été défilée hors de l'écran mais que l'élément positionné par ancre resterait partiellement ou totalement visible, il pourrait être difficile de savoir à quoi il se rapporte et il occuperait de l'espace inutilement, vous pouvez donc préférer le masquer complètement.

La propriété `position-visibility` peut être utilisée pour afficher l'élément positionné par ancre avec la valeur `always`, ou pour le masquer de façon conditionnelle dans certaines situations&nbsp;:

- `anchors-visible`&nbsp;: L'élément d'ancrage associé est complètement masqué.
- `anchors-valid`&nbsp;: La propriété `position-anchor` de l'élément positionné par ancre ne fait pas référence à un {{CSSxRef("anchor-name")}} valide défini sur un élément d'ancrage dans le même document.
- `no-overflow`&nbsp;: L'élément positionné par ancre est partiellement ou totalement masqué.

Lorsqu'un élément est masqué à cause de `position-visibility`, on dit qu'il est **fortement masqué**. Cela signifie qu'il se comportera comme si lui-même et ses éléments descendants avaient une valeur {{CSSxRef("visibility")}} de `hidden`, quelle que soit leur valeur de visibilité réelle.

`position-visibility` ne doit être utilisée que dans les situations où il est préférable de masquer complètement l'élément positionné. Dans la plupart des cas, il est plus judicieux de tenter de changer le placement des éléments positionnés lorsqu'ils commencent à déborder, afin de les garder à l'écran et utilisables. Cela peut être fait avec la propriété {{CSSxRef("position-try-fallbacks")}} et la règle {{CSSxRef("@position-try")}}. Voir le guide [des options de repli et masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) pour plus d'informations.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple permet de changer la valeur de la propriété `position-visibility` d'un élément positionné par ancre pour démontrer les effets de chaque valeur.

#### HTML

Nous définissons deux éléments HTML {{HTMLElement("div")}}&nbsp;: un élément d'ancrage avec une classe `ancre` et un élément positionné avec une classe `boite-information`.

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque.
</p>
```

```html
<div class="ancre">⚓︎</div>

<div class="boite-information">
  <p>Ceci est une boîte d'information.</p>
</div>
```

```html hidden
<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<form>
  <fieldset>
    <legend>Choisir la visibilité de la position</legend>
    <div>
      <label for="radio-always">always</label>
      <input
        type="radio"
        id="radio-always"
        name="position-visibility"
        value="always"
        checked />
    </div>
    <div>
      <label for="radio-anchors-visible">anchors-visible</label>
      <input
        type="radio"
        id="radio-anchors-visible"
        name="position-visibility"
        value="anchors-visible" />
    </div>
    <div>
      <label for="radio-no-overflow">no-overflow</label>
      <input
        type="radio"
        id="radio-no-overflow"
        name="position-visibility"
        value="no-overflow" />
    </div>
  </fieldset>
</form>
```

Le HTML inclut également du texte factice pour rendre le contenu plus grand que la fenêtre d'affichage, nécessitant ainsi un défilement. Nous avons également inclus un {{HTMLElement("fieldset")}} avec un groupe de [boutons radio](/fr/docs/Web/HTML/Reference/Elements/input/radio) avec différentes valeurs de `position-visibility`. Le balisage pour ceux-ci n'est pas affiché pour des raisons de concision.

#### CSS

Nous mettons en forme un `<div>` d'ancrage comme un élément d'ancrage et attachons le `<div>` de la boîte d'information à celui-ci. Le CSS pertinent est le suivant&nbsp;:

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.ancre {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

form {
  position: fixed;
  background: white;
  bottom: 2px;
  right: 2px;
}

.boite-information {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.ancre {
  anchor-name: --mon-ancre;
}

.boite-information {
  position-anchor: --mon-ancre;
  position: fixed;
  position-area: top span-all;
  margin-bottom: 5px;
  position-visibility: always;
}
```

#### JavaScript

Nous incluons un gestionnaire d'évènements {{DOMxRef("HTMLElement/change_event", "change")}} sur les boutons radio afin que, lorsqu'une nouvelle valeur est sélectionnée, nous mettions à jour la valeur de la propriété `position-visibility` de la boîte d'information.

```js
const boiteInformation = document.querySelector(".boite-information");
const radios = document.querySelectorAll('[name="position-visibility"]');

for (const radio of radios) {
  radio.addEventListener("change", definirVisibiliteDePosition);
}

function definirVisibiliteDePosition(e) {
  boiteInformation.style.positionVisibility = e.target.value;
}
```

#### Résultat

Sélectionnez différentes valeurs de `position-visibility` puis faites défiler la page vers le haut et vers le bas pour voir leurs effets. Avec `position-visibility: always`, l'élément positionné ne sera pas masqué. Avec `position-visibility: anchors-visible`, l'élément positionné ne sera visible que lorsque l'ancre est partiellement ou entièrement à l'écran. Avec `position-visibility: no-overflow`, l'élément positionné sera masqué dès qu'il commencera à déborder de la fenêtre d'affichage.

{{EmbedLiveSample("Utilisation simple", "100%", 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("anchor-name")}}
- La propriété {{CSSxRef("position-anchor")}}
- La propriété {{CSSxRef("position")}}
- La propriété {{CSSxRef("position-area")}}
- Le module [de positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- Le guide [d'utilisation du positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Le guide [des options de repli et de masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
