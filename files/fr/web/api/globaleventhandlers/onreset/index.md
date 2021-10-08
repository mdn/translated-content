---
title: GlobalEventHandlers.onreset
slug: Web/API/GlobalEventHandlers/onreset
tags:
  - API
  - DOM
  - Gestionnaires d'évènements
  - Propriété
  - évènements
translation_of: Web/API/GlobalEventHandlers/onreset
---
{{ ApiRef() }}

La propriété **`GlobalEventHandlers.onreset`** contient un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) déclenché quand un évènement {{event("reset")}} est reçu.

## Syntaxe

    window.onreset = funcRef;

### Paramètres

- `funcRef` est une référence à une fonction.

## Exemple

```html
<html>
<script>
function reg() {
  window.captureEvents(Event.RESET);
  window.onreset = hit;
}

function hit() {
 alert('hit');
}
</script>

<body onload="reg();">
 <form>
   <input type="reset" value="reset" />
 </form>
 <div id="d"> </div>
</body>
</html>
```

## Notes

L'évènement `reset` est déclenché quand l'utilisateur clique sur le bouton de réinitialisation dans un formulaire (`<input type="reset"/>`).

## Spécification

| Spécification                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onreset','onreset')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.GlobalEventHandlers.onreset")}}
