---
title: "HTMLInputElement : méthode stepUp()"
short-title: stepUp()
slug: Web/API/HTMLInputElement/stepUp
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`stepUp()`** de l'interface {{DOMxRef("HTMLInputElement")}} incrémente la valeur d'un élément HTML {{HTMLElement("input")}} de type numérique selon la valeur de l'attribut HTML [`step`](/fr/docs/Web/HTML/Reference/Attributes/step) ou selon la valeur par défaut de `step` si l'attribut n'est pas défini.

Lorsqu'elle est invoquée, la méthode augmente la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de ([`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) \* n), où `n` vaut `1` par défaut si aucun paramètre n'est fourni.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Type d'entrée</th>
      <th>Valeur d'étape par défaut</th>
      <th>Exemple de déclaration d'étape</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>1</code> (jour)</td>
      <td>
        Incréments de 7 jours (une semaine)&nbsp;:<br />
        <code>&lt;input type="date" min="2019-12-25" step="7"&gt;</code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>1</code> (mois)</td>
      <td>
        Incréments de 12 mois (un an)&nbsp;:<br />
        <code>&lt;input type="month" min="2019-12" step="12"&gt;</code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>1</code> (semaine)</td>
      <td>
        Incréments de deux semaines&nbsp;:<br />
        <code>&lt;input type="week" min="2019-W23" step="2"&gt;</code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>60</code> (secondes)</td>
      <td>
        Incréments de 900 secondes (15 minutes)&nbsp;:<br />
        <code>&lt;input type="time" min="09:00" step="900"&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>1</code> (jour)</td>
      <td>
        Incréments pour le même jour de la semaine&nbsp;:<br />
        <code>&lt;input type="datetime-local" min="2019-12-25T19:30" step="7"&gt;</code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><code>1</code></td>
      <td>
        Incréments de 0.1&nbsp;:<br />
        <code>&lt;input type="number" min="0" step="0.1" max="10"&gt;</code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><code>1</code></td>
      <td>
        Incréments de 2&nbsp;:<br />
        <code>&lt;input type="range" min="0" step="2" max="10"&gt;</code>
      </td>
    </tr>
  </thead>
</table>

Lorsqu'elle est invoquée, la méthode modifie la valeur du contrôle de formulaire en fonction de la valeur fournie par l'attribut `step`, multipliée par le paramètre, dans les contraintes définies sur le contrôle. La valeur par défaut du paramètre, si aucun n'est fourni, est `1`. La méthode n'autorise pas la valeur à dépasser la valeur définie par [`max`](/fr/docs/Web/HTML/Reference/Attributes/max) et respecte les contraintes imposées par l'attribut [`step`](/fr/docs/Web/HTML/Reference/Attributes/step).

Si la valeur avant l'appel à `stepUp()` est invalide — par exemple si elle ne respecte pas les contraintes imposées par l'attribut `step` — l'appel à `stepUp()` produira une valeur conforme aux contraintes du contrôle.

Si le contrôle de formulaire n'est ni temporel, ni de date, ni numérique (et ne prend donc pas en charge l'attribut `step`), ou si la valeur de l'étape vaut `any`, une exception `InvalidStateError` est levée.

## Syntaxe

```js-nolint
stepUp()
stepUp(stepIncrement)
```

### Paramètres

- `stepIncrement` {{Optional_Inline}}
  - : Une valeur numérique. Si aucun paramètre n'est passé, `stepIncrement` vaut `1` par défaut.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cliquez sur le bouton de cet exemple pour incrémenter un contrôle de type {{HTMLElement("input/number", "number")}}&nbsp;:

### HTML

```html
<p>
  <label for="theNumber">
    Indiquez un nombre entre 0 et 400 divisible par 5&nbsp;:
  </label>
  <input type="number" step="5" id="theNumber" min="0" max="400" />
</p>
<p>
  <label> Indiquez de combien de pas incrémenter ou laissez vide&nbsp;: </label>
  <input type="number" step="1" id="incrementInput" min="0" max="25" />
</p>
<input type="button" value="Incrémenter" id="theButton" />
```

### JavaScript

```js
/* fait appeler la fonction par le bouton */
const button = document.getElementById("theButton");
button.addEventListener("click", () => {
  stepOnUp();
});

function stepOnUp() {
  let input = document.getElementById("theNumber");
  let val = document.getElementById("incrementInput").value;

  if (val) {
    /* incrémente avec un paramètre */
    input.stepUp(val);
  } else {
    /* ou sans paramètre. Essayez avec 0 */
    input.stepUp();
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

Notez que si vous ne passez pas de paramètre à la méthode `stepUp`, la valeur par défaut est `1`. Toute autre valeur est un multiplicateur de la valeur de l'attribut `step`, qui dans ce cas est `5`. Si vous passez `4` comme `stepIncrement`, l'entrée sera `stepUp` de `4 * 5`, ou `20`. Si le paramètre est `0`, le nombre ne sera pas incrémenté. Le stepUp ne permettra pas à l'entrée de sortir de la plage, dans ce cas il s'arrêtera quand il atteindra `400`, et arrondira à la baisse tous les nombres flottants qui sont passés en tant que paramètre.

Essayez de régler l'incrément d'entrée sur `1.2`. Que se passe-t-il lorsque vous invoquez la méthode&nbsp;?

Essayez de fixer la valeur à `4`, qui n'est pas valide. Que se passe-t-il lorsque vous invoquez la méthode&nbsp;?

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- L'interface {{DOMxRef("HTMLInputElement")}}
- La méthode {{DOMxRef("HTMLInputElement.stepDown()")}}
- Les attributs HTML [`step`](/fr/docs/Web/HTML/Reference/Attributes/step),
  [`min`](/fr/docs/Web/HTML/Reference/Attributes/min) et
  [`max`](/fr/docs/Web/HTML/Reference/Attributes/max)
