---
title: "HTMLButtonElement : méthode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLButtonElement/reportValidity
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("HTML DOM")}}

La méthode **`reportValidity()`** de l'interface {{DOMxRef("HTMLButtonElement")}} effectue les mêmes étapes de vérification de validité que la méthode {{DOMxRef("HTMLButtonElement.checkValidity", "checkValidity()")}}. De plus, si l'événement {{DOMxRef("HTMLInputElement.invalid_event", "invalid")}} n'est pas annulé, le navigateur affiche le problème à l'utilisateur·ice.

## Syntaxe

```js-nolint
reportValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne `true` si la valeur de l'élément ne présente aucun problème de validité&nbsp;; sinon, retourne `false`.

## Exemples

Cet exemple montre comment un bouton peut être rendu invalide.

### HTML

On crée un formulaire qui ne contient que quelques boutons&nbsp;:

```html
<form action="#" id="form" method="post">
  <p>
    <input type="submit" value="Envoyer" />
    <button id="example" type="submit" value="fixed">CE BOUTON</button>
  </p>
  <p>
    <button type="button" id="report">reportValidity()</button>
  </p>
</form>

<p id="log"></p>
```

### CSS

On ajoute un peu de CSS, y compris les styles `:valid` et `:invalid` pour notre bouton&nbsp;:

```css
input[type="submit"],
button {
  background-color: #3333aa;
  border: none;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: white;
}
button:invalid {
  background-color: #aa3333;
}
button:valid {
  background-color: #33aa33;
}
```

### JavaScript

On inclut une fonction pour basculer la valeur, le contenu et le message de validation du bouton d'exemple&nbsp;:

```js
const reportButton = document.querySelector("#report");
const exampleButton = document.querySelector("#example");
const output = document.querySelector("#log");

reportButton.addEventListener("click", () => {
  const reportVal = exampleButton.reportValidity();
  output.innerHTML = `reportValidity a retourné : ${reportVal} <br/> erreur personnalisée : ${exampleButton.validationMessage}`;
});

exampleButton.addEventListener("invalid", () => {
  console.log("Événement 'invalid' déclenché sur exampleButton");
});

exampleButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (exampleButton.value === "error") {
    breakOrFixButton("fixed");
  } else {
    breakOrFixButton("error");
  }
  output.innerHTML = `message de validation : ${exampleButton.validationMessage} <br/> erreur personnalisée : ${exampleButton.validationMessage}`;
});

function breakOrFixButton() {
  const state = toggleButton();
  if (state === "error") {
    exampleButton.setCustomValidity(
      "Ceci est un message d'erreur personnalisé",
    );
  } else {
    exampleButton.setCustomValidity("");
  }
}

function toggleButton() {
  if (exampleButton.value === "error") {
    exampleButton.value = "fixed";
    exampleButton.innerHTML = "Aucune erreur";
  } else {
    exampleButton.value = "error";
    exampleButton.innerHTML = "Erreur personnalisée";
  }
  return exampleButton.value;
}
```

### Résultat

{{EmbedLiveSample("Exemple", "100%", 220)}}

Le bouton est valide par défaut. Activez «&nbsp;CE BOUTON&nbsp;» pour changer la valeur, le contenu et ajouter un message d'erreur personnalisé. L'activation du bouton «&nbsp;reportValidity()&nbsp;» vérifie la validité du bouton, affiche le message d'erreur personnalisé à l'utilisateur·ice et déclenche un événement `invalid` si le bouton ne passe pas la validation de contrainte à cause du message.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLButtonElement.checkValidity()")}}
- L'élément HTML{{HTMLElement("button")}}
- L'élément HTML{{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
