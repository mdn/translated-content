---
title: element.onkeyup
slug: Web/API/Element/keyup_event
---

{{ ApiRef() }}

### Résumé

La propriété **onkeyup** renvoi le gestionnaire d'évènements onKeyUp de l'élément courant.

### Syntaxe

code de gestion de l'évènement = element.onkeyup

### Exemple

```html
<input type="text" onKeyUp="cleRelachee(event)" />
<script>
  function cleRelachee(evt) {
    alert(evt.keyCode);
  }
</script>
```

### Notes

L'évènement `keyup` se déclenche lorsque qu'une touche du clavier qui a été pressée est relâchée.

### Voir aussi

[onkeypress](/fr/DOM/element.onkeypress) [onkeydown](/fr/DOM/element.onkeydown)

### Spécification

Ne fait partie d'aucune spécification.
