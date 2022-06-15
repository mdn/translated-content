---
title: window.onbeforeunload
slug: conflicting/Web/API/Window/beforeunload_event
translation_of: Web/API/WindowEventHandlers/onbeforeunload
original_slug: Web/API/WindowEventHandlers/onbeforeunload
---
## Résumé

Le gestionnaire d'événement **`WindowEventHandlers.onbeforeunload`** contient le code exécuté lorsque l'évènement {{event("beforeunload")}} est envoyé. Cet événement se déclenche lorsque la fenêtre est sur le point de recharger ses ressources.

## Syntaxe

```html
<element beforeunload="funcRef(event);" />
```

```html
<script type="text/javascript">
	window.onbeforeunload = funcRef
</script>
```

- funcRef : Référence à une fonction appelée lorsque l'évènement se déclenche

## Exemple

```js
window.onbeforeunload = function (e) {
  var e = e || window.event;

  // For IE and Firefox
  if (e) {
    e.returnValue = 'Any string';
  }

  // For Safari
  return 'Any string';
};
```

## Propriétés de l'objet **event**

    returnValue

- Applique ou récupère la valeur de retour de l'évènement.

## Spécification

L'évènement 'onbeforeunload' a été introduit par Microsoft dans IE4 et s'est généralisé dans tous les navigateurs.

[MSDN—onbeforeunload Event](http://msdn.microsoft.com/en-us/library/ms536907%28VS.85%29.aspx)
