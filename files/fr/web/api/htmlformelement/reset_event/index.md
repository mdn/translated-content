---
title: GlobalEventHandlers.onreset
slug: Web/API/HTMLFormElement/reset_event
tags:
  - API
  - DOM
  - Gestionnaires d'évènements
  - Propriété
  - évènements
translation_of: Web/API/GlobalEventHandlers/onreset
original_slug: Web/API/GlobalEventHandlers/onreset
---

{{ ApiRef() }}

La propriété **`GlobalEventHandlers.onreset`** contient Un gestionnaire d'évènement déclenché quand un évènement {{event("reset")}} est reçu.

## Syntaxe

```js
window.onreset = funcRef;
```

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
 <div id="d"> </div>
</body>
</html>
```

## Notes

L'évènement `reset` est déclenché quand l'utilisateur clique sur le bouton de réinitialisation dans un formulaire (`<input type="reset"/>`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
