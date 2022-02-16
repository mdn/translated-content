---
title: Navigator.getGamepads()
slug: Web/API/Navigator/getGamepads
translation_of: Web/API/Navigator/getGamepads
---
{{ APIRef("Navigator") }}{{SeeCompatTable}}

La méthode **`Navigator.getGamepads()`** renvoie un tableau d'objets {{ domxref("Gamepad") }}, un par contrôleur connecté à la machine.

Des éléments dans le tableau peuvent être `null` si un contrôleur est déconnecté durant la session, ainsi les autres restants gardent le même indice.

## Syntaxe

     var arrayGP = navigator.getGamepads();

## Exemple

```js
window.addEventListener("gamepadconnected", function(e) {
  var gp = navigator.getGamepads()[0];
  console.log("Contrôleur n°%d connecté : %s. %d boutons, %d axes.",
  gp.index, gp.id,
  gp.buttons.length, gp.axes.length);
});
```

## Spécifications

| Spécification                                                                    | Statut                       | Commentaire          |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('Gamepad', '', 'The Gamepad API specification')}} | {{Spec2('Gamepad')}} | Première définition. |

## Compatibilité des navigateurs

{{Compat("api.Navigator.getGamepads")}}

## Voir aussi

- [Utiliser l'API Gamepad](/fr/docs/Web/Guide/API/Gamepad)
- [L'API Gamepad](/fr/docs/Web/API/Gamepad_API)
