---
title: "HTMLFormElement : évènement submit"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
l10n:
  sourceCommit: 2843ea988735ea93940dce9f35a2b2b2f4703f28
---

{{APIRef("HTML DOM")}}

L'évènement **`submit`** de l'interface {{DOMxRef("HTMLFormElement")}} se déclenche lorsqu'un élément HTML {{HTMLElement("form")}} est envoyé.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("submit", (event) => { })

onsubmit = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("SubmitEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("SubmitEvent")}}

## Description

L'évènement `submit` se déclenche sur l'élément `<form>` lui-même, et non sur un éventuel {{HTMLElement("button")}} ou `{{HTMLElement("input/submit", "&lt;input type=\"submit\"&gt;")}}` à l'intérieur de celui-ci. Cependant, le {{DOMxRef("SubmitEvent")}} qui est envoyé pour indiquer que l'action d'envoi du formulaire a été déclenchée inclut une propriété {{DOMxRef("SubmitEvent.submitter", "submitter")}}, qui est le bouton qui a été utilisé pour déclencher la demande d'envoi.

L'évènement `submit` se déclenche lorsque&nbsp;:

- l'utilisateur·ice clique sur un {{Glossary("submit button", "bouton d'envoi")}},
- l'utilisateur·ice appuie sur <kbd>Entrée</kbd> lors de la saisie dans un champ (par exemple, `{{HTMLElement("input/text", "&lt;input type=\"text\"&gt;")}}`) dans un formulaire,
- un script appelle la méthode {{DOMxRef("HTMLFormElement.requestSubmit()", "form.requestSubmit()")}}

En revanche, l'évènement n'est **pas** envoyé au formulaire lorsqu'un script appelle directement la méthode {{DOMxRef("HTMLFormElement.submit()", "form.submit()")}}.

Essayer d'envoyer un formulaire qui ne passe pas la [validation](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation) déclenche un évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}}. Dans ce cas, la validation empêche l'envoi du formulaire, et donc il n'y a pas d'évènement `submit`.

### Envoi implicite

La [spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission) ne définit pas formellement quels gestes de l'utilisateur·ice peuvent déclencher un envoi implicite, car cela dépend des conventions du système d'exploitation et de l'appareil. Par exemple, appuyer sur <kbd>Entrée</kbd> tout en étant sélectionné sur un champ de texte est un geste courant. Cependant, la réaction du navigateur à un tel geste est standardisée&nbsp;:

- Si le formulaire a un bouton d'envoi par défaut non désactivé, le navigateur déclenche un évènement `click` sur ce bouton. Le bouton par défaut est le premier bouton d'envoi dans l'ordre de l'arbre dont le [propriétaire du formulaire](/fr/docs/Web/API/HTMLButtonElement/form) est ce formulaire. Cela déclenche ensuite le processus d'envoi du formulaire (comme si le bouton est pressé par l'utilisateur·ice), sauf si l'évènement est annulé.
- Si le formulaire n'a pas de bouton d'envoi, il est envoyé implicitement uniquement lorsqu'il contient au plus un élément HTML {{HTMLElement("input")}} de type `text`, `search`, `tel`, `url`, `email`, `password`, `date`, `month`, `week`, `time`, `datetime-local` ou `number`. Les éléments HTML {{HTMLElement("textarea")}} et {{HTMLElement("select")}} ne bloquent pas l'envoi implicite.
- Sinon, si le formulaire a un bouton d'envoi par défaut désactivé, ou aucun bouton d'envoi et plus d'un champ de saisie bloquant l'envoi implicite, le geste ne déclenche jamais d'envoi implicite.

## Exemples

Cet exemple utilise {{DOMxRef("EventTarget.addEventListener()")}} pour écouter l'envoi d'un formulaire, enregistre le {{DOMxRef("Event.timeStamp")}} actuel à chaque occurrence, puis empêche l'action par défaut d'envoi du formulaire.

### HTML

```html
<form id="form">
  <label>Champ de test&nbsp;: <input type="text" /></label>
  <br /><br />
  <button type="submit">Envoyer le formulaire</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
const form = document.getElementById("form");
const log = document.getElementById("log");

function logSubmit(event) {
  log.textContent = `Formulaire envoyé ! Horodatage : ${event.timeStamp}`;
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
