---
title: "HTMLInputElement : évènement invalid"
short-title: invalid
slug: Web/API/HTMLInputElement/invalid_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'évènement **`invalid`** de l'interface {{DOMxRef("HTMLInputElement")}} est déclenché lorsqu'un élément soumis est contrôlé pour sa validité et ne respecte pas ses contraintes.

Cet évènement est utile pour afficher un récapitulatif des problèmes d'un formulaire lors de son envoi. Lors de l'envoi d'un formulaire, des évènements `invalid` sont déclenchés pour chaque contrôle du formulaire qui est invalide. La validité des éléments soumis est vérifiée avant l'envoi de leur formulaire parent {{HTMLElement("form")}}, ou après l'appel de la méthode [`checkValidity()`](/fr/docs/Web/API/HTMLInputElement/checkValidity) de l'élément ou de son formulaire parent.

Cette vérification n'est pas effectuée lors de l'évènement {{DOMxRef("Element/blur_event", "blur")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou affectez un gestionnaire d'évènements à la propriété correspondante.

```js-nolint
addEventListener("invalid", (event) => { })

oninvalid = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Si un formulaire est soumis avec une valeur invalide, les éléments soumis sont vérifiés et, si une erreur est détectée, l'évènement `invalid` est déclenché sur l'élément invalide. Dans cet exemple, lorsqu'un évènement `invalid` est déclenché à cause d'une valeur invalide dans le champ `input`, la valeur invalide est ajoutée au journal.

### HTML

```html
<form action="#">
  <div>
    <label>
      Saisissez un entier entre 1 et 10&nbsp;:
      <input type="number" min="1" max="10" required />
    </label>
  </div>
  <div><input type="submit" value="Envoyer" /></div>
</form>
<hr />
Valeurs invalides&nbsp;:
<ul id="log"></ul>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("invalid", (e) => {
  log.appendChild(document.createElement("li")).textContent = JSON.stringify(
    e.target.value,
  );
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("form")}}
- L'évènement lié&nbsp;: {{DOMxRef("HTMLFormElement/submit_event", "submit")}}
- La pseudo‑classe CSS {{CSSxRef(":invalid")}}
