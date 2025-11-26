---
title: <calc-keyword>
slug: Web/CSS/Reference/Values/calc-keyword
original_slug: Web/CSS/calc-keyword
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<calc-keyword>`** représente des constantes bien définies comme `e` et `pi`. Plutôt que d'obliger les auteur·ice·s à saisir manuellement plusieurs chiffres de ces constantes mathématiques ou à les calculer, certaines d'entre elles sont directement fournies par CSS pour plus de commodité.

## Syntaxe

Le type `<calc-keyword>` définit des constantes numériques qui peuvent être utilisées dans les [fonctions mathématiques CSS](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_mathématiques).

### Valeurs

- `e`
  - : La base du logarithme népérien, environ égale à `2.7182818284590452354`.

- `pi`
  - : Le rapport de la circonférence d'un cercle à son diamètre, environ égal à `3.1415926535897932`.

- `infinity` & `-infinity`
  - : Une valeur infinie, utilisée pour indiquer la plus grande ou la plus petite valeur possible.

- `NaN`
  - : Une valeur représentant «&nbsp;<i lang="en">Not a Number</i>&nbsp;» (n'est pas un nombre) avec la casse canonique.

### Notes

La sérialisation des arguments à l'intérieur de {{CSSxRef("calc", "calc()")}} suit la norme IEEE-754 pour les calculs en virgule flottante, ce qui implique quelques cas particuliers à connaître concernant les constantes comme `infinity` et `NaN`&nbsp;:

- Une division par zéro renverra `infinity` positif ou négatif selon le signe du numérateur.
- Ajouter, soustraire ou multiplier `infinity` à n'importe quelle valeur renverra `infinity`, sauf si cela produit `NaN` (voir ci-dessous).
- Toute opération comportant au moins un argument `NaN` renverra `NaN`.
  Cela signifie que `0 / 0`, `infinity / infinity`, `0 * infinity`, `infinity + (-infinity)` et `infinity - infinity` renverront toutes `NaN`.

- Les zéros positifs et négatifs sont des valeurs possibles (`0⁺` et `0⁻`).
  Cela a les effets suivants&nbsp;:
  - Une multiplication ou division produisant zéro avec exactement un argument négatif (`-5 * 0` ou `1 / (-infinity)`) ou un résultat négatif issu d'autres fonctions mathématiques renverra `0⁻`.
  - `0⁻ + 0⁻` ou `0⁻ - 0` renverra `0⁻`.
    Toutes les autres additions ou soustractions produisant un zéro renverront `0⁺`.
  - Multiplier ou diviser `0⁻` par un nombre positif (y compris `0⁺`) renverra un résultat négatif (soit `0⁻`, soit `-infinity`), tandis que multiplier ou diviser `0⁻` par un nombre négatif renverra un résultat positif.

Des exemples illustrant l'application de ces règles sont présentés dans la section [Infini, NaN et division par zéro](#infini_nan_et_division_par_zéro).

> [!NOTE]
> Il est rare d'avoir besoin d'utiliser `infinity` comme argument dans `calc()`, mais cela peut servir à éviter des «&nbsp;valeurs magiques&nbsp;» codées en dur ou à garantir qu'une certaine valeur soit toujours supérieure à une autre.
> Cela peut être utile si vous souhaitez indiquer qu'une propriété possède «&nbsp;la plus grande valeur possible&nbsp;» pour ce type de donnée.

### Syntaxe formelle

{{CSSSyntax}}

## Description

Les constantes mathématiques ne peuvent être utilisées que dans les [fonctions mathématiques CSS](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_mathématiques) pour les calculs. Ces constantes ne sont pas des mots-clés CSS&nbsp;; si elles sont utilisées en dehors d'un calcul, elles sont traitées comme n'importe quel autre mot-clé.
Par exemple&nbsp;:

- `animation-name: pi;` fait référence à une animation nommée «&nbsp;pi&nbsp;», et non à la constante numérique `pi`.
- `line-height: e;` est invalide, mais `line-height: calc(e);` est valide.
- `rotate(1rad * pi);` ne fonctionnera pas car {{CSSxRef("transform-function/rotate", "rotate()")}} n'est pas une fonction mathématique. Utilisez `rotate(calc(1rad * pi));`

Dans les fonctions mathématiques, les valeurs `<calc-keyword>` sont évaluées comme des valeurs {{CSSxRef("number")}}, donc `e` et `pi` agissent comme des constantes numériques.

`infinity` et `NaN` sont légèrement différentes&nbsp;: ce sont des constantes numériques dégénérées.
Bien qu'elles ne soient pas techniquement des nombres, elles se comportent comme des valeurs {{CSSxRef("number")}}. Par exemple, pour obtenir une {{CSSxRef("length")}} infinie, il faut utiliser une expression comme `calc(infinity * 1px)`.

Les valeurs `infinity` et `NaN` sont principalement incluses pour simplifier et clarifier la sérialisation, mais elles peuvent aussi servir à indiquer une «&nbsp;valeur maximale&nbsp;», puisqu'une valeur infinie est limitée à l'intervalle autorisé.
C'est rarement pertinent, mais utiliser `infinity` est bien plus simple que de placer un nombre énorme dans une feuille de style ou de coder en dur des valeurs magiques.

Toutes les constantes sont insensibles à la casse, sauf `NaN`, ce qui rend `calc(Pi)`, `calc(E)` et `calc(InFiNiTy)` valides&nbsp;:

```plain example-good
e
-e
E
pi
-pi
Pi
infinity
-infinity
InFiNiTy
NaN
```

Ces valeurs sont toutes invalides&nbsp;:

```plain example-bad
nan
Nan
NAN
```

## Exemples

### Utiliser e et pi dans `calc()`

L'exemple suivant montre comment utiliser `e` dans `calc()` pour faire tourner un élément avec un angle qui augmente exponentiellement.
La seconde boîte montre comment utiliser `pi` dans une fonction [`sin()`](/fr/docs/Web/CSS/sin).

```css hidden
#wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 200px;
}
.container > div {
  width: 100px;
  height: 100px;
  margin: 10px;
}

span {
  font-family: monospace;
  font-size: 0.8em;
}

#e {
  background-color: blue;
}

#pi {
  background-color: blue;
}
```

```html
<div id="wrapper">
  <div class="container">
    <div id="e"></div>
    <input type="range" min="0" max="7" step="0.01" value="0" id="e-slider" />
    <label for="e-slider">e:</label>
    <span id="e-value"></span>
  </div>
  <div class="container">
    <div id="pi"></div>
    <input type="range" min="0" max="1" step="0.01" value="0" id="pi-slider" />
    <label for="pi-slider">pi:</label>
    <span id="pi-value"></span>
  </div>
</div>
```

```js
// sliders
const eInput = document.querySelector("#e-slider");
const piInput = document.querySelector("#pi-slider");
// spans for displaying values
const eValue = document.querySelector("#e-value");
const piValue = document.querySelector("#pi-value");

eInput.addEventListener("input", function () {
  e.style.transform = `rotate(calc(1deg * pow(${this.value}, e)))`;
  eValue.textContent = e.style.transform;
});

piInput.addEventListener("input", function () {
  pi.style.rotate = `calc(sin(${this.value} * pi) * 100deg)`;
  piValue.textContent = pi.style.rotate;
});
```

{{EmbedLiveSample('utiliser_e_et_pi_dans_calc', 'auto', '200')}}

### Infini, NaN et division par zéro

L'exemple suivant montre la valeur calculée de la propriété `width` lors d'une division par zéro, puis la façon dont la sérialisation apparaît avec différentes constantes `calc()` dans la console&nbsp;:

```html
<div></div>
```

```css
div {
  height: 50px;
  background-color: red;
  width: calc(1px / 0);
}
```

```js
const div = document.querySelector("div");
console.log(div.offsetWidth); // 17895698 (infinity limité à la plus grande valeur possible pour width)

function logSerializedWidth(value) {
  div.style.width = value;
  console.log(div.style.width);
}

logSerializedWidth("calc(1px / 0)"); // calc(infinity * 1px)
logSerializedWidth("calc(1px / -0)"); // calc(-infinity * 1px)

logSerializedWidth("calc(1px * -infinity * -infinity)"); // calc(infinity * 1px)
logSerializedWidth("calc(1px * -infinity * infinity)"); // calc(-infinity * 1px)

logSerializedWidth("calc(1px * (NaN + 1))"); // calc(NaN * 1px)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;calc-sum&gt;")}}
- Le type de donnée {{CSSxRef("&lt;calc-product&gt;")}}
- Le type de donnée {{CSSxRef("&lt;calc-value&gt;")}}
