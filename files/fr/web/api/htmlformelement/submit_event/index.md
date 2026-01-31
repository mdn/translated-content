---
title: "HTMLFormElement : évènement submit"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("HTML DOM")}}

L'évènement **`submit`** de l'interface {{DOMxRef("HTMLFormElement")}} se déclenche lorsqu'un élément HTML {{HTMLElement("form")}} est soumis.

Notez que l'évènement `submit` se déclenche sur l'élément `<form>` lui‑même, et non sur un {{HTMLElement("button")}} ni sur un `{{HTMLElement('input/submit', '&lt;input type="submit"&gt;')}}` qu'il contient. Toutefois, le {{DOMxRef("SubmitEvent")}} envoyé pour indiquer que l'action de soumission a été déclenchée comprend une propriété {{DOMxRef("SubmitEvent.submitter", "submitter")}}, qui est le bouton invoqué pour déclencher la requête de soumission.

L'évènement `submit` se déclenche lorsque&nbsp;:

- l'utilisateur·ice clique sur un {{Glossary("submit button", "bouton de soumission")}},
- l'utilisateur·ice appuie sur <kbd>Entrée</kbd> lors de la saisie dans un champ (par exemple, {{HTMLElement('input/text', '&lt;input type="text"&gt;')}}) dans un formulaire,
- un script appelle la méthode {{DOMxRef("HTMLFormElement.requestSubmit()", "form.requestSubmit()")}}

En revanche, l'évènement n'est **pas** envoyé au formulaire lorsqu'un script appelle directement la méthode {{DOMxRef("HTMLFormElement.submit()", "form.submit()")}}.

> [!NOTE]
> Tenter de soumettre un formulaire qui ne passe pas la [validation](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation) déclenche un évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}}. Dans ce cas, la validation empêche la soumission du formulaire, et il n'y a donc pas d'évènement `submit`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("submit", (event) => { })

onsubmit = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("SubmitEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("SubmitEvent")}}

## Propriétés de l'évènement

_En plus des propriétés listées ci‑dessous, cette interface hérite des propriétés de son interface parente, {{DOMxRef("Event")}}._

- {{DOMxRef("SubmitEvent.submitter", "submitter")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLElement")}} qui identifie le bouton ou l'autre élément utilisé pour déclencher la soumission du formulaire.

## Exemples

Cet exemple utilise {{DOMxRef("EventTarget.addEventListener()")}} pour écouter la soumission d'un formulaire, enregistre le {{DOMxRef("Event.timeStamp")}} actuel à chaque occurrence, puis empêche l'action par défaut de soumission du formulaire.

### HTML

```html
<form id="form">
  <label>Champ de test&nbsp;: <input type="text" /></label>
  <br /><br />
  <button type="submit">Soumettre le formulaire</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
const form = document.getElementById("form");
const log = document.getElementById("log");

function logSubmit(event) {
  log.textContent = `Formulaire soumis ! Horodatage : ${event.timeStamp}`;
  event.preventDefault();
}

form.addEventListener("submit", logSubmit);
```

### Résultat

{{EmbedLiveSample("Examples", "", "", "", "", "", "", "allow-forms")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("form")}}
- Évènement lié&nbsp;: {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}}
