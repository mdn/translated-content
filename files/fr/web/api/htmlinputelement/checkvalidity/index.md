---
title: "HTMLInputElement : méthode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`checkValidity()`** de l'interface {{DOMxRef("HTMLInputElement")}} retourne une valeur booléenne indiquant si l'élément respecte les règles de [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) qui lui sont appliquées. Si elle retourne faux, la méthode déclenche également un évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} sur l'élément. Comme `checkValidity()` n'est associé à aucun comportement par défaut du navigateur, annuler cet évènement `invalid` n'a aucun effet.

> [!NOTE]
> Un élément HTML {{HTMLElement("input")}} dont la propriété {{DOMxRef("HTMLInputElement.validationMessage", "validationMessage")}} n'est pas nulle est considéré comme invalide, correspondra à la pseudo-classe CSS {{CSSxRef(":invalid")}} et fera en sorte que `checkValidity()` retourne faux. Utilisez la méthode {{DOMxRef("HTMLInputElement.setCustomValidity()")}} pour définir {{DOMxRef("HTMLInputElement.validationMessage")}} sur la chaîne vide afin de rendre l'état {{DOMxRef("HTMLInputElement.validity", "validity")}} valide.

## Syntaxe

```js
checkValidity();
```

### Paramètres

Aucun.

### Valeur de retour

Retourne `true` si la valeur de l'élément n'a pas de problèmes de validité&nbsp;; sinon retourne `false`.

## Exemples

### HTML

Le formulaire ci‑dessous contient un champ numérique requis et deux boutons&nbsp;: l'un pour vérifier le formulaire et l'autre pour l'envoyer.

```html
<form action="#" method="post">
  <p>
    <label for="age">Votre âge (21 à 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Envoyer</button>
    <button type="button" id="check">checkValidity()</button>
  </p>
  <p id="log"></p>
</form>
```

### JavaScript

```js
const output = document.querySelector("#log");
const checkButton = document.querySelector("#check");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  console.log("Évènement invalid déclenché.");
});

checkButton.addEventListener("click", () => {
  const checkVal = ageInput.checkValidity();
  output.innerHTML = `checkValidity a retourné : ${checkVal}`;
});
```

### Résultats

{{EmbedLiveSample("Examples", "100%", 220)}}

Lorsque `false`, si la valeur est manquante, inférieure à 21, supérieure à 65, ou autrement invalide, l'évènement invalid sera enregistré dans la console. Pour signaler l'erreur à l'utilisateur·rice, utilisez plutôt {{DOMxRef("HTMLInputElement.reportValidity()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLInputElement.reportValidity()")}}
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation des données de formulaires côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
