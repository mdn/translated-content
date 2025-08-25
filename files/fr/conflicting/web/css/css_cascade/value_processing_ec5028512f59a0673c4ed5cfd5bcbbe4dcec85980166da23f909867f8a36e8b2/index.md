---
title: Valeur utilisée
slug: conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2
original_slug: Web/CSS/used_value
---

{{cssref}}

La **valeur utilisée** de n'importe quelle propriété CSS est la valeur finale d'une propriété après que tous les calculs aient été réalisés.

Une fois qu'un agent utilisateur a terminé les calculs, chaque propriété CSS possède une valeur utilisée. Les valeurs utilisées des dimensions (par exemple `width`, `height`) sont exprimées en pixels et les propriétés raccourcies (comme `background`) sont cohérentes avec leurs propriétés composantes (par exemple `background-color`), `display` est cohérente avec `position` et `float`.

Les valeurs utilisées pour certaines propriétés peuvent être retrouvées en appelant la méthode JavaScript [`window.getComputedStyle()`](/fr/docs/Web/API/Window/getComputedStyle).

## Détails

Quatre étapes permettent de déterminer la valeur finale de n'importe quelle propriété CSS.

1. Tout d'abord, la [valeur spécifiée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa) est le résultat de la cascade (on choisit la règle la plus spécifique qui change la propriété), de l'[héritage](/fr/docs/Web/CSS/CSS_cascade/Inheritance) (on utilise la valeur calculée d'un parent si la propriété peut être héritée) ou alors c'est la valeur par défaut est utilisée.
2. Ensuite, la [valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing) est déterminée selon la spécification (par exemple, un `span` avec `position: absolute` aura `display` qui passera à `block` pour la valeur calculée).
3. Ensuite, la mise en page est calculée (les dimensions qui ont pour valeur `auto` ou des pourcentages relatifs à des parents sont remplacées par des valeurs en pixels), et le résultat est la **valeur utilisée**.
4. Enfin, la valeur est transformée selon les limites de l'environnement actuel, le résultat est [la valeur réelle](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing). La valeur finalement utilisée est la valeur réelle, éventuellement approximée en fonction des contraintes de l'agent utilisateur. Ces valeurs sont calculées de manière interne ; un script peut seulement lire les valeurs utilisées finales grâce à [`window.getComputedStyle`](/fr/docs/Web/API/Window/getComputedStyle) (bien que cette méthode peut renvoyer la valeur calculée selon la propriété, la valeur renvoyée par cette méthode est généralement appelée [valeur résolue](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4)).

## Différence avec les valeurs calculées

CSS 2.0 définissait la [valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing) comme la dernière étape du calcul de la valeur. CSS 2.1 a introduit une définition distincte de la valeur utilisée afin qu'un élément puisse hériter d'une largeur ou d'une hauteur d'un parent de manière explicite si la valeur calculée du parent est un pourcentage. Pour les propriétés CSS qui ne dépendent pas de la mise en page (comme `display`, `font-size` ou `line-height`), les valeurs calculées et les valeurs utilisées sont identiques. Voici les propriétés qui dépendent de la mise en page et dont les valeurs calculées sont différentes des valeurs utilisées (extrait de _[CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q36)_) :

- `background-position`
- `bottom`, `left`, `right`, `top`
- `height`, `width`
- `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
- `min-height`, `min-width`
- `padding-bottom`, `padding-left`, `padding-right`, `padding-top`
- `text-indent`

## Exemples

Cet exemple illustre et calcule les largeurs _utilisées_ pour les trois éléments.

### CSS

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Permet de mieux voir les résultats */
div {
  border: 1px solid red;
  padding: 8px;
}
```

### HTML

```html
<div id="no-width">
  <p>Pas de largeur explicite.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Largeur explicite : 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Largeur explicite: héritée avec <code>inherit</code>.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

### JavaScript

```js
function updateUsedWidth(id) {
  var div = document.querySelector(`#${id}`);
  var par = div.querySelector(".show-used-width");
  var wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

### Résultat

{{EmbedLiveSample('Exemples', '80%', '372px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La référence CSS](/fr/docs/Web/CSS/Reference)
- [La notion de valeur initiale](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_f91302baa0061849ce1a7eea54ba57f650b9256fcf644b7a35a0645d353b08fc)
- [La notion de valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing)
- [La notion de valeur définie](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa)
- [La notion de valeur résolue](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4)
- [La notion de valeur réelle](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
- [`window.getComputedStyle()`](/fr/docs/Web/API/Window/getComputedStyle)
