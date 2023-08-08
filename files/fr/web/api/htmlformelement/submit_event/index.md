---
title: submit
slug: Web/API/HTMLFormElement/submit_event
---

L'événement `submit` est émis lorsqu'un formulaire est soumis au serveur.

Notez que l'événement `submit` se déclenche **uniquement** sur [l'élement form](/fr-FR/docs/Web/HTML/Element/form), et pas sur les éléments [button](/fr-FR/docs/Web/HTML/Element/button) ou [input submit](/fr/docs/Web/HTML/Element/Input/submit). (Les formulaires sont soumis, pas les boutons.)

## Informations générales

- Spécification
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#form-submission-algorithm)
- Interface
  - : {{domxref("Event")}}
- Bouillonne
  - : Oui (bien que spécifié comme un événement simple qui ne bouillonne pas)
- Annulable
  - : Oui
- Cible
  - : Élément
- Action par défaut
  - : Variable (envoie le contenu du formulaire au serveur)

## Propriétés

| Propriété                       | Type                       | Description                                                        |
| ------------------------------- | -------------------------- | ------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | La cible de l'évènement (la cible la plus haute dans l'arbre DOM). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Le type de l'évènement.                                            |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Si l'évènement bouillonne normalement ou non.                      |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Si l'évènement est annulable ou non.                               |
