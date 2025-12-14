---
title: "HTMLInputElement : méthode stepDown()"
short-title: stepDown()
slug: Web/API/HTMLInputElement/stepDown
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

La méthode **`stepDown()`** de l'interface {{DOMxRef("HTMLInputElement")}} décrémente la valeur d'un élément HTML {{HTMLElement("input")}} de type numérique selon la valeur de l'attribut HTML [`step`](/fr/docs/Web/HTML/Reference/Attributes/step) ou jusqu'à `n` multiples de cet attribut lorsque l'on fournit un nombre en paramètre.

Lorsqu'elle est appelée, la méthode décrémente la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de ([`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) \* n), où n vaut 1 par défaut si aucun paramètre n'est fourni, et [`step`](/fr/docs/Web/HTML/Reference/Attributes/step) prend la valeur par défaut pour `step` s'il n'est pas défini.

Cette méthode est applicable à tous les types d'entrée numériques, temporels et de date qui prennent en charge l'attribut d'étape, notamment {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} et {{HTMLElement("input/range", "range")}}.

Étant donné `<input id="myTime" type="time" max="17:00" step="900" value="17:00">`, l'appel `myTime.stepDown(3)` fixera la valeur à 16:15, c'est‑à‑dire en décrémentant de `3 * 900` secondes (45 minutes). Un appel `myTime.stepDown()` sans paramètre aurait donné `16:45`, car `n` vaut `1` par défaut.

```html
<!-- décrémente par intervalles de 900 secondes (15 minutes) -->
<input type="time" max="17:00" step="900" />

<!-- décrémente par intervalles de 7 jours (une semaine) -->
<input type="date" max="2019-12-25" step="7" />

<!-- décrémente par intervalles de 12 mois (un an) -->
<input type="month" max="2019-12" step="12" />
```

Cependant, appeler `stepDown` sur `<input type="time" max="17:00" step="900">` ne placera pas immédiatement la valeur à `17:00`, contrairement à l'appel de `stepUp` sur `<input type="time" min="17:00" step="900">`. Lors du premier appel, la valeur initiale sera réglée à `23:45` même si l'attribut `max` est défini. Le deuxième appel fixera la valeur à `17:00`. Le troisième appel la fixera à `16:45`.

```js
let input1 = document.createElement("input");
input1.setAttribute("type", "time");
input1.setAttribute("min", "17:00");
input1.setAttribute("step", 900);
console.log(input1.value); // ""
input1.stepUp();
console.log(input1.value); // "17:00"
// Cependant
let input2 = document.createElement("input");
input2.setAttribute("type", "time");
input2.setAttribute("max", "17:00");
input2.setAttribute("step", 900);
console.log(input2.value); // ""
input2.stepDown();
console.log(input2.value); // "23:45"
input2.stepDown();
console.log(input2.value); // "17:00"
input2.stepDown();
console.log(input2.value); // "16:45"
```

Lorsqu'elle est invoquée, la méthode modifie la valeur du contrôle de formulaire en fonction de la valeur fournie par l'attribut `step`, multipliée par le paramètre, en respectant les contraintes définies sur le contrôle. La valeur par défaut du paramètre, si elle n'est pas fournie, est de 1. La méthode n'autorise pas la valeur à descendre en dessous de la valeur définie par [`min`](/fr/docs/Web/HTML/Reference/Attributes/min) et respecte les contraintes de l'attribut [`step`](/fr/docs/Web/HTML/Reference/Attributes/step). Une valeur négative pour `n` incrémentera la valeur, mais ne la fera pas dépasser la valeur [`max`](/fr/docs/Web/HTML/Reference/Attributes/max).

If the value before invoking the `stepDown()` method is invalid, for example, if it doesn't match the constraints set by the `step` attribute, invoking the `stepDown()` method will return a value that does match the form controls constraints.

Si le contrôle de formulaire n'est ni temporel, ni de date, ni numérique (et ne prend donc pas en charge l'attribut `step`), ou si la valeur de `step` est `any`, une exception `InvalidStateError` est levée.

## Syntaxe

```js-nolint
stepDown()
stepDown(stepDecrement)
```

### Paramètres

- `stepDecrement` {{Optional_Inline}}
  - : Une valeur numérique. Si aucun paramètre n'est passé, `stepDecrement` vaut 1 par défaut.

  Si la valeur est un nombre à virgule, elle sera traitée comme si [`Math.floor(stepDecrement)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) avait été passée. Si la valeur est négative, la valeur sera incrémentée au lieu d'être décrémentée.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - si la méthode n'est pas applicable pour la valeur courante de l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type),
    - si l'élément n'a pas d'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step),
    - si la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) ne peut pas être convertie en nombre,
    - si la valeur résultante est supérieure à [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) ou inférieure à [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min).

## Exemples

Cliquez sur le bouton de cet exemple pour décrémenter un contrôle de type {{HTMLElement("input/number", "number")}}&nbsp;:

### HTML

```html
<p>
  <label for="theNumber">
    Indiquez un nombre entre 0 et 400, divisible par 5&nbsp;:
  </label>
  <input type="number" step="5" id="theNumber" min="0" max="400" />
</p>
<p>
  <label for="decrementButton">
    Indiquez de combien de pas décrémenter ou laissez vide&nbsp;:
  </label>
  <input type="number" step="1" id="decrementInput" min="-2" max="15" />
</p>
<input type="button" value="Décrémenter" id="theButton" />
```

### JavaScript

```js
/* fait appeler la fonction par le bouton */
let button = document.getElementById("theButton");
button.addEventListener("click", () => {
  stepOnDown();
});

function stepOnDown() {
  let input = document.getElementById("theNumber");
  let val = document.getElementById("decrementInput").value;

  if (val) {
    // décrémente avec un paramètre
    input.stepDown(val);
  } else {
    // ou sans paramètre. Essayez avec 0, 5, -2, etc.
    input.stepDown();
  }
}
```

### CSS

```css
input:invalid {
  border: red solid 3px;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

Notez que si vous ne passez pas de paramètre à la méthode `stepDown()`, elle prend `1` par défaut. Toute autre valeur multiplie la valeur de l'attribut `step`. Par exemple, si `step` vaut `5` et que vous passez `4`, l'appel `stepDown(4)` décrémentera la valeur de `4 * 5`, soit `20`. Si le paramètre vaut `0`, la valeur ne sera pas modifiée. La méthode `stepDown()` n'autorise pas la sortie de plage : elle s'arrêtera, par exemple, lorsque la valeur atteindra `0`, et arrondira les nombres à virgule fournis en paramètre.

Essayez de mettre le champ de décrément à `1.2`. Que se passe‑t‑il lors de l'appel de la méthode&nbsp;?

Essayez de définir la valeur sur `44`, qui n'est pas valide. Que se passe‑t‑il lors de l'appel de la méthode&nbsp;?

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("input")}}
- {{DOMxRef("HTMLInputElement")}}
- {{DOMxRef("HTMLInputElement.stepUp", "HTMLInputElement.stepUp()")}}
- [`step`](/fr/docs/Web/HTML/Reference/Attributes/step),
  [`min`](/fr/docs/Web/HTML/Reference/Attributes/min) et
  [`max`](/fr/docs/Web/HTML/Reference/Attributes/max) attributes
