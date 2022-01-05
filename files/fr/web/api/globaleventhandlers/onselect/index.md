---
title: GlobalEventHandlers.onselect
slug: Web/API/GlobalEventHandlers/onselect
translation_of: Web/API/GlobalEventHandlers/onselect
---
{{ ApiRef("HTML DOM") }}

La propriété **`onselect`** du mixin {{domxref("GlobalEventHandlers")}} est un {{event("Event_handlers", "event handler")}} qui traite les événements [`select`](/fr-FR/docs/Web/API/Element/select_event).

L'événement `select` n'est déclenché qu'après que du texte à l'intérieur d'un `{{HtmlElement('input/text', '&lt;input type="text"&gt;')}}` ou d'un {{HtmlElement("textarea")}} a été sélectionné.

## Syntaxe

    target.onselect = functionRef;

### Valeur

`réfFonction` est un nom de fonction ou une [expression retournant une fonction](/fr-FR/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet {{domxref("UIEvent")}} comme unique argument.

## Exemples

Cet exemple enregistre le texte que vous sélectionnez à l'intérieur d'un élément {{HtmlElement("textarea")}}.

### HTML

```html
<textarea>Essayez de sélectionner du texte dans cet élément.</textarea>
<p id="log"></p>
```

### JavaScript

```js
function enregistrerSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `Vous avez sélectionné : ${selection}`;
}

const textarea = document.querySelector('textarea');
textarea.onselect = enregistrerSelection;
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécification

| Spécification                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onselect','onselect')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.GlobalEventHandlers.onselect")}}

## Voir aussi

- L'événement [`select`](/fr-FR/docs/Web/API/Element/select_event)
