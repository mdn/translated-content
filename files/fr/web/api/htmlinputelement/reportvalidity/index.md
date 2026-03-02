---
title: "HTMLInputElement : méthode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("HTML DOM")}}

La méthode **`reportValidity()`** de l'interface {{DOMxRef("HTMLInputElement")}} effectue les mêmes vérifications de validité que la méthode {{DOMxRef("HTMLInputElement.checkValidity", "checkValidity()")}}. De plus, si l'évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} n'est pas annulé, le navigateur affiche le problème à l'utilisateur·rice.

## Syntaxe

```js-nolint
reportValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne `true` si la valeur de l'élément n'a pas de problèmes de validité&nbsp;; sinon retourne `false`.

## Exemples

### Utilisation simple

#### HTML

Le formulaire suivant contient un champ numérique requis et deux boutons&nbsp;: l'un pour vérifier le formulaire et l'autre pour l'envoyer.

```html
<form action="#" method="post">
  <p>
    <label for="age">Votre âge (21 à 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Envoyer</button>
    <button type="button" id="report">reportValidity()</button>
  </p>
  <p id="log"></p>
</form>
```

#### JavaScript

Lorsque le bouton «&nbsp;reportValidity()&nbsp;» est activé, on utilise la méthode `reportValidity()` pour vérifier si la valeur de l'entrée respecte ses contraintes. On consigne la valeur de retour. Si `false`, on affiche également le message de validation et on capture l'évènement `invalid`.

```js
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  console.log("Évènement invalid déclenché.");
});

reportButton.addEventListener("click", () => {
  const reportVal = ageInput.reportValidity();
  output.innerHTML = `"reportValidity()" a retourné : ${reportVal}`;
  if (!reportVal) {
    output.innerHTML += `<br />Message de validation : "${ageInput.validationMessage}"`;
  }
});
```

#### Résultat

{{EmbedLiveSample("Utilisation simple", "100%", 120)}}

Lorsque `false`, si la valeur est manquante, inférieure à 21, supérieure à 65, ou autrement invalide, un message d'erreur apparaît, un évènement `invalid` est déclenché, et cet évènement est consigné dans la console.

### Message d'erreur personnalisé

Cet exemple montre comment un message d'erreur personnalisé peut provoquer une valeur de retour `false` alors que la valeur serait autrement valide.

#### HTML

On ajoute un bouton «&nbsp;Corriger&nbsp;» au HTML de l'exemple précédent.

```html hidden
<form action="#" method="post">
  <p>
    <label for="age">Votre âge (21 à 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Envoyer</button>
    <button type="button" id="report">reportValidity()</button>
    <button type="button" id="fix">Corriger</button>
  </p>
  <p id="log"></p>
</form>
```

#### JavaScript

On reprend le JavaScript de l'exemple de base ci‑dessus en ajoutant une fonction qui utilise la méthode {{DOMxRef("HTMLInputElement.setCustomValidity()")}} pour fournir des messages d'erreur personnalisés. La fonction `validateAge()` ne met le message d'erreur à la chaîne vide que si l'entrée est valide ET si la variable `enableValidation` vaut `true`, avec `enableValidation` valant `false` tant que le bouton «&nbsp;Corriger&nbsp;» n'a pas été activé.

```js
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");
const fixButton = document.querySelector("#fix");
let enableValidation = false;

fixButton.addEventListener("click", (e) => {
  enableValidation = true;
  fixButton.innerHTML = "Corrigé";
  fixButton.disabled = true;
});

reportButton.addEventListener("click", () => {
  validateAge();
  const reportVal = ageInput.reportValidity();
  output.innerHTML = `"reportValidity()" a retourné : ${reportVal}`;
  if (!reportVal) {
    output.innerHTML += `<br />Message de validation : "${ageInput.validationMessage}"`;
  }
});

function validateAge() {
  const validityState = ageInput.validity;
  if (validityState.valueMissing) {
    ageInput.setCustomValidity("Veuillez indiquer un âge (obligatoire)");
  } else if (validityState.rangeUnderflow) {
    ageInput.setCustomValidity("La valeur est trop faible");
  } else if (validityState.rangeOverflow) {
    ageInput.setCustomValidity("La valeur est trop élevée");
  } else if (enableValidation) {
    // met la chaîne vide si la valeur est valide ET si enableValidation a été activé
    ageInput.setCustomValidity("");
  }
}
```

#### Résultats

{{EmbedLiveSample("Custom error message", "100%", 120)}}

Si vous activez le bouton «&nbsp;reportValidity()&nbsp;» avant d'indiquer un âge, la méthode `reportValidity()` renvoie `false` car la contrainte `required` n'est pas satisfaite. Cette méthode déclenche un évènement `invalid` sur l'élément et signale le problème à l'utilisateur·rice en affichant le message d'erreur personnalisé «&nbsp;Veuillez indiquer un âge (obligatoire)&nbsp;». Tant qu'un message d'erreur personnalisé est défini, l'activation du bouton «&nbsp;reportValidity()&nbsp;» continuera d'afficher une erreur même si vous sélectionnez un âge valide. Pour activer la validation, il faut réinitialiser le message d'erreur à la chaîne vide, ce qui est fait en cliquant sur le bouton «&nbsp;Corriger&nbsp;».

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLInputElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation des données de formulaires côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
