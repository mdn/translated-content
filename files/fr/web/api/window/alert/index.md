---
title: Window.alert()
slug: Web/API/Window/alert
translation_of: Web/API/Window/alert
browser-compat: api.Window.alert
---
{{APIRef}}

`window.alert()` indique au navigateur d'afficher une boîte de dialogue avec un message optionnel, et d'attendre que la personne ferme cette boîte de dialogue.

Sous certaines conditions, par exemple au changement d'onglet, le navigateur pourra ne pas afficher la boîte de dialogue ou ne pas attendre que la personne la ferme.

## Syntaxe

```js
alert()
alert(message)
```

### Paramètres

- `message` {{optional_inline}}
  - : Une chaîne de caractères qu'on souhaite afficher dans la boîte de dialogue. Si la valeur fournie est un objet, elle sera convertie en chaîne de caractères puis affichée.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

```js
window.alert("Hello world!");
alert("Hello world!");
```

produiront tous les deux ce qui suit&nbsp;:

![](alerthelloworld.png)

## Notes

Les boîtes de dialogue créées avec `alert()` ne doivent pas nécessiter de réponse de la part de l'utilisatrice ou de l'utilisateur, en dehors de l'acquittement du message.

Ces boîtes de dialogue sont des fenêtres modales qui empêchent d'accéder au reste de l'interface utilisateur du programme, à moins que la boîte de dialogue soit fermée. Aussi, il ne faut pas abuser de cette fonction.

Une autre méthode consiste à utiliser l'élément [`<dialog>`](/fr/docs/Web/HTML/Element/dialog) afin d'afficher des alertes.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<dialog>`](/fr/docs/Web/HTML/Element/dialog)
- [`confirm`](/fr/docs/Web/API/Window/confirm)
- [`prompt`](/fr/docs/Web/API/Window/prompt)
